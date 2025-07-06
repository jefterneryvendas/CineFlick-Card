/* VimeoPlayer - v4.41.10 - 2025-07-02 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    d as t,
    a as n,
    i,
    s as o,
    b as r,
    C as a,
    c as l,
    e as s,
    f as c,
    u as d,
    L as u,
    g as _,
    h as p,
    x as m,
    j as v,
    k as f,
    t as h,
    l as E,
    V as g,
    m as b,
    T as C,
    n as T,
    r as y,
    o as L,
    P as A,
    G as S,
    p as I,
    q as O,
    v as P,
    w as R,
    E as N,
    y as D,
    z as w,
    A as k,
    B as M,
    D as V,
    Q as B,
    S as x,
    F as U,
    H,
    I as F,
    R as G,
    J as W,
    K as Y,
    M as $,
    N as K,
    O as q,
    U as z,
    W as j,
    X,
    Y as Z,
    Z as J,
    $ as Q,
    a0 as ee,
    a1 as te,
    a2 as ne,
    a3 as ie,
    a4 as oe,
    a5 as re,
    a6 as ae,
    a7 as le,
    a8 as se,
    a9 as ce,
    aa as de,
    ab as ue,
    ac as _e,
    ad as pe,
    ae as me,
    af as ve,
    ag as fe,
    ah as he,
    ai as Ee,
    aj as ge,
    ak as be,
    al as Ce,
    am as Te,
    an as ye,
    ao as Le,
    ap as Ae,
    aq as Se,
    ar as Ie,
    as as Oe,
    at as Pe,
    au as Re,
    av as Ne,
    aw as De,
    ax as we,
    ay as ke,
    az as Me,
    aA as Ve,
    aB as Be,
    aC as xe,
    aD as Ue,
    aE as He,
    aF as Fe,
    aG as Ge,
    aH as We,
    aI as Ye,
    aJ as $e,
    aK as Ke,
    aL as qe,
    aM as ze,
    aN as je,
    aO as Xe,
    aP as Ze,
    aQ as Je,
    aR as Qe,
    aS as et,
    aT as tt,
    aU as nt,
    aV as it,
    aW as ot,
    aX as rt,
    aY as at,
    aZ as lt,
    a_ as st,
    a$ as ct,
    b0 as dt,
    b1 as ut,
    b2 as _t,
    b3 as pt,
    b4 as mt,
    b5 as vt
} from "./vendor.module.js";
export {
    a8 as BigScreen, b5 as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
const ft = Symbol("_spatialUnsupported"),
    ht = Symbol("_spatialFailure"),
    Et = "vimeo-logo",
    gt = "video-title",
    bt = "video-byline",
    Ct = "video-portrait",
    Tt = "chapter-share-base",
    yt = "anybody",
    Lt = "nobody",
    At = "password",
    St = "disable",
    It = "ptv",
    Ot = "unlisted",
    Pt = {
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
    Rt = Symbol("_seek"),
    Nt = Symbol("_changeVolume"),
    Dt = Symbol("_changeMuted"),
    wt = Symbol("_showOverlay"),
    kt = Symbol("_reset"),
    Mt = Symbol("_changeLoop"),
    Vt = Symbol("_changeQuality"),
    Bt = Symbol("_openVimeo"),
    xt = Symbol("_changeColor"),
    Ut = Symbol("_disableVolume"),
    Ht = Symbol("_enableVolume"),
    Ft = Symbol("_disableCaptions"),
    Gt = Symbol("_enableCaptions"),
    Wt = Symbol("_forceFullscreen"),
    Yt = Symbol("_turnCaptionsOn"),
    $t = Symbol("_turnCaptionsOff"),
    Kt = Symbol("_changeCaptionsStyles"),
    qt = Symbol("_resetCaptionsStyles"),
    zt = Symbol("_toggleNativeControls"),
    jt = Symbol("_showOutro"),
    Xt = Symbol("_hideOutro"),
    Zt = Symbol("_setControlsVisibility"),
    Jt = Symbol("_overrideControlbarBehavior"),
    Qt = Symbol("_activatePictureInPicture"),
    en = Symbol("_deactivatePictureInPicture"),
    tn = Symbol("_attachSpatialPlaybackEvents"),
    nn = Symbol("_revealSpatialControls"),
    on = Symbol("_setTime"),
    rn = Symbol("_addCard"),
    an = Symbol("_removeCard"),
    ln = Symbol("_changePlaybackRate"),
    sn = Symbol("_destroy"),
    cn = Symbol("_changeAudioTrack"),
    dn = Symbol("_requestCompleteLiveSubtitles"),
    un = Symbol("_closeRemoteComponent"),
    _n = Symbol("_updateLiveSubtitleRequests"),
    pn = Symbol("_showVideoThumbnail"),
    mn = Symbol("_hideVideoThumbnail"),
    vn = Symbol("_showLocalAccessGate"),
    fn = Symbol("_error"),
    hn = Symbol("_playRejected"),
    En = Symbol("_playResolved"),
    gn = Symbol("_paused"),
    bn = Symbol("_pausedForAd"),
    Cn = Symbol("_resumedAfterAd"),
    Tn = Symbol("_ended"),
    yn = Symbol("_volumeChanged"),
    Ln = Symbol("_mutedChanged"),
    An = Symbol("_qualityChanged"),
    Sn = Symbol("_targetTimeReached"),
    In = Symbol("_firstTimeUpdate"),
    On = Symbol("_playbackRateChanged"),
    Pn = Symbol("_nudgeAttempted"),
    Rn = Symbol("_showNudgeNotification"),
    Nn = Symbol("_nudgeEnded"),
    Dn = Symbol("_fragmentChanged"),
    wn = Symbol("_fullscreenButtonPressed"),
    kn = Symbol("_pauseButtonPressed"),
    Mn = Symbol("_playButtonPressed"),
    Vn = Symbol("_prefsButtonPressed"),
    Bn = Symbol("_ccButtonPressed"),
    xn = Symbol("_chapterSeekAttempted"),
    Un = Symbol("_chapterSeek"),
    Hn = Symbol("_chapterChanged"),
    Fn = Symbol("_scrubbingStarted"),
    Gn = Symbol("_scrubbingEnded"),
    Wn = Symbol("_controlBarVisibilityChanged"),
    Yn = Symbol("_toastVisibilityChanged"),
    $n = Symbol("_sidedockVisibilityChanged"),
    Kn = Symbol("_menuVisibilityChanged"),
    qn = Symbol("_captionsChanged"),
    zn = Symbol("_cuePointAdded"),
    jn = Symbol("_cuePointRemoved"),
    Xn = Symbol("_stereoscopicButtonPressed"),
    Zn = Symbol("_menuPanelOpened"),
    Jn = Symbol("_badgePressed"),
    Qn = Symbol("_willEnterFullscreen"),
    ei = Symbol("_didEnterFullscreen"),
    ti = Symbol("_willExitFullscreen"),
    ni = Symbol("_didExitFullscreen"),
    ii = Symbol("_likeButtonPressed"),
    oi = Symbol("_watchLaterButtonPressed"),
    ri = Symbol("_shareButtonPressed"),
    ai = Symbol("_embedButtonPressed"),
    li = Symbol("_vodButtonPressed"),
    si = Symbol("_collectionsButtonPressed"),
    ci = Symbol("_followButtonPressed"),
    di = Symbol("_overlayOpened"),
    ui = Symbol("_overlayClosed"),
    _i = Symbol("_facebookButtonPressed"),
    pi = Symbol("_twitterButtonPressed"),
    mi = Symbol("_tumblrButtonPressed"),
    vi = Symbol("_emailButtonPressed"),
    fi = Symbol("_popupOpened"),
    hi = Symbol("_debugButtonPressed"),
    Ei = Symbol("_popupClosed"),
    gi = Symbol("_showAndroidVRDeepLink"),
    bi = Symbol("_debugDataChange"),
    Ci = Symbol("_mousedOut"),
    Ti = Symbol("_mousedOver"),
    yi = Symbol("_mouseTimeout"),
    Li = Symbol("_liked"),
    Ai = Symbol("_unliked"),
    Si = Symbol("_addedToWatchLater"),
    Ii = Symbol("_removedFromWatchLater"),
    Oi = Symbol("_userLogIn"),
    Pi = Symbol("_userLoggedIn"),
    Ri = Symbol("_userLoggedOut"),
    Ni = Symbol("_loginFailure"),
    Di = Symbol("_configChanged"),
    wi = Symbol("_liveEventSettingsChanged"),
    ki = Symbol("_passwordUnlocked"),
    Mi = Symbol("_privateUnlocked"),
    Vi = Symbol("_enteredTinyMode"),
    Bi = Symbol("_enteredMiniMode"),
    xi = Symbol("_enteredNormalMode"),
    Ui = Symbol("_assetUrlsRefreshed"),
    Hi = Symbol("_embedSettingChanged"),
    Fi = Symbol("_createInteractiveChanged"),
    Gi = Symbol("_ottMetadataSet"),
    Wi = Symbol("_outroDisplayed"),
    Yi = Symbol("_outroHidden"),
    $i = Symbol("_outroVideoPressed"),
    Ki = Symbol("_becameActive"),
    qi = Symbol("_becameInactive"),
    zi = Symbol("_loadVideo"),
    ji = Symbol("_swapVideo"),
    Xi = Symbol("_outroLinkPressed"),
    Zi = Symbol("_followed"),
    Ji = Symbol("_unfollowed"),
    Qi = Symbol("_outroImagePressed"),
    eo = Symbol("_outroCtaPressed"),
    to = Symbol("_cardDisplayed"),
    no = Symbol("_cardPressed"),
    io = Symbol("_spaceChanged"),
    oo = Symbol("_displayContextChanged"),
    ro = Symbol("_videoModuleReady"),
    ao = Symbol("_statsModuleReady"),
    lo = Symbol("_apiModuleReady"),
    so = Symbol("_ready"),
    co = Symbol("_notificationHidden"),
    uo = Symbol("_airPlayAvailable"),
    _o = Symbol("_airPlayNotAvailable"),
    po = Symbol("_airPlayActivated"),
    mo = Symbol("_airPlayDeactivated"),
    vo = Symbol("_airPlayButtonPressed"),
    fo = Symbol("_adBuffering"),
    ho = Symbol("_adComplete"),
    Eo = Symbol("_adClicked"),
    go = Symbol("_adError"),
    bo = Symbol("_adPaused"),
    Co = Symbol("_adResumed"),
    To = Symbol("_adStarted"),
    yo = Symbol("_adSkipped"),
    Lo = Symbol("_allAdsCompleted"),
    Ao = Symbol("_logMetric"),
    So = Symbol("_interactiveHotspotClicked"),
    Io = Symbol("_interactiveOverlayPanelClicked"),
    Oo = Symbol("_interactiveMarkerClicked"),
    Po = Symbol("_interactiveSeekCall"),
    Ro = Symbol("_transcriptChanged"),
    No = Symbol("_rightContentAreaVisibilityChange"),
    Do = Symbol("_rightContentAreaEnabled"),
    wo = Symbol("_rightContentAreaDisabled"),
    ko = Symbol("_transcriptNavActive"),
    Mo = Symbol("_transcriptSessionStarted"),
    Vo = Symbol("_transcriptKeyPressed"),
    Bo = Symbol("_aiWidgetKeyPressed"),
    xo = Symbol("_qoeSurveyPresented"),
    Uo = Symbol("_parentUrlAvailable"),
    Ho = Symbol("_liveEventSafeToPlay"),
    Fo = Symbol("_startTimeUpdated"),
    Go = Symbol("_endTimeUpdated"),
    Wo = Symbol("_remoteComponentMounted"),
    Yo = Symbol("_accessGateOpened"),
    $o = Symbol("_accessGateClosed"),
    Ko = Symbol("_eventedStoreCreated"),
    qo = Symbol("_outroDataReceived"),
    zo = Symbol("_videoThumbnailLoadComplete"),
    jo = Symbol("_privateLoginStatusUpdated"),
    Xo = Symbol("_frameCaptured");
let Zo = {};

function Jo(e = "", t = {}) {
    var n;
    if (null != (n = Zo.en) && n[e] && (e = Zo.en[e]), Object.keys(t).forEach((n => {
            e = e.replace(new RegExp(`{${n}}`, "g"), t[n])
        })), e.match(/\{\w+}/)) throw new Error("Missing token definition.");
    return e
}

function Qo(e) {
    let t, n, i;
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? (i = Math.floor(e / 1e3), t = Math.round(e % 1e3 / 100), i + "." + t + "mil") : (n = Math.floor(e / 1e6), t = Math.round(e % 1e6 / 1e5), n + "." + t + "mi")
}

function er(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}

function tr(e) {
    return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, ((e, t) => String.fromCharCode("0x" + t)))
}
const nr = function(t) {
        const n = i => i.length >= t.length ? t.apply(this, i) : (...t) => n([].concat(e(i), t));
        return n([])
    }(((e, t) => Object.keys(e).every((n => e[n] === t[n])))),
    ir = (e = []) => ({
        get: t => t ? e.find(nr(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(nr(t)), 1).pop()
    });

function or(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function rr(e) {
    try {
        return new URL(e).origin
    } catch (ke) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function ar({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        l = n - i * a,
        s = i - n / a;
    if (l > 0 && l < o || s > 0 && s < o) {
        const e = n / (n - l),
            t = i / (i - s);
        r = _r(Math.max(e, t), 3)
    }
    return {
        extraWidth: l,
        extraHeight: s,
        scaleFactor: r
    }
}

function lr(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function sr(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let l = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        s = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${s},top=${l},${c}`)
}

function cr(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work))|(videoji|videoshipinurl)\.(hk|cn))(?=$|\/)/.test(e)
    }(e) ? rr(e) : ""
}

function dr(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)|(videoji|videoshipinurl)\.(hk|cn))\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = ur(i),
        a = t(window.location.search),
        l = t(`${i}`.split("?")[1]),
        s = Object.assign(a, l, o);
    return n(`${e}/video/${r}/config`, s)
}

function ur(e) {
    if (er(e)) return parseInt(e, 10);
    const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
    if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
    return parseInt(t[2], 10)
}

function _r(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function pr(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function mr(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) mr(e, i, t[i])
}

function vr(e, t, n) {
    n.forEach((n => {
        e(n, ((...e) => {
            t.apply(void 0, [n].concat(e))
        }))
    }))
}

function fr(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function hr(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce(((e, t) => (...n) => e(t.apply(void 0, n))))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (; null != (n = e) && n.parentElement && !pr(e, t);) {
        var n;
        e = e.parentElement
    }
    return pr(e, t) ? e : null
}));
let Er = 0;

function gr(e = "p") {
    return `${e}${++Er}`
}
const br = {
        _seek: gr(),
        _play: gr(),
        _pause: gr(),
        _playbackRateChange: gr()
    },
    Cr = "done",
    Tr = "started",
    yr = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    Lr = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9,
        geoBlocked: 14,
        drmPlaybackUnavailable: 15
    },
    Ar = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        TOAST_VISIBILITY_CHANGED: "toastvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DURATION_CHANGE: "durationchange",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        REMOTE_PLAYBACK_AVAILABILITY_CHANGE: "remoteplaybackavailabilitychange",
        REMOTE_PLAYBACK_CONNECTING: "remoteplaybackconnecting",
        REMOTE_PLAYBACK_CONNECT: "remoteplaybackconnect",
        REMOTE_PLAYBACK_DISCONNECT: "remoteplaybackdisconnect",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        PLAYER_LOGIN_SUCCESSFUL: "playerLoginSuccessful",
        PLAYER_LOGIN_FAILED: "playerLoginFailed",
        COMPONENT_VISIBILITY_CHANGE: "componentVisibilityChange",
        APP_BREAKPOINT_CHANGE: "appBreakpointChange",
        LOAD_VIDEO: "loadVideo"
    },
    Sr = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    Ir = "4.41.10",
    Or = "PROD",
    Pr = !0 === o.iOS,
    Rr = "chapter",
    Nr = ["t", "start", "at"],
    Dr = "vimeo_",
    wr = `${Dr}t_`,
    kr = "preact-menu",
    Mr = "one",
    Vr = "two",
    Br = "three",
    xr = "four",
    Ur = {
        [Mr]: "000000",
        [Vr]: "00adef",
        [Br]: "ffffff",
        [xr]: "000000"
    },
    Hr = {
        [Mr]: "color_one",
        [Vr]: "color_two",
        [Br]: "color_three",
        [xr]: "color_four"
    },
    Fr = {
        [Mr]: "colorOne",
        [Vr]: "colorTwo",
        [Br]: "colorThree",
        [xr]: "colorFour"
    };
var Gr = function(e) {
    return e.POPUP = "popup", e.ON_SITE = "onsite", e
}(Gr || {});
const Wr = 12e3,
    Yr = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144];
let $r = function(e) {
        return e.VP_PLAYER_UI_OVERLAYS = "vp-player-ui-overlays", e.VP_PLAYER_UI_CONTAINER = "vp-player-ui-container", e.VP_VIDEO = "vp-video", e.VP_VIDEO_WRAPPER = "vp-video-wrapper", e.VP_TELECINE = "vp-telecine", e.VP_CONTROLS = "vp-controls", e.VP_CAST_BUTTON = "vp-cast-button", e.VP_CAPTIONS = "vp-captions", e.VP_MENU = "vp-menu", e.VP_SIDEDOCK = "vp-sidedock", e.VP_TITLE = "vp-title", e.VP_TARGET = "vp-target", e.VP_PREVIEW = "vp-preview", e.COMPASS_WRAPPER = "compass-wrapper", e.STEREOSCOPIC = "stereoscopic", e.CC = "cc", e.CUSTOM_LOGO = "custom-logo", e.FULLSCREEN = "fullscreen", e.THUMB = "thumb", e.LIKE_ICON = "like-icon", e.WATCH_LATER_ICON = "watch-later-icon", e.FILL = "fill", e.SHOWFOCUS = "showfocus", e.ADS_WRAPPER = "vp-ads-wrapper", e.ADS_TAG = "vp-ads-tag", e.ADS_COUNTDOWN = "vp-ads-countdown", e.VP_SPIN = "vp-spin", e
    }({}),
    Kr = function(e) {
        return e.VP_OUTRO_WRAPPER = "vp-outro-wrapper", e.VP_PREFS = "vp-prefs", e.VP_PROGRESS = "vp-progress", e.PIP = "pip", e.VOLUME = "volume", e.VOD_BUTTON = "vod-button", e.LIKE_BUTTON = "like-button", e.WATCH_LATER_BUTTON = "watch-later-button", e
    }({}),
    qr = function(e) {
        return e.EXCLUDE_GLOBAL_BUTTON_STYLES = "exclude-global-button-styles", e.ENTER_FULLSCREEN_ICON = "enter-fullscreen-icon", e.EXIT_FULLSCREEN_ICON = "exit-fullscreen-icon", e.CONTENT_AREA_BACKGROUND_CONTAINER = "vp-content-area-background", e.REMOTE_ACCESS_GATE = "vp-remote-access-gate", e.SCRUBBING = "scrubbing", e
    }({}),
    zr = function(e) {
        return e.RIGHT_CONTENT_AREA = "right-content-area", e.NEW_WINDOW_DESCRIPTION = "new-window", e.VP_OVERLAY_LABELLEDBY = "overlay-labelledby", e
    }({}),
    jr = function(e) {
        return e.TRANSCRIPT_LIST = "transcript-list", e.TRANSCRIPT_CUE_PREFIX = "transcript-cue", e.TRANSCRIPT_MENU = "transcript-menu", e.TRANSCRIPT_VIEWER = "transcript-viewer", e.TRANSCRIPT_USAGE_DESCRIPTION = "transcript-usage-description", e
    }({}),
    Xr = function(e) {
        return e.AI_WIDGET_ID = "ai-widget", e
    }({}),
    Zr = function(e) {
        return e.QOE_SURVEY_TEXT = "qoe-survey-text", e.REPLAY = "replay", e.BROADCAST_OVER = "broadcast-over", e.FRAME_CAPTURED = "frame-captured", e
    }({}),
    Jr = function(e) {
        return e.TITLE_TEXT = "title-text", e
    }({}),
    Qr = function(e) {
        return e.TEXT_TRACK_ID_PREFIX = "telecine-track-", e
    }({}),
    ea = function(e) {
        return e.COLLAPSE = "collapse-control-bar-button", e.CC = "cc-control-bar-button", e.PREFS = "prefs-control-bar-button", e.CHAPTERS = "chapters-control-bar-button", e.TRANSCRIPT = "transcript-control-bar-button", e.FULLSCREEN = "fullscreen-control-bar-button", e.PIP = "pip-control-bar-button", e
    }({}),
    ta = function(e) {
        return e.FONT_FAMILY_ACCORDION = "font-family-accordion", e.EDGE_STYLE_ACCORDION = "edge-style-accordion", e.VP_CC_FONT_COLOR_LABEL = "vp-cc-font-color-label", e.VP_CC_BACKGROUND_COLOR_LABEL = "vp-cc-background-color-label", e.VP_CC_BACKGROUND_OPACITY_LABEL = "vp-cc-background-opacity-label", e.VP_CC_FONT_SIZE_LABEL = "vp-cc-font-size-label", e.VP_CC_FONT_OPACITY_LABEL = "vp-cc-font-opacity-label", e.VP_CC_FONT_EDGE_STYLE_LABEL = "vp-cc-font-edge-style-label", e.VP_CC_WINDOW_OPACITY_LABEL = "vp-cc-window-opacity-label", e.VP_CC_WINDOW_COLOR_LABEL = "vp-cc-window-color-label", e
    }({}),
    na = function(e) {
        return e.SEARCH_INPUT = "search-input", e
    }({}),
    ia = function(e) {
        return e.CONTENT_AREA_SIBLING_ELIGIBLE = "data-content-area-sibling-eligible", e
    }({}),
    oa = function(e) {
        return e.NOT_SUPPORTED = "not-supported", e.DRM_FAILURE = "drm-failure", e.DECODE = "decode", e.NETWORK = "network", e.UNKNOWN = "unknown", e.TELECINE_FILE_ERROR = "telecine-file-error", e.TELECINE_DOWNLOAD_ERROR = "telecine-download-error", e.MEDIA_URL_EXPIRED = "media-url-expired", e.SCANNER_ERROR = "scanner-error", e.ERROR = "error", e.LOAD_VIDEO_VIA_CONFIG = "load-video-via-config-error", e.LOCAL_ACCESS_GATE_ERROR = "local-access-gate-error", e
    }({});
const ra = () => ({
        type: oa.NETWORK,
        title: "Erro de rede",
        message: 'Um probleminha na rede interrompeu a reprodução. Por favor <a href="javascript:window.location.reload()" rel="noopener">recarregue o player</a> e tente novamente.',
        final: !0
    }),
    aa = () => ({
        type: oa.ERROR,
        title: "Erro do player",
        message: "O player está com problemas. Tentaremos voltar a funcionar assim que possível.",
        modal: !0,
        final: !0
    });
var la = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        type: oa.NOT_SUPPORTED,
        title: "Ambiente de visualização não-compatível",
        message: `Seu sistema está tendo problemas para reproduzir este vídeo. Para mais informações, consulte nossa <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="${zr.NEW_WINDOW_DESCRIPTION}">Central de Ajuda</a>.`,
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        type: oa.DRM_FAILURE,
        title: "Questão de direitos",
        message: "Estamos tendo problemas para autorizar a reprodução deste vídeo. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        type: oa.NOT_SUPPORTED,
        title: "Erro do player",
        message: "O player está com problemas. Tentaremos voltar a funcionar assim que possível.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        type: oa.NOT_SUPPORTED,
        final: !1
    }),
    MediaDecodeError: () => ({
        type: oa.DECODE,
        final: !1
    }),
    MediaNetworkError: ra,
    MediaUnknownError: () => ({
        type: oa.UNKNOWN,
        title: "Erro do navegador",
        message: 'Estamos tendo problemas na reprodução deste arquivo de vídeo. Por favor <a href="javascript:window.location.reload()" rel="noopener">recarregue o player</a> e tente novamente.',
        final: !0
    }),
    FileError: () => ({
        type: oa.TELECINE_FILE_ERROR,
        final: !1
    }),
    DownloadError: () => ({
        type: oa.TELECINE_DOWNLOAD_ERROR,
        final: !1
    }),
    MediaUrlExpired: () => ({
        type: oa.MEDIA_URL_EXPIRED,
        title: "Erro de reprodução",
        message: 'Estamos tendo problemas para reproduzir este vídeo. Por favo <a href="javascript:window.location.reload()" rel="noopener">recarregue o player</a> e tente novamente.',
        final: !1
    }),
    ScannerError: () => ({
        type: oa.SCANNER_ERROR,
        final: !1
    }),
    PlayerError: aa
});
const sa = e => ({
        onClick: e,
        onKeyDown: t => {
            "Enter" !== t.key && " " !== t.key || e(t)
        }
    }),
    ca = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (ke) {
                return Promise.reject(ke)
            }
        }
    }((function(e) {
        return o.clipboardAPI ? function(t, n) {
            try {
                var i = function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(navigator.clipboard.writeText(e), (function() {
                    return !0
                }))
            } catch (ke) {
                return n()
            }
            return i && i.then ? i.then(void 0, n) : i
        }(0, (function(t) {
            return da(e)
        })) : da(e)
    }));

function da(e) {
    const t = document.createElement("textarea");
    t.value = e, document.body.appendChild(t), t.select();
    const n = document.execCommand("copy");
    return document.body.removeChild(t), n
}
const ua = (e, t, n) => {
    var i;
    return null !== (i = t[n]) && void 0 !== i ? i : e[n]
};

function _a(e, t) {
    return !e || 0 === e.length || -1 !== e.indexOf(t)
}
const pa = e => [Lr.main, Lr.privateUnlocked].includes(e),
    ma = (e, t) => e && (e.contains(t.target) || e === t.target),
    va = (...e) => e.reduce(((e, t) => t ? e ? `${e} ${t}` : t : e), null),
    fa = (e = [], t) => e.map((e => r(r({}, e), {}, {
        active: `${e.id}` === t
    }))),
    ha = e => {
        let t = 0,
            n = 0;
        if (e) {
            const {
                left: i,
                right: o
            } = or(e), {
                borderLeftWidth: r,
                borderRightWidth: a
            } = window.getComputedStyle(e, "");
            t = i + parseInt(r, 10), n = o - parseInt(a, 10)
        }
        return {
            leftOffsetValue: t,
            rightOffsetValue: n
        }
    },
    Ea = (e, t) => Math.max(e - t.startTime, 0),
    ga = (e, t) => {
        const {
            startTime: n,
            endTime: i,
            duration: o
        } = t;
        return e < n ? 0 : e > i ? 1 : Ea(e, t) / o
    },
    ba = (e, t = !0) => {
        const n = 100 * (t ? _r(e, 2) : e);
        return `${Math.max(Math.min(n,100),0)}%`
    },
    Ca = (e, t) => {
        const {
            startTime: n,
            duration: i
        } = t;
        return n + i * e
    },
    Ta = (e, t) => {
        const {
            duration: n
        } = t;
        return n * e || 0
    },
    ya = (e, t, n) => (n - t) * e + t,
    La = (e, t, n) => (e - t) / (n - t),
    Aa = (e, t) => e.filter((e => {
        const n = e.startTime >= t.startTime && e.startTime <= t.endTime,
            i = e.endTime >= t.startTime && e.endTime <= t.endTime,
            o = e.startTime < t.startTime && e.endTime >= t.endTime;
        return n || i || o
    }));
let Sa = function(e) {
    return e.EMPTY = "empty", e.SHARE = "share", e.HELP = "help", e.ERROR = "error", e.SPATIAL_REDIRECT = "spatial-redirect", e.NOT_SUPPORTED = "not-supported", e.INTERACTIVE = "interactive", e
}({});
const Ia = e => e === Sa.INTERACTIVE || e === Sa.EMPTY,
    Oa = e => (e => void 0 !== e.settings)(e) ? !e.settings.background && 0 !== e.settings.controls : !e.background && e.controls,
    Pa = e => (Date.now() - e) / 1e3,
    Ra = e => Math.round(1e3 * e),
    Na = (e, t, n) => {
        const i = String(e);
        return new Array(t - i.length + 1).join(n || "0") + i
    },
    Da = (e, t) => {
        const n = Math.ceil(e) < 0;
        e = Math.abs(e);
        var i = Math.floor(e / 3600 % 60),
            o = Math.floor(e / 60 % 60);
        if (e = Math.floor(e % 60), t) {
            var r = e + " second" + (1 === e ? "" : "s");
            return o > 0 && (r = o + " minute" + (1 === o ? "" : "s") + ", " + r), i > 0 && (r = i + " hour" + (1 === i ? "" : "s") + ", " + r), r
        }
        return (n ? "-" : "") + (i > 0 ? i + ":" : "") + Na(o, 2) + ":" + Na(e, 2)
    };
let wa = function(e) {
        return e.ONE = "--color-one", e.TWO = "--color-two", e.THREE = "--color-three", e.FOUR = "--color-four", e.ONE_MONOCHROME = "--color-one-monochrome", e.TWO_MONOCHROME = "--color-two-monochrome", e.ONE_OPACITY_NINETY = "--color-one-opacity-ninety", e.TWO_OPACITY_NINETY = "--color-two-opacity-ninety", e.THREE_OPACITY_TWENTY = "--color-three-opacity-twenty", e.ONE_MONOCHROME_OPACITY_TWENTY = "--color-one-monochrome-opacity-twenty", e.TWO_MONOCHROME_OPACITY_TWENTY = "--color-two-monochrome-opacity-twenty", e.ONE_MONOCHROME_OPACITY_SIXTY = "--color-one-monochrome-opacity-sixty", e.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-one-monochrome-opacity-twenty-eighty", e.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-two-monochrome-opacity-twenty-eighty", e.TWO_COMPLEMENT = "--color-two-complement", e
    }({}),
    ka = function(e) {
        return e[e.ZERO = 0] = "ZERO", e[e.TWENTY = .2] = "TWENTY", e[e.TWENTY_FIVE = .25] = "TWENTY_FIVE", e[e.FIFTY = .5] = "FIFTY", e[e.SIXTY = .6] = "SIXTY", e[e.SEVENTY_FIVE = .75] = "SEVENTY_FIVE", e[e.EIGHTY = .8] = "EIGHTY", e[e.NINETY = .9] = "NINETY", e[e.ONE_HUNDRED = 1] = "ONE_HUNDRED", e
    }({}),
    Ma = function(e) {
        return e.LIGHT = "light", e.DARK = "dark", e
    }({});
const Va = (e = "") => 4 === (e = e.replace("#", "")).length || 8 === e.length,
    Ba = (e, t, n) => {
        let i;
        try {
            i = new a(e)
        } catch (r) {
            return ""
        }
        null != n && n.complement && (i = i.complement);
        const o = (e => a.white.contrast(e).ratio >= 4.5 ? Ma.DARK : Ma.LIGHT)(i);
        return null != n && n.monochrome && (i = l(o === Ma.DARK ? a.white : a.black)), null == t || null != n && n.forceHexAlpha && Va(e) ? Va(e) ? i.hexWithAlpha : i.hex : ("object" == typeof t && (t = t[o]), i.alpha = t, i.hexWithAlpha)
    },
    xa = e => e.map((([e, t]) => ((e, t) => e + ":" + t + ";")(e, t))).join("\n"),
    Ua = () => {};

function Ha(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Fa(e, t) {
    try {
        var n = e()
    } catch (ke) {
        return t(ke)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const Ga = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}((function(e) {
    return Fa(e, (function(e) {
        return Ha(new Promise((e => setTimeout(e, 1e3))), (function() {
            let t;
            if (e instanceof Error) {
                const n = e.message,
                    i = null == n ? void 0 : n.split(" ").find((e => e.includes("http")));
                t = new URL(i), t.searchParams.set("t", `${Date.now()}`)
            }
            return Fa((function() {
                return Ha(
                    import (t.href))
            }), (function() {
                throw e
            }))
        }))
    }))
}));
let Wa = function(e) {
        return e.CONNECTED = "CONNECTED", e.CONNECTING = "CONNECTING", e.NOT_CONNECTED = "NOT_CONNECTED", e.NOT_SETUP = "NOT_SETUP", e.NO_DEVICES_AVAILABLE = "NO_DEVICES_AVAILABLE", e.SETUP_DONE = "SETUP_DONE", e
    }({}),
    Ya = function(e) {
        return e.VimeoPlayer = "VimeoPlayer", e.BackgroundPlayer = "BackgroundPlayer", e.BarebonePlayer = "BarebonePlayer", e
    }({}),
    $a = function(e) {
        return e.NORMAL = "normal", e.MINI = "mini", e.TINY = "tiny", e
    }({}),
    Ka = function(e) {
        return e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR", e
    }({}),
    qa = function(e) {
        return e[e.HAVE_NOTHING = 0] = "HAVE_NOTHING", e[e.HAVE_METADATA = 1] = "HAVE_METADATA", e[e.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e[e.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e[e.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA", e
    }({}),
    za = function(e) {
        return e.FIELD_MARKERS = "markers", e.FIELD_CLIP_ID = "clip_id", e.FIELD_PROFILE_ID = "profile_id", e.FIELD_PLAYER_SIZE = "player_size", e.FIELD_DROPPED_FRAMES = "dropped_frames", e.FIELD_TOTAL_FRAMES = "total_frames", e.FIELD_BANDWIDTH = "bandwidth", e.FIELD_STREAMS = "streams", e.FIELD_FILES = "files", e.FIELD_VIDEO_DIMS = "video_dims", e.FIELD_MIN_BANDWIDTH = "min_bandwidth", e.FIELD_MAX_BANDWIDTH = "max_badwidth", e.FIELD_BUFFER_OCCUPANCY = "buffer_occupancy", e.FIELD_LIVE_LATENCY = "live_latency", e.FIELD_SCANNERS = "scanner", e.FIELD_VR_HEADSET = "vr_headset", e
    }({}),
    ja = function(e) {
        return e.PRIVACY_PUBLIC = "anybody", e.PRIVACY_NOBODY = "nobody", e.PRIVACY_FOLLOW = "contacts", e.PRIVACY_PASSWORD = "password", e.PRIVACY_USER = "users", e.PRIVACY_PURGATORY = "purgatory", e.PRIVACY_HIDE_FROM_VIMEO = "disable", e.PRIVACY_PAYTOVIEW = "ptv", e.PRIVACY_PAYTOVIEWEXTRA = "ptv_extra", e.PRIVACY_UNLISTED = "unlisted", e.PRIVACY_STOCK = "stock", e
    }({}),
    Xa = function(e) {
        return e.MEDIA_SOURCE_SCANNER = "MediaSourceScanner", e.HLS_LIVE_SCANNER = "HLSLiveScanner", e
    }({}),
    Za = function(e) {
        return e.PLAY = "play", e.PAUSE = "pause", e.REPLAY = "replay", e.TRAILER = "trailer", e
    }({}),
    Ja = function(e) {
        return e.FONT_SIZE = "fontSize", e.FONT_FAMILY = "fontFamily", e.FONT_OPACITY = "fontOpacity", e.COLOR = "color", e.EDGE_STYLE = "edgeStyle", e.BG_OPACITY = "bgOpacity", e.BG_COLOR = "bgColor", e.WINDOW_OPACITY = "windowOpacity", e.WINDOW_COLOR = "windowColor", e
    }({}),
    Qa = function(e) {
        return e.CCMenu = "c", e.PrefsMenu = "h", e.Transcript = "T", e
    }({}),
    el = function(e) {
        return e.SINGLE_VIDEO_VIEW_MANAGE = "single_video_view_manage", e.VIEWER_HOME = "viewer_home", e.EMBEDDED_PAGE = "embedded_page", e.CLIP_PAGE = "clip_page", e.LIVE_EVENT_SETTINGS_PAGE = "live_event_settings_page", e
    }({}),
    tl = function(e) {
        return e[e.CacheMiss = 0] = "CacheMiss", e[e.MidCacheHit = 1] = "MidCacheHit", e[e.EdgeCacheHit = 2] = "EdgeCacheHit", e
    }({});
const {
    REACHABLE: nl,
    UNREACHABLE: il
} = {
    REACHABLE: "reachable",
    UNREACHABLE: "unreachable"
}, {
    VIMEO_URL: ol,
    VIEWER_HOME_URL: rl,
    SVV_MANAGE_URL: al,
    CLIP_URL: ll,
    PROFILE_URL: sl,
    VOD_URL: cl,
    VOD_VIDEO_MANAGE_URL: dl,
    NO_DESTINATION: ul
} = {
    VIMEO_URL: "vimeoUrl",
    VIEWER_HOME_URL: "viewerHomeUrl",
    SVV_MANAGE_URL: "svvManageUrl",
    CLIP_URL: "clipUrl",
    PROFILE_URL: "profileUrl",
    VOD_URL: "vodUrl",
    VOD_VIDEO_MANAGE_URL: "vodVideoManageUrl",
    NO_DESTINATION: "noDestination"
}, _l = {
    [Et]: {
        viewer: {
            [Ot]: {
                [nl]: ol,
                [il]: rl
            },
            [At]: {
                [nl]: ol,
                [il]: rl
            },
            [St]: {
                [nl]: ol,
                [il]: ol
            },
            [Lt]: {
                [nl]: ol,
                [il]: rl
            },
            [yt]: {
                [nl]: ol,
                [il]: rl
            },
            [It]: {
                [nl]: ol,
                [il]: rl
            },
            privateMode: {
                [nl]: ol,
                [il]: rl
            }
        },
        creator: {
            [Ot]: {
                [nl]: ol,
                [il]: rl
            },
            [At]: {
                [nl]: ol,
                [il]: rl
            },
            [St]: {
                [nl]: ol,
                [il]: al
            },
            [Lt]: {
                [nl]: ol,
                [il]: rl
            },
            [yt]: {
                [nl]: ol,
                [il]: rl
            },
            [It]: {
                [nl]: ol,
                [il]: rl
            },
            privateMode: {
                [nl]: ol,
                [il]: rl
            }
        }
    },
    [gt]: {
        viewer: {
            [Ot]: rl,
            [At]: rl,
            [St]: sl,
            [Lt]: rl,
            [yt]: rl,
            [It]: cl,
            privateMode: ol
        },
        creator: {
            [Ot]: al,
            [At]: al,
            [St]: al,
            [Lt]: al,
            [yt]: al,
            [It]: dl,
            privateMode: al
        }
    },
    [Ct]: {
        viewer: {
            [Ot]: sl,
            [At]: sl,
            [St]: sl,
            [Lt]: sl,
            [yt]: sl,
            [It]: sl,
            privateMode: ol
        },
        creator: {
            [Ot]: sl,
            [At]: sl,
            [St]: sl,
            [Lt]: sl,
            [yt]: sl,
            [It]: dl,
            privateMode: al
        }
    },
    [bt]: {
        viewer: {
            [Ot]: sl,
            [At]: sl,
            [St]: sl,
            [Lt]: sl,
            [yt]: sl,
            [It]: sl,
            privateMode: ol
        },
        creator: {
            [Ot]: sl,
            [At]: sl,
            [St]: sl,
            [Lt]: sl,
            [yt]: sl,
            [It]: dl,
            privateMode: al
        }
    },
    [Tt]: {
        viewer: {
            [Ot]: rl,
            [At]: ul,
            [St]: ul,
            [Lt]: ul,
            [yt]: ll,
            [It]: cl,
            privateMode: ul
        },
        creator: {
            [Ot]: rl,
            [At]: ul,
            [St]: ul,
            [Lt]: ul,
            [yt]: ll,
            [It]: cl,
            privateMode: ul
        }
    }
};

function pl(e = {}) {
    const t = {
        selectDestination(e) {
            const n = _l[e];
            if (!n) return "";
            const i = t.isOwner ? n.creator : n.viewer;
            let o = t.isPrivateMode ? i.privateMode : i[t.videoPrivacy];
            return function(e) {
                return "object" == typeof e && (nl in e || il in e)
            }(o) && (o = t.isClipLinkUnreachable ? o[il] : o[nl]), o
        },
        get [ll]() {
            return Sl(t[ol], e)
        },
        get [rl]() {
            var n, i;
            return Ol(t[ol], null == (n = e.video) ? void 0 : n.id, null == (i = e.video) ? void 0 : i.unlisted_hash)
        },
        get [al]() {
            var n;
            return Il(t[ol], null == (n = e.video) ? void 0 : n.id)
        },
        get [ol]() {
            return `https://${e.vimeo_url}`
        },
        get [sl]() {
            var t;
            return null == (t = e.video) || null == (t = t.owner) ? void 0 : t.url
        },
        get [cl]() {
            var t;
            return null == (t = e.video) || null == (t = t.vod) ? void 0 : t.url
        },
        get [dl]() {
            var t;
            return `https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(t=t.vod)?void 0:t.id}/settings/basic`
        },
        get [ul]() {
            return ""
        },
        get videoPrivacy() {
            var t;
            return null == (t = e.video) ? void 0 : t.privacy
        },
        get isPrivateMode() {
            var t;
            return !(null == (t = e.user) || !t.private_mode_enabled)
        },
        get isOwner() {
            var t, n;
            return (null == (t = e.user) ? void 0 : t.id) === (null == (n = e.video) || null == (n = n.owner) ? void 0 : n.id)
        },
        get isClipLinkUnreachable() {
            var t, n, i;
            return 0 === (null == (t = e.embed) || null == (t = t.settings) ? void 0 : t.portrait) && 0 === (null == (n = e.embed) || null == (n = n.settings) ? void 0 : n.byline) && 0 === (null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.title)
        }
    };
    return t
}

function ml(e, t) {
    let n = "";
    const i = pl(t),
        o = i.selectDestination(e);
    return i[o] && (n = i[o]), n
}
const vl = /^(%20|\s)*(javascript|data)/im,
    fl = /[^\x20-\x7E]/gim,
    hl = /^([^:]+):/gm,
    El = [".", "/"];

function gl(e, t, n) {
    bl(e, t) || (e += ((e = "") => e.includes("?"))(e) ? `&${t}=` : `?${t}=`);
    const i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
    return e.replace(i, "$1" + t + "=" + n + "$2")
}

function bl(e, t) {
    return -1 !== (null == e ? void 0 : e.indexOf(`?${t}=`)) || -1 !== (null == e ? void 0 : e.indexOf(`&${t}=`))
}

function Cl(e) {
    return -1 !== e.indexOf("VideoController")
}

function Tl(e, t = window.location.href) {
    const n = pl(e),
        i = -1 !== e.embed.context.indexOf("ClipController"),
        o = function(e, t) {
            const n = Il(t),
                i = function(e) {
                    return `${e}/manage/showcases/`
                }(t);
            return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
        }(t, n.vimeoUrl),
        r = Cl(e.embed.context) && (-1 !== t.indexOf(n.viewerHomeUrl) || t === n.clipUrl);
    return function(e, t) {
        const n = function(e) {
                return `${e}/live/broadcaster/event/`
            }(t),
            i = function(e) {
                return `${e}/live/rtmp/event/`
            }(t);
        return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
    }(t, n.vimeoUrl) ? el.LIVE_EVENT_SETTINGS_PAGE : o ? el.SINGLE_VIDEO_VIEW_MANAGE : r ? el.VIEWER_HOME : i ? el.CLIP_PAGE : el.EMBEDDED_PAGE
}

function yl(e, t, n) {
    if (!e) return "";
    const [i] = e.split("#");
    return `${i}#t=${t}&end=${n}`
}
const Ll = e => {
        const t = e.match(hl);
        return null == t ? void 0 : t[0]
    },
    Al = e => e ? decodeURI(encodeURI((e => {
        e = e.trim();
        const t = Ll(e);
        return e && !t && (e = `https://${e}`), e
    })((e => {
        let t = e.replace(fl, "");
        if ((e => El.indexOf(e[0]) > -1)(t)) return t;
        const n = Ll(t);
        return n && vl.test(n) ? "" : t
    })(e)))) : null,
    Sl = (e, t) => {
        var n, i;
        const o = null == (n = t.video) ? void 0 : n.id,
            r = null == (i = t.video) ? void 0 : i.unlisted_hash;
        return `${e}/${o}${r?"/"+r:""}`
    };

function Il(e, t) {
    return `${e}/manage/videos/${null!=t?t:""}`
}
const Ol = (e, t, n) => n ? `${e}/${t}/${n}` : `${e}/${t}`;

function Pl(e, t) {
    return `${Number(e)}${t}`
}

function Rl(e) {
    return !(!o.browser.chromium || e.video.spatial || "stock" === e.video.privacy || "https:" !== window.location.protocol)
}
const Nl = s("Storage Access", "color: #fff; background-color: #fc6203; padding: 2px; border-radius: 2px;"),
    Dl = () => o.storageAccessAPI;
let wl = function(e) {
        return e.started = "started", e.done = "done", e.error = "error", e
    }({}),
    kl = function(e) {
        return e.pending = "pending", e.active = "active", e.started = "started", e.ended = "ended", e
    }({}),
    Ml = function(e) {
        return e.WEB_GLOBAL = "vimeo.web_global", e.COPY_VIDEO_EMBED_CODE = "workflow.copy_video_embed_code", e.PLAYER_PERFORMANCE_MEASUREMENT = "vimeo.player_performance_measurement", e.CHAPTER_SEGMENT_CLICK = "vimeo.chapter_segment_click", e.CLICK = "vimeo.click", e.TIMING_OBJECT_CONNECT = "vimeo.timing_object_connect", e.TIMING_OBJECT_DISCONNECT = "vimeo.timing_object_disconnect", e.EMBEDDED_TRANSCRIPT_CLICK = "vimeo.embedded_transcript_click", e.CLOSED_CAPTIONS_CLICK = "vimeo.closed_captions_click", e.MULTI_AUDIO_TRACK_CLICK = "vimeo.multi_audio_track_click", e.VIEW_PLAYER_CSAT_V1 = "vimeo.view_player_csat_v1", e.SELECT_THUMBS_UP_PLAYER_CSAT_V1 = "vimeo.select_thumbs_up_player_csat_v1", e.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1 = "vimeo.select_thumbs_down_player_csat_v1", e.DISMISS_PLAYER_CSAT_V1 = "vimeo.dismiss_player_csat_v1", e.DVR_MODE_ENTERED = "vimeo.dvr_mode_entered", e.SEEK_BEHIND_LIVE_EDGE = "vimeo.seek_behind_live_edge", e.SKIP_TO_LIVE_CLICK = "vimeo.skip_to_live_click", e.SEEK_TO_LIVE_EDGE = "vimeo.seek_to_live_edge", e.PLAY_VIDEO = "vimeo.play_video", e.FINISH_VIDEO = "vimeo.finish_video", e.START_VIDEO_SCRUB = "vimeo.start_video_scrub", e.END_VIDEO_SCRUB = "vimeo.end_video_scrub", e.WATCH_VIDEO_HEARTBEAT = "vimeo.watch_video_heartbeat", e.EMBED_SEGMENT = "vimeo.embed_segment", e.PLAY_SEGMENT = "vimeo.play_segment", e.WATCH_FULL_VIDEO = "vimeo.watch_full_video", e.SEEK_INSIDE_SEGMENT = "vimeo.seek_inside_segment", e.SHARE_CHAPTER = "vimeo.share_chapter", e.CHAPTER_PLAYED = "vimeo.chapter_played", e.CHAPTER_SELECTED = "vimeo.chapter_selected", e.OPEN_AI_OPTIONS = "vimeo.open_ai_options", e.PROCESS_STEP = "vimeo.process_step", e.REMOTE_COMPONENT_LOADED = "vimeo.remote_component_loaded", e.REMOTE_COMPONENT_TIMEOUT = "vimeo.remote_component_timeout", e.SELECT_LIKE_HEART_ICON = "vimeo.select_like_heart_icon", e.SELECT_PLAYER_ADD_TO_WATCH_LATER = "vimeo.select_player_add_to_watch_later", e.SELECT_PLAYER_TITLE = "vimeo.select_player_title", e.SELECT_PLAYER_BYLINE = "vimeo.select_player_byline", e.SELECT_PLAYER_PROFILE_PHOTO = "vimeo.select_player_profile_photo", e.SELECT_PLAYER_SHARE = "vimeo.select_player_share", e.REACH_TIME_ACTION = "vimeo.reach_time_action", e.VIEW_HOTSPOT = "vimeo.view_hotspot", e.CLICK_HOTSPOT = "vimeo.click_hotspot", e.VIEW_OVERLAY = "vimeo.view_overlay", e.CLOSE_OVERLAY = "vimeo.close_overlay", e.CLICK_OVERLAY = "vimeo.click_overlay", e.VIEW_POLL = "vimeo.view_poll", e.VOTE_POLL = "vimeo.vote_poll", e.SELECT_PLAYER_VIMEO_LOGO = "select_player_vimeo_logo", e
    }({}),
    Vl = function(e) {
        return e.TEAM = "team_context", e.ACTION = "action_context", e.VIEW = "view_context", e.WEB = "web_context", e.VIDEO = "video_context", e.PLAYER = "player_context", e.LIVE = "live_context", e.PRODUCT_ANALYTICS = "product_analytics_context", e.TARGET_TEAM = "target_team_context", e.USER_FACING_VIDEO_ANALYTICS = "user_facing_video_analytics_context", e.THIRD_PARTY_INTEGRATION = "third_party_integration_context", e
    }({}),
    Bl = function(e) {
        return e[e.WEB_GLOBAL = 5] = "WEB_GLOBAL", e[e.COPY_VIDEO_EMBED_CODE = 5] = "COPY_VIDEO_EMBED_CODE", e[e.PLAYER_PERFORMANCE_MEASUREMENT = 1] = "PLAYER_PERFORMANCE_MEASUREMENT", e[e.CHAPTER_SEGMENT_CLICK = 2] = "CHAPTER_SEGMENT_CLICK", e[e.CLICK = 83] = "CLICK", e[e.TIMING_OBJECT_CONNECT = 1] = "TIMING_OBJECT_CONNECT", e[e.TIMING_OBJECT_DISCONNECT = 1] = "TIMING_OBJECT_DISCONNECT", e[e.EMBEDDED_TRANSCRIPT_CLICK = 6] = "EMBEDDED_TRANSCRIPT_CLICK", e[e.CLOSED_CAPTIONS_CLICK = 5] = "CLOSED_CAPTIONS_CLICK", e[e.MULTI_AUDIO_TRACK_CLICK = 2] = "MULTI_AUDIO_TRACK_CLICK", e[e.PLAY_VIDEO = 2] = "PLAY_VIDEO", e[e.FINISH_VIDEO = 2] = "FINISH_VIDEO", e[e.START_VIDEO_SCRUB = 2] = "START_VIDEO_SCRUB", e[e.END_VIDEO_SCRUB = 1] = "END_VIDEO_SCRUB", e[e.WATCH_VIDEO_HEARTBEAT = 4] = "WATCH_VIDEO_HEARTBEAT", e[e.EMBED_SEGMENT = 1] = "EMBED_SEGMENT", e[e.PLAY_SEGMENT = 1] = "PLAY_SEGMENT", e[e.WATCH_FULL_VIDEO = 1] = "WATCH_FULL_VIDEO", e[e.SEEK_INSIDE_SEGMENT = 1] = "SEEK_INSIDE_SEGMENT", e[e.SHARE_CHAPTER = 1] = "SHARE_CHAPTER", e[e.CHAPTER_PLAYED = 1] = "CHAPTER_PLAYED", e[e.CHAPTER_SELECTED = 1] = "CHAPTER_SELECTED", e[e.OPEN_AI_OPTIONS = 4] = "OPEN_AI_OPTIONS", e[e.PROCESS_STEP = 1] = "PROCESS_STEP", e[e.REMOTE_COMPONENT_LOADED = 1] = "REMOTE_COMPONENT_LOADED", e[e.REMOTE_COMPONENT_TIMEOUT = 1] = "REMOTE_COMPONENT_TIMEOUT", e[e.SELECT_PLAYER_SHARE = 1] = "SELECT_PLAYER_SHARE", e[e.REACH_TIME_ACTION = 1] = "REACH_TIME_ACTION", e[e.VIEW_HOTSPOT = 1] = "VIEW_HOTSPOT", e[e.CLICK_HOTSPOT = 1] = "CLICK_HOTSPOT", e[e.VIEW_OVERLAY = 1] = "VIEW_OVERLAY", e[e.CLOSE_OVERLAY = 1] = "CLOSE_OVERLAY", e[e.CLICK_OVERLAY = 1] = "CLICK_OVERLAY", e[e.VIEW_POLL = 1] = "VIEW_POLL", e[e.VOTE_POLL = 1] = "VOTE_POLL", e[e.TEAM = 5] = "TEAM", e[e.ACTION = 5] = "ACTION", e[e.VIEW = 3] = "VIEW", e[e.WEB = 25] = "WEB", e[e.VIDEO = 18] = "VIDEO", e[e.PLAYER = 5] = "PLAYER", e[e.LIVE = 6] = "LIVE", e[e.PRODUCT_ANALYTICS = 171] = "PRODUCT_ANALYTICS", e[e.TARGET_TEAM = 6] = "TARGET_TEAM", e[e.USER_FACING_VIDEO_ANALYTICS = 2] = "USER_FACING_VIDEO_ANALYTICS", e[e.THIRD_PARTY_INTEGRATION = 5] = "THIRD_PARTY_INTEGRATION", e[e.DEFAULT = -1] = "DEFAULT", e
    }({});
const xl = {
        [Ml.WEB_GLOBAL]: Bl.WEB_GLOBAL,
        [Ml.COPY_VIDEO_EMBED_CODE]: Bl.COPY_VIDEO_EMBED_CODE,
        [Ml.PLAYER_PERFORMANCE_MEASUREMENT]: Bl.PLAYER_PERFORMANCE_MEASUREMENT,
        [Ml.CHAPTER_SEGMENT_CLICK]: Bl.CHAPTER_SEGMENT_CLICK,
        [Ml.CLICK]: Bl.CLICK,
        [Ml.TIMING_OBJECT_CONNECT]: Bl.TIMING_OBJECT_CONNECT,
        [Ml.TIMING_OBJECT_DISCONNECT]: Bl.TIMING_OBJECT_DISCONNECT,
        [Ml.EMBEDDED_TRANSCRIPT_CLICK]: Bl.EMBEDDED_TRANSCRIPT_CLICK,
        [Ml.CLOSED_CAPTIONS_CLICK]: Bl.CLOSED_CAPTIONS_CLICK,
        [Ml.MULTI_AUDIO_TRACK_CLICK]: Bl.MULTI_AUDIO_TRACK_CLICK,
        [Ml.VIEW_PLAYER_CSAT_V1]: Bl.DEFAULT,
        [Ml.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: Bl.DEFAULT,
        [Ml.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: Bl.DEFAULT,
        [Ml.DISMISS_PLAYER_CSAT_V1]: Bl.DEFAULT,
        [Ml.DVR_MODE_ENTERED]: Bl.DEFAULT,
        [Ml.SEEK_BEHIND_LIVE_EDGE]: Bl.DEFAULT,
        [Ml.SKIP_TO_LIVE_CLICK]: Bl.DEFAULT,
        [Ml.SEEK_TO_LIVE_EDGE]: Bl.DEFAULT,
        [Ml.PLAY_VIDEO]: Bl.PLAY_VIDEO,
        [Ml.FINISH_VIDEO]: Bl.FINISH_VIDEO,
        [Ml.START_VIDEO_SCRUB]: Bl.START_VIDEO_SCRUB,
        [Ml.END_VIDEO_SCRUB]: Bl.END_VIDEO_SCRUB,
        [Ml.WATCH_VIDEO_HEARTBEAT]: Bl.WATCH_VIDEO_HEARTBEAT,
        [Ml.EMBED_SEGMENT]: Bl.EMBED_SEGMENT,
        [Ml.PLAY_SEGMENT]: Bl.PLAY_SEGMENT,
        [Ml.WATCH_FULL_VIDEO]: Bl.WATCH_FULL_VIDEO,
        [Ml.SEEK_INSIDE_SEGMENT]: Bl.SEEK_INSIDE_SEGMENT,
        [Ml.SHARE_CHAPTER]: Bl.SHARE_CHAPTER,
        [Ml.CHAPTER_PLAYED]: Bl.CHAPTER_PLAYED,
        [Ml.CHAPTER_SELECTED]: Bl.CHAPTER_SELECTED,
        [Ml.OPEN_AI_OPTIONS]: Bl.OPEN_AI_OPTIONS,
        [Ml.PROCESS_STEP]: Bl.PROCESS_STEP,
        [Ml.REMOTE_COMPONENT_LOADED]: Bl.REMOTE_COMPONENT_LOADED,
        [Ml.REMOTE_COMPONENT_TIMEOUT]: Bl.REMOTE_COMPONENT_TIMEOUT,
        [Ml.SELECT_LIKE_HEART_ICON]: Bl.DEFAULT,
        [Ml.SELECT_PLAYER_ADD_TO_WATCH_LATER]: Bl.DEFAULT,
        [Ml.SELECT_PLAYER_VIMEO_LOGO]: Bl.DEFAULT,
        [Ml.SELECT_PLAYER_TITLE]: Bl.DEFAULT,
        [Ml.SELECT_PLAYER_BYLINE]: Bl.DEFAULT,
        [Ml.SELECT_PLAYER_PROFILE_PHOTO]: Bl.DEFAULT,
        [Ml.SELECT_PLAYER_SHARE]: Bl.SELECT_PLAYER_SHARE,
        [Ml.REACH_TIME_ACTION]: Bl.REACH_TIME_ACTION,
        [Ml.VIEW_HOTSPOT]: Bl.VIEW_HOTSPOT,
        [Ml.CLICK_HOTSPOT]: Bl.CLICK_HOTSPOT,
        [Ml.VIEW_OVERLAY]: Bl.VIEW_OVERLAY,
        [Ml.CLOSE_OVERLAY]: Bl.CLOSE_OVERLAY,
        [Ml.CLICK_OVERLAY]: Bl.CLICK_OVERLAY,
        [Ml.VIEW_POLL]: Bl.VIEW_POLL,
        [Ml.VOTE_POLL]: Bl.VOTE_POLL,
        [Vl.TEAM]: Bl.TEAM,
        [Vl.ACTION]: Bl.ACTION,
        [Vl.VIEW]: Bl.VIEW,
        [Vl.WEB]: Bl.WEB,
        [Vl.VIDEO]: Bl.VIDEO,
        [Vl.PLAYER]: Bl.PLAYER,
        [Vl.LIVE]: Bl.LIVE,
        [Vl.PRODUCT_ANALYTICS]: Bl.PRODUCT_ANALYTICS,
        [Vl.USER_FACING_VIDEO_ANALYTICS]: Bl.USER_FACING_VIDEO_ANALYTICS,
        [Vl.TARGET_TEAM]: Bl.TARGET_TEAM,
        [Vl.THIRD_PARTY_INTEGRATION]: Bl.THIRD_PARTY_INTEGRATION
    },
    Ul = [Vl.PLAYER, Vl.VIDEO, Vl.WEB, Vl.TEAM],
    Hl = [Vl.TEAM, Vl.VIDEO, Vl.LIVE, Vl.PRODUCT_ANALYTICS, Vl.USER_FACING_VIDEO_ANALYTICS, Vl.TARGET_TEAM, Vl.THIRD_PARTY_INTEGRATION],
    Fl = {
        [Ml.VIEW_PLAYER_CSAT_V1]: [].concat(Ul, [Vl.VIEW]),
        [Ml.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: [].concat(Ul, [Vl.ACTION]),
        [Ml.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: [].concat(Ul, [Vl.ACTION]),
        [Ml.DISMISS_PLAYER_CSAT_V1]: [].concat(Ul, [Vl.ACTION]),
        [Ml.DVR_MODE_ENTERED]: [].concat(Ul, [Vl.VIEW, Vl.LIVE, Vl.PRODUCT_ANALYTICS]),
        [Ml.SEEK_BEHIND_LIVE_EDGE]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS]),
        [Ml.SKIP_TO_LIVE_CLICK]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS]),
        [Ml.SEEK_TO_LIVE_EDGE]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS]),
        [Ml.PLAY_VIDEO]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS, Vl.TARGET_TEAM, Vl.USER_FACING_VIDEO_ANALYTICS]),
        [Ml.FINISH_VIDEO]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS, Vl.TARGET_TEAM, Vl.USER_FACING_VIDEO_ANALYTICS]),
        [Ml.START_VIDEO_SCRUB]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS, Vl.TARGET_TEAM, Vl.USER_FACING_VIDEO_ANALYTICS]),
        [Ml.END_VIDEO_SCRUB]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS, Vl.TARGET_TEAM, Vl.USER_FACING_VIDEO_ANALYTICS]),
        [Ml.WATCH_VIDEO_HEARTBEAT]: [].concat(Ul, [Vl.ACTION, Vl.LIVE, Vl.PRODUCT_ANALYTICS, Vl.TARGET_TEAM, Vl.USER_FACING_VIDEO_ANALYTICS]),
        [Ml.WATCH_FULL_VIDEO]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS]),
        [Ml.SEEK_INSIDE_SEGMENT]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS]),
        [Ml.SHARE_CHAPTER]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS]),
        [Ml.CHAPTER_PLAYED]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS]),
        [Ml.CHAPTER_SELECTED]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.THIRD_PARTY_INTEGRATION]),
        [Ml.EMBED_SEGMENT]: [].concat(Ul, [Vl.VIEW, Vl.PRODUCT_ANALYTICS]),
        [Ml.PLAY_SEGMENT]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS]),
        [Ml.OPEN_AI_OPTIONS]: [Vl.TEAM, Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.WEB, Vl.VIDEO],
        [Ml.PROCESS_STEP]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS]),
        [Ml.REMOTE_COMPONENT_LOADED]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.THIRD_PARTY_INTEGRATION]),
        [Ml.REMOTE_COMPONENT_TIMEOUT]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.THIRD_PARTY_INTEGRATION]),
        [Ml.SELECT_LIKE_HEART_ICON]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.VIEW, Vl.LIVE]),
        [Ml.SELECT_PLAYER_ADD_TO_WATCH_LATER]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.VIEW, Vl.LIVE]),
        [Ml.SELECT_PLAYER_VIMEO_LOGO]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.VIEW, Vl.LIVE]),
        [Ml.SELECT_PLAYER_TITLE]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.VIEW, Vl.LIVE]),
        [Ml.SELECT_PLAYER_BYLINE]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.VIEW, Vl.LIVE]),
        [Ml.SELECT_PLAYER_PROFILE_PHOTO]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.VIEW, Vl.LIVE]),
        [Ml.SELECT_PLAYER_SHARE]: [].concat(Ul, [Vl.ACTION, Vl.PRODUCT_ANALYTICS, Vl.VIEW, Vl.LIVE]),
        [Ml.REACH_TIME_ACTION]: [].concat(Hl, [Vl.VIEW]),
        [Ml.VIEW_HOTSPOT]: [].concat(Hl, [Vl.VIEW]),
        [Ml.CLICK_HOTSPOT]: [].concat(Hl, [Vl.ACTION]),
        [Ml.VIEW_OVERLAY]: [].concat(Hl, [Vl.VIEW]),
        [Ml.CLOSE_OVERLAY]: [].concat(Hl, [Vl.ACTION]),
        [Ml.CLICK_OVERLAY]: [].concat(Hl, [Vl.ACTION]),
        [Ml.VIEW_POLL]: [].concat(Hl, [Vl.VIEW]),
        [Ml.VOTE_POLL]: [].concat(Hl, [Vl.ACTION])
    },
    Gl = {
        PROVENANCE_AI_GENERATED: "ai_generated",
        PROVENANCE_USER_UPLOADED: "user_uploaded",
        PROVENANCE_USER_UPLOADED_AI_GENERATED: "user_uploaded_ai_generated"
    };
let Wl = function(e) {
    return e.WORKFLOW = "Workflow", e.PLAYBACK = "Playback", e
}({});

function Yl(e) {
    var t;
    return e.video.ecdn ? e.video.live_event ? "vimeo-live-ecdn" : "vimeo-vod-ecdn" : c(e.embed.interactive) ? null != (t = e.request.flags) && t.ott ? "vimeo-ott-vod" : e.video.live_event ? "vimeo-live" : e.embed.context && -1 !== e.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.video.vod ? "vimeo-ondemand" : "vimeo-vod" : "vimeo-interactive-vod"
}
const $l = () => {
        const e = Ir,
            [t, n, i] = e.split(".");
        return {
            full: e,
            major: t,
            minor: n,
            patch: i
        }
    },
    Kl = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function ql() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : Kl && (e = "mobile"), e
}

function zl() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function jl(e) {
    var t;
    const {
        user: n,
        video: i
    } = e;
    let o = "viewer";
    return n.team_id && (o = n.id === n.team_origin_user_id ? "admin" : "contributor"), n.id === (null == (t = i.owner) ? void 0 : t.id) && (o = "owner"), o
}

function Xl(e, t) {
    return e === t ? "square" : t > e ? "portrait" : "landscape"
}

function Zl(e) {
    return (null == e ? void 0 : e.status) === kl.ended ? "ended" : (null == e ? void 0 : e.status) === kl.started ? "streaming" : (null == e ? void 0 : e.status) === kl.pending ? "unavailable" : "unknown"
}

function Jl(e) {
    return e.live_event ? "live_event" : "other"
}

function Ql(e) {
    var t;
    return null != e && e.length && (null == (t = e.find((e => e.is_current))) ? void 0 : t.id) || null
}

function es(e) {
    return e === ja.PRIVACY_PUBLIC ? "public" : e === ja.PRIVACY_PASSWORD ? "password" : e === ja.PRIVACY_UNLISTED ? "unlisted" : e === ja.PRIVACY_HIDE_FROM_VIMEO ? "hide_from_vimeo" : "private"
}
var ts = function(e) {
    return e.Origin = "c=o", e.Peer = "c=p", e.ParentCache = "c=c", e.CloudWrapper = "c=w", e
}(ts || {});

function ns(e) {
    const t = e.akamai_request_bc,
        n = e.x_cache;
    return t ? function(e) {
        return e.includes(ts.Origin) ? tl.CacheMiss : e.includes(ts.Peer) || e.includes(ts.ParentCache) || e.includes(ts.CloudWrapper) ? tl.MidCacheHit : tl.EdgeCacheHit
    }(t) : n ? function(e) {
        return "HIT" === e.slice(0, 3) ? tl.MidCacheHit : "HIT" === e.slice(-3) ? tl.EdgeCacheHit : tl.CacheMiss
    }(n) : tl.CacheMiss
}

function is(e) {
    if (!e) return {
        audioTrackLang: null,
        audioTrackProvenance: null,
        audioTrackType: null,
        textTrackLang: null,
        textTrackProvenance: null,
        textTrackType: null
    };
    const t = e.enabledAudioTrack,
        n = e.enabledTextTrack;
    return {
        audioTrackLang: (null == t ? void 0 : t.language) || null,
        audioTrackProvenance: Gl[null == t ? void 0 : t.provenance] || null,
        audioTrackType: (null == t ? void 0 : t.kind) || null,
        textTrackLang: (null == n ? void 0 : n.language) || null,
        textTrackProvenance: (null == n ? void 0 : n.provenance) || null,
        textTrackType: (null == n ? void 0 : n.kind) || null
    }
}

function os(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const rs = (e, t) => e.split("/").slice(4).join("/"),
    as = e => e.split("/")[4],
    ls = (e, t) => function(n) {
        try {
            const {
                type: i,
                url: o
            } = n;
            return i && o && o.includes(e) ? os(i === p.MANIFEST || i === p.SEGMENT ? m(n, t) : null) : os(null)
        } catch (ke) {
            return Promise.reject(ke)
        }
    },
    ss = () => {
        var e;
        const t = _(window, "_hiveStats", {
                cdnResponseBytes: 0,
                p2pResponseBytes: 0,
                partners: {}
            }),
            {
                cdnResponseBytes: n,
                p2pResponseBytes: i,
                partners: o
            } = t;
        return {
            ecdnBytesByCdn: n,
            ecdnBytesPeered: i,
            ecdnPeers: (null !== (e = Object.keys(o)) && void 0 !== e ? e : []).length
        }
    },
    cs = () => {
        const e = _(window, "_kollectiveStats", {
                originBytes: 0,
                ecdnBytes: 0,
                currentPeerConnections: 0
            }),
            {
                originBytes: t,
                ecdnBytes: n,
                currentPeerConnections: i
            } = e;
        return {
            ecdnBytesByCdn: t,
            ecdnBytesPeered: n,
            ecdnPeers: i
        }
    },
    ds = e => {
        const t = {
            hive: ss,
            kollective: cs
        };
        return t[e] ? t[e]() : {
            ecdnBytesByCdn: 0,
            ecdnBytesPeered: 0,
            ecdnPeers: 0
        }
    },
    us = ({
        newPriority: e,
        currentPriority: t,
        priorityOrder: n
    }) => {
        const i = n.indexOf(t),
            o = n.indexOf(e);
        return -1 === i || -1 === o || i > o
    };

function _s(e) {
    return (null == e ? void 0 : e.parentElement) === document.body
}
const ps = () => {
    try {
        return window.self !== window.top
    } catch (ke) {
        return !0
    }
};

function ms(e, t) {
    const [n, i] = t;
    let o = i - n;
    for (var r, a = v(e); !(r = a()).done;) {
        const e = r.value,
            [t, a] = e,
            l = Math.max(n, t),
            s = Math.min(i, a);
        o -= Math.max(0, s - l)
    }
    return Math.max(o, 0)
}

function vs(e) {
    return Ra(_r(e, 3))
}
const fs = e => {
        var t;
        const n = null == e || null == (t = e.ingest) ? void 0 : t.start_time;
        if (!n) return Wr;
        const i = Date.now() - n,
            o = Wr - i;
        return Math.min(Math.max(o, 0), Wr)
    },
    hs = e => !!e && e.status === kl.started && 0 === fs(e);

function Es(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function gs(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (ke) {}
    return null
}
let bs = function(e) {
        return e.EMPTY = "empty", e.LEAD_CAPTURE_FORM = "lead_capture_form", e
    }({}),
    Cs = function(e) {
        return e.BEFORE_VIDEO = "before_video", e.DURING_VIDEO = "during_video", e.AFTER_VIDEO = "after_video", e
    }({}),
    Ts = function(e) {
        return e.OPENED = "access_gate_opened", e.CLOSED = "access_gate_closed", e.ERROR = "access_gate_error", e
    }({});
const ys = {
    [bs.LEAD_CAPTURE_FORM]: [Lr.main, Lr.privateUnlocked]
};
qr.REMOTE_ACCESS_GATE;
const Ls = (e, t) => {
        const i = t.vimeo_url;
        let o = {
            lc_param_session_id: t.request.session
        };
        return t.video.unlisted_hash && (o.lc_param_unlisted_hash = t.video.unlisted_hash), t.request.hashed_password && (o.lc_param_password = t.request.hashed_password), n(`https://${i}${e}`, o)
    },
    As = (e, t, n = null) => e === bs.LEAD_CAPTURE_FORM ? {
        purpose: e,
        url: Ls(`/leadcapture/video/${t.video.id}/form`, t),
        title: "Lead Capture Form",
        gateId: n
    } : {
        purpose: bs.EMPTY,
        url: "",
        title: "",
        gateId: n
    },
    Ss = (e, t) => {
        if (e === bs.LEAD_CAPTURE_FORM) {
            var n;
            let e = (e => "lc_" + e.video.id)(t),
                i = gs(e);
            return i || (e = (e => {
                const {
                    id: t,
                    unlisted_hash: n
                } = e.video;
                return "lc_" + ((e, t = 0) => {
                    let n = 3735928559 ^ t,
                        i = 1103547991 ^ t;
                    for (let o, r = 0; r < e.length; r++) o = e.charCodeAt(r), n = Math.imul(n ^ o, 2654435761), i = Math.imul(i ^ o, 1597334677);
                    return n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), (4294967296 * (2097151 & i) + (n >>> 0)).toString()
                })(n ? `${t}:${n}` : `${t}`)
            })(t), i = gs(e), null !== (n = i) && void 0 !== n ? n : "")
        }
        return ""
    },
    Is = (e, t) => !!Ss(e, t);

function Os(e) {
    var t;
    const n = Ss(bs.LEAD_CAPTURE_FORM, e);
    var i, o;
    return null != (t = e.user) && t.lead ? {
        leadUuid: (null == (i = e.user.lead) ? void 0 : i.id) || n,
        contentType: null == (o = e.user.lead) ? void 0 : o.type
    } : n ? {
        leadUuid: n
    } : {}
}
let Ps = function(e) {
        return e.NOT_LOGGED_IN = "not_logged_in", e.LOGGED_IN_STORAGE_ACCESS_REQUIRED = "logged_in_storage_access_required", e.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED = "storage_access_granted_login_unconfirmed", e.ALL_ACCESS_ATTEMPTS_FAILED = "all_access_attempts_failed", e.LOGGED_IN_NO_ACCESS = "logged_in_no_access", e.LOGGED_IN_HAS_ACCESS = "logged_in_has_access", e
    }({}),
    Rs = function(e) {
        return e.PRIVATE_LOCKED = "private-locked", e.LOGIN_LIKE = "login-like", e.LOGIN_WATCH_LATER = "login-watch-later", e.PURCHASE = "purchase", e.PRIVATE = "private", e
    }({});
const Ns = {
    storageAccessRequired: Dl,
    requestCookieAccess: e => new Promise(((t, n) => document.requestStorageAccess().then((() => {
        Nl("User granted storage access"), t(!0)
    }), (() => {
        e(), Nl("User storage access denied:"), t(!1)
    })).catch(n)))
};
const Ds = ["label"],
    ws = "Hotspot",
    ks = "Poll";

function Ms(e, t, n) {
    return e / t * n
}

function Vs(e = "") {
    try {
        const t = null == e ? void 0 : e.split(".")[1],
            n = JSON.parse(atob(t)).exp;
        return h(n) >= 0
    } catch (ke) {
        throw new Error("Failed to parse PHP token.")
    }
}
const Bs = (e, t) => !e.isLive() || t;
let xs = function(e) {
        return e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e.XXL = "xxl", e
    }({}),
    Us = function(e) {
        return e.MD = "md", e.SM = "sm", e.XS = "xs", e.CUSTOM = "custom", e
    }({}),
    Hs = function(e) {
        return e.PRIMARY = "primary", e.ALTERNATIVE = "alternative", e.CUSTOM = "custom", e
    }({}),
    Fs = function(e) {
        return e.LEFT = "left", e.RIGHT = "right", e
    }({}),
    Gs = function(e) {
        return e.RESET = "reset", e.BUTTON = "button", e.SUBMIT = "submit", e
    }({}),
    Ws = function(e) {
        return e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e
    }({}),
    Ys = function(e) {
        return e.NORMAL = "normal", e.BOLD = "bold", e[e.NUM_500 = 500] = "NUM_500", e
    }({}),
    $s = function(e) {
        return e.CUSTOM = "custom", e.WHITE = "white", e
    }({}),
    Ks = function(e) {
        return e.SM = "sm", e.LG = "lg", e
    }({}),
    qs = function(e) {
        return e.FULL_CONTROLS = "full-controls", e.VOLUME_SLIDER = "volume-slider", e.PROGRESS_BAR = "progress-bar", e.SIDE_DOCK_MENU = "side-dock-menu", e
    }({});
const zs = (e, t, n) => {
    switch (e) {
        case qs.FULL_CONTROLS:
        case qs.VOLUME_SLIDER:
            return t !== $a.MINI && t !== $a.TINY && n !== xs.XXS;
        case qs.PROGRESS_BAR:
            return t !== $a.TINY;
        case qs.SIDE_DOCK_MENU:
            return t === $a.MINI || t === $a.TINY || n === xs.XXS || n === xs.XS;
        default:
            return !1
    }
};

function js(e) {
    return 1 === e
}

function Xs(e, t = new Date) {
    return e.getTime() - t.getTime()
}

function Zs() {
    let e = -1;
    if (void 0 !== window.performance && "function" == typeof window.performance.getEntriesByType) {
        const t = window.performance.getEntriesByType("resource");
        if (t) {
            const n = t.filter((e => null !== e.name.split("?")[0].match(/\.m4s$|\.ts$|\.mp4$/)));
            e = n.map((e => e.responseStart - e.connectStart)).reduce(((e, t) => e + t), 0) / (n.length || 1)
        }
    }
    return _r(e, 2)
}
const Js = !!window.DD_RUM && "function" == typeof window.DD_RUM.setViewContextProperty && "function" == typeof window.DD_RUM.setGlobalContextProperty && "function" == typeof window.DD_RUM.addError && "function" == typeof window.DD_RUM.addAction,
    Qs = [25, 50, 75, 90, 95, 100];

function ec(t) {
    let n, i = null,
        a = null,
        l = null,
        s = null,
        c = 0,
        d = 0,
        u = [],
        _ = !1,
        p = !1,
        m = !1,
        v = 0,
        f = 0,
        h = E(),
        T = !0,
        y = !0,
        L = [],
        A = [],
        S = 0,
        I = is(t.backbone);

    function O() {
        k(), t.bigPicture.sendEvent(Ml.PLAY_VIDEO, M(Ml.PLAY_VIDEO)), s = l
    }

    function P() {
        t.backbone.seeking || (_ = !1, N(), t.bigPicture.sendEvent(Ml.FINISH_VIDEO, M(Ml.FINISH_VIDEO)), y = !1, w())
    }

    function R() {
        _ && p && !m && (p = !1, k(), t.bigPicture.sendEvent(Ml.END_VIDEO_SCRUB, M(Ml.END_VIDEO_SCRUB)), s = l, D())
    }

    function N() {
        let n = v;
        (t.backbone.seeking || m) && (n = f), l = _r(n, 3), c && (S += d, function() {
            var n;
            const i = vs(t.config.video.duration);
            if (t.backbone.isLive() || 0 === i) return;
            A = [];
            const o = Math.round(S / i * 100);
            A = Qs.filter((e => o >= e && !L.includes(e))), (n = L).push.apply(n, e(A))
        }(), t.bigPicture.sendEvent(Ml.WATCH_VIDEO_HEARTBEAT, function() {
            const e = M(Ml.WATCH_VIDEO_HEARTBEAT);
            return r(r({}, e), {}, {
                log_view_time: c,
                log_view_time_excluding_repeats: Math.min(d, c),
                previous_log_end_time: s,
                is_first_log: T,
                completion_quantiles: A
            })
        }(), {
            [Vl.VIDEO]: {
                audio_track_lang: I.audioTrackLang,
                audio_track_provenance: I.audioTrackProvenance,
                audio_track_type: I.audioTrackType,
                text_track_lang: I.textTrackLang,
                text_track_provenance: I.textTrackProvenance,
                text_track_type: I.textTrackType
            }
        }), c = 0, d = 0, T = !1, s = l, I = is(t.backbone))
    }

    function D() {
        n || (n = setInterval(N, 1e4))
    }

    function w() {
        clearInterval(n), n = null
    }

    function k() {
        const e = _r(Ra(t.currentTime), 3);
        i ? i++ : i = 1, a = e, l = e, c = 0, d = 0, f = e, h = E()
    }

    function M(e) {
        let n;
        switch (e) {
            case Ml.FINISH_VIDEO:
                n = {
                    session_segment_id: i,
                    segment_start_time: a,
                    log_end_time: l,
                    is_first_log: y
                };
                break;
            case Ml.PLAY_VIDEO:
                n = {
                    session_segment_id: i,
                    segment_start_time: a,
                    log_end_time: l,
                    video_duration_ms: vs(t.config.video.duration)
                };
                break;
            default:
                n = {
                    session_segment_id: i,
                    segment_start_time: a,
                    log_end_time: l
                }
        }
        return n
    }
    t.events.on(g.PLAY, (function() {
        if (D(), !_)
            if (_ = !0, t.backbone.isLive()) {
                const e = ({
                    currentTime: n
                }) => {
                    0 !== n && (O(), t.events.off(g.TIME_UPDATE, e))
                };
                t.events.on(g.TIME_UPDATE, e)
            } else O()
    })), t.events.on(g.PAUSE, (function() {
        t.backbone.ended || t.backbone.seeking || m || (N(), w())
    })), t.events.on(g.SEEKING, (function() {
        _ && !p && (p = !0, N(), t.bigPicture.sendEvent(Ml.START_VIDEO_SCRUB, M(Ml.START_VIDEO_SCRUB)), w())
    })), t.events.on(g.SEEKED, b(R, 750)), t.events.on(g.ENDED, P), t.events.on(g.TIME_UPDATE, (function() {
        if (t.backbone.seeking) return;
        const n = Ra(_r(t.currentTime, 3)),
            i = m ? f : n;
        let r = Math.round(i - f);
        const l = E();
        if (r = function(e, n, i) {
                const o = t.backbone.playbackRate || 1,
                    r = h || i,
                    a = Math.round((i - r) * o),
                    l = Math.max(a, 0),
                    s = vs(t.config.video.duration);
                return !t.backbone.isLive() && s && n > s || l && e > 1.3 * l ? Math.min(e, l) : e
            }(r, i, l), r <= 0) return;
        v = i;
        const s = [a, i];
        if (c += r, o.iOS && t.backbone.isLive()) {
            d += _r(ms(u, s), 3);
            const t = function(e, t) {
                const [n, i] = t;
                return e.map(((e, t) => {
                    const [o, r] = e;
                    return n >= o && n <= r || i >= o && i <= r || o <= n && r >= i || n <= o && i >= r ? t : null
                })).filter((e => null !== e))
            }(u, s);
            u = function(t, n, i) {
                const [o, r] = n;
                let a;
                if (i.length) a = Math.min.apply(Math, e(i));
                else {
                    const e = t.findIndex((e => o < e[0]));
                    a = -1 === e ? t.length : e
                }
                const l = e(t),
                    s = [Math.min.apply(Math, [o].concat(e(i.map((e => t[e][0]))))), Math.max.apply(Math, [r].concat(e(i.map((e => t[e][1])))))];
                return l.splice(a, i.length, s), l
            }(u, s, t)
        } else {
            const e = t.backbone.played;
            d += _r(ms(u, s), 3), u = function(e) {
                const t = e.length,
                    n = [];
                for (let i = 0; i < t; i++) {
                    const t = e.start(i),
                        o = e.end(i);
                    n.push([Ra(_r(t, 3)), Ra(_r(o, 3))])
                }
                return n
            }(e)
        }
        f = i, h = l, t.config.embed.loop && function(e) {
            if (_ && e >= vs(t.config.video.duration) - 300) {
                P();
                const e = () => {
                    t.currentTime >= 0 && (t.events.off(g.TIME_UPDATE, e), O())
                };
                t.events.on(g.TIME_UPDATE, e)
            }
        }(v)
    })), t.events.on(Fn, (function() {
        m = !0
    })), t.events.on(Gn, (function() {
        m = !1, p && R()
    })), t.events.on(C.AUDIO_TRACK_CHANGED, (function() {
        N()
    })), t.events.on(qn, (function() {
        N()
    })), t.events.on(Di, (e => {
        e && (w(), i = null, a = null, l = null, s = null, c = 0, d = 0, u = [], _ = !1, p = !1, m = !1, v = 0, f = 0, h = E(), y = !0, T = !0, L = [], A = [], S = 0, I = is(t.backbone))
    })), window.addEventListener("pagehide", (function() {
        N()
    }))
}
const tc = {
    product_analytics_context: {
        product: "analysis",
        feature: "interactive"
    }
};
let nc = function() {
    function e(e) {
        T(this, "_overlayOpenTime", void 0), T(this, "_player", void 0), this._player = e, this._overlayOpenTime = new Map
    }
    var t = e.prototype;
    return t._sendEvent = function(e, t = {}) {
        this._player.bigPicture.sendEvent(e, t, tc)
    }, t.sendReachTimeAction = function({
        timeActionId: e
    }) {
        this._sendEvent(Ml.REACH_TIME_ACTION, {
            time_action_id: e
        })
    }, t.sendViewHotspot = function({
        hotspotId: e
    }) {
        this._sendEvent(Ml.VIEW_HOTSPOT, {
            hotspot_id: e
        })
    }, t.sendClickHotspot = function({
        hotspotId: e,
        clickActionType: t,
        clickoutId: n,
        overlayId: i
    }) {
        this._sendEvent(Ml.CLICK_HOTSPOT, {
            hotspot_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null,
            overlay_id: null != i ? i : null
        })
    }, t.sendViewOverlay = function({
        overlayId: e
    }) {
        this._overlayOpenTime.set(e, E()), this._sendEvent(Ml.VIEW_OVERLAY, {
            overlay_id: e
        })
    }, t.sendCloseOverlay = function({
        overlayId: e
    }) {
        const t = this._overlayOpenTime.get(e),
            n = E() - t;
        this._sendEvent(Ml.CLOSE_OVERLAY, {
            overlay_id: e,
            dwell_time: n
        })
    }, t.sendClickOverlay = function({
        overlayId: e,
        clickActionType: t,
        clickoutId: n
    }) {
        this._sendEvent(Ml.CLICK_OVERLAY, {
            overlay_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null
        })
    }, t.sendViewPoll = function({
        pollId: e
    }) {
        this._sendEvent(Ml.VIEW_POLL, {
            poll_id: e
        })
    }, t.sendVotePoll = function({
        pollId: e,
        pollOptionId: t,
        isPollOptionCorrect: n
    }) {
        this._sendEvent(Ml.VOTE_POLL, {
            poll_id: e,
            poll_option_id: t,
            is_poll_option_correct: null != n ? n : null
        })
    }, e
}();

function ic(e) {
    return Math.random() <= e
}

function oc(e, t, n = .1) {
    ic(n) && ((e, t = {}) => {
        if (Js && e) {
            const n = Object.assign({}, t, {
                manually_captured: 1
            });
            window.DD_RUM.addError(e, n)
        }
    })(e, t)
}
window.addEventListener("unhandledrejection", (e => {
    e.preventDefault(), e.reason && oc(e.reason, {
        unhandled_rejection: 1
    })
}));
var rc = {
    setUp: function(e, t = Ya.VimeoPlayer) {
        ((e, t = Ya.VimeoPlayer) => {
            if (Js) {
                var n, i, o;
                const r = {
                    js_modules: !0,
                    version_js: e.request.build.js,
                    version_backend: e.request.build.backend,
                    visibility_state: document.visibilityState,
                    vimeo_session: e.request.session,
                    locale: e.request.lang,
                    product: Yl(e),
                    video_embed_permission: e.video.embed_permission,
                    video_privacy: e.video.privacy,
                    live_session_id: null == (n = e.video.live_event) ? void 0 : n.id,
                    rawUserAgent: navigator.userAgent,
                    background_mode: Number(1 === (null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.background)),
                    player_name: t,
                    owner_account_type: null == (o = e.video.owner) ? void 0 : o.account_type
                };
                if (e.request.ab_tests)
                    for (const t in e.request.ab_tests) {
                        const n = e.request.ab_tests[t];
                        r[`${t}_test`] = 1, r[`${t}_group`] = n.group;
                        for (const e in n.data) r[`${t}_data_${e}`] = n.data[e]
                    }
                e.user.logged_in && (r.userId = e.user.id);
                for (let e in r) window.DD_RUM.setGlobalContextProperty(e, r[e]);
                if (t) {
                    const e = `has${t}`;
                    window.DD_RUM.setViewContextProperty(e, 1)
                }
            }
        })(e, t)
    },
    captureException: oc,
    captureMessage: function(e) {},
    captureBreadcrumb: function(e) {
        (e => {
            Js && window.DD_RUM.addAction(e)
        })(e)
    }
};
let ac;

function lc({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        a = {
            video: {},
            request: {},
            embed: {}
        };

    function l() {
        return n && n - 6e4 <= Date.now()
    }

    function s(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout((() => {
            "onLine" in navigator && !navigator.onLine || o || (o = d().catch(rc.captureException))
        }), 1e3 * e - 6e4 - 5e3), t
    }

    function c(e, i = {}) {
        var o, l;
        clearTimeout(r);
        const c = t;
        if (isNaN(e) && "string" != typeof e) {
            t = e, n = s(t.request.expires);
            let i = new URL(window.location.href);
            const o = i.searchParams.get("referrer"),
                r = i.searchParams.get("player_id");
            return o && (t.request.referrer = o, i.searchParams.delete("referrer")), r && (t.embed.player_id = r, i.searchParams.delete("player_id")), Promise.resolve({
                old: c,
                loaded: t
            })
        }
        Date.now(), a = L(a, t);
        const d = a.request.referrer;
        d && (i.referrer = d), i.s = a.request.signature, i.expires = a.request.expires, i.time = a.request.timestamp, ac || (ac = cr(e));
        const u = dr(ac || (null != (o = t) && o.player_url ? `https://${null==(l=t)?void 0:l.player_url}` : ""), e, i);
        return y(u, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then((e => (t = e, t.view !== Lr.error && (n = s(t.request.expires), a.request.session && t.video.id === a.video.id && (t.request.session = a.request.session), d && (t.request.referrer = d), a.embed.player_id && (t.embed.player_id = a.embed.player_id), a.embed.on_site && (t.embed.on_site = 1, t.embed.context = a.embed.context)), Date.now(), {
            old: c,
            loaded: t
        }))).catch((e => {
            rc.captureException(e)
        }))
    }

    function d() {
        return clearTimeout(r), Date.now(), y(t.request.config_refresh_url, {
            withCredentials: !0,
            retry: 3
        }).json().then((i => {
            const r = t.request.referrer;
            return t.request = i, r && (t.request.referrer = r), n = s(t.request.expires), Date.now(), o = null, e.fire(Ui), t.request
        })).catch((t => {
            const n = ra();
            throw e.fire(fn, n.type, n), t
        }))
    }
    return window.addEventListener("online", (() => {
        l() && (o = d().catch(rc.captureException))
    })), e.on(fn, (e => {
        o || "media-url-expired" !== e || (o = d().catch(rc.captureException))
    })), {
        get isExpired() {
            return l()
        },
        load: (e, t) => c(e, t),
        reload() {
            var e;
            return null != (e = t) && e.video.id ? c(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => l() ? (o || (o = d()), o) : Promise.resolve(t.request),
        refreshAssetUrls: () => d(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}
const sc = (e, t, n) => {
        let i;
        try {
            i = new URL(e)
        } catch (ke) {
            return null
        }
        const o = Array.isArray(t) ? t : [t],
            r = o.map((function(e) {
                return `${Dr}${e}`
            })).concat(o),
            a = new URLSearchParams(i.hash.substring(1));
        let l = null;
        return r.some((e => {
            const t = `${e}_${n}`,
                i = a.get(t) || a.get(e);
            return !!i && (l = (e => {
                var t;
                let n, i = !1,
                    o = "0",
                    r = "0",
                    a = "0",
                    l = e;
                const s = l.startsWith("-");
                if (s && (l = l.substring(1)), n = l.match(/^(\d*\.?\d+)$/), null != (t = n) && t.length && (i = !0, a = n[0]), !1 === i && (n = l.match(/^(?:(\d*\.?\d+)h)?(?:(\d*\.?\d+)m)?(?:(\d*\.?\d+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = "0", r = "0", a = "0"] = n)), !1 === i && (n = l.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = "0", o = "0"] = l.split(":").reverse())), !i) return null;
                const c = 60 * Number(o) * 60 + 60 * Number(r) + Number(a);
                return s ? -c : c
            })(i), !0)
        })), l
    },
    cc = (e, t, n) => -1 === e.indexOf("#") ? null : sc(e, t, n);

function dc(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const uc = pc((function(e) {
    return new Promise(((t, n) => {
        vc(e) ? t() : (e.events.once(g.LOADED_DATA, (() => {
            vc(e) && t()
        })), e.events.once(g.PLAYING, (() => {
            n("Video started playing before start time thumbnail could be shown")
        })))
    }))
}));

function _c() {}

function pc(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}
const mc = pc((function(e) {
    return function() {
        var t = function() {
            if (fc(e)) return function(e) {
                if (e && e.then) return e.then(_c)
            }(function(e, t) {
                try {
                    var n = e()
                } catch (ke) {
                    return t(ke)
                }
                return n && n.then ? n.then(void 0, t) : n
            }((function() {
                return dc(e.ready(), (function() {
                    return dc(e.inView(), (function() {
                        return e.backbone.preload = "auto", dc(uc(e), (function() {
                            ! function(e) {
                                var t;
                                null == (t = e.backbone.element) || null == (t = t.classList) || t.remove("invisible"), e.events.fire(mn)
                            }(e)
                        }))
                    }))
                }))
            }), (function(e) {})))
        }();
        if (t && t.then) return t.then(_c)
    }()
}));

function vc(e) {
    return e.currentTime === e.startTime && e.backbone.readyState >= qa.HAVE_CURRENT_DATA
}

function fc(e) {
    var t;
    const n = 1 === (null == e || null == (t = e.config) || null == (t = t.embed) ? void 0 : t.autoplay);
    return o.videoContentPreload && e.segmentedPlaybackEnabled && !n
}

function hc(e) {
    return !!fc(e) && e.backbone.readyState < qa.HAVE_CURRENT_DATA
}
const Ec = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}((function(e) {
    const {
        events: t
    } = e;
    return new Promise((n => {
        t.on(Uo, (function(i) {
            const {
                backbone: o
            } = e, {
                startTime: r,
                endTime: a
            } = function(e, t) {
                const {
                    video: n,
                    embed: i
                } = t.config, o = n.id, r = n.duration, a = i.chapters, l = ((e, t) => cc(e, Rr, t))(e, o);
                let s, c;
                return l ? (({
                    startTime: s,
                    endTime: c
                } = bc(l, a)), Tc(t, l)) : (s = ((e, t) => cc(e, Nr, t))(e, o), c = ((e, t) => cc(e, "end", t))(e, o)), ({
                    startTime: s,
                    endTime: c
                } = Cc(s, c, r)), {
                    startTime: s,
                    endTime: c
                }
            }(i, e);
            n({
                startTime: r,
                endTime: a
            }), null !== r && o.currentTime !== r && t.fire(on, r, r / o.duration)
        }))
    }))
}));

function gc(e) {
    const {
        video: t,
        embed: n
    } = e.config, i = e.seekingController.canSeekForward;
    let o;
    if ((null == t || !t.live_event) && i) {
        let i = null,
            o = null;
        const a = ((e, t) => sc(e, Rr, t))(document.location.href, t.id);
        a ? (({
            startTime: i,
            endTime: o
        } = bc(a, n.chapters)), Tc(e, a)) : ({
            startTime: i,
            endTime: o
        } = function(e, t) {
            const n = document.location.href;
            let i = ((e, t) => sc(e, Nr, t))(n, e),
                o = ((e, t) => sc(e, "end", t))(n, e);
            var r;
            return null !== i && function(e) {
                var t; - 1 !== e.indexOf("at=") && null != (t = history) && t.replaceState && history.replaceState("", "", window.location.pathname + window.location.search)
            }(null == (r = document) || null == (r = r.location) ? void 0 : r.hash), ({
                startTime: i,
                endTime: o
            } = Cc(i, o, t)), {
                startTime: i,
                endTime: o
            }
        }(t.id, t.duration)), r(i, o), null === i && null === o && function(e, t) {
            e && e.then || (e = Promise.resolve(e)), t && e.then(t)
        }(Ec(e), (function({
            startTime: e,
            endTime: t
        }) {
            r(e, t)
        }))
    }

    function r(i, r) {
        null !== i && (e.startTime = lr(i, 0, t.duration)), null !== r && (e.endTime = r, o = function({
            player: e,
            startTime: t,
            endTime: n,
            loop: i = !1
        }) {
            let o = !0,
                r = !1;
            const {
                events: a
            } = e;
            (function() {
                const i = n - t,
                    o = {
                        duration: i,
                        endTime: n,
                        startTime: t
                    },
                    r = {
                        get currentFragment() {
                            return o
                        },
                        firstFragmentDuration: i,
                        checkForNewFragment: Ua,
                        reset: Ua,
                        hibernate: Ua,
                        wake: Ua,
                        getFragmentFromTime: () => o
                    },
                    a = function(e, t) {
                        return [1e3 * e, 1e3 * t]
                    }(t, n);
                e.overrideFragmentsHandler(r, a)
            })(), mc(e), a.on(g.TIME_UPDATE, l), a.on(Mn, c), a.on(Di, d), a.on(g.SEEKED, u), a.once(A, (function() {
                o && e.bigPicture.sendEvent(Ml.PLAY_SEGMENT, {
                    start_time: t,
                    end_time: n
                })
            }));
            return () => {
                o = !1, a.off(g.TIME_UPDATE, l), a.off(Mn, c), a.off(Di, d), a.off(g.SEEKED, u), e.restoreLastFragmentsHandler()
            };

            function l({
                currentTime: o
            }) {
                o >= n && (i ? s(t) : (e.backbone.pause(), a.fire(g.ENDED)))
            }

            function s(t) {
                r = !1, e.backbone.currentTime = t
            }

            function c() {
                e.backbone && (e.backbone.currentTime >= n || e.backbone.currentTime < t) && s(t)
            }

            function d(t) {
                t && (e.startTime = null, e.endTime = null)
            }

            function u() {
                o && r && e.bigPicture.sendEvent(Ml.SEEK_INSIDE_SEGMENT, {
                    start_time: t,
                    end_time: n
                }), r = !0
            }
        }({
            player: e,
            startTime: null != i ? i : 0,
            endTime: r,
            loop: !!n.loop
        }), e.ready().then((() => {
            e.bigPicture.sendEvent(Ml.EMBED_SEGMENT, {
                start_time: i,
                end_time: r
            })
        })).catch((e => {})))
    }
    return {
        clearSegmentedPlayback: () => null == o ? void 0 : o()
    }
}

function bc(e, t) {
    const n = null == t ? void 0 : t.find((t => t.id === e));
    let i = {
        startTime: null,
        endTime: null
    };
    return n && (i = {
        startTime: n.timecode,
        endTime: null
    }), i
}

function Cc(e, t, n) {
    let i = e,
        o = t;
    return i && (i = Math.max(i, 0)), o && (o < 0 && (o = Math.max(0, n + o)), o = Math.min(o, n), i ? i > o && (i = null, o = null) : i = 0), {
        startTime: i,
        endTime: o
    }
}

function Tc(e, t) {
    e.events.once(A, (() => {
        e.bigPicture.sendEvent(Ml.CHAPTER_PLAYED, {
            chapter_id: t
        })
    }))
}

function yc(e) {
    const t = !fc(e);

    function n(e) {
        if ("opacity" === e.propertyName) {
            const e = i();
            var t;
            e && (S(e).off("transitionend", n), null == e || null == (t = e.parentNode) || t.removeChild(e))
        }
    }

    function i() {
        return document.querySelector(".vp-placeholder")
    }
    return {
        hide: function() {
            if (t) {
                const e = i();
                e && (S(e).on("transitionend", n), e.classList.add("vp-placeholder-fadeout"))
            }
        }
    }
}
const Lc = "CAPTIONS_RESET",
    Ac = "CAPTIONS_SET_FONT_SIZE",
    Sc = "CAPTIONS_SET_FONT_FAMILY",
    Ic = "CAPTIONS_SET_FONT_OPACITY",
    Oc = "CAPTIONS_SET_COLOR",
    Pc = "CAPTIONS_SET_BACKGROUND_OPACITY",
    Rc = "CAPTIONS_SET_BACKGROUND_COLOR",
    Nc = "CAPTIONS_SET_WINDOW_OPACITY",
    Dc = "CAPTIONS_SET_WINDOW_COLOR",
    wc = "CAPTIONS_SET_EDGE_STYLE",
    kc = e => ({
        type: Ac,
        payload: e
    }),
    Mc = e => ({
        type: Sc,
        payload: e
    }),
    Vc = e => ({
        type: Ic,
        payload: e
    }),
    Bc = e => ({
        type: Oc,
        payload: e
    }),
    xc = e => ({
        type: Pc,
        payload: e
    }),
    Uc = e => ({
        type: Rc,
        payload: e
    }),
    Hc = e => ({
        type: Nc,
        payload: e
    }),
    Fc = e => ({
        type: Dc,
        payload: e
    }),
    Gc = e => ({
        type: wc,
        payload: e
    }),
    Wc = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "Branco"
            }, {
                id: "yellow",
                label: "Amarelo"
            }, {
                id: "green",
                label: "Verde"
            }, {
                id: "cyan",
                label: "Ciano"
            }, {
                id: "blue",
                label: "Azul"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Vermelho"
            }, {
                id: "black",
                label: "Preto"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Cor",
            dispatch: Uc
        },
        color: {
            items: [{
                id: "#fff",
                label: "Branco"
            }, {
                id: "#ff0",
                label: "Amarelo"
            }, {
                id: "#0f0",
                label: "Verde"
            }, {
                id: "#0ff",
                label: "Ciano"
            }, {
                id: "#00f",
                label: "Azul"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Vermelho"
            }, {
                id: "#000",
                label: "Preto"
            }],
            id: "color",
            cookie: "color",
            title: "Cor",
            dispatch: Bc
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Tamanho",
            dispatch: kc
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Serifada com espaçamento uniforme"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Serifa proporcional"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Sem serifa com espaçamento uniforme"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Sem serifa proporcional"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursiva"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Versalete"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Família",
            dispatch: Mc
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacidade",
            dispatch: Vc
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "Nenhum"
            }, {
                id: "shadow",
                label: "Sombra"
            }, {
                id: "raised",
                label: "Relevo"
            }, {
                id: "depressed",
                label: "Rebaixada"
            }, {
                id: "outline",
                label: "Contorno"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Estilo da borda",
            dispatch: Gc
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacidade",
            dispatch: xc
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "Branco"
            }, {
                id: "#ff0",
                label: "Amarelo"
            }, {
                id: "#0f0",
                label: "Verde"
            }, {
                id: "#0ff",
                label: "Ciano"
            }, {
                id: "#00f",
                label: "Azul"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Vermelho"
            }, {
                id: "#000",
                label: "Preto"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Cor",
            dispatch: Fc
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacidade",
            dispatch: Hc
        }
    }),
    Yc = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    },
    $c = ["quality", "volume", "captions", "transcript", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity", "audio_language", "audio_kind", "qoe_survey_vote"];
let Kc = null;

function qc(e) {
    const t = Wc(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = gs("player")
        } catch (ke) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = Es(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = Es(n), i && function(t, n) {
            if (Kc) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    Kc.then((n => {
                        const i = rr(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    })).catch((t => {
                        rc.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    }))
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            $c.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            $c.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o($c);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=Es(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    return document.cookie = a, !0
                } catch (ke) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        const o = !0;
        switch (t) {
            case "sync_quality":
                e.events.fire(Vt, n, o);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(Nt, n, o);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire($t, o);
                    break
                }
                e.events.fire(Yt, n, o);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(Oi) : !t && e.config.user.logged_in && e.events.fire(Ri))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(qi)
        }
    }
    return e.events.on(An, (function(e, t) {
            t || r("quality", e)
        })),
        function() {
            const t = (t, n) => {
                e.config.request.cookie.volume = Es(t), n || r("volume", t, !1)
            };
            e.events.on(yn, t), e.events.on(Ln, ((e, n) => {
                e && t(0, n)
            }))
        }(), e.events.on(qn, (function(t, n) {
            if (t) {
                const i = `${t.language}.${t.kind}`;
                return e.config.request.cookie.captions = Es(i), void(n || r("captions", e.config.request.cookie.captions))
            }
            e.config.request.cookie.captions = null, n || r("captions", null)
        })), e.events.on(Kt, (function(t, n) {
            const {
                dispatch: i,
                cookie: o
            } = t;
            e.store.dispatch(i(n)), r(`captions_${o}`, Es(n))
        })), e.events.on(qt, (function() {
            e.store.dispatch({
                type: Lc
            }), Object.keys(t).forEach((e => {
                const {
                    cookie: n
                } = t[e];
                r(`captions_${n}`, null)
            }))
        })), e.events.on(Ro, (function(t, n) {
            if (t) return e.config.request.cookie.transcript = Es(t.language), void(n || r("transcript", e.config.request.cookie.transcript));
            e.config.request.cookie.transcript = null, n || r("transcript", null)
        })),
        function() {
            const t = ["descriptions", "main-desc"];
            e.events.on(cn, (function(n, i) {
                e.config.request.cookie.audio_language = null != n && n.language ? Es(n.language) : null, e.config.request.cookie.audio_kind = t.includes(null == n ? void 0 : n.kind) ? Es(n.kind) : null, i || (r("audio_language", e.config.request.cookie.audio_language), r("audio_kind", e.config.request.cookie.audio_kind))
            }))
        }(), e.events.on(xo, (function() {
            const t = Date.now();
            e.config.request.cookie.qoe_survey_vote = t, r("qoe_survey_vote", t)
        })), e.events.on(Mn, (function() {
            e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(Ki))
        })), e.events.on([kn, Tn], (function() {
            o("active") === e.config.request.session && r("active", null)
        })), e.events.on(Pi, (function() {
            r("login", !0)
        })), n && !Kc && (Kc = function(t) {
            return new Promise(((n, i) => {
                document.createElement("a").href = e.config.request.urls.proxy;
                const o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    const n = rr(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }, o.onerror = function(e) {
                    i(e)
                };
                const r = setTimeout((() => {
                    i()
                }), 1e4);
                window.addEventListener("message", (function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
                }), !1), document.body.appendChild(o)
            }))
        }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
            const n = rr(e.config.request.urls.proxy);
            t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
        }), !1) : window.addEventListener("storage", (function(e) {
            var t;
            if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
                try {
                    if (window.localStorage.getItem(e.key) !== e.newValue) return
                } catch (n) {}
                try {
                    a(e.key, JSON.parse(e.newValue))
                } catch (n) {
                    rc.captureException(n, {
                        extra: {
                            key: e.key,
                            oldValue: e.oldValue,
                            newValue: e.newValue
                        }
                    })
                }
            }
        }), !1), {
            reset: function() {
                r("login", !!e.config.user.logged_in)
            }
        }
}
const zc = {
        id: "7742C69E",
        name: "prod"
    },
    jc = {
        id: "BA42D416",
        name: "prod"
    },
    Xc = {
        id: "78077C77",
        name: "prod"
    },
    Zc = "urn:x-cast:com.vimeo.cast.media",
    Jc = {
        connected: gr(),
        disconnected: gr(),
        playing: gr(),
        paused: gr(),
        buffering: gr(),
        idle: gr(),
        ended: gr(),
        initialized: gr(),
        castStateChanged: gr(),
        sessionStateChanged: gr(),
        timeUpdated: gr(),
        mediaLoadedSuccess: gr(),
        mediaLoadedFailed: gr(),
        error: gr()
    };
let Qc = function() {
        function e({
            core: e
        }) {
            this._core = e, this._onControlSeek = this.onControlSeek.bind(this), this._onPlayerMutedChanged = this.onPlayerMutedChanged.bind(this), this._onPlayerVolumeChanged = this.onPlayerVolumeChanged.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onCastStateChanged = this.onCastStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._onReceiverMutedChanged = this.onReceiverMutedChanged.bind(this), this._onReceiverVolumeChanged = this.onReceiverVolumeChanged.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = R(this._endVideo, 500), this._onOutroDisplayed = this.onOutroDisplayed.bind(this), this._onOutroHidden = this.onOutroHidden.bind(this), this.volumeLevel = null, this.mutedState = null
        }
        var t = e.prototype;
        return t.calculateStartTime = function(e = null) {
            let t = Number(e) || this._core.backbone.currentTime - 7;
            return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
        }, t.loadMedia = function({
            contentId: e,
            currentTime: t = null,
            duration: n = null,
            token: i = null,
            bypassToken: o = null,
            autoRequest: a = !1,
            autoCaption: l = !0,
            autoDisconnect: s = !0,
            tracks: c = []
        } = {}) {
            if (td.isLoadingMedia) return Promise.resolve(!1);
            const d = this._core.config;
            e = e || d.video.id;
            const u = d.request,
                p = u.drm;
            let m;
            if (p) {
                const t = _(u, "files.dash.default_cdn");
                e = _(u, `files.dash.cdns.${t}.url`), m = _(p, "cdms.widevine.license_url"), c = (u.text_tracks || []).map((e => {
                    const {
                        pathname: t,
                        search: n
                    } = I(e.url);
                    return r(r({}, e), {}, {
                        url: `https://player.vimeo.com${t}${n}`
                    })
                }))
            }
            const v = this.calculateStartTime(t);
            n = Number(n) || this.duration, i = i || d.user.vimeo_api_client_token, o = o || d.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
            const f = {
                contentId: e,
                duration: n,
                autoRequest: a,
                tracks: c,
                currentTime: v,
                requestCustomData: {
                    token: i,
                    bypassToken: o,
                    tokenType: "jwt"
                }
            };
            return this._core.config.request.ott_chromecast_token && (f.requestCustomData.ottChromecastToken = this._core.config.request.ott_chromecast_token), this._core.config.ottCastOptions && (f.ottCastOptions = this._core.config.ottCastOptions), (m ? this._getLicenseUrl(m).then((e => r(r({}, f), {}, {
                mediaCustomData: {
                    widevineLicenseServerURL: e
                }
            }))) : Promise.resolve(f)).then((e => td.loadMedia(e))).then((() => (td.fire(Jc.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._core.events.fire(A), this._core.events.fire(Xt), this._isOutroRendered = !1, l && this.onCaptionsChanged(this._core.backbone.enabledTextTrack), this._core.backbone.paused || this._core.backbone.pause(), !0))).catch((e => (td.fire(Jc.mediaLoadedFailed, e), s && this.endCurrentSession(), Promise.reject(e))))
        }, t._getLicenseUrl = function(e) {
            return new Promise(((t, n) => {
                const i = new XMLHttpRequest;
                i.open("GET", e), i.onload = () => {
                    const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                    if (i.status >= 200 && i.status < 300) try {
                        t(i.response)
                    } catch (ke) {
                        n(e(ke))
                    } else n(e(i.status))
                }, i.onerror = n, i.send()
            }))
        }, t.init = function() {
            this.removeInitListeners(), this.addInitListeners()
        }, t.addInitListeners = function() {
            this.addSessionStateListener(), this.addCastStateListener(), this.addIsConnectedListener()
        }, t.endCurrentSession = function(e = !0) {
            td.castContext && td.castContext.endCurrentSession(e)
        }, t.syncBackbone = function() {
            !this.isOutroRendered && this._core.backbone.paused && (this._core.backbone.currentTime = this.lastCurrentTime, this.syncTime())
        }, t.stopBackbone = function() {
            this._core.events.fire(kt)
        }, t.storeBackboneData = function() {
            this.lastCurrentTime = this._core.backbone.currentTime
        }, t.applyBackboneData = function() {
            this.lastCurrentTime && (this._core.backbone.currentTime = this.lastCurrentTime)
        }, t.enableUI = function() {
            this._core.events.fire(pn), this._core.element.classList.add("is-casting")
        }, t.disableUI = function() {
            this.isOutroRendered || (this._core.events.fire(mn), this._core.backbone.element.classList.remove("invisible")), this._core.element.classList.remove("is-casting")
        }, t.syncTime = function() {
            const e = this.lastCurrentTime / this.duration;
            td.fire(Jc.timeUpdated, {
                currentTime: this.lastCurrentTime,
                duration: this.duration,
                percent: e
            }), e > 0 && this._core.events.fire(g.TIME_UPDATE, {
                currentTime: this.lastCurrentTime,
                duration: this.duration,
                timeProgress: e
            })
        }, t._endVideo = function() {
            return this._isEndOfVideo = !0, this._core.events.fire(Tn), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch((() => {
                this.showOutro()
            })) : this.showOutro(), td.fire(Jc.ended), !0
        }, t.showOutro = function() {
            this.isOutroRendered || (this._isOutroRendered = !0, this._core.events.fire(jt))
        }, t.dispose = function() {
            this.endCurrentSession(), this.removeAllRemoteListeners()
        }, t.onIsMediaLoadedChanged = function(e) {
            !1 === e.value ? this.isTimeEnded && this.endVideo() : this._core.backbone.paused || this._core.backbone.pause()
        }, t.onPlayerStateChanged = function(e) {
            switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
                case td.PlayerState.PLAYING:
                    td.fire(Jc.playing);
                    break;
                case td.PlayerState.PAUSED:
                    td.fire(Jc.paused);
                    break;
                case td.PlayerState.BUFFERING:
                    td.fire(Jc.buffering);
                    break;
                case td.PlayerState.IDLE:
                default:
                    td.fire(Jc.idle)
            }
        }, t.onReceiverVolumeChanged = function(e) {
            null === this.volumeLevel && (this.volumeLevel = td.remotePlayer ? td.remotePlayer.volumeLevel : 1), e.value !== this.volumeLevel && (this.volumeLevel = e.value, this._core.events.fire(Nt, e.value, !1, !1))
        }, t.onReceiverMutedChanged = function(e) {
            null === this.mutedState && (this.mutedState = !!td.remotePlayer && td.remotePlayer.isMuted), this._core.events.fire(Dt, e.value, !0)
        }, t.onPlayerMutedChanged = function(e) {
            td.remotePlayer && td.remotePlayerController && td.remotePlayer.isMuted !== e && td.remotePlayerController.muteOrUnmute()
        }, t.onPlayerVolumeChanged = function(e) {
            this._core.backbone.muted || td.remotePlayer && td.remotePlayerController && O(td.remotePlayer.volumeLevel) !== O(e) && (td.remotePlayer.volumeLevel = e, td.remotePlayerController.setVolumeLevel())
        }, t.onCurrentTimeChanged = function(e) {
            this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
        }, t.onCaptionsChanged = function(e) {
            const t = td.currentSession;
            t && t.sendMessage(Zc, {
                action: "setActiveByLanguage",
                value: null == e ? void 0 : e.language
            })
        }, t.onSessionStateChanged = function(e) {
            switch (e.sessionState) {
                case td.SessionState.SESSION_STARTING:
                    this.addPreventLocalPlayerEvents();
                    break;
                case td.SessionState.SESSION_RESUMED:
                case td.SessionState.SESSION_STARTED:
                    this.loadMedia();
                    break;
                case td.SessionState.SESSION_ENDING:
                case td.SessionState.SESSION_ENDED:
                    break;
                case td.SessionState.SESSION_START_FAILED:
                    this.removePreventLocalPlayerEvents()
            }
            td.fire(Jc.sessionStateChanged, e.sessionState)
        }, t.onCastStateChanged = function(e) {
            td.fire(Jc.castStateChanged)
        }, t.onIsConnectedChanged = function(e) {
            e.value ? this.onConnected() : this.onDisconnected()
        }, t.onConnected = function() {
            this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), td.fire(Jc.connected, td.currentSessionObj)
        }, t.onDisconnected = function() {
            this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), td.fire(Jc.disconnected)
        }, t.onConfigChanged = function() {
            this.loadMedia()
        }, t.onReset = function() {
            this.loadMedia()
        }, t.onPlayOrPausePressed = function() {
            this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && td.remotePlayerController.playOrPause(), this._core.events.halt()
        }, t.onControlSeek = function(e) {
            e = this._core.seekingController.getAllowedSeekTime(e), this.currentTime = e, this._core.events.halt()
        }, t.addSessionStateListener = function() {
            td.castContext && td.castContext.addEventListener(td.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
        }, t.addCastStateListener = function() {
            td.castContext && td.castContext.addEventListener(td.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)
        }, t.addMessageListener = function() {
            const e = td.currentSession;
            e && e.addMessageListener(Zc, this._onMessageReceived)
        }, t.onMessageReceived = function(e, t) {
            "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), td.fire(Jc.error, new Error("Chromecast encountered an error and media finished."))))
        }, t.onOutroDisplayed = function() {
            this._isOutroRendered = !0
        }, t.onOutroHidden = function() {
            this._isOutroRendered = !1
        }, t.addIsConnectedListener = function() {
            td.remotePlayerController && td.remotePlayerController.addEventListener(td.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
        }, t.addPreventLocalPlayerEvents = function() {
            this._core.events.prependOn([Mn, kn, Fn, Gn, C.BUFFER_STARTED, C.BUFFER_ENDED, Rt, Ln, yn, qn, Di, kt], this._preventPlayerDefaultEvent)
        }, t.addRemotePlayerListenersOnIdle = function() {
            this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
        }, t.addLocalPlayerListeners = function() {
            this._core.events.prependOn(Mn, this._onPlayOrPausePressed), this._core.events.prependOn(kn, this._onPlayOrPausePressed), this._core.events.prependOn(Fn, this._preventPlayerDefaultEvent), this._core.events.prependOn(Gn, this._preventPlayerDefaultEvent), this._core.events.prependOn(C.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.prependOn(C.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.prependOn(Rt, this._onControlSeek), this._core.events.prependOn(Ln, this._onPlayerMutedChanged), this._core.events.prependOn(yn, this._onPlayerVolumeChanged), this._core.events.on(qn, this._onCaptionsChanged), this._core.events.on(Di, this._onConfigChanged), this._core.events.on(kt, this._onReset), this._core.events.on(Wi, this._onOutroDisplayed), this._core.events.on(Yi, this._onOutroHidden)
        }, t.preventPlayerDefaultEvent = function() {
            this._core.events.halt()
        }, t.addCurrentTimeChangedListener = function() {
            td.remotePlayerController && td.remotePlayerController.addEventListener(td.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
        }, t.addIsMediaLoadedChangedListener = function() {
            td.remotePlayerController && td.remotePlayerController.addEventListener(td.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
        }, t.addPlayerStateChangedListener = function() {
            td.remotePlayerController && td.remotePlayerController.addEventListener(td.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
        }, t.addVolumeLevelChangedListener = function() {
            td.remotePlayerController && (td.remotePlayerController.addEventListener(td.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onReceiverVolumeChanged), td.remotePlayerController.addEventListener(td.RemotePlayerEventType.IS_MUTED_CHANGED, this._onReceiverMutedChanged))
        }, t.addRemotePlayerListenersOnPlaying = function() {
            this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
        }, t.removeRemotePlayerListenersOnIdle = function() {
            this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
        }, t.removeInitListeners = function() {
            td.castContext && (td.castContext.removeEventListener(td.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), td.castContext.removeEventListener(td.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)), td.remotePlayerController && td.remotePlayerController.removeEventListener(td.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
        }, t.removeRemotePlayerListenersOnPlaying = function() {
            this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
        }, t.removeMessageListener = function() {
            const e = td.currentSession;
            e && e.removeMessageListener(Zc, this._onMessageReceived)
        }, t.removeCurrentTimeChangedListener = function() {
            td.remotePlayerController && td.remotePlayerController.removeEventListener(td.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
        }, t.removeIsMediaLoadedChangedListener = function() {
            td.remotePlayerController && td.remotePlayerController.removeEventListener(td.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
        }, t.removePlayerStateChangedListener = function() {
            td.remotePlayerController && td.remotePlayerController.removeEventListener(td.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
        }, t.removeVolumeLevelChangedListener = function() {
            td.remotePlayerController && (td.remotePlayerController.removeEventListener(td.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onReceiverVolumeChanged), td.remotePlayerController.removeEventListener(td.RemotePlayerEventType.IS_MUTED_CHANGED, this._onReceiverMutedChanged))
        }, t.removePreventLocalPlayerEvents = function() {
            this._core.events.off([Mn, kn, Fn, Gn, C.BUFFER_STARTED, C.BUFFER_ENDED, Rt, Ln, yn, qn, Di, kt], this._preventPlayerDefaultEvent)
        }, t.removeLocalPlayerListeners = function() {
            this._core.events.off(Mn, this._onPlayOrPausePressed), this._core.events.off(kn, this._onPlayOrPausePressed), this._core.events.off(Fn, this._preventPlayerDefaultEvent), this._core.events.off(Gn, this._preventPlayerDefaultEvent), this._core.events.off(C.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.off(C.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.off(Rt, this._onControlSeek), this._core.events.off(Ln, this._onPlayerMutedChanged), this._core.events.off(yn, this._onPlayerVolumeChanged), this._core.events.off(qn, this._onCaptionsChanged), this._core.events.off(Di, this._onConfigChanged), this._core.events.off(kt, this._onReset)
        }, t.removeRemotePlayerListeners = function() {
            this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
        }, t.removeAllRemoteListeners = function() {
            this.removeRemotePlayerListeners(), this.removeInitListeners()
        }, P(e, [{
            key: "currentTime",
            get: function() {
                return this.lastCurrentTime || 0
            },
            set: function(e) {
                td.remotePlayer && td.remotePlayerController && (e = this._core.seekingController.getAllowedSeekTime(e), td.remotePlayer.currentTime = e, td.remotePlayerController.seek(), this.lastCurrentTime = e)
            }
        }, {
            key: "isTimeEnded",
            get: function() {
                return this.lastCurrentTime + .5 >= this.duration
            }
        }, {
            key: "isOutroRendered",
            get: function() {
                return this._isOutroRendered || !1
            }
        }, {
            key: "isLooped",
            get: function() {
                return this._core.config.embed.loop
            }
        }, {
            key: "isEndOfVideo",
            get: function() {
                return this._isEndOfVideo || !1
            }
        }, {
            key: "duration",
            get: function() {
                return this._core.config.video.duration
            }
        }, {
            key: "isPlayingOrPaused",
            get: function() {
                return td.remotePlayer ? td.remotePlayer.playerState === td.PlayerState.PLAYING || td.remotePlayer.playerState === td.PlayerState.PAUSED : null
            }
        }, {
            key: "isIdle",
            get: function() {
                return td.remotePlayer ? null === td.remotePlayer.playerState || td.remotePlayer.playerState === td.PlayerState.IDLE : null
            }
        }, {
            key: "isMediaLoaded",
            get: function() {
                return !!td.remotePlayer && td.remotePlayer.isMediaLoaded
            }
        }])
    }(),
    ed = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        D(t, e);
        var n = t.prototype;
        return n.init = function({
            appId: t,
            chromecastPlayer: n = null
        } = {}) {
            var i, o;
            return t || (t = null != n && null != (i = n._core) && null != (i = i.config.request.flags) && i.ott ? null != n && null != (o = n._core) && o.config.ottCastOptions ? n._core.config.ottCastOptions.appId ? n._core.config.ottCastOptions.appId : jc.id : Xc.id : zc.id), this.chromecastPlayer = n, this.setup().then((n => (n && (e.prototype.init.call(this, {
                receiverApplicationId: t,
                autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
            }), this.chromecastPlayer && this.chromecastPlayer.init(), this.fire(Jc.initialized)), n))).catch((e => (this.fire(Jc.error, e), Promise.reject(e))))
        }, n.dispose = function() {
            this.chromecastPlayer = null
        }, P(t, [{
            key: "chromecastPlayer",
            get: function() {
                return this._chromecastPlayer
            },
            set: function(e) {
                if (e && !(e instanceof Qc)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
                this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
            }
        }])
    }(w);
const td = N.extend(new ed),
    nd = "LIVE_UPDATE";

function id(e, t) {
    return Object.keys(t).reduce(((n, i) => (t[i] && "object" == typeof t[i] ? n[e(i)] = id(e, t[i]) : n[e(i)] = t[i], n)), {})
}

function od(e) {
    return e.replace(/(_\w)/g, (e => e[1].toUpperCase()))
}

function rd(e) {
    return id(od, e)
}
const ad = "CONFIG_LOAD",
    ld = e => ({
        type: ad,
        payload: r({}, rd(e))
    });

function sd(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case ad:
            return n.video.liveEvent ? r(r({}, e), n.video.liveEvent) : null;
        case nd:
            return r(r({}, e), n);
        case "LIVE_SET_START_TIME":
            return r(r({}, e), {}, {
                ingest: r(r({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return r(r({}, e), {}, {
                settings: r(r({}, e.settings), n)
            });
        default:
            return e
    }
}
const cd = e => {
        var t;
        return !(null == (t = e.liveEvent) || !t.status)
    },
    dd = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    ud = e => {
        var t;
        return (null == (t = e.liveEvent) ? void 0 : t.status) === Tr
    },
    _d = e => {
        var t;
        return cd(e) && "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    pd = e => {
        var t;
        return (null == (t = e.liveEvent) || null == (t = t.archive) ? void 0 : t.status) === Cr
    };
var md = Object.freeze({
    __proto__: null,
    default: sd,
    liveExists: cd,
    liveStatus: dd,
    liveStartTime: e => {
        var t;
        return (null == (t = e.liveEvent) || null == (t = t.ingest) ? void 0 : t.startTime) || null
    },
    isLiveStarted: ud,
    liveInProgress: _d,
    isLiveArchived: pd
});
const vd = "interactive";
let fd = function(e) {
    return e.NONE = "none", e.METADATA = "metadata", e.METADATA_ON_HOVER = "metadata_on_hover", e.AUTO = "auto", e.AUTO_ON_HOVER = "auto_on_hover", e
}({});
const hd = fd.METADATA_ON_HOVER;
let Ed = function(e) {
        return e.PQ = "PQ", e.DV5 = "DV5", e.DV81 = "DV81", e.DV82 = "DV82", e.DV84 = "DV84", e.HDR10 = "HDR10", e.HDR10_PLUS = "HDR10_PLUS", e.HLG = "HLG", e
    }({}),
    gd = function(e) {
        return e.KOLLECTIVE = "kollective", e.HIVE = "hive", e
    }({});

function bd() {}

function Cd(e, t, i) {
    const r = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t;
                    if (Yr.includes(null == e || null == (t = e.config) || null == (t = t.user) ? void 0 : t.id)) return function(e) {
                        if (!void 0) return e && e.then ? e.then(bd) : Promise.resolve()
                    }(ee(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.refreshAssetUrls()
            }))
        })),
        a = e.events;
    let l = e.backbone;
    const s = Wc(),
        c = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad),
        d = (o.iOS >= 8 || Pr) && !o.iPad;
    let u = !1,
        _ = !1,
        p = !1,
        m = !1,
        v = null,
        f = !1,
        h = null,
        E = !1,
        b = !1,
        T = !1,
        y = !1,
        L = !1;

    function S(e) {
        l.element.classList.remove("invisible"), I()
    }

    function I() {
        let e = l.play();
        return L && (e = e.catch(O)), e.catch(R).then(N)
    }

    function O(e) {
        if (P(e)) return a.fire(Dt, !0, !0), l.play();
        throw e
    }

    function P(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function R(e) {
        return a.fire(hn, e), new Promise((() => {}))
    }

    function N() {
        L = !1, a.fire(En)
    }

    function D(e) {
        try {
            l.currentTime = e
        } catch (t) {}
    }

    function w(e = !1) {
        (!m || e) && !f && u && l.paused && I()
    }

    function te() {
        var t;
        const n = (null == (t = e.config.request.flags) ? void 0 : t.preload_video) || hd;
        let i = n,
            r = "";
        n === fd.AUTO_ON_HOVER && (r = fd.AUTO), n === fd.METADATA_ON_HOVER && (r = fd.METADATA);
        const s = o.isGoogleBot || o.isCrawler || "none" === n;
        (r || s) && (i = fd.NONE), l.preload = i, a.on(Ti, (function() {
            e.config.request && l.preload === fd.NONE && r && !s && !p && e.verifyConfig().then((() => (l.preload = r, !0))).catch((e => {}))
        })), a.on(C.LOAD_SEGMENT_FAILED, (function(e) {
            rc.captureException(e)
        }))
    }

    function ne() {
        y = !1;
        const t = l.video;
        if (l.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (l.hasTextTrack(t)) {
                    const e = !0;
                    a.fire(Yt, t, e)
                }
            } else a.on(C.TEXT_TRACKS_AVAILABLE, (() => {
                n(), i()
            })), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (l.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                a.fire(Yt, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(s).forEach((t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = s[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some((e => e.id === r));
                e.store.dispatch(i(a ? r : Yc[t]))
            }))
        }
    }

    function ie(e, t, n, i) {
        if (_) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), _ = !1
        }
    }

    function oe() {
        e.startTime > 0 && a.fire(on, e.startTime, e.startTime / l.duration)
    }

    function re() {
        if (e.config.embed.autoplay) {
            var n, i;
            if (t.get(cd) && !t.get(ud)) return;
            if (t.get(cd) && !hs(null == (n = e.config.video) ? void 0 : n.live_event)) return void setTimeout((function() {
                a.fire(Ho), a.fire(Mn, {
                    fromUserGesture: !1
                })
            }), fs(null == (i = e.config.video) ? void 0 : i.live_event));
            a.fire(Mn, {
                fromUserGesture: !1
            })
        }
    }
    l.element.classList.add("invisible"), d && l.element.classList.add("hide-webkit-controls"), e.config.video.live_event && i.classList.add("live-background"), e.config.embed.transparent && i.classList.add("transparent"), t.watch(dd, (function(e) {
            e === Tr && setTimeout((() => {
                ne(), l.element.classList.remove("invisible"), a.fire(Ho), a.fire(Mn, {
                    fromUserGesture: !1
                })
            }), Wr)
        })), t.watch(pd, r), t.watch("ui.video.scaleFactor", (e => {
            l.element.classList.toggle("vp-telecine-cover", e > 1)
        })),
        function t() {
            a.once(ji, t), l = e.backbone, vr(l.on, a.fire, [k, M, V, A, B, x, U, H, F, G, W, Y, $.ACTIVATED, $.AVAILABLE, $.DEACTIVATED, $.UNAVAILABLE, K.ARCHIVE_DONE, K.EVENT_ACTIVE, K.EVENT_ENDED, K.EVENT_STARTED, K.STREAM_OFFLINE, K.STREAM_ONLINE, K.BUFFER_GAP_JUMP, K.BUFFER_GAP_JUMP_PREVENT, K.STALL_JUMP, K.SETTINGS_UPDATED, K.LOW_LATENCY_FALLBACK, K.LIVE_STATS_SUCCESS, K.LIVE_STATS_FAILURE, K.LATENCY_UPDATED, q.MEDIASESSION_PAUSE, q.MEDIASESSION_PLAY, q.MEDIASESSION_SEEK_BACKWARD, q.MEDIASESSION_SEEK_FORWARD, q.MEDIASESSION_SEEK_TO, C.AV_DURATION_MISMATCH, C.BANDWIDTH, C.BUFFER_ENDED, C.BUFFER_OCCUPANCY, C.BUFFER_STARTED, C.CHAPTER_CUES_UPDATED, C.CUE_POINT, C.CURRENT_FILE_CHANGE, C.DOWNLOAD_END, C.DOWNLOAD_TIMEOUT, C.DRM_AUTH_SUCCESS, C.DRM_KEY_SWITCH, C.DROPPED_FRAMES, C.MANIFEST_LOADED, C.MANIFEST_TIMEOUT, C.QUOTA_EXCEEDED_ERROR, C.SCANNER_CHANGE, C.STREAM_BUFFER_START, C.STREAM_CHANGE, C.STREAM_CHANGE_START, C.STREAM_TARGET_CHANGE, C.AVAILABLE_STREAMS_CHANGED, C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, C.TEXT_TRACKS_AVAILABLE, C.DROPPED_FRAME_PERCENT_EXCEEDED, C.LOAD_SEGMENT_FAILED, C.AUDIO_TRACK_CHANGED, C.SEGMENT_CUES_LOADED, z.CAMERA_CHANGE, z.CAMERA_UPDATE, z.MOTION_END, z.MOTION_START, z.SPATIAL_UNSUPPORTED, z.WEBVR_ENTER, z.WEBVR_EXIT, z.WEBVR_HARDWARE_AVAILABLE, g.DURATION_CHANGE, g.ENDED, g.ERROR, g.LOAD_START, g.LOADED_DATA, g.LOADED_METADATA, g.PAUSE, g.PLAY, g.PLAYING, g.PROGRESS, g.RATE_CHANGE, g.RESIZE, g.SEEKED, g.SEEKING, g.STALLED, g.TIME_UPDATE, g.VOLUME_CHANGE, g.WAITING, g.ENTER_PICTURE_IN_PICTURE, g.LEAVE_PICTURE_IN_PICTURE, g.WEBKIT_BEGIN_FULLSCREEN, g.WEBKIT_END_FULLSCREEN])
        }(), vr(td.on, a.fire, [Jc.connected, Jc.disconnected]), te(), a.on(g.LOADED_METADATA, (function(t) {
            e.config.video.duration = l.duration, e.config.video.video_width = l.videoWidth, e.config.video.video_height = l.videoHeight
        })), a.on(g.DURATION_CHANGE, (function(t) {
            e.config.video.duration = l.duration
        })), a.on(C.SCANNER_CHANGE, (() => {
            te(), setTimeout((() => {
                a.fire(j.settingVolume ? Ht : Ut), a.fire(j.textTracks ? Gt : Ft)
            }), 0), rc.captureBreadcrumb(`Scanner changed to ${l.currentScannerName}`, {}, "video")
        })), a.on([K.EVENT_ACTIVE, K.EVENT_STARTED, K.EVENT_ENDED, K.ARCHIVE_DONE], (n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: nd,
                payload: e
            }))(n))
        })), a.on(Mn, (function(t) {
            o.isGoogleBot || (e.displayContext !== e.backbone ? e.displayContext.play() : function(t = {
                fromUserGesture: !0
            }) {
                var n;
                if (("disable" === e.config.video.privacy || !e.config.video.spatial || o.spatialPlayback || y) && l.element.classList.remove("invisible"), v) return a.fire(fn, null == (n = v) ? void 0 : n.type, v), void a.fire(pn);
                if (u = !0, f) a.fire(pn);
                else {
                    if (l.off(g.PLAY, S), c && (E = !0, a.fire(Wt)), t.fromUserGesture || (L = !0), !p) return !e.config.video.spatial || o.spatialPlayback || y ? void I().catch(console.error) : (y = !0, a.fire(wt, "spatial-redirect", "browser-support"), void a.once(g.PLAY, S));
                    p && w()
                }
            }(t))
        })).on(kn, (() => {
            u = !1, e.displayContext.pause()
        })).on(qi, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !l.paused && !e.config.embed.settings.background || u) && (u = !1, a.fire(kn))
        })), a.on(g.ERROR, (function(t) {
            if (P(t) && !L) {
                if (e.config.embed.autoplay = 0, l.pause(), e.startTime) return D(e.startTime), void a.fire(gn, l.currentTime);
                if (0 === l.currentTime) return void a.fire(kt);
                a.fire(gn, l.currentTime)
            }
        })), a.on(g.PLAY, (function(e) {
            l.element.classList.remove("invisible")
        })), a.on(g.PAUSE, (function(e, t) {
            m || a.fire(gn, e, t)
        })), a.on(g.TIME_UPDATE, (function({
            currentTime: e
        }) {})), a.on(g.ENDED, (function(t) {
            m || e.config.embed.loop || (E && a.fire(wn), u = !1, a.fire(Tn, t))
        })), a.on(C.DRM_AUTH_SUCCESS, (() => {
            _ = !0
        })), a.on(A, (() => {
            p = !0, a.once(g.TIME_UPDATE, (() => {
                a.fire(In)
            }))
        })), a.on(C.BUFFER_STARTED, (() => {})),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                var r, l;
                if (t) return;
                if (o.name.includes(X)) return;
                if (o.name === Z) return void a.fire(Ft);
                rc.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let s = e.config.video.live_event ? .25 : .01;
                if (o.name === J && !n) {
                    n = !0, s = .5;
                    const t = e.config.request,
                        i = t.files,
                        r = i.dash.cdns.fastly_skyfire.url,
                        a = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        _ = t.file_codecs,
                        p = e.config.video.file_codecs,
                        m = e.config.user.logged_in,
                        v = t.build.js;
                    rc.captureBreadcrumb(o.name, {
                        fastly_dash_url: r,
                        fastly_hls_url: a,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: _,
                        video_file_codecs: p,
                        logged_in: m,
                        version: v
                    }, "MediaUrlBadRequest config", "error")
                }
                const c = "string" != typeof o.message ? o.name : o.message,
                    d = new Error(c);
                d.name = o.name;
                const u = "object" == typeof o.message ? o.message : null;
                rc.captureException(d, u, s);
                const _ = la[o.name];
                if ("function" == typeof _) {
                    if (v = _(), null != (r = v) && r.final && a.off(g.ERROR, i), o.name === Q) {
                        let t = e.config.request.dynamic_drm_translation_map,
                            n = o.message.code;
                        v && t && n && t[n] && (v.title = t[n].title, v.message = t[n].msg), rc.captureBreadcrumb("DRM failure", o, "video")
                    }
                    a.fire(fn, null != (l = v) && l.deferred ? v.type : null, v, c)
                }
            }
            window.addEventListener("pagehide", (() => {
                t = !0
            }), !1), a.on(g.ERROR, i), a.on("test-error", i)
        }(), a.on(Mt, (function(t) {
            const n = !!t && ("boolean" == typeof o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, l.loop = n
        })), a.fire(Mt, e.config.embed.loop), a.on(xn, ((t, n) => {
            e.events.fire(Un, n), e.events.fire(Rt, t), p || a.fire(Mn)
        })), a.on(Fn, (function() {
            f || (m || (u = !l.paused), m = !0, l.pause())
        })), a.on(Gn, (function(e) {
            function t() {
                m = !1
            }
            return p ? !e && u ? (a.once(En, t), void w(!0)) : void t() : (a.once(En, t), void a.fire(Mn))
        })), a.on(Rt, (function(t) {
            f || (t = e.seekingController.getAllowedSeekTime(t), a.fire(on, t))
        })), a.on(on, (function(t) {
            p || e.fragmentsHandler.checkForNewFragment(t, l.duration), D(t)
        })),
        function() {
            a.on(Nt, (function(t, n, i, o = !0) {
                i && (t += l.volume), t = _r(t = lr(t, 0, 1)), e.displayContext !== l && (e.displayContext.volume = t), l.volume = t, e.events.fire(yn, t, n), l.muted && o && e.events.fire(Dt, !1, n)
            })), a.on(Dt, (function(t, n = !1) {
                l.muted = !!t, e.displayContext !== l && (e.displayContext.muted = t), e.events.fire(Ln, t, n)
            })), a.on(g.VOLUME_CHANGE, (() => {
                a.fire(yn, l.volume, !0)
            }));
            const t = e.config.request.cookie.volume;
            a.fire(Nt, t, !0), a.fire(Dt, e.config.embed.muted, !0)
        }(),
        function() {
            let e;
            a.on(Vt, (function(n, i) {
                (l.video.currentFile.mime === Pt.dash || t.get(ud)) && (i = !0), e = i, l.quality = n
            })), a.on(B, (function(t) {
                a.fire(An, t, e)
            }))
        }(),
        function() {
            let e = l.playbackRate;
            a.on(g.RATE_CHANGE, (function(t) {
                l.playbackRate !== e && (a.fire(On, l.playbackRate, e), e = l.playbackRate)
            })), a.on(ln, (function(e) {
                l.playbackRate = e
            })), a.on(zi, (function() {
                try {
                    l.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                f = !0, h = e, e !== vd && p && !T && (u = u || !l.paused, l.pause(), a.fire(gn, l.currentTime))
            }

            function t() {
                const e = h === bs.LEAD_CAPTURE_FORM && !p;
                f = !1, h = null, e ? a.fire(Mn) : u && !T && (E || b || !c || a.fire(Wt), w())
            }
            a.on(di, e), a.on(Yo, e), a.on(ui, t), a.on($o, t), a.on(Kn, (function(n) {
                n && n !== kr && n.isCentered() && (n.isVisible() ? e() : t())
            }))
        }(), a.on(fi, (function(e) {
            p && !T && (u = !l.paused, l.pause())
        })), a.on(Ei, (function(e) {
            T || w()
        })), a.on(ei, (function(e, t) {
            l.element.classList.remove("hide-webkit-controls"), e && (b = !0), e || (p || o.browser.safari || (l.poster = (e => {
                const t = e.querySelector(`.${$r.VP_PREVIEW}`);
                return t && t.getAttribute("data-thumb") || ""
            })(i)), E = !0, setTimeout((() => {
                l.textTracks.forEach((e => {
                    "hidden" === e.mode && (e.mode = "showing")
                }))
            }), 500)), t || !o.windowsPhone || o.browser.edge || a.fire(zt, !0)
        })), a.on(ni, (function(t) {
            l.poster = "", t || l.pause(), p || e.segmentedPlaybackEnabled || l.element.classList.add("invisible"), E = !1, b = !1, d && l.element.classList.add("hide-webkit-controls"), l.textTracks.forEach((e => {
                "showing" === e.mode && (e.mode = "hidden")
            }))
        })), a.on(A, (function() {
            l.poster = ""
        })), a.on(zt, (function(e) {
            if (e) return l.controls = !0, void i.classList.add("native-controls");
            l.controls = !1, i.classList.remove("native-controls")
        })), a.on(Ui, (function() {
            ne()
        })), a.on(Di, (function() {
            ne(), re()
        })), a.on(kt, (function() {
            if (e.segmentedPlaybackEnabled) oe();
            else {
                const t = e.element.querySelector("[telecine-snapshot]");
                t && "none" !== t.style.display || (a.fire(pn), l.element.classList.add("invisible")), setTimeout((() => {
                    l.unload(), a.fire(gn, l.currentTime), p = !1, u = !1, v = null
                }), 300)
            }
        })),
        function() {
            let t;
            a.on(Yt, (function(n, i = !1) {
                t = i;
                try {
                    var o;
                    (null != (o = e.config.request.flags) && o.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && l.videoElement && l.videoElement.setAttribute("crossorigin", "anonymous"), l.enableTextTrack(n)
                } catch (r) {}
            })).on($t, (function(n = !1) {
                var i;
                t = n, null != (i = e.config.request.flags) && i.ott && l.videoElement && l.videoElement.removeAttribute("crossorigin"), l.disableTextTrack()
            })).on(dn, (function() {
                l.requestCompleteLiveSubtitles()
            })).on(_n, (function(e) {
                l.setCaptionsShouldLoad(e)
            })), a.on(k, (function(e, n) {
                e && l.enableTextTrack(e.id), a.fire(qn, e, t || n)
            })), a.on(g.WEBKIT_BEGIN_FULLSCREEN, (function() {
                var e;
                null == (e = l.videoElement) || e.setAttribute("crossorigin", "anonymous")
            })), a.on(g.WEBKIT_END_FULLSCREEN, (function() {
                var t, n;
                null != (t = e.config.request.flags) && t.ott || null == (n = l.videoElement) || n.removeAttribute("crossorigin")
            }))
        }(), a.on($.AVAILABLE, (function({
            type: t
        }) {
            e.config.request.drm || "AirPlay" !== t || a.fire(uo)
        })), a.on($.UNAVAILABLE, (function({
            type: t
        }) {
            e.config.request.drm || "AirPlay" !== t || a.fire(_o)
        })), a.on($.ACTIVATED, (function({
            type: e
        }) {
            T = !0, "AirPlay" === e && a.fire(po)
        })), a.on($.DEACTIVATED, (function({
            type: e
        }) {
            T = !1, "AirPlay" === e && a.fire(mo)
        })), a.on(vo, (function() {
            l.showExternalDisplayPicker("AirPlay")
        })), a.on(Qt, (() => {
            e.canPlayPictureInPicture && l.requestPictureInPicture()
        })), a.on(en, (() => {
            l.pictureInPictureEnabled && l.exitPictureInPicture()
        })), ne(), o.spatialPlayback ? (a.fire(tn), a.on([g.PLAY, g.SEEKED], (() => {
            a.fire(nn)
        })), a.on(z.SPATIAL_UNSUPPORTED, (() => {
            p ? a.fire(ht, f) : a.once(In, (() => {
                a.fire(ht, f)
            }))
        }))) : a.once(In, (() => {
            e.config.video.spatial && a.fire(ft, f)
        })), window.addEventListener("beforeunload", (() => {
            const t = e.config.request.drm;
            t && ie(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), !1), a.on(zi, (() => {
            const t = e.config.request && e.config.request.drm;
            t && ie(t.hoover_url, t.user, t.asset, t.hoover_token)
        })), e.events.on(sn, (() => l.destroy())), "mediaSession" in navigator && (a.on(g.LOADED_METADATA, (() => (navigator.mediaSession.setActionHandler("play", (() => {
            I().then((() => l.fire(q.MEDIASESSION_PLAY))).catch(console.error)
        })), navigator.mediaSession.setActionHandler("pause", (() => {
            l.pause(), a.fire(q.MEDIASESSION_PAUSE)
        })), navigator.mediaSession.setActionHandler("seekto", (e => {
            l.currentTime = e.seekTime, a.fire(q.MEDIASESSION_SEEK_TO)
        })), navigator.mediaSession.setActionHandler("seekforward", (() => {
            l.currentTime = Math.min(l.duration, l.currentTime + 10), a.fire(q.MEDIASESSION_SEEK_FORWARD)
        })), void navigator.mediaSession.setActionHandler("seekbackward", (() => {
            l.currentTime = Math.max(0, l.currentTime - 10), a.fire(q.MEDIASESSION_SEEK_BACKWARD)
        }))))), a.on(g.PLAY, (() => (() => {
            const t = {
                title: e.config.video.title,
                artist: `from ${e.config.video.owner.name}`,
                artwork: [{
                    src: n(e.config.video.thumbnail_url, {
                        w: "640"
                    })
                }]
            };
            navigator.mediaSession.metadata = new MediaMetadata(t)
        })()))), e.ready().then((() => (setTimeout((() => re()), 0), oe(), null))).catch((e => {})), a.fire(ro)
}

function Td(e) {
    return "dev" === e.request.build.js ? "dev" : Ir
}
const yd = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    Ld = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    Ad = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    Sd = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    Id = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    Od = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    Pd = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    Rd = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    Nd = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    Dd = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    };

function wd(e) {
    var t, n, i, o, r = new u;

    function a() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function l() {
        t = !1, n = e.backbone ? e.backbone.currentTime : 0, i = 0, o = 0
    }

    function s(t, n, i) {
        e.verifyConfig().then((() => {
            let o = n;
            o.signature = e.config.request.signature, o.session = e.config.request.session, o.time = e.config.request.timestamp, o.expires = e.config.request.expires;
            const a = JSON.stringify(o);
            if (null === o.sessionTime && (rc.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: o
                }), rc.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const l = e.config.request.urls.player_telemetry_url + t;
            return r.logRequestPromiseWithUrl(l, a).then((t => {
                if (200 !== t.status && i < 2) {
                    if (410 === t.status) return void e.events.once(Ui, (() => {
                        s(l, n, i + 1)
                    }));
                    setTimeout((() => {
                        s(l, n, i + 1)
                    }), 1e3)
                }
            })).catch((e => {
                throw e
            }))
        })).catch((e => {}))
    }

    function c(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: null != (i = e.config.video.vod) && i.id ? e.config.video.vod.id : null,
            vodSaleId: null != (o = e.config.video.vod) && o.sale_id ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: _r(e.config.video.duration),
            seconds: _r(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: Td(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        s("/log/" + t, r)
    }
    return l(),
        function() {
            e.events.on(g.TIME_UPDATE, (function({
                currentTime: e,
                _duration: r,
                _timeProgress: l,
                playbackRate: s
            }) {
                !t && o + 1e3 < a() && (e > n && !(0 !== e && 0 === n) && (i += (e - n) / s), n = e)
            })), e.events.on(On, (function(e, t) {
                c("playback_rate_change", {
                    oldPlaybackRate: t
                })
            })), e.events.on(Fn, (function() {
                o = a(), t = !0
            })), e.events.on(Gn, (function() {
                n = e.backbone.currentTime, t = !1
            })), e.events.on(Tn, (function() {
                e.backbone.isLive() || (i += e.config.video.duration - n)
            }));
            let r = [],
                l = !1;

            function d() {
                let t = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                    n = 100,
                    o = Math.round(t.lat * n) / n,
                    a = Math.round(t.long * n) / n;
                const s = {
                    sessionTime: i,
                    videoTime: e.backbone.currentTime,
                    coordinates: {
                        lat: o,
                        lon: a
                    }
                };
                r.push(s), setTimeout((() => {
                    l && d()
                }), 1e3)
            }

            function u() {
                r.length && e.performDelegateAction(Dd, ((t, n = {}) => {
                    var i, o;
                    s("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: null != (i = e.config.video.vod) && i.id ? e.config.video.vod.id : null,
                        vodSaleId: null != (o = e.config.video.vod) && o.sale_id ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: Td(e.config),
                        motionLog: JSON.stringify(r)
                    }, !1)
                }))
            }
            e.events.on(z.MOTION_START, (() => {
                l = !0, d()
            })), e.events.on(z.MOTION_END, (() => {
                l = !1, u()
            })), e.events.on(zi, (() => {
                u(), r = []
            })), window.addEventListener("pagehide", (function() {
                e.backbone && e.backbone.currentTime > 0 && u()
            }), !1)
        }(),
        function() {
            let t;
            [{
                type: "share_press",
                event: ri
            }, {
                type: "facebook_press",
                event: _i
            }, {
                type: "twitter_press",
                event: pi
            }, {
                type: "tumblr_press",
                event: mi
            }, {
                type: "email_press",
                event: vi
            }, {
                type: "embed_press",
                event: ai
            }, {
                type: "login_success",
                event: Pi
            }, {
                type: "airplay",
                event: po
            }, {
                type: "vod_press",
                event: li
            }, {
                type: "collection_press",
                event: si
            }].forEach((function(t) {
                e.events.on(t.event, function(e) {
                    return function() {
                        c(e)
                    }
                }(t.type))
            })), e.events.on(qo, (function(e) {
                t = e
            })).on(Wi, (function() {
                var n, i = {
                    outroType: e.config.embed.outro,
                    ownerAccountType: e.config.video.owner.account_type,
                    playerWidth: e.element.clientWidth,
                    playerHeight: e.element.clientHeight
                };
                null != (n = t) && null != (n = n.videos) && n.length && (i.outroVideos = t.videos.map((e => e.id)).join(",")), c("outro_displayed", i)
            })).on($i, (function(t) {
                c("outro_video_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    videoId: t
                })
            })).on(ci, (function() {
                c("outro_follow_press", {
                    add: !e.config.user.following
                })
            })).on(eo, (function(t) {
                c("outro_cta_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(Xi, (function(t) {
                c("outro_link_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(Qi, (function(t) {
                c("outro_image_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(ii, (function() {
                c("like_press", {
                    add: !e.config.user.liked
                })
            })).on(oi, (function() {
                c("watch_later_press", {
                    add: !e.config.user.watch_later
                })
            })).on(fi, (function(e) {
                0 === e.indexOf("login-") && c("login_attempt")
            })).on(qn, (function(e, t) {
                t || (e ? c("text_track_change", {
                    textTrackLanguage: e.language,
                    textTrackKind: e.kind
                }) : c("text_track_change"))
            })).on(Jn, (function(e) {
                1 !== e && 12 !== e || c("badge_press", {
                    badgeId: e
                })
            })).on(no, (function(t) {
                c("card_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    cardId: t,
                    cardType: "link"
                })
            })).on(to, (function(t, n) {
                e.config.embed.editor || c("card_displayed", {
                    ownerAccountType: e.config.video.owner.account_type,
                    cardId: t,
                    cardType: n.url ? "link" : "text"
                })
            }))
        }(), e.events.on(Di, (function(e) {
            e && l()
        })), e.events.fire(ao), {}
}
const kd = {
    settings: {}
};

function Md(e = kd, {
    type: t,
    payload: n
}) {
    return t === ad ? r(r({}, e), n.embed) : e
}
var Vd = Object.freeze({
    __proto__: null,
    default: Md,
    transparent: e => e.embed.transparent
});

function Bd(e = {}, {
    type: t,
    payload: n
}) {
    return t === ad ? r(r({}, e), n.video) : e
}
const xd = e => e.video.height / e.video.width;
var Ud = Object.freeze({
    __proto__: null,
    default: Bd,
    ratio: xd
});
const Hd = "CONTAINER_RESIZE",
    Fd = "PLAYER_CONTAINER_RESIZE";

function Gd(e = {}, t) {
    return t.type === Hd ? r(r({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var Wd = Object.freeze({
    __proto__: null,
    default: Gd,
    width: e => e.ui.container.width,
    height: e => e.ui.container.height
});

function Yd(e = {}, t) {
    return t.type === Fd ? r(r({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var $d = Object.freeze({
    __proto__: null,
    default: Yd,
    width: e => e.ui.playercontainer.width,
    height: e => e.ui.playercontainer.height
});
const Kd = "PREVIEW_SET_SIZE";

function qd(e = {}, t) {
    return t.type === Kd ? r(r({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var zd = Object.freeze({
    __proto__: null,
    default: qd,
    scaleFactor: e => ar({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: ou.width(e),
        elementHeight: ou.height(e)
    }).scaleFactor
});

function jd(e = Yc, t) {
    switch (t.type) {
        case Lc:
            return r(r({}, e), Yc);
        case Ac:
            return r(r({}, e), {}, {
                fontSize: t.payload
            });
        case Oc:
            return r(r({}, e), {}, {
                color: t.payload
            });
        case Sc:
            return r(r({}, e), {}, {
                fontFamily: t.payload
            });
        case Ic:
            return r(r({}, e), {}, {
                fontOpacity: t.payload
            });
        case Pc:
            return r(r({}, e), {}, {
                bgOpacity: t.payload
            });
        case Rc:
            return r(r({}, e), {}, {
                bgColor: t.payload
            });
        case Dc:
            return r(r({}, e), {}, {
                windowColor: t.payload
            });
        case Nc:
            return r(r({}, e), {}, {
                windowOpacity: t.payload
            });
        case wc:
            return r(r({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var Xd = Object.freeze({
    __proto__: null,
    default: jd,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * ou.height(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const Zd = e => {
        const t = t => Math.min(e.height(t) / xd(t), e.width(t)),
            n = t => Math.min(e.width(t) * xd(t), e.height(t)),
            i = i => ar({
                width: t(i),
                height: n(i),
                elementWidth: e.width(i),
                elementHeight: e.height(i)
            }).scaleFactor,
            o = e => i(e) > 1,
            r = n => n.embed.transparent && !o(n) ? t(n) : e.width(n),
            a = t => t.embed.transparent && !o(t) ? n(t) : e.height(t),
            l = e => e.embed.transparent && !o(e) ? "contain" : "100% 100%",
            s = te((e => ({
                width: r(e),
                height: a(e)
            }))),
            c = te((e => ({
                ratio: xd(e),
                size: l(e)
            })));
        return {
            scaleFactor: i,
            width: r,
            height: a,
            size: l,
            boundingRect: s,
            settings: c
        }
    },
    Jd = {
        xxs: 0,
        xs: 430,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    Qd = (e, t) => {
        const n = te((n => ({
                width: e(n),
                height: t(n)
            }))),
            i = e => {
                const {
                    height: t,
                    width: n
                } = e.video;
                return t > n
            },
            o = n => {
                const o = e(n),
                    r = t(n);
                if (i(n)) return o < 225;
                const a = c(n.embed.settings.customLogo) && o < 300 || r < 169,
                    l = !c(n.embed.settings.customLogo) && (o < 338 || r < 190);
                return a || l
            },
            r = t => {
                const n = e(t);
                if (i(t)) return n < 300;
                const o = c(t.embed.settings.customLogo) && n <= 375,
                    r = !c(t.embed.settings.customLogo) && n <= 450;
                return o || r
            },
            a = t => {
                const n = e(t);
                return n >= Jd.xxs && n < Jd.xs
            },
            l = t => {
                const n = e(t);
                return n >= Jd.xs && n < Jd.sm
            },
            s = t => {
                const n = e(t);
                return n >= Jd.sm && n < Jd.md
            },
            d = t => {
                const n = e(t);
                return n >= Jd.md && n < Jd.lg
            },
            u = t => {
                const n = e(t);
                return n >= Jd.lg && n < Jd.xl
            },
            _ = t => {
                const n = e(t);
                return n >= Jd.xl && n < Jd.xxl
            },
            p = t => e(t) >= Jd.xxl;
        return {
            width: e,
            height: t,
            breakpoint: e => {
                const t = {
                    xxs: a,
                    xs: l,
                    sm: s,
                    md: d,
                    lg: u,
                    xl: _,
                    xxl: p
                };
                return Object.keys(Jd).find((n => t[n](e)))
            },
            xxl: p,
            xl: _,
            lg: u,
            md: d,
            sm: s,
            xs: l,
            xxs: a,
            mode: e => o(e) ? "tiny" : r(e) ? "mini" : "normal",
            isMiniMode: r,
            isTinyMode: o,
            isVerticalVideo: i,
            boundingRect: n
        }
    };
var eu = Object.freeze({
    __proto__: null,
    scaleFactor: e => ar({
        width: e.video.width,
        height: e.video.height,
        elementWidth: ou.width(e),
        elementHeight: ou.height(e)
    }).scaleFactor
});
const tu = e => ou.isVerticalVideo(e) ? ou.isTinyMode(e) : ou.isMiniMode(e) || ou.isTinyMode(e) || ou.xs(e) || ou.xxs(e);
var nu = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && ou.width(e) < 415,
    isMenuFullWidth: tu,
    isMenuVerticalVideoMode: e => !tu(e) && ou.isVerticalVideo(e) && ou.xxs(e) && ou.height(e) > 300,
    doMenuItemsWrap: e => ou.width(e) < 240
});

function iu(e = {}, t) {
    return {
        container: Gd(e.container, t),
        preview: qd(e.preview, t),
        captions: jd(e.captions, t),
        playercontainer: Yd(e.playercontainer, t)
    }
}
const ou = Qd((e => lu.width(e)), (e => lu.height(e))),
    ru = Qd((e => au.width(e)), (e => au.height(e))),
    au = Zd(Wd),
    lu = Zd($d);
var su = Object.freeze({
    __proto__: null,
    default: iu,
    container: Wd,
    player: ou,
    appLayout: au,
    playerLayout: lu,
    preview: zd,
    video: eu,
    controlbar: nu,
    captions: Xd,
    playercontainer: $d,
    app: ru
});

function cu(e = {}, t) {
    const n = r(r({}, function(e = {}, t) {
        return t.type === ad ? r(r({}, e), t.payload) : e
    }(e, t)), {}, {
        embed: Md(e.embed, t),
        video: Bd(e.video, t),
        liveEvent: sd(e.liveEvent, t)
    });
    return r(r({}, n), {}, {
        ui: iu(e.ui, t)
    })
}
var du = Object.freeze({
    __proto__: null,
    default: cu,
    embed: Vd,
    video: Ud,
    liveEvent: md,
    ui: su
});
const uu = function(e) {
    return (t, ...n) => (n.forEach((n => {
        for (const i in n) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            Object.defineProperty(t, i, Object.assign(o, e))
        }
    })), t)
}({
    enumerable: !0,
    configurable: !0,
    writeable: !1
});

function _u(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function pu() {}

function mu(e) {
    var t = e();
    if (t && t.then) return t.then(pu)
}

function vu(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}

function fu(e, t, n) {
    const i = vu((function() {
            return mu((function() {
                if (!c()) return _u(e.ready(), (function() {
                    s()
                }))
            }))
        })),
        o = vu((function() {
            return mu((function() {
                if (!c()) return _u(e.playbackEngineReady(), (function() {
                    s()
                }))
            }))
        })),
        r = c() ? n.parentElement : n,
        a = n.querySelector(`.${$r.VP_VIDEO_WRAPPER}`),
        l = b(s, 150);

    function s() {
        (function() {
            const {
                width: e,
                height: n
            } = or(r), i = t.get("ui.app.width"), o = t.get("ui.app.height"), a = i > 0 && o > 0, l = e > 0 && n > 0;
            (c() || !a || l) && t.dispatch(((e, t) => ({
                type: Hd,
                payload: {
                    width: e,
                    height: t
                }
            }))(e, n))
        })(),
        function() {
            const {
                width: e,
                height: n
            } = or(a), i = t.get("ui.player.width"), o = t.get("ui.player.height"), r = i > 0 && o > 0, l = e > 0 && n > 0;
            (c() || !r || l) && t.dispatch(((e, t) => ({
                type: Fd,
                payload: {
                    width: e,
                    height: t
                }
            }))(e, n))
        }()
    }

    function c() {
        return n.parentElement === document.body
    }

    function d({
        size: e,
        ratio: t,
        bottom: i
    }) {
        c() && (r.classList.toggle("vp-center", "contain" === e), function(e) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map((t => e.style.removeProperty(t)))
        }(n), "contain" !== e ? i > 0 && mr(n, {
            height: `calc(100% - ${i}px)`,
            bottom: i / 2 + "px"
        }) : mr(n, i > 0 ? {
            maxWidth: `calc((100vh - ${i}px) / ${t})`,
            maxHeight: `calc(100vh - ${i}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: i / 2 + "px"
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.appLayout.settings", d), d(t.get("ui.appLayout.settings")), new oe(l).observe(r), window.addEventListener("orientationchange", l), e.events.on(ei, l), e.events.on(ni, l), e.events.on(Di, l), s(), o(), i(), _u()
}

function hu(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function Eu(e) {
    const {
        videoObject: t
    } = bu();
    null == e || !e.length || null != t && t.transcript || gu({
        transcript: e.map((({
            text: e
        }) => e)).join(" ")
    })
}

function gu(e) {
    const {
        videoObject: t,
        element: n
    } = bu();
    if (t) try {
        Object.assign(t, e), n.textContent = JSON.stringify(t)
    } catch (i) {}
}

function bu() {
    const e = document.body.querySelector("script[type='application/ld+json']");
    if (e) try {
        return {
            videoObject: JSON.parse(e.textContent),
            element: e
        }
    } catch (t) {}
    return {}
}

function Cu(e, t) {
    switch (e.view) {
        case Lr.privateLocked:
            throw new re("The video is private.", "PrivacyError", t);
        case Lr.privatePassword:
            throw new re("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case Lr.geoBlocked:
            throw new re("The video is not available in your region.", "GeoBlockedError", t);
        case Lr.error:
            throw new re(e.message, "NotFoundError", t)
    }
}

function Tu(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}

function yu(e) {
    const t = e.events;
    let n, i, o, l = new N,
        s = !1,
        c = !1,
        d = null,
        u = !1,
        _ = null,
        p = null,
        m = !1,
        v = [];

    function f(t) {
        i !== t && (i = t, e.config.embed.api = t)
    }

    function h() {
        n && n.emit("exitFullscreen"), e.events.halt()
    }

    function E() {
        var t = _r(e.config.request.cookie.volume);
        return 1 === i ? Math.round(100 * t) : t
    }

    function b(n, i, o, r = []) {
        const l = Hr[i];
        let s = e.config.embed[l];
        s || i !== Vr || (s = e.config.embed.color);
        let c = e.config.embed.settings[`force_${l}`];
        if (c || i !== Vr || (c = e.config.embed.settings.color), c && !e.config.embed.on_site) throw new re(`The creator of the video has chosen to always use ${new a(s).hex}.`, "EmbedSettingsError", o);
        try {
            const o = new a(n);
            t.fire(xt, o.hex, i), r.forEach((function(t) {
                const n = Hr[t],
                    i = e.config.embed[n];
                try {
                    new a(i).contrast(o).ratio
                } catch (ke) {}
            }))
        } catch (ke) {
            throw new re("The color should be a valid hex value.", "TypeError", o)
        }
    }
    let T = {
        ping: () => e.config.video.id,
        notifyTimingObjectConnect() {
            e.bigPicture.sendEvent(Ml.TIMING_OBJECT_CONNECT)
        },
        notifyTimingObjectDisconnect() {
            e.bigPicture.sendEvent(Ml.TIMING_OBJECT_DISCONNECT)
        },
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t);
            const i = !0;
            t ? (e.events.prependOn(wn, h), n.listeners.exitFullscreen = !0, e.events.fire(Qn), e.events.fire(ei, !0, i)) : (e.events.off(wn, h), n.listeners.exitFullscreen = !1, e.events.fire(ti), e.events.fire(ni, i))
        },
        on(e, t) {
            e in Sr && (e = Sr[e]);
            const i = fr(Ar);
            if (i.indexOf(e) < 0) throw new re(`“${e}” is not a valid event. Valid events are: ${i.join(", ")}.`, "TypeError", "on");
            t && l.on(e, t), n && (n.listeners[e] = !0), e === Ar.LOADED && O()
        },
        off(e, t) {
            t && l.off(e, t), n && (n.listeners[e] = !1)
        },
        play: () => new Promise(((n, i) => {
            t.once(En, n), t.once(hn, (e => {
                i(new re(e.message, e.name, "play"))
            })), Cu(e.config, "play"), t.fire(br._play), t.fire(Mn, {
                fromUserGesture: !1
            })
        })),
        destroy() {
            t.fire(sn)
        },
        pause() {
            Cu(e.config, "pause"), t.fire(br._pause), t.fire(kn)
        },
        loadVideo(t) {
            const {
                id: i,
                url: o,
                params: r
            } = function(e) {
                if (!e) return {};
                if (er(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!er(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!i && !o) throw new re("The video id must be an integer.", "TypeError", "loadVideo");
            if (o && ! function(e, t) {
                    return null !== e.match(new RegExp(`^https?://${t.player_url}/video/([0-9]+)`)) || null !== e.match(new RegExp(`^https?://${t.vimeo_url}/([0-9]+)`))
                }(o, e.config)) throw new re("The url must be a valid Vimeo url.", "TypeError", "loadVideo");
            const a = function(e, t, n, i) {
                var o;
                if (t === e.video.id) return !0;
                const r = `^https?://${e.player_url}/video/${e.video.id}(/(config/?)?)?(\\?.*)?$`,
                    a = `^https?://${e.player_url}/video/([0-9]+)`;
                if (null != n && n.match(new RegExp(r))) return !0;
                const l = bl(n || "", "s") || (null == i || null == (o = i.s) ? void 0 : o.length);
                return !(!n || null === n.match(new RegExp(a)) || !l)
            }(e.config, i, o, r) || !_s(e.element);
            if (a) return e.loadVideoViaConfig(o || i, r).then((() => t)).catch((() => {
                throw Cu(e.config, "loadVideo"), new re("An error occurred loading the video.", "Error", "loadVideo")
            }));
            throw e.loadVideoViaIframe(o || i, r, n.listeners), new re("The player is being reloaded.", "InternalError", "loadVideo")
        },
        unload() {
            e.config.view !== Lr.main && e.config.view !== Lr.privateUnlocked || t.fire(kt)
        },
        addCuePoint(n, i) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new re(`Cue point time must be positive number less than the duration of the video (${_r(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(n, i);
                return setTimeout((() => {
                    t.fire(zn, o)
                }), 0), o.id
            } catch (ke) {
                if ("CuePointsNotSupported" === ke.name) throw new re("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new re("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(n) {
            const i = e.backbone.cuePoints.filter((e => e.id === n))[0];
            if (!i) throw new re(`Cue point “${n}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(i), setTimeout((() => {
                t.fire(jn, i)
            }), 0)
        },
        enableTextTrack(n, o = null) {
            let r = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map((e => (e.language = e.lang, e)));
            const a = r.some((e => e.language.toLowerCase() === n.toLowerCase()));
            if (!a) throw new re(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const l = o ? `${n}.${o}` : n,
                {
                    track: s
                } = ((e, t = []) => {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter((e => r && e.language === n || e.language === o)).sort(((e, t) => {
                        const r = 2 * Number(e.language === o && e.kind === i) + 2 * Number(e.language === n) + 1 * Number(e.kind === i);
                        return 2 * Number(t.language === o && t.kind === i) + 2 * Number(t.language === n) + 1 * Number(t.kind === i) - r
                    }));
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                })(l, r);
            if (!s || o && s.kind !== o) throw new re(`There are no ${o} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return t.fire(Yt, s.id), i < 3 ? null : new Promise((e => {
                t.once(qn, (t => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                }))
            }))
        },
        disableTextTrack() {
            t.fire($t)
        },
        toggleFullscreen(e) {
            const n = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise(((i, o) => {
                if (!se.element === e) {
                    const r = () => {
                            se.off("enter", r), i()
                        },
                        a = (t, i) => {
                            se.off("error", a);
                            const r = n[i] || n.not_supported;
                            o(new re(r.msg, r.name, (e ? "request" : "exit") + "Fullscreen"))
                        };
                    return se.on("enter", r), se.on("error", a), void t.fire(wn)
                }
                i()
            }))
        },
        requestFullscreen: () => T.toggleFullscreen(!0),
        exitFullscreen: () => T.toggleFullscreen(!1),
        get fullscreen() {
            return !!se.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        remotePlaybackPrompt() {
            try {
                e.backbone.showExternalDisplayPicker()
            } catch (t) {
                throw new re("Remote playback is not available.", "NotFoundError", "remotePlaybackPrompt")
            }
        },
        appendVideoMetadata: n => new Promise(((i, o) => {
            try {
                const o = Array.from(e.backbone.chapters);
                e.parentUrl = n,
                    function(e, t, n) {
                        const {
                            duration: i,
                            id: o,
                            privacy: r
                        } = e.video;
                        if (r !== St && r !== yt && r !== Ot) return;
                        const a = function(e, t, n, i) {
                            if (t < 30 || 0 === i.length) return [];
                            const o = [];
                            return i.forEach(((r, a) => {
                                const {
                                    startTime: l,
                                    text: s
                                } = r;
                                if (l < t) {
                                    var c;
                                    const t = null == i || null == (c = i[a + 1]) ? void 0 : c.startTime,
                                        r = `${wr}${e}`,
                                        [d] = n.split("#"),
                                        u = `${d}#${r}=${l}`;
                                    o.push({
                                        "@type": "Clip",
                                        name: s,
                                        startOffset: l,
                                        endOffset: t,
                                        url: u
                                    })
                                }
                            })), o.length && (o[o.length - 1].endOffset = t), o
                        }(o, i, t, n);
                        gu({
                            hasPart: a
                        })
                    }(e.config, n, o), t.fire(Uo, n), i()
            } catch (r) {
                o(new re((null == r ? void 0 : r.message) || "", (null == r ? void 0 : r.name) || "", "appendVideoMetadata"))
            }
        })),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!td.currentSession
        },
        get color() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorOne() {
            var t;
            return null == (t = e.config.embed.color_one) ? void 0 : t.replace("#", "")
        },
        get colorTwo() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorThree() {
            var t;
            return null == (t = e.config.embed.color_three) ? void 0 : t.replace("#", "")
        },
        get colorFour() {
            var t;
            return null == (t = e.config.embed.color_four) ? void 0 : t.replace("#", "")
        },
        set color(e) {
            b(e, Vr, "setColor")
        },
        set colorOne(e) {
            b(e, Mr, "setColorOne", [Vr, Br])
        },
        set colorTwo(e) {
            b(e, Vr, "setColorTwo", [Mr])
        },
        set colorThree(e) {
            b(e, Br, "setColorThree", [Mr])
        },
        set colorFour(e) {
            b(e, xr, "setColorFour")
        },
        get cuePoints() {
            return e.backbone.cuePoints.map((e => ({
                time: e.time,
                data: e.data,
                id: e.id
            })))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(n) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new re(`Seconds must be a positive number less than the duration of the video (${_r(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return t.fire(br._seek), e.config.embed.on_site || (e.seekingController.maxPlayedTime = n), t.fire(Rt, n), t.fire(Ti), i < 3 ? null : new Promise((e => {
                t.once(g.SEEKED, (({
                    currentTime: t
                }) => {
                    e(t)
                }))
            }))
        },
        get duration() {
            return _r(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            t.fire(Mt, e)
        },
        set muted(e) {
            t.fire(Dt, e, !0)
        },
        get muted() {
            return e.backbone.muted || 0 === E()
        },
        get paused() {
            return !e.backbone || !("paused" in e.backbone) || !!e.backbone.paused
        },
        get buffered() {
            return Tu(e.backbone.buffered)
        },
        get played() {
            return Tu(e.backbone.played)
        },
        get seekable() {
            return Tu(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(n) {
            if (!e.config.embed.settings.speed) throw new re("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(n) || n > 2) throw new re("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            t.fire(ln, n)
        },
        get remotePlaybackAvailability() {
            return e.backbone.externalDisplayAvailable
        },
        get remotePlaybackState() {
            return e.backbone.externalDisplayActive ? "connected" : "disconnected"
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map((e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === _ ? "showing" : "disabled"
            })))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new re("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            return E()
        },
        set volume(e) {
            if (e = parseFloat(e), 1 === i && (e /= 100), isNaN(e) || e < 0 || e > 1) throw new re("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            p = e;
            var n = !0;
            j.settingVolume || 0 !== e ? t.fire(Nt, e, n) : t.fire(Dt, !0, n)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!hu(e.config.video.owner)) throw new re("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map((e => e.id));
            if (!n.includes(t)) throw new re(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideoViaConfig(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(n) {
            e.config.user.liked !== n && t.fire(ii, n)
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(n) {
            e.config.user.watch_later !== n && t.fire(oi, n)
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex((e => t === e.id));
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map(((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            })))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new re(`Chapter timecode must be positive number less than the duration of the video (${_r(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (ke) {
                if ("ChaptersNotSupported" === ke.name) throw new re(ke.message, "UnsupportedError", "_addChapter");
                throw new re("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (ke) {
                throw new re("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new re("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (ke) {
                if ("ChaptersNotSupported" === ke.name) throw new re("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new re("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            t.fire(rn, e)
        },
        _removeCard(e) {
            t.fire(an, e)
        },
        _setOutro(n, i) {
            e.config.embed.outro !== n ? (t.fire(Xt), setTimeout((() => {
                e.config.embed.outro = n, t.fire(jt, n, i)
            }), 400)) : t.fire(jt, n, i)
        },
        _hideOutro() {
            t.fire(Xt)
        },
        _fireEvent(...e) {
            t.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(n) {
            e.config.video.live_event && (Object.keys(n).forEach((i => {
                let o = n[i];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[i] = o, t.fire(wi, i, o), t.fire(K.SETTINGS_UPDATED, i, o)
            })), t.fire(Di, !1, e.config))
        },
        _setEmbedSettings(n) {
            Object.keys(n).forEach((i => {
                let r = n[i];
                r = "object" == typeof r ? r : Number(r), "badge" === i && (r ? r = o : o = e.config.embed.settings.badge), e.config.embed.settings[i] = r, t.fire(Hi, i, r)
            })), t.fire(Di, !1, e.config)
        },
        _setEmbedSetting(n, i) {
            i = "object" == typeof i ? i : Number(i), "badge" === n && (i ? i = o : o = e.config.embed.settings.badge), e.config.embed.settings[n] = i, t.fire(Hi, n, i), t.fire(Di, !1, e.config)
        },
        _setCreateInteractive(n, i) {
            e.config.embed.create_interactive = n, e.config.embed.interactive = i, t.fire(Fi, n, e.config), t.fire(Di, !1, e.config)
        },
        _setOTTVideoMetadata(n) {
            var i;
            null != (i = e.config.request.flags) && i.ott && (e.ottVideoMetadata = n, t.fire(Gi, n))
        },
        _toggleDebugPanel() {
            t.fire(hi)
        },
        _overrideControlbarBehavior(e) {
            t.fire(Jt, e)
        },
        _setControlbarVisibility(e) {
            t.fire(Zt, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new re("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new re("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (ke) {
                throw new re(ke.message, ke.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new re("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new re("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new re("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new re("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (ke) {
                throw new re(ke.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = td.currentSession;
            t && ce(e) && t.sendMessage(Zc, {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: `.${$r.VP_TITLE}`,
                sidedock: `.${$r.VP_SIDEDOCK}`,
                controls: `.${$r.VP_CONTROLS}`,
                customLogo: `.${$r.CUSTOM_LOGO}`
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = 10,
                o = {
                    get details() {
                        const e = or(document.querySelector(".headers > h1")),
                            t = or(document.querySelector(".sub-title")),
                            n = or(document.querySelector(".vp-portrait")),
                            o = Math.max(e.width, t.width) + n.width,
                            r = Math.max(n.height, e.height + t.height);
                        return {
                            top: i,
                            left: i,
                            width: Math.max(200, o),
                            height: Math.max(60, r)
                        }
                    },
                    get sidedock() {
                        return {
                            top: i,
                            left: t - i - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = o.customLogo,
                            r = Math.max(60, e.height);
                        return {
                            height: r,
                            top: n - i - r,
                            left: i,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            o = e ? or(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - i - o.height,
                            left: t - i - o.width,
                            width: o.width,
                            height: o.height
                        }
                    }
                };
            return o
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        addEventListener(...e) {
            T.on.apply(T, e)
        },
        removeEventListener(...e) {
            T.off.apply(T, e)
        },
        seekTo(e) {
            T.currentTime = e
        },
        changeColor(e) {
            T.color = e
        }
    };
    const y = {
        addCuePoint: ({
            time: e,
            data: t
        }) => T.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            T.enableTextTrack(e, t)
        }
    };

    function L(e, t) {
        n && n.emit(e, t), l.fire(e, t)
    }
    const A = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        L(e, i)
    };

    function S({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: _r(e),
            percent: _r(n),
            duration: _r(t)
        }
    }

    function I(e) {
        return {
            playbackRate: e
        }
    }

    function O() {
        L(Ar.LOADED, u ? null : (u = !0, {
            id: e.config.video.id
        }))
    }

    function P(e) {
        return d = e, R(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new re("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new re("There was an error loading the files for this video.", "FileError")
            }
            return new re("An error occurred during playback.", "PlaybackError")
        }(d))
    }

    function R(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            var e;
            let t = new URL(window.location.href);
            m = !!t.searchParams.get("fromLoadVideo"), v = (null == (e = t.searchParams.get("listeners")) ? void 0 : e.split(",")) || [], (m || v.length) && (t.searchParams.delete("fromLoadVideo"), t.searchParams.delete("listeners"))
        }(),
        function() {
            const i = e.config.embed.on_site;
            i && !_s(e.element) || (f(e.config.embed.api), n = new ae({
                hidePrivateMethods: !i
            }), n.configureClient(window.parent, "*"), n.filter((function() {
                return le()
            })), n.listeners = fr(Ar).reduce(((e, t) => r(r({}, e), {}, {
                [t]: !1
            })), {}), v.length ? v.forEach((e => {
                n.listeners[e] = !0
            })) : (n.listeners[Ar.READY] = !0, n.listeners[Ar.ERROR] = !0), n.filter((e => n.listeners[e])), t.on(Wo, ((e, t, i) => {
                n.addAllowedActor(e, null == t ? void 0 : t.contentWindow, i)
            })))
        }(),
        function() {
            if (!n) return;
            const t = uu({}, T, y);
            n.extendMethods(t), n.hooks({
                logError(e) {
                    "InternalError" !== e.name && L(Ar.ERROR, R(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (ce(e)) return f(3), e;
                    try {
                        const t = JSON.parse(e);
                        return f(2), t
                    } catch (t) {
                        return f(null), L(Ar.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    null != (n = e.config.embed) && n.player_id && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === i && (t = function(e) {
                            if (e.event) {
                                for (const t in Sr)
                                    if (Sr[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), ce(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (ke) {}
                    return t
                }
            })
        }(), t.on(C.BUFFER_STARTED, A(Ar.BUFFER_START)), t.on(C.BUFFER_ENDED, A(Ar.BUFFER_END)), t.on(C.CUE_POINT, A(Ar.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), t.on(M, A(Ar.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), t.on(Hn, A(Ar.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex((e => t === e.id));
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), t.on(Tn, A(Ar.ENDED, (function() {
            return c = !1, {
                seconds: _r(e.config.video.duration),
                percent: 1,
                duration: _r(e.config.video.duration)
            }
        }))), t.on(gn, A(Ar.PAUSE, (function(t) {
            return c = !1, {
                seconds: _r(t),
                percent: _r(t / e.config.video.duration),
                duration: _r(e.config.video.duration)
            }
        }))), t.on(On, A(Ar.PLAYBACK_RATE_CHANGE, I)), t.on(On, A(Ar.RATE_CHANGE, I)), t.on(qn, A(Ar.TEXT_TRACK_CHANGE, (function(e) {
            _ = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), t.on(yn, A(Ar.VOLUME_CHANGE, (function(t) {
            return {
                volume: _r(t),
                muted: e.backbone.muted
            }
        }))), t.on(Wn, A(Ar.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Yn, A(Ar.TOAST_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Di, (function(e) {
            p && setTimeout((function() {
                var e = !0;
                j.settingVolume || 0 !== p ? t.fire(Nt, p, e) : t.fire(Dt, !0, e)
            }), 0), e && O()
        })), t.on(fn, (function(e) {
            const t = P(e);
            s && L(Ar.ERROR, t)
        })), t.on(ei, A(Ar.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), t.on(ni, A(Ar.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), t.on(An, A(Ar.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), t.on(To, A(Ar.AD_STARTED)), t.on(ho, A(Ar.AD_COMPLETED)), t.on(go, A(Ar.AD_ERROR)), t.on(yo, A(Ar.AD_SKIPPED)), t.on(Lo, A(Ar.AD_ALL_COMPLETED)), t.on(Eo, A(Ar.AD_CLICKED)), t.on(So, A(Ar.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), t.on(Io, A(Ar.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), t.once(so, (function() {
            s = !0, m ? (O(), function(e, t) {
                n && n.emitMethodEvent(e, t)
            }(Ar.LOAD_VIDEO, e.config.video.id)) : L(Ar.READY), d && (L(Ar.ERROR, P(d)), d = null)
        })), t.on(K.EVENT_ENDED, A(Ar.LIVE_EVENT_ENDED)), t.on(K.EVENT_STARTED, A(Ar.LIVE_EVENT_STARTED)), t.on(K.STREAM_OFFLINE, A(Ar.LIVE_STREAM_OFFLINE)), t.on(K.STREAM_ONLINE, A(Ar.LIVE_STREAM_ONLINE)), t.on(z.CAMERA_CHANGE, A(Ar.CAMERA_CHANGE, (function(e) {
            return e
        }))), t.on(z.MOTION_END, A(Ar.MOTION_END)), t.on(z.MOTION_START, A(Ar.MOTION_START)), t.on(z.WEBVR_HARDWARE_AVAILABLE, A(Ar.WEBVR_HARDWARE_AVAILABLE)), t.on(z.WEBVR_ENTER, A(Ar.ENTER_WEBVR)), t.on(z.WEBVR_EXIT, A(Ar.EXIT_WEBVR)), t.on(z.SPATIAL_UNSUPPORTED, A(Ar.SPATIAL_UNSUPPORTED)), t.on(g.PLAY, A(Ar.PLAY, (function(t) {
            return c ? null : (c = !0, {
                seconds: _r(t),
                percent: _r(t / e.config.video.duration),
                duration: _r(e.config.video.duration)
            })
        }))), t.on(g.PLAYING, A(Ar.PLAYING, (function() {
            return c ? {
                seconds: _r(e.currentTime),
                percent: _r(e.currentTime / e.config.video.duration),
                duration: _r(e.config.video.duration)
            } : null
        }))), t.on(g.PROGRESS, A(Ar.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let o = {
                seconds: _r(e),
                percent: _r(n),
                duration: _r(t)
            };
            return i < 3 && (o.bytesLoaded = -1, o.bytesTotal = -1), o
        }))), t.on(g.SEEKING, A(Ar.SEEKING, S)), t.on(g.SEEKED, A(Ar.SEEKED, S)), t.on(g.TIME_UPDATE, A(Ar.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: _r(e),
                percent: _r(n),
                duration: _r(t)
            }
        }))), t.on(g.LOADED_METADATA, A(Ar.LOADED_METADATA)), t.on(g.DURATION_CHANGE, A(Ar.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), t.on(g.WAITING, A(Ar.WAITING)), t.on(g.LOADED_DATA, A(Ar.LOADED_DATA)), t.on(g.LOAD_START, A(Ar.LOAD_START)), t.on(g.RESIZE, A(Ar.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), t.on(g.ENTER_PICTURE_IN_PICTURE, A(Ar.ENTER_PICTURE_IN_PICTURE)), t.on(g.LEAVE_PICTURE_IN_PICTURE, A(Ar.LEAVE_PICTURE_IN_PICTURE)), t.on(Jc.connected, A(Ar.CHROMECAST_CONNECTED)), t.on(uo, A(Ar.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, (() => !0))), t.on(_o, A(Ar.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, (() => !1))), t.on(po, A(Ar.REMOTE_PLAYBACK_CONNECT)), t.on(mo, A(Ar.REMOTE_PLAYBACK_DISCONNECT)), t.on(kt, (function() {
            d = null, u = !1
        })), t.on(io, (function(e = {}) {
            n && (n.listeners[Ar.SPACE_CHANGE] = !0, L(Ar.SPACE_CHANGE, e))
        })), t.fire(lo), T
}
const Lu = r(r({}, de), {}, {
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr"
});

function Au(e) {
    return hr("av01", e) ? "AV1" : hr("dvh1", e) ? "HEVC_DVH1" : hr("hvc1", e) ? "HEVC" : hr("avc1", e) ? "AVC" : e || ""
}

function Su(e) {
    return hr("mp4a", e) ? "AAC" : hr("opus", e) ? "OPUS" : e || ""
}

function Iu(e, t) {
    var n;
    return null != e && null != (n = e.request) && null != (n = n.ab_tests) && n[t] ? e.request.ab_tests[t] : {}
}
const Ou = [];

function Pu(e, t, n) {
    const i = o.webShare && (o.iOS || o.android || o.mobileAndroid) && !t;
    let r = "";
    if (n && i) r = "variant";
    else if (i && e >= 1092547371) {
        const t = 10,
            n = e % 100;
        n < t && (r = n < t / 2 ? "variant" : "control")
    }
    return r
}

function Ru(t, n) {
    const i = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (ke) {
                return Promise.reject(ke)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const r = i.headers;
        return function(e, t) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(a) {
            if ("video" === e.type) {
                const r = t.backbone.representations.reverse(),
                    l = r[e.stream];
                if (!l) return;
                const s = function(e, n, i, o, r, a) {
                    const l = i.headers;
                    delete l[""];
                    let s = {};
                    Object.keys(l).forEach((e => {
                        const t = l[e],
                            n = e.replace(c, "_");
                        s[n] = t
                    }));
                    let d = a.slice();
                    return d.forEach((e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    })), {
                        host: Ee(n.data.url),
                        product: Yl(t.config),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: d,
                        clip_id: t.config.video.id,
                        headers: s,
                        buffered: _r(ve(t.backbone.currentTime, t.backbone.buffered), 2),
                        request_id: n.data.uuid ? n.data.uuid : "",
                        ttfb: Zs()
                    }
                }(e, n, i, a, l, r);
                let _ = s;
                o && (_ = ge({
                    extraContext: o
                }, s)), t.events.fire(Ao, {
                    name: Lu.CHUNK_DOWNLOADED,
                    data: _
                });
                const p = {
                    ak_reference_id: s.headers.akamai_grn || null,
                    akamai_edge_ip: s.headers.akamai_request_bc || null,
                    akamai_request_bc: s.headers.akamai_request_bc || null,
                    content_length: s.headers.content_length || null,
                    content_type: s.headers.content_type || null,
                    x_cache: s.headers.x_cache || null,
                    x_cache_hits: s.headers.x_cache_hits || null
                };
                s.headers = p, Iu(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(e, t, n) {
                    const i = Date.now(),
                        o = [{
                            uuid: d(),
                            created_at: i,
                            event: {
                                name: "chunk_downloads",
                                version: 5,
                                ts_ms: i,
                                fields: t
                            },
                            tracker: {
                                name: "vimeo-player",
                                version: n
                            }
                        }];
                    u(e).logRequestPromiseWithUrl(e, JSON.stringify(o), !0)
                }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", s, Td(t.config)), Z += a.byteLength, Q = s
            }
            "akamai-grn" in r && (U = r["akamai-grn"]),
                function({
                    headers: e,
                    url: t
                }) {
                    const n = ns(e);
                    n === tl.CacheMiss ? F = {
                        url: t,
                        edge: !1,
                        tier1: !1,
                        tier2: !1
                    } : n === tl.MidCacheHit ? F = {
                        url: t,
                        edge: !1,
                        tier1: !0,
                        tier2: !1
                    } : n === tl.EdgeCacheHit && (F = {
                        url: t,
                        edge: !0,
                        tier1: !0,
                        tier2: !1
                    })
                }(i);
            let l = {};
            U && (l.akamai_reference_id = U), l.manifest_load_durations = t.backbone.manifestLoadDurations, l.successful_segment_count = t.backbone.successfulSegments.length, l.failed_segment_count = t.backbone.failedSegments.length, W = l
        }))
    }));
    let r, a, l;
    const s = new WeakMap,
        c = new RegExp("-", "g");
    let p, m, v = null,
        f = null,
        h = !1,
        b = !1,
        T = !1,
        y = "auto",
        L = {},
        S = {},
        I = null,
        O = null,
        P = null,
        R = [],
        N = null,
        D = {},
        w = !1,
        k = !1,
        M = !1,
        V = 0,
        B = 0,
        x = 0,
        U = null,
        F = null,
        G = !1,
        W = null,
        Y = null,
        $ = null,
        j = !1,
        X = !1,
        Z = 0,
        J = 0,
        Q = null;

    function ee() {
        const e = s.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: a,
            _metricsBufferTracker: l
        } = e) : (l = new fe, a = new pe(t.backbone.videoElement, ne), te(), s.set(t.backbone.videoElement, {
            _videoMonitor: a,
            _metricsBufferTracker: l
        }))
    }

    function te() {
        const e = l;
        a.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(C.BUFFER_STARTED, (() => {
                    h && (j || G || (G = !0, e.trackBufferStart(a.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                })), t.events.on(C.BUFFER_ENDED, (() => {
                    h && G && (G = !1, e.trackBufferEnd(a.logBufferEnd, {
                        cdn_data: F
                    }), e.resetLastBufferTime())
                }))
            },
            addEventData(e) {
                const t = X;
                switch (X = !1, e) {
                    case Lu.VIDEO_START_TIME:
                        return W;
                    case Lu.VIDEO_SEEK:
                        const e = Y;
                        return Y = null, e;
                    case Lu.VIDEO_PLAYED:
                    case Lu.VIDEO_PAUSED:
                        return {
                            api_call: t
                        };
                    case Lu.VIDEO_EXIT:
                        return {
                            bytes_loaded: Z
                        }
                }
                return null
            },
            customMinuteTracker: {
                shouldCount: () => {
                    var e;
                    return t.backbone.isLive() && (null == (e = t.config.video.live_event) ? void 0 : e.dvr) && !t.backbone.atLiveEdge
                },
                onCount: e => {
                    J = e
                }
            }
        }), a.initHooks()
    }

    function ne(i, l = {}) {
        (function(e) {
            var n, i, o;
            switch (e) {
                case Lu.VIDEO_SEEK:
                case Lu.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (i = i.settings) ? void 0 : i.background);
                case Lu.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (o = t.config.video.live_event) ? void 0 : o.low_latency;
                case Lu.VIDEO_PLAYBACK_ERROR && (null == e ? void 0 : e.error_type) === C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED:
                    return ic(.1);
                default:
                    return !1
            }
        })(i) || (l = Object.assign(a ? a.globalProperties() : {}, Object.assign(function() {
            var e, i, r, a;
            const l = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                looping: !!t.config.embed.loop,
                owner_id: null == (e = t.config.video) || null == (e = e.owner) ? void 0 : e.id,
                product: Yl(t.config),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                version: Td(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (i = t.config.user) ? void 0 : i.id,
                viewer_team_id: null == (r = t.config.user) ? void 0 : r.team_id,
                viewer_team_origin_user_id: null == (a = t.config.user) ? void 0 : a.team_origin_user_id,
                vuid: gs("vuid"),
                fps: t.config.video.fps
            };
            var s;
            return t.config.video.owner && (l.account_type = t.config.video.owner.account_type), t.config.embed.api && (l.api_version = t.config.embed.api), t.config.embed.app_id && (l.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (l.privacy = t.config.video.privacy), n.get(_d) && (l.live_session_id = null == (s = t.config.video.live_event) ? void 0 : s.id), l
        }(), function() {
            var n, i, o, r;
            const a = t.backbone.video ? t.backbone.video.currentFile : {},
                l = function() {
                    const n = {},
                        i = E(),
                        o = he("asc"),
                        r = "MediaSourceScanner" === t.backbone.currentScannerName,
                        a = "HTMLScanner" === t.backbone.currentScannerName,
                        l = "HLSLiveScanner" === t.backbone.currentScannerName;
                    let s = [];
                    a && (s = _(t.config, "request.files.progressive") || _(t.config, "request.files.hls") || []), r && (s = _(t.config, "request.files.dash.streams", [])), l && (s = t.backbone.video.currentFile.mime === Pt.dashMpd ? _(t.config, "request.files.dash.streams", []) : _(t.config, "request.files.hls.streams", []));
                    const c = Array.from(s).sort(o).map((e => e.profile));
                    let d = -1,
                        u = 0,
                        p = null;
                    if (Object.keys(S).forEach((e => {
                            const t = c.indexOf(parseInt(e, 10));
                            t > d && (d = t);
                            const n = S[e].reduce(((e, t) => ((t.end || i) - t.start) / 1e3 + e), 0);
                            n > u && (u = n, p = e)
                        })), n.highest_profile = c[d], n.highest_available_profile = c[c.length - 1], n.most_used_profile = p, (r || l) && R) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(R))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(R))) / 1e3;
                        const t = R.reduce(((e, t) => e + t), 0);
                        n.average_speed = Math.round(t / R.length) / 1e3
                    }
                    return n
                }();
            let {
                mime: s = Pt.h264,
                metadata: {
                    profile: c = null
                } = {}
            } = a, d = !1, u = !1;
            switch (s) {
                case Pt.dash:
                    0 === a.restrictedStreamIndexes.length && (d = !0), _(t.config, "request.files.dash.separate_av") && (u = !0), c = L ? L.profile : null;
                    break;
                case Pt.hls:
                    d = !0
            }
            let p = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio", "average") / 1e3,
                audio_provenance: ie(),
                auto: d,
                average_speed: l.average_speed || 0,
                cdn: a.metadata ? a.metadata.cdn : "akamai",
                delivery: "live" !== yr[s] ? yr[s] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : t.backbone.videoElement.webkitCurrentPlaybackTargetIsWireless ? "airplay" : null,
                dropped_frame_percent: x,
                event_time: v + me(f),
                fullscreen: k,
                is_visible: null === (n = null == (i = m) ? void 0 : i.isInView) || void 0 === n || n,
                picture_in_picture: M,
                highest_available_profile: l.highest_available_profile ? String(l.highest_available_profile) : null,
                highest_profile: l.highest_profile ? String(l.highest_profile) : null,
                max_speed: isFinite(l.max_speed) ? l.max_speed : 0,
                mime: a.mime || null,
                min_speed: isFinite(l.min_speed) ? l.min_speed : 0,
                most_used_profile: l.most_used_profile ? String(l.most_used_profile) : null,
                profile_id: c ? String(c) : null,
                codec: Au(null == t.backbone.getCurrentStream || null == (o = t.backbone.getCurrentStream("video")) ? void 0 : o.codecs),
                audio_codec: Su(null == t.backbone.getCurrentStream || null == (r = t.backbone.getCurrentStream("audio")) ? void 0 : r.codecs),
                quality: L ? L.quality : null,
                quality_downswitch_count: B,
                quality_upswitch_count: V,
                separate_av: u,
                target_profile_id: $,
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video", "average") / 1e3,
                video_duration: _r(t.config.video.duration)
            };
            if (t.backbone.isLive()) {
                var h;
                void 0 !== t.backbone.latency && (p.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (p.is_low_latency = t.backbone.lowLatencyMode);
                const e = !(null == (h = t.config.video.live_event) || !h.dvr);
                p.dvr = e, e && (p.in_dvr_mode = e && !t.backbone.atLiveEdge, p.dvr_minutes_watched = J)
            }
            if (t.config.video.ecdn) {
                const e = t.config.video.ecdn.ecdn_provider,
                    {
                        ecdnBytesByCdn: n,
                        ecdnBytesPeered: i,
                        ecdnPeers: o
                    } = ds(e);
                p.ecdn = !0, p.ecdn_provider = e, p.ecdn_bytes_via_cdn = n, p.ecdn_bytes_via_peering = i, p.ecdn_peers = o
            }
            return p
        }(), (t => {
            const n = ["example", "live_test"],
                i = t.config.request.ab_tests || {},
                o = Array.isArray(t.abTests) ? t.abTests : [],
                r = Object.keys(i).filter((e => !n.includes(e))).map((e => ({
                    test: e,
                    group: i[e].group
                })));
            return {
                ab_tests: [].concat(e(r), e(o))
            }
        })(t)), l), l.name = i, t.events.fire(Ao, {
            name: i,
            data: l
        }), r.log(l).catch((e => {})))
    }

    function ie() {
        if (!t.config.request.audio_tracks) return null;
        let e = t.backbone.audioTracks.find((e => !!e.active));
        if (!e) return null;
        if (e.provenance) return e.provenance;
        const n = t.config.request.audio_tracks.filter((t => t.language === e.language));
        return 1 === n.length ? n[0].provenance : null
    }

    function oe(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        a.handleExternalError(i, t)
    }
    f = ue(), v = t.config.request.timestamp, r = new u(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(fn, oe), t.events.on(kt, (function() {
        w = !1
    })), t.events.on(Rt, (function() {
        j = !0
    })), t.events.on(ei, (function() {
        k = !0, ne(Lu.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(ni, (function() {
        k = !1, ne(Lu.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(g.ENTER_PICTURE_IN_PICTURE, (function() {
        M = !0, ne(Lu.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(g.LEAVE_PICTURE_IN_PICTURE, (function() {
        M = !1, ne(Lu.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(Di, (function() {
        v = t.config.request.timestamp, f = ue(), h = !1, b = !1, T = !1, y = "auto", L = {}, S = {}, I = null, O = null, P = null, R = [], N = null, D = {}, w = !1, k = !1, V = 0, B = 0, x = 0, F = null, $ = null, Z = 0, J = 0, a && (a.reset(), te())
    })), t.events.on(Pn, (function() {
        Y = {
            seek_type: "nudge"
        }
    })), t.events.on(Fn, (function(e) {
        const t = null == e ? void 0 : e.seekType;
        Y = {
            seek_type: t
        }
    })), t.events.on(Un, (function(e) {
        Y = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(Po, (function(e) {
        Y = {
            seek_type: e.type
        }
    })), t.events.on(Oo, (function(e) {
        Y = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(A, (function() {
        w || td.isCastConnected || (t.performDelegateAction(Dd, ((e, t = {}) => {
            w = !0, p.then((() => a.logStartRequest())).catch((() => {}))
        })), Iu(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(e, t, n, i) {
            const o = Date.now(),
                r = [{
                    uuid: d(),
                    created_at: o,
                    event: {
                        name: "session_manifest",
                        version: 1,
                        ts_ms: o,
                        fields: {
                            sessionID: t,
                            manifest: n
                        }
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            u(e).logRequestPromiseWithUrl(e, JSON.stringify(r), !0)
        }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, Td(t.config)))
    })), t.events.on(di, (function(e) {
        e === vd && ne(Lu.SLATE_DISPLAYED, {
            slate_type: vd
        })
    })), t.events.on(On, (function(e, t) {
        ne(Lu.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(Vt, (function(e) {
        t.backbone.video.currentFile.mime === Pt.dash && ("auto" === e || b ? "auto" === e && b && !T && (ne(Lu.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: y,
            auto: 1
        }), T = !0) : (ne(Lu.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), b = !0), y = e)
    })), t.events.on(Yt, (function(e) {
        N !== e && (N = e, ne(Lu.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on($t, (function() {
        N && (N = null, ne(Lu.CAPTIONS_DISABLED))
    })), t.events.on(Jc.connected, (function() {
        ne(Lu.CHROMECAST_CONNECTED)
    })), t.events.on(Jc.disconnected, (function() {
        ne(Lu.CHROMECAST_DISCONNECTED)
    })), t.events.on(C.STREAM_CHANGE, (function(e, t, n, i) {
        var o;
        L = e;
        const r = e.profile ? e.profile : e.id,
            a = E();
        if (S[r] = S[r] || [], I) {
            const e = S[I].length - 1;
            S[I][e] && (S[I][e].end = a)
        }
        O && (n[t].bitrate > O ? V += 1 : B += 1), S[r].push({
            start: a
        }), D[r] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        };
        let l = {
            previous_audio_bitrate: P / 1e3,
            previous_video_bitrate: O / 1e3,
            previous_profile_id: String(I),
            reason: null == i ? void 0 : i.reasonForSwitch
        };
        r.toString() === (null == (o = Q) ? void 0 : o.profile_id) && (Q.headers.akamai_request_bc || Q.headers.x_cache) && (l.cache_hit = ns(Q.headers)), ne(Lu.VIDEO_STREAM_CHANGE, l), I = r, O = n[t].bitrate, P = n[t].audioBitrate
    })), t.events.on(C.STREAM_TARGET_CHANGE, (function(e) {
        e && ($ = String(e.profile || "") || null)
    })), t.events.on(g.PLAYING, (function() {
        j = !1
    })), t.events.once(In, (function() {
        h = !0
    })), t.events.on(fo, (function() {
        ne(Lu.AD_BUFFERING)
    })), t.events.on(ho, (function() {
        ne(Lu.AD_COMPLETE)
    })), t.events.on(Eo, (function() {
        ne(Lu.AD_CLICKED)
    })), t.events.on(go, (function(e) {
        ne(Lu.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(bo, (function() {
        ne(Lu.AD_PAUSED)
    })), t.events.on(Co, (function() {
        ne(Lu.AD_RESUMED)
    })), t.events.on(To, (function(e) {
        ne(Lu.AD_STARTED, {
            startup_duration: e.time ? _r(e.time / 1e3, 2) : null
        })
    })), t.events.on(yo, (function() {
        ne(Lu.AD_SKIPPED)
    })), t.events.on(bn, (function() {
        o.iPhone && a.setDisplayContext(1)
    })), t.events.on(Cn, (function() {
        o.iPhone && a.setDisplayContext(0)
    })), t.events.on(C.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        x = Math.round(100 * t) / 100
    })), t.events.on(C.BANDWIDTH, (function({
        speed: e
    }) {
        R.push(e), R.length > 500 && R.shift()
    })), t.events.on(C.MANIFEST_TIMEOUT, (function() {
        ne(Lu.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(C.MANIFEST_LOADED, (function() {
        ne(Lu.VIDEO_MANIFEST_LOADED)
    })), t.events.on(C.DOWNLOAD_END, i), t.events.on(C.DOWNLOAD_TIMEOUT, (function() {
        ne(Lu.DOWNLOAD_TIMEOUT)
    })), t.events.on(C.DRM_KEY_SWITCH, (function() {
        ne(Lu.DRM_KEY_SWITCH)
    })), t.events.on(C.SCANNER_CHANGE, (function() {
        F = null
    })), t.events.on(C.AV_DURATION_MISMATCH, (function(e) {
        ne(Lu.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(C.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: C.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = _r(ve(0, e), 2), t.bytes_loaded = Z, ne(Lu.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(C.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: C.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        ne(Lu.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, (function({
        incompatibleStreams: e,
        incompatibleStreamsAttributes: t
    }) {
        const n = ["codecs", "bitrate", "framerate", "quality", "width", "height", "mime_type"];
        e.forEach(((e, i) => {
            const o = n.reduce(((t, n) => (t.push(e[n]), t)), []).concat(t[i].join(",")).join("|"),
                r = {
                    error_type: C.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
                    error_reason: o
                };
            ne(Lu.VIDEO_PLAYBACK_ERROR, r)
        }))
    })), t.events.on(q.MEDIASESSION_PLAY, (function() {
        ne(Lu.MEDIASESSION_PLAY)
    })), t.events.on(q.MEDIASESSION_PAUSE, (function() {
        ne(Lu.MEDIASESSION_PAUSE)
    })), t.events.on(q.MEDIASESSION_SEEK_FORWARD, (function() {
        ne(Lu.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on(q.MEDIASESSION_SEEK_BACKWARD, (function() {
        ne(Lu.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on(q.MEDIASESSION_SEEK_TO, (function() {
        ne(Lu.MEDIASESSION_SEEK_TO)
    })), t.events.on(br._seek, (function() {
        Y = {
            seek_type: "api"
        }
    })), t.events.on(br._play, (function() {
        X = !0
    })), t.events.on(br._pause, (function() {
        X = !0
    })), t.events.on(z.WEBVR_ENTER, (function() {
        ne(Lu.ENTER_WEBVR, !0)
    })), t.events.on(z.WEBVR_EXIT, (function() {
        ne(Lu.EXIT_WEBVR, !0)
    })), t.events.on(K.STALL_JUMP, (function({
        msg: e
    }) {
        oe("livestall", {
            final: !1
        }, e)
    })), t.events.on(K.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        oe("livefallback", {
            final: !1
        }, e)
    })), p = new Promise((e => {
        var n;
        null != (n = t.backbone) && n.video && e(), t.events.on(H, e)
    })), p.then(ee).catch((() => {})), m = _e(t.element), t.events.on(ji, ee), t.events.on(sn, (() => {
        var e;
        return null == (e = m) ? void 0 : e.cleanup()
    }))
}
let Nu = function() {
    function e() {
        T(this, "player", void 0), T(this, "bpSessionInfo", void 0), this.player = null, this.bpSessionInfo = {
            transcriptId: null,
            transcriptStartTime: null,
            transcriptDefaultLanguage: null,
            leadUuid: null,
            contentType: null,
            vuid: gs("vuid")
        }
    }
    var t = e.prototype;
    return t.init = function(e) {
        this.player = e, this.player.doNotTrackEnabled || (this._initializeSessionData(), this._setupEventListeners(), this._configure())
    }, t._configure = function() {
        const e = this._getBPService(),
            t = this._createBPEvent(Ml.WEB_GLOBAL),
            n = new be.Configuration(e, t, null, this.player.config.request.urls.telemetry_base);
        be.BigPictureClient.configure(n)
    }, t._initializeSessionData = function() {
        this._updateSessionData(r({
            vuid: gs("vuid")
        }, Os(this.player.config)))
    }, t._setupEventListeners = function() {
        this.player.events.on(Mo, (({
            id: e,
            startTime: t,
            defaultLanguage: n
        }) => {
            this._updateSessionData({
                transcriptId: e,
                transcriptStartTime: t,
                transcriptDefaultLanguage: n
            })
        })), this.player.events.on($o, (e => {
            null != e && e.leadUuid && this._updateSessionData({
                leadUuid: e.leadUuid
            })
        })), this.player.events.on(Di, (() => {
            this._updateSessionData(r({}, Os(this.player.config)))
        }))
    }, t._refreshConfigurationWithVuid = function() {
        if (this.bpSessionInfo.vuid) return;
        const e = gs("vuid");
        e && (this._updateSessionData({
            vuid: e
        }), this._configure())
    }, t._getBPService = function() {
        let e;
        switch (this.player.config.request.urls.telemetry_base) {
            case be.Service.FRESNEL_PROD_CN:
                e = be.Service.FRESNEL_PROD_CN;
                break;
            case be.Service.EVENTS_PROD:
                e = be.Service.EVENTS_PROD;
                break;
            case be.Service.FRESNEL_PROD:
                e = be.Service.FRESNEL_PROD;
                break;
            default:
                e = be.Service.FRESNEL_DEV
        }
        return e
    }, t._updateSessionData = function(e) {
        Object.assign(this.bpSessionInfo, e)
    }, t._bpFieldsTyped = function(e) {
        return e
    }, t._getVersion = function(e) {
        return xl[e]
    }, t._getDefaultFieldsForEvent = function(e) {
        var t, n, i, r, a, l;
        const s = this.player.config,
            {
                user: c,
                request: d,
                video: u,
                embed: _
            } = s,
            p = (null == (t = this.player.backbone) ? void 0 : t.currentTime) || 0;
        switch (e) {
            case Ml.WEB_GLOBAL:
                return this._bpFieldsTyped({
                    user: {
                        subscription_type: c.account_type || null,
                        is_mod: !!c.mod,
                        session_id: d.session || null,
                        teams: c.team_id ? [{
                            team_id: c.team_id,
                            team_role: jl(s)
                        }] : [],
                        user_id: c.id || null,
                        vuid: this.bpSessionInfo.vuid || null,
                        flags: d.flags ? Object.keys(d.flags) : null,
                        is_free_trial: !1
                    },
                    application: {
                        application: "vimeo",
                        vimeo_language: d.lang || "en",
                        product: Yl(s),
                        build_environment: "production",
                        version: $l()
                    },
                    platform: {
                        device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                        screen: {
                            dpi: screen.pixelDepth,
                            height: screen.height,
                            width: screen.width,
                            size: `${screen.width} x ${screen.height}`
                        },
                        network: null,
                        platform: "web"
                    }
                });
            case Ml.COPY_VIDEO_EMBED_CODE:
                return this._bpFieldsTyped({
                    hash: u.unlisted_hash,
                    height: u.height,
                    is_video_password_protected: u.privacy === At,
                    product: Wl.WORKFLOW,
                    sizing: _.playsinline ? "fixed" : "responsive",
                    video_embed_privacy: u.embed_permission,
                    video_id: `${u.id||""}`,
                    video_privacy: u.privacy,
                    width: u.width,
                    actor_resource_role: null,
                    actor_team_role: null,
                    entry_page: null,
                    is_preset_applied: null,
                    location: null,
                    page: null,
                    path: null,
                    team_owner_id: null,
                    team_size: null,
                    team_subscription_type: null,
                    upload_id: null,
                    video_app_id: null,
                    video_status: null,
                    video_type: null
                });
            case Ml.PLAYER_PERFORMANCE_MEASUREMENT:
                return this._bpFieldsTyped({
                    module_player: !0,
                    device_type: ql(),
                    browser: Object.keys(o.browser).find((e => o.browser[e])) || "",
                    device_os: zl(),
                    iframed: ps(),
                    measurement_type: null,
                    measurement_value: null
                });
            case Ml.CHAPTER_SEGMENT_CLICK:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    team_owner_id: (null == (r = u.owner) ? void 0 : r.id) || 0,
                    is_creator_mode: !!c.owner,
                    chapter_seek_event_delta: null,
                    fragment_no_chapters_at_seek: null,
                    is_chapter_seek: null,
                    nearest_chapter_start_time: null,
                    seek_event_start_time: null,
                    total_no_chapters_at_seek: null
                });
            case Ml.CLICK:
                return this._bpFieldsTyped({
                    page: Tl(s),
                    click_type: null,
                    copy: null,
                    device_type: null,
                    feature: null,
                    location: null,
                    name: null,
                    path: null,
                    target: null,
                    target_path: null,
                    type: null
                });
            case Ml.EMBEDDED_TRANSCRIPT_CLICK:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    team_owner_id: (null == (a = u.owner) ? void 0 : a.id) || 0,
                    total_clip_duration: _r(u.duration, 2),
                    embedded_transcript_session_id: this.bpSessionInfo.transcriptId,
                    session_duration: _r(Pa(this.bpSessionInfo.transcriptStartTime), 2),
                    default_transcript_language: this.bpSessionInfo.transcriptDefaultLanguage,
                    video_timestamp: _r(p, 2) || 0,
                    copy: null,
                    current_transcript_language: null,
                    element: null,
                    location: null,
                    name: null
                });
            case Ml.CLOSED_CAPTIONS_CLICK:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    video_privacy: u.privacy,
                    final_action_reset_all: null,
                    has_changed_background: null,
                    has_changed_font: null,
                    has_changed_window: null,
                    has_clicked_background: null,
                    has_clicked_window: null,
                    has_clicked_customize: null,
                    has_clicked_font: null,
                    has_customized: null,
                    has_reset_all: null,
                    language_selected: null,
                    has_updated_language: null,
                    language_provenance: null,
                    prev_language_provenance: null,
                    prev_selected_language: null
                });
            case Ml.MULTI_AUDIO_TRACK_CLICK:
                return this._bpFieldsTyped({
                    video_id: `${u.id||""}`,
                    video_privacy: u.privacy,
                    video_owner_id: `${null==(l=u.owner)?void 0:l.id}`,
                    page: Tl(s),
                    event_name: null,
                    has_selected_track: null,
                    initial_track: null,
                    initial_track_provenance: null,
                    track_selected: null,
                    track_selected_provenance: null
                });
            case Ml.OPEN_AI_OPTIONS:
                return this._bpFieldsTyped({
                    if_uploader: !!c.owner,
                    value: null
                });
            case Ml.REACH_TIME_ACTION:
                return this._bpFieldsTyped({
                    time_action_id: null
                });
            case Ml.VIEW_HOTSPOT:
                return this._bpFieldsTyped({
                    hotspot_id: null
                });
            case Ml.CLICK_HOTSPOT:
                return this._bpFieldsTyped({
                    hotspot_id: null,
                    overlay_id: null,
                    click_action_type: null,
                    clickout_id: null
                });
            case Ml.VIEW_OVERLAY:
                return this._bpFieldsTyped({
                    overlay_id: null
                });
            case Ml.CLOSE_OVERLAY:
                return this._bpFieldsTyped({
                    overlay_id: null,
                    dwell_time: null
                });
            case Ml.CLICK_OVERLAY:
                return this._bpFieldsTyped({
                    overlay_id: null,
                    click_action_type: null,
                    clickout_id: null
                });
            case Ml.VIEW_POLL:
                return this._bpFieldsTyped({
                    poll_id: null
                });
            case Ml.VOTE_POLL:
                return this._bpFieldsTyped({
                    poll_id: null,
                    poll_option_id: null,
                    is_poll_option_correct: null
                });
            case Ml.SELECT_PLAYER_SHARE:
                return this._bpFieldsTyped({
                    ab_group: null
                });
            default:
                return {}
        }
    }, t._createEventFields = function(e, t = {}) {
        return Object.assign({}, this._getDefaultFieldsForEvent(e), t)
    }, t._createBPEvent = function(e, t = {}) {
        const n = this._createEventFields(e, t),
            i = this._getVersion(e);
        return new be.Event(e, i, n)
    }, t._getDefaultFieldsForContext = function(e) {
        var t, n, i, r, a;
        const l = this.player.config,
            {
                embed: s,
                user: c,
                request: d,
                video: u
            } = l,
            _ = is(this.player.backbone),
            p = this.player.store.get("ui.player.breakpoint"),
            m = this.player.store.get("ui.player.width") || 0,
            v = this.player.store.get("ui.player.height") || 0,
            f = (null == (t = this.player.backbone) ? void 0 : t.currentTime) || 0;
        switch (e) {
            case Vl.TEAM:
                return this._bpFieldsTyped({
                    team_owner_id: c.team_origin_user_id,
                    team_subscription_type: c.account_type,
                    team_role: jl(l),
                    team_id: c.team_id,
                    joined_team_at: null,
                    resource_permission_level: null,
                    team_size: null
                });
            case Vl.WEB:
                return this._bpFieldsTyped({
                    location: "player",
                    page_name: Tl(l),
                    referrer: d.referrer,
                    copy: null,
                    path: null,
                    referrer_page_name: null,
                    target: null,
                    target_path: null
                });
            case Vl.VIDEO:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    title: u.title,
                    video_privacy: u.privacy,
                    video_embed_privacy: u.embed_permission,
                    content_rating: [`${null==(n=u.rating)?void 0:n.id}`],
                    duration: Math.round(u.duration),
                    resolution: `${u.width}x${u.height}`,
                    video_height: u.height,
                    video_width: u.width,
                    orientation: Xl(u.width, u.height),
                    is_auto_cc_enabled: null,
                    upload_method_api: null,
                    upload_method_api_id: null,
                    is_demo: null,
                    video_owner_id: (null == (i = u.owner) ? void 0 : i.id) || 0,
                    video_owner_account_type: (null == (r = u.owner) ? void 0 : r.account_type) || "",
                    video_categories: null,
                    has_embed_available: !!s.settings.embed,
                    video_version_id: Ql(null == (a = u.version) ? void 0 : a.available),
                    embed_context: s.context,
                    is_drm_enabled: !!d.drm,
                    is_intaractive: !!s.interactive,
                    language: null,
                    audio_track_lang: _.audioTrackLang,
                    audio_track_provenance: _.audioTrackProvenance,
                    audio_track_type: _.audioTrackType,
                    text_track_lang: _.textTrackLang,
                    text_track_provenance: _.textTrackProvenance,
                    text_track_type: _.textTrackType
                });
            case Vl.PLAYER:
                return this._bpFieldsTyped({
                    player_session_id: d.session,
                    total_video_duration: u.duration,
                    video_timestamp: _r(f, 2) || 0,
                    player_location: s.on_site ? "onsite" : "embed",
                    player_breakpoint: p || null,
                    player_width: Math.floor(m),
                    player_height: Math.floor(v)
                });
            case Vl.ACTION:
                return this._bpFieldsTyped({
                    feature: "player",
                    action_type: o.touch ? "tap" : "click"
                });
            case Vl.VIEW:
                return this._bpFieldsTyped({
                    feature: "player",
                    view_type: "impression"
                });
            case Vl.LIVE:
                return this._bpFieldsTyped({
                    recurring_live_event_id: `${u.live_event_id}`,
                    live_event_id: null,
                    live_status: Zl(null == u ? void 0 : u.live_event),
                    live_production_method: null,
                    encoder_type: null,
                    audience_type: Jl(u),
                    lead_source: null,
                    event_privacy: es(u.privacy),
                    live_feature: null,
                    is_guest_speaker: null
                });
            case Vl.PRODUCT_ANALYTICS:
                return this._bpFieldsTyped({
                    product: "viewer_experience",
                    feature: "player",
                    location: "player",
                    modal_name: null,
                    flow: null,
                    element: null,
                    copy: null,
                    device_type: ql(),
                    is_user_facing_data: null,
                    entity_type: null,
                    cta_location_id: null,
                    scrolling_percentage: null
                });
            case Vl.TARGET_TEAM:
                return this._bpFieldsTyped({
                    is_team_member: !!c.team_id,
                    team_owner_id: c.team_origin_user_id,
                    team_subscription_type: c.account_type,
                    team_role: jl(l),
                    team_id: c.team_id,
                    team_size: null,
                    resource_permission_level: null,
                    joined_team_at: null
                });
            case Vl.USER_FACING_VIDEO_ANALYTICS:
                const e = d.atid,
                    [t, h] = e.split(".").map(Number);
                return this._bpFieldsTyped({
                    session_ts: h,
                    session_id: t,
                    lead_id: this.bpSessionInfo.leadUuid,
                    content_type: this.bpSessionInfo.contentType,
                    is_do_not_track: !!s.dnt,
                    playback_route: "player_embed",
                    is_session_live: null
                });
            case Vl.THIRD_PARTY_INTEGRATION:
                return this._bpFieldsTyped({
                    is_integration: !1,
                    integration_id: null,
                    integration_type: null,
                    integration_name: null,
                    app_id: null,
                    managed_user_id: null,
                    partner_bucket: null,
                    is_partner: null
                });
            default:
                return {}
        }
    }, t._createContextFields = function(e, t = {}) {
        return Object.assign({}, this._getDefaultFieldsForContext(e), t)
    }, t._createBPContexts = function(e, t = {}) {
        const n = this.player.config,
            i = Fl[e];
        return i ? i.reduce(((e, i) => {
            var o;
            if (i === Vl.LIVE && (null == (o = n.video) || !o.live_event_id)) return e;
            const r = this._getVersion(i),
                a = t[i] || {},
                l = this._createContextFields(i, a);
            return e[i] = new be.EventContext(i, r, l), e
        }), {}) : {}
    }, t.sendEvent = function(e, t = {}, n = {}) {
        if (!this.player || this.player.doNotTrackEnabled) return;
        this._refreshConfigurationWithVuid();
        const i = this._createBPEvent(e, t),
            o = this._createBPContexts(e, n);
        be.BigPictureClient.sendEventWithContexts(i, o)
    }, e
}();

function Du(e) {
    let t, i, o = e.config.ott || {};
    const r = o.analytics_url || "https://collector.vhx.tv/events.gif",
        a = new u(r),
        l = b((function() {
            d("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        s = b((function() {
            d("seeking")
        }), 500);

    function c() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function d(i, l) {
        (l = Object.assign({}, l, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: td.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === l.timestamp && (l.timestamp = Math.round(.001 * Date.now()));
        const s = n(r, l);
        return a.logRequestPromiseWithUrl(s, {}, !0, "GET").catch((e => {}))
    }

    function _() {
        e.events.on(g.ENDED, p), e.events.on(g.ERROR, m), e.events.on(g.PAUSE, v), e.events.on(g.PLAY, f), e.events.on(g.TIME_UPDATE, l), e.events.on(g.SEEKING, s), e.events.on(g.SEEKED, h), e.events.on(g.WAITING, E), e.events.on(ei, C), e.events.on(ni, T), e.events.on(ho, y), e.events.on(Eo, L), e.events.on(go, A), e.events.on(To, S), e.events.on(yo, I)
    }

    function p() {
        l.cancel(), d("ended")
    }

    function m() {
        l.cancel(), d("error")
    }

    function v() {
        l.cancel(), d("pause")
    }

    function f() {
        if (!i) return i = !0, void d("firstplay");
        d("play")
    }

    function h() {
        s.cancel(), d("seeked")
    }

    function E() {
        d("waiting")
    }

    function C() {
        t = !0
    }

    function T() {
        t = !1
    }

    function y() {
        d(Lu.AD_COMPLETE)
    }

    function L() {
        d(Lu.AD_CLICKED)
    }

    function A() {
        d(Lu.AD_ERROR)
    }

    function S() {
        d(Lu.AD_STARTED)
    }

    function I() {
        d(Lu.AD_SKIPPED)
    }
    e.events.on(Di, c), c(), e.config.ott ? _() : new Promise((t => {
        e.ottVideoMetadata ? t() : e.events.on(Gi, (e => {
            t()
        }))
    })).then((() => {
        o = e.ottVideoMetadata, _()
    })).catch((e => {}))
}

function wu(e, t) {
    const n = new N;
    let i, r, a, l, s, c, d, u, _, p;

    function m() {
        var t, n;
        e.events.on(g.ERROR, O), e.events.on(A, P), e.events.on($.ACTIVATED, I), i = document.querySelector(`.${$r.ADS_WRAPPER}`), i || (i = document.createElement("div"), i.classList.add($r.ADS_WRAPPER), i.innerHTML = `\n                <div class="${$r.ADS_TAG} hidden">\n                    <span class="${$r.ADS_COUNTDOWN}"></span>\n                </div>\n            `, document.querySelector(".player").appendChild(i)), r = i.querySelector(`.${$r.ADS_TAG}`), a = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            autoplay: Boolean(null == (t = e.config) || null == (t = t.embed) ? void 0 : t.autoplay),
            muted: Boolean(null == (n = e.config) || null == (n = n.embed) ? void 0 : n.muted),
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, s = new Ce(i, a), s.on(Te.ADS_MANAGER_LOADED, (() => {
            s.on(Te.AD_BUFFERING, f), s.on(Te.AD_COMPLETE, E), s.on(Te.AD_CLICK, h), s.on(Te.AD_ERROR, b), s.on(Te.AD_STARTED, C), s.on(Te.AD_SKIPPED, T), s.on(Te.ALL_ADS_COMPLETED, y), s.on(Te.CONTENT_PAUSE_REQUESTED, L), s.on(Te.CONTENT_RESUME_REQUESTED, S), e.events.on(g.ENDED, D), e.store.watch("ui.player.width", x), e.events.on(ei, x, !0), e.events.on(ni, x, !1), e.events.fire(bn), s.isAutoPlayAllowed() && B()
        }))
    }

    function v() {
        r && (M(), r = null), s && (s.destroy(), s = null), d && (clearInterval(d), d = null), i = null, a = {}, l = null, c = !1, u = !1, _ = !1, p = !1, e.events.off(A, P), e.events.off(ei, x), e.events.off(ni, x), e.events.off($.ACTIVATED, I), e.events.off(g.ENDED, D), e.events.off(g.ERROR, O), e.events.off(g.PLAYING, R), e.store.unwatch("ui.player.width", x)
    }

    function f() {
        u && e.events.fire(fo)
    }

    function h() {
        e.events.fire(Eo)
    }

    function E() {
        o.iPhone && e.backbone.addVideoEventListeners(), d && clearInterval(d), u = !1, e.events.fire(ho)
    }

    function b(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(go, n), "adPlayError" === n.errorType && e.events.fire(Cn)
    }

    function C(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let n = t.getAd();
        const r = n.getTraffickingParameters();
        n.isLinear() && "0" !== r.ad && (d = setInterval((() => {
            let e = "Anúncio " + (e => {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            })(s.remainingTime);
            i.querySelector(`.${$r.ADS_COUNTDOWN}`).innerHTML = e
        }), 1e3), setTimeout(k, 1e3)), u = !0;
        let a = {
            type: n.isLinear() ? "linear" : "nonlinear"
        };
        l && (a.time = Date.now() - l, l = null), e.events.fire(To, a)
    }

    function T(t) {
        e.events.fire(yo, t)
    }

    function y(t) {
        c = !0, o.iPhone || v(), e.events.fire(Lo, t)
    }

    function L() {
        e.events.fire(bn), l = Date.now(), p = !0, _ || (e.backbone.paused ? e.events.once(g.PLAYING, R) : e.backbone.pause())
    }

    function S() {
        M(), e.events.fire(Cn), o.iPhone && c && s.destroy(), _ || (e.events.off(g.PLAYING, R), w())
    }

    function I() {
        v()
    }

    function O(e) {
        e && ("NotAllowedError" === e.name || e.name)
    }

    function P() {}

    function R() {
        e.backbone.pause()
    }

    function D() {
        _ = !0, s.setContentComplete()
    }

    function w() {
        p = !1, e.backbone.play()
    }

    function k() {
        r = i.querySelector(`.${$r.ADS_TAG}`), r.classList.remove("hidden"), r.removeAttribute("hidden")
    }

    function M() {
        r.classList.add("hidden"), r.setAttribute("hidden", "")
    }

    function V() {
        const e = t.getBoundingClientRect();
        return {
            height: e.height,
            width: e.width
        }
    }

    function B() {
        const {
            width: t,
            height: n
        } = V();
        try {
            s.start(t, n)
        } catch (i) {
            _ && e.events.fire(ho), p && w()
        }
    }

    function x(e) {
        const {
            width: t,
            height: n
        } = V();
        s.resize(t, n, e)
    }
    const U = {
        pause: () => (e.events.fire(bo), s.pause()),
        play: () => (e.events.fire(Co), B(), s.play()),
        get volume() {
            return s.volume
        },
        set volume(e) {
            s.volume = e
        },
        get muted() {
            return s.muted
        },
        set muted(e) {
            s.muted = e
        },
        events: n
    };
    return v(), m(), e.events.on(Di, (() => {
        v(), m()
    })), U
}
const ku = "markers",
    Mu = "dropped_frames",
    Vu = "total_frames",
    Bu = "bandwidth",
    xu = "streams",
    Uu = "files",
    Hu = "video_dims",
    Fu = "min_bandwidth",
    Gu = "max_badwidth",
    Wu = "buffer_occupancy",
    Yu = "live_latency",
    $u = "scanner",
    Ku = "vr_headset",
    qu = ["clip_id", "profile_id", "player_size", Mu, Vu, Bu, ku, xu, Uu, Hu, Fu, Gu, Wu, Yu, $u, Ku];
let zu = function() {
        function e(e) {
            this._core = e, this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._core.events.fire(bi)
        }, t._setToSeries = function(e, t) {
            return this._seriesStore[e] = [t], this._core.events.fire(bi), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._core.events.fire(bi), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = L({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i)
        }, t._filterMetricData = function(e, t) {
            let n;
            return e === Lu.CHUNK_DOWNLOADED ? (n = {}, n.host = t.host, n.duration = _r(t.duration, 2), n.size = t.size, n.index = t.index, n.profile_id = t.profile_id, n.quality = t.quality, n.buffered = _r(t.buffered, 2), n.ttfb = _r(t.ttfb, 2), n.extraContext = t.extraContext, n.headers = ye(t.headers, ["x_cache", "akamai_request_bc", "akamai_grn", "content_type"]), n.cache_hit = ns(n.headers), n) : e === Lu.VIDEO_PLAYBACK_ERROR || e === Lu.VIDEO_LOAD_FAILURE || e === Lu.VIDEO_START_FAILURE || e === Lu.VIDEO_READY ? t : void 0 !== t.autoplay && void 0 !== t.looping ? (n = {}, n.cdn = t.cdn, n.quality = t.quality, void 0 !== t.reason && (n.reason = t.reason), n) : t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._core.backbone.currentTime,
                o = Date.now(),
                r = _r(ve(i, this._core.backbone.buffered), 2);
            this._addToSeries(ku, {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._core.events.on(Di, (() => {
                this.reset()
            })), this._core.events.on(C.BANDWIDTH, this._onBandwidthChange.bind(this)), this._core.events.on(C.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._core.events.on(C.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._core.events.on(C.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._core.events.on(C.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._core.events.on(C.STREAM_CHANGE, this._onStreamChange.bind(this)), this._core.events.on(C.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._core.events.on(g.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._core.events.on(z.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._core.events.on(Ao, this._onLogMetric.bind(this)), this._core.events.on(K.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._core.events.on(K.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._core.events.on(K.STALL_JUMP, this._onStallJump.bind(this))
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries(Ku, e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval((() => {
                const e = this._core.backbone.buffered,
                    t = this._core.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._core.backbone.latency;
                    this._setToSeries(Yu, e)
                } else this._setToSeries(Yu, 0)
            }), 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._core.store.watch("ui.player.boundingRect", (e => {
                const t = this.getCurrent(Hu),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries(Hu, n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker("resize", i)
            }))
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${_r(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = qu.reduce(((e, t) => (e[t] = [], e)), {})
        }, t._setDefaults = function() {
            const e = this._core.backbone.currentFile;
            this._addToSeries(Uu, e), this._addToSeries($u, this._core.backbone.currentScannerName), "HLSLiveScanner" === this._core.backbone.currentScannerName && this._setLatencyInterval(), this._setToSeries(Fu, 0), this._setToSeries(Gu, 0);
            const t = this._core.store.get("ui.player.boundingRect"),
                n = this._getVideoDimensionsString(t);
            this._addToSeries(Hu, n)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries(Bu, {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent(Gu),
                i = this.getCurrent(Fu);
            (!i || t < i) && this._setToSeries(Fu, t), (!n || t > n) && this._setToSeries(Gu, t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries(Vu, n), this._setToSeries(Mu, t)
        }, t._onSeeked = function() {
            this._addMarker("seeked", `Seeked to ${this._core.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker("ended", "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker("downswitch", `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker("upswitch", `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i, o, r, a;
            const l = n[t],
                s = this._getResolutionString(l),
                c = Au(l.codecs),
                d = null == (i = this._core.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                u = Su(null == d ? void 0 : d.codecs),
                _ = `${c}${u?` / ${u}`:""}`,
                p = null == (o = this._core.backbone) ? void 0 : o.telecine.getEffectByName("AmbisonicEffect");
            this._addMarker("switchcomplete", `Completed switch to ${s}`), this._addToSeries(xu, {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${l.height}p`,
                avgBitrate: l.avg_bitrate,
                ambisonicConnected: null == p ? void 0 : p.connected,
                ambisonicOrder: null == d ? void 0 : d.ambisonic_order,
                audioBitrate: null == d ? void 0 : d.avg_bitrate,
                audioChannels: null !== (r = null !== (a = null == d ? void 0 : d.channels) && void 0 !== a ? a : l.channels) && void 0 !== r ? r : void 0,
                framerate: l.framerate,
                height: l.height,
                width: l.width,
                id: l.id,
                codec: _
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent(Uu),
                t = this._core.backbone.currentFile;
            this._addToSeries(Uu, t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? yr[e.mime] : null,
                r = yr[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker("filechange", a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries(Wu, {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent($u),
                t = this._core.backbone.currentScannerName;
            this._setToSeries($u, t), e && this._addMarker("scannerchange", `Scanner change to ${t}`), "HLSLiveScanner" === t ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker("buffergapjump", e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker("buffergapjumpprevent", e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker("stalljump", e.msg)
        }, t._onStalled = function() {
            this._addMarker("stalled", "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._core.events.fire(bi)
        }, e
    }(),
    ju = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._onReset = () => this.reset(), this._player.events.on(kt, this._onReset)
        }, t._detachEventHandlers = function() {
            this._player.events.off(kt, this._onReset)
        }, t.hibernate = function() {
            this._detachEventHandlers()
        }, t.wake = function() {
            this._attachEventHandlers()
        }, t._getFragment = function(e, t, n) {
            if (c(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex(((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                })),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                l = n[o + 1],
                s = r ? t : (l - 1) / 1e3;
            return {
                startTime: a,
                endTime: s,
                duration: s - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(Dn)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(g.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !c(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(g.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, t.getFragmentFromTime = function(e) {
            var t;
            const n = null == (t = this._player.config.embed.interactive) ? void 0 : t.fragments,
                i = this._player.config.video.duration;
            return this._getFragment(e, i, n)
        }, P(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !c(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return c(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }])
    }();
var Xu = function(e) {
    return e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint", e
}(Xu || {});
const Zu = 4e-4 / Object.keys(Xu).length,
    Ju = {};
const Qu = {
    [gd.KOLLECTIVE]: "Kollective",
    [gd.HIVE]: "Hive"
};

function e_({
    config: e,
    debugCollector: t,
    backbone: n
}) {
    var i, r, a, l, s;
    const c = e.request.session,
        d = t.getCurrent(za.FIELD_VIDEO_DIMS),
        u = t.getCurrent(za.FIELD_TOTAL_FRAMES) || 0,
        _ = t.getCurrent(za.FIELD_DROPPED_FRAMES) || 0,
        p = t.getCurrent(za.FIELD_FILES),
        m = t.getCurrent(za.FIELD_STREAMS),
        v = t.getCurrent(za.FIELD_SCANNERS),
        f = t.getCurrent(za.FIELD_BANDWIDTH),
        h = v === Xa.HLS_LIVE_SCANNER,
        E = v === Xa.MEDIA_SOURCE_SCANNER,
        g = Ie(n.currentTime, n.buffered),
        b = n.currentTime + g,
        C = function(e) {
            if (!e) return null;
            const t = e.length;
            let n = 0,
                i = [];
            for (; n < t; n++) {
                const t = e.start(n),
                    o = e.end(n);
                i.push({
                    i: n,
                    start: t,
                    end: o
                })
            }
            return i
        }(n.buffered),
        T = n.bufferTarget,
        y = n.presentationDelay,
        L = e.embed.dnt || (null == (i = e.request.flags) ? void 0 : i.dnt),
        A = {
            isLive: h,
            isDash: E,
            embedSize: d,
            sessionId: c,
            testGroup: Object.keys(e.request.ab_tests).map((t => {
                var n;
                return `${t}: ${null==(n=e.request.ab_tests[t])?void 0:n.group}`
            })).join(", "),
            isDNTEnabled: L,
            totalFrames: u,
            droppedFrames: _,
            bufferTarget: T,
            presentationDelay: y,
            ua: null == (r = navigator) ? void 0 : r.userAgent,
            clipId: e.video.id,
            readyState: n.readyState,
            support: JSON.stringify(o),
            bufferEnd: _r(b, 3),
            bufferAhead: _r(g, 3),
            currentTime: _r(n.currentTime, 3),
            clientIp: null == (a = e.request) || null == (a = a.client) ? void 0 : a.ip,
            playerVersion: Td(e),
            bufferedRanges: JSON.stringify(C),
            brainDebug: JSON.stringify(n.brainDebug),
            codec: m ? m.codec : null,
            hideCloseButton: !!e.embed.settings.background,
            isCopyDisabled: !!L,
            vrHeadsetName: t.getCurrent(za.FIELD_VR_HEADSET),
            droppedFramesPercent: 0 !== u ? `${(_/u*100).toFixed(2)}%` : 0,
            resolution: m ? `${m.width}×${m.height}@${Math.round(m.framerate)} ${Math.round(m.avgBitrate/1e3).toLocaleString()} Kbps ${m.audioBitrate?` / ${Math.round(m.audioBitrate/1e3).toLocaleString()} Kbps`:""}` : null,
            payloadId: `${e.video.owner.id}_${e.video.id}_${e.request.session}_${Math.floor(Date.now()/1e3)}`,
            bandwidthKbps: f ? `${Math.floor(f.value/1e3).toLocaleString()} Kbps` : 0,
            bandwidthMinKbps: `${Math.floor(t.getCurrent(za.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
            bandwidthMaxKbps: `${Math.floor(t.getCurrent(za.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
            separateAudioVideo: !(null == (l = e.request.files) || !l.dash || !e.request.files.dash.separate_av),
            bandwidthSeriesData: n_(t)
        };
    null != m && m.audioChannels && (A.resolution += m.ambisonicConnected && m.ambisonicOrder ? ` ambisonic ${m.ambisonicOrder} (${m.audioChannels}ch)` : ` ${m.audioChannels}ch`), p && (A.delivery = p.mime);
    const S = null == (s = e.video.ecdn) ? void 0 : s.ecdn_provider;
    if (S) {
        const {
            ecdnBytesByCdn: e,
            ecdnBytesPeered: t,
            ecdnPeers: n
        } = ds(S), i = {
            p2pSources: n.toString(),
            p2pOffload: `${t_(t,e)}%`,
            ecdnVendor: Qu[S]
        };
        Object.assign(A, i)
    }
    return h && Object.assign(A, function(e, t) {
        var n;
        const i = (null == (n = e.video.live_event) ? void 0 : n.id) || null;
        let o = "";
        try {
            var r;
            o = `${(null!==(r=t.getCurrent(za.FIELD_LIVE_LATENCY))&&void 0!==r?r:0).toFixed(2)}`
        } catch (ke) {}
        return {
            liveLatency: o,
            liveSessionID: i
        }
    }(e, t)), A
}

function t_(e, t) {
    return 0 === e && 0 === t ? 0 : _r(e / (t + e) * 100, 1)
}

function n_(e) {
    const t = e.getSeries(za.FIELD_BANDWIDTH) || [],
        n = e.getCurrent(za.FIELD_MAX_BANDWIDTH) || 1;
    return {
        debugMarkers: e.getSeries(za.FIELD_MARKERS) || [],
        timeSeries: t,
        max: n
    }
}
let i_ = function() {
    function e(e = (e, t) => e < t) {
        this._data = {}, this._sortedKeys = [], this._sort = e
    }
    var t = e.prototype;
    return t._insert = function(e) {
        var t = this._sortedKeys.length;
        if (0 === t) this._sortedKeys.push(e);
        else {
            for (var n = 0; n < t; n++)
                if (this._sort(e, this._sortedKeys[n])) {
                    this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e);
                    break
                }
            n === t && this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e)
        }
    }, t._binarySearch = function(e, t, n, i) {
        if (i < n) return -1;
        let o = parseInt(n + (i - n) / 2, 10);
        return e[o] > t ? this._binarySearch(e, t, n, o - 1) : e[o] < t ? this._binarySearch(e, t, o + 1, i) : o
    }, t.delete = function(e) {
        const t = this._binarySearch(this._sortedKeys, e, 0, this._sortedKeys.length);
        if (-1 === t) throw new Error("key does not exist");
        this._sortedKeys.splice(t, 1), delete this._data[e]
    }, t.set = function(e, t) {
        return this._data[e] = t, this._insert(e), this
    }, t.get = function(e) {
        return this._data[e]
    }, t.keys = function() {
        return this._sortedKeys.slice()
    }, t.values = function() {
        return this.keys().map((e => this._data[e]))
    }, t.forEach = function(e) {
        const t = this._sortedKeys.length;
        for (let n = 0; n < t && !1 !== e(this._data[this._sortedKeys[n]], this._sortedKeys[n], this); n++);
    }, P(e, [{
        key: "size",
        get: function() {
            return this._sortedKeys.length
        }
    }])
}();
const o_ = {},
    r_ = e => {
        var t;
        const n = new i_;
        return null != (t = e.embed) && null != (t = t.cards) && t.length && e.embed.cards.forEach((e => {
            const t = e.url ? r(r({}, e), {}, {
                url: Al(e.url)
            }) : e;
            n.set(e.timecode, rd(t))
        })), n
    },
    a_ = e => {
        const {
            events: t,
            set: n
        } = e, i = function(e) {
            return {
                cardsMap: r_(e.config),
                activeCard: null,
                hoveredCard: null,
                displayedCard: null,
                cardPressed: void 0
            }
        }(e), o = e => {
            const {
                hoveredCard: t,
                activeCard: n
            } = e, i = null !== t ? t : n;
            return {
                cards: r(r({}, e), {}, {
                    displayedCard: i
                })
            }
        }, a = e => {
            e && t.fire(to, e.id, e)
        }, l = e => e.timecode;
        return t.on(Di, ((e, t) => {
            n((e => {
                const n = r(r({}, e.cards), {}, {
                    cardsMap: r_(t),
                    activeCard: null,
                    hoveredCard: null
                });
                return o(n)
            }))
        })), t.on(rn, (e => {
            n((t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.set(e.timecode, e), a(e);
                const i = r(r({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: e.timecode
                });
                return o(i)
            }))
        })), t.on(an, (e => {
            n((t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.delete(e.timecode);
                const i = r(r({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: null,
                    hoveredCard: null
                });
                return o(i)
            }))
        })), t.on(g.TIME_UPDATE, (({
            currentTime: e
        }) => {
            n((t => {
                const n = ((e, t) => {
                        const {
                            cardsMap: n
                        } = e.cards;
                        let i = n.values().filter((e => ((e, t) => t >= l(e) && t < (e => l(e) + (e.displayTime || 6))(e))(e, t))).slice(-1)[0];
                        return (null == i ? void 0 : i.timecode) || null
                    })(t, e),
                    i = t.cards.cardsMap.get(n);
                if (n === t.cards.activeCard) return o_;
                const s = r(r({}, t.cards), {}, {
                    activeCard: n
                });
                return a(i), o(s)
            }))
        })), t.on(Tn, (() => {
            n((e => {
                const t = r(r({}, e.cards), {}, {
                    activeCard: null,
                    hoveredCard: null
                });
                return o(t)
            }))
        })), {
            cards: i,
            setCards: (e, i) => {
                "cardPressed" !== e || "string" != typeof i && void 0 !== i ? ((e, t) => {
                    n((n => {
                        const i = r(r({}, n.cards), {}, {
                            [e]: t
                        });
                        return o(i)
                    }))
                })(e, i) : t.fire(no, i)
            }
        }
    };

function l_(e) {
    var t, n;
    const {
        config: i
    } = e, {
        title: a
    } = i.video, {
        title: l,
        portrait: s
    } = i.embed.settings, d = ps(), u = i.embed.settings.spatial_label, _ = !(!i.video.spatial || !u), p = i.request.file_codecs || i.video.file_codecs, m = !c(p), v = i.request.hdr_formats || [], f = m && (null == (t = p.hevc) || null == (t = t.hdr) ? void 0 : t.length) > 0, h = v.includes(Ed.HDR10_PLUS), E = v.includes(Ed.DV84) || m && (null == (n = p.hevc) || null == (n = n.dvh1) ? void 0 : n.length) > 0, g = !!i.video.ai, b = i.video.channel_layout || "stereo", C = i.video.owner[o.devicePixelRatio > 1 ? "img_2x" : "img"], T = i.video.owner.name, y = ml(Ct, i), L = ml(bt, i);
    let A = ml(gt, i);
    const S = function(e) {
        let t = {
            displayByline: !1,
            displayBadge: !1
        };
        if (e.embed.settings.byline) {
            const {
                type: n,
                url: i
            } = e.embed.settings.byline_badge || {};
            Object.assign(t, {
                displayByline: !0,
                displayBadge: !e.video.live_event,
                bylineBadgeType: n,
                bylineBadgeUrl: i
            })
        }
        return t
    }(i);
    return e.segmentedPlaybackEnabled && (A = yl(A, e.startTime, e.endTime)), r({
        ownerLinkUrl: y,
        titleLinkUrl: A,
        bylineLinkUrl: L,
        displayTitle: !!l,
        displayPortrait: !!s,
        ownerName: T,
        targetBlank: d,
        portraitImg: C,
        title: a,
        is360: _,
        hasAIContent: g,
        hasHDR: f,
        hasHDR10Plus: h,
        hasDolbyVision: E,
        channelLayout: b
    }, S)
}
const s_ = 250;
let c_;

function d_(e) {
    var t;
    const {
        config: n,
        store: i
    } = e, {
        request: o,
        video: r
    } = n, a = ml(Et, e.config), l = null == (t = r.vod) ? void 0 : t.button_text, s = i.get("ui.player.breakpoint"), c = i.get("ui.player.mode"), d = zs(qs.FULL_CONTROLS, c, s);
    return {
        overrideBehavior: !1,
        trailerButtonText: l,
        vimeoLogoUrl: a,
        thumbnailPreview: o.thumb_preview,
        showAllControls: d,
        expandedState: "collapsed",
        isExpanded: !1,
        shouldRestoreButtonsDisplayed: !1
    }
}
let u_ = function(e) {
    return e.EMPTY = "empty", e.UNMUTE = "unmute", e.WATCH_FULL_VIDEO = "watchFullVideo", e.SPATIAL_INSTRUCTIONS_CLICK = "spatialInstructionsClick", e.SPATIAL_INSTRUCTIONS_ARROWS = "spatialInstructionsArrows", e
}({});
const __ = [u_.SPATIAL_INSTRUCTIONS_CLICK, u_.SPATIAL_INSTRUCTIONS_ARROWS, u_.WATCH_FULL_VIDEO, u_.UNMUTE];

function p_(e) {
    const {
        config: t
    } = e, {
        autoplay: n,
        settings: i
    } = t.embed;
    return {
        purpose: e.segmentedPlaybackEnabled && n && i.watch_full_video ? u_.WATCH_FULL_VIDEO : u_.EMPTY
    }
}

function m_({
    displayList: e,
    playback: t,
    embed: n
}) {
    const {
        outro: i,
        controlBar: o
    } = e, {
        isSegmentedPlaybackEnabled: r,
        paused: a,
        scrubbing: l
    } = t;
    return !!r && (!i && o && !(a && !l) && n.watchFullVideo)
}

function v_(e) {
    const t = e.embed.access_gates;
    if (!t) return null;
    const n = t.find((e => e.placement === Cs.BEFORE_VIDEO));
    return n ? Is(null == n ? void 0 : n.gate_type, e) ? null : ((e, t) => {
        const n = ys[e];
        return !n || n.includes(t.view)
    })(null == n ? void 0 : n.gate_type, e) ? n : null : null
}
const f_ = e => !e.title && !e.portrait && !e.byline,
    h_ = e => {
        var t;
        const {
            config: n,
            element: i,
            get: o
        } = e, {
            embed: r
        } = n, a = i.classList.contains("player-tiny"), l = p_(e), s = (null == l ? void 0 : l.purpose) === u_.WATCH_FULL_VIDEO;
        return !(a || null !== v_(n) || (null == (t = o()) || null == (t = t.overlay) ? void 0 : t.purpose) === Sa.INTERACTIVE || n.view && !pa(n.view) || null != r && r.autoplay || f_(null == r ? void 0 : r.settings) || !Oa(r) || s)
    },
    E_ = e => {
        var t;
        const {
            config: n,
            get: i
        } = e, {
            view: r,
            video: a,
            embed: l,
            request: s
        } = n, {
            vod: c
        } = a, d = r !== Lr.main && r !== Lr.privateUnlocked, u = !!l.settings.instant_sidedock, _ = c && "purchase_options" in c && !!c.purchase_options.length, p = c && _a(c.countries, s.country);
        return (null == (t = i()) || null == (t = t.overlay) ? void 0 : t.purpose) !== Sa.INTERACTIVE && null === v_(n) && !!Oa(l) && !e.segmentedPlaybackEnabled && (o.touch || d || u || _ && p)
    },
    g_ = e => {
        var t, n;
        const {
            config: i,
            get: o
        } = e, {
            view: r,
            embed: a,
            request: l
        } = i;
        return !(null !== v_(e.config) || (null == (t = o()) || null == (t = t.overlay) ? void 0 : t.purpose) === Sa.INTERACTIVE || r && !pa(r) || a.autoplay && null != (n = l.flags) && n.autohide_controls || !Oa(a))
    };
let b_ = function(e) {
    return e.IMAGE = "image", e.STATIC_IMAGE = "static-image", e.VOD = "vod", e.LINK = "link", e.NOTHING = "nothing", e.BLANK = "blank", e.SHARE = "share", e.TEXT = "text", e.BEGINNING = "beginning", e.VIDEOS = "videos", e.THREEVIDEOS = "threevideos", e.PROMOTED = "promoted", e.APP_REDIRECT = "app-redirect", e
}({});
const C_ = (e, t, n) => !(e && e === t) && !1 !== (null == n ? void 0 : n.final);

function T_({
    get: e,
    set: t
}) {
    return {
        purpose: Sa.EMPTY,
        spatialRedirectContext: null,
        overlayElementsUpdatedCount: 0,
        incrementOverlayElementsUpdatedCount: () => {
            t((t => ({
                overlay: r(r({}, t.overlay), {}, {
                    overlayElementsUpdatedCount: e().overlay.overlayElementsUpdatedCount + 1
                })
            })))
        }
    }
}

function y_(e) {
    return Object.values(Sa).includes(e)
}
let L_ = function(e) {
    return e.EMPTY = "empty", e.SPATIAL_UNSUPPORTED = "spatial-unsupported", e.SPATIAL_FAILURE = "spatial-failure", e
}({});
const A_ = ({
    element: e,
    config: t
}) => {
    if (e.classList.contains("player-mini") || e.classList.contains("player-tiny")) return !1;
    const {
        embed: n
    } = t;
    return !(!n.settings.badge || n.autoplay && 16 !== n.settings.badge.id)
};
let S_ = function(e) {
        return e.IDLE = "idle", e.LOADED = "loaded", e.ERROR = "error", e.LOADING = "loading", e
    }({}),
    I_ = function(e) {
        return e.MAIN = "main", e.LANGUAGE = "language", e
    }({}),
    O_ = function(e) {
        return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
    }({}),
    P_ = function(e) {
        return e.PREV = "prev", e.NEXT = "down", e.FIRST = "first", e.LAST = "last", e
    }({});
const R_ = "en",
    N_ = e => {
        const t = document.createElement("div");
        return t.innerHTML = e, t.textContent || ""
    },
    D_ = {
        language: R_,
        id: "",
        label: "Transcrição",
        rtl: !1
    },
    w_ = (e, t) => {
        const {
            lang: n,
            cookie: i
        } = e.request, {
            captions: o,
            transcript: r
        } = i, [a] = (r || "").split("."), [l] = (o || "").split("."), s = r && t.find((e => e.language.includes(a))) || l && t.find((e => e.language.includes(l))) || n && t.find((e => n.includes(e.language))) || t.find((e => e.language.includes(R_))) || t[0] || D_;
        return s
    },
    k_ = (e, t) => e.findIndex((e => e.startTime <= t && e.endTime > t)),
    M_ = (e, t) => !!e.find((e => e.index === t)),
    V_ = e => e ? e.endTime - e.startTime : 0;

function B_(e, t, n, i) {
    const a = ((e, t, n = null, i = null) => {
            let o;
            return o = t ? e.reduce(((e, n) => (n.startTime >= t.startTime && n.endTime <= t.endTime && e.push(r(r({}, n), {}, {
                startTimeDisplay: Da(Ea(n.startTime, t))
            })), e)), []) : (e => e.map((e => r(r({}, e), {}, {
                startTimeDisplay: Da(e.startTime)
            }))))(null !== n || null !== i ? e.filter((e => {
                const t = null === n || e.startTime >= n,
                    o = null === i || e.startTime <= i;
                return t && o
            })) : e), o
        })((e => e.map(((e, t) => ({
            startTime: e.startTime,
            endTime: e.endTime,
            startTimeDisplay: "",
            text: N_(e.text),
            originalIndex: t
        }))))(e), !o.isGoogleBot && t, n, i),
        l = (e => e.map(((e, t, n) => {
            const i = n[t + 1];
            return i && i.startTime < e.endTime ? r(r({}, e), {}, {
                endTime: i.startTime
            }) : e
        })))(((e, t = 20, n = 20, i = 10) => {
            if (0 === e.length) return [];
            let o, a, l, s, c;
            return d(e[0]), e.reduce((function(r, l, s, c) {
                var _;
                const {
                    text: p,
                    endTime: m
                } = l, v = function(e, t) {
                    return e + 1 === t.length
                }(s, c);
                if (a += `${p} `, v) return u(m, r);
                const f = p.split(" "),
                    h = function(e) {
                        return function(e) {
                            return [".", "?", "!"].some((t => e.trim().endsWith(t)))
                        }(e[e.length - 1])
                    }(f);
                o += f.length;
                const E = o >= n,
                    g = o >= t && h,
                    b = function(e, t, n) {
                        return t - e > n
                    }(l.endTime, null == (_ = c[s + 1]) ? void 0 : _.startTime, i);
                return (E || g || b) && (r = u(m, r), d(e[s + 1])), r
            }), []).map(((e, t) => r(r({}, e), {}, {
                originalIndex: t
            })));

            function d(e) {
                e && (o = 0, a = "", l = e.startTime, s = e.originalIndex, c = e.startTimeDisplay)
            }

            function u(e, t) {
                return t.concat({
                    originalIndex: s,
                    text: a.trim(),
                    startTime: l,
                    startTimeDisplay: c,
                    endTime: e
                })
            }
        })(a));
    return l
}

function x_(e) {
    var t;
    return (null == (t = e[0]) ? void 0 : t.startTime) || 0
}

function U_(e) {
    var t;
    return (null == (t = e[e.length - 1]) ? void 0 : t.endTime) || 0
}
const H_ = (e, t) => {
        let n = {
            index: 0,
            diff: 1 / 0
        };
        for (let i = 0; i < t.length; i++) {
            if (t[i].startTime <= e && t[i].endTime >= e) return i;
            const o = Math.abs(t[i].startTime - e),
                r = Math.abs(t[i].endTime - e),
                a = Math.min(o, r);
            a < n.diff && (n = {
                index: i,
                diff: a
            })
        }
        return n.index
    },
    F_ = e => o.isGoogleBot || Boolean(null == e ? void 0 : e.config.embed.tq),
    G_ = [Sa.EMPTY, Sa.HELP, Sa.SHARE, Sa.INTERACTIVE],
    W_ = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!n.settings.playbar) return !1;
        if (!Oa(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return zs(qs.PROGRESS_BAR, o, i)
    },
    Y_ = e => {
        const t = F_(e);
        return o.isGoogleBot && t
    };

function $_(e) {
    e((e => ({
        displayList: r(r({}, e.displayList), {}, {
            aiWidget: !1
        })
    })))
}
const K_ = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!Oa(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return zs(qs.FULL_CONTROLS, o, i)
    },
    q_ = e => {
        const {
            set: t,
            get: n
        } = e, i = function(e) {
            const t = E_(e),
                n = h_(e),
                i = (e => T_(e).purpose !== Sa.EMPTY)(e),
                o = (({
                    store: e,
                    config: t,
                    events: n,
                    set: i
                }) => {
                    var o;
                    return n.on(Di, ((e, t) => {
                        i((e => {
                            var n;
                            return {
                                displayList: r(r({}, e.displayList), {}, {
                                    cards: !(null == (n = t.embed) || null == (n = n.cards) || !n.length || e.appearance.isMenuBlockingUI)
                                })
                            }
                        }))
                    })), !(null == (o = t.embed) || null == (o = o.cards) || !o.length || e.get("ui.controlbar.isMenuFullWidth"))
                })(e),
                a = A_(e),
                l = g_(e),
                s = W_(e),
                c = Y_(e),
                u = F_(e),
                _ = function(e) {
                    const {
                        purpose: t
                    } = p_(e);
                    return t !== u_.EMPTY
                }(e),
                p = (e => {
                    const {
                        config: t
                    } = e;
                    return null !== v_(t)
                })(e),
                m = K_(e),
                v = i || p;
            return (({
                set: e,
                get: t,
                events: n,
                subscribe: i,
                performDelegateAction: o
            }) => {
                const a = e => {
                    t().displayList.outro !== e && (e && (t().displayList.accessGate || t().displayList.ad || t().embed.background || t().embed.loop || t().outro.purpose === b_.BEGINNING) || (e ? o(Nd, (() => {
                        s(e)
                    })) : s(e)))
                };

                function l(e) {
                    e ? a(!1) : t().playback.ended && a(!0)
                }

                function s(t) {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            outro: t
                        })
                    }))), n.fire(t ? Wi : Yi)
                }
                n.on([g.PLAY, g.SEEKED, Fn, Xt, kt], (() => a(!1))), n.on(jt, (() => a(!0))), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.ended
                }), (e => a(e))), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), l), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), l)
            })(e), (({
                store: e,
                config: t,
                set: n
            }) => {
                e.watch("ui.controlbar.isMenuFullWidth", (e => {
                    n((n => {
                        var i;
                        return {
                            displayList: r(r({}, n.displayList), {}, {
                                cards: !(null == (i = t.embed) || null == (i = i.cards) || !i.length || e)
                            })
                        }
                    }))
                }))
            })(e), (({
                set: e,
                events: t,
                store: n
            }) => {
                n.watch("ui.player.mode", (t => {
                    t === $a.TINY && e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            debugPanel: !1
                        })
                    })))
                })), t.on(hi, (() => {
                    e((e => n.get("ui.player.mode") === $a.TINY ? o_ : {
                        displayList: r(r({}, e.displayList), {}, {
                            debugPanel: !e.displayList.debugPanel
                        })
                    }))
                }))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function a(e = {}) {
                    n().displayList.sideDock && t((t => {
                        const {
                            playback: n,
                            displayList: i,
                            appearance: a,
                            embed: l,
                            cards: s
                        } = t, {
                            fullPlayerElement: c,
                            alert: d,
                            menu: _,
                            toast: p
                        } = i, {
                            playInitiated: m,
                            targetTimeReached: v
                        } = n, {
                            forceExitedFullscreen: f
                        } = a, h = ua(a, e, "mousedOverSidedock"), E = c || d || _ && a.isMenuBlockingUI || !!s.displayedCard || p && u();
                        return f ? o_ : m && v || E || l.autoHideControls ? h ? o_ : !a.externalDisplay && !a.pictureInPictureActive || E ? (o.fire($n, !1), {
                            appearance: r(r({}, t.appearance), {}, {
                                mousedOverSidedock: h
                            }),
                            displayList: r(r({}, t.displayList), {}, {
                                sideDock: !1
                            })
                        }) : o_ : o_
                    }))
                }

                function l(e = {}) {
                    n().displayList.sideDock || t((t => {
                        const {
                            displayList: n,
                            appearance: i,
                            embed: a,
                            cards: l,
                            playback: s
                        } = t, {
                            menu: c,
                            fullPlayerElement: d,
                            alert: _,
                            toast: p
                        } = n, m = d || _ || c && i.isMenuBlockingUI || !!l.displayedCard || p && u();
                        return Oa(a) ? m || s.isSegmentedPlaybackEnabled ? o_ : (o.fire($n, !0), {
                            appearance: r(r({}, t.appearance), {}, {
                                mousedOverSidedock: ua(t.appearance, e, "mousedOverSidedock")
                            }),
                            displayList: r(r({}, t.displayList), {}, {
                                sideDock: !0
                            })
                        }) : o_
                    }))
                }

                function s() {
                    return a({
                        mousedOverSidedock: !1
                    })
                }

                function c(e, t) {
                    e && t && s()
                }

                function d(e, t) {
                    !e && t && l()
                }

                function u() {
                    return [xs.XXS, xs.XS].includes(n().appearance.playerBreakpoint)
                }
                o.on([Ci, yi, Pn], a), o.on([Ti, po, g.ENTER_PICTURE_IN_PICTURE], l), o.on(Di, (function(n, i) {
                    const o = E_(r(r({}, e), {}, {
                        config: i
                    }));
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            sideDock: o
                        })
                    })))
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }), (e => e && a())), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => !e && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.alert
                }), (e => e && a())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => e ? c(e, n().appearance.isMenuBlockingUI) : d(e, n().appearance.isMenuBlockingUI))), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }), (e => e ? c(n().displayList.menu, e) : d(n().displayList.menu, e))), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => e ? s() : l())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            sideDock: !1
                        })
                    }))) : n().displayList.sideDock || l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.cards) ? void 0 : t.displayedCard
                }), (e => e && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => e && u() && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                }), (e => {
                    e ? s() : l()
                }))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o,
                    config: a
                } = e;

                function l() {
                    t((e => {
                        const {
                            appearance: t,
                            playback: n,
                            embed: i
                        } = e, {
                            externalDisplay: o
                        } = t, {
                            scrubbing: l,
                            paused: s
                        } = n, c = u(e), {
                            embed: d
                        } = a;
                        return Oa(i) ? t.playerSizeMode === $a.TINY || f_(d.settings) || c ? o_ : o ? {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !0
                            })
                        } : !s || l ? o_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !0
                            })
                        } : o_
                    }))
                }

                function s() {
                    t((e => {
                        const {
                            appearance: t,
                            playback: n
                        } = e, {
                            externalDisplay: i
                        } = t, {
                            playInitiated: o
                        } = n, a = u(e);
                        return t.playerSizeMode === $a.TINY || a ? {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !1
                            })
                        } : i || !o ? o_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !1
                            })
                        }
                    }))
                }

                function c(e, t) {
                    e && t && s()
                }

                function d(e, t) {
                    !e && t && l()
                }

                function u(e) {
                    const {
                        fullPlayerElement: t,
                        outro: n,
                        menu: i,
                        toast: o,
                        topCenterActionItem: r
                    } = e.displayList, {
                        isMenuBlockingUI: a
                    } = e.appearance;
                    return t || n || i && a || o || r
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }), (e => e && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => {
                    e ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }), (e => {
                    e ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => e ? c(e, n().appearance.isMenuBlockingUI) : d(e, n().appearance.isMenuBlockingUI))), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }), (e => e ? c(n().displayList.menu, e) : d(n().displayList.menu, e))), i((e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }), (e => {
                    [Sa.NOT_SUPPORTED, Sa.HELP, Sa.EMPTY].includes(e) || s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }), (e => {
                    e === $a.TINY ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => e ? s() : l())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.topCenterActionItem
                }), (e => e ? s() : l())), o.on(Tn, s).on(kt, l).on(Di, ((n, i) => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            title: h_(r(r({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), (({
                set: e,
                subscribe: t
            }) => {
                t((e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }), (t => (t => {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            overlay: t
                        })
                    })))
                })(!Ia(t))))
            })(e), (({
                get: e,
                set: t,
                subscribe: n
            }) => {
                n((e => {
                    var t;
                    return null == e || null == (t = e.alert) ? void 0 : t.currentAlert
                }), (n => {
                    const i = e().displayList.alert;
                    if (!i && n === L_.EMPTY) return;
                    if (i && n !== L_.EMPTY) return;
                    const o = n !== L_.EMPTY;
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            alert: o
                        })
                    })))
                }))
            })(e), (({
                events: e,
                subscribe: t,
                set: n,
                get: i
            }) => {
                function o() {
                    n((e => {
                        const {
                            menu: t
                        } = e.displayList;
                        return t ? {
                            displayList: r(r({}, e.displayList), {}, {
                                menu: !1
                            })
                        } : o_
                    }))
                }
                e.on(kt, o), t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (t => {
                    const n = t ? kr : "";
                    e.fire(Kn, n)
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => {
                    var t, n, r, a;
                    return e && ((null == (t = i()) ? void 0 : t.appearance.appBreakpoint) === xs.XS || (null == (n = i()) ? void 0 : n.appearance.appBreakpoint) === xs.XXS || (null == (r = i()) ? void 0 : r.appearance.appSizeMode) === $a.MINI || (null == (a = i()) ? void 0 : a.appearance.appSizeMode) === $a.TINY) && o()
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint
                }), (e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === xs.XS || e === xs.XXS) && o()
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appSizeMode
                }), (e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === $a.MINI || e === $a.TINY) && o()
                }))
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => e((e => ({
                    displayList: r(r({}, e.displayList), {}, {
                        ad: t
                    })
                })));
                t.on(bn, (() => n(!0))), t.on([Cn, kt], (() => n(!1)))
            })(e), (({
                set: e,
                get: t,
                config: n,
                events: i,
                subscribe: o,
                store: a,
                element: l
            }) => {
                let s = n;
                const c = (t = {}) => {
                        var n;
                        (16 !== (null == (n = s.embed) || null == (n = n.settings) || null == (n = n.badge) ? void 0 : n.id) || t.isStockBadgeBehavior) && e((e => ({
                            displayList: r(r({}, e.displayList), {}, {
                                badge: !1
                            })
                        })))
                    },
                    d = (t = {}) => {
                        var n;
                        (16 !== (null == (n = s.embed) || null == (n = n.settings) || null == (n = n.badge) ? void 0 : n.id) || t.isStockBadgeBehavior) && e((e => {
                            const {
                                appearance: t
                            } = e;
                            return [$a.MINI, $a.TINY].includes(t.playerSizeMode) ? o_ : s.embed.settings.badge ? {
                                displayList: r(r({}, e.displayList), {}, {
                                    badge: !0
                                }),
                                appearance: r(r({}, e.appearance), {}, {
                                    shouldRestoreBadge: !1
                                })
                            } : o_
                        }))
                    };

                function u(t) {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            badge: A_({
                                config: t,
                                element: l
                            })
                        })
                    })))
                }
                i.on(Wn, (e => {
                    var t;
                    16 === (null == (t = s.embed) || null == (t = t.settings) || null == (t = t.badge) ? void 0 : t.id) && (e ? d({
                        isStockBadgeBehavior: !0
                    }) : c({
                        isStockBadgeBehavior: !0
                    }))
                })), i.on(Tn, c), i.on(Di, ((e, t) => {
                    s = t, u(t)
                })), i.on(kt, (() => {
                    u(s)
                })), a.watch("ui.player.mode", (n => {
                    n !== $a.TINY && n !== $a.MINI || !t().displayList.badge ? t().appearance.shouldRestoreBadge && d() : e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            badge: !1
                        }),
                        appearance: r(r({}, e.appearance), {}, {
                            shouldRestoreBadge: !0
                        })
                    })))
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    e ? d() : c()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }), (e => e && c())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    (function(e) {
                        return [Sa.NOT_SUPPORTED, Sa.HELP, null].includes(e)
                    })(e) || c(), e || t().playback.playInitiated || d()
                }))
            })(e), (({
                set: e,
                subscribe: t
            }) => {
                t((e => {
                    var t;
                    return null == e || null == (t = e.notification) ? void 0 : t.currentNotification
                }), (t => {
                    (t => {
                        e((e => ({
                            displayList: r(r({}, e.displayList), {}, {
                                notification: t
                            })
                        })))
                    })(!!t)
                }))
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            pipOverlay: t
                        })
                    })))
                };
                t.on(g.ENTER_PICTURE_IN_PICTURE, (() => n(!0))), t.on(g.LEAVE_PICTURE_IN_PICTURE, (() => n(!1)))
            })(e), (e => {
                const {
                    set: t,
                    events: n,
                    config: i,
                    subscribe: o
                } = e;

                function a(e = {}) {
                    t((t => {
                        const {
                            controlBar: i,
                            embed: o,
                            playback: a,
                            displayList: l,
                            appearance: s
                        } = t, c = ua(s, e, "mousedOverControlBar"), d = {
                            appearance: r(r({}, t.appearance), {}, {
                                mousedOverControlBar: c
                            })
                        };
                        return i.overrideBehavior || s.forceExitedFullscreen ? d : a.playInitiated && a.targetTimeReached || l.fullPlayerElement || o.autoHideControls || l.ad ? c ? d : !s.externalDisplay && !s.pictureInPictureActive || l.fullPlayerElement ? a.buffering || a.scrubbing ? d : (n.fire(Wn, !1), r(r({}, d), {}, {
                            displayList: r(r({}, t.displayList), {}, {
                                controlBar: !1
                            })
                        })) : d : d
                    }))
                }

                function l() {
                    t((e => {
                        const {
                            displayList: t,
                            controlBar: i,
                            embed: o
                        } = e;
                        return Oa(o) ? i.overrideBehavior || t.fullPlayerElement ? o_ : (n.fire(Wn, !0), {
                            displayList: r(r({}, e.displayList), {}, {
                                controlBar: !0
                            })
                        }) : o_
                    }))
                }

                function s() {
                    return a({
                        mousedOverControlBar: !1
                    })
                }

                function c(n) {
                    const i = g_(r(r({}, e), {}, {
                        config: n
                    }));
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            controlBar: i
                        })
                    })))
                }
                n.on([Ti, Fn, Nt, kt], l), n.on(Ci, s), n.on(yi, a), n.on(Di, (function(e, t) {
                    c(t)
                })), n.on([K.STREAM_ONLINE, K.STREAM_OFFLINE, K.EVENT_ENDED], (function() {
                    c(i)
                })), n.on(Zt, (function(e) {
                    t((t => t.controlBar.overrideBehavior ? {
                        displayList: r(r({}, t.displayList), {}, {
                            controlBar: e
                        })
                    } : o_))
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }), (e => e && l())), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }), (e => e && a())), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => {
                    e ? s() : l()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? a() : l()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => {
                    e && l()
                }))
            })(e), (e => {
                const {
                    get: t,
                    set: n,
                    events: i,
                    subscribe: o,
                    config: a,
                    bigPicture: l
                } = e;

                function s() {
                    n((e => {
                        const {
                            transcript: t
                        } = e.displayList;
                        return t ? c(e, !1) : o_
                    }))
                }

                function c(e, t) {
                    return {
                        displayList: r(r({}, e.displayList), {}, {
                            transcript: t
                        })
                    }
                }
                i.on(Di, (() => {
                    n((t => c(t, F_(e))))
                })), i.on(Vo, (function() {
                    var e, i, o, a, s;
                    const c = null == (e = t()) || null == (e = e.overlay) ? void 0 : e.purpose,
                        d = null == (i = t().displayList) ? void 0 : i.transcript,
                        u = null == (o = t()) || null == (o = o.displayList) ? void 0 : o.outro,
                        _ = null == (a = t()) || null == (a = a.displayList) ? void 0 : a.accessGate,
                        p = null == (s = t()) || null == (s = s.captions) ? void 0 : s.textTracks,
                        m = !!d || !u && G_.includes(c) && !!p.length && !_;
                    t().embed.transcript && m && (n((e => r(r({}, e), {}, {
                        displayList: r(r({}, e.displayList), {}, {
                            transcript: !e.displayList.transcript
                        })
                    }))), l.sendEvent(Ml.EMBEDDED_TRANSCRIPT_CLICK, {
                        name: d ? "exit_embed_transcript" : "open_embed_transcript",
                        copy: null,
                        location: "keyboard_shortcut",
                        element: "",
                        current_transcript_language: ""
                    }))
                })), i.on(wo, s), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.stereoscopicEnabled
                }), (e => e && s())), o((e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.overlay) && !G_.includes(null == e || null == (n = e.overlay) ? void 0 : n.purpose)
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => {
                    var n;
                    (({
                        events: e
                    }, t) => {
                        e.fire(_n, t)
                    })({
                        events: i
                    }, e);
                    const o = null == (n = t()) || null == (n = n.captions) ? void 0 : n.textTrackEls;
                    e && (({
                        config: e,
                        events: t
                    }, n) => {
                        var i;
                        const o = n.map((e => ({
                                id: e.id,
                                label: e.label,
                                language: e.srclang
                            }))),
                            r = (null == (i = w_(e, o)) ? void 0 : i.language) || "";
                        t.fire(Mo, {
                            id: d(),
                            startTime: Date.now(),
                            defaultLanguage: r
                        })
                    })({
                        config: a,
                        events: i
                    }, o)
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.aiWidget
                }), (e => e && s()))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function a() {
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            progressBar: !1
                        })
                    })))
                }

                function l() {
                    t((e => {
                        const {
                            appearance: t,
                            displayList: n,
                            embed: i,
                            controlBar: o
                        } = e, {
                            playerSizeMode: a,
                            playerBreakpoint: l
                        } = t;
                        return i.playbar ? n.ad ? o_ : zs(qs.PROGRESS_BAR, a, l) ? !o.showAllControls && n.controlBarButtons ? o_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                progressBar: !0
                            })
                        } : o_ : o_
                    }))
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }), (e => {
                    e === $a.TINY ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.controlBarButtons
                }), (e => {
                    e && !n().controlBar.showAllControls ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }), (e => {
                    !e && n().displayList.controlBarButtons ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? a() : l()
                })), o.on(Di, ((n, i) => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            progressBar: W_(r(r({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;

                function a(e) {
                    o.fire(No, e), n((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            rightContentArea: e
                        }),
                        appearance: r(r({}, t.appearance), {}, {
                            rightContentAreaAnimating: !0
                        })
                    }))), clearTimeout(l), l = setTimeout((function() {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                rightContentAreaAnimating: !1
                            })
                        })))
                    }), 400)
                }
                let l;
                t((e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.transcript) || (null == e || null == (n = e.displayList) ? void 0 : n.aiWidget)
                }), (e => {
                    var t;
                    const n = null == (t = i()) || null == (t = t.displayList) ? void 0 : t.rightContentArea;
                    e && !n ? a(!0) : !e && n && a(!1)
                })), Y_(e) && o.fire(No, !0)
            })(e), (({
                set: e,
                get: t,
                events: n,
                subscribe: i,
                config: o,
                backbone: a
            }) => {
                function l() {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            captions: !1
                        })
                    })))
                }

                function s() {
                    e((e => {
                        const {
                            appearance: t,
                            embed: n
                        } = e;
                        return n.cc ? t.pictureInPictureActive || n.background ? o_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                captions: !0
                            })
                        } : (a.disableTextTrack(), o_)
                    }))
                }
                n.on(A, s), n.on(g.ENTER_PICTURE_IN_PICTURE, l), n.on(g.LEAVE_PICTURE_IN_PICTURE, s), n.on(Tn, (() => {
                    o.embed.outro !== b_.NOTHING && l()
                })), n.on(kt, l), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    !e && s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.scrubbing
                }), (e => {
                    e && s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.captions) ? void 0 : t.activeCues
                }), (e => {
                    var n;
                    e.length && null != (n = t()) && null != (n = n.playback) && n.playInitiated ? s() : l()
                }))
            })(e), (e => {
                const {
                    subscribe: t,
                    events: n
                } = e;
                t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => n.fire(Yn, e)))
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;
                t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => e && $_(n))), o.on(un, (e => {
                    e === Xr.AI_WIDGET_ID && $_(n)
                })), o.on(Bo, (() => {
                    const {
                        toggleDisplayList: e,
                        embed: t
                    } = i();
                    t.aiWidget && e("aiWidget")
                }))
            })(e), (e => {
                const {
                    set: t,
                    events: n
                } = e, i = e => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            accessGate: e
                        })
                    })))
                };
                n.on(Yo, (() => {
                    i(!0)
                })), n.on($o, (() => {
                    i(!1)
                }))
            })(e), (({
                set: e,
                get: t,
                subscribe: n
            }) => {
                function i() {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            fullPlayerElement: t().displayList.accessGate || t().displayList.overlay
                        })
                    })))
                }
                n((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                }), (() => i())), n((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), (() => i()))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function a() {
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            controlBarButtons: !1
                        })
                    })))
                }

                function l() {
                    Oa(n().embed) && (n().controlBar.isExpanded || t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            controlBarButtons: !0
                        })
                    }))))
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }), (e => {
                    e || n().controlBar.shouldRestoreButtonsDisplayed ? l() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.isExpanded
                }), (e => {
                    !e && n().controlBar.showAllControls ? l() : a()
                })), o.on(Di, ((n, i) => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            controlBarButtons: K_(r(r({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), {
                debugPanel: false,
                cards: o,
                sideDock: t,
                title: n,
                controlBar: l,
                outro: false,
                overlay: i,
                alert: false,
                menu: false,
                ad: false,
                badge: a,
                notification: false,
                nudgeNotification: false,
                pipOverlay: false,
                transcript: u,
                progressBar: s,
                rightContentArea: c,
                captions: false,
                toast: false,
                topCenterActionItem: _,
                aiWidget: false,
                accessGate: p,
                fullPlayerElement: v,
                controlBarButtons: m
            }
        }(e), o = (e, n) => {
            t((t => ({
                displayList: r(r({}, t.displayList), {}, {
                    [e]: n
                })
            })))
        };
        return {
            displayList: i,
            setDisplayList: o,
            toggleDisplayList: e => {
                const t = n().displayList[e];
                o(e, !t)
            }
        }
    };

function z_(e) {
    const {
        config: t,
        store: i
    } = e, {
        video: o
    } = t, r = i.get("ui.player.width"), a = i.get("ui.player.height"), l = o.width, s = o.height, {
        videoWidth: c,
        videoHeight: d
    } = j_(r, a, l, s), u = hc(e);
    return {
        playerBreakpoint: i.get("ui.player.breakpoint"),
        appBreakpoint: i.get("ui.app.breakpoint"),
        playerSizeMode: i.get("ui.player.mode"),
        appSizeMode: i.get("ui.app.mode"),
        transcriptNavActive: !1,
        fullscreen: !1,
        forceExitedFullscreen: !1,
        pictureInPictureActive: !1,
        externalDisplay: !1,
        mousedOverSidedock: !1,
        mousedOverControlBar: !1,
        isMenuBlockingUI: i.get("ui.controlbar.isMenuFullWidth"),
        isMenuVerticalVideoMode: i.get("ui.controlbar.isMenuVerticalVideoMode"),
        shouldRestoreBadge: !1,
        isVerticalVideo: i.get("ui.player.isVerticalVideo"),
        boundingClientRect: or(e.element),
        isDisplayContextBackbone: e.displayContext === e.backbone,
        showAirPlayPicker: !1,
        shouldMenuItemsWrap: i.get("ui.controlbar.doMenuItemsWrap"),
        stereoscopicEnabled: !1,
        videoWidth: c,
        videoHeight: d,
        playerWidth: r,
        playerHeight: a,
        containerWidth: i.get("ui.container.width"),
        containerHeight: i.get("ui.container.height"),
        placeholderThumbnail: n(null == o ? void 0 : o.thumbnail_url, {
            mw: "80",
            q: "85"
        }),
        rightContentAreaAnimating: !1,
        isStartTimeThumbLoading: u
    }
}

function j_(e, t, n, i) {
    const o = n / i,
        r = o > e / t;
    return {
        videoWidth: r ? e : Math.round(t * o),
        videoHeight: r ? Math.round(e / o) : t
    }
}
const X_ = (e, t) => {
        Oe((() => {
            const n = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (ke) {
                        return Promise.reject(ke)
                    }
                }
            }((function() {
                return function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(t.playbackEngineReady(), (function() {
                    e()
                }))
            }));
            n()
        }))
    },
    Z_ = e => ({
        onClick: t => {
            t.preventDefault(), t.stopPropagation(), e(t)
        },
        onKeyDown: t => {
            ["Enter", " "].includes(t.key) && document.body.classList.contains($r.SHOWFOCUS) && (t.preventDefault(), t.stopPropagation(), e(t))
        },
        onMouseDown: e => {
            e.preventDefault()
        }
    }),
    J_ = () => {
        const e = mv((e => e.playback.paused)),
            t = mv((e => e.playback.scrubbing)),
            n = mv((e => e.playback.scrubbingByFrame)),
            i = mv((e => e.playback.playInitiated)),
            o = mv((e => e.chromecast.isChromecastPlaying)),
            r = mv((e => e.chromecast.isChromecastConnected)),
            a = mv((e => e.playback.buffering)),
            l = mv((e => e.playback.isAdPlaying)),
            s = mv((e => e.embed.isTrailer)),
            c = mv((e => e.embed.autoPlay)),
            d = mv((e => e.displayList.outro)),
            u = mv((e => e.displayList.ad)),
            _ = s && !i;
        let p = Za.PLAY;
        _ ? p = Za.TRAILER : c && (p = Za.PAUSE);
        const [m, v] = Pe(p);
        return r && v(o ? Za.PAUSE : Za.PLAY), u && v(l ? Za.PAUSE : Za.PLAY), Oe((() => {
            d ? v(Za.REPLAY) : t && !d && v(e ? Za.PLAY : Za.PAUSE)
        }), [d]), Oe((() => {
            t && !n || a || _ || r || d || u || v(e ? Za.PLAY : Za.PAUSE)
        }), [e, a, _, r, d, u]), Oe((() => {
            i && v(Za.PAUSE)
        }), [i]), {
            buttonState: m,
            setButtonState: v
        }
    };
let Q_ = function(e) {
        return e.PREFS = "prefs", e.CHAPTERS = "chapters", e.CC = "cc", e.TRANSCRIPT = "transcript", e.SIDEDOCK = "sidedock", e
    }({}),
    ep = function(e) {
        return e.EMPTY = "empty", e.PREFS = "prefs", e.QUALITY = "quality", e.SPEED = "speed", e.AUDIO = "audio", e.CHAPTERS = "chapters", e.LANGUAGES = "languages", e.CUSTOMIZE = "customize", e.FONT = "font", e.BACKGROUND = "background", e.WINDOW = "window", e.PREVIEW = "preview", e.TRANSCRIPT_SETTINGS = "transcriptSettings", e.TRANSCRIPT_LANGUAGES = "transcriptLanguages", e.SIDEDOCK = "sidedock", e
    }({}),
    tp = function(e) {
        return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
    }({});
const np = () => {
    const e = mv((e => e.captions.textTracks)),
        t = mv((e => e.playback.supportsTextTracks)),
        n = mv((e => e.appearance.isDisplayContextBackbone)),
        i = mv((e => e.displayList.ad)),
        o = mv((e => e.embed.speedChangeEnabled)),
        r = mv((e => e.playback.qualities)),
        a = mv((e => e.embed.quality)),
        l = mv((e => e.chromecast.isChromecastConnected)),
        s = mv((e => e.chapters.chapters)),
        c = mv((e => e.embed.transcript)),
        d = mv((e => e.embed.cc)),
        u = mv((e => e.embed.chapters)),
        _ = mv((e => e.playback.isSegmentedPlaybackEnabled)),
        p = mv((e => e.playback.audioTracks)),
        m = !(!a || null == r || !r.length),
        v = p.length > 1,
        f = t && !!e.length && n && !i && d,
        h = n && !!(o || m || v) && !l && !i,
        E = !(null == s || !s.length) && u && !i && !_,
        g = t && !!e.length && n && !i && c;
    return {
        [Q_.CC]: f,
        [Q_.PREFS]: h,
        [Q_.CHAPTERS]: E,
        [Q_.TRANSCRIPT]: g
    }
};
let ip = function(e) {
    return e.IDLE = "idle", e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error", e
}({});

function op() {}
const rp = e => {
        const [t, n] = Pe(ip.IDLE), i = Re(), o = Ne(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            if (null == i || !i.current) return function(e) {
                if (e && e.then) return e.then(op)
            }(function(t, o) {
                try {
                    var r = function() {
                        let t;
                        return n(ip.LOADING),
                            function(e, t) {
                                var n = e();
                                return n && n.then ? n.then(t) : t(n)
                            }((function() {
                                return function(e, t) {
                                    return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                                }(Ga(e), (function(e) {
                                    t = e
                                }))
                            }), (function() {
                                i.current = t, n(ip.LOADED)
                            }))
                    }()
                } catch (ke) {
                    return o()
                }
                return r && r.then ? r.then(void 0, o) : r
            }(0, (function(e) {
                n(ip.ERROR)
            })))
        })), [e]);
        return {
            readyState: t,
            load: o,
            module: (null == i ? void 0 : i.current) || null
        }
    },
    ap = (e, t, n) => {
        Oe((() => {
            function i(n) {
                n.key !== e && n.code !== e || t(n)
            }

            function o(t) {
                t.key !== e && t.code !== e || !n || n(t)
            }
            return window.addEventListener("keydown", i), n && window.addEventListener("keyup", o), () => {
                window.removeEventListener("keydown", i), n && window.removeEventListener("keyup", o)
            }
        }), [t, n, e])
    };
let lp = function(e) {
    return e[e.AUTO = 0] = "AUTO", e[e.BOTTOM = 1] = "BOTTOM", e[e.CENTER = 2] = "CENTER", e
}({});
const sp = () => {
        const e = mv((e => e.embed.playButtonPosition)),
            t = mv((e => e.embed.playbar)),
            n = mv((e => e.appearance.playerSizeMode)),
            i = mv((e => e.appearance.isVerticalVideo)),
            {
                buttonState: o
            } = J_(),
            r = n === $a.TINY,
            a = n === $a.MINI && i;
        return o === Za.REPLAY ? lp.BOTTOM : r || a || e === lp.CENTER ? lp.CENTER : e === lp.BOTTOM || e !== lp.AUTO || t ? lp.BOTTOM : lp.CENTER
    },
    cp = () => {
        const e = mv((e => e.playback.volume)),
            t = mv((e => e.playback.muted)),
            n = mv((e => e.setPlayback)),
            i = () => {
                n("muted", !1), e <= 0 && n("volume", 100)
            },
            o = () => {
                n("muted", !0)
            };
        return {
            mute: o,
            unmute: i,
            toggleMuted: () => {
                t || e <= 0 ? i() : o()
            }
        }
    },
    dp = (e = 1e4) => {
        const [t, n] = Pe(!1), [i, o] = Pe(e), [r, a] = Pe(Date.now());
        return {
            hasError: t,
            componentTimeout: i,
            componentVersion: r,
            onError: () => {
                n(!0)
            },
            onReload: () => {
                n(!1), o(i + 1e3), a(Date.now())
            }
        }
    };
let up = function(e) {
    return e.VOLUME = "volume", e.CHROMECAST = "chromecast", e.AIRPLAY = "airplay", e.STEREOSCOPIC = "stereoscopic", e.PIP = "pip", e.FULLSCREEN = "fullscreen", e.VIMEO_LOGO = "vimeo_logo", e
}({});
const _p = e => {
        const t = mv((e => e.appearance.playerSizeMode)),
            n = mv((e => e.appearance.playerBreakpoint));
        return zs(e, t, n)
    },
    pp = e => {
        let t = [];
        return (null != e && e.children ? Array.from(e.children) : []).forEach((e => {
            var n;
            const i = window.getComputedStyle(e);
            if (!i.display || "none" === i.display) return;
            const o = "none" !== i.pointerEvents;
            e.tabIndex > -1 && o && t.push(e), null != (n = e.children) && n.length && (t = t.concat(pp(e)))
        })), t
    },
    mp = e => {
        document.body.classList.toggle($r.SHOWFOCUS, e)
    };

function vp() {
    return document.activeElement
}

function fp(e) {
    return null == e ? void 0 : e.contains(vp())
}

function hp(e, t) {
    let n = pp(e),
        i = n.indexOf(vp()),
        o = "prev" === t ? i - 1 : i + 1,
        r = null;
    r = o >= n.length ? n[0] : o < 0 ? n[n.length - 1] : n[o], r && r.focus()
}
const Ep = ["s", "?"],
    gp = ({
        parentRef: e,
        isActive: t,
        toggleKey: n,
        customKeyHandlers: i = {},
        externalElement: o,
        onEscape: r = Ua,
        onToggle: a = Ua
    }) => {
        const l = mv((e => e.config.view)),
            s = mv((e => e.embed.controls)),
            c = mv((e => e.embed.background)),
            d = mv((e => e.embed.keyboard)),
            u = mv((e => e.element)),
            _ = Re(null),
            p = Re(t),
            m = Re(null),
            v = Re(null);

        function f(e) {
            0 !== e.detail && mp(!1)
        }

        function h(e, t = 0) {
            t >= 5 || e && (e.focus(), e !== vp() && (clearTimeout(m.current), m.current = setTimeout((() => h(e, t + 1)), 100)))
        }

        function E() {
            const t = pp(e.current);
            t.length > 0 && h(t[0])
        }

        function g() {
            _.current && (h(_.current), _.current = null), clearTimeout(v.current), v.current = setTimeout((() => {
                !u.contains(vp()) && null != o && o.current && h(o.current)
            }), 500)
        }

        function b() {
            var t;
            return null == e || null == (t = e.current) ? void 0 : t.contains(vp())
        }

        function C(e) {
            if (Ep.includes(e.key) || "Space" === e.code) return !0;
            if (e.ctrlKey || e.metaKey || e.altKey || "Shift" === e.key) return !0;
            if ("keydown" !== e.type) return !0;
            if (!s || c) return !0;
            const t = e.target || e.srcElement,
                n = u.contains(t),
                i = t.tagName;
            if ("INPUT" === i || "SELECT" === i || "TEXTAREA" === i || t.isContentEditable) {
                const t = !n,
                    i = n && "Escape" !== e.key && "Tab" !== e.key && e.shiftKey;
                if (t || i) return !0
            }
            return !pa(l)
        }
        const T = Ne((o => {
            if (C(o)) return;
            "Escape" !== o.key ? mp(!0) : mp(!1);
            const l = o.key,
                s = {
                    Escape: () => {
                        null != e && e.current && p.current && (o.preventDefault(), null == r || r(), g())
                    },
                    Tab: () => {
                        var n;
                        const i = o.shiftKey ? "prev" : "next",
                            r = "dialog" === (null == e || null == (n = e.current) || null == n.getAttribute ? void 0 : n.getAttribute("role"));
                        (t || b()) && r && (o.preventDefault(), hp(e.current, i))
                    }
                };
            n && (s[n] = () => {
                null == a || a(!p.current)
            }), "function" == typeof s[l] && s[l](), "function" == typeof i[l] && i[l](o)
        }), [i, t, b, r, a, e, C, n]);
        return Oe((() => {
            t ? E() : !t && p.current && g(), p.current = t
        }), [t]), Oe((() => (d && (document.addEventListener("click", f, !1), document.addEventListener("keydown", T, !1)), () => {
            document.removeEventListener("click", f, !1), document.removeEventListener("keydown", T, !1)
        })), [d, T]), {
            onFocus: function(t) {
                var n, i;
                (null == (n = e.current) ? void 0 : n.contains(vp())) && (null == (i = e.current) || !i.contains(t.relatedTarget)) && !_.current && (_.current = t.relatedTarget)
            },
            focusFirstItem: E
        }
    },
    bp = ({
        menuRef: e,
        panelRef: t,
        buttonRef: n,
        isActive: i,
        toggleKey: o,
        shouldTrapFocus: r = !1,
        onBack: a = Ua,
        setMenuDisplayed: l = Ua
    }) => {
        const s = Ne((e => {
                fp(t.current) && (e.preventDefault(), hp(t.current, "prev"))
            }), [t]),
            c = Ne((e => {
                fp(t.current) && (e.preventDefault(), hp(t.current, "next"))
            }), [t]),
            d = Ne((e => {
                if (fp(t.current)) {
                    const t = e.target,
                        n = t.getAttribute("aria-haspopup"),
                        i = t.getAttribute("aria-expanded");
                    "true" === n && "true" === i ? t.click() : a(e)
                }
            }), [t, a]),
            u = Ne((e => {
                if (fp(t.current)) {
                    const t = e.target,
                        n = t.getAttribute("aria-haspopup"),
                        i = t.getAttribute("aria-expanded");
                    "true" === n && "false" === i && t.click()
                }
            }), [t]),
            _ = Ne((t => {
                var i;
                if ((null == (i = e.current) ? void 0 : i.contains(t.target)) && null != n && n.current) {
                    const i = !t.shiftKey;
                    if (r) {
                        const n = i ? "next" : "prev";
                        return t.preventDefault(), void hp(e.current, n)
                    }
                    const a = pp(e.current),
                        l = a.indexOf(t.target);
                    var o;
                    (i && l === a.length - 1 || !i && 0 === l) && (t.preventDefault(), null == (o = n.current) || o.focus())
                }
            }), [e, n, r]);
        return gp({
            parentRef: t,
            isActive: i,
            toggleKey: o,
            onEscape: () => {
                l(!1)
            },
            onToggle: e => {
                l(e)
            },
            externalElement: n,
            customKeyHandlers: {
                ArrowUp: s,
                ArrowDown: c,
                ArrowLeft: d,
                ArrowRight: u,
                Tab: _
            }
        })
    },
    Cp = e => {
        const t = mv((e => e.appearance.appSizeMode)),
            n = mv((e => e.appearance.appBreakpoint)),
            i = t === $a.MINI || t === $a.TINY || n === xs.XXS || n === xs.XS;
        return {
            role: i ? "dialog" : void 0,
            ariaModal: !!i || void 0,
            ariaHidden: !e || void 0
        }
    },
    Tp = (e, t, n = 300) => {
        const i = R(t, n),
            o = Re(new oe(i));
        Oe((() => {
            const t = o.current,
                n = null == e ? void 0 : e.current;
            return n && t.observe(n), () => {
                n && t.unobserve(n)
            }
        }), [])
    };
let yp = function(e) {
    return e.DOLBY_VISION = "dolbyVision", e.CLOSE = "close", e.PIP = "pip", e.AIRPLAY = "airPlay", e.ENTER_FULLSCREEN = "enterFullscreen", e.EXIT_FULLSCREEN = "exitFullscreen", e.GEAR = "gear", e.VIMEO = "vimeo", e.VIMEO_SMALL = "vimeoSmall", e.ENTER_PICTURE_IN_PICTURE = "enterPictureInPicture", e.EXIT_PICTURE_IN_PICTURE = "exitPictureInPicture", e.PAUSE = "pause", e.PLAY = "play", e.REPLAY = "replay", e.CHAPTERS = "chapters", e.POINT = "point", e.CC = "cc", e.CC_FILLED = "ccFilled", e.CHECKMARK = "checkmark", e.STEREOSCOPIC = "stereoscopic", e.PERSON_FILLED = "personFilled", e.CHEVRON_DOWN = "chevronDown", e.CHEVRON_RIGHT = "chevronRight", e.CLOCK = "clock", e.CLOCK_FILLED = "clockFilled", e.COLLECTIONS = "collections", e.DISMISS_X = "dismissX", e.HEART = "heart", e.HEART_FILLED = "heartFilled", e.HEART_WIDER_FILLED = "heartWiderFilled", e.HEART_WIDER_BROKEN_FILLED = "heartWiderBrokenFilled", e.ONDEMAND = "ondemand", e.PAPER_PLANE = "paperPlane", e.POP_OUT = "popOut", e.VOLUME_OFF_FILLED = "volumeOffFilled", e.VOLUME_ON_FILLED = "volumeOnFilled", e.FAST_FORWARD = "fastForward", e.INFO_CIRCLE = "infoCircle", e.TRANSCRIPT_ON = "transcriptOn", e.TRANSCRIPT_OFF = "transcriptOff", e.SEARCH = "search", e.CHEVRON_UP = "chevronUp", e.CLOSE_CIRCLE = "closeCircle", e.SPINNER = "spinner", e.SLIDERS = "sliders", e.SWITCH_CONTAINER = "switchContainer", e.SWITCH_CIRCLE = "switchCircle", e.WARN_CIRCLE = "warnCircle", e.THUMBS_UP = "thumbsUp", e.THUMBS_DOWN = "thumbsDown", e.THUMBS_UP_FILLED = "thumbsUpFilled", e.THUMBS_DOWN_FILLED = "thumbsDownFilled", e.LINK = "link", e.SPARKLE_TWO_STARS_FILLED = "sparkleTwoStarsFilled", e.WARN_TRIANGLE = "warnTriangle", e.VERTICAL_ELLIPSIS = "verticalEllipsis", e.PLUS_SYMBOL = "plusSymbol", e.FACEBOOK = "facebook", e.TUMBLR = "tumblr", e.EMAIL = "email", e.EMBED = "embed", e.PREVIOUS = "previous", e.TWITTER = "twitter", e.VOD = "vod", e.VOD_DOWNLOAD = "vodDownload", e.VOD_RENT = "vodRent", e.VOD_SUBSCRIBE = "vodSubscribe", e
}({});
const Lp = () => {
        const e = mv((e => e.toggleDisplayList));
        return {
            label: "Perguntar ao Vimeo AI",
            enabled: mv((e => e.embed.aiWidget)),
            onSelect: () => e("aiWidget"),
            icon: yp.SPARKLE_TWO_STARS_FILLED
        }
    },
    Ap = () => {
        const e = mv((e => e.setUser));
        return {
            label: "Adicionar `as coleções",
            enabled: mv((e => e.embed.collections)),
            onSelect: () => e("collected", !0),
            icon: yp.COLLECTIONS
        }
    },
    {
        Provider: Sp,
        useStore: Ip
    } = De(),
    Op = ({
        player: e,
        children: t
    }) => (we((e => {})), ke(Sp, {
        createStore: () => Me(((t, n) => {
            const {
                config: i,
                events: o,
                uuid: a,
                element: l,
                store: s,
                loadVideoViaIframe: c,
                loadVideoViaConfig: d,
                performDelegateAction: u,
                bigPicture: _
            } = e, p = {
                set: t,
                get: n,
                events: o,
                store: s,
                get config() {
                    return e.config
                },
                get bigPicture() {
                    return e.bigPicture
                }
            };
            return r(r(r(r(r(r(r(r({
                config: i,
                element: l,
                uuid: a,
                view: i.view,
                events: o,
                bigPicture: _,
                performDelegateAction: u,
                loadVideoViaIframe: c,
                loadVideoViaConfig: d
            }, (e => {
                const t = r(r({}, function() {
                    const t = v_(e.config),
                        n = (null == t ? void 0 : t.gate_type) || bs.EMPTY;
                    return As(n, e.config, null == t ? void 0 : t.gate_id)
                }()), {}, {
                    accessGateLoaded: !1,
                    accessGateReady: !1,
                    setAccessGateLoaded: function() {
                        e.set((e => ({
                            accessGate: r(r({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateLoaded: !0
                            })
                        })))
                    },
                    setAccessGateReady: function() {
                        e.set((e => ({
                            accessGate: r(r({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateReady: !0
                            })
                        }))), n(Ts.OPENED)
                    },
                    closeAccessGate: o,
                    sendGateBPEvent: n
                });

                function n(t, n) {
                    var i;
                    null != (i = e.config.embed.access_gates) && i.length && e.bigPicture.sendEvent(Ml.PROCESS_STEP, {
                        process_name: "access_gate",
                        step_name: t,
                        status: t === Ts.ERROR ? "fail" : "success",
                        error: (null == n ? void 0 : n.message) || null,
                        error_code: "number" == typeof(null == n ? void 0 : n.code) ? `${n.code}` : null
                    })
                }

                function i(t, n = null) {
                    const i = As(t, e.config, n);
                    e.set((e => ({
                        accessGate: r(r({}, null == e ? void 0 : e.accessGate), i)
                    }))), e.events.fire(Yo, i.purpose)
                }

                function o(t) {
                    e.set((t => ({
                        accessGate: r(r({}, null == t ? void 0 : t.accessGate), {}, {
                            accessGateLoaded: !1,
                            accessGateReady: !1
                        }, As(bs.EMPTY, e.config))
                    }))), e.events.fire($o, t), n(Ts.CLOSED)
                }

                function a() {
                    var t, n;
                    const r = e.config.embed.access_gates;
                    null != r && r.length && r.forEach((t => {
                        ! function(t) {
                            const {
                                gate_type: n,
                                placement: o,
                                timecode: r,
                                gate_id: a
                            } = t;

                            function l({
                                currentTime: t
                            }) {
                                t >= r && (i(n, a), e.events.off(g.TIME_UPDATE, l))
                            }

                            function s() {
                                i(n, a), e.events.off(Tn, s)
                            }
                            Is(n, e.config) || (o === Cs.DURING_VIDEO && e.events.on(g.TIME_UPDATE, l), o === Cs.AFTER_VIDEO && e.events.on(Tn, s), e.events.on(Di, (function() {
                                e.events.off(g.TIME_UPDATE, l), e.events.off(Tn, s)
                            })))
                        }(t)
                    }));
                    const a = v_(e.config),
                        l = null == (t = e.get()) || null == (t = t.accessGate) ? void 0 : t.gateId,
                        s = (null == (n = e.get()) || null == (n = n.accessGate) ? void 0 : n.purpose) || bs.EMPTY,
                        c = null == a ? void 0 : a.gate_id,
                        d = (null == a ? void 0 : a.gate_type) || bs.EMPTY,
                        u = l !== c || s !== d;
                    s !== bs.EMPTY && u && o(), d !== bs.EMPTY && c && u && (i(d, c), e.events.once(so, (() => {
                        e.events.fire(Yo, d)
                    })))
                }
                return a(), e.events.on(Di, (function() {
                    a()
                })), {
                    accessGate: t
                }
            })(p)), Pp(p)), Np(p)), kp(p)), Mp(p)), xp(p)), Yp(p)), $p(p))
        })),
        children: t
    })),
    Pp = e => {
        const t = Rp(e),
            {
                set: n,
                events: i
            } = e;
        return i.on(kt, (() => {
            n((() => ({
                colors: Rp(e)
            })))
        })), i.on(xt, ((e, t) => {
            const i = Ba(e);
            if (!i) return;
            const o = Fr[t];
            n((e => ({
                colors: r(r({}, e.colors), {}, {
                    [o]: i
                })
            })))
        })), {
            colors: t
        }
    };

function Rp(e) {
    const {
        embed: t
    } = e.config;
    return {
        colorOne: Ba(t.color_one) || Ba(Ur[Mr]),
        colorTwo: Ba(t.color_two) || Ba(t.color) || Ba(Ur[Vr]),
        colorThree: Ba(t.color_three) || Ba(Ur[Br]),
        colorFour: Ba(t.color_four) || Ba(Ur[xr])
    }
}
const Np = e => {
    const t = Dp(e),
        {
            set: n,
            events: i
        } = e;
    return i.on(Di, (() => {
        n((() => ({
            embed: Dp(e)
        })))
    })), {
        embed: t
    }
};

function Dp(e) {
    const {
        config: t
    } = e;
    return {
        playerUrl: t.player_url,
        referrer: t.request.referrer,
        transparent: !!t.embed.transparent,
        videoId: t.video.id,
        vimeoUrl: t.vimeo_url,
        onsite: !!t.embed.on_site
    }
}
let wp = function(e) {
    return e.EMPTY = "empty", e.PRIVATE_LOCKED = "private-locked", e.PASSWORD = "password", e.ERROR = "error", e.GEO_BLOCKED = "geo-blocked", e.DRM_PLAYBACK_UNAVAILABLE = "drm-playback-unavailable", e
}({});
const kp = e => {
        const {
            get: t,
            set: n,
            events: i
        } = e;

        function o() {
            n((() => ({
                error: {
                    type: null,
                    title: null,
                    message: null
                }
            })))
        }
        return i.on(fn, ((e, i) => {
            var o;
            const r = null == (o = t()) || null == (o = o.error) ? void 0 : o.type;
            C_(r, e, i) && n((() => ({
                error: {
                    type: e,
                    title: null == i ? void 0 : i.title,
                    message: null == i ? void 0 : i.message
                }
            })))
        })), i.on(vn, ((e, t) => {
            e !== wp.ERROR || n((() => ({
                error: {
                    type: oa.LOCAL_ACCESS_GATE_ERROR,
                    title: t.title,
                    message: t.message
                }
            })))
        })), i.on(wt, (e => {
            e === Sa.ERROR && n((() => ({
                error: {
                    type: oa.LOAD_VIDEO_VIA_CONFIG,
                    title: "Desculpe",
                    message: "Houve um problema. Por favor, tente novamente."
                }
            })))
        })), i.on(ui, o), i.on(Ui, (() => {
            var e;
            const n = ra();
            (null == (e = t()) || null == (e = e.error) ? void 0 : e.type) === n.type && o()
        })), {
            error: {
                type: null,
                title: null,
                message: null
            }
        }
    },
    Mp = e => {
        const {
            set: t,
            events: n
        } = e, i = {
            purpose: Vp(e.config.view)
        };
        return n.on(Di, (function() {
            t((() => ({
                localAccessGate: {
                    purpose: Vp(e.config.view)
                }
            })))
        })), n.on(vn, (e => {
            t((t => ({
                localAccessGate: r(r({}, t.localAccessGate), {}, {
                    purpose: e
                })
            })))
        })), {
            localAccessGate: i
        }
    };

function Vp(e) {
    return e === Lr.geoBlocked ? wp.GEO_BLOCKED : e === Lr.error ? wp.ERROR : e === Lr.privateLocked ? wp.PRIVATE_LOCKED : e === Lr.privatePassword ? wp.PASSWORD : e === Lr.drmPlaybackUnavailable ? wp.DRM_PLAYBACK_UNAVAILABLE : wp.EMPTY
}
const Bp = [Lr.main, Lr.privateUnlocked],
    xp = e => {
        const {
            set: t,
            events: n
        } = e, i = Up(e);
        return n.on(jo, (e => {
            t((t => ({
                login: r(r({}, t.login), {}, {
                    status: e
                })
            })))
        })), n.on(Pi, (() => {
            t((() => ({
                login: Up(e)
            })))
        })), n.on(Di, (() => {
            t((() => ({
                login: Up(e)
            })))
        })), {
            login: i
        }
    };

function Up(e) {
    return {
        status: Hp(e)
    }
}

function Hp(e) {
    const {
        config: t
    } = e;
    return t.user.logged_in ? Bp.includes(t.view) ? Ps.LOGGED_IN_HAS_ACCESS : Ps.LOGGED_IN_NO_ACCESS : Ps.NOT_LOGGED_IN
}

function Fp(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function Gp({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const l = parseInt(e, 10),
        s = parseInt(t, 10);
    return 0 === l || isNaN(l) || (r ? a.w = l : a.mw = l), 0 === s || isNaN(s) || (r ? a.h = s : a.mh = s), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function Wp(e, t = 0) {
    return function(e) {
        return new Promise(((t, n) => {
            const i = new Image;

            function o() {
                rc.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        }))
    }(e).catch((n => (rc.captureException(n, {
        extra: {
            imageUrl: e
        }
    }), t > 0 ? Wp(e, t - 1) : new Promise((() => {})))))
}
const Yp = e => {
        const {
            set: t,
            get: n,
            events: i,
            store: a
        } = e, l = (e, n) => {
            t((t => ({
                videoThumbnail: r(r({}, t.videoThumbnail), {}, {
                    [e]: n
                })
            })))
        }, s = () => l("isDisplayed", !0), c = () => l("isDisplayed", !1);

        function d() {
            return !!e.config.video.thumbnail_url
        }

        function u() {
            return a.get(cd) && !a.get(ud) || !e.config.embed.autoplay || td.isCastConnected
        }

        function _() {
            return Fp(a.get("ui.player.width") * o.devicePixelRatio, a.get("ui.player.height") * o.devicePixelRatio)
        }
        const p = () => (i.fire(zo), Promise.resolve());

        function m() {
            if (!d()) return p();
            const {
                width: n,
                height: i
            } = _(), o = e.config.video.thumbnail_url, c = Gp({
                width: n,
                height: i,
                baseUrl: o
            });
            l("width", n);
            const m = Wp(c, 3).then((e => (e && a.dispatch(((e, t) => ({
                type: Kd,
                payload: {
                    width: e,
                    height: t
                }
            }))(e.width, e.height)), u() && (t((e => ({
                videoThumbnail: r(r({}, e.videoThumbnail), {}, {
                    thumbnailUrl: c,
                    thumbnailBaseUrl: o
                })
            }))), s()), e)));
            if (!u()) return p();
            const v = new Promise((e => {
                setTimeout(e, 2e3)
            }));
            return Promise.race([m, v]).catch((e => {})).finally((() => {
                p()
            }))
        }

        function v() {
            var e, t, i;
            if (null == (e = n()) || null == (e = e.videoThumbnail) || !e.isDisplayed || null == (t = n()) || null == (t = t.videoThumbnail) || !t.thumbnailUrl) return;
            const {
                width: o
            } = _();
            o <= (null == (i = n()) || null == (i = i.videoThumbnail) ? void 0 : i.width) || 0 === o || m()
        }
        i.on(pn, s), i.on(mn, c), i.on(Di, (t => {
            var i;
            const o = e.config.video.thumbnail_url,
                r = null == (i = n()) || null == (i = i.videoThumbnail) ? void 0 : i.thumbnailBaseUrl;
            t || o && r && r !== o ? m() : p()
        })), i.on(ei, v), i.on([C.BUFFER_ENDED, g.PLAYING], c), a.watch("ui.player.width", R(v, 150)), a.watch("ui.preview.scaleFactor", (e => {
            l("shouldCoverBackground", e > 1)
        }));
        const {
            width: f,
            height: h
        } = _(), E = e.config.video.thumbnail_url;
        return {
            videoThumbnail: {
                thumbnailUrl: d() ? Gp({
                    width: f,
                    height: h,
                    baseUrl: E
                }) : "",
                thumbnailBaseUrl: E,
                width: f,
                isDisplayed: !1,
                shouldCoverBackground: a.get("ui.preview.scaleFactor") > 1
            },
            setVideoThumbnail: l
        }
    },
    $p = e => {
        const t = Kp(e),
            {
                set: n,
                events: i
            } = e;
        return i.on(Di, (() => {
            n((() => ({
                user: Kp(e)
            })))
        })), i.on(Pi, (() => {
            n((() => ({
                user: Kp(e)
            })))
        })), {
            user: t
        }
    };

function Kp(e) {
    const {
        config: t
    } = e, {
        user: n
    } = t;
    return {
        isClipOwner: !!n.owner
    }
}
let qp = function(e) {
    return e.LIKES = "likes", e.WATCH_LATER = "watchlater", e.FOLLOWING = "following", e
}({});

function zp() {}
const jp = () => {
    const e = Ip((e => e.events)),
        t = Ip((e => e.bigPicture)),
        n = Ip((e => e.embed.videoId)),
        i = Ip((e => e.embed.playerUrl)),
        o = Ip((e => e.user.isClipOwner)),
        r = Ip((e => e.performDelegateAction)),
        a = mv((e => e.user.loggedIn)),
        l = mv((e => e.user.liked)),
        s = mv((e => e.embed.like)),
        c = mv((e => e.user.persistUserAction)),
        d = l ? "Descurtir" : "Curtir",
        u = a ? d : "Curtir (isto abre em uma nova janela)",
        _ = l ? yp.HEART_FILLED : yp.HEART,
        p = `https://${i}/video/${n}/login/like`,
        {
            openLoginPopup: m
        } = om({
            url: p,
            context: Rs.LOGIN_LIKE
        }),
        v = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            if (t.sendEvent(Ml.SELECT_LIKE_HEART_ICON, {}, {
                    [Vl.WEB]: {
                        target: a ? null : "reg modal",
                        target_path: a ? null : p,
                        copy: "like"
                    },
                    [Vl.PRODUCT_ANALYTICS]: {
                        flow: a ? null : "open_embed_reg_modal",
                        element: "icon",
                        copy: "like"
                    }
                }), e.fire(ii), !o) return function(e, t) {
                var n = function() {
                    if (!a) return function(e, t) {
                        return function(e, t, n) {
                            if (n) return t ? t(e()) : e();
                            try {
                                var i = Promise.resolve(e());
                                return t ? i.then(t) : i
                            } catch (ke) {
                                return Promise.reject(ke)
                            }
                        }(e, zp, t)
                    }(m)
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                l ? r(Ld, (() => {
                    c(qp.LIKES, "DELETE"), e.fire(Ai)
                })) : r(yd, (() => {
                    c(qp.LIKES, "PUT"), e.fire(Li)
                }))
            }))
        }));
    return {
        label: d,
        ariaLabel: u,
        enabled: s,
        onSelect: v,
        icon: _
    }
};

function Xp() {}
const Zp = () => {
        const e = mv((e => e.bigPicture)),
            t = mv((e => e.setOverlay)),
            n = mv((e => e.embed.shareUrlWithParams)),
            i = mv((e => e.title.title)),
            o = Re(!1),
            r = Ip((e => e.embed.videoId)),
            a = mv((e => e.embed.share)),
            l = mv((e => e.embed.embedOnlyShare)),
            s = l ? "Incorporação" : "Compartilhar",
            c = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (ke) {
                        return Promise.reject(ke)
                    }
                }
            }((function() {
                if (o.current) return;
                o.current = !0;
                let a = Pu(r, l, !1);
                return function(e, o) {
                    var r = function() {
                        if ("variant" === a) return function(e) {
                            if (e && e.then) return e.then(Xp)
                        }(function(e, t) {
                            try {
                                var n = e()
                            } catch (ke) {
                                return t(ke)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return function(e) {
                                if (!void 0) return e && e.then ? e.then(Xp) : Promise.resolve()
                            }(navigator.share({
                                title: i,
                                url: n
                            }))
                        }), (function(e) {
                            "AbortError" !== e.name && (t("purpose", Sa.SHARE), a = "")
                        })));
                        t("purpose", Sa.SHARE)
                    }();
                    return r && r.then ? r.then(o) : o()
                }(0, (function() {
                    e.sendEvent(Ml.SELECT_PLAYER_SHARE, {
                        ab_group: a
                    }, {
                        [Vl.WEB]: {
                            target: "share overlay",
                            target_path: null,
                            copy: "share"
                        },
                        [Vl.PRODUCT_ANALYTICS]: {
                            flow: "viewer_home_from_embed_player",
                            element: "icon",
                            copy: "share"
                        }
                    }), o.current = !1
                }))
            }));
        return {
            label: s,
            enabled: a,
            onSelect: c,
            icon: yp.PAPER_PLANE
        }
    },
    Jp = () => {
        const e = mv((e => e.vod.vodButtonVisible)),
            t = mv((e => e.vod.vodLabel));
        return {
            label: t,
            enabled: !(!e || !t),
            onSelect: sm(),
            icon: yp.ONDEMAND
        }
    };

function Qp() {}
const em = () => {
    const e = Ip((e => e.events)),
        t = Ip((e => e.bigPicture)),
        n = Ip((e => e.embed.videoId)),
        i = Ip((e => e.embed.playerUrl)),
        o = Ip((e => e.performDelegateAction)),
        r = mv((e => e.embed.privacy)),
        a = mv((e => e.embed.videoUrl)),
        l = mv((e => e.user.watchLater)),
        s = mv((e => e.user.loggedIn)),
        c = mv((e => e.user.persistUserAction)),
        d = mv((e => e.embed.watchLater)),
        u = mv((e => e.user.watchLater)),
        _ = u ? "Remover de “Assistir Depois”" : "Adicionar a “Assistir depois”",
        p = s ? _ : "Adicionar ao “Assistir depois” (isso abre em uma nova janela)",
        m = u ? yp.CLOCK_FILLED : yp.CLOCK,
        v = `https://${i}/video/${n}/login/watch-later`,
        {
            openLoginPopup: f
        } = om({
            url: v,
            context: Rs.LOGIN_WATCH_LATER
        }),
        h = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            if (t.sendEvent(Ml.SELECT_PLAYER_ADD_TO_WATCH_LATER, {}, {
                    [Vl.WEB]: {
                        target: s ? null : "reg modal",
                        target_path: s ? null : v,
                        copy: "add to watch later"
                    },
                    [Vl.PRODUCT_ANALYTICS]: {
                        flow: s ? null : "open_embed_reg_modal",
                        element: "icon",
                        copy: "add to watch later"
                    }
                }), e.fire(oi), a || r === Ot) return function(e, t) {
                var n = function() {
                    if (!s) return function(e, t) {
                        return function(e, t, n) {
                            if (n) return t ? t(e()) : e();
                            try {
                                var i = Promise.resolve(e());
                                return t ? i.then(t) : i
                            } catch (ke) {
                                return Promise.reject(ke)
                            }
                        }(e, Qp, t)
                    }(f)
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                l ? o(Sd, (() => {
                    c(qp.WATCH_LATER, "DELETE"), e.fire(Ii)
                })) : o(Ad, (() => {
                    c(qp.WATCH_LATER, "PUT"), e.fire(Si)
                }))
            }))
        }));
    return {
        label: _,
        ariaLabel: p,
        enabled: d,
        onSelect: h,
        icon: m
    }
};
let tm = function(e) {
    return e.VOD = "vod", e.LIKE = "like", e.WATCH_LATER = "watch_later", e.COLLECTIONS = "collections", e.SHARE = "share", e.AI = "ai", e
}({});
const nm = () => ({
    [tm.VOD]: Jp(),
    [tm.LIKE]: jp(),
    [tm.WATCH_LATER]: em(),
    [tm.COLLECTIONS]: Ap(),
    [tm.SHARE]: Zp(),
    [tm.AI]: Lp()
});
let im = null;
const om = ({
    url: e,
    context: t,
    delegateArg: n
}) => {
    const i = Ip((e => e.events)),
        o = Ip((e => e.embed.onsite)),
        r = Ip((e => e.loadVideoViaIframe)),
        a = Ip((e => e.performDelegateAction));
    return {
        openLoginPopup: () => new Promise((l => {
            switch (t) {
                case Rs.PRIVATE_LOCKED:
                    a(Pd, (() => {
                        im = sr(e, "login", {
                            width: 670,
                            height: 545,
                            scrollbars: "yes",
                            resizable: "yes",
                            toolbar: "no"
                        })
                    }));
                    break;
                case Rs.LOGIN_LIKE:
                case Rs.LOGIN_WATCH_LATER:
                    a(Pd, (() => {
                        im = sr(e, "login", {
                            width: 670,
                            height: 545
                        })
                    })), i.fire(fi, t);
                    break;
                case Rs.PURCHASE:
                    a(Id, (() => {
                        im = sr(e, "purchase", {
                            width: 790,
                            height: 670
                        })
                    }), n), i.fire(fi, t)
            }
            window.confirmLoginAction = function(e, t) {
                i.fire(Oi, t), i.once(Pi, (() => l()))
            }, window.closePopup = function() {
                if (im) {
                    try {
                        im.close(), i.fire(Ei, t), i.once(Pi, (() => l()))
                    } catch (ke) {}
                    im = null
                }
            }, o || (window.confirmPurchase = function(e, t, n) {
                if (t) return r(e), void l();
                n && i.fire(Mn)
            })
        }))
    }
};

function rm(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function am(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}

function lm() {}
const sm = e => {
        const t = am((function() {
                return function() {
                    var e = function() {
                        if (!ps()) return function(e) {
                            if (e && e.then) return e.then(lm)
                        }(function(e, t) {
                            try {
                                var n = e()
                            } catch (ke) {
                                return t(ke)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return rm(m(l), (function() {
                                _("paused", !1)
                            }))
                        }), (function(e) {
                            rc.captureException(e), v("purpose", Sa.ERROR)
                        })));
                        p(l)
                    }();
                    if (e && e.then) return e.then(lm)
                }()
            })),
            n = Ip((e => e.events)),
            i = Ip((e => e.embed.videoId)),
            o = Ip((e => e.embed.referrer)),
            r = Ip((e => e.embed.playerUrl)),
            a = mv((e => e.vod.productId)),
            l = mv((e => e.vod.featureId)),
            s = mv((e => e.vod.isFeature)),
            c = mv((e => e.vod.purchased)),
            d = mv((e => e.vod.url)),
            u = mv((e => e.vod.isComingSoon)),
            _ = mv((e => e.setPlayback)),
            p = Ip((e => e.loadVideoViaIframe)),
            m = Ip((e => e.loadVideoViaConfig)),
            v = mv((e => e.setOverlay)),
            f = (() => {
                const e = vv().getState,
                    t = Ip((e => e.embed.onsite));
                return function(n) {
                    if (!n) return;
                    const i = n.indexOf("#") > -1,
                        o = e().playback.currentTime,
                        r = e().playback.duration,
                        a = e().playback.paused,
                        l = e().setPlayback;
                    !i && o > 0 && o < r - 30 && !a && (n += `#at=${Math.floor(o)}`), t ? window.location.href = n : (window.open(n), l("paused", !0))
                }
            })(),
            h = e || a;
        let E = `https://${r}/video/${l||i}/purchase/vod`;
        h && (E += `/${h}`), E += `?referrer=${encodeURIComponent(o||"")}`;
        const {
            openLoginPopup: g
        } = om({
            url: E,
            context: Rs.PURCHASE,
            delegateArg: [h]
        });
        return am((function() {
            return n.fire(li, h), c ? !s && l ? void t() : void _("paused", !1) : u ? void f(d) : (g(), rm())
        }))
    },
    cm = (e, t) => {
        const [n, i] = Pe(e), o = Re([e]), r = Re(null);
        return Oe((() => {
            t ? clearTimeout(r.current) : r.current = setTimeout((() => {
                o.current = [e], i(e)
            }), s_)
        }), [e, t]), {
            panel: n,
            setPanel: e => {
                e !== n && (o.current.push(e), i(e))
            },
            goToPreviousPanel: () => {
                if (o.current.length > 1) {
                    o.current.pop();
                    const e = o.current[o.current.length - 1];
                    i(e)
                }
            }
        }
    },
    dm = () => {
        const e = mv((e => e.embed.seekingForward)),
            t = mv((e => e.playback.maxPlayedTime));
        return n => e || t >= n
    },
    um = () => {
        const e = Re(!1),
            t = vv(),
            n = mv((e => e.element)),
            i = mv((e => e.setPlayback)),
            o = mv((e => e.seekingController)),
            r = Ip((e => e.bigPicture)),
            a = e => n.classList.toggle(qr.SCRUBBING, e);

        function l(e) {
            return o.canSeekNow || o.canSeekToTime(e)
        }

        function s(n) {
            e.current = !l(n), e.current || (i("scrubbing", !0), a(!0), (e => {
                const {
                    chapters: n,
                    embed: i,
                    playback: o
                } = t.getState(), {
                    chapters: a
                } = n;
                if (!a.length || !i.chapters) return;
                const l = ((e, t) => t.reduce(((t, n) => {
                    if (null === t) return n;
                    const i = n.startTime - e,
                        o = t.startTime - e;
                    return Math.abs(i) > Math.abs(o) ? t : n
                }), null))(e, a);
                if (!l) return;
                const s = l.startTime,
                    c = e - s,
                    d = Math.abs(c) <= 5,
                    u = Aa(a, o.currentFragment);
                r.sendEvent(Ml.CHAPTER_SEGMENT_CLICK, {
                    seek_event_start_time: e,
                    is_chapter_seek: d,
                    nearest_chapter_start_time: s,
                    chapter_seek_event_delta: c,
                    total_no_chapters_at_seek: a.length,
                    fragment_no_chapters_at_seek: u.length
                })
            })(n), i("currentTime", n))
        }
        return {
            startScrub: s,
            continueScrub: function(n) {
                l(n) && "expanding" !== t.getState().controlBar.expandedState && (e.current ? s(n) : i("currentTime", n))
            },
            endScrub: function() {
                e.current = !1, i("scrubbing", !1), a(!1),
                    function() {
                        const {
                            playback: e,
                            liveEvent: n
                        } = t.getState();
                        n.dvrEnabled && !n.isArchived && r.sendEvent(e.atLiveEdge ? Ml.SEEK_TO_LIVE_EDGE : Ml.SEEK_BEHIND_LIVE_EDGE)
                    }()
            }
        }
    },
    _m = (e, t) => {
        const n = mv((e => e.playback.currentFragment)),
            i = mv((e => e.playback.currentTime)),
            o = mv((e => e.playback.liveEdgeTime)),
            r = mv((e => e.playback.liveTailTime)),
            a = mv((e => e.playback.atLiveEdge)),
            l = mv((e => e.liveEvent.isLiveEvent)),
            s = mv((e => e.liveEvent.dvrEnabled)),
            c = mv((e => e.liveEvent.isPlayable)),
            d = mv((e => e.liveEvent.isArchived)),
            u = mv((e => e.liveEvent.isEnded)),
            _ = mv((e => e.playback.playInitiated)),
            p = u && !_ && 0 === i,
            m = d && 0 !== n.duration;
        return l && (s ? p : !d && !c) ? 0 : l && (s ? !p && !m && a : !d && c) ? 1 : !s || p || m || a ? ((e, t) => {
            const {
                startTime: n,
                endTime: i
            } = t;
            return e < n ? 0 : e > i ? 1 : (e - n) / (i - n)
        })(t, e) : La(t, r, o)
    };

function pm(e) {
    var t, i, a, l, s, c, d;
    const {
        config: u,
        events: _,
        parentUrl: p,
        backbone: m
    } = e, {
        embed: v,
        request: f,
        video: h
    } = u, E = !!v.autoplay, g = !(!v.autoplay || null == (t = f.flags) || !t.autohide_controls), b = !!v.settings.playbar, C = !!v.settings.like, T = !!v.settings.share, y = !(null == (i = v.settings.share) || !i.embed_only), L = !!v.settings.collections, A = !!v.settings.watch_later, S = !(null == (a = v.settings) || !a.watch_trailer || v.autoplay || !v.on_site), I = Bs(m, null == (l = h.live_event) ? void 0 : l.dvr), O = !!(v.settings.speed && I && j.settingPlaybackRate), P = !!v.keyboard, R = !!v.settings.logo, N = !!v.settings.volume, D = !!v.settings.fullscreen, w = !(null == (s = h.live_event) || null == (s = s.settings) || !s.hide_live_label), k = !(null == (c = h.live_event) || !c.show_viewer_count), M = !!v.settings.custom_logo, V = function(e) {
        var t;
        const {
            config: n
        } = e;
        let i = {
            customLogoUrl: null,
            customLogoImg: null,
            customLogoSticky: !1,
            customLogoWidth: null,
            customLogoHeight: null
        };
        if (null == (t = n.embed.settings.custom_logo) || !t.img) return i;
        const r = n.embed.settings.custom_logo;
        let a = r.img;
        return o.devicePixelRatio >= 2 && (a = a.replace(/(mw|mh)=(\d+)/g, (function(e, t, n) {
            return t + "=" + 2 * parseInt(n, 10)
        }))), i = {
            customLogoUrl: Al(r.url),
            customLogoImg: a,
            customLogoSticky: r.sticky,
            customLogoWidth: r.width,
            customLogoHeight: r.height
        }, i
    }(e), B = !!v.settings.background, x = 0 !== v.settings.controls, U = !!v.transparent, H = mm(e), F = !!v.settings.audio_tracks, G = !!v.settings.airplay, W = !!v.settings.chapters, Y = !!v.settings.chromecast, $ = !!v.settings.cc, K = !!v.settings.quality, q = v.settings.play_button_position, z = !!v.settings.watch_full_video, X = !!v.settings.ask_ai, Z = !!h.spatial && !!v.settings.spatial_compass, J = h.unlisted_hash, Q = !!u.embed.settings.badge, ee = v.tq || "", te = !!v.persistent_logo, ne = f.ai_widget_signature, ie = 0 !== v.unmute_button, oe = !!v.settings.pip, re = !!v.loop, ae = Cl(v.context), le = Boolean("public" === h.embed_permission && v.settings.embed), se = h.share_url, ce = `https://${u.player_url}/video/${h.id}/share`, de = h.embed_code, ue = h.url, _e = h.privacy, pe = 1 === (u.embed.dnt || (null == (d = u.request.flags) ? void 0 : d.dnt)), me = function(e) {
        return Object.keys(e).reduce(((t, n) => r(r({}, t), {}, {
            [n]: js(e[n])
        })), {})
    }(u.request.flags), ve = u.vimeo_api_url, fe = u.embed.cards, he = 0 !== u.embed.settings.skipping_forward, Ee = function(e, t, i, o) {
        const r = Pu(e, t, !1);
        return function(e, t, i, o = "") {
            const r = {
                p: Pl(t, "s")
            };
            return o && (r.pgroup = o), n(e, r)
        }(i, o, 0, "control" === r ? "nsc" : "variant" === r ? "nsv" : "")
    }(h.id, y, se, !v.on_site), ge = !!H || !!X;
    return ge && _.fire(Do), {
        autoPlay: E,
        autoHideControls: g,
        playbar: b,
        like: C,
        share: T,
        embedOnlyShare: y,
        collections: L,
        watchLater: A,
        isTrailer: S,
        speedChangeEnabled: O,
        keyboard: P,
        showVimeoLogo: R,
        volume: N,
        fullscreen: D,
        hideLiveLabel: w,
        showViewerCount: k,
        customLogo: M,
        customLogoFields: V,
        background: B,
        controls: x,
        transparent: U,
        transcript: H,
        rightContentAreaEnabled: ge,
        multipleAudioTracks: F,
        airplay: G,
        chapters: W,
        cc: $,
        chromecast: Y,
        quality: K,
        playButtonPosition: q,
        parentUrl: p,
        watchFullVideo: z,
        aiWidget: X,
        compass: Z,
        videoUnlistedHash: J,
        badge: Q,
        transcriptQuery: ee,
        persistentLogo: te,
        aiWidgetSignature: ne,
        unmuteButton: ie,
        pip: oe,
        loop: re,
        svvContext: ae,
        allowEmbedShare: le,
        shareUrl: se,
        embedCode: de,
        videoUrl: ue,
        playerShareUrl: ce,
        privacy: _e,
        doNotTrack: pe,
        flags: me,
        vimeoApiUrl: ve,
        cards: fe,
        seekingForward: he,
        shareUrlWithParams: Ee
    }
}

function mm(e) {
    const {
        embed: t,
        video: n
    } = e.config, i = n.live_event, o = !i || i.archive.status === wl.done || i.dvr;
    return !!t.settings.transcript && o
}
const vm = [{
        id: .5,
        label: "0.5x"
    }, {
        id: .75,
        label: "0.75x"
    }],
    fm = {
        id: 1,
        label: "Normal"
    },
    hm = [{
        id: 1.25,
        label: "1.25x"
    }, {
        id: 1.5,
        label: "1.5x"
    }, {
        id: 2,
        label: "2x"
    }],
    Em = [fm].concat(hm),
    gm = [].concat(vm, [fm], hm),
    bm = [].concat(vm, [fm]);

function Cm(e) {
    var t;
    const {
        config: n,
        backbone: i,
        seekingController: r
    } = e, a = Tm(e), l = !!o.airPlay, s = n.embed.quality ? fa(i.qualities, n.embed.quality) : i.qualities, c = ym(i.qualities, n.embed.quality), d = Am(n);
    return {
        playInitiated: !1,
        targetTimeReached: !1,
        scrubbing: !1,
        scrubbingByFrame: !1,
        paused: !n.embed.autoplay || (null == (t = n.video.live_event) || null == (t = t.archive) ? void 0 : t.status) === wl.done,
        buffering: !1,
        loadedTime: 0,
        currentTime: i.currentTime,
        maxPlayedTime: r.maxPlayedTime,
        liveEdgeTime: i.liveEdgeTime,
        atLiveEdge: i.atLiveEdge,
        liveTailTime: i.liveTailTime,
        hasFragments: d,
        currentFragment: e.fragmentsHandler.currentFragment,
        duration: n.video.duration,
        qualities: s,
        currentQuality: c,
        playbackRates: a,
        loadedMetadata: i.readyState >= 1,
        loadedData: i.readyState > 1,
        canPlayPictureInPicture: e.canPlayPictureInPicture,
        supportsAirPlay: l,
        supportsTextTracks: j.textTracks,
        supportsStereoscopic: Lm(e),
        isAdPlaying: !1,
        supportsSettingVolume: j.settingVolume,
        volume: i.volume,
        muted: i.muted || !!n.embed.muted,
        audioTracks: i.audioTracks,
        isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
        startTime: e.startTime,
        endTime: e.endTime,
        ended: i.ended,
        hasFirstTimeUpdate: !1,
        drm: !!n.request.drm
    }
}

function Tm(e) {
    var t;
    const {
        backbone: n,
        config: i
    } = e;
    let o = [];
    if (Bs(n, null == (t = i.video.live_event) ? void 0 : t.dvr) && j.settingPlaybackRate && i.embed.settings.speed) {
        const e = function(e, t) {
            return e ? Em : t ? bm : gm
        }(n.atLiveTail, n.atLiveEdge);
        o = fa(e, `${n.playbackRate}`)
    }
    return o
}

function ym(e, t) {
    var n;
    if (t) {
        var i;
        const n = "string" == typeof t ? t : t.quality || `${t.height}p`,
            o = null == e || null == (i = e.find((e => e.id === n))) ? void 0 : i.label;
        if (o) return o
    }
    return null == e || null == (n = e.find((e => e.active))) ? void 0 : n.label
}

function Lm(e) {
    const {
        config: t
    } = e;
    return "disable" !== t.video.privacy && (o.webvr || o.stereoscopic) && t.video.spatial && Iu(t, "webvr").group
}

function Am(e) {
    var t;
    return !c(null == (t = e.embed.interactive) ? void 0 : t.fragments)
}

function Sm(e) {
    const {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    } = e;
    return {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    }
}

function Im() {}

function Om({
    config: e,
    get: t
}) {
    const {
        user: n,
        video: i
    } = e, o = n.id, r = hu(i.owner), a = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (ke) {
                return Promise.reject(ke)
            }
        }
    }((function(n, i, o = null) {
        const r = t().user.vimeoApiClientToken,
            a = t().user.vimeoApiInteractionTokens,
            l = t().embed.videoUnlistedHash;
        return function(e) {
            if (e && e.then) return e.then(Im)
        }(function(s, c) {
            try {
                var d = function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(t().updatePhpTokens(), (function() {
                    const s = n === qp.FOLLOWING ? t().user.ownerId : e.video.id;
                    let c;
                    r && (n === qp.LIKES ? c = a.likes : n === qp.WATCH_LATER ? c = a.watch_later : n === qp.FOLLOWING && (c = a.following));
                    const d = `?auth=${c}`,
                        u = l && n !== qp.FOLLOWING ? `:${l}` : "",
                        _ = `https://${t().embed.vimeoApiUrl}/users/${t().user.id}/${n}/${s}${u}${d}`;
                    return function(e) {
                        return e && e.then ? e.then(Im) : Promise.resolve()
                    }((null != o ? o : y)(_, {
                        jwt: r,
                        method: i
                    }))
                }))
            } catch (ke) {
                return c(ke)
            }
            return d && d.then ? d.then(void 0, c) : d
        }(0, (function(e) {
            rc.captureException(e, {
                extra: {
                    action: n,
                    method: i
                }
            })
        })))
    }));
    return {
        id: o,
        liked: !!n.liked,
        loggedIn: n.logged_in,
        watchLater: !!n.watch_later,
        ownerName: i.owner.name,
        ownerId: i.owner.id,
        following: !!n.following,
        collected: !1,
        shared: !1,
        isPayingOwner: r,
        vimeoBucketedLiveClientToken: n.vimeo_bucketed_live_client_token,
        vimeoApiInteractionTokens: n.vimeo_api_interaction_tokens,
        vimeoApiClientToken: n.vimeo_api_client_token,
        persistUserAction: a
    }
}
const Pm = {
    isVOD: !1,
    vodButtonVisible: !1
};

function Rm(e) {
    const {
        video: t,
        embed: n,
        user: i,
        request: o
    } = e.config;
    let a = r({}, Pm);
    if (t.vod) {
        const e = !0,
            l = t.vod.is_coming_soon,
            s = "ondemand.main" === n.context || "Vimeo\\Controller\\OnDemandController.main" === n.context,
            c = t.vod && i.purchased,
            d = t.vod.countries,
            u = o.country,
            _ = t.vod.purchase_options || [];
        let p = n.settings.vod && _a(d, u);
        p && l && s && (p = !1);
        const [m] = _;
        let v = null;
        m && (v = Nm(o.dynamic_translation_map, "label_string", o.currency, m)), a.isVOD = e, a.vodLabel = v, a.purchased = !!c, a.productId = null == m ? void 0 : m.product_id, a.isExpiring = !(null == m || !m.expiring), a.isPreorder = void 0 !== t.vod.is_preorder ? !!t.vod.is_preorder : !!t.vod.date_available, a.isComingSoon = !!t.vod.is_coming_soon, a.vodButtonVisible = p, a.purchaseOptions = _.map((e => r(r({}, e), {}, {
            formattedLabel: Nm(o.dynamic_translation_map, "outro_string", o.currency, e)
        }))), a.title = t.vod.feature_title, a.url = t.vod.url, a.releaseDate = t.vod.date_available_formatted_datetime || t.vod.date_available, a.isFeature = !!t.vod.is_feature, a.featureId = t.vod.feature_id, a.isAvailableInCountry = !d || 0 === d.length || -1 !== d.indexOf(u)
    }
    return a
}

function Nm(e, t, n, i) {
    var o = i[t];
    return o ? (o = function(e, t, n) {
        let i = n.USD;
        return t in n && (i = n[t]), -1 !== e.indexOf("${price}") ? e.replace("${price}", i) : -1 !== e.indexOf("{PRICE}") ? e.replace("{PRICE}", i) : e
    }(o = function(e, t) {
        return void 0 !== e && void 0 !== e[t] ? e[t] : t
    }(e, o), n, i.prices), i.expires_in_duration_str && (o = o.replace("{TIME}", i.expires_in_duration_str)), i.available_on_formatted && (o = o.replace("{DATE}", i.available_on_formatted)), o) : null
}

function Dm({
    config: e
}) {
    const {
        badge: t
    } = e.embed.settings;
    let n = o.devicePixelRatio > 1 ? "img_2x" : "img";
    return o.svg && t.svg && (n = "svg"), {
        link: t.link,
        img: t[n],
        margin: t.margin || !1,
        width: t.width,
        height: t.height,
        name: t.name,
        shadow: !!t.shadow,
        id: t.id
    }
}

function wm(e) {
    const t = ml(Tt, e.config),
        n = ps() ? t : window.location.href;
    return {
        chapters: km(e),
        chapterShareBaseUrl: n,
        activeCueId: null
    }
}

function km(e) {
    const t = Array.from(e.backbone.chapters),
        n = e.config.embed.chapters || [];
    return t.map((e => {
        const t = n.find((t => t.timecode === e.startTime));
        return {
            cueId: e.id,
            startTime: e.startTime,
            endTime: e.endTime,
            text: e.text,
            chapterId: null == t ? void 0 : t.id,
            clipId: null == t ? void 0 : t.clip_id,
            timecode: null == t ? void 0 : t.timecode,
            title: null == t ? void 0 : t.title
        }
    }))
}
let Mm = function(e) {
    return e.RTL = "rtl", e.LTR = "ltr", e
}({});
const Vm = {
    black: "#000",
    red: "#f00",
    yellow: "#ff0",
    green: "#0f0",
    blue: "#00f",
    white: "#fff",
    cyan: "#0ff",
    magenta: "#f0f"
};

function Bm(e) {
    var t, n, i;
    const {
        backbone: o,
        config: a
    } = e, l = o.enabledTextTrack, s = o.textTracks, c = !!a.video.live_event, {
        textTracks: d,
        activeTextTrackId: u,
        language: _,
        direction: p,
        provenance: m
    } = xm(s, c, l), v = Um(e), f = (null == s || null == (t = s.filter((e => e.trackElement))) ? void 0 : t.map((e => e.trackElement))) || [], h = 1 === (null == a || null == (n = a.request) || null == (n = n.flags) ? void 0 : n.ott) || "dev" === (null == a || null == (i = a.request) || null == (i = i.build) ? void 0 : i.js) || "gedevplayer.vimeows.com" === (null == a ? void 0 : a.player_url), E = (s || []).reduce(((e, t) => t.rtl ? e.concat(t.id) : e), []);
    return r({
        textTracks: d,
        textTrackEls: f,
        activeTextTrackId: u,
        requiresCrossOrigin: h,
        activeCues: [],
        language: _,
        direction: p,
        rtlTracks: E,
        provenance: m
    }, v)
}

function xm(e, t, n) {
    const i = "off";
    let o = [],
        r = Fm(n);
    return null != e && e.length && (r || (r = i), o.push({
        label: "Desativar",
        id: i,
        active: r === i,
        provenance: null,
        language: i
    }), e.forEach((e => {
        let n = "CC" === e.label.substring(e.label.length - 2),
            i = "captions" !== e.kind || n ? "" : " CC",
            a = t ? "Exibir Legendas" : e.label + i;
        const l = Fm(e),
            s = {
                label: a,
                id: l,
                active: r === l,
                language: e.language,
                provenance: e.provenance
            };
        o.push(s)
    }))), {
        textTracks: o,
        activeTextTrackId: r,
        language: null == n ? void 0 : n.language,
        direction: Hm(n),
        provenance: null == n ? void 0 : n.provenance
    }
}

function Um(e) {
    const {
        store: t
    } = e, n = Object.keys(Wc()), i = {};
    return n.forEach((e => {
        const n = t.get(`ui.captions.${e}`);
        i[e] = n
    })), i
}

function Hm(e) {
    return e ? e.rtl ? Mm.RTL : Mm.LTR : null
}

function Fm(e) {
    return e ? "" !== e.id ? `${e.id}` : `${e.language}.${e.kind}` : ""
}

function Gm(e) {
    var t, n;
    const {
        config: i
    } = e, o = i.video.live_event, a = null == o ? void 0 : o.status, l = !!a, s = null == o || null == (t = o.archive) ? void 0 : t.status, c = Ym(a), d = Wm(s), u = c.isStarted && hs(o), _ = null == o || null == (n = o.ingest) ? void 0 : n.scheduled_start_time, p = null == o ? void 0 : o.settings.event_schedule;
    return r(r(r({
        isLiveEvent: l,
        isPlayable: u
    }, c), d), {}, {
        dvrEnabled: null == o ? void 0 : o.dvr,
        viewerCount: Qo(0),
        liveStatsRequestSucceeded: null,
        isOnline: null,
        liveEventSchedule: _,
        showEventSchedule: p
    })
}

function Wm(e) {
    return {
        isArchived: e === Cr
    }
}

function Ym(e) {
    return {
        isStarted: e === kl.started,
        isEnded: e === kl.ended,
        isPending: e === kl.pending,
        isActive: e === kl.active
    }
}

function $m(e, t) {
    let n;
    return function(i) {
        if (void 0 !== n) return n;
        if (t in window) return n = Promise.resolve(window[t]), n;
        const o = function(e) {
            switch (e.player_url) {
                case "player.vimeo.com":
                    return Or;
                case "master.playerci.vimeows.com":
                case "player-backend-ci.vimeows.com":
                    return "CI";
                case "player2.vimeo.dev":
                    return "DEV";
                default:
                    return
            }
        }(i) === Or ? "https://embedder-sdk.wirewax.com" : "https://embedder-sdk.wirewax.tv";
        return n = Be(`${o}/${e}`, !0).then((() => window[t])), n
    }
}
const Km = $m("latest/wirewax-embedder-sdk@beta.umd.js", "WIREWAX"),
    qm = $m("latest-create/create-interactive-plugin@beta.umd.js", "CREATE_INTERACTIVE_PLUGIN");

function zm() {}

function jm(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}

function Xm(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Zm(e, t) {
    const n = jm((function() {
            return function(n, a) {
                try {
                    var m = function() {
                        u("loading");
                        const n = function(e) {
                            const {
                                interactive_id: t,
                                interactive_params: n,
                                create_interactive: i
                            } = e.config.embed;
                            return i.has_create_interactive ? {
                                vidDataURL: i.viddata_url,
                                metricsClient: new nc(e)
                            } : {
                                vidId: t,
                                interactiveParams: n
                            }
                        }(e);
                        return Xm(function(e) {
                            return e.embed.create_interactive.has_create_interactive ? qm(e) : Km(e)
                        }(i), (function(e) {
                            const a = e;
                            if (u("loaded"), !l) return s = a(t, n), Xm(s.ready(), (function() {
                                if (u("initialized"), l) return u("destroyed"), void s.destroy();
                                const e = s.getInteractiveData("hotspots"),
                                    t = s.getInteractiveData("polls");
                                o().setInteractive("hotspots", e), o().setInteractive("polls", t), d = function(e) {
                                    const t = () => o().backbone.play(),
                                        n = () => o().backbone.pause(),
                                        i = e => r.fire(So, e),
                                        a = e => r.fire(Io, e),
                                        l = ({
                                            seekTo: e,
                                            seekType: t
                                        }) => {
                                            r.fire(Po, {
                                                type: t
                                            }), o().seekingController.maxPlayedTime = e, o().backbone.currentTime = e
                                        },
                                        s = e => {
                                            e.overlayOnDisplay ? (r.fire(di, Sa.INTERACTIVE), o().setInteractive("active", !0)) : (r.fire(ui, Sa.INTERACTIVE), o().setInteractive("active", !1))
                                        };
                                    return e.on("play", t), e.on("pause", n), e.on("hotspotClick", i), e.on("overlayPanelClick", a), e.on("seeked", l), e.on("toggleOverlay", s), () => {
                                        e.off("play", t), e.off("pause", n), e.off("hotspotClick", i), e.off("overlayPanelClick", a), e.off("seeked", l), e.off("toggleOverlay", s)
                                    }
                                }(s), c = function(e) {
                                    function t() {
                                        _(e), e.play()
                                    }

                                    function n() {
                                        p(), e.pause()
                                    }

                                    function i() {
                                        e.setCurrentTime(o().playback.currentTime)
                                    }

                                    function a() {
                                        e.setEnded(!0), e.setCurrentTime(o().backbone.duration)
                                    }

                                    function l() {
                                        u("destroyed"), e.destroy(), s()
                                    }

                                    function s() {
                                        p(), r.off(g.PLAY, t), r.off(g.PAUSE, n), r.off(g.SEEKED, i), r.off(g.ENDED, a)
                                    }
                                    return r.on(g.PLAY, t), r.on(g.PAUSE, n), r.on(g.SEEKED, i), r.on(g.ENDED, a), r.once(In, t), l
                                }(s), i.embed.autoplay && (_(s), s.play())
                            }));
                            u("destroyed")
                        }))
                    }()
                } catch (ke) {
                    return a()
                }
                return m && m.then ? m.then(void 0, a) : m
            }(0, (function(e) {
                u("error")
            }))
        })),
        {
            config: i,
            get: o,
            events: r
        } = e;
    let a, l = !1,
        s = null,
        c = null,
        d = null;
    return {
        load: jm((function() {
            if (!l) return function(e, t) {
                return function(e, t, n) {
                    if (n) return t ? t(e()) : e();
                    try {
                        var i = Promise.resolve(e());
                        return t ? i.then(t) : i
                    } catch (ke) {
                        return Promise.reject(ke)
                    }
                }(e, zm, t)
            }(n)
        })),
        destroy() {
            l = !0, null == d || d(), null == c || c()
        }
    };

    function u(e) {
        o().setInteractive("embedderStateHistory", o().interactive.embedderStateHistory.concat(e))
    }

    function _(e) {
        cancelAnimationFrame(a), a = requestAnimationFrame((() => {
            e.setCurrentTime(o().backbone.currentTime), _(e)
        }))
    }

    function p() {
        cancelAnimationFrame(a)
    }
}

function Jm() {}
const Qm = e => {
    const t = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            return function() {
                var t = function() {
                    if (function() {
                            var e, t, n;
                            return !(null != (e = i()) && null != (e = e.interactive) && e.destroyed) && (null == (t = i()) || null == (t = t.interactive) ? void 0 : t.enabled) && !(null == (n = i().interactive) || !n.instanceId) && !o.browser.ie
                        }()) {
                        const t = Zm(e, i().interactive.instanceId);
                        return c("embedderManager", t),
                            function(e, t) {
                                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                            }(t.load(), (function() {
                                c("ready", !0)
                            }))
                    }
                }();
                if (t && t.then) return t.then(Jm)
            }()
        })),
        {
            set: n,
            get: i,
            events: a,
            subscribe: l
        } = e,
        s = ev(e),
        c = (e, t) => {
            n((n => ({
                interactive: r(r({}, n.interactive), {}, {
                    [e]: t
                })
            })))
        },
        d = () => {
            u(), n((() => ({
                interactive: ev(e)
            })))
        };

    function u() {
        var e;
        c("destroyed", !0);
        const t = null == (e = i().interactive) ? void 0 : e.embedderManager;
        t && (t.destroy(), c("embedderManager", null), c("instanceId", null))
    }
    return a.on(Di, (e => {
        e && d()
    })), a.on(Fi, d), a.on(sn, u), l((e => {
        var t;
        return null == e || null == (t = e.interactive) ? void 0 : t.instanceId
    }), t), {
        interactive: s,
        setInteractive: c
    }
};

function ev({
    config: e
}) {
    const {
        interactive: t
    } = e.embed, n = !(null == t || !t.markers);
    return {
        hotspots: [],
        polls: [],
        enabled: tv(e.embed),
        showMarkers: n,
        instanceId: null,
        active: !1,
        embedderManager: null,
        ready: !1,
        destroyed: !1,
        embedderStateHistory: []
    }
}

function tv(e) {
    return !!e.interactive_id || !!e.create_interactive && (1 === e.create_interactive.has_create_interactive || !0 === e.create_interactive.has_create_interactive)
}
let nv = function(e) {
    return e.EMPTY = "empty", e.QOE_SURVEY = "qoe_survey", e.SKIP_TO_LIVE = "skip_to_live", e.BROADCAST_OVER = "broadcast_over", e.FRAME_CAPTURED = "frame_captured", e
}({});
const iv = [nv.QOE_SURVEY, nv.BROADCAST_OVER, nv.FRAME_CAPTURED, nv.SKIP_TO_LIVE];

function ov(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const rv = lv((function(e, t) {
        var n;
        const {
            width: i,
            height: r
        } = t().appearance.boundingClientRect;
        let a = Object.assign({}, e);
        if (null != e && e.img_base && (a.imageUrl = function(e, t, n) {
                const {
                    width: i,
                    height: r
                } = Fp(t * o.devicePixelRatio, n * o.devicePixelRatio);
                return Gp({
                    baseUrl: e,
                    width: i,
                    height: r
                })
            }(e.img_base, i, r)), (null == a || null == (n = a.videos) ? void 0 : n.length) > 0) {
            const e = t().user.ownerId,
                n = t().user.ownerName,
                o = Math.round(i / a.videos.length),
                l = Math.round(r / a.videos.length);
            a.videos = a.videos.map(function(e, t, n, i) {
                return o => {
                    const {
                        owner: r
                    } = o, a = Object.assign({}, o);
                    return r.id !== e && (a.byline = "de " + t), o.thumbnail_base && (a.thumbnail = Gp({
                        baseUrl: o.thumbnail_base,
                        width: n,
                        height: i
                    })), a
                }
            }(e, n, o, l))
        }
        return a
    })),
    av = function(e, t) {
        return ov(rv(e, t), (function(e) {
            return null != e && e.url && (e.url = Al(e.url)), null != e && e.url2 && (e.url2 = Al(e.url2)), e
        }))
    };

function lv(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}

function sv() {}
const cv = e => {
    const {
        set: t,
        get: i,
        events: o,
        subscribe: a,
        config: l
    } = e, s = (e, n) => {
        t((t => ({
            outro: r(r({}, t.outro), {}, {
                [e]: n
            })
        })))
    };
    o.on(Di, ((e, n) => {
        n.embed.outro !== i().outro.purpose && t((e => ({
            outro: r(r({}, e.outro), {}, {
                outroData: null,
                fetchingOutroData: !1,
                purpose: n.embed.outro
            })
        })))
    })), o.on(jt, lv((function(e, t) {
        let n = !1;
        s("purpose", e);
        const o = !(null == t || !t.data);
        return function(r, a) {
            var l = function() {
                if (o) return ov(av(t.data, i), (function(t) {
                    s("outroData", t), p(e, t), n = !0
                }))
            }();
            return l && l.then ? l.then(a) : a(l)
        }(0, (function(t) {
            if (n) return t;
            e === i().outro.purpose && i().outro.outroData || _(e)
        }))
    }))), a((e => {
        var t;
        return null == e || null == (t = e.displayList) ? void 0 : t.outro
    }), d), a((e => {
        var t;
        return null == e || null == (t = e.displayList) ? void 0 : t.overlay
    }), d), a((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.currentTime
    }), u), a((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.ended
    }), u), a((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.ended
    }), (function(e) {
        e && i().outro.purpose === b_.BEGINNING && o.fire(kt)
    }));
    const c = function({
        config: e
    }) {
        let {
            outro: t
        } = e.embed;
        return t !== b_.THREEVIDEOS && t !== b_.PROMOTED || (t = b_.VIDEOS), {
            purpose: t,
            active: !1,
            outroData: null,
            fetchingOutroData: !1
        }
    }(e);

    function d() {
        const e = i().displayList.outro && !i().displayList.overlay;
        e !== i().outro.active && s("active", e)
    }

    function u() {
        const e = i().outro.fetchingOutroData,
            t = i().playback.currentTime >= (i().playback.isSegmentedPlaybackEnabled ? i().playback.endTime - i().playback.startTime : i().playback.duration) - 10,
            n = null !== i().outro.outroData,
            o = i().embed.background;
        e || !t || n || o || _(i().outro.purpose)
    }

    function _(e) {
        const t = lv((function() {
            return function(e) {
                if (e && e.then) return e.then(sv)
            }(function(t, n) {
                try {
                    var r = function(e, t) {
                        try {
                            var n = e()
                        } catch (ke) {
                            return t(ke)
                        }
                        return n && n.then ? n.then(void 0, t) : n
                    }((function() {
                        return s("fetchingOutroData", !0), ov(y(m, {
                            withCredentials: !0,
                            retry: 3
                        }), (function(t) {
                            return ov(t.json(), (function(t) {
                                return ov(av(t.data, i), (function(t) {
                                    return ov(function(e) {
                                        const t = function(e) {
                                            var t;
                                            let n = [];
                                            return null != e && e.imageUrl && n.push(e.imageUrl), (null == e || null == (t = e.videos) ? void 0 : t.length) > 0 && n.concat(e.videos.map((e => e.thumbnail))), n
                                        }(e);
                                        return Promise.all(t.map((e => Wp(e))))
                                    }(t), (function() {
                                        o.fire(qo, t), s("outroData", t), p(e, t)
                                    }))
                                }))
                            }))
                        }))
                    }), (function(e) {}))
                } catch (ke) {
                    return n(!0, ke)
                }
                return r && r.then ? r.then(n.bind(null, !1), n.bind(null, !0)) : n(!1, r)
            }(0, (function(e, t) {
                return s("fetchingOutroData", !1),
                    function(e, t) {
                        if (e) throw t;
                        return t
                    }(e, t)
            })))
        }));
        if (i().outro.fetchingOutroData) return;
        const {
            player_url: r
        } = l, {
            id: a,
            unlisted_hash: c
        } = l.video, {
            on_site: d
        } = l.embed, u = `https://${r}/video/${a}/outro`, _ = {
            on_site: d ? 1 : 0,
            type: e
        };
        c && (_.h = c);
        const m = n(u, _);
        t()
    }

    function p(e, t) {
        var n;
        [b_.VIDEOS, b_.THREEVIDEOS].includes(e) && t.following && (null == (n = i()) || n.setUser("following", !!t.following))
    }
    return {
        outro: c,
        setOutro: s
    }
};
let dv = function(e) {
    return e.LikedAdded = "liked-added", e.LikeRemoved = "like-removed", e.WatchLaterAdded = "watch-later-added", e.WatchLaterRemoved = "watch-later-removed", e
}({});

function uv(e) {
    const {
        config: t
    } = e;
    return {
        supportsChromecast: Rl(t),
        isChromecastConnected: !1,
        isChromecastPlaying: !1,
        isChromecastBuffering: !1,
        isChromecastReady: _v(),
        receiverFriendlyName: null
    }
}

function _v() {
    return td.castState !== Wa.NOT_SETUP && td.castState !== Wa.NO_DEVICES_AVAILABLE
}
const {
    Provider: pv,
    useStore: mv,
    useStoreApi: vv
} = De(), fv = ({
    player: e,
    children: t
}) => {
    const [n, i] = Pe(!1);
    return X_((() => i(!0)), e), n ? ke(pv, {
        createStore: () => Me(xe(((t, n, {
            subscribe: i
        }) => {
            const a = r(r({
                    set: t,
                    get: n,
                    subscribe: i
                }, e), {}, {
                    get backbone() {
                        return e.backbone
                    },
                    get displayContext() {
                        return e.displayContext
                    },
                    get config() {
                        return e.config
                    },
                    get fragmentsHandler() {
                        return e.fragmentsHandler
                    },
                    get startTime() {
                        return e.startTime
                    },
                    set startTime(t) {
                        e.startTime = t
                    },
                    get endTime() {
                        return e.endTime
                    },
                    set endTime(t) {
                        e.endTime = t
                    },
                    get segmentedPlaybackEnabled() {
                        return e.segmentedPlaybackEnabled
                    },
                    get canPlayPictureInPicture() {
                        return e.canPlayPictureInPicture
                    },
                    get parentUrl() {
                        return e.parentUrl
                    },
                    set parentUrl(t) {
                        e.parentUrl = t
                    },
                    get seekingController() {
                        return e.seekingController
                    },
                    get bigPicture() {
                        return e.bigPicture
                    }
                }),
                {
                    config: s,
                    backbone: c,
                    element: d,
                    expose: u,
                    verifyConfig: _,
                    events: p,
                    updatePhpTokens: m,
                    seekingController: v,
                    bigPicture: f
                } = e,
                h = r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r({}, (e => {
                    const {
                        set: t,
                        events: n
                    } = e, i = e_(e);
                    return n.on(bi, (() => {
                        t((() => ({
                            debug: e_(e)
                        })))
                    })), {
                        debug: i
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o
                    } = e, a = d_(e), l = (e, n) => {
                        t((t => ({
                            controlBar: r(r({}, t.controlBar), {}, {
                                [e]: n
                            })
                        })))
                    };

                    function s() {
                        const e = zs(qs.FULL_CONTROLS, n().appearance.playerSizeMode, n().appearance.playerBreakpoint);
                        l("showAllControls", e)
                    }
                    return i.on(Di, (() => {
                        t((() => ({
                            controlBar: d_(e)
                        })))
                    })), i.on(Jt, (e => {
                        l("overrideBehavior", e)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                    }), s), o((e => {
                        var t;
                        return null == e || null == (t = e.appearance) ? void 0 : t.playerBreakpoint
                    }), s), o((e => {
                        var t;
                        return null == e || null == (t = e.controlBar) ? void 0 : t.expandedState
                    }), (e => l("isExpanded", "expanded" === e || "expanding" === e))), {
                        controlBar: a,
                        setControlBar: l
                    }
                })(a)), q_(a)), (e => {
                    const {
                        store: t,
                        set: n,
                        events: i,
                        element: o,
                        backbone: a,
                        config: l
                    } = e, s = z_(e), c = (e, t) => n((n => ({
                        appearance: r(r({}, n.appearance), {}, {
                            [e]: t
                        })
                    })));
                    return t.watch("ui.player.breakpoint", (e => c("playerBreakpoint", e))), t.watch("ui.player.mode", (e => c("playerSizeMode", e))), t.watch("ui.app.breakpoint", (e => c("appBreakpoint", e))), t.watch("ui.app.mode", (e => c("appSizeMode", e))), t.watch("ui.controlbar.isMenuFullWidth", (e => c("isMenuBlockingUI", e))), t.watch("ui.player.isVerticalVideo", (e => {
                        c("isVerticalVideo", e)
                    })), t.watch("ui.controlbar.isMenuVerticalVideoMode", (e => c("isMenuVerticalVideoMode", e))), t.watch("ui.player.width", (() => {
                        c("boundingClientRect", or(o))
                    })), t.watch("ui.controlbar.doMenuItemsWrap", (e => {
                        c("shouldMenuItemsWrap", e)
                    })), t.watch("ui.player.width", (e => {
                        const {
                            videoHeight: i,
                            videoWidth: o
                        } = j_(e, t.get("ui.player.height"), l.video.width, l.video.height);
                        n((t => ({
                            appearance: r(r({}, t.appearance), {}, {
                                videoHeight: i,
                                videoWidth: o,
                                playerWidth: e
                            })
                        })))
                    })), t.watch("ui.player.height", (e => {
                        const {
                            videoHeight: i,
                            videoWidth: o
                        } = j_(t.get("ui.player.width"), e, l.video.width, l.video.height);
                        n((t => ({
                            appearance: r(r({}, t.appearance), {}, {
                                videoHeight: i,
                                videoWidth: o,
                                playerHeight: e
                            })
                        })))
                    })), t.watch("ui.container.height", (e => {
                        c("containerHeight", e)
                    })), t.watch("ui.container.width", (e => {
                        c("containerWidth", e)
                    })), i.on(Qn, (() => c("fullscreen", !0))), i.on(ni, (e => {
                        n((t => {
                            const n = {
                                fullscreen: !1,
                                forceExitedFullscreen: t.appearance.forceExitedFullscreen
                            };
                            return e || (n.forceExitedFullscreen = !0), {
                                appearance: r(r({}, t.appearance), n)
                            }
                        }))
                    })), i.on(g.WEBKIT_END_FULLSCREEN, (() => {
                        c("fullscreen", !1)
                    })), i.on(po, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                showAirPlayPicker: !0
                            })
                        })))
                    })), i.on(mo, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                showAirPlayPicker: !1
                            })
                        })))
                    })), i.on(kt, (() => {
                        n((() => ({
                            appearance: z_(e)
                        })))
                    })), i.on(po, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                externalDisplay: !0
                            })
                        })))
                    })), i.on(mo, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                externalDisplay: !1
                            })
                        })))
                    })), i.on(g.ENTER_PICTURE_IN_PICTURE, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                pictureInPictureActive: !0
                            })
                        })))
                    })), i.on(g.LEAVE_PICTURE_IN_PICTURE, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                pictureInPictureActive: !1
                            })
                        })))
                    })), i.on(z.WEBVR_ENTER, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                stereoscopicEnabled: !0
                            })
                        })))
                    })), i.on(z.WEBVR_EXIT, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                stereoscopicEnabled: !1
                            })
                        })))
                    })), i.on(g.LOADED_DATA, (() => {
                        n((t => ({
                            appearance: r(r({}, t.appearance), {}, {
                                isStartTimeThumbLoading: hc(e)
                            })
                        })))
                    })), {
                        appearance: s,
                        setAppearance: (e, t) => {
                            "fullscreen" !== e ? "pictureInPictureActive" !== e ? "showAirPlayPicker" !== e ? ("stereoscopicEnabled" === e && i.fire(Xn), "transcriptNavActive" === e && "boolean" == typeof t && i.fire(ko, t), c(e, t)) : i.fire(vo) : i.fire(a.pictureInPictureActive ? en : Qt) : i.fire(wn)
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i,
                        get: o
                    } = e, a = pm(e);
                    return n.on(Di, (() => {
                        t((() => ({
                            embed: pm(e)
                        })))
                    })), n.on(Uo, (function(e) {
                        e && t((t => ({
                            embed: r(r({}, t.embed), {}, {
                                parentUrl: e
                            })
                        })))
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isArchived
                    }), (i => {
                        var a;
                        const l = mm(e),
                            s = null == (a = o()) || null == (a = a.embed) ? void 0 : a.transcript;
                        i && l && !s && (n.fire(Do), t((e => ({
                            embed: r(r({}, e.embed), {}, {
                                rightContentAreaEnabled: !0,
                                transcript: !0
                            })
                        }))))
                    })), {
                        embed: a
                    }
                })(a)), a_(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = () => {
                        clearTimeout(c_), c_ = setTimeout((() => {
                            n((e => ({
                                displayList: r(r({}, e.displayList), {}, {
                                    nudgeNotification: !1
                                })
                            }))), t.fire(Nn)
                        }), 1050)
                    }, o = e => {
                        i(), n((t => ({
                            displayList: r(r({}, t.displayList), {}, {
                                nudgeNotification: !0
                            }),
                            nudge: e
                        })))
                    };
                    return t.on(Rn, (({
                        direction: e,
                        time: t
                    }) => {
                        o({
                            direction: e,
                            time: t
                        })
                    })), {
                        nudge: {
                            direction: null,
                            time: null
                        },
                        setNudge: (e, t) => {
                            i(), n((n => ({
                                nudge: r(r({}, n.nudge), {}, {
                                    [e]: t
                                })
                            })))
                        },
                        setNudgeProperties: o,
                        startNudgeHideTimeout: i
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n,
                        get: i,
                        backbone: o,
                        subscribe: a,
                        seekingController: l,
                        bigPicture: s
                    } = e, c = (e, t) => {
                        n((n => ({
                            playback: r(r({}, n.playback), {}, {
                                [e]: t
                            })
                        })))
                    }, d = Cm(e);
                    return t.on(kt, (() => {
                        n((() => ({
                            playback: Cm(e)
                        })))
                    })), t.on(Di, (t => {
                        t && n((() => ({
                            playback: Cm(e)
                        })))
                    })), t.on(A, (() => c("playInitiated", !0))), t.once(In, (() => c("hasFirstTimeUpdate", !0))), t.on(g.PLAY, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                scrubbing: !1,
                                scrubbingByFrame: !1,
                                paused: !1,
                                playInitiated: !0,
                                ended: !1
                            })
                        })))
                    })), t.on(Mn, (() => c("paused", !1))), t.on([g.PAUSE, gn, kn], (() => c("paused", !0))), t.on(Sn, (() => c("targetTimeReached", !0))), t.on(C.BUFFER_STARTED, (() => c("buffering", !0))), t.on(C.BUFFER_ENDED, (() => c("buffering", !1))), t.on(Fn, (e => {
                        c("scrubbing", !0), "keyboard" === (null == e ? void 0 : e.seekType) && null != e && e.isFrameByFrame && c("scrubbingByFrame", !0)
                    })), t.on(Gn, (() => {
                        c("scrubbing", !1), c("scrubbingByFrame", !1)
                    })), t.on(on, (e => {
                        n((t => {
                            const n = t.liveEvent.dvrEnabled ? t.playback.liveTailTime : 0,
                                i = t.liveEvent.dvrEnabled ? t.playback.liveEdgeTime : t.playback.duration,
                                o = lr(e, n, i);
                            return {
                                playback: r(r({}, t.playback), {}, {
                                    currentTime: o
                                })
                            }
                        }))
                    })), t.on(g.TIME_UPDATE, (({
                        currentTime: t,
                        timeProgress: i,
                        liveEdgeTime: o,
                        atLiveEdge: a,
                        liveTailTime: s,
                        atLiveTail: c
                    }) => {
                        n((n => {
                            const d = Math.min(_r(100 * i), 100);
                            t = t || n.playback.duration * d || 0;
                            const u = Tm(e),
                                _ = l.maxPlayedTime;
                            return {
                                playback: r(r({}, n.playback), {}, {
                                    currentTime: t,
                                    liveEdgeTime: o,
                                    atLiveEdge: a,
                                    liveTailTime: s,
                                    atLiveTail: c,
                                    playbackRates: u,
                                    maxPlayedTime: _
                                })
                            }
                        }))
                    })), t.on(Tn, (() => {
                        const e = i().liveEvent.dvrEnabled && !i().playback.atLiveEdge,
                            t = i().liveEvent.dvrEnabled && i().playback.atLiveEdge;
                        e || n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                ended: !0,
                                currentTime: t ? 0 : e.playback.currentFragment.duration
                            })
                        })))
                    })), t.on(g.PROGRESS, (({
                        loaded: e
                    }) => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                loadedTime: e
                            })
                        })))
                    })), t.on([Dn, g.DURATION_CHANGE], (() => {
                        const t = i().playback.currentFragment;
                        if (!Ve(t, e.fragmentsHandler.currentFragment)) {
                            const t = Am(e.config);
                            n((n => ({
                                playback: r(r({}, n.playback), {}, {
                                    hasFragments: t,
                                    currentFragment: e.fragmentsHandler.currentFragment,
                                    maxPlayedTime: l.maxPlayedTime
                                })
                            })))
                        }
                    })), t.on(g.LOADED_METADATA, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                loadedMetadata: !0
                            })
                        })))
                    })), t.on(g.LOADED_DATA, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                loadedData: !0
                            })
                        })))
                    })), t.on([C.STREAM_CHANGE, F], (e => {
                        const t = {
                            currentQuality: ym(o.qualities, e)
                        };
                        i().liveEvent.isLiveEvent && Object.assign(t, {
                            qualities: o.qualities
                        }), n((e => ({
                            playback: r(r({}, e.playback), t)
                        })))
                    })), t.on(An, (e => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                qualities: o.qualities,
                                currentQuality: ym(o.qualities, e)
                            })
                        })))
                    })), t.on(C.AUDIO_TRACK_CHANGED, (() => c("audioTracks", o.audioTracks))), t.once(V, (() => c("canPlayPictureInPicture", e.canPlayPictureInPicture))), t.on(uo, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                supportsAirPlay: !0
                            })
                        })))
                    })), t.on(_o, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                supportsAirPlay: !1
                            })
                        })))
                    })), t.on(On, (() => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                playbackRates: Tm(e)
                            })
                        })))
                    })), t.on(yn, (e => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                volume: e,
                                muted: o.muted
                            })
                        })))
                    })), t.on(Ln, (e => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                muted: e
                            })
                        })))
                    })), t.on(C.AVAILABLE_STREAMS_CHANGED, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                qualities: o.qualities,
                                currentQuality: ym(o.qualities)
                            })
                        })))
                    })), t.on([Eo, bo, ho, go, yo, Lo], (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                isAdPlaying: !1
                            })
                        })))
                    })), t.on([To, Co], (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                isAdPlaying: !0
                            })
                        })))
                    })), t.on([Fo, Go], (() => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
                                startTime: e.startTime,
                                endTime: e.endTime
                            })
                        })))
                    })), t.on(K.LATENCY_UPDATED, (function() {
                        n((e => e.playback.paused || e.playback.buffering ? e.playback.scrubbing ? o_ : {
                            playback: r(r({}, e.playback), Sm(o))
                        } : o_))
                    })), t.on(C.SCANNER_CHANGE, (function() {
                        n((e => ({
                            playback: r(r({}, e.playback), Sm(o))
                        })))
                    })), a((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                    }), (e => !e && i().liveEvent.dvrEnabled && !i().liveEvent.isArchived && s.sendEvent(Ml.DVR_MODE_ENTERED))), a((e => {
                        var t;
                        return null == e || null == (t = e.embed) ? void 0 : t.pip
                    }), (() => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                canPlayPictureInPicture: e.canPlayPictureInPicture
                            })
                        })))
                    })), {
                        playback: d,
                        clearSegment: () => {
                            e.startTime = null, e.endTime = null
                        },
                        setPlayback: (e, a, l) => {
                            if ("paused" !== e) {
                                if ("qualities" === e && "string" == typeof a) return t.fire(Vt, a), void n((e => {
                                    const t = fa(e.playback.qualities, a);
                                    return {
                                        playback: r(r({}, e.playback), {}, {
                                            qualities: t,
                                            currentQuality: ym(t)
                                        })
                                    }
                                }));
                                if ("playbackRates" === e && "string" == typeof a) return t.fire(ln, a), void n((e => {
                                    const t = fa(e.playback.playbackRates, a);
                                    return {
                                        playback: r(r({}, e.playback), {}, {
                                            playbackRates: t
                                        })
                                    }
                                }));
                                if ("scrubbing" !== e)
                                    if ("currentTime" !== e || "number" != typeof a)
                                        if ("volume" !== e || "number" != typeof a)
                                            if ("muted" !== e || "boolean" != typeof a)
                                                if ("audioTracks" !== e) c(e, a);
                                                else {
                                                    const e = o.audioTracks.find((e => e.id === `${a}`));
                                                    e && (o.enableAudioTrack(e), t.fire(cn, e))
                                                }
                                else t.fire(Dt, a);
                                else t.fire(Nt, a);
                                else switch (null == l ? void 0 : l.seekType) {
                                    case "interactive-marker":
                                        t.fire(Rt, a), t.fire(Mn), t.fire(Oo, {
                                            type: "interactive-marker",
                                            action: null == l ? void 0 : l.action
                                        });
                                        break;
                                    case "nudge":
                                        t.fire(Pn), t.fire(Rt, a), i().playback.playInitiated || t.fire(Mn);
                                        break;
                                    default:
                                        t.fire(Rt, a)
                                } else a ? t.fire(Fn) : t.fire(Gn)
                            } else !1 === a ? t.fire(Mn) : t.fire(kn)
                        }
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = (e, t) => {
                        n((n => ({
                            user: r(r({}, n.user), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return t.on(Li, (() => i("liked", !0))), t.on(Ai, (() => i("liked", !1))), t.on(Si, (() => i("watchLater", !0))), t.on(Ii, (() => i("watchLater", !1))), t.on(Di, ((e, t) => {
                        n((() => ({
                            user: Om({
                                config: t
                            })
                        })))
                    })), t.on(Pi, (() => {
                        n((() => ({
                            user: Om(e)
                        })))
                    })), t.on(Ji, (() => i("following", !1))), t.on(Zi, (() => i("following", !0))), {
                        user: Om(e),
                        setUser: (n, o) => {
                            if ("collected" !== n)
                                if ("shared" !== n) i(n, o);
                                else {
                                    const {
                                        share: n
                                    } = e.config.embed.settings, i = null != n && n.embed_only ? ai : ri;
                                    t.fire(i)
                                }
                            else t.fire(si)
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o
                    } = e, a = Rm(e);

                    function l(e) {
                        e && n().vod.vodButtonVisible ? t((e => ({
                            vod: r(r({}, e.vod), {}, {
                                vodButtonVisible: !1
                            })
                        }))) : e || !n().vod.isVOD || n().vod.vodButtonVisible || t((e => ({
                            vod: r(r({}, e.vod), {}, {
                                vodButtonVisible: !0
                            })
                        })))
                    }
                    return o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                    }), (e => {
                        l(e)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.ad
                    }), (e => l(e))), i.on(Di, ((n, i) => {
                        t((() => ({
                            vod: Rm(r(r({}, e), {}, {
                                config: i
                            }))
                        })))
                    })), {
                        vod: a,
                        setVod: (e, n) => {
                            t((t => ({
                                vod: r(r({}, t.vod), {}, {
                                    [e]: n
                                })
                            })))
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i
                    } = e, a = T_(e);
                    let l = null;
                    const s = (e, i) => {
                        if ("purpose" !== e) t((t => ({
                            overlay: r(r({}, t.overlay), {}, {
                                [e]: i
                            })
                        })));
                        else {
                            const e = n().overlay.purpose === i ? Sa.EMPTY : i;
                            t((t => ({
                                overlay: r(r({}, t.overlay), {}, {
                                    purpose: e
                                })
                            })))
                        }
                    };
                    return i.on(di, ((e, t) => {
                        t || (n().overlay.purpose === e ? i.fire(ui) : s("purpose", e))
                    })), i.on(ui, (() => {
                        l = null, s("purpose", Sa.EMPTY)
                    })), i.on(wt, ((e, t, o) => {
                        o || (e === Sa.SPATIAL_REDIRECT && s("spatialRedirectContext", t), n().displayList.accessGate || i.fire(di, e))
                    })), i.on(fn, ((e, t) => {
                        C_(l, e, t) && (l = e, s("purpose", Sa.ERROR))
                    })), i.on(Ui, (() => {
                        l === oa.NETWORK && (l = null, s("purpose", Sa.EMPTY))
                    })), o.stereoscopic && i.on(gi, (() => {
                        s("spatialRedirectContext", "headset"), s("purpose", Sa.SPATIAL_REDIRECT)
                    })), {
                        overlay: a,
                        setOverlay: (e, t) => {
                            ("purpose" !== e || y_(t)) && ("purpose" === e && t === Sa.EMPTY || t === Sa.INTERACTIVE ? i.fire(ui) : ("purpose" === e && y_(t) && (i.fire(wt, t, {}, !0), i.fire(di, t, !0)), s(e, t)))
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i
                    } = e, o = l_(e);
                    return n.on(Di, ((n, i) => {
                        t((() => ({
                            title: l_(r(r({}, e), {}, {
                                config: i
                            }))
                        })))
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                    }), (n => {
                        let i = ml(gt, e.config);
                        n && (i = yl(i, e.startTime, e.endTime)), t((e => ({
                            title: r(r({}, e.title), {}, {
                                titleLinkUrl: i
                            })
                        })))
                    })), {
                        title: o
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = Dm(e);
                    return t.on(Di, ((e, t) => {
                        n((() => ({
                            badge: Dm({
                                config: t
                            })
                        })))
                    })), {
                        badge: i,
                        setBadge: (e, i) => {
                            "id" !== e || "number" != typeof i ? ((e, t) => {
                                n((n => ({
                                    badge: r(r({}, n.badge), {}, {
                                        [e]: t
                                    })
                                })))
                            })(e, i) : t.fire(Jn, i)
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        events: n
                    } = e, i = (e, n) => {
                        t((t => ({
                            chapters: r(r({}, t.chapters), {}, {
                                [e]: n
                            })
                        })))
                    }, o = wm(e), a = ({
                        backbone: e
                    }) => {
                        if (e.chaptersTrack) {
                            const t = () => n.fire(Hn, null == e ? void 0 : e.currentChapterID);
                            e.chaptersTrack.addEventListener("cuechange", t)
                        }
                    };
                    return a(e), n.on(Hn, (e => {
                        t((t => ({
                            chapters: r(r({}, t.chapters), {}, {
                                activeCueId: e
                            })
                        })))
                    })), n.on(C.CHAPTER_CUES_UPDATED, (() => i("chapters", km(e)))), n.on(Di, (() => {
                        t((() => ({
                            chapters: wm(e)
                        }))), a(e)
                    })), {
                        chapters: o,
                        setChapters: i
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        backbone: o
                    } = e, a = Wc(), s = e => {
                        var i;
                        const a = xm(o.textTracks, null == (i = n()) || null == (i = i.liveEvent) ? void 0 : i.isLiveEvent, e);
                        t((e => ({
                            captions: r(r({}, e.captions), a)
                        })))
                    }, c = Bm(e);
                    return i.on(qn, (e => {
                        s(e)
                    })), i.on(C.TEXT_TRACKS_AVAILABLE, (() => {
                        s()
                    })), i.on(Di, (() => {
                        t((() => ({
                            captions: Bm(e)
                        })))
                    })), i.on(M, ((e, n = []) => {
                        o.enabledTextTrack && "disabled" !== (null == e ? void 0 : e.mode) && t((e => ({
                            captions: r(r({}, e.captions), {}, {
                                activeCues: l(n)
                            })
                        })))
                    })), i.on($t, (() => {
                        t((e => ({
                            captions: r(r({}, e.captions), {}, {
                                activeCues: []
                            })
                        })))
                    })), {
                        captions: c,
                        setCaptions: (n, o) => {
                            if ("activeTextTrackId" === n && "string" == typeof o) return "off" !== o && o ? void i.fire(Yt, o) : void i.fire($t);
                            if (Ja.hasOwnProperty(n) && "string" == typeof o) {
                                const l = a[n];
                                return i.fire(Kt, l, o), void t((t => ({
                                    captions: r(r({}, t.captions), Um(e))
                                })))
                            }((e, n) => {
                                t((t => ({
                                    captions: r(r({}, t.captions), {}, {
                                        [e]: n
                                    })
                                })))
                            })(n, o)
                        },
                        resetCaptionsStyles: () => {
                            i.fire(qt), t((t => ({
                                captions: r(r({}, t.captions), Um(e))
                            })))
                        }
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n,
                        subscribe: i
                    } = e, a = Gm(e), l = (e, t) => {
                        n((n => ({
                            liveEvent: r(r({}, n.liveEvent), {}, {
                                [e]: t
                            })
                        })))
                    };
                    t.on(Di, (() => {
                        n((() => ({
                            liveEvent: Gm(e)
                        })))
                    }));
                    const {
                        EVENT_ACTIVE: s,
                        EVENT_PENDING: c,
                        EVENT_STARTED: d,
                        EVENT_ENDED: u
                    } = K, _ = {
                        [s]: kl.active,
                        [c]: kl.pending,
                        [d]: kl.started,
                        [u]: kl.ended
                    };
                    Object.getOwnPropertySymbols(_).forEach((e => t.on(e, (() => n((t => ({
                        liveEvent: r(r({}, t.liveEvent), Ym(_[e]))
                    })))))));
                    const {
                        ARCHIVE_STARTED: p,
                        ARCHIVE_DONE: m,
                        ARCHIVE_ERROR: v
                    } = K, f = {
                        [p]: wl.started,
                        [m]: wl.done,
                        [v]: wl.error
                    };
                    return Object.getOwnPropertySymbols(f).forEach((e => t.on(e, (() => n((t => ({
                        liveEvent: r(r({}, t.liveEvent), Wm(f[e]))
                    }))))))), t.on(K.LIVE_STATS_SUCCESS, (({
                        viewerCount: e
                    }) => {
                        n((t => ({
                            liveEvent: r(r({}, t.liveEvent), {}, {
                                viewerCount: Qo(e),
                                liveStatsRequestSucceeded: !0
                            })
                        })))
                    })), t.on(K.LIVE_STATS_FAILURE, (() => {
                        l("liveStatsRequestSucceeded", !1)
                    })), t.on(K.STREAM_ONLINE, (() => {
                        l("isOnline", !0)
                    })), t.on(K.STREAM_OFFLINE, (() => {
                        l("isOnline", !1), o.iOS && se.element && (t.fire(ti), se.exit())
                    })), t.on(Ho, (() => {
                        l("isPlayable", !0)
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isStarted
                    }), (e => !e && l("isPlayable", !1))), {
                        liveEvent: a,
                        setLiveEvent: l
                    }
                })(a)), Qm(a)), (e => {
                    const {
                        set: t,
                        events: n,
                        config: i
                    } = e;
                    return n.on(Di, (() => {
                        t((() => ({
                            cuePoints: {
                                cuePoints: []
                            }
                        })))
                    })), i.embed.on_site && (n.on(zn, (e => {
                        t((t => {
                            const n = t.cuePoints.cuePoints.concat(e);
                            return {
                                cuePoints: r(r({}, t.cuePoints), {}, {
                                    cuePoints: n
                                })
                            }
                        }))
                    })), n.on(jn, (e => {
                        t((t => {
                            const n = t.cuePoints.cuePoints.filter((t => t.id !== e.id));
                            return {
                                cuePoints: r(r({}, t.cuePoints), {}, {
                                    cuePoints: n
                                })
                            }
                        }))
                    }))), {
                        cuePoints: {
                            cuePoints: []
                        },
                        setCuePoints: (e, n) => {
                            t((t => ({
                                cuePoints: r(r({}, t.cuePoints), {}, {
                                    [e]: n
                                })
                            })))
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o,
                        element: a,
                        config: l
                    } = e, s = {
                        purpose: nv.EMPTY
                    };
                    let c = function(e) {
                        const {
                            request: t,
                            video: n,
                            embed: i
                        } = e.config, {
                            qoe_survey_forced: o,
                            ott: r
                        } = t.flags, {
                            qoe_survey_vote: a
                        } = t.cookie, {
                            duration: l,
                            live_event: s
                        } = n;
                        return !(!o && (l < 60 && !s || !Oa(i) || r || Pa(7776e6) < a / 1e3 || !(Math.random() < .005)))
                    }(e);
                    const d = (e, i) => {
                            Oa(l.embed) && us({
                                newPriority: i,
                                currentPriority: n().toast.purpose,
                                priorityOrder: iv
                            }) && t((t => ({
                                toast: r(r({}, t.toast), {}, {
                                    [e]: i
                                })
                            })))
                        },
                        u = () => {
                            c && us({
                                newPriority: nv.QOE_SURVEY,
                                currentPriority: n().toast.purpose,
                                priorityOrder: iv
                            }) && (e => {
                                if (!e) return !1;
                                const t = e.getBoundingClientRect(),
                                    n = t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth),
                                    i = "visible" === document.visibilityState;
                                return n && i
                            })(a) && (d("purpose", nv.QOE_SURVEY), i.fire(xo), c = !1)
                        };

                    function _() {
                        t((e => {
                            const {
                                liveEvent: t,
                                toast: n,
                                playback: i,
                                displayList: o
                            } = e;
                            return t.dvrEnabled && n.purpose !== nv.SKIP_TO_LIVE ? i.atLiveEdge ? o_ : t.isPlayable ? i.paused && !i.scrubbing ? o_ : o.controlBar ? {
                                toast: {
                                    purpose: nv.SKIP_TO_LIVE
                                }
                            } : o_ : o_ : o_
                        }))
                    }

                    function p() {
                        t((e => e.toast.purpose !== nv.SKIP_TO_LIVE ? o_ : {
                            toast: {
                                purpose: nv.EMPTY
                            }
                        }))
                    }
                    return o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                    }), (e => {
                        var t, i;
                        const o = function(e, t) {
                            return t ? 6e5 : Math.round(.4 * e * 1e3)
                        }(null == (t = n()) || null == (t = t.playback) ? void 0 : t.duration, null == (i = n()) || null == (i = i.liveEvent) ? void 0 : i.isLiveEvent);
                        e && o && setTimeout(u, o)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                    }), (e => {
                        e ? p() : _()
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                    }), (e => e && void t((e => e.liveEvent.dvrEnabled && e.liveEvent.isEnded ? {
                        toast: {
                            purpose: nv.BROADCAST_OVER
                        }
                    } : o_)))), o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.paused
                    }), (e => {
                        n().liveEvent.isEnded || n().playback.scrubbing || (e ? p() : _())
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                    }), (e => e ? _() : p())), i.on(Xo, (() => {
                        d("purpose", nv.FRAME_CAPTURED)
                    })), {
                        toast: s,
                        setToast: d,
                        closeToast: () => {
                            d("purpose", nv.EMPTY)
                        }
                    }
                })(a)), (e => {
                    const {
                        get: t,
                        set: n,
                        subscribe: i,
                        config: a,
                        backbone: l
                    } = e, s = p_(e), c = (e, i) => {
                        Oa(a.embed) && us({
                            newPriority: i,
                            currentPriority: t().topCenterActionItem.purpose,
                            priorityOrder: __
                        }) && n((t => ({
                            topCenterActionItem: r(r({}, t.topCenterActionItem), {}, {
                                [e]: i
                            })
                        })))
                    }, d = e => {
                        e && t().topCenterActionItem.purpose !== e || c("purpose", u_.EMPTY)
                    }, u = () => d(u_.UNMUTE), _ = () => c("purpose", u_.WATCH_FULL_VIDEO), p = () => d(u_.WATCH_FULL_VIDEO);
                    return i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.loadedData
                    }), (e => {
                        if (!e) return;
                        const n = t(),
                            i = n.embed.autoPlay || n.liveEvent.isLiveEvent,
                            o = 0 === n.playback.volume || n.playback.muted,
                            r = Oa(n.embed),
                            a = l.hasAudio || n.liveEvent.isLiveEvent;
                        o && i && r && a && n.embed.unmuteButton && c("purpose", u_.UNMUTE)
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.volume
                    }), (e => e > 0 && u())), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.muted
                    }), (e => !e && u())), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                    }), (e => e && u())), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                    }), (() => {
                        m_(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                    }), (() => {
                        m_(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.outro
                    }), (() => {
                        m_(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.paused
                    }), (() => {
                        m_(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.hasFirstTimeUpdate
                    }), (e => {
                        if (a.video.spatial && e) {
                            const e = t().embed.cards;
                            if ((null == e ? void 0 : e.length) && e[0].timecode < 15) return;
                            setTimeout((() => {
                                c("purpose", u_.SPATIAL_INSTRUCTIONS_CLICK), setTimeout((() => d()), 3e3)
                            }), 7e3), o.android || setTimeout((() => {
                                c("purpose", u_.SPATIAL_INSTRUCTIONS_ARROWS), setTimeout((() => d()), 3e3)
                            }), 14e3)
                        }
                    })), {
                        topCenterActionItem: s,
                        setTopCenterActionItem: c,
                        closeTopCenterActionItem: d
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = (e, t) => {
                        n((n => ({
                            spatial: r(r({}, n.spatial), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return t.on(z.WEBVR_ENTER, (() => {
                        i("webVRActive", !0)
                    })), t.on(z.WEBVR_EXIT, (() => {
                        i("webVRActive", !1)
                    })), t.on(z.CAMERA_UPDATE, (e => {
                        n((t => ({
                            spatial: r(r({}, t.spatial), {}, {
                                latitude: e.pitch,
                                longitude: e.yaw
                            })
                        })))
                    })), {
                        spatial: function(e) {
                            const {
                                spatial: t
                            } = e.config.video;
                            return {
                                webVRActive: !1,
                                longitude: 0,
                                latitude: 0,
                                fieldOfView: t ? t.fov : 0
                            }
                        }(e),
                        setSpatial: i
                    }
                })(a)), cv(a)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i,
                        get: o
                    } = e, a = (e, n) => {
                        t((t => ({
                            alert: r(r({}, t.alert), {}, {
                                [e]: n
                            })
                        })))
                    }, l = e => {
                        t((t => {
                            const n = t.embed.background;
                            return t.displayList.overlay || n ? o_ : {
                                alert: r(r({}, t.alert), {}, {
                                    currentAlert: e
                                })
                            }
                        }))
                    };
                    return n.on(ft, (() => l(L_.SPATIAL_UNSUPPORTED))), n.on(ht, (() => l(L_.SPATIAL_FAILURE))), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                    }), (e => {
                        e && o().alert.currentAlert !== L_.EMPTY && a("currentAlert", L_.EMPTY)
                    })), {
                        alert: {
                            currentAlert: L_.EMPTY
                        },
                        setAlert: a
                    }
                })(a)), (e => {
                    const {
                        get: t,
                        set: n,
                        events: i
                    } = e, o = (e, t) => {
                        n((n => ({
                            notification: r(r({}, n.notification), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return i.on([co, kt], (() => o("currentNotification", null))), i.on([Li, Ai], (() => {
                        const e = t().user.liked;
                        o("currentNotification", e ? dv.LikedAdded : dv.LikeRemoved)
                    })), i.on([Si, Ii], (() => {
                        const e = t().user.watchLater;
                        o("currentNotification", e ? dv.WatchLaterAdded : dv.WatchLaterRemoved)
                    })), {
                        notification: {
                            currentNotification: null
                        },
                        setNotification: o
                    }
                })(a)), (e => {
                    const {
                        set: t
                    } = e, n = (e, n) => {
                        t((t => ({
                            chromecast: r(r({}, t.chromecast), {}, {
                                [e]: n
                            })
                        })))
                    }, i = uv(e);
                    return td.on([Jc.initialized, Jc.castStateChanged], (() => {
                        n("isChromecastReady", _v())
                    })), td.on(Jc.buffering, (() => {
                        n("isChromecastBuffering", !0)
                    })), td.on(Jc.error, (() => {
                        n("supportsChromecast", !1)
                    })), td.on(Jc.connected, (e => {
                        t((t => {
                            var n;
                            return {
                                chromecast: r(r({}, t.chromecast), {}, {
                                    isChromecastConnected: !0,
                                    receiverFriendlyName: null == e || null == (n = e.receiver) ? void 0 : n.friendlyName
                                })
                            }
                        }))
                    })), td.on(Jc.disconnected, (() => {
                        t((() => ({
                            chromecast: uv(e)
                        })))
                    })), td.on(Jc.playing, (() => {
                        t((e => ({
                            chromecast: r(r({}, e.chromecast), {}, {
                                isChromecastPlaying: !0,
                                isChromecastBuffering: !1
                            })
                        })))
                    })), td.on([Jc.error, Jc.idle, Jc.paused, Jc.ended, Jc.disconnected], (() => {
                        t((e => ({
                            chromecast: r(r({}, e.chromecast), {}, {
                                isChromecastPlaying: !1,
                                isChromecastBuffering: !1
                            })
                        })))
                    })), {
                        chromecast: i
                    }
                })(a)), {}, {
                    config: s,
                    backbone: c,
                    element: d,
                    name: (null == u ? void 0 : u.name) || Ya.VimeoPlayer,
                    verifyConfig: _,
                    events: p,
                    subscribe: i,
                    updatePhpTokens: m,
                    seekingController: v,
                    bigPicture: f
                });
            return p.fire(Ko, h), h
        }))),
        children: t
    }) : null
}, hv = e => `opacity ${e}ms ease-out`, Ev = ({
    children: e,
    visible: t,
    duration: n = 250,
    styleOverrides: i = {},
    onFaded: o,
    delay: r = 0,
    fadeIn: a = !0,
    fadeOut: l = !0
}) => {
    const s = mv((e => e.embed.background || !e.embed.controls || e.displayList.accessGate)),
        c = hv(n),
        d = {
            enter: {
                opacity: 0
            },
            enterActive: {
                opacity: 1,
                transition: c,
                transitionDelay: `${r}ms`
            },
            enterDone: {
                opacity: 1
            },
            exit: {
                opacity: 1
            },
            exitActive: {
                opacity: 0,
                transition: c,
                transitionDelay: `${r}ms`
            },
            exitDone: s ? {
                display: "none"
            } : {
                overflow: "hidden",
                opacity: 0,
                pointerEvents: "none"
            }
        };
    return Object.keys(i).forEach((e => {
        e in d && Object.assign(d[e], i[e])
    })), a || delete d.enter, l || delete d.exit, ke(Ue, { in: t,
        duration: n,
        styles: d,
        alwaysMounted: !0,
        onExited: () => {
            o && o()
        },
        children: e
    })
};
const gv = ({
    children: e,
    text: t
}) => {
    const n = Re(t),
        [i, a] = Pe(!1),
        [l, s] = Pe(!1),
        c = () => {
            l || s(!0)
        },
        d = () => {
            i && (c(), a(!1))
        },
        u = () => {
            i || o.touch || (c(), a(!0))
        },
        _ = Ne((() => {
            l && s(!1)
        }), [l]),
        p = {
            className: "LabeledButton_module_box__2e0341f7",
            onMouseEnter: u,
            onMouseLeave: d,
            onFocus: u,
            onBlur: d
        },
        m = r({
            className: "LabeledButton_module_labeledButton__2e0341f7"
        }, sa((t => {
            d(), e.props.onClick && e.props.onClick(t)
        }))),
        v = `${hv(s_)} transform 250 ease-out`,
        f = {
            visible: i,
            styleOverrides: {
                enterActive: {
                    transform: "translateX(0)",
                    transition: v
                },
                exitActive: {
                    transform: "translateX(5px)",
                    transition: v
                }
            }
        };
    return n.current !== t && (l ? f.onFaded = _ : n.current = t), ke("div", r(r({}, p), {}, {
        children: [ke(Ev, r(r({}, f), {}, {
            children: ke("label", r(r({}, m), {}, {
                role: "presentation",
                "aria-hidden": "true",
                children: ke("span", {
                    children: n.current
                })
            }))
        })), e]
    }))
};
const bv = ["href", "children", "element", "className", "targetBlank"],
    Cv = He(((e, t) => {
        let {
            href: n,
            children: i,
            element: o = "div",
            className: a = "",
            targetBlank: l = !0
        } = e, s = f(e, bv);
        const c = Fe(o, r(r({}, s), {}, {
            className: a
        }), i);
        return n ? ke("a", r(r(r({
            href: n,
            className: va("Link_module_link__05dd5324", a),
            ref: t,
            "aria-describedby": zr.NEW_WINDOW_DESCRIPTION
        }, l ? {
            target: "_blank",
            rel: "noopener"
        } : {}), s), {}, {
            children: i
        })) : c
    })),
    Tv = ["direction"],
    yv = ["fill"],
    Lv = {
        [yp.CLOSE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [yp.AIRPLAY]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                "data-airplay-icon": !0
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"
                })
            }))
        },
        [yp.DOLBY_VISION]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 844 126",
                "aria-labelledby": "dv-logo-title"
            }, t), {}, {
                children: [ke("title", {
                    id: "dv-logo-title",
                    children: "Dolby Vision"
                }), ke("path", {
                    d: "M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })]
            }))
        },
        [yp.PIP]: e => {
            let {
                direction: t = "enter"
            } = e, n = f(e, Tv);
            return ke("svg", r(r({
                viewBox: "0 0 16 12"
            }, n), {}, {
                children: [ke("polygon", {
                    className: $r.FILL,
                    points: "6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"
                }), ke("rect", {
                    className: $r.FILL,
                    x: "7",
                    y: "7",
                    width: "9",
                    height: "5"
                }), ke("polyline", {
                    className: $r.FILL,
                    transform: "enter" === t ? "translate(4, 4) rotate(180) translate(-4, -4)" : "",
                    points: "5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"
                })]
            }))
        },
        [yp.ENTER_FULLSCREEN]: () => ke("svg", {
            className: qr.ENTER_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-enter-fullscreen": !0,
            children: ke("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"
            })
        }),
        [yp.EXIT_FULLSCREEN]: () => ke("svg", {
            className: qr.EXIT_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-exit-fullscreen": !0,
            children: [ke("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"
            }), ke("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"
            }), ke("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"
            }), ke("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"
            })]
        }),
        [yp.GEAR]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"
                })
            }))
        },
        [yp.VIMEO]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "54",
                height: "18",
                viewBox: "0 0 54 18",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"
                })
            }))
        },
        [yp.VIMEO_SMALL]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"
                })
            }))
        },
        [yp.ENTER_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                "data-enter-pip": !0,
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",
                    fill: "white"
                })
            }))
        },
        [yp.EXIT_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-exit-pip": !0
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"
                })
            }))
        },
        [yp.PAUSE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-pause-icon": !0
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    className: $r.FILL,
                    d: "M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"
                })
            }))
        },
        [yp.PLAY]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-play-icon": !0
            }, t), {}, {
                children: ke("path", {
                    d: "M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",
                    className: $r.FILL
                })
            }))
        },
        [yp.REPLAY]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    className: $r.FILL,
                    d: "M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"
                })
            }))
        },
        [yp.CHAPTERS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"
                })
            }))
        },
        [yp.POINT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "8",
                height: "8",
                viewBox: "0 0 8 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("circle", {
                    className: $r.FILL,
                    cx: "4",
                    cy: "4",
                    r: "4"
                })
            }))
        },
        [yp.CC]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24",
                "data-cc-icon": !0
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"
                })
            }))
        },
        [yp.CC_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24",
                "data-cc-filled-icon": !0
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"
                })
            }))
        },
        [yp.CHECKMARK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",
                    fill: "white"
                })
            }))
        },
        [yp.STEREOSCOPIC]: () => ke("svg", {
            viewBox: "0 0 64 64",
            children: ke("path", {
                d: "M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"
            })
        }),
        [yp.PERSON_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fill: "white",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"
                })
            }))
        },
        [yp.CHEVRON_DOWN]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    d: "M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.CHEVRON_RIGHT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    d: "M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.CLOCK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"
                })
            }))
        },
        [yp.CLOCK_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"
                })
            }))
        },
        [yp.COLLECTIONS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.DISMISS_X]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#1A2E3B",
                    fillRule: "evenodd"
                })
            }))
        },
        [yp.HEART]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.HEART_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.HEART_WIDER_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 110 81"
            }, t), {}, {
                children: ke("path", {
                    d: "M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.HEART_WIDER_BROKEN_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 110 81"
            }, t), {}, {
                children: ke("path", {
                    d: "M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.ONDEMAND]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.PAPER_PLANE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 18.1 20.95"
            }, t), {}, {
                children: ke("path", {
                    d: "M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.POP_OUT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: [ke("path", {
                    d: "M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",
                    fill: "#1a2e3b"
                }), ke("path", {
                    d: "M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",
                    fill: "#1a2e3b"
                })]
            }))
        },
        [yp.VOLUME_OFF_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"
                })
            }))
        },
        [yp.VOLUME_ON_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"
                })
            }))
        },
        [yp.FAST_FORWARD]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"
                })
            }))
        },
        [yp.INFO_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 4.66667C6.36819 4.66667 6.66667 4.36819 6.66667 4C6.66667 3.63181 6.36819 3.33333 6 3.33333C5.63181 3.33333 5.33333 3.63181 5.33333 4C5.33333 4.36819 5.63181 4.66667 6 4.66667ZM6 5.33333C6.36819 5.33333 6.66667 5.54653 6.66667 5.80952V8.19048C6.66667 8.45347 6.36819 8.66667 6 8.66667C5.63181 8.66667 5.33333 8.45347 5.33333 8.19048V5.80952C5.33333 5.54653 5.63181 5.33333 6 5.33333Z",
                    fill: "white"
                })
            }))
        },
        [yp.TRANSCRIPT_ON]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 3C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C10.5711 17.3995 10.5711 13.6005 12.9142 11.2574C14.4297 9.74185 16.5543 9.20655 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5ZM18.5 11.7313C17.0907 11.2301 15.4565 11.5435 14.3284 12.6716C14.1332 12.8668 13.9623 13.0773 13.8159 13.2991C12.7907 14.8517 12.9616 16.9616 14.3284 18.3284C15.4515 19.4515 17.0762 19.7671 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313ZM7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H7.5ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.5C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16Z"
                })
            }))
        },
        [yp.TRANSCRIPT_OFF]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 5H16.5V9.53585C17.1669 9.46283 17.8436 9.50136 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C12.6802 19.5086 12.4696 19.2601 12.2823 19H4.5V5ZM15.2182 19C16.2222 19.5567 17.415 19.6485 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313C17.857 11.5026 17.1672 11.4435 16.5 11.554C15.7048 11.6857 14.9418 12.0582 14.3284 12.6716C12.7663 14.2337 12.7663 16.7663 14.3284 18.3284C14.5992 18.5992 14.8992 18.8231 15.2182 19ZM6.5 8C6.5 7.44772 6.94772 7 7.5 7H12.5C13.0523 7 13.5 7.44772 13.5 8C13.5 8.55228 13.0523 9 12.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H10.5C11.0523 11 11.5 11.4477 11.5 12C11.5 12.5523 11.0523 13 10.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12ZM7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17H8.5C9.05228 17 9.5 16.5523 9.5 16C9.5 15.4477 9.05228 15 8.5 15H7.5Z"
                })
            }))
        },
        [yp.SEARCH]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    className: $r.FILL,
                    d: "M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5725 18 14.0238 17.4815 15.1925 16.6062L18.298 19.7076C18.6888 20.0978 19.3219 20.0974 19.7122 19.7066C20.1025 19.3159 20.1021 18.6827 19.7113 18.2924L16.6066 15.1919C17.4817 14.0233 18 12.5722 18 11C18 7.13401 14.866 4 11 4ZM6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11Z"
                })
            }))
        },
        [yp.CHEVRON_UP]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    d: "M12 11.3454L16.331 15.2433L17.6689 13.7567L12.6689 9.25671C12.2886 8.91443 11.7113 8.91443 11.331 9.25671L6.33102 13.7567L7.66895 15.2433L12 11.3454Z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [yp.CLOSE_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7071 9.26251C14.3571 8.9125 13.7896 8.9125 13.4396 9.26251L12 10.7023L10.5604 9.26252C10.2104 8.9125 9.64292 8.9125 9.29293 9.26252L9.26302 9.29244C8.91306 9.64243 8.91306 10.2099 9.26302 10.5599L10.7027 11.9997L9.26247 13.4401C8.91251 13.7901 8.91251 14.3576 9.26247 14.7076L9.29239 14.7375C9.64237 15.0875 10.2098 15.0875 10.5598 14.7375L12 13.2971L13.4402 14.7375C13.7902 15.0875 14.3576 15.0875 14.7076 14.7375L14.7375 14.7076C15.0875 14.3576 15.0875 13.7901 14.7375 13.4401L13.2973 11.9997L14.737 10.5599C15.0869 10.2099 15.0869 9.64243 14.737 9.29244L14.7071 9.26251Z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [yp.SPINNER]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-spinner": !0
            }, t), {}, {
                children: [ke("circle", {
                    "data-spinner-trace": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                }), ke("circle", {
                    "data-spinner-circle": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                })]
            }))
        },
        [yp.SLIDERS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM19.8293 5C19.4175 3.83481 18.3062 3 17 3C15.6938 3 14.5825 3.83481 14.1707 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H14.1707C14.5825 8.16519 15.6938 9 17 9C18.3062 9 19.4175 8.16519 19.8293 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.8293ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.17071C4.58254 14.1652 5.69378 15 7 15C8.30622 15 9.41746 14.1652 9.82929 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H9.82929C9.41746 9.83481 8.30622 9 7 9C5.69378 9 4.58254 9.83481 4.17071 11H3ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H14.1707C14.5825 20.1652 15.6938 21 17 21C18.3062 21 19.4175 20.1652 19.8293 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19.8293C19.4175 15.8348 18.3062 15 17 15C15.6938 15 14.5825 15.8348 14.1707 17H3ZM18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z"
                })
            }))
        },
        [yp.SWITCH_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",
                    fill: "white"
                })
            }))
        },
        [yp.SWITCH_CONTAINER]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "32",
                height: "16",
                viewBox: "0 0 32 16",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: ke("rect", {
                    width: "32",
                    height: "16",
                    rx: "8",
                    fill: "#2F8363"
                })
            }))
        },
        [yp.WARN_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
                    fill: "white"
                })
            }))
        },
        [yp.THUMBS_UP]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C8.99855 21.3765 8.87772 21.3243 8.76692 21.2737C8.25906 21.7332 7.59078 22 6.88197 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89643 2.89367 9 3.99924 9H7.90182C8.9732 8.60827 9.61763 8.20384 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM13.4759 5.05072L13.4741 5.05871C13.4693 5.07933 13.4638 5.09979 13.4577 5.12006C12.9658 6.75821 12.4366 7.99485 11.6235 8.93936C10.9182 9.75858 10.0581 10.2914 9 10.7202V19.2174C9.08899 19.2196 9.17122 19.2384 9.24448 19.2784C9.38703 19.3561 9.60104 19.4634 9.87139 19.5715C10.4167 19.7897 11.163 20 12 20H17.8014C17.8514 19.9621 17.9179 19.9067 17.9987 19.8304C18.2399 19.6027 18.5483 19.2459 18.8517 18.777C19.4594 17.8379 20 16.5239 20 15V12C20 11.6482 19.9099 11.3969 19.7942 11.2538C19.707 11.1461 19.5294 11 19.0738 11H16.0654C16.0365 11.0006 15.9909 11.0009 15.9325 10.999C15.8501 10.9964 15.7377 10.9891 15.6076 10.971C15.3617 10.9367 14.9841 10.8544 14.6237 10.6345C14.2372 10.3985 13.8666 9.99723 13.7424 9.38864C13.6261 8.81811 13.7562 8.20634 14.0421 7.57802C14.4491 6.68359 14.568 5.82532 14.5835 5.18521C14.5913 4.86647 14.5732 4.60676 14.5541 4.43084C14.55 4.39233 14.5458 4.35787 14.5418 4.32773C14.5154 4.29227 14.4815 4.25162 14.4407 4.21169C14.323 4.09673 14.1856 4.01926 14 4.01926C13.8867 4.01926 13.8489 4.04221 13.8443 4.04499C13.8371 4.04925 13.8089 4.06724 13.7659 4.13728C13.7194 4.21297 13.6697 4.32623 13.6182 4.49311C13.5668 4.65929 13.5255 4.83727 13.4759 5.05072ZM7 19.9889V11H4V20H6.88197C6.91933 20 6.95876 19.9961 7 19.9889Z",
                    fill: "white"
                })
            }))
        },
        [yp.THUMBS_DOWN]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38005 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926L12 2.01926C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C15.0015 2.64281 15.1223 2.69495 15.2331 2.74553C15.7409 2.28605 16.4092 2.01926 17.118 2.01926H20C21.1046 2.01926 22 2.91469 22 4.01926L22 13.0193C22 14.1228 21.1063 15.0193 20.0008 15.0193H16.0982C15.0268 15.411 14.3824 15.8154 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM10.5241 18.9685L10.5259 18.9606C10.5307 18.9399 10.5362 18.9195 10.5423 18.8992C11.0342 17.2611 11.5634 16.0244 12.3765 15.0799C13.0818 14.2607 13.9419 13.7279 15 13.2991L15 4.80189C14.911 4.79964 14.8288 4.78086 14.7555 4.7409C14.613 4.66315 14.399 4.55587 14.1286 4.44773C13.5833 4.2296 12.837 4.01926 12 4.01926L6.1986 4.01926C6.14859 4.05717 6.08207 4.11258 6.00131 4.18882C5.76012 4.41652 5.4517 4.77339 5.14827 5.24229C4.54059 6.18137 4 7.49534 4 9.01926V12.0193C4 12.371 4.09013 12.6224 4.20582 12.7654C4.29297 12.8732 4.47062 13.0193 4.9262 13.0193H7.93463C7.96345 13.0186 8.00911 13.0183 8.06745 13.0202C8.14991 13.0229 8.26226 13.0301 8.39236 13.0483C8.63827 13.0825 9.01586 13.1648 9.37627 13.3848C9.76282 13.6207 10.1334 14.022 10.2576 14.6306C10.3739 15.2012 10.2438 15.8129 9.95791 16.4412C9.55092 17.3357 9.43197 18.1939 9.41645 18.834C9.40873 19.1528 9.4268 19.4125 9.44585 19.5884C9.45002 19.6269 9.45424 19.6614 9.45823 19.6915C9.48457 19.727 9.5185 19.7676 9.55935 19.8076C9.67696 19.9225 9.81438 20 10 20C10.1133 20 10.1511 19.9771 10.1557 19.9743C10.1629 19.97 10.1911 19.952 10.2341 19.882C10.2806 19.8063 10.3303 19.693 10.3818 19.5262C10.4332 19.36 10.4745 19.182 10.5241 18.9685ZM17 4.03039V13.0193H20L20 4.01926H17.118C17.0807 4.01926 17.0412 4.02315 17 4.03039Z",
                    fill: "white"
                })
            }))
        },
        [yp.THUMBS_UP_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C9.08468 21.4109 9.0418 21.3933 9 21.3758V8.51408C9.46407 8.25834 9.8137 7.9761 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM7 9H3.99924C2.89367 9 2 9.89643 2 11V20C2 21.1046 2.89543 22 4 22H6.88197C6.92144 22 6.96079 21.9992 7 21.9975V9Z",
                    fill: "white"
                })
            }))
        },
        [yp.THUMBS_DOWN_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38006 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926H12C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C14.9153 2.60835 14.9582 2.62594 15 2.64348V15.5052C14.5359 15.7609 14.1863 16.0432 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM17 15.0193H20.0008C21.1063 15.0193 22 14.1228 22 13.0193V4.01926C22 2.91469 21.1046 2.01926 20 2.01926H17.118C17.0786 2.01926 17.0392 2.02008 17 2.02173V15.0193Z",
                    fill: "white"
                })
            }))
        },
        [yp.LINK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    className: $r.FILL,
                    d: "M11.2929 8.46447C10.9024 8.07395 10.9024 7.44078 11.2929 7.05026L13.4142 4.92894C14.9763 3.36684 17.509 3.36684 19.0711 4.92894C20.6332 6.49103 20.6332 9.02369 19.0711 10.5858L16.9498 12.7071C16.5593 13.0976 15.9261 13.0976 15.5356 12.7071C15.145 12.3166 15.145 11.6834 15.5356 11.2929L17.6569 9.17158C18.4379 8.39053 18.4379 7.1242 17.6569 6.34315C16.8758 5.5621 15.6095 5.5621 14.8285 6.34315L12.7071 8.46447C12.3166 8.85499 11.6834 8.85499 11.2929 8.46447ZM8.46443 11.2929C8.07391 10.9024 7.44074 10.9024 7.05022 11.2929L4.9289 13.4142C3.3668 14.9763 3.3668 17.509 4.9289 19.0711C6.49099 20.6332 9.02365 20.6332 10.5858 19.0711L12.7071 16.9497C13.0976 16.5592 13.0976 15.9261 12.7071 15.5355C12.3165 15.145 11.6834 15.145 11.2929 15.5355L9.17154 17.6569C8.39049 18.4379 7.12416 18.4379 6.34311 17.6569C5.56206 16.8758 5.56206 15.6095 6.34311 14.8284L8.46443 12.7071C8.85495 12.3166 8.85495 11.6834 8.46443 11.2929ZM9.87874 12.7071C9.48821 13.0976 9.48821 13.7308 9.87874 14.1213C10.2693 14.5118 10.9024 14.5118 11.293 14.1213L14.1214 11.2929C14.5119 10.9024 14.5119 10.2692 14.1214 9.87868C13.7309 9.48816 13.0977 9.48816 12.7072 9.87868L9.87874 12.7071Z"
                })
            }))
        },
        [yp.SPARKLE_TWO_STARS_FILLED]: e => {
            let {
                fill: t
            } = e, n = f(e, yv);
            const i = {};
            return t && (i.fill = t), ke("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none"
            }, n), {}, {
                children: [ke("path", {
                    style: i,
                    "data-shape": "smallStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 20.861 4.11 L 21.903 4.472 L 21.899 4.474 C 22.105 4.546 22.214 4.771 22.144 4.978 C 22.105 5.095 22.013 5.186 21.896 5.224 L 20.859 5.585 C 20.401 5.745 20.047 6.099 19.887 6.557 L 19.526 7.599 C 19.452 7.806 19.225 7.914 19.018 7.842 C 18.901 7.802 18.811 7.709 18.774 7.592 L 18.414 6.555 C 18.257 6.099 17.899 5.741 17.443 5.583 L 16.4 5.222 C 16.112 5.121 16.041 4.746 16.272 4.546 C 16.314 4.511 16.362 4.484 16.414 4.468 L 17.445 4.11 C 17.902 3.951 18.255 3.597 18.415 3.139 L 18.779 2.097 C 18.877 1.809 19.25 1.736 19.45 1.965 C 19.486 2.005 19.513 2.053 19.529 2.104 L 19.889 3.139 C 20.048 3.597 20.402 3.951 20.86 4.11 L 20.861 4.11 Z"
                }), ke("path", {
                    style: i,
                    "data-shape": "largeStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 15.732 10.906 L 18.352 11.817 L 18.354 11.815 C 18.734 11.949 18.935 12.364 18.804 12.745 C 18.73 12.96 18.56 13.127 18.344 13.197 L 15.732 14.107 C 14.507 14.528 13.545 15.49 13.122 16.714 L 12.212 19.336 C 12.077 19.712 11.669 19.912 11.289 19.789 C 11.069 19.718 10.897 19.545 10.828 19.324 L 9.922 16.716 C 9.499 15.492 8.538 14.531 7.314 14.108 L 4.697 13.2 C 4.165 13.02 4.027 12.331 4.449 11.96 C 4.521 11.897 4.606 11.848 4.697 11.817 L 7.314 10.907 C 8.538 10.485 9.5 9.524 9.922 8.3 L 10.832 5.677 C 10.894 5.495 11.026 5.346 11.198 5.262 C 11.594 5.068 12.069 5.265 12.213 5.681 L 13.123 8.3 C 13.545 9.524 14.508 10.486 15.732 10.907 L 15.732 10.906 Z"
                })]
            }))
        },
        [yp.WARN_TRIANGLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "36",
                height: "32.326",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "287.915 380.297 36 32.326"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "white",
                    d: "M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"
                })
            }))
        },
        [yp.VERTICAL_ELLIPSIS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "4",
                height: "19",
                viewBox: "0 0 4 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    d: "M2 4.5C2.39556 4.5 2.78224 4.3827 3.11114 4.16294C3.44004 3.94318 3.69639 3.63082 3.84776 3.26537C3.99914 2.89992 4.03874 2.49778 3.96157 2.10982C3.8844 1.72186 3.69392 1.36549 3.41421 1.08579C3.13451 0.806082 2.77814 0.615601 2.39018 0.53843C2.00222 0.46126 1.60009 0.500867 1.23463 0.652242C0.869182 0.803617 0.556825 1.05996 0.337062 1.38886C0.117299 1.71776 1.07779e-06 2.10444 1.07779e-06 2.5C1.07779e-06 3.03043 0.210715 3.53914 0.585788 3.91421C0.960861 4.28929 1.46957 4.5 2 4.5ZM2 14.5C1.60444 14.5 1.21776 14.6173 0.888861 14.8371C0.559963 15.0568 0.303617 15.3692 0.152242 15.7346C0.000866562 16.1001 -0.0387401 16.5022 0.0384303 16.8902C0.115601 17.2781 0.306083 17.6345 0.585788 17.9142C0.865493 18.1939 1.22186 18.3844 1.60982 18.4616C1.99778 18.5387 2.39992 18.4991 2.76537 18.3478C3.13082 18.1964 3.44318 17.94 3.66294 17.6111C3.8827 17.2822 4 16.8956 4 16.5C4 15.9696 3.78929 15.4609 3.41421 15.0858C3.03914 14.7107 2.53043 14.5 2 14.5ZM2 7.5C1.60444 7.5 1.21776 7.6173 0.888861 7.83706C0.559963 8.05682 0.303617 8.36918 0.152242 8.73463C0.000866562 9.10009 -0.0387401 9.50222 0.0384303 9.89018C0.115601 10.2781 0.306083 10.6345 0.585788 10.9142C0.865493 11.1939 1.22186 11.3844 1.60982 11.4616C1.99778 11.5387 2.39992 11.4991 2.76537 11.3478C3.13082 11.1964 3.44318 10.94 3.66294 10.6111C3.8827 10.2822 4 9.89556 4 9.5C4 8.96957 3.78929 8.46086 3.41421 8.08579C3.03914 7.71071 2.53043 7.5 2 7.5Z"
                })
            }))
        },
        [yp.PLUS_SYMBOL]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24",
                preserveAspectRatio: "xMidYMid"
            }, t), {}, {
                children: ke("path", {
                    d: "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                })
            }))
        },
        [yp.FACEBOOK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: ke("path", {
                    d: "M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"
                })
            }))
        },
        [yp.TUMBLR]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 12 20"
            }, t), {}, {
                children: ke("path", {
                    d: "M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"
                })
            }))
        },
        [yp.EMAIL]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 72 72"
            }, t), {}, {
                children: [ke("path", {
                    d: "M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"
                }), ke("path", {
                    d: "M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"
                }), ke("path", {
                    d: "M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"
                }), ke("path", {
                    d: "M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"
                })]
            }))
        },
        [yp.EMBED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 55 48"
            }, t), {}, {
                children: [ke("polygon", {
                    points: "16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"
                }), ke("polygon", {
                    points: "42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"
                }), ke("polygon", {
                    points: "24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"
                })]
            }))
        },
        [yp.PREVIOUS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 27 48",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    d: "M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"
                })
            }))
        },
        [yp.TWITTER]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: ke("path", {
                    d: "M17.751 3h3.067l-6.7 7.658L22 21.078h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L2 3h6.328l4.37 5.777L17.75 3Zm-1.076 16.243h1.7L7.404 4.739H5.58l11.094 14.504Z"
                })
            }))
        },
        [yp.VOD]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "21",
                height: "23",
                viewBox: "0 0 21 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z",
                    fill: "white"
                })
            }))
        },
        [yp.VOD_DOWNLOAD]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z",
                    fill: "white"
                }), ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z",
                    fill: "white"
                })]
            }))
        },
        [yp.VOD_RENT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z",
                    fill: "white"
                }), ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z",
                    fill: "white"
                })]
            }))
        },
        [yp.VOD_SUBSCRIBE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return ke("svg", r(r({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z",
                    fill: "white"
                }), ke("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13 20v-8l8 4",
                    fill: "white"
                })]
            }))
        }
    },
    Av = ["name", "className"],
    Sv = e => {
        let {
            name: t,
            className: n
        } = e, i = f(e, Av);
        const o = Lv[t];
        return o && ke(o, r({
            className: n
        }, i))
    };
const Iv = ({
        headerContent: e,
        panelContent: t,
        bodyRef: n,
        headerRef: i,
        panelRef: o,
        bodyClassName: r,
        panelClassName: a,
        bodyInlineStyles: l = {},
        ariaLabel: s
    }) => ke(We, {
        children: [e && ke("div", {
            ref: i,
            children: e
        }), ke("div", {
            ref: n,
            className: r,
            style: l,
            children: ke("div", {
                className: a,
                ref: o,
                role: "menu",
                "aria-label": s,
                children: t
            })
        })]
    }),
    Ov = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t = Ua,
        panel: n,
        buttonRef: i,
        panelContent: o,
        headerContent: r,
        toggleKey: a,
        className: l,
        id: s,
        type: c,
        ariaLabel: d,
        onBack: u = Ua
    }) => {
        const _ = Re(null),
            p = Re(null),
            m = Re(null),
            v = Re(null),
            f = mv((e => e.element)),
            h = mv((e => e.displayList.controlBar)),
            E = mv((e => e.appearance.playerWidth)),
            g = mv((e => e.appearance.playerHeight)),
            b = mv((e => e.appearance.fullscreen)),
            [C, T] = Pe(!1),
            y = _s(f),
            {
                onFocus: L,
                focusFirstItem: A
            } = bp({
                menuRef: _,
                panelRef: m,
                buttonRef: i,
                isActive: e && C,
                toggleKey: a,
                shouldTrapFocus: y,
                setMenuDisplayed: t,
                onBack: u
            });
        Oe((() => {
            e && A()
        }), [n]), Oe((() => {
            b && t(!1)
        }), [b, t]), Oe((() => {
            h || t(!1)
        }), [h, t]), Oe((() => {
            const e = _.current;
            return () => {
                null == e || null == e.close || e.close(), T(!1)
            }
        }), [_, T]), Oe((() => {
            var t, n, i, o;
            e && (null != _ && null != (t = _.current) && t.open && (null == _ || null == (n = _.current) || null == n.close || n.close()), y ? null == _ || null == (i = _.current) || null == i.showModal || i.showModal() : null == _ || null == (o = _.current) || null == o.show || o.show(), T(!0))
        }), [y, e, _]);
        const S = va($r.VP_MENU, "ModalMenu_module_menu__78a8988e", l);
        return ke(Ev, {
            visible: e && C,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            onFaded: () => {
                var e;
                null == _ || null == (e = _.current) || null == e.close || e.close(), T(!1)
            },
            children: ke("dialog", {
                id: s,
                className: S,
                ref: _,
                onFocus: L,
                onBlur: e => {
                    var n;
                    !e.relatedTarget || null != (n = _.current) && n.contains(e.relatedTarget) || t(!1)
                },
                "data-menu": c || !0,
                style: b ? {} : {
                    maxWidth: `${E}px`,
                    maxHeight: `${g}px`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                },
                "aria-modal": "true",
                children: ke(Iv, {
                    headerContent: r,
                    headerRef: v,
                    bodyRef: p,
                    bodyClassName: "ModalMenu_module_menuBody__78a8988e",
                    panelClassName: "ModalMenu_module_menuPanel__78a8988e",
                    panelRef: m,
                    panelContent: o,
                    ariaLabel: d
                })
            })
        })
    };
const Pv = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t = Ua,
        panel: n,
        buttonRef: i,
        progressBarAndButtonsRef: o,
        panelContent: a,
        headerContent: l,
        toggleKey: s,
        className: c,
        id: d,
        type: u,
        resizeDependencies: _,
        ariaLabel: p,
        onBack: m = Ua
    }) => {
        const v = Re(null),
            f = Re(null),
            h = Re(null),
            E = Re(null),
            g = Re(null),
            [b, C] = Pe({
                height: "auto"
            }),
            [T, y] = Pe({}),
            [L, A] = Pe(!1),
            [S, I] = Pe(!1),
            O = mv((e => e.appearance.isMenuVerticalVideoMode)),
            P = mv((e => e.appearance.boundingClientRect)),
            N = mv((e => e.appearance.playerBreakpoint)),
            D = mv((e => e.displayList.controlBar)),
            {
                isAccordionToggling: w
            } = Ye(Dv),
            {
                onFocus: k,
                focusFirstItem: M
            } = bp({
                menuRef: v,
                panelRef: h,
                buttonRef: i,
                isActive: e,
                toggleKey: s,
                setMenuDisplayed: t,
                onBack: m
            });
        Oe((() => {
            e && M()
        }), [n]);
        const V = e => {
                const t = window.getComputedStyle(e);
                return parseFloat(t.fontSize)
            },
            B = () => {
                A(!1), cancelAnimationFrame(null == g ? void 0 : g.current)
            },
            x = () => {
                if (!(null == v ? void 0 : v.current) || !e) return;
                let t = "auto";
                const n = or(v.current),
                    i = V(v.current),
                    o = n.bottom - v.current.scrollHeight,
                    a = Math.max(P.top, 0) - o;
                if (a > 0) {
                    let e = v.current.scrollHeight - a - i;
                    t = e / i + "em"
                }
                C((e => r(r({}, e), {}, {
                    height: t
                }))), I(a > 0)
            },
            U = () => {
                if (null == h || !h.current) return;
                if (!e) return void y({
                    height: "0"
                });
                const t = V(h.current),
                    n = (h.current.scrollHeight + 16) / t + "em";
                y({
                    height: n
                })
            },
            H = () => {
                x(), L && (g.current = requestAnimationFrame(H))
            },
            F = R((n => {
                null != v && v.current && null != i && i.current && e && (i.current.contains(n.target) || v.current.contains(n.target) || !document.contains(n.target) || t(!1))
            }), 200),
            G = R((() => {
                t(!1)
            }), 200);
        Oe((() => (document.addEventListener("click", F, !1), window.addEventListener("blur", G, !1), () => {
            document.removeEventListener("click", F, !1), window.removeEventListener("blur", G, !1)
        })), [v, i, e]), Oe((() => ((() => {
            if (!((null == v ? void 0 : v.current) && (null == i ? void 0 : i.current) && (null == o ? void 0 : o.current) && e)) return;
            if (O && N === xs.XXS && (null == P ? void 0 : P.width)) return void C((e => r(r({}, e), {}, {
                width: "",
                right: ""
            })));
            const t = or(i.current),
                n = or(v.current.parentElement),
                a = or(o.current),
                l = or(v.current);
            let s = -8 - a.right + n.right;
            const c = t.right - t.width / 2 + l.width / 2 + 8;
            c < a.right && (s = n.right - c);
            const d = V(v.current);
            C((e => r(r({}, e), {}, {
                right: s / d + "em"
            })))
        })(), e ? (U(), A(!0), H()) : (B(), U(), x()), () => {
            B()
        })), [e, n, null == P ? void 0 : P.width, N, _]), Oe((() => {
            D || t(!1)
        }), [D]), Oe((() => {
            (() => {
                if (null != f && f.current) {
                    if (w) return y((e => r(r({}, e), {}, {
                        height: "auto"
                    }))), A(!0), void H();
                    U(), H()
                }
            })()
        }), [w]);
        const W = va($r.VP_MENU, "PopoverMenu_module_menu__41674725", c, S && "PopoverMenu_module_scroll__41674725", O && "PopoverMenu_module_verticalVideo__41674725");
        return ke(Ev, {
            visible: e,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: ke("div", {
                id: d,
                className: W,
                ref: v,
                style: b,
                onTransitionEnd: e => {
                    e.target === (null == f ? void 0 : f.current) && "height" === e.propertyName && (x(), B())
                },
                onFocus: k,
                onBlur: e => {
                    var n;
                    !e.relatedTarget || null != (n = v.current) && n.contains(e.relatedTarget) || t(!1)
                },
                "data-menu": u || !0,
                children: ke(Iv, {
                    headerContent: l,
                    headerRef: E,
                    bodyRef: f,
                    bodyClassName: "PopoverMenu_module_menuBody__41674725",
                    panelClassName: "PopoverMenu_module_menuPanel__41674725",
                    panelRef: h,
                    panelContent: a,
                    ariaLabel: p,
                    bodyInlineStyles: T
                })
            })
        })
    },
    Rv = ["forceModalMenu", "setMenuDisplayed"],
    Nv = e => {
        let {
            forceModalMenu: t,
            setMenuDisplayed: n
        } = e, i = f(e, Rv);
        const o = mv((e => e.appearance.isMenuBlockingUI)),
            a = t || o,
            l = Ne(n, []);
        return ke(a ? Ov : Pv, r({
            setMenuDisplayed: l
        }, i))
    },
    Dv = $e({
        isAccordionToggling: !1,
        activeAccordion: "",
        setAccordionToggling: () => {},
        setActiveAccordion: () => {}
    }),
    wv = ({
        children: e
    }) => {
        const [t, n] = Pe(!1), [i, o] = Pe(""), r = {
            isAccordionToggling: t,
            activeAccordion: i,
            setAccordionToggling: n,
            setActiveAccordion: o
        };
        return ke(Dv.Provider, {
            value: r,
            children: e
        })
    };
const kv = ({
    buffer: e = !1
}) => ke("div", {
    className: "Divider_module_divider__74e2aa5b " + (e ? "Divider_module_buffer__74e2aa5b" : "")
});
const Mv = ({
    onBack: e = null,
    title: t,
    forceModalMenu: n,
    setMenuDisplayed: i = Ua,
    hasCloseButton: o = !0,
    onClose: r = () => i(!1),
    size: a = Ws.MD
}) => {
    const l = mv((e => e.appearance.isMenuBlockingUI)),
        s = va("MenuHeader_module_menuHeader__c10a9277", (n || l) && "MenuHeader_module_fullWidth__c10a9277", e && "MenuHeader_module_hasBack__c10a9277", !o && "MenuHeader_module_hideCloseButton__c10a9277");
    return ke("div", {
        className: s,
        children: [ke("header", {
            className: "MenuHeader_module_header__c10a9277",
            children: [ke("div", {
                className: "MenuHeader_module_backButtonWrapper__c10a9277",
                children: ke(cf, {
                    className: "MenuHeader_module_backButton__c10a9277",
                    onClick: e,
                    "aria-label": "Voltar",
                    color: Hs.ALTERNATIVE,
                    icon: ke(Sv, {
                        name: yp.CHEVRON_RIGHT
                    }),
                    iconSize: Us.MD
                })
            }), ke(tf, {
                size: a,
                className: "MenuHeader_module_title__c10a9277",
                color: $s.WHITE,
                element: "h1",
                children: t
            }), ke("div", {
                className: "MenuHeader_module_closeButtonWrapper__c10a9277",
                children: ke(cf, {
                    className: "MenuHeader_module_closeButton__c10a9277",
                    "aria-label": "Fechar menu",
                    onClick: r,
                    color: Hs.ALTERNATIVE,
                    icon: ke(Sv, {
                        name: yp.DISMISS_X
                    }),
                    iconSize: Us.MD
                })
            })]
        }), ke(kv, {})]
    })
};
const Vv = ["className", "id", "active", "withActive", "onSelect", "onMouseEnter", "onMouseLeave", "element", "styled", "children", "role", "describedBy"],
    Bv = e => {
        let {
            className: t,
            id: n,
            active: i,
            withActive: o = !0,
            onSelect: a,
            onMouseEnter: l,
            onMouseLeave: s,
            element: c = "div",
            styled: d = !0,
            children: u,
            role: _ = "menuitemradio",
            describedBy: p
        } = e, m = f(e, Vv);
        const {
            onClick: v,
            onKeyDown: h
        } = Z_(a), E = va("MenuOption_module_option__828f05b2", o && "MenuOption_module_withActive__828f05b2", d && "MenuOption_module_styled__828f05b2", t), g = r({
            className: E,
            role: _,
            "aria-checked": i,
            "aria-selected": i,
            "aria-describedby": p,
            "data-id": n,
            "data-menu-option": !0,
            tabIndex: 0,
            onClick: v,
            onKeyDown: h,
            onMouseDown: e => e.preventDefault(),
            onMouseEnter: l,
            onMouseLeave: s
        }, m);
        return Fe(c, g, u)
    };
const xv = ({
    className: e,
    onSelect: t,
    label: n,
    value: i,
    id: o,
    isAccordion: a = !1,
    hasPopup: l = !1,
    isOpened: s = !1,
    size: c = tp.MEDIUM,
    role: d = "menuitem"
}) => {
    let u, _ = Ws.MD;
    c === tp.LARGE ? (_ = Ws.LG, u = Ws.MD) : a && (_ = Ws.SM);
    const p = {};
    return l && Object.assign(p, {
        "aria-haspopup": "true",
        "aria-expanded": s
    }), ke(Bv, r(r({
        className: va("MenuItem_module_optionButton__14a7084a", c === tp.SMALL && "MenuItem_module_small__14a7084a", e),
        onSelect: t,
        id: o,
        withActive: !1,
        role: d,
        "data-menu-item": !0
    }, p), {}, {
        children: [ke(tf, {
            size: _,
            weight: a ? Ys.BOLD : Ys.NORMAL,
            className: "MenuItem_module_label__14a7084a",
            color: $s.WHITE,
            children: n
        }), i && ke(tf, {
            weight: Ys.NORMAL,
            size: u,
            className: "MenuItem_module_value__14a7084a",
            color: $s.WHITE,
            children: i
        }), ke("div", {
            className: va("MenuItem_module_icon__14a7084a", s && "MenuItem_module_open__14a7084a"),
            children: ke(Sv, {
                name: a ? yp.CHEVRON_DOWN : yp.CHEVRON_RIGHT
            })
        })]
    }))
};
const Uv = Ws.MD,
    Hv = Ws.SM,
    Fv = ({
        onSelect: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i,
        active: o,
        id: r,
        ordered: a = !1,
        index: l,
        isAccordion: s = !1,
        tabIndex: c,
        icon: d = null,
        role: u = "menuitemradio",
        hidden: _
    }) => {
        const p = va("MenuOptionListItem_module_listItem__2a2a4b59", a && "MenuOptionListItem_module_ordered__2a2a4b59", o && "MenuOptionListItem_module_active__2a2a4b59", s && "MenuOptionListItem_module_accordion__2a2a4b59");
        return ke(Bv, {
            className: p,
            onSelect: e,
            onMouseEnter: t,
            onMouseLeave: n,
            active: o,
            id: r,
            tabIndex: c,
            role: u,
            hidden: _,
            children: [d && ke("div", {
                className: "MenuOptionListItem_module_icon__2a2a4b59",
                children: ke(Sv, {
                    name: d
                })
            }), a && !d && ke("div", {
                className: "MenuOptionListItem_module_number__2a2a4b59",
                children: l
            }), !a && !d && ke("div", {
                className: "MenuOptionListItem_module_check__2a2a4b59 " + (o ? "MenuOptionListItem_module_activeCheck__2a2a4b59" : ""),
                children: ke(Sv, {
                    name: yp.CHECKMARK
                })
            }), ke(tf, {
                className: "MenuOptionListItem_module_text__2a2a4b59",
                weight: Ys.NORMAL,
                size: s ? Hv : Uv,
                color: $s.WHITE,
                children: i
            }), a && o && ke("div", {
                className: "MenuOptionListItem_module_point__2a2a4b59",
                children: ke(Sv, {
                    name: yp.POINT
                })
            })]
        })
    },
    Gv = ({
        items: e,
        onSelect: t,
        onMenuOptionMouseEnter: n,
        onMenuOptionMouseLeave: i,
        ordered: o = !1,
        isAccordion: a = !1,
        listItemTabIndex: l = 0,
        hidden: s,
        itemComponent: c
    }) => {
        const d = e.map((e => {
            const d = {
                key: e.id,
                id: e.id,
                active: e.active,
                label: e.label,
                onSelect: t,
                onMouseEnter: n,
                onMouseLeave: i,
                ordered: o,
                isAccordion: a,
                tabIndex: l,
                icon: e.icon,
                hidden: s
            };
            return c ? c(r(r({}, d), e)) : ke(Fv, r({}, d))
        }));
        return ke(We, {
            children: d
        })
    };
const Wv = ({
    id: e,
    label: t,
    items: n = [],
    onSelect: i
}) => {
    var o;
    const r = Re(null),
        a = Re(null),
        {
            setAccordionToggling: l,
            activeAccordion: s,
            setActiveAccordion: c
        } = Ye(Dv),
        [d, u] = Pe(!1),
        [_, p] = Pe({}),
        m = null == (o = n.find((e => e.active))) ? void 0 : o.label,
        v = (e = void 0) => {
            const n = void 0 !== e ? e : !d;
            u(n), l(!0), n && c(t)
        },
        f = e => {
            e.target === a.current && "height" === e.propertyName && l(!1)
        },
        h = e => {
            null != r && r.current && !r.current.contains(e.target) && r.current !== e.target && v(!1)
        };
    return Oe((() => (document.addEventListener("click", h), document.addEventListener("transitionend", f), () => {
        c(""), document.removeEventListener("click", h), document.removeEventListener("transitionend", f)
    })), []), Oe((() => {
        p((() => {
            let e = {};
            if (d && null != a && a.current) {
                const t = window.getComputedStyle(a.current),
                    n = parseFloat(t.fontSize);
                e = {
                    height: a.current.scrollHeight / n + "em"
                }
            }
            return e
        })())
    }), [d, a]), Oe((() => {
        s && s !== t && v(!1)
    }), [s]), n.length && ke("div", {
        className: "Accordion_module_accordion__2cb96b8e",
        role: "group",
        ref: r,
        "aria-controls": e,
        children: [ke(xv, {
            label: t,
            value: m,
            onSelect: () => v(),
            isAccordion: !0,
            hasPopup: !0,
            isOpened: d,
            role: "button"
        }), ke("div", {
            className: "Accordion_module_content__2cb96b8e",
            "aria-hidden": !d,
            ref: a,
            style: _,
            role: "menu",
            id: e,
            "aria-label": t,
            children: ke(Gv, {
                items: n,
                onSelect: i,
                isAccordion: !0,
                listItemTabIndex: d ? 0 : -1,
                hidden: !d || void 0
            })
        })]
    })
};
const Yv = ({
        id: e,
        label: t,
        className: n = ""
    }) => ke("div", {
        className: `MenuFieldLabel_module_menuField__832e2f60 ${n}`,
        "aria-hidden": !0,
        children: ke(tf, {
            id: e,
            className: "MenuFieldLabel_module_label__832e2f60",
            color: $s.WHITE,
            children: t
        })
    }),
    $v = ({
        labelId: e,
        items: t = [],
        label: n,
        onSelect: i
    }) => {
        const o = mv((e => e.appearance.shouldMenuItemsWrap));
        return ke(We, {
            children: [ke(Yv, {
                label: n,
                id: e
            }), ke("ul", {
                className: "ButtonRow_module_buttonRow__ed961dd7 " + (o ? "ButtonRow_module_wrap__ed961dd7" : ""),
                role: "radiogroup",
                "aria-labelledby": e,
                children: t.map((t => ke(Bv, {
                    element: "li",
                    className: "ButtonRow_module_filledButton__ed961dd7 " + (t.active ? "ButtonRow_module_active__ed961dd7" : ""),
                    active: t.active,
                    id: t.id,
                    onSelect: i,
                    styled: !1,
                    role: "radio",
                    describedBy: e,
                    children: ke(tf, {
                        className: "ButtonRow_module_label__ed961dd7",
                        color: $s.WHITE,
                        children: t.label
                    })
                }, t.id)))
            })]
        })
    };
const Kv = ({
    labelId: e,
    items: t = [],
    label: n,
    onSelect: i
}) => {
    const o = mv((e => e.appearance.shouldMenuItemsWrap));
    return ke(We, {
        children: [ke(Yv, {
            label: n,
            id: e
        }), ke("ul", {
            className: "ColorSwabs_module_colorSwabs__ee1dd808 " + (o ? "ColorSwabs_module_wrap__ee1dd808" : ""),
            role: "radiogroup",
            "aria-labelledby": e,
            children: t.map((t => ke(Bv, {
                id: t.id,
                element: "li",
                className: "ColorSwabs_module_colorSwab__ee1dd808 " + (t.active ? "ColorSwabs_module_active__ee1dd808" : ""),
                active: t.active,
                "aria-label": t.label,
                onSelect: i,
                styled: !1,
                describedBy: e,
                role: "radio",
                children: ke("div", {
                    className: "ColorSwabs_module_inner__ee1dd808",
                    style: {
                        backgroundColor: t.id
                    }
                })
            }, t.id)))
        })]
    })
};
let qv = function(e) {
    return e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right", e
}({});
const zv = {
        onPointerDown: e => e.preventDefault()
    },
    jv = ({
        children: t,
        tooltipContent: n,
        className: i = "",
        containerEl: a,
        position: l,
        margin: s,
        visible: c = null,
        preventFocusOnClick: d = !1,
        id: u = null,
        animating: _ = !1
    }) => {
        var p, m, v;
        const [f, h] = Pe(!1), E = () => h(!0), g = () => h(!1), b = null !== c, C = c || f, T = Xv("onPointerEnter", t, (e => {
            "mouse" === e.pointerType && E()
        })), y = Xv("onPointerLeave", t, g), L = Xv("onFocus", t, (() => {
            document.body.classList.contains($r.SHOWFOCUS) && E()
        })), A = Xv("onBlur", t, g);
        ap("Escape", g);
        let S = null == t ? void 0 : t.ref;
        const I = Re(null);
        S = S || I;
        const O = Re(null),
            P = va("Tooltip_module_tooltipContainer__d9b61844", null == t || null == (p = t.props) ? void 0 : p.className, b && c && "Tooltip_module_forceVisible__d9b61844"),
            R = r(r({}, null == t ? void 0 : t.props), {}, {
                className: P,
                ref: S,
                onPointerEnter: T,
                onPointerLeave: y,
                onFocus: L,
                onBlur: A,
                "aria-labelledby": null != u ? u : null,
                "data-touch-device": o.touch.toString()
            });
        d && Object.assign(R, zv);
        const N = (({
                tooltipEl: e,
                wrappedEl: t,
                visible: n,
                containerEl: i,
                position: o = qv.TOP,
                margin: a = 0,
                animating: l = !1
            }) => {
                const s = Re(null),
                    [c, d] = Pe({
                        top: null,
                        bottom: null,
                        left: o === qv.LEFT ? "auto" : "50%",
                        right: o === qv.LEFT ? `calc(100% + ${a}px)` : "auto"
                    }),
                    u = mv((e => e.element)),
                    _ = Ne((() => {
                        const i = {};
                        if (e && t && n) {
                            const {
                                left: n,
                                right: r
                            } = u.getBoundingClientRect(), {
                                left: l,
                                right: s,
                                width: c
                            } = t.getBoundingClientRect(), {
                                width: d
                            } = e.getBoundingClientRect();
                            if (o === qv.TOP || o === qv.BOTTOM) {
                                const e = (d - c) / 2,
                                    t = l - e,
                                    o = s + e,
                                    u = Math.max(n + a - t, 0),
                                    _ = Math.max(o + a - r, 0);
                                Object.assign(i, {
                                    left: `calc(50% + ${u-_}px)`
                                })
                            }
                        }
                        return i
                    }), [a, u, o, e, n, t]),
                    p = Ne((() => {
                        const t = {};
                        if (e && i && n) {
                            const {
                                bottom: e
                            } = i.getBoundingClientRect(), {
                                top: n
                            } = u.getBoundingClientRect();
                            if (o === qv.BOTTOM) {
                                const i = e - n - a;
                                isNaN(i) || Object.assign(t, {
                                    top: `${i}px`
                                })
                            }
                        }
                        return t
                    }), [i, a, u, o, e, n]),
                    m = Ne((() => {
                        d((e => {
                            const t = r(r(r({}, e), _()), p());
                            return Ve(t, e) ? e : t
                        }))
                    }), [_, p]);
                return Oe((() => (l ? function e() {
                    m(), s.current = requestAnimationFrame(e)
                }() : (cancelAnimationFrame(s.current), m()), () => {
                    cancelAnimationFrame(s.current)
                })), [l, m]), c
            })({
                tooltipEl: null == O ? void 0 : O.current,
                wrappedEl: null == (m = S) ? void 0 : m.current,
                containerEl: null == a ? void 0 : a.current,
                position: l,
                margin: s,
                visible: b && c || f,
                animating: _
            }),
            D = va("Tooltip_module_tooltip__d9b61844", i, l === qv.LEFT && "Tooltip_module_tooltipLeft__d9b61844"),
            w = ke(Ev, {
                visible: C,
                children: ke("span", {
                    id: u,
                    ref: O,
                    style: N,
                    className: D,
                    "aria-hidden": "true",
                    children: n
                })
            }),
            k = Ke(null == t || null == (v = t.props) ? void 0 : v.children),
            M = [w].concat(e(k));
        return qe(t, R, M)
    };

function Xv(e, t, n) {
    return i => {
        var o;
        null != t && null != (o = t.props) && o[e] && t.props[e](i), n(i)
    }
}
var Zv = {
    text: "Text_module_text__705900fc",
    sm: "Text_module_sm__705900fc",
    md: "Text_module_md__705900fc",
    lg: "Text_module_lg__705900fc",
    xl: "Text_module_xl__705900fc",
    bpxxs_fontsm: "Text_module_bpxxs_fontsm__705900fc",
    bpxxs_fontmd: "Text_module_bpxxs_fontmd__705900fc",
    bpxxs_fontlg: "Text_module_bpxxs_fontlg__705900fc",
    bpxxs_fontxl: "Text_module_bpxxs_fontxl__705900fc",
    bpxs_fontsm: "Text_module_bpxs_fontsm__705900fc",
    bpxs_fontmd: "Text_module_bpxs_fontmd__705900fc",
    bpxs_fontlg: "Text_module_bpxs_fontlg__705900fc",
    bpxs_fontxl: "Text_module_bpxs_fontxl__705900fc",
    bpsm_fontsm: "Text_module_bpsm_fontsm__705900fc",
    bpsm_fontmd: "Text_module_bpsm_fontmd__705900fc",
    bpsm_fontlg: "Text_module_bpsm_fontlg__705900fc",
    bpsm_fontxl: "Text_module_bpsm_fontxl__705900fc",
    bpmd_fontsm: "Text_module_bpmd_fontsm__705900fc",
    bpmd_fontmd: "Text_module_bpmd_fontmd__705900fc",
    bpmd_fontlg: "Text_module_bpmd_fontlg__705900fc",
    bpmd_fontxl: "Text_module_bpmd_fontxl__705900fc",
    bplg_fontsm: "Text_module_bplg_fontsm__705900fc",
    bplg_fontmd: "Text_module_bplg_fontmd__705900fc",
    bplg_fontlg: "Text_module_bplg_fontlg__705900fc",
    bplg_fontxl: "Text_module_bplg_fontxl__705900fc",
    bpxl_fontsm: "Text_module_bpxl_fontsm__705900fc",
    bpxl_fontmd: "Text_module_bpxl_fontmd__705900fc",
    bpxl_fontlg: "Text_module_bpxl_fontlg__705900fc",
    bpxl_fontxl: "Text_module_bpxl_fontxl__705900fc",
    bpxxl_fontsm: "Text_module_bpxxl_fontsm__705900fc",
    bpxxl_fontmd: "Text_module_bpxxl_fontmd__705900fc",
    bpxxl_fontlg: "Text_module_bpxxl_fontlg__705900fc",
    bpxxl_fontxl: "Text_module_bpxxl_fontxl__705900fc",
    bold: "Text_module_bold__705900fc",
    normal: "Text_module_normal__705900fc",
    medium: "Text_module_medium__705900fc",
    white: "Text_module_white__705900fc"
};
const Jv = {
        [Ws.SM]: "sm",
        [Ws.MD]: "md",
        [Ws.LG]: "lg",
        [Ws.XL]: "xl"
    },
    Qv = {
        [Ys.BOLD]: Zv.bold,
        [Ys.NORMAL]: Zv.normal,
        [Ys.NUM_500]: Zv.medium
    },
    ef = {
        [$s.WHITE]: Zv.white
    },
    tf = ({
        element: e = "span",
        children: t,
        size: n = Ws.SM,
        sizeMap: i,
        weight: o = Ys.BOLD,
        color: r = $s.CUSTOM,
        className: a = "",
        id: l = "",
        ariaHidden: s = !1,
        role: c,
        containsMarkup: d = !1
    }) => {
        let u = [];
        i ? Object.keys(i).forEach((e => {
            const t = Jv[i[e]];
            u.push(Zv[`bp${e}_font${t}`])
        })) : u.push(Zv[Jv[n]]);
        const _ = {
            className: va.apply(void 0, [Zv.text].concat(u, [Qv[o], ef[r], a])),
            id: l,
            ariaHidden: s,
            role: c
        };
        return d && (_.dangerouslySetInnerHTML = {
            __html: t
        }), Fe(e, _, t)
    },
    nf = e => ke(Cv, {
        className: e.classNames,
        href: e.url,
        tabIndex: e.url ? "0" : "-1",
        style: e.style,
        children: ke("img", {
            className: e.imgClassNames,
            src: e.img,
            alt: e.imgAlt
        })
    });
var of = {
    roundedBox: "shared_module_roundedBox__fd03e359",
    hidden: "shared_module_hidden__fd03e359",
    focusable: "shared_module_focusable__fd03e359",
    focusableButton: "shared_module_focusableButton__fd03e359",
    focusableCircle: "shared_module_focusableCircle__fd03e359",
    focusableMarker: "shared_module_focusableMarker__fd03e359",
    visuallyHidden: "shared_module_visuallyHidden__fd03e359"
};
const rf = ["children", "className", "color", "size", "focusable", "icon", "iconPosition", "iconSize", "type", "style", "tabIndex"],
    af = {
        [Hs.PRIMARY]: "Button_module_primary__779846a6",
        [Hs.ALTERNATIVE]: "Button_module_alternative__779846a6"
    },
    lf = {
        [Us.MD]: "Button_module_md__779846a6",
        [Us.SM]: "Button_module_sm__779846a6",
        [Us.XS]: "Button_module_xs__779846a6"
    },
    sf = {
        [Us.MD]: "Button_module_iconMd__779846a6",
        [Us.SM]: "Button_module_iconSm__779846a6"
    },
    cf = He(((e, t) => {
        let {
            children: n,
            className: i,
            color: o = Hs.CUSTOM,
            size: a = Us.CUSTOM,
            focusable: l = !0,
            icon: s,
            iconPosition: c = Fs.LEFT,
            iconSize: d = Us.CUSTOM,
            type: u,
            style: _ = {},
            tabIndex: p = 0
        } = e, m = f(e, rf);
        const v = va("Button_module_button__779846a6", l && of .focusable, af[o], lf[a], s && "Button_module_icon__779846a6", s && sf[d], qr.EXCLUDE_GLOBAL_BUTTON_STYLES, i);
        return ke("button", r(r({
            className: v,
            ref: t,
            type: u || Gs.BUTTON,
            style: _,
            tabIndex: p
        }, m), {}, {
            children: [c === Fs.LEFT && s, n && ke("span", {
                className: "Button_module_buttonChildren__779846a6",
                children: n
            }), c === Fs.RIGHT && s]
        }))
    }));
const df = ["Shift", "Tab"],
    uf = o.iOS ? "SearchInput_module_mobileSafari__8bd10fbf" : "",
    _f = He((({
        onChange: e,
        onEnter: t,
        onSearchIterate: n,
        value: i,
        numSearchResults: o,
        ariaControls: a,
        disabled: l,
        placeholder: s,
        searchItemIterator: c
    }, d) => {
        var u;
        const _ = {
                defaultPlaceholder: "Pesquisar",
                clearResults: "Limpar resultados da pesquisa",
                previousResult: "Resultado da pesquisa anterior",
                nextResult: "Próximo resultado da pesquisa",
                noResults: "Nenhum resultado",
                numberResults: 1 === o ? o + " resultado" : o + " resultados"
            },
            [p, m] = Pe(!1),
            [v, f] = Pe(!1),
            h = Re(null),
            E = i.length > 0,
            g = (() => {
                const [e, t] = Pe(!1);
                return ap("Shift", (() => {
                    t(!0)
                }), (() => {
                    t(!1)
                })), e
            })();
        let b = s;
        o && p && (b = _.numberResults), !o && i && p && (b = _.noResults);
        const [C, T] = Pe(_.nextResult), [y, L] = Pe(_.previousResult);
        s = null !== (u = s) && void 0 !== u ? u : _.defaultPlaceholder, Oe((function() {
            return clearTimeout(h.current), h.current = setTimeout((() => {
                m(!0)
            }), 1e3), () => clearTimeout(h.current)
        }), [i]);
        const A = () => {
                null != d && d.current && (null == d.current.focus || d.current.focus())
            },
            S = () => {
                e && e(""), t && t(""), A()
            },
            I = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = c < o - 1 ? c + 1 : 0, o && T("Resultado " + (t + 1) + " de " + o), n && n(t)
            },
            O = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = c > 0 ? c - 1 : o - 1, o && L("Resultado " + (t + 1) + " de " + o), n && n(t)
            },
            P = va("SearchInput_module_inputForm__8bd10fbf", E && "SearchInput_module_active__8bd10fbf"),
            R = va("SearchInput_module_searchButton__8bd10fbf", of .focusableButton),
            N = 0 !== o && Number.isInteger(c) ? `${c+1}/${o}` : "0/0";
        return ke("form", {
            className: P,
            role: "search",
            "data-component-type": "SearchInput",
            "data-focused": `${v}`,
            "data-disabled": `${l}`,
            onReset: () => S(),
            onSubmit: e => {
                e.preventDefault(), t && t(i), g ? O() : I()
            },
            onClick: A,
            children: [!E && ke("div", r(r({
                "data-icon": "search",
                className: "SearchInput_module_searchIcon__8bd10fbf"
            }, sa(A)), {}, {
                children: ke(Sv, {
                    name: yp.SEARCH,
                    "aria-hidden": "true"
                })
            })), ke("input", {
                "aria-live": "polite",
                type: "text",
                ref: d,
                className: uf,
                onFocus: () => f(!0),
                onBlur: () => f(!1),
                onKeyDown: e => {
                    df.includes(e.key) || e.stopPropagation()
                },
                "aria-controls": a,
                onInput: t => {
                    t.preventDefault(), e && e(t.target.value), m(!1)
                },
                value: i,
                "aria-describedby": "searchResultsStatus",
                disabled: l,
                id: na.SEARCH_INPUT
            }), !E && ke("label", {
                htmlFor: na.SEARCH_INPUT,
                className: "SearchInput_module_label__8bd10fbf",
                children: s
            }), i && ke("span", {
                id: "searchResultsStatus",
                "aria-live": "polite",
                className: of .visuallyHidden,
                children: b
            }), E && ke(We, {
                children: [Number.isInteger(c) && ke("div", {
                    "data-purpose": "search-item",
                    className: "SearchInput_module_searchItem__8bd10fbf",
                    "aria-hidden": "true",
                    children: N
                }), ke(cf, r(r({
                    "aria-live": "polite"
                }, sa(O)), {}, {
                    "data-purpose": "decrement-search",
                    "aria-label": y,
                    icon: ke(Sv, {
                        name: yp.CHEVRON_UP
                    }),
                    iconSize: Us.SM,
                    className: R,
                    disabled: l || !o,
                    onBlur: () => {
                        L(_.previousResult)
                    }
                })), ke(cf, r(r({
                    "aria-live": "polite"
                }, sa(I)), {}, {
                    "aria-label": C,
                    "data-purpose": "increment-search",
                    icon: ke(Sv, {
                        name: yp.CHEVRON_DOWN
                    }),
                    iconSize: Us.SM,
                    className: R,
                    disabled: l || !o,
                    onBlur: () => {
                        T(_.nextResult)
                    }
                })), ke(cf, r(r({}, sa(S)), {}, {
                    "data-icon": "close",
                    "data-purpose": "close",
                    "aria-label": _.clearResults,
                    icon: ke(Sv, {
                        name: yp.CLOSE_CIRCLE,
                        "data-icon": "close"
                    }),
                    iconSize: Us.SM,
                    type: Gs.RESET,
                    className: R,
                    disabled: l
                }))]
            })]
        })
    }));
const pf = ["className", "size"],
    mf = e => {
        let {
            className: t = "",
            size: n = Ks.SM
        } = e, i = f(e, pf);
        const o = va($r.VP_SPIN, n === Ks.LG && "Spinner_module_lg__c0a9f13b", n === Ks.SM && "Spinner_module_sm__c0a9f13b", t);
        return ke(Sv, r({
            "data-component-type": "spinner",
            name: yp.SPINNER,
            className: `Spinner_module_spinner__c0a9f13b ${o}`
        }, i))
    };
const vf = ({
    cues: e,
    language: t,
    direction: n,
    className: i,
    fontSize: o,
    fontFamily: l,
    fontOpacity: s,
    color: c,
    windowOpacity: d,
    windowColor: u,
    bgOpacity: _,
    bgColor: p,
    edgeStyle: m,
    height: v,
    style: f = {}
}) => {
    const h = Wc(),
        E = (e, t) => {
            const n = new a(Vm[e] || e);
            return n.alpha = t / 100, n.rgba
        },
        g = r(r(r(r(r({}, {
            fontSize: `${(e=>Math.max(10,Math.round(.045*v*e)))(o)}px`
        }), (() => {
            const e = ((e, t) => h.fontFamily.items.find((e => e.id === t)))(0, l);
            return {
                fontVariant: "small_capitals" === e.id ? "small-caps" : "initial",
                fontFamily: e.value
            }
        })()), {
            color: E(c, s)
        }), (() => {
            const e = "0, 0, 0, " + Number(s) / 100;
            let t;
            switch (m) {
                case "shadow":
                    t = `2px 2px 2px rgba(${e})`;
                    break;
                case "outline":
                    t = `1px 0px 1px rgba(${e}), 0px 1px 1px rgba(${e}), -1px 0px 1px rgba(${e}), 0px -1px 1px rgba(${e})`;
                    break;
                case "raised":
                    t = `rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;
                    break;
                case "depressed":
                    t = `rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;
                    break;
                default:
                    t = "none"
            }
            return {
                textShadow: t
            }
        })()), f),
        b = r({}, {
            backgroundColor: E(u, d)
        }),
        C = r({}, {
            background: E(p, _)
        }),
        T = va($r.VP_CAPTIONS, "CaptionsRenderer_module_captions__f2659eec", i),
        y = (() => {
            let t = [];
            return e.forEach((e => {
                const n = e.html.split(/<br\s?\/?>/i).filter(Boolean);
                t = t.concat(n)
            })), t
        })();
    return ke("div", {
        className: T,
        "aria-live": "assertive",
        lang: t,
        dir: n,
        style: g,
        children: ke("span", {
            className: "CaptionsRenderer_module_captionsWindow__f2659eec",
            style: b,
            children: y.map((e => ke("span", {
                className: "CaptionsRenderer_module_captionsLine__f2659eec",
                style: C,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }, e)))
        })
    })
};
const ff = He((({
    children: e,
    className: t,
    style: n,
    role: i = "status",
    ariaLabelledby: o
}, r) => ke("div", {
    role: i,
    "aria-labelledby": o,
    className: `ToastBase_module_toast__fb6cbe17 ${t||""}`,
    ref: r,
    style: n,
    children: e
})));
const hf = () => ke("div", {
    className: "ToastDivider_module_divider__b81b458b"
});
const Ef = ["tooltipLabel", "icon", "onClick", "containerRef", "fullToast", "className", "onMouseEnter", "onMouseLeave"],
    gf = e => {
        let {
            tooltipLabel: t,
            icon: n,
            onClick: i,
            containerRef: o,
            fullToast: a,
            className: l,
            onMouseEnter: s,
            onMouseLeave: c
        } = e, d = f(e, Ef);
        const u = mv((e => e.appearance.playerBreakpoint)),
            _ = ["xl", "xxl"].includes(u) ? 16 : 8,
            p = va("ToastButton_module_toastButton__a3f96132", a && "ToastButton_module_fullToast__a3f96132", l);
        return t ? ke(jv, {
            tooltipContent: t,
            position: qv.BOTTOM,
            containerEl: o,
            margin: _,
            children: ke(cf, r({
                color: a ? Hs.PRIMARY : Hs.ALTERNATIVE,
                icon: n,
                onClick: i,
                onMouseEnter: s,
                onMouseLeave: c,
                className: p
            }, d))
        }) : ke(cf, r({
            color: a ? Hs.PRIMARY : Hs.ALTERNATIVE,
            icon: n,
            onClick: i,
            onMouseEnter: s,
            onMouseLeave: c,
            className: p
        }, d))
    },
    bf = {
        [xs.XXS]: Ws.MD,
        [xs.LG]: Ws.LG,
        [xs.XXL]: Ws.XL
    },
    Cf = ({
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i
    }) => ke(gf, {
        fullToast: !0,
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        children: ke(tf, {
            sizeMap: bf,
            children: i
        })
    });
const Tf = ({
    transitionTime: e,
    delay: t = 400,
    ariaLabelledby: n
}) => {
    const i = `width ${e-t}ms linear`,
        [o, r] = Pe({});
    return Oe((() => {
        const e = setTimeout((() => {
            r({
                transition: i,
                width: "100%"
            })
        }), t);
        return () => {
            clearTimeout(e)
        }
    }), [r, i, t]), ke("div", {
        className: "ToastProgress_module_progressWrapper__c722ee37",
        role: "progressbar",
        "aria-labelledby": n,
        children: ke("div", {
            className: "ToastProgress_module_progress__c722ee37",
            style: o
        })
    })
};
const yf = ({
    id: e,
    children: t,
    className: n
}) => {
    const i = va("ToastMessage_module_label__1715956e", n);
    return ke(tf, {
        id: e,
        weight: Ys.NORMAL,
        className: i,
        color: $s.WHITE,
        sizeMap: {
            [xs.XXS]: Ws.SM,
            [xs.SM]: Ws.MD,
            [xs.XL]: Ws.LG,
            [xs.XXL]: Ws.XL
        },
        children: t
    })
};
const Lf = ({
        onClick: e,
        describedBy: t,
        selected: n
    }) => ke(gf, {
        className: "CloseToastButton_module_close__cfcb6e11 " + (n ? "CloseToastButton_module_selected__cfcb6e11" : ""),
        icon: ke(Sv, {
            name: yp.DISMISS_X
        }),
        onClick: e,
        "aria-label": "Fechar",
        "aria-describedby": t
    }),
    Af = ({
        children: e,
        targetContent: t,
        onContentChange: n = Ua,
        delay: i = 250,
        styleOverrides: o,
        fadeIn: r = !0,
        fadeOut: a = !0
    }) => {
        const l = Re(null),
            [s, c] = Pe(t),
            d = t !== s,
            u = !d && !!t;
        if (d) {
            const e = d && !s ? 0 : i;
            l.current = function(e, i, o) {
                const r = new Promise((e => setTimeout((() => (c(t), n(t), e(void 0))), o)));
                return e ? e.then((() => r)) : r
            }(l.current, 0, e)
        }
        return ke(Ev, {
            fadeIn: r,
            fadeOut: a,
            visible: u,
            duration: i,
            styleOverrides: o,
            children: null == e ? void 0 : e(s)
        })
    };
let Sf = function(e) {
    return e.LOAD_TIMEOUT = "Load timeout", e
}({});
const If = 1e3,
    Of = 100 * Math.random() <= 100,
    Pf = [Ar.PLAYER_LOGIN_SUCCESSFUL, Ar.PLAYER_LOGIN_FAILED, Ar.COMPONENT_VISIBILITY_CHANGE, Ar.APP_BREAKPOINT_CHANGE],
    Rf = e => {
        const {
            id: t,
            url: n,
            title: i,
            visible: o,
            userLoggedIn: a,
            appBreakpoint: l,
            bigPicture: s,
            onIframeLoad: c = Ua,
            onError: d = Ua,
            onRemoteComponentReady: u = Ua,
            waitForReady: _ = !1,
            isAnimating: p = !1,
            timeout: m = If,
            className: v
        } = e, f = Re(!1), [h, E] = Pe(!1), [g, b] = Pe(!1), C = Re(ae()), T = Re(null), y = Re(null), L = va("RemoteComponent_module_remoteComponent__c2722e03", g && "RemoteComponent_module_loaded__c2722e03", v), A = Re(Date.now()), S = Ne((e => {
            f.current = !1, E(!0), d(e)
        }), [d]), I = Ne((() => {
            _ && b(!0), clearTimeout(y.current), u()
        }), [_, u]);
        Oe((function() {
            T.current && function(e, t, n) {
                const {
                    url: i,
                    onPlay: o = Ua,
                    onPause: r = Ua,
                    onSeek: a = Ua,
                    onClose: l = Ua,
                    onRemoteComponentReady: s = Ua,
                    onError: c = Ua
                } = e, d = rr(i);
                t.configureClient(n.contentWindow, d), t.extendMethods({
                    play: o,
                    pause: r,
                    set currentTime(e) {
                        a(e)
                    },
                    closeRemoteComponent: l,
                    remoteComponentReady: s,
                    reportRemoteComponentError: c
                }), Pf.forEach((function(e) {
                    t.listeners[e] = !0
                }))
            }(r(r({}, e), {}, {
                onRemoteComponentReady: I
            }), C.current, T.current)
        }), []), Oe((function() {
            clearTimeout(y.current), y.current = setTimeout((() => {
                g || (S({
                    message: Sf.LOAD_TIMEOUT,
                    code: 408
                }), s.sendEvent(Ml.REMOTE_COMPONENT_TIMEOUT, {
                    component_url: n,
                    component_timeout: m
                }))
            }), m)
        }), [g, m, n, S, s]), Oe((function() {
            a && C.current.emit(Ar.PLAYER_LOGIN_SUCCESSFUL)
        }), [a]), Oe((function() {
            o || document.activeElement !== T.current || T.current.blur(), p || C.current.emit(Ar.COMPONENT_VISIBILITY_CHANGE, o)
        }), [o, p]), Oe((function() {
            C.current.emit(Ar.APP_BREAKPOINT_CHANGE, l)
        }), [l]), Oe((function() {
            A.current = Date.now()
        }), [n]);
        const O = va("RemoteComponent_module_spinner__c2722e03", !g && !h && "RemoteComponent_module_visible__c2722e03");
        return ke(We, {
            children: [ke(mf, {
                className: O
            }), ke("iframe", {
                id: t,
                ref: T,
                onLoad: () => {
                    h || (f.current = !0, c(), Of && s.sendEvent(Ml.REMOTE_COMPONENT_LOADED, {
                        component_url: n,
                        component_load_time: Date.now() - A.current
                    }), _ || (clearTimeout(y.current), b(!0)))
                },
                title: i,
                src: n,
                className: L
            })]
        })
    },
    Nf = ["onPlay", "onPause", "onSeek", "url", "visible"],
    Df = e => {
        const {
            onPlay: t,
            onPause: n,
            onSeek: i,
            url: o,
            visible: a
        } = e, l = f(e, Nf), s = mv((e => e.setPlayback)), c = Ip((e => e.bigPicture)), d = mv((e => e.user.loggedIn)), u = mv((e => e.appearance.appBreakpoint)), _ = Ip((e => e.colors.colorOne)), p = Ip((e => e.colors.colorTwo)), m = Ip((e => e.colors.colorThree)), v = Ip((e => e.colors.colorFour)), [h, E] = Pe(wf(o, g()));

        function g() {
            return {
                loggedIn: d,
                appBreakpoint: u,
                visible: a,
                colorOne: _,
                colorTwo: p,
                colorThree: m,
                colorFour: v
            }
        }
        return Oe((function() {
            E(wf(o, g()))
        }), [o]), ke(Rf, r({
            userLoggedIn: d,
            onPlay: () => {
                s("paused", !1), null == t || t()
            },
            onPause: () => {
                s("paused", !0), null == n || n()
            },
            onSeek: e => {
                s("currentTime", e), null == i || i(e)
            },
            appBreakpoint: u,
            url: h,
            visible: a,
            bigPicture: c
        }, l))
    };

function wf(e, t) {
    const i = Object.keys(t).filter((e => void 0 !== t[e])),
        o = ye(t, i);
    return n(e, o)
}
const kf = ({
    playerBreakpoint: e
}) => {
    const t = [xs.XS, xs.XXS].includes(e),
        n = t ? yp.VIMEO_SMALL : yp.VIMEO,
        i = t ? "data-vimeo-small-icon" : "data-vimeo-icon";
    return ke(Sv, {
        name: n,
        "aria-hidden": !0,
        [i]: !0
    })
};
const Mf = ({
    url: e,
    className: t
}) => {
    const n = {
            backgroundImage: `url(${e})`
        },
        i = va("Image_module_image__2d6414b2", t);
    return ke("div", {
        className: i,
        style: n
    })
};
var Vf = "shared_module_shareTitle__b1d5c277",
    Bf = "shared_module_shareFootnote__b1d5c277";
const xf = ["embedCode", "onClick"],
    Uf = e => {
        let {
            embedCode: t,
            onClick: n
        } = e, i = f(e, xf);
        const [o, a] = Pe(!1), l = Re(null);
        return ke(cf, r(r({
            onClick: () => {
                a(!0), ca(t), n(), clearTimeout(l.current), l.current = setTimeout((function() {
                    a(!1)
                }), 2e3)
            },
            className: "CopyEmbedCodeButton_module_copyEmbedCodeButton__ac44b4e7"
        }, i), {}, {
            children: o ? "Copiado!" : "Copiar"
        }))
    },
    Hf = ({
        visible: e
    }) => {
        const t = mv((e => e.embed.allowEmbedShare)),
            n = mv((e => e.embed.embedCode)),
            i = mv((e => e.embed.videoUrl)),
            o = mv((e => e.displayList.outro)),
            r = mv((e => e.embed.embedOnlyShare)),
            a = Ip((e => e.bigPicture)),
            l = Re(null),
            s = {
                title: "Incorporação",
                subtitle: "Adicione este vídeo ao seu site com o código de incorporação abaixo.",
                customize: `<a href="${i}#embed" target="_blank" rel="noopener" aria-describedby="${zr.NEW_WINDOW_DESCRIPTION}"> Personalize esta incorporação </a> no Vimeo`
            },
            c = va("EmbedShare_module_embedShareContainer__fb691e4b", r && "EmbedShare_module_embedOnlyShare__fb691e4b", !e && "EmbedShare_module_hidden__fb691e4b"),
            d = Ne((e => {
                const t = o ? "end_screen" : "share_overlay";
                a.sendEvent(Ml.COPY_VIDEO_EMBED_CODE, {
                    location: `player_embed_${t}_${e}`,
                    path: window.location.pathname
                })
            }), [o, a]);
        return Oe((() => {
            l.current && l.current.setSelectionRange(0, n.length)
        }), [n]), t && ke(Ue, {
            duration: 200,
            alwaysMounted: !0,
            in: e,
            styles: Ff(),
            children: ke("section", {
                className: c,
                children: ke("div", {
                    children: [ke(tf, {
                        element: "h1",
                        color: $s.WHITE,
                        size: Ws.XL,
                        className: Vf,
                        children: s.title
                    }), ke(tf, {
                        element: "p",
                        color: $s.WHITE,
                        className: "EmbedShare_module_embedShareSubtitle__fb691e4b",
                        size: Ws.MD,
                        containsMarkup: !0,
                        children: s.subtitle
                    }), ke("div", {
                        className: "EmbedShare_module_embedShareEmbedCode__fb691e4b",
                        children: [ke("div", {
                            children: ke("input", {
                                onClick: e => {
                                    e.currentTarget.select()
                                },
                                onCut: () => d("keyboard"),
                                onCopy: () => d("keyboard"),
                                className: "EmbedShare_module_embedInput__fb691e4b",
                                readOnly: !0,
                                "aria-readonly": "true",
                                value: n,
                                ref: l
                            })
                        }), ke(Uf, {
                            embedCode: n,
                            onClick: () => d("button")
                        })]
                    }), ke(tf, {
                        element: "p",
                        size: Ws.MD,
                        className: `${Bf} EmbedShare_module_shareFootnote__fb691e4b`,
                        containsMarkup: !0,
                        children: s.customize
                    })]
                })
            })
        })
    };

function Ff() {
    const e = {
            transform: "translateX(125%)",
            opacity: 0
        },
        t = {
            transform: "translateX(-17%)",
            opacity: 1
        };
    return {
        enter: r({
            visibility: "hidden"
        }, e),
        enterActive: r({
            transition: "200ms",
            visibility: "visible"
        }, t),
        enterDone: {
            transform: "translateX(-17%)"
        },
        exit: r({}, t),
        exitActive: r(r({}, e), {}, {
            transition: "200ms"
        }),
        exitDone: {
            visibility: "hidden"
        }
    }
}
const Gf = {
        facebook: yp.FACEBOOK,
        twitter: yp.TWITTER,
        tumblr: yp.TUMBLR,
        email: yp.EMAIL,
        embed: yp.EMBED
    },
    Wf = {
        facebook: _i,
        twitter: pi,
        tumblr: mi,
        email: vi,
        embed: ai
    },
    Yf = {
        facebook: "Compartilhar no Facebook",
        twitter: "Compartilhar no Twitter",
        tumblr: "Compartilhar no Tumblr",
        email: "Compartilhe via Email",
        embed: "Obter código incorporado"
    },
    $f = He((({
        destination: e,
        onClick: t
    }, i) => {
        const o = mv((e => e.title.title)),
            r = mv((e => e.title.ownerName)),
            a = mv((e => e.embed.videoUrl)),
            l = mv((e => e.embed.playerShareUrl)),
            s = mv((e => e.embed.videoUnlistedHash)),
            c = mv((e => e.events)),
            d = Ip((e => e.embed.videoId)),
            u = mv((e => e.embed.embedOnlyShare)),
            _ = mv((e => !e.config.embed.on_site)),
            p = {
                emailSubject: "Confira “" + o + "” de " + r + " no Vimeo",
                emailBody: "Confira “" + o + "” de " + r + " no Vimeo.\n\nO vídeo está disponível para que você tenha o prazer de assisti-lo em " + mv((e => e.embed.shareUrlWithParams)) + "\n\nSe você gostar do vídeo, não se esqueça de compartilhá-lo também!\n\nO Vimeo está repleto de vídeos incríveis. Veja mais em https://vimeo.com."
            },
            m = Ne((e => {
                if ("email" === e) return `mailto:?subject=${encodeURIComponent(p.emailSubject)}&body=${encodeURIComponent(p.emailBody)}`;
                if ("embed" === e) return `${a}#share`;
                const t = "control" === Pu(d, u, !1) ? "nsc" : "",
                    i = {
                        p: Pl(_, "s")
                    };
                return t && (i.pgroup = t), s && (i.h = s), n(`${l}/${e}`, i)
            }), [l, s, a, p.emailBody, p.emailSubject, _, d, u]),
            v = Ne((n => {
                n.preventDefault(), c.fire(Wf[e], m(e)), t(e, n.currentTarget.href)
            }), [c, t]);
        return ke(Cv, {
            ref: i,
            className: "SocialShareLink_module_shareButton__5552a811",
            role: "button",
            href: m(e),
            onClick: v,
            ariaLabel: Yf[e],
            children: ke(Sv, {
                name: Gf[e]
            })
        })
    }));
var Kf = "SocialShare_module_shareButtonItem__8480906e";
const qf = ({
    visible: e,
    onEmbedClick: t
}) => {
    const n = mv((e => e.embed.allowEmbedShare)),
        i = mv((e => e.embed.shareUrl)),
        o = Re(null),
        r = Re(null),
        a = mv((e => e.embed.shareUrlWithParams)),
        l = va("SocialShare_module_shareButtons__8480906e"),
        s = va("SocialShare_module_socialShareContainer__8480906e", !e && "SocialShare_module_hidden__8480906e"),
        c = (e, n) => {
            "embed" !== e ? "email" !== e ? sr(n, e, {
                width: 600,
                height: 600
            }) : window.top.location = n : null == t || t()
        };
    return ke(Ue, {
        duration: 200,
        alwaysMounted: !0,
        in: e,
        styles: zf(),
        children: ke("section", {
            className: s,
            children: [ke(tf, {
                element: "h1",
                color: $s.WHITE,
                size: Ws.XL,
                className: Vf,
                children: "Compartilhar"
            }), ke("ul", {
                className: l,
                children: [ke("li", {
                    className: Kf,
                    children: ke($f, {
                        destination: "facebook",
                        onClick: c,
                        ref: o
                    })
                }), ke("li", {
                    className: Kf,
                    children: ke($f, {
                        destination: "twitter",
                        onClick: c
                    })
                }), ke("li", {
                    className: Kf,
                    children: ke($f, {
                        destination: "tumblr",
                        onClick: c
                    })
                }), a && ke("li", {
                    className: Kf,
                    children: ke($f, {
                        destination: "email",
                        onClick: c
                    })
                })]
            }), n && ke("ul", {
                className: l,
                children: ke("li", {
                    className: Kf,
                    children: ke($f, {
                        onClick: c,
                        destination: "embed",
                        ref: r
                    })
                })
            }), a && ke("p", {
                className: Bf,
                children: ke(Cv, {
                    className: "SocialShare_module_clipUrl__8480906e",
                    href: a,
                    children: i
                })
            })]
        })
    })
};

function zf() {
    const e = {
            transform: "translateX(-125%)",
            opacity: 0
        },
        t = {
            transform: "translateX(0)",
            opacity: 1
        };
    return {
        enter: r({
            visibility: "hidden"
        }, e),
        enterActive: r({
            transition: "200ms",
            visibility: "visible"
        }, t),
        exit: r({}, t),
        exitActive: r(r({}, e), {}, {
            transition: "200ms"
        }),
        exitDone: {
            visibility: "hidden"
        }
    }
}
const jf = ({
    onEmbedShareVisibilityChange: e
}) => {
    const t = mv((e => e.embed.embedOnlyShare)),
        [n, i] = Pe(t),
        o = va("Share_module_backButton__248d76cb", n && "Share_module_visible__248d76cb");
    return Oe((function() {
        t !== n && i(t)
    }), [t]), Oe((function() {
        null == e || e()
    }), [n]), ke(We, {
        children: [ke("div", {
            className: "Share_module_shareWrapper__248d76cb",
            children: [ke(qf, {
                visible: !n,
                onEmbedClick: () => i(!0)
            }), ke(Hf, {
                visible: n
            })]
        }), !t && ke(cf, r(r({
            className: o,
            onClick: () => i(!1),
            "aria-label": "Voltar",
            tabIndex: n ? 0 : -1
        }, zv), {}, {
            children: ke(Sv, {
                className: "Share_module_backButtonIcon__248d76cb",
                name: yp.PREVIOUS
            })
        }))]
    })
};
const Xf = {
        enter: {
            opacity: 0,
            animation: "wiggle 300ms linear 1"
        },
        enterActive: {
            opacity: 1,
            transition: "opacity 300ms",
            animation: "wiggle 300ms linear 1"
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: "opacity 300ms"
        },
        exitDone: {
            display: "none"
        }
    },
    Zf = ({
        message: e,
        visible: t,
        wrapperEl: n
    }) => {
        const [i, o] = Pe(t), r = n && or(n);
        return Oe((() => {
            let e;
            return clearTimeout(e), t ? (o(!0), e = setTimeout((() => {
                o(!1)
            }), 5e3)) : o(!1), () => clearTimeout(e)
        }), [t]), ke(Ue, { in: i,
            styles: Xf,
            children: ke("div", {
                className: "ValidationBubble_module_validationBubble__74475ac4",
                style: {
                    top: (null == r ? void 0 : r.height) + 4 + "px"
                },
                children: ke(tf, {
                    weight: Ys.BOLD,
                    className: "ValidationBubble_module_message__74475ac4",
                    children: e
                })
            })
        })
    };
const Jf = () => {
    const e = Ip((e => e.error.title)),
        t = Ip((e => e.error.message));
    return ke("div", {
        className: "Error_module_error__b5478ed7",
        "aria-live": "assertive",
        role: "alert",
        "data-error": !0,
        children: [e && ke(tf, {
            element: "h1",
            className: "Error_module_header__b5478ed7",
            weight: Ys.BOLD,
            children: e
        }), t && ke(tf, {
            className: "Error_module_description__b5478ed7",
            weight: Ys.NORMAL,
            containsMarkup: !0,
            children: t
        })]
    })
};
const Qf = He(((e, t) => {
    const n = mv((e => e.setOverlay)),
        i = sa((e => {
            e.preventDefault(), n("purpose", Sa.EMPTY)
        }));
    return ke("button", r(r(r({
        ref: t,
        className: `CloseOverlayButton_module_closeOverlayButton__bc0b3ddc ${of.focusableButton}`,
        "aria-label": "Fechar sobreposição"
    }, zv), i), {}, {
        "data-close-overlay": !0,
        children: ke(Sv, {
            name: yp.CLOSE
        })
    }))
}));
const eh = ({
        children: e,
        visible: t,
        style: n
    }) => {
        const i = Re(null),
            o = Re(null),
            r = mv((e => e.setOverlay)),
            a = mv((e => e.overlay.purpose)),
            l = mv((e => e.overlay.overlayElementsUpdatedCount)),
            s = Ke(e).length > 0,
            {
                onFocus: c,
                focusFirstItem: d
            } = gp({
                parentRef: o,
                isActive: t && s,
                onEscape: () => r("purpose", Sa.EMPTY)
            }),
            u = va("OverlayBase_module_overlay__b0cfa26d", t && "OverlayBase_module_visible__b0cfa26d");
        return Oe((function() {
            d()
        }), [l]), Oe((function() {
            !Ia(a) && t && d()
        }), [a, t]), ke("div", {
            ref: o,
            onFocus: c,
            className: "OverlayBase_module_overlayWrapper__b0cfa26d " + (t ? "" : "OverlayBase_module_hidden__b0cfa26d"),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": zr.VP_OVERLAY_LABELLEDBY,
            "data-content-area-sibling-eligible": !0,
            style: n,
            "data-overlay": !0,
            children: [ke("div", {
                className: "OverlayBase_module_overlayCell__b0cfa26d",
                children: ke("div", {
                    className: u,
                    children: e
                })
            }), ke("nav", {
                className: "OverlayBase_module_overlayNav__b0cfa26d",
                children: ke(Qf, {
                    ref: i
                })
            })]
        })
    },
    th = ["label", "icon", "onClick", "className", "children"],
    nh = He(((e, t) => {
        let {
            label: n,
            icon: i,
            onClick: o,
            className: a = "",
            children: l
        } = e, s = f(e, th);
        const c = mv((e => e.displayList.sideDock));
        return ke(cf, r(r({
            tabIndex: c ? 0 : -1,
            ref: t,
            size: Us.SM,
            color: Hs.PRIMARY,
            icon: i,
            iconSize: Us.SM,
            "aria-label": n,
            onClick: o,
            className: a
        }, s), {}, {
            children: l
        }))
    })),
    ih = () => {
        const {
            enabled: e,
            icon: t,
            label: n,
            onSelect: i
        } = Ap();
        return e && ke(gv, {
            text: n,
            children: ke(nh, {
                label: n,
                onClick: i,
                icon: ke(Sv, {
                    name: t,
                    focusable: "false"
                })
            })
        })
    },
    oh = () => {
        const e = mv((e => e.user.liked)),
            {
                label: t,
                ariaLabel: n,
                enabled: i,
                icon: o,
                onSelect: r
            } = jp();
        return i && ke(gv, {
            text: t,
            children: ke(nh, {
                label: n,
                className: Kr.LIKE_BUTTON,
                on: e,
                icon: ke(Sv, {
                    name: o,
                    className: $r.LIKE_ICON,
                    focusable: "false"
                }),
                "data-like-button": !0,
                onClick: r
            })
        })
    };
const rh = () => {
    const {
        label: e,
        icon: t,
        onSelect: n,
        enabled: i
    } = Zp();
    return i && ke(gv, {
        text: e,
        children: ke(nh, {
            label: e,
            "data-share-button": !0,
            onClick: n,
            icon: ke(Sv, {
                name: t,
                className: "share-icon ShareButton_module_shareIcon__e4957da4",
                focusable: "false"
            })
        })
    })
};
const ah = () => {
        const e = mv((e => e.vod.purchased)),
            t = mv((e => e.vod.isExpiring)),
            {
                onSelect: n,
                enabled: i,
                icon: o,
                label: a
            } = Jp(),
            l = sa(n);
        return i && ke("div", r(r({}, l), {}, {
            className: "VODButton_module_vodButtonContainer__33b65469 " + (t ? "VODButton_module_expiring__33b65469" : ""),
            "data-vod-expiring": t,
            "data-vod-purchased": e,
            "data-vod-button": !0,
            children: ke(cf, {
                size: Us.SM,
                color: Hs.PRIMARY,
                iconPosition: Fs.RIGHT,
                className: va(Kr.VOD_BUTTON, "VODButton_module_vodButton__33b65469"),
                "data-vod-button": !0,
                icon: ke(Sv, {
                    name: o,
                    className: va("VODButton_module_icon__33b65469"),
                    "data-vod-icon": !0
                }),
                iconSize: Us.SM,
                children: ke("span", {
                    "data-vod-button-label": !0,
                    children: a
                })
            })
        }))
    },
    lh = () => {
        const e = mv((e => e.user.watchLater)),
            {
                enabled: t,
                label: n,
                ariaLabel: i,
                onSelect: o,
                icon: r
            } = em();
        return t && ke(gv, {
            text: n,
            children: ke(nh, {
                label: i,
                className: Kr.WATCH_LATER_BUTTON,
                on: e,
                onClick: o,
                icon: ke(Sv, {
                    name: r,
                    className: $r.WATCH_LATER_ICON,
                    focusable: "false"
                }),
                "data-watch-later-button": !0
            })
        })
    };
var sh = "AIButton_module_button__51e5bbdf";
const ch = () => {
        const [e, t] = Pe(!1), [n, i] = Pe(!1), o = Re(null), a = mv((e => e.displayList.aiWidget)), l = Re(null), s = Re(!1), {
            label: c,
            onSelect: d,
            enabled: u,
            icon: _
        } = Lp(), p = a ? [Xr.AI_WIDGET_ID, zr.RIGHT_CONTENT_AREA].join(" ") : zr.RIGHT_CONTENT_AREA;
        Oe((() => {
            function e() {
                document.activeElement.id === Xr.AI_WIDGET_ID && (s.current = !0)
            }
            return window.addEventListener("blur", e), () => {
                window.removeEventListener("blur", e)
            }
        }), []), ap("Tab", (e => {
            const t = document.activeElement === document.body;
            var n;
            s.current && t && (e.preventDefault(), s.current = !1, null == (n = l.current) || n.focus())
        }));
        const m = () => {
                clearTimeout(o.current), t(!1), i(!0)
            },
            v = () => {
                clearTimeout(o.current), i(!1), t(!0), o.current = setTimeout((function() {
                    t(!1)
                }), 420)
            },
            f = va(sh, n && "AIButton_module_transitionIn__51e5bbdf", e && "AIButton_module_transitionOut__51e5bbdf"),
            h = {
                backgroundColor: "rgb(0,0,0,0.9)",
                transitionProperty: n || e ? "background-position" : "none"
            };
        return u && ke(We, {
            children: [ke("style", {
                children: `\n                    .${sh} {\n                        --shimmer-speed-in: 450ms;\n                        --shimmer-speed-out: 420ms;\n                    }\n                `
            }), ke(gv, {
                text: c,
                children: ke(nh, r({
                    label: c,
                    "data-ai-button": !0,
                    onClick: d,
                    ref: l,
                    className: f,
                    "aria-expanded": a,
                    "aria-controls": p,
                    "aria-haspopup": "true",
                    onFocus: m,
                    onBlur: v,
                    onPointerEnter: e => {
                        "mouse" === e.pointerType && m()
                    },
                    onPointerLeave: e => {
                        "mouse" === e.pointerType && v()
                    },
                    style: h,
                    icon: ke(Sv, {
                        fill: "#fff",
                        name: _,
                        focusable: "false",
                        className: "AIButton_module_icon__51e5bbdf"
                    })
                }, zv))
            })]
        })
    },
    dh = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n
    }) => {
        const i = nm(),
            o = "Mais opções",
            r = Object.keys(i).filter((e => i[e].enabled)).map((e => {
                const t = i[e];
                return {
                    id: e,
                    label: t.label,
                    icon: t.icon
                }
            }));
        return ke(Nv, {
            type: Q_.SIDEDOCK,
            ariaLabel: o,
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: ep.SIDEDOCK,
            panelContent: ke(Gv, {
                items: r,
                onSelect: e => {
                    const t = e.currentTarget.dataset.id;
                    (0, i[t].onSelect)(e)
                }
            }),
            headerContent: ke(Mv, {
                title: o,
                onClose: () => t(!1),
                forceModalMenu: !0
            }),
            forceModalMenu: !0,
            buttonRef: n
        })
    },
    uh = He((({
        onClick: e,
        isMenuDisplayed: t
    }, n) => {
        const i = nm(),
            o = "Mais opções";
        return Object.values(i).filter((e => e.enabled)).length ? ke(gv, {
            text: o,
            children: ke(nh, {
                ref: n,
                label: o,
                onClick: e,
                icon: ke(Sv, {
                    name: yp.VERTICAL_ELLIPSIS,
                    focusable: "false"
                }),
                ariaHaspopup: "modal",
                ariaExpanded: t
            })
        }) : null
    })),
    _h = () => {
        const e = Re(null),
            t = mv((e => e.displayList.sideDock)),
            n = mv((e => e.appearance.fullscreen)),
            i = mv((e => e.displayList.outro)),
            o = mv((e => e.vod.purchased)),
            a = mv((e => e.displayList.menu)),
            l = mv((e => e.setAppearance)),
            s = mv((e => e.setDisplayList)),
            c = Jp(),
            d = _p(qs.SIDE_DOCK_MENU),
            [u, _] = Pe(!1),
            p = e => {
                s("menu", e), _(e)
            };
        a || _(!1);
        const m = {
            className: va($r.VP_SIDEDOCK, "SideDock_module_root__0918b45a", t && "SideDock_module_visible__0918b45a", i && "SideDock_module_outroVisible__0918b45a", n && "SideDock_module_fullscreen__0918b45a"),
            onPointerEnter: () => l("mousedOverSidedock", !0),
            onMouseEnter: () => l("mousedOverSidedock", !0),
            onPointerLeave: () => l("mousedOverSidedock", !1),
            onMouseLeave: () => l("mousedOverSidedock", !1)
        };
        return ke(wv, {
            children: [ke("div", r(r({}, m), {}, {
                "data-sidedock": !0,
                children: [c.enabled && !o && ke(ah, {}), ke(Ev, {
                    visible: t,
                    children: ke("div", {
                        className: "SideDock_module_sidedockInner__0918b45a",
                        "data-sidedock-inner": !0,
                        children: d ? ke(uh, {
                            ref: e,
                            onClick: () => p(!0),
                            isMenuDisplayed: u
                        }) : ke(We, {
                            children: [c.enabled && o && ke(ah, {}), ke(oh, {}), ke(lh, {}), ke(ih, {}), ke(rh, {}), ke(ch, {})]
                        })
                    })
                })]
            })), d && ke(dh, {
                isMenuDisplayed: u,
                setMenuDisplayed: p,
                buttonRef: e
            })]
        })
    };
let ph = function(e) {
        return e.MARKER_SEEKED = "seeked", e.MARKER_ENDED = "ended", e.MARKER_UPSWITCH = "upswitch", e.MARKER_DOWNSWITCH = "downswitch", e.MARKER_SWITCH_COMPLETE = "switchcomplete", e.MARKER_RESIZE = "resize", e.MARKER_SCANNER_CHANGE = "scannerchange", e.MARKER_FILE_CHANGE = "filechange", e.MARKER_STALLED = "stalled", e.MARKER_BUFFER_GAP_JUMP = "buffergapjump", e.MARKER_BUFFER_GAP_JUMP_PREVENT = "buffergapjumpprevent", e.MARKER_STALL_JUMP = "stalljump", e
    }({}),
    mh = function(e) {
        return e.MARKER_SEEKED = "#0088cc", e.MARKER_ENDED = "#503873", e.MARKER_UPSWITCH = "#5a9e02", e.MARKER_DOWNSWITCH = "#d93636", e.MARKER_RESIZE = "#FF8A00", e.MARKER_SCANNER_CHANGE = "#e9ff00", e.MARKER_FILE_CHANGE = "#b5d3e2", e.MARKER_STALLED = "#f44283", e
    }({});
const vh = Object.entries(ph).reduce(((e, [t, n]) => (e[n] = mh[t], e)), {}),
    fh = ({
        max: e = 1,
        timeSeries: t = [],
        debugMarkers: n = []
    }) => {
        const i = t.length,
            o = i < 100 ? 0 : i - 100,
            r = t[o],
            a = t[i - 1],
            l = r ? r.time : 0,
            s = a ? a.time : 0,
            c = t.slice(o).map((t => {
                let n = (t.time - l) / (s - l) * 250,
                    i = 14 - 14 * t.value / e;
                return isNaN(i) && (i = 0), isNaN(n) && (n = 0), `${n},${function(e){return Math.min(Math.max(e,0),14)}(i)}`
            })).join(" ");
        return ke("svg", {
            width: 250,
            height: 14,
            viewBox: "0 0 250 14",
            children: [ke("g", {
                children: ke("polyline", {
                    stroke: "white",
                    fill: "none",
                    points: c
                })
            }), ke("g", {
                children: !!n.length && n.filter((e => e.t >= l && e.t <= s)).map(((e, t) => {
                    let n = (e.t - l) / (s - l) * 250;
                    return isNaN(n) && (n = 0), ke("g", {
                        children: ke("line", {
                            className: "BandwidthSeriesDisplay_module_marker__e795ff85",
                            x1: n,
                            y1: "0",
                            x2: n,
                            y2: 14,
                            strokeWidth: "1",
                            stroke: vh[e.type]
                        })
                    }, `${e.t}-${t}`)
                }))
            })]
        })
    };
const hh = ({
        title: e = "",
        value: t
    }) => ke("div", {
        children: [ke("dt", {
            children: e
        }), ke("dd", {
            children: t
        })]
    }),
    Eh = ({
        payloadId: e,
        showSessionId: t
    }) => {
        const n = mv((e => e.debug.codec)),
            i = mv((e => e.debug.isLive)),
            o = mv((e => e.debug.isDash)),
            a = mv((e => e.debug.delivery)),
            l = mv((e => e.debug.resolution)),
            s = mv((e => e.debug.embedSize)),
            c = mv((e => e.playback.drm)),
            d = mv((e => e.debug.sessionId)),
            u = mv((e => e.debug.ecdnVendor)),
            _ = mv((e => e.debug.p2pSources)),
            p = mv((e => e.debug.p2pOffload)),
            m = mv((e => e.debug.totalFrames)),
            v = mv((e => e.debug.liveLatency)),
            f = mv((e => e.debug.currentTime)),
            h = mv((e => e.debug.bufferEnd)),
            E = mv((e => e.debug.bufferAhead)),
            g = mv((e => e.debug.bufferTarget)),
            b = mv((e => e.debug.presentationDelay)),
            C = mv((e => e.debug.droppedFrames)),
            T = mv((e => e.debug.vrHeadsetName)),
            y = mv((e => e.debug.liveSessionID)),
            L = mv((e => e.debug.bandwidthKbps)),
            A = mv((e => e.debug.bandwidthMinKbps)),
            S = mv((e => e.debug.bandwidthMaxKbps)),
            I = mv((e => e.debug.separateAudioVideo)),
            O = mv((e => e.debug.bandwidthSeriesData)),
            P = mv((e => e.debug.droppedFramesPercent)),
            R = mv((e => e.debug.clipId)),
            {
                max: N,
                debugMarkers: D,
                timeSeries: w
            } = O;
        return ke("dl", {
            className: "DebugValues_module_values__54d9bb7b",
            children: [R && ke("div", r(r({}, sa((() => {
                ca(`${R}`)
            }))), {}, {
                children: [ke("dt", {
                    children: "Clip ID:"
                }), ke("br", {}), ke("dd", {
                    className: "DebugValues_module_clipId__54d9bb7b",
                    children: R
                })]
            })), !!a && ke(hh, {
                title: "Delivery:",
                value: a
            }), !!n && ke(hh, {
                title: "Codec:",
                value: n
            }), !!l && ke(hh, {
                title: "Playing:",
                value: l
            }), !!s && ke(hh, {
                title: "Embed Size:",
                value: s
            }), o && ke(hh, {
                title: "Separate AV:",
                value: `${I}`
            }), (o || i) && ke(hh, {
                title: "Dropped Frames:",
                value: `${C} / ${m} - ${P}`
            }), !!T && ke(hh, {
                title: "VR Hardware:",
                value: T
            }), !!u && ke(We, {
                children: [ke(hh, {
                    title: "eCDN Vendor:",
                    value: u
                }), ke(hh, {
                    title: "Peers - P2P Delivery:",
                    value: `${_} - ${p}`
                })]
            }), c && ke(hh, {
                title: "DRM:",
                value: c.toString()
            }), i && ke(We, {
                children: [!!y && ke(hh, {
                    title: "Live Session ID:",
                    value: y
                }), ke(hh, {
                    title: "Live Latency / Target:",
                    value: `${v} / ${b}`
                })]
            }), ke(hh, {
                title: "Playhead / Buffer End:",
                value: `${f} / ${h}`
            }), !!g && ke(hh, {
                title: "Buffer Ahead / Target:",
                value: `${E} / ${g}`
            }), (o || i) && ke(We, {
                children: [ke(hh, {
                    title: "Bandwidth:",
                    value: L
                }), ke("div", {
                    className: "DebugValues_module_bandwidthMinMax__54d9bb7b",
                    children: ["(", ke("b", {
                        className: "DebugValues_module_bandwidthMin__54d9bb7b",
                        children: A
                    }), ke("b", {
                        className: "DebugValues_module_bandwidthMax__54d9bb7b",
                        children: S
                    }), ")"]
                }), ke("div", {
                    className: "DebugValues_module_timeSeries__54d9bb7b",
                    children: ke(fh, {
                        max: N,
                        debugMarkers: D,
                        timeSeries: w
                    })
                })]
            }), d && t && ke("div", {
                children: [ke("dt", {
                    children: "Key:"
                }), ke("br", {}), ke("dd", {
                    className: "DebugValues_module_sessionId__54d9bb7b",
                    children: d
                })]
            }), e && ke("div", {
                children: [ke("dt", {
                    children: "Debug Key:"
                }), ke("br", {}), ke("dd", {
                    className: "DebugValues_module_payloadId__54d9bb7b",
                    children: e
                })]
            })]
        })
    };
var gh = "DebugPanel_module_button__f18a1b0a";
const bh = ["bandwidthSeriesData"];

function Ch() {}
let Th;
const yh = He((({
        onCopyFailed: e,
        labelResetDelay: t,
        className: n
    }, i) => {
        const [o, r] = Pe(!1), a = mv((e => e.debug)), {
            bandwidthSeriesData: l
        } = a, s = f(a, bh), c = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            const n = {
                version: 2,
                tpl: s,
                mark: l.debugMarkers
            };
            return clearTimeout(Th),
                function(e) {
                    if (e && e.then) return e.then(Ch)
                }(function(o, a) {
                    try {
                        var l = function() {
                            const o = btoa(JSON.stringify(n));
                            return function(e, t) {
                                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                            }(ca(o), (function(n) {
                                n ? (r(!0), Th = setTimeout((() => {
                                    clearTimeout(Th), r(!1)
                                }), t)) : e(), i.current.focus()
                            }))
                        }()
                    } catch (ke) {
                        return a()
                    }
                    return l && l.then ? l.then(void 0, a) : l
                }(0, (function(t) {
                    e()
                })))
        }));
        return ke(cf, {
            ref: i,
            className: n,
            onClick: c,
            children: o ? "Copied" : "Copy Debug Payload"
        })
    })),
    Lh = ["bandwidthSeriesData"];
let Ah;

function Sh() {}
const Ih = ({
        onSendSuccess: e,
        labelResetDelay: t,
        className: n
    }) => {
        const {
            player_url: i,
            request: o
        } = mv((e => e.config)), [r, a] = Pe(!1), [l, s] = Pe(!1), c = mv((e => e.debug)), {
            bandwidthSeriesData: d
        } = c, u = f(c, Lh), {
            signature: _,
            expires: p,
            timestamp: m
        } = o, v = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            const {
                clipId: n,
                payloadId: o
            } = u, r = `https://${i}/debug_payload/${n}/${o}?s=${_}&expires=${p}&time=${m}`, l = {
                version: 2,
                tpl: u,
                mark: d.debugMarkers
            };
            return clearTimeout(Ah),
                function(e) {
                    if (e && e.then) return e.then(Sh)
                }(function(t, n) {
                    try {
                        var i = function(e, t) {
                            try {
                                var n = e()
                            } catch (ke) {
                                return t(ke)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return function(e, t) {
                                return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                            }(ze({
                                url: r,
                                method: "post",
                                json: l,
                                timeout: 1e4
                            }).json(), (function({
                                ID: t
                            }) {
                                e(t), a(!0)
                            }))
                        }), (function() {
                            s(!0)
                        }))
                    } catch (ke) {
                        return n(!0, ke)
                    }
                    return i && i.then ? i.then(n.bind(null, !1), n.bind(null, !0)) : n(!1, i)
                }(0, (function(e, n) {
                    return Ah = setTimeout((() => {
                            clearTimeout(Ah), a(!1), s(!1)
                        }), t),
                        function(e, t) {
                            if (e) throw t;
                            return t
                        }(e, n)
                })))
        }));
        let h = "Send Debug Payload";
        return r ? h = "Sent" : l && (h = "Something Went Wrong"), ke(cf, {
            className: n,
            onClick: v,
            children: h
        })
    },
    Oh = () => {
        const e = mv((e => e.appearance.playerBreakpoint)),
            t = mv((e => e.displayList.debugPanel)),
            n = mv((e => e.setDisplayList)),
            i = mv((e => e.debug.isDNTEnabled)),
            o = mv((e => e.debug.hideCloseButton)),
            a = mv((e => e.debug.isCopyDisabled)),
            [l, s] = Pe(void 0),
            [c, d] = Pe(!1),
            u = Re(null),
            _ = Re(null),
            p = Re(null),
            m = e => n("debugPanel", e),
            v = !o,
            f = !a,
            h = va("DebugPanel_module_root__f18a1b0a", of .roundedBox, (e === xs.XS || e === xs.XXS) && "DebugPanel_module_smallPlayer__f18a1b0a"),
            {
                onFocus: E
            } = gp({
                parentRef: u,
                isActive: t,
                onEscape: () => {
                    m(!1)
                }
            });
        return t && ke("div", {
            ref: u,
            className: h,
            role: "dialog",
            "aria-label": "Registro de depuração",
            onFocus: E,
            children: [ke(Eh, {
                payloadId: l,
                showSessionId: c
            }), f && ke("div", {
                className: "DebugPanel_module_buttonWrapper__f18a1b0a",
                children: [ke(yh, {
                    labelResetDelay: 1500,
                    onCopyFailed: () => d(!0),
                    className: gh,
                    ref: p
                }), ke(Ih, {
                    labelResetDelay: 1500,
                    onSendSuccess: e => s(e),
                    className: gh
                })]
            }), v && ke("button", r(r({}, sa((() => m(!1)))), {}, {
                className: "DebugPanel_module_closeButton__f18a1b0a",
                "aria-label": "Close stats debug panel",
                ref: _,
                children: ke(Sv, {
                    name: yp.DISMISS_X
                })
            })), !!i && "No Debug Key available as Do Not Track is enabled."]
        })
    };
const Ph = () => {
    const {
        link: e,
        img: t,
        margin: n,
        width: i,
        height: o,
        name: r,
        id: a
    } = mv((e => e.badge)), l = mv((e => e.setBadge)), s = mv((e => e.displayList.badge)), c = "Distintivo " + r, d = {};
    return n && Object.assign(d, {
        margin: n
    }), ke(Ev, {
        visible: s,
        children: ke("div", {
            className: "Badge_module_badge__7943985c",
            style: d,
            "data-badge": !0,
            children: ke(Cv, {
                href: e,
                onClick: () => l("id", a),
                targetBlank: !0,
                className: `Badge_module_badgeLink__7943985c ${of.focusable}`,
                children: ke("img", {
                    src: t,
                    width: i,
                    height: o,
                    alt: c
                })
            })
        })
    })
};
const Rh = ({
    clip: e,
    is360: t,
    hasHDRNot10Plus: n,
    hasHDR10Plus: i,
    hasDolbyVision: o,
    hasAIContent: r,
    hasSurroundSound: a,
    hasAmbosonic: l,
    channelLayout: s,
    className: c
}) => {
    const d = va("TitleTags_module_tag__68bba8ae", c);
    return ke("div", {
        className: "TitleTags_module_tagWrapper__68bba8ae",
        children: [e && ke("span", {
            className: d,
            children: "Clipe"
        }), t && ke("span", {
            className: d,
            children: l ? "360 ambisonic" : "360"
        }), n && ke("span", {
            className: d,
            children: "HDR"
        }), i && ke("span", {
            className: d,
            children: "HDR10+"
        }), o && ke("span", {
            className: `${d} TitleTags_module_dolbyVisionTag__68bba8ae`,
            children: ke(Sv, {
                name: yp.DOLBY_VISION
            })
        }), r && ke(Cv, {
            href: "https://help.vimeo.com/hc/en-us/articles/25551485186833/",
            className: `${d} TitleTags_module_aiTag__68bba8ae`,
            "data-ai-content-tag": "true",
            children: "Inclui IA"
        }), a && ke("span", {
            className: d,
            children: s
        })]
    })
};
const Nh = () => {
    const e = mv((e => e.title.displayTitle)),
        t = mv((e => e.title.displayPortrait)),
        n = mv((e => e.title.ownerLinkUrl)),
        i = mv((e => e.title.targetBlank)),
        o = mv((e => e.title.portraitImg)),
        a = mv((e => e.title.titleLinkUrl)),
        l = mv((e => e.title.title)),
        s = mv((e => e.title.ownerName)),
        c = mv((e => e.title.is360)),
        d = mv((e => e.title.hasHDR)),
        u = mv((e => e.title.hasHDR10Plus)),
        _ = mv((e => e.title.hasDolbyVision)),
        p = mv((e => e.title.channelLayout)),
        m = mv((e => e.title.bylineLinkUrl)),
        v = mv((e => e.title.displayByline)),
        f = mv((e => e.title.hasAIContent)),
        h = "5.1" === p || "7.1" === p,
        E = p.startsWith("ambisonic"),
        g = mv((e => e.displayList.title)),
        b = mv((e => e.embed.badge)),
        C = mv((e => e.displayList.badge)),
        [T, y] = Pe(t && !C),
        L = mv((e => e.playback.isSegmentedPlaybackEnabled)),
        A = mv((e => e.bigPicture)),
        S = {
            is360: c,
            hasHDRNot10Plus: d && !u,
            hasHDR10Plus: u,
            hasDolbyVision: _,
            hasAIContent: f,
            hasSurroundSound: h,
            clip: L
        },
        I = Object.values(S).some(Boolean);
    return Oe((() => {
        let e;
        return !C && t ? e = setTimeout((() => y(!0)), s_) : y(!1), () => clearTimeout(e)
    }), [C, t]), ke(We, {
        children: [b && ke(Ph, {}), ke(Ev, {
            visible: g,
            children: ke("div", {
                className: `${$r.VP_TITLE} Title_module_title__296cb5dd`,
                role: "presentation",
                children: ke("header", {
                    className: "Title_module_header__296cb5dd",
                    role: "presentation",
                    children: [T && ke("div", {
                        className: "Title_module_portrait__296cb5dd",
                        children: ke(Cv, {
                            href: n,
                            targetBlank: i,
                            variant: "minimal",
                            className: va("Title_module_portraitLink__296cb5dd", of .focusableCircle),
                            tabIndex: g ? 0 : -1,
                            onClick: () => A.sendEvent(Ml.SELECT_PLAYER_PROFILE_PHOTO, {}, {
                                [Vl.WEB]: {
                                    target: "profile page",
                                    target_path: n,
                                    copy: null
                                },
                                [Vl.PRODUCT_ANALYTICS]: {
                                    flow: "profile_page_from_embed_player",
                                    element: "icon",
                                    copy: "portrait"
                                }
                            }),
                            children: ke("img", {
                                src: o,
                                alt: "Link para o perfil do proprietário do vídeo",
                                width: "60",
                                height: "60",
                                "data-trackClick": Ct
                            })
                        })
                    }), ke("div", {
                        className: "Title_module_headers__296cb5dd",
                        children: [e && ke("div", {
                            className: "Title_module_titleWrapper__296cb5dd",
                            children: [ke(Cv, {
                                href: a,
                                targetBlank: i,
                                "data-track-click": gt,
                                variant: "minimal",
                                className: va("Title_module_titleLink__296cb5dd", of .focusable),
                                tabIndex: g ? 0 : -1,
                                "aria-labelledby": Jr.TITLE_TEXT,
                                onClick: () => A.sendEvent(Ml.SELECT_PLAYER_TITLE, {}, {
                                    [Vl.WEB]: {
                                        target: "viewer home",
                                        target_path: a,
                                        copy: l
                                    },
                                    [Vl.PRODUCT_ANALYTICS]: {
                                        flow: "viewer_home_from_embed_player",
                                        element: "button",
                                        copy: "title"
                                    }
                                })
                            }), ke("div", {
                                className: "Title_module_textAndTagsWrapper__296cb5dd",
                                "data-title-tags": !!I || void 0,
                                children: [ke(tf, {
                                    id: Jr.TITLE_TEXT,
                                    className: va("Title_module_titleText__296cb5dd"),
                                    children: l
                                }), ke(Rh, r(r({}, S), {}, {
                                    hasAmbosonic: E,
                                    channelLayout: p,
                                    className: "Title_module_titleTag__296cb5dd"
                                }))]
                            })]
                        }), v && ke(Cv, {
                            href: m,
                            targetBlank: i,
                            variant: "minimal",
                            className: va("Title_module_subtitle__296cb5dd", of .focusable),
                            tabIndex: g ? 0 : -1,
                            onClick: () => A.sendEvent(Ml.SELECT_PLAYER_BYLINE, {}, {
                                [Vl.WEB]: {
                                    target: "profile page",
                                    target_path: m,
                                    copy: s
                                },
                                [Vl.PRODUCT_ANALYTICS]: {
                                    flow: "profile_page_from_embed_player",
                                    element: "button",
                                    copy: "byline"
                                }
                            }),
                            children: ke(tf, {
                                children: s
                            })
                        })]
                    })]
                })
            })
        })]
    })
};
var Dh = "Card_module_text__449914f1";
const wh = ({
    id: e,
    timecode: t,
    className: n,
    teaser: i,
    url: o,
    imageUrl: r,
    headline: a,
    inView: l
}) => {
    const s = mv((e => e.appearance.isVerticalVideo)),
        c = mv((e => e.setCards)),
        d = mv((e => e.setPlayback)),
        u = () => {
            c("hoveredCard", null), c("cardPressed", e), o && d("paused", !0)
        },
        _ = va("Card_module_card__449914f1", n, l && "Card_module_active__449914f1", r && "Card_module_hasThumbnail__449914f1", s && "Card_module_vertical__449914f1");
    return ke("div", {
        className: _,
        onMouseEnter: () => c("hoveredCard", t),
        onMouseLeave: () => c("hoveredCard", null),
        onClick: u,
        onKeyUp: e => {
            "Enter" === e.key && u()
        },
        role: "link",
        tabIndex: -1,
        "aria-hidden": !l,
        children: ke(Cv, {
            href: o,
            className: "Card_module_inner__449914f1",
            tabIndex: l ? 0 : -1,
            children: [!!r && ke("div", {
                className: "Card_module_imageWrap__449914f1",
                children: ke("img", {
                    className: "Card_module_image__449914f1",
                    src: r,
                    alt: ""
                })
            }), ke("div", {
                className: "Card_module_body__449914f1",
                children: [ke(tf, {
                    size: Ws.MD,
                    className: va(Dh, "Card_module_title__449914f1"),
                    color: $s.WHITE,
                    children: a
                }), !!i && ke(tf, {
                    weight: Ys.NORMAL,
                    element: "p",
                    className: `${Dh} Card_module_detail__449914f1`,
                    color: $s.WHITE,
                    children: i
                })]
            }), !!o && ke("div", {
                className: "Card_module_popOutWrapper__449914f1",
                children: ke(Sv, {
                    name: yp.POP_OUT,
                    className: "Card_module_popOut__449914f1"
                })
            })]
        })
    })
};
const kh = () => {
    const e = mv((e => e.cards.cardsMap)),
        t = mv((e => e.cards.displayedCard)),
        n = mv((e => e.displayList.cards)),
        i = mv((e => e.displayList.fullPlayerElement)),
        o = e => t === e && !i;
    return n && ke("div", {
        className: "Cards_module_cardsWrapper__9492d3ed",
        children: e.values().map((e => ke(wh, {
            id: e.id,
            timecode: e.timecode,
            className: e.className,
            teaser: e.teaser,
            url: e.url,
            imageUrl: e.imageUrl,
            headline: e.headline,
            inView: o(e.timecode)
        }, e.id)))
    })
};
const Mh = ({
    show: e
}) => {
    const {
        buffering: t,
        currentTime: n,
        loadedTime: i,
        currentFragment: o
    } = mv((e => e.playback)), r = ga(n, o), a = ga(i, o);
    return e && ke("div", {
        className: "TinyProgressBar_module_tinyBar__71fa705b",
        children: ke("svg", {
            className: "TinyProgressBar_module_tinyBarSVG__71fa705b",
            width: "100%",
            height: "100%",
            viewBox: "0 0 70 40",
            focusable: "false",
            children: [ke("defs", {
                children: [ke("clipPath", {
                    id: "rounded-border",
                    children: ke("rect", {
                        height: "100%",
                        width: "100%",
                        x: "0",
                        y: "0",
                        rx: "5"
                    })
                }), ke("pattern", {
                    id: "tiny-buffer",
                    "data-tiny-buffer-pattern": !0,
                    className: "TinyProgressBar_module_bufferPattern__71fa705b",
                    patternUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    children: [ke("line", {
                        x1: "5",
                        y1: "-1",
                        x2: "-5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), ke("line", {
                        x1: "10",
                        y1: "-1",
                        x2: "0",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), ke("line", {
                        x1: "15",
                        y1: "-1",
                        x2: "5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    })]
                })]
            }), ke("g", {
                clipPath: "url(#rounded-border)",
                children: t ? ke("rect", {
                    className: "TinyProgressBar_module_buffer__71fa705b",
                    height: "3",
                    width: "110%",
                    x: "0",
                    y: "37",
                    fill: "url(#tiny-buffer)"
                }) : ke(We, {
                    children: [ke("rect", {
                        className: "TinyProgressBar_module_loaded__71fa705b",
                        "data-tiny-loaded": !0,
                        height: "3",
                        width: ba(a),
                        x: "0",
                        y: "37"
                    }), ke("rect", {
                        className: "TinyProgressBar_module_played__71fa705b",
                        "data-tiny-played": !0,
                        height: "3",
                        width: ba(r),
                        x: "0",
                        y: "37"
                    })]
                })
            })]
        })
    })
};
var Vh = "PlayButton_module_trailer__d1afd73a",
    Bh = "PlayButton_module_progressExpanded__d1afd73a";
const xh = ({
    className: e,
    controlBarVisibilityHandlers: t
}) => {
    const n = mv((e => e.displayList.controlBar)),
        i = mv((e => e.liveEvent.isLiveEvent)),
        o = mv((e => e.liveEvent.isPlayable)),
        r = mv((e => e.liveEvent.isArchived)),
        a = mv((e => e.liveEvent.isEnded)),
        l = mv((e => e.liveEvent.dvrEnabled)),
        s = mv((e => e.setPlayback)),
        c = mv((e => e.controlBar.trailerButtonText)),
        d = mv((e => e.embed.playbar)),
        u = mv((e => e.appearance.playerSizeMode)),
        _ = mv((e => e.controlBar.isExpanded)),
        {
            buttonState: p,
            setButtonState: m
        } = J_(),
        v = sp(),
        f = !i || o || r || l && a,
        h = u === $a.TINY || !d,
        E = p === Za.TRAILER,
        g = {
            [Za.PLAY]: {
                icon: yp.PLAY,
                onClick: () => {
                    s("paused", !1), m(Za.PAUSE)
                },
                label: "Reproduzir",
                className: "PlayButton_module_playIcon__d1afd73a"
            },
            [Za.PAUSE]: {
                icon: yp.PAUSE,
                onClick: () => {
                    s("paused", !0), m(Za.PLAY)
                },
                label: "Pausar",
                className: "PlayButton_module_pauseIcon__d1afd73a"
            },
            [Za.REPLAY]: {
                icon: yp.REPLAY,
                onClick: () => {
                    s("paused", !1), m(Za.PAUSE)
                },
                label: "Reproduzir",
                className: "PlayButton_module_replayIcon__d1afd73a"
            },
            [Za.TRAILER]: {
                icon: yp.PLAY,
                onClick: () => {
                    s("paused", !1)
                },
                label: "Reproduzir",
                className: "PlayButton_module_trailerIcon__d1afd73a"
            }
        }[p],
        b = v === lp.CENTER,
        C = va("PlayButton_module_playButtonWrapper__d1afd73a", b && "PlayButton_module_center__d1afd73a", E && Vh, _ && !b && Bh),
        T = va("PlayButton_module_playButton__d1afd73a", E && Vh, of .focusable, _ && !b && Bh, e);
    return f && ke(Ev, {
        visible: n,
        children: ke("div", {
            className: C,
            children: ke(jv, {
                id: "play-button-tooltip",
                tooltipContent: g.label,
                className: "Tooltip_module_playTooltip__d9b61844 " + (E ? "Tooltip_module_trailerPlayTooltip__d9b61844" : ""),
                children: ke(cf, {
                    className: T,
                    onClick: g.onClick,
                    icon: ke(Sv, {
                        className: g.className,
                        name: g.icon
                    }),
                    onTouchStart: t.onTouchStart,
                    onTouchEnd: t.onTouchEnd,
                    onMouseEnter: t.onMouseEnter,
                    onMouseLeave: t.onMouseLeave,
                    "data-play-button": !0,
                    children: [ke(Mh, {
                        show: h
                    }), E && ke("span", {
                        className: "PlayButton_module_text__d1afd73a",
                        children: c || "Assistir ao Trailer"
                    })]
                })
            })
        })
    })
};
var Uh = "ControlBarButton_module_controlBarButton__179d9b92";
const Hh = e => {
        const t = mv((e => e.displayList.menu));
        return (o.touch || t) && Object.assign(e, {
            visible: !1
        }), ke(jv, r({}, e))
    },
    Fh = ["className", "icon", "children", "tooltipLabel", "hasTooltip", "animating", "id"],
    Gh = He(((e, t) => {
        let {
            className: n = "",
            icon: i,
            children: o,
            tooltipLabel: a,
            hasTooltip: l = !0,
            animating: s = !1,
            id: c
        } = e, d = f(e, Fh);
        const u = mv((e => e.appearance.playerBreakpoint)),
            _ = mv((e => e.displayList.controlBarButtons)),
            p = va(Uh, of .focusable, n),
            m = ["xl", "xxl"].includes(u) ? 16 : 8,
            v = _ ? 0 : -1;
        return l ? ke(Hh, {
            id: c ? `${c}-tooltip` : null,
            tooltipContent: a,
            margin: m,
            animating: s,
            children: ke(cf, r(r({
                id: c,
                ref: t,
                className: p,
                icon: i,
                tabIndex: v
            }, d), {}, {
                children: o
            }))
        }) : ke(cf, r({
            ref: t,
            className: p,
            icon: i,
            tabIndex: v
        }, d))
    }));
const Wh = ({
    onFocus: e,
    ariaHidden: t
}) => {
    const n = mv((e => e.appearance.fullscreen)),
        i = mv((e => e.setAppearance)),
        o = va($r.FULLSCREEN, "FullscreenButton_module_fullscreen__81b38f0e"),
        r = n ? "Sair do modo tela cheia" : "Tela cheia",
        a = n ? yp.EXIT_FULLSCREEN : yp.ENTER_FULLSCREEN;
    return ke(Gh, {
        id: ea.FULLSCREEN,
        onClick: () => i("fullscreen", !n),
        onFocus: e,
        className: o,
        icon: ke(Sv, {
            name: a
        }),
        tooltipLabel: r,
        "data-fullscreen-button": !0,
        "aria-hidden": t
    })
};
const Yh = He((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const r = mv((e => e.appearance.isMenuBlockingUI)),
            {
                onClick: a,
                onKeyDown: l,
                onMouseDown: s
            } = Z_((() => t(!e)));
        return ke(Gh, {
            id: ea.PREFS,
            ref: o,
            className: `${Kr.VP_PREFS} PrefsButton_module_prefsButton__cdff1984`,
            "aria-expanded": e,
            "aria-haspopup": r ? "modal" : "true",
            "aria-hidden": i,
            icon: ke(Sv, {
                name: yp.GEAR,
                className: "PrefsButton_module_gearIcon__cdff1984"
            }),
            onClick: a,
            onKeyDown: l,
            onMouseDown: s,
            onFocus: n,
            tooltipLabel: "Configurações",
            "data-prefs-button": !0
        })
    })),
    $h = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = mv((e => e.appearance.pictureInPictureActive)),
            i = mv((e => e.setAppearance)),
            o = n ? "Sair do modo PiP (Picture-in-Picture)" : "Picture-in-Picture",
            r = n ? yp.EXIT_PICTURE_IN_PICTURE : yp.ENTER_PICTURE_IN_PICTURE;
        return ke(Gh, {
            id: ea.PIP,
            className: Kr.PIP,
            icon: ke(Sv, {
                name: r
            }),
            onClick: () => i("pictureInPictureActive", !n),
            onFocus: e,
            tooltipLabel: o,
            "data-pip-button": !0,
            "aria-hidden": t
        })
    },
    Kh = He((({
        onFocus: e,
        ariaHidden: t
    }, n) => {
        const i = mv((e => e.playback.volume)),
            o = mv((e => e.playback.muted)),
            r = o ? "Ativar som" : "Mudo",
            {
                toggleMuted: a
            } = cp();
        return ke(Gh, {
            ref: n,
            onClick: a,
            onFocus: e,
            icon: ke(Sv, !o && i > 0 ? {
                name: yp.VOLUME_ON_FILLED,
                "data-volume-icon": !0
            } : {
                name: yp.VOLUME_OFF_FILLED,
                "data-volume-muted-icon": !0
            }),
            "aria-label": r,
            "aria-hidden": t,
            "aria-keyshortcuts": "m",
            "data-volume-button": !0,
            hasTooltip: !1
        })
    }));
const qh = () => {
        const e = mv((e => e.controlBar.vimeoLogoUrl)),
            t = mv((e => e.appearance.playerBreakpoint)),
            n = mv((e => e.bigPicture));
        return ke(Cv, {
            className: va("VimeoLogoLink_module_vimeoLogo__7428a3b3", of .focusable),
            href: e,
            "data-vimeo-logo": !0,
            "aria-label": "Assistir no Vimeo",
            onClick: () => {
                n.sendEvent(Ml.SELECT_PLAYER_VIMEO_LOGO, {}, {
                    [Vl.WEB]: {
                        target: "vimeo.com",
                        target_path: e,
                        copy: "vimeo"
                    },
                    [Vl.PRODUCT_ANALYTICS]: {
                        flow: "viewer_home_from_embed_player",
                        element: "icon",
                        copy: "vimeo"
                    }
                })
            },
            children: ke(kf, {
                playerBreakpoint: t
            })
        })
    },
    zh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = mv((e => e.appearance.showAirPlayPicker)),
            i = mv((e => e.setAppearance));
        return ke(Gh, {
            onClick: () => i("showAirPlayPicker", !n),
            onFocus: e,
            "aria-label": n ? "Desligar AirPlay" : "Escolher um dispositivo AirPlay",
            "aria-hidden": t,
            tooltipLabel: "AirPlay",
            "data-airplay-button": !0,
            icon: ke(Sv, {
                name: yp.AIRPLAY
            })
        })
    },
    jh = He((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const r = mv((e => e.appearance.isMenuBlockingUI)),
            {
                onClick: a,
                onKeyDown: l,
                onMouseDown: s
            } = Z_((() => t(!e)));
        return ke(Gh, {
            ref: o,
            onClick: a,
            onKeyDown: l,
            onMouseDown: s,
            onFocus: n,
            "aria-expanded": e,
            "aria-haspopup": r ? "modal" : "true",
            "aria-hidden": i,
            icon: ke(Sv, {
                name: yp.CHAPTERS
            }),
            tooltipLabel: "Capítulos",
            "data-chapter-button": !0,
            id: ea.CHAPTERS
        })
    })),
    Xh = He((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const r = mv((e => e.captions.activeTextTrackId)),
            a = mv((e => e.appearance.isMenuBlockingUI)),
            {
                onClick: l,
                onKeyDown: s,
                onMouseDown: c
            } = Z_((() => t(!e))),
            d = r && "off" !== r ? yp.CC_FILLED : yp.CC;
        return ke(Gh, {
            id: ea.CC,
            ref: o,
            className: $r.CC,
            "aria-haspopup": a ? "modal" : "true",
            "aria-expanded": e,
            "aria-hidden": i,
            icon: ke(Sv, {
                name: d
            }),
            onClick: l,
            onKeyDown: s,
            onMouseDown: c,
            onFocus: n,
            tooltipLabel: "CC/Legendas",
            "data-cc-button": !0
        })
    })),
    Zh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = mv((e => e.setAppearance)),
            i = mv((e => e.appearance.stereoscopicEnabled)),
            o = i ? "Desativar reprodução estereoscópica" : "Ativar reprodução estereoscópica";
        return ke(Gh, {
            className: $r.STEREOSCOPIC,
            onClick: () => n("stereoscopicEnabled", !i),
            onFocus: e,
            "aria-label": o,
            "aria-hidden": t,
            icon: ke(Sv, {
                name: yp.STEREOSCOPIC
            }),
            tooltipLabel: "Estereoscópico",
            "data-stereoscopic-button": !0
        })
    };
const Jh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = va(qr.EXCLUDE_GLOBAL_BUTTON_STYLES, "ChromecastButton_module_chromecastButton__a2d33bfd", Uh, of .focusable, $r.VP_CAST_BUTTON);
        return (() => {
            const [e, t] = Pe(!1);
            Oe((() => {
                setTimeout((() => t(!0)), 500)
            }), [])
        })(), ke(jv, {
            id: "chromecast-control-bar-button-tooltip",
            tooltipContent: "GoogleCast",
            children: ke("button", {
                className: n,
                is: "google-cast-button",
                "data-chromecast-button": !0,
                onFocus: e,
                "aria-hidden": t
            })
        })
    },
    Qh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = Ip((e => e.bigPicture)),
            i = mv((e => e.displayList.transcript)),
            o = mv((e => e.toggleDisplayList)),
            r = "Transcrição",
            {
                onClick: a,
                onKeyDown: l
            } = Z_((() => {
                o("transcript"), n.sendEvent(Ml.EMBEDDED_TRANSCRIPT_CLICK, {
                    name: i ? "exit_embed_transcript" : "open_embed_transcript",
                    copy: r,
                    location: "control_bar",
                    element: "transcript_button",
                    current_transcript_language: ""
                })
            })),
            s = ke(Sv, {
                name: i ? yp.TRANSCRIPT_ON : yp.TRANSCRIPT_OFF
            }),
            c = i ? [jr.TRANSCRIPT_VIEWER, zr.RIGHT_CONTENT_AREA].join(" ") : zr.RIGHT_CONTENT_AREA;
        return ke(Gh, {
            id: ea.TRANSCRIPT,
            onClick: a,
            onKeyDown: l,
            onFocus: e,
            icon: s,
            tooltipLabel: r,
            "aria-controls": c,
            "aria-expanded": i,
            "aria-hidden": t
        })
    };
const eE = () => {
    const e = mv((e => e.displayList.controlBarButtons)),
        t = mv((e => e.setDisplayList)),
        n = Re(e),
        [i, o] = Pe(!1),
        r = mv((e => e.setControlBar));
    Oe((() => {
        e !== n.current && o(!0), n.current = e
    }), [e]);
    const a = e ? "Ocultar controles" : "Mostrar controles",
        l = va("CollapseButton_module_collapseButton__4f243c31", e && "CollapseButton_module_expanded__4f243c31");
    return ke(Gh, {
        id: ea.COLLAPSE,
        onClick: () => {
            const n = !e;
            r("shouldRestoreButtonsDisplayed", n), t("controlBarButtons", n)
        },
        onTransitionEnd: e => {
            "transform" === e.propertyName && o(!1)
        },
        tooltipLabel: a,
        animating: i,
        tabIndex: 0,
        icon: ke(Sv, {
            "data-collapse-icon": !0,
            name: yp.CHEVRON_RIGHT,
            className: l,
            "aria-hidden": "true"
        })
    })
};
var tE = "CustomLogo_module_progressExpanded__a7229b47";
const nE = ({
        className: e
    }) => {
        const t = mv((e => e.displayList.controlBar)),
            n = mv((e => e.displayList.accessGate)),
            i = mv((e => e.appearance.playerSizeMode)) === $a.TINY,
            o = mv((e => e.embed.customLogo)),
            r = mv((e => e.displayList.ad)),
            {
                customLogoUrl: a,
                customLogoImg: l,
                customLogoSticky: s
            } = mv((e => e.embed.customLogoFields)),
            c = mv((e => e.user.ownerName)),
            d = mv((e => e.controlBar.isExpanded)),
            u = o && !i && !r,
            _ = !n && (s || t),
            p = va("CustomLogo_module_customLogo__a7229b47", a ? "CustomLogo_module_link__a7229b47" : "", of .focusable, e, d && tE),
            m = va("CustomLogo_module_customLogoImg__a7229b47", d && tE);
        return u && ke(Ev, {
            visible: !!_,
            children: ke(nf, {
                classNames: p,
                imgClassNames: m,
                url: a,
                img: l,
                imgAlt: c
            })
        })
    },
    iE = ({
        className: e,
        marker: t
    }) => {
        const n = mv((e => e.setPlayback)),
            i = mv((e => e.playback.currentFragment)),
            o = (t.startTime - i.startTime) / i.duration * 100,
            r = () => n("currentTime", t.startTime),
            a = "Busque em " + Math.round(100 * t.startTime) / 100 + " segundos.";
        return ke("div", {
            id: `cuepoint-${t.id}`,
            className: e,
            style: {
                left: `${o}%`
            },
            "data-time": t.startTime,
            role: "button",
            "aria-label": a,
            tabIndex: 0,
            onClick: r,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && r()
            },
            "data-cue-point-marker": !0
        })
    };
const oE = () => {
    const e = mv((e => e.playback.currentFragment)),
        t = mv((e => e.cuePoints.cuePoints)),
        n = mv((e => e.displayList.progressBar)),
        i = dm(),
        o = va("CuePointMarkers_module_cuePoints__cc046812", of .focusableMarker),
        r = t.filter((t => {
            const n = e.startTime <= t.time && t.time <= e.endTime,
                o = i(t.time);
            return n && o
        })).map((e => ({
            id: e.id,
            startTime: e.time
        }))),
        a = !!r.length && n;
    return ke(We, {
        children: a && r.map((e => ke(iE, {
            className: o,
            marker: e
        }, e.startTime)))
    })
};
const rE = () => {
    const e = mv((e => e.playback.currentTime)),
        t = mv((e => e.playback.currentFragment)),
        n = mv((e => e.liveEvent.isLiveEvent)),
        i = mv((e => e.liveEvent.isArchived)),
        o = mv((e => e.playback.liveEdgeTime)),
        r = mv((e => e.playback.liveTailTime)),
        a = mv((e => e.playback.atLiveEdge)),
        l = mv((e => e.displayList.progressBar)),
        s = Ea(e, t),
        c = {
            progressBar: "Barra de progresso",
            ariaTextVOD: Da(s) + " de " + Da(t.duration),
            ariaTextLiveEdge: "Ao vivo em " + Da(o),
            ariaTextLiveDVR: Da(Math.abs(o - s)) + " de diferença do ao vivo"
        };
    let d = c.ariaTextVOD,
        u = 0,
        _ = t.duration;
    return n && !i && (d = a ? c.ariaTextLiveEdge : c.ariaTextLiveDVR, u = Math.round(r), _ = Math.round(o)), ke("div", {
        className: `FocusTarget_module_focusTarget__00a969cc ${of.focusable}`,
        role: "slider",
        "aria-label": c.progressBar,
        "aria-valuemin": u,
        "aria-valuemax": _,
        "aria-valuenow": Math.round(s),
        "aria-valuetext": d,
        tabIndex: l ? 0 : -1,
        "data-progress-bar-focus-target": !0
    })
};
const aE = ({
        marker: e,
        setTabFocused: t,
        setHoverFocused: n
    }) => {
        const i = mv((e => e.setPlayback)),
            o = mv((e => e.playback.currentFragment)),
            r = (e.start - o.startTime) / o.duration,
            a = {
                visibleLabel: e.visibleLabel,
                ariaLabel: e.ariaLabel,
                id: e.id,
                start: e.start,
                left: r
            },
            l = va("InteractiveMarker_module_interactiveMarker__2cec5fab", of .focusableMarker);

        function s(t) {
            i("currentTime", e.start, {
                action: t.type,
                seekType: "interactive-marker"
            })
        }
        return ke("div", {
            className: l,
            role: "button",
            style: {
                left: ba(r, !1)
            },
            "aria-label": e.ariaLabel,
            "data-time": e.start,
            tabIndex: 0,
            onClick: s,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && s(e)
            },
            onMouseEnter: () => n(a),
            onMouseLeave: () => n(null),
            onFocus: () => t(a),
            onBlur: () => t(null),
            "data-hotspot-marker": !0
        })
    },
    lE = ({
        width: t,
        setHoverFocused: n,
        setTabFocused: i
    }) => {
        const o = mv((e => e.playback.currentFragment)),
            r = mv((e => e.interactive.hotspots)),
            a = mv((e => e.interactive.polls)),
            l = mv((e => e.interactive.showMarkers)),
            s = mv((e => e.displayList.progressBar)),
            c = dm(),
            d = function({
                hotspots: t = [],
                polls: n = [],
                fragment: i,
                progressBarWidth: o
            }) {
                const r = function(t, n) {
                    return [].concat(e(t.map((e => ({
                        id: e.hotspotId,
                        label: ws,
                        start: e.start,
                        visibleLabel: e.name,
                        ariaLabel: e.name,
                        name: e.name
                    })))), e(n.map((e => ({
                        id: e.pollId,
                        label: ks,
                        name: e.questionText,
                        visibleLabel: e.questionText,
                        ariaLabel: e.questionText,
                        start: e.start
                    })))))
                }(t, n);
                let a, l = 1,
                    s = [],
                    c = [];
                return r.sort(((e, t) => e.start - t.start)).reduce(((e, t) => {
                    let {
                        label: n
                    } = t, r = f(t, Ds);
                    if (!(i.startTime <= r.start && r.start <= i.endTime)) return e;
                    if (n === ws ? r.visibleLabel = "Hotspot: " + r.name : n === ks && (r.visibleLabel = "Enquete: " + r.name), r.ariaLabel = r.visibleLabel, r.leftPositionInProgressBar = function(e) {
                            return (e - i.startTime) / i.duration * 100
                        }(r.start), n === ks ? s.push(r.name) : n === ws && c.push(r.name), !e.length) return function(e, t, n) {
                        return e.push(t), a = n, e
                    }(e, r, n);
                    const d = e.length - 1,
                        u = function(e, t, n, i) {
                            const o = Ms(e, n, i),
                                r = Ms(t, n, i);
                            return Math.floor(r - o)
                        }(e[d].start - i.startTime, r.start - i.startTime, i.duration, o);
                    return !isNaN(u) && u <= 5 ? (l += 1, n !== a ? function(e, t) {
                        a = "Hotspots & Polls", e[t].visibleLabel = "Hotspots e enquetes", e[t].name = "Hotspots e enquetes", e[t].ariaLabel = c.length + " hotspots: " + c.join(", ") + "; " + s.length + " enquetes: " + s.join(", ")
                    }(e, d) : n === ws ? function(e, t, n) {
                        e[t].visibleLabel = l + " pontos de acesso", e[t].name += `, ${n.name}`, e[t].ariaLabel = l + " hotspots: " + e[t].name
                    }(e, d, r) : n === ks && function(e, t, n) {
                        e[t].visibleLabel = l + " enquetes", e[t].name += `, ${n.name}`, e[t].ariaLabel = l + " enquetes: " + e[t].name
                    }(e, d, r)) : isNaN(u) || function(e, t, n) {
                        l = 1, e.push(t), a = n, s = [], c = []
                    }(e, r, n), e
                }), [])
            }({
                hotspots: r,
                polls: a,
                fragment: o,
                progressBarWidth: t
            }).filter((e => c(e.start)));
        return !!d.length && l && ke(We, {
            children: s && d.map((e => ke(aE, {
                marker: e,
                setTabFocused: i,
                setHoverFocused: n
            }, e.start)))
        })
    };
const sE = ({
        time: e,
        left: t,
        visible: n = !0,
        disabled: i = !1
    }) => ke(Ev, {
        visible: n,
        children: ke("div", {
            className: "Timecode_module_timecodeContainer__66300889",
            role: "presentation",
            style: {
                left: t
            },
            "aria-hidden": "true",
            "data-progress-bar-timecode-container": !0,
            children: ke("div", {
                className: "Timecode_module_timecode__66300889 " + (i ? "Timecode_module_disabled__66300889" : ""),
                "data-progress-bar-timecode": !0,
                children: Da(e)
            })
        })
    }),
    cE = () => {
        const e = mv((e => e.playback.currentTime)),
            t = mv((e => e.playback.liveEdgeTime)),
            n = mv((e => e.playback.liveTailTime)),
            i = mv((e => e.playback.atLiveEdge)),
            o = mv((e => e.playback.currentFragment)),
            r = mv((e => e.playback.playInitiated)),
            a = mv((e => e.playback.paused)),
            l = mv((e => e.playback.buffering)),
            s = mv((e => e.displayList.progressBar)),
            c = mv((e => e.liveEvent.isLiveEvent)),
            d = mv((e => e.liveEvent.dvrEnabled)),
            u = mv((e => e.liveEvent.isEnded)),
            _ = mv((e => e.liveEvent.isArchived)),
            p = c ? t : o.duration,
            m = c && !_ ? 1 : 0;
        let v = p,
            f = m;
        const h = Ea(e, o);
        if (c)
            if (d) {
                if (d) {
                    const a = u && !r && 0 === e,
                        l = _ && 0 !== o.duration;
                    a ? (v = o.duration, f = 0) : l ? (v = e, f = e / o.duration) : i ? (f = 1, v = e) : (f = La(e, n, t), v = e - t)
                }
            } else _ && (r || 0 !== e) ? (f = ga(e, o), v = h) : _ ? (v = o.duration, f = m) : (f = 1, v = e);
        else r || 0 !== h ? (f = ga(e, o), v = h) : (v = p, f = m);
        const E = (!c || _ || d && 0 !== t || !a && !l && 0 !== t) && !isNaN(v) && s;
        return ke(sE, {
            time: v,
            left: ba(f, !1),
            disabled: c && !d,
            visible: E
        })
    };
var dE = "ThumbnailPreview_module_text__11395132";
const uE = {
        xs: 120,
        md: 160,
        xl: 200
    },
    _E = ({
        visible: e = !1,
        mousePercent: t = 0,
        progressBarWidth: n,
        isMousedOverProgress: i = !1,
        tabOrHoverFocusedMarker: o = null
    }) => {
        const a = mv((e => e.displayList.menu)),
            l = mv((e => e.playback.currentFragment)),
            s = mv((e => e.playback.duration)),
            c = mv((e => e.playback.liveEdgeTime)),
            d = mv((e => e.playback.liveTailTime)),
            u = mv((e => e.liveEvent.isLiveEvent)),
            _ = mv((e => e.liveEvent.dvrEnabled)),
            p = mv((e => e.liveEvent.isArchived)),
            m = mv((e => e.appearance.boundingClientRect)),
            v = mv((e => e.appearance.isVerticalVideo)),
            f = mv((e => e.appearance.playerBreakpoint)),
            h = mv((e => e.verifyConfig)),
            E = mv((e => e.chapters.chapters)),
            g = mv((e => e.embed.chapters)),
            b = mv((e => e.controlBar.thumbnailPreview)),
            C = mv((e => e.playback.isSegmentedPlaybackEnabled)),
            [T, y] = Pe({
                width: 0,
                height: 0,
                backgroundImage: "",
                backgroundSize: "",
                backgroundPosition: ""
            }),
            [L, A] = Pe(!1),
            S = m.height > 300 && n >= 185,
            I = 0 !== c && !isNaN(c);
        let O = S && !a && (!u || _ && I) && e;
        const [P, R] = Pe(0);
        i ? R(t) : o ? R(o.left) : O = !1;
        const N = Ca(P, l);
        let D;
        D = _ ? p && 0 !== l.duration ? Ta(P, l) : ((e, t, n) => ya(e, t, n) - n)(P, d, c) : Ta(P, l), isNaN(D) && (O = !1);
        const w = dm()(N);
        let k = "";
        if (E.length && g && !C) {
            const e = E.find((e => e.startTime <= N && e.endTime >= N));
            k = (null == e ? void 0 : e.text) || ""
        }
        const M = (null == o ? void 0 : o.visibleLabel) || "",
            V = (e => {
                switch (e) {
                    case xs.XL:
                    case xs.XXL:
                        return "xl";
                    case xs.SM:
                    case xs.MD:
                    case xs.LG:
                        return "md";
                    default:
                        return "xs"
                }
            })(f),
            B = ((e, t) => uE[e] * (t ? 9 / 16 : 1))(V, v),
            x = B / (null == b ? void 0 : b.frame_width);
        return Oe((() => {
            !L && S && e && b && h().then((() => Wp(b.url).then((() => {
                A(!0), y({
                    width: b.frame_width * x,
                    height: b.frame_height * x,
                    backgroundImage: `url(${b.url})`,
                    backgroundSize: `${b.width*x}px ${b.height*x}px`,
                    backgroundPosition: ""
                })
            })))).catch((() => {}))
        }), [e, L, S, b, x, h]), Oe((() => {
            A(!1)
        }), [b]), Oe((() => {
            b && y((e => r(r({}, e), {}, {
                width: b.frame_width * x,
                height: b.frame_height * x,
                backgroundSize: `${b.width*x}px ${b.height*x}px`
            })))
        }), [f]), Oe((() => {
            if (b && S) {
                let e = 0,
                    t = 0;
                if (b) {
                    const n = s / b.frames,
                        i = Math.min(b.frames - 1, Math.ceil(N / n)),
                        o = i % b.columns,
                        r = Math.floor(i / b.columns);
                    e = -o * b.frame_width * x, t = -r * b.frame_height * x
                }
                y((n => r(r({}, n), {}, {
                    backgroundPosition: `${e}px ${t}px`
                })))
            }
        }), [P, m, b, S, s, x, N]), ke(Ev, {
            visible: O,
            children: ke("div", {
                className: "ThumbnailPreview_module_thumbnailPreview__11395132",
                role: "presentation",
                "aria-hidden": "true",
                style: {
                    left: ba(P, !1),
                    maxWidth: B
                },
                children: [!!T.backgroundImage && L && w && ke("div", {
                    className: `${$r.THUMB} ThumbnailPreview_module_thumbnailPreviewImage__11395132`,
                    style: {
                        width: `${T.width}px`,
                        height: `${T.height}px`,
                        backgroundImage: T.backgroundImage,
                        backgroundSize: T.backgroundSize,
                        backgroundPosition: T.backgroundPosition
                    }
                }), ke("div", {
                    className: "ThumbnailPreview_module_thumbnailPreviewText__11395132",
                    children: [M && ke("span", {
                        className: dE,
                        children: M
                    }), M && k && ke("span", {
                        className: "ThumbnailPreview_module_separator__11395132"
                    }), k && ke("span", {
                        className: dE,
                        children: k
                    }), ke("span", {
                        className: "ThumbnailPreview_module_time__11395132",
                        children: Da(D)
                    })]
                })]
            })
        })
    };
var pE = "ChapterSegment_module_segmentBar__611ea95b",
    mE = "ChapterSegment_module_seekingDisabled__611ea95b";
const vE = ({
    segment: e,
    className: t
}) => {
    const n = mv((e => e.embed.seekingForward)),
        i = mv((e => e.playback.maxPlayedTime)),
        o = mv((e => e.playback.currentFragment)),
        r = mv((e => e.playback.loadedTime)),
        a = _m(e, n ? r : i),
        l = ba(a),
        s = va("LoadedBar_module_loaded__9af6b4fa", o.duration < 60 && "LoadedBar_module_shortVideo__9af6b4fa", t);
    return ke("div", {
        className: s,
        style: {
            width: l
        },
        "data-progress-bar-loaded": !0
    })
};
const fE = ({
        segment: e,
        className: t
    }) => {
        const n = mv((e => e.playback.currentTime)),
            i = mv((e => e.liveEvent.isLiveEvent)),
            o = mv((e => e.liveEvent.dvrEnabled)),
            r = mv((e => e.liveEvent.isArchived)),
            a = i && !o && !r,
            l = _m(e, n),
            s = ba(a ? 0 : l, !1);
        return ke("div", {
            className: va("PlayedBar_module_played__a3ef1250", t),
            style: {
                width: s
            },
            "data-progress-bar-played": !0
        })
    },
    hE = ({
        segment: e,
        isExpanded: t
    }) => {
        const n = mv((e => e.embed.seekingForward)),
            i = mv((e => e.playback.currentFragment)),
            o = mv((e => e.playback.liveEdgeTime)),
            r = mv((e => e.liveEvent.isLiveEvent)),
            a = mv((e => e.liveEvent.dvrEnabled)),
            l = mv((e => e.liveEvent.isArchived)),
            s = r && !l,
            c = 0 !== o && !isNaN(o),
            d = r ? 1 : ((e, t) => (e.endTime - e.startTime) / t.duration)(e, i),
            u = ba(d, !1),
            _ = s && (!a || !c),
            p = dm()(e.startTime),
            m = va("ChapterSegment_module_chapterWrapper__611ea95b", _ && "ChapterSegment_module_liveDisabled__611ea95b", !n && mE, t && "ChapterSegment_module_expanded__611ea95b", (_ || !p) && "ChapterSegment_module_hoverDisabled__611ea95b"),
            v = va("ChapterSegment_module_chapter__611ea95b", !n && mE),
            f = e.startTime === i.startTime ? 0 : 2;
        return ke("div", {
            className: m,
            style: {
                width: `calc(${u} - ${f}px)`
            },
            children: ke("div", {
                className: v,
                children: [ke(vE, {
                    segment: e,
                    className: pE
                }), ke(fE, {
                    segment: e,
                    className: pE
                })]
            })
        })
    };
const EE = ({
    hoveredChapterId: e
}) => {
    const t = mv((e => e.playback.currentFragment)),
        n = mv((e => e.chapters.chapters)),
        i = mv((e => e.embed.chapters)),
        o = mv((e => e.appearance.playerBreakpoint)),
        r = mv((e => e.playback.isSegmentedPlaybackEnabled)),
        a = mv((e => e.controlBar.isExpanded));
    let l;
    return l = o === xs.XXS || !i || r ? [{
        startTime: t.startTime,
        endTime: t.endTime
    }] : ((e, t) => {
        const n = Aa(e, t);
        let i = [];
        return 0 === n.length ? i.push({
            startTime: t.startTime,
            endTime: t.endTime
        }) : n.forEach(((e, o) => {
            let r = e.startTime,
                a = e.endTime;
            0 === o && e.startTime > t.startTime && i.push({
                startTime: t.startTime,
                endTime: e.startTime
            }), 0 === o && e.startTime < t.startTime && (r = t.startTime), o === n.length - 1 && e.endTime > t.endTime && (a = t.endTime), i.push({
                startTime: r,
                endTime: a,
                chapterId: e.startTime
            })
        })), i
    })(n, t), ke("div", {
        className: "ChapterSegments_module_chapterSegmentsWrapper__e2d21102",
        children: l.map((t => ke(hE, {
            segment: t,
            isExpanded: a || t.chapterId === e
        }, t.startTime)))
    })
};
const gE = ({
    hoveredChapterId: e
}) => {
    const t = vv(),
        n = mv((e => e.playback.liveEdgeTime)),
        i = mv((e => e.liveEvent.isLiveEvent)),
        a = mv((e => e.liveEvent.isArchived)),
        l = mv((e => e.liveEvent.dvrEnabled)),
        s = mv((e => e.controlBar.isExpanded)),
        c = mv((e => e.displayList.progressBar)),
        [d, u] = Pe(!1),
        [_, p] = Pe(!1),
        [m, v] = Pe(0),
        [f, h] = Pe(null),
        [E, g] = Pe(null),
        [b, C] = Pe(null),
        T = Re(null),
        y = Re(null),
        L = Re(ha(null == T ? void 0 : T.current)),
        [A, S] = Pe(L.current.rightOffsetValue - L.current.leftOffsetValue);

    function I() {
        const e = ha(null == T ? void 0 : T.current);
        L.current = e, S(L.current.rightOffsetValue - L.current.leftOffsetValue)
    }
    Tp(T, I);
    const {
        startExpandingProgressBar: O,
        endExpandingProgressBar: P,
        onExpandTransitionEnd: R
    } = (() => {
        const e = Re(null),
            t = Re(null),
            n = vv(),
            i = mv((e => e.setControlBar));
        return {
            startExpandingProgressBar: function() {
                clearTimeout(e.current), clearTimeout(t.current), e.current = setTimeout((() => {
                    "expanded" !== n.getState().controlBar.expandedState && i("expandedState", "expanding")
                }), s_)
            },
            endExpandingProgressBar: function() {
                clearTimeout(e.current), clearTimeout(t.current);
                const o = n.getState().controlBar.expandedState;
                "collapsed" !== o && ("expanded" === o ? t.current = setTimeout((() => {
                    i("expandedState", "collapsing")
                }), s_) : i("expandedState", "collapsing"))
            },
            onExpandTransitionEnd: function() {
                const e = n.getState().controlBar.expandedState;
                "expanding" === e ? i("expandedState", "expanded") : "collapsing" === e && i("expandedState", "collapsed")
            }
        }
    })(), {
        startScrub: N,
        continueScrub: D,
        endScrub: w
    } = um(), k = (e, t = 3) => _r(lr((e - L.current.leftOffsetValue) / (L.current.rightOffsetValue - L.current.leftOffsetValue), 0, 1), t);

    function M(e) {
        const {
            clientX: t
        } = e, n = k(t);
        v(n)
    }

    function V(e) {
        const n = (e => {
                let {
                    clientX: t
                } = e;
                return e.targetTouches && e.targetTouches.length > 0 && (t = e.targetTouches[0].clientX, e.preventDefault()), t
            })(e),
            i = k(n),
            {
                liveEvent: o,
                playback: r
            } = t.getState();
        return !o.dvrEnabled || o.isArchived && 0 !== r.currentFragment.duration ? Ca(i, r.currentFragment) : ya(i, r.liveTailTime, r.liveEdgeTime)
    }

    function B(e) {
        if (2 === (null == e ? void 0 : e.button) || null != e && e.ctrlKey) return;
        const t = V(e);
        if (N(t), "pointerdown" === e.type || "MSPointerDown" === e.type) {
            h(e.pointerId);
            try {
                e.target.msSetPointerCapture ? e.target.msSetPointerCapture(f) : e.target.setPointerCapture(f)
            } catch (ke) {}
            document.addEventListener("pointermove", x), document.addEventListener("pointerup", U)
        } else "touchstart" === e.type ? (document.addEventListener("touchmove", x), document.addEventListener("touchend", U), O()) : (document.addEventListener("mousemove", x), document.addEventListener("mouseup", U))
    }

    function x(e) {
        if (f && f !== e.pointerId || !1 === e.isPrimary) return;
        const t = V(e);
        D(t)
    }

    function U(e) {
        const t = e.type;
        "pointerup" === t || "MSPointerUp" === t ? (document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", U), h(null)) : "touchend" === t ? (document.removeEventListener("touchmove", x), document.removeEventListener("touchend", U), P()) : (document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", U)), w()
    }
    Oe((() => () => {
        document.removeEventListener("touchmove", x), document.removeEventListener("touchend", U), document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", U), document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", U)
    }), []);
    let H = {};
    (!i || l && n || a) && (H = o.pointerEvents ? {
        onPointerDown: B
    } : {
        onTouchStart: B,
        onMouseDown: B
    });
    const F = va("ProgressBar_module_progressBarContainer__8f93bbb9", !c && "ProgressBar_module_progressHidden__8f93bbb9", s && "ProgressBar_module_progressExpanded__8f93bbb9"),
        G = va(Kr.VP_PROGRESS, "ProgressBar_module_progressBar__8f93bbb9");
    return ke("div", {
        className: F,
        ref: y,
        onTransitionEnd: function(e) {
            e.target === (null == y ? void 0 : y.current) && "flex-shrink" === e.propertyName && R()
        },
        children: ke("div", r(r({
            className: G,
            "data-progress-bar": !0,
            ref: T,
            onMouseEnter: e => {
                I(), M(e), p(!0)
            },
            onMouseMove: e => {
                M(e), u(!1), g(null)
            },
            onMouseLeave: () => p(!1),
            onFocus: () => u(!0),
            onBlur: () => u(!1),
            role: "presentation"
        }, H), {}, {
            children: [ke(rE, {}), ke(EE, {
                hoveredChapterId: e
            }), ke(oE, {}), ke(lE, {
                width: A,
                setTabFocused: g,
                setHoverFocused: C
            }), ke(_E, {
                visible: _ || d,
                mousePercent: m,
                isMousedOverProgress: _,
                progressBarWidth: A,
                tabOrHoverFocusedMarker: E || b
            }), ke(cE, {})]
        }))
    })
};
const bE = ({
        setMenuDisplayed: e
    }) => {
        const t = mv((e => e.setDisplayList));
        return ke(cf, {
            className: "DebugPanelButton_module_debugPanelButton__9c678770",
            onClick: () => {
                e(!1), t("debugPanel", !0)
            },
            icon: ke(Sv, {
                className: "DebugPanelButton_module_debugPanelButtonIcon__9c678770",
                name: yp.INFO_CIRCLE
            }),
            color: Hs.ALTERNATIVE,
            iconSize: Us.XS,
            "aria-haspopup": "dialog",
            children: ke(tf, {
                size: Ws.SM,
                weight: Ys.NORMAL,
                children: "Registro de depuração"
            })
        })
    },
    CE = {
        [ep.EMPTY]: () => ke(We, {}),
        [ep.PREFS]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => {
            const n = mv((e => e.embed.speedChangeEnabled)),
                i = mv((e => e.embed.multipleAudioTracks)),
                a = mv((e => e.embed.quality)),
                l = mv((e => e.playback.qualities)),
                s = mv((e => e.playback.currentQuality)),
                c = mv((e => e.playback.playbackRates)),
                d = mv((e => e.playback.audioTracks)),
                u = a && (null == l ? void 0 : l.length) > 0,
                _ = i && (null == d ? void 0 : d.length) > 1,
                p = (e = []) => {
                    var t;
                    return null == (t = e.find((e => e.active))) ? void 0 : t.label
                },
                m = p(c),
                v = {
                    quality: {
                        label: "Qualidade",
                        value: "Auto" === s ? "Automático" : s,
                        onSelect: () => e(ep.QUALITY),
                        hasPopup: !0
                    },
                    speed: {
                        label: "Velocidade",
                        value: "Normal" === m ? "Normal" : m,
                        onSelect: () => e(ep.SPEED),
                        hasPopup: !0
                    },
                    audio: {
                        label: "Áudio",
                        value: p(d),
                        onSelect: () => e(ep.AUDIO),
                        hasPopup: !0
                    }
                };
            return ke(We, {
                children: [u && ke(xv, r({}, v.quality)), n && ke(xv, r({}, v.speed)), _ && ke(xv, r({}, v.audio)), o.touch && ke(We, {
                    children: [ke(kv, {
                        buffer: !0
                    }), ke(bE, {
                        setMenuDisplayed: t
                    })]
                })]
            })
        },
        [ep.QUALITY]: () => {
            const {
                qualities: e
            } = mv((e => e.playback)), t = mv((e => e.setPlayback)), n = e.map((e => r(r({}, e), {}, {
                label: "Auto" === e.label ? "Automático" : e.label
            })));
            return ke(Gv, {
                items: n,
                onSelect: e => t("qualities", e.currentTarget.dataset.id)
            })
        },
        [ep.SPEED]: () => {
            const {
                playbackRates: e
            } = mv((e => e.playback)), t = mv((e => e.setPlayback)), n = e.map((e => r(r({}, e), {}, {
                label: "Normal" === e.label ? "Normal" : e.label
            })));
            return ke(Gv, {
                items: n,
                onSelect: e => t("playbackRates", e.currentTarget.dataset.id)
            })
        },
        [ep.AUDIO]: () => {
            const e = mv((e => e.playback.audioTracks)),
                t = mv((e => e.setPlayback)),
                n = Ip((e => e.bigPicture)),
                i = Re(!1),
                o = Re(e.find((e => !!e.enabled)));
            return Oe((() => {
                const e = o.current.label,
                    t = Gl[o.current.provenance];
                return n.sendEvent(Ml.MULTI_AUDIO_TRACK_CLICK, {
                    event_name: "audio_menu_opened",
                    has_selected_track: i.current,
                    initial_track: e,
                    initial_track_provenance: t
                }), () => {
                    n.sendEvent(Ml.MULTI_AUDIO_TRACK_CLICK, {
                        event_name: "audio_menu_closed",
                        has_selected_track: i.current,
                        initial_track: e,
                        initial_track_provenance: t
                    })
                }
            }), [n]), ke(Gv, {
                items: e,
                onSelect: r => {
                    t("audioTracks", r.currentTarget.dataset.id), i.current = !0;
                    const a = e.find((e => e.id === r.currentTarget.dataset.id));
                    n.sendEvent(Ml.MULTI_AUDIO_TRACK_CLICK, {
                        event_name: "select_audio_track",
                        track_selected: a.label,
                        track_selected_provenance: Gl[a.provenance],
                        has_selected_track: i.current,
                        initial_track: o.current.label,
                        initial_track_provenance: Gl[o.current.provenance]
                    })
                }
            })
        }
    },
    TE = {
        [ep.EMPTY]: () => ke(We, {}),
        [ep.QUALITY]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Qualidade",
            onBack: e,
            setMenuDisplayed: t
        }),
        [ep.SPEED]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Velocidade",
            onBack: e,
            setMenuDisplayed: t
        }),
        [ep.PREFS]: ({
            setMenuDisplayed: e
        }) => mv((e => e.appearance.isMenuBlockingUI)) && ke(Mv, {
            title: "Configurações",
            setMenuDisplayed: e
        }),
        [ep.AUDIO]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Áudio",
            onBack: e,
            setMenuDisplayed: t
        })
    },
    yE = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i
    }) => {
        const o = ep.PREFS,
            {
                panel: r,
                setPanel: a,
                goToPreviousPanel: l
            } = cm(o, e),
            s = mv((e => e.playback.playbackRates)),
            c = (e => CE[e] || CE[ep.EMPTY])(r),
            d = (e => TE[e] || TE[ep.EMPTY])(r),
            u = r === ep.SPEED ? s.length : null;
        return ke(Nv, {
            ariaLabel: "Configurações",
            type: Q_.PREFS,
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: r,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: Qa.PrefsMenu,
            panelContent: ke(c, {
                setPanel: a,
                setMenuDisplayed: t
            }),
            headerContent: ke(d, {
                setPanel: a,
                setMenuDisplayed: t,
                onBack: l
            }),
            resizeDependencies: u,
            onBack: l
        })
    },
    LE = ({
        setMenuDisplayed: e
    }) => mv((e => e.appearance.isMenuBlockingUI)) && ke(Mv, {
        title: "Capítulos",
        setMenuDisplayed: e
    });
const AE = ({
    linkUrl: e,
    hoverStyles: t,
    chapterId: n,
    ariaDescribedBy: i
}) => {
    const r = Ip((e => e.bigPicture)),
        a = Re(null),
        l = Re(null),
        [s, c] = Pe(!1),
        d = va(o.touch && "CopyLinkButton_module_touchDevice__b24b40c0", "CopyLinkButton_module_copyLinkButton__b24b40c0", t),
        u = () => {
            clearTimeout(a.current), clearTimeout(l.current)
        },
        _ = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function(t) {
            return t.preventDefault(), t.stopPropagation(),
                function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(ca(e), (function() {
                    r.sendEvent(Ml.SHARE_CHAPTER, {
                        chapter_id: n
                    }), c(!0), u(), a.current = setTimeout((() => c(!1)), 2e3)
                }))
        }));
    return ke(jv, {
        id: "copy-link-button-tooltip",
        tooltipContent: s || o.touch ? ke("span", {
            className: "CopyLinkButton_module_linkCopied__b24b40c0",
            children: [ke(Sv, {
                name: yp.CHECKMARK,
                className: "CopyLinkButton_module_linkCopiedIcon__b24b40c0"
            }), "Link copiado"]
        }) : "Copiar link",
        visible: s,
        position: qv.LEFT,
        margin: 4,
        preventFocusOnClick: !0,
        children: ke(cf, {
            icon: ke("div", {
                className: "CopyLinkButton_module_shareIconContainer__b24b40c0",
                children: ke(Sv, {
                    name: yp.LINK
                })
            }),
            iconSize: Us.MD,
            className: d,
            onMouseLeave: () => {
                u(), l.current = setTimeout((() => c(!1)), 150)
            },
            onClick: _,
            role: "menuitem",
            "aria-describedby": i
        })
    })
};
var SE = "ChaptersPanelMenuOption_module_active__aad1c14d";
const IE = ({
        startTime: e,
        id: t,
        chapterId: n,
        active: i,
        label: o,
        onMouseEnter: a,
        onMouseLeave: l,
        onSelect: s
    }) => {
        const c = mv((e => e.embed.seekingForward)),
            d = mv((e => e.embed.parentUrl)),
            u = mv((e => e.chapters.chapterShareBaseUrl)),
            _ = mv((e => e.debug.clipId)),
            p = dm()(e),
            {
                onClick: m,
                onKeyDown: v
            } = Z_(s),
            f = va("ChaptersPanelMenuOption_module_chapterListItem__aad1c14d", i && SE, !p && "ChaptersPanelMenuOption_module_disabled__aad1c14d"),
            h = va(i && SE, "ChaptersPanelMenuOption_module_chapterListButton__aad1c14d", qr.EXCLUDE_GLOBAL_BUTTON_STYLES),
            E = d ? function(e, t, n) {
                const [i] = n.split("#");
                return `${i}#vimeo_chapter_${e}=${t}`
            }(_, n, d) : function(e, t) {
                if (!t) return "";
                const [n] = t.split("#");
                return `${n}#chapter=${e}`
            }(n, u);
        return ke("div", {
            className: f,
            children: [ke("button", r(r({
                id: t,
                role: "menuitem",
                "data-id": t,
                disabled: !p || null,
                "data-testid": "chapter-list-item-button",
                tabIndex: 0,
                className: h,
                onClick: m,
                onKeyDown: v,
                onMouseEnter: a,
                onMouseLeave: l
            }, zv), {}, {
                children: ke("div", {
                    className: "ChaptersPanelMenuOption_module_chapterInfoContainer__aad1c14d",
                    children: [ke("div", {
                        className: "ChaptersPanelMenuOption_module_chapterTitleText__aad1c14d",
                        children: o
                    }), ke("div", {
                        className: "ChaptersPanelMenuOption_module_chapterStartTime__aad1c14d",
                        children: Da(e)
                    })]
                })
            })), E && c && ke(AE, {
                linkUrl: E,
                chapterId: n,
                hoverStyles: "ChaptersPanelMenuOption_module_copyLinkButton__aad1c14d",
                ariaDescribedBy: t
            })]
        }, t)
    },
    OE = ({
        setMenuDisplayed: e,
        onMenuOptionMouseEnter: t,
        onMenuOptionMouseLeave: n
    }) => {
        const i = mv((e => e.events)),
            o = mv((e => e.chapters.chapters)),
            r = mv((e => e.chapters.activeCueId)),
            a = Ip((e => e.bigPicture)),
            l = o.map((e => ({
                label: e.text,
                id: e.cueId,
                active: e.cueId === r,
                startTime: e.startTime,
                chapterId: e.chapterId
            })));
        return ke(Gv, {
            items: l,
            onSelect: t => {
                const n = t.currentTarget.dataset.id;
                "string" == typeof n && (i.fire(xn, parseFloat(n) + .001, "menu"), a.sendEvent(Ml.CHAPTER_SELECTED, {
                    chapter_id: parseInt(n),
                    provenance: null
                })), e(!1)
            },
            onMenuOptionMouseEnter: t,
            onMenuOptionMouseLeave: n,
            itemComponent: IE
        })
    },
    PE = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        onMenuOptionMouseEnter: o,
        onMenuOptionMouseLeave: r
    }) => ke(Nv, {
        ariaLabel: "Capítulos",
        type: Q_.CHAPTERS,
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        panel: ep.CHAPTERS,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        panelContent: ke(OE, {
            setMenuDisplayed: t,
            onMenuOptionMouseEnter: o,
            onMenuOptionMouseLeave: r
        }),
        headerContent: ke(LE, {
            setMenuDisplayed: t
        })
    });
const RE = ({
    updateMetricsPayload: e
}) => {
    const t = mv((e => e.resetCaptionsStyles));
    return ke(cf, r(r({
        className: `${qr.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__33762fc2 ${of.focusable}`,
        withActive: !1,
        styled: !1,
        role: "menuitem"
    }, sa((() => {
        t(), e({
            has_reset_all: !0,
            final_action_reset_all: !0
        })
    }))), {}, {
        children: ke("span", {
            children: "Redefinir tudo"
        })
    }))
};
const NE = () => {
        const e = mv((e => e.captions.fontSize)),
            t = mv((e => e.captions.fontFamily)),
            n = mv((e => e.captions.fontOpacity)),
            i = mv((e => e.captions.color)),
            o = mv((e => e.captions.bgColor)),
            r = mv((e => e.captions.bgOpacity)),
            a = mv((e => e.captions.windowOpacity)),
            l = mv((e => e.captions.windowColor)),
            s = mv((e => e.captions.edgeStyle)),
            c = mv((e => e.appearance.videoHeight));
        return ke("div", {
            className: "PreviewWindow_module_previewWindow__13200e2c",
            role: "menuitem",
            children: ke("div", {
                className: "PreviewWindow_module_checkeredBackground__13200e2c",
                children: ke(vf, {
                    cues: [{
                        html: "Esta é uma pré-visualização\nde uma legenda"
                    }],
                    fontSize: e,
                    fontFamily: t,
                    fontOpacity: n,
                    color: i,
                    bgColor: o,
                    bgOpacity: r,
                    windowOpacity: a,
                    windowColor: l,
                    edgeStyle: s,
                    height: c
                })
            })
        })
    },
    DE = ({
        setPanel: e
    }) => {
        const t = mv((e => e.appearance.isMenuBlockingUI)),
            n = mv((e => e.appearance.isMenuVerticalVideoMode));
        return (t || n) && ke(We, {
            children: [ke(kv, {}), ke(xv, {
                label: "Visualização",
                onSelect: () => e(ep.PREVIEW),
                hasPopup: !0
            })]
        })
    },
    wE = {
        [ep.EMPTY]: () => ke(We, {}),
        [ep.LANGUAGES]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = mv((e => e.captions.textTracks)),
                i = mv((e => e.setCaptions)),
                o = {
                    customize: {
                        label: "Customizar",
                        onSelect: () => {
                            e(ep.CUSTOMIZE), t({
                                has_clicked_customize: !0
                            })
                        },
                        hasPopup: !0
                    }
                };
            return ke(We, {
                children: [ke(Gv, {
                    items: n,
                    onSelect: e => {
                        const o = e.currentTarget.dataset.id,
                            r = n.find((e => e.id === o));
                        i("activeTextTrackId", o), t({
                            language_selected: null == r ? void 0 : r.language,
                            language_provenance: (null == r ? void 0 : r.provenance) || null,
                            has_updated_language: !0
                        })
                    }
                }), ke(kv, {
                    buffer: !0
                }), ke(xv, r({}, o.customize)), ke(DE, {
                    setPanel: e
                })]
            })
        },
        [ep.CUSTOMIZE]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = {
                font: {
                    label: "Fonte",
                    onSelect: () => {
                        e(ep.FONT), t({
                            has_clicked_font: !0
                        })
                    },
                    size: tp.SMALL,
                    hasPopup: !0
                },
                background: {
                    label: "Fundo",
                    onSelect: () => {
                        e(ep.BACKGROUND), t({
                            has_clicked_background: !0
                        })
                    },
                    size: tp.SMALL,
                    hasPopup: !0
                },
                window: {
                    label: "Janela",
                    onSelect: () => {
                        e(ep.WINDOW), t({
                            has_clicked_window: !0
                        })
                    },
                    size: tp.SMALL,
                    hasPopup: !0
                }
            };
            return ke(We, {
                children: [ke(xv, r({}, n.font)), ke(xv, r({}, n.background)), ke(xv, r({}, n.window)), ke(RE, {
                    updateMetricsPayload: t
                }), ke(DE, {
                    setPanel: e
                })]
            })
        },
        [ep.FONT]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = mv((e => e.setCaptions)),
                i = mv((e => e.captions.fontSize)),
                o = mv((e => e.captions.fontFamily)),
                a = mv((e => e.captions.fontOpacity)),
                l = mv((e => e.captions.color)),
                s = mv((e => e.captions.edgeStyle)),
                c = Wc(),
                d = () => t({
                    has_changed_font: !0,
                    final_action_reset_all: !1
                }),
                u = {
                    fontFamily: {
                        label: c.fontFamily.title,
                        items: fa(c.fontFamily.items, o),
                        onSelect: e => {
                            n("fontFamily", e.currentTarget.dataset.id), d()
                        },
                        id: ta.FONT_FAMILY_ACCORDION
                    },
                    color: {
                        label: c.color.title,
                        labelId: ta.VP_CC_FONT_COLOR_LABEL,
                        items: fa(c.color.items, l),
                        onSelect: e => {
                            n("color", e.currentTarget.dataset.id), d()
                        }
                    },
                    fontSize: {
                        label: c.fontSize.title,
                        labelId: ta.VP_CC_FONT_SIZE_LABEL,
                        items: fa(c.fontSize.items, `${i}`),
                        onSelect: e => {
                            n("fontSize", e.currentTarget.dataset.id), d()
                        }
                    },
                    fontOpacity: {
                        label: c.fontOpacity.title,
                        labelId: ta.VP_CC_FONT_OPACITY_LABEL,
                        items: fa(c.fontOpacity.items, a),
                        onSelect: e => {
                            n("fontOpacity", e.currentTarget.dataset.id), d()
                        }
                    },
                    edgeStyle: {
                        label: c.edgeStyle.title,
                        labelId: ta.VP_CC_FONT_EDGE_STYLE_LABEL,
                        items: fa(c.edgeStyle.items, s),
                        onSelect: e => {
                            n("edgeStyle", e.currentTarget.dataset.id), d()
                        },
                        id: ta.EDGE_STYLE_ACCORDION
                    }
                };
            return ke(We, {
                children: [ke(Wv, r({}, u.fontFamily)), ke(Kv, r({}, u.color)), ke($v, r({}, u.fontSize)), ke($v, r({}, u.fontOpacity)), ke(Wv, r({}, u.edgeStyle)), ke(RE, {
                    updateMetricsPayload: t
                }), ke(DE, {
                    setPanel: e
                })]
            })
        },
        [ep.BACKGROUND]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = mv((e => e.setCaptions)),
                i = mv((e => e.captions.bgColor)),
                o = mv((e => e.captions.bgOpacity)),
                a = Wc(),
                l = () => t({
                    has_changed_background: !0,
                    final_action_reset_all: !1
                }),
                s = {
                    bgColor: {
                        label: a.bgColor.title,
                        labelId: ta.VP_CC_BACKGROUND_COLOR_LABEL,
                        items: fa(a.bgColor.items, i),
                        onSelect: e => {
                            n("bgColor", e.currentTarget.dataset.id), l()
                        }
                    },
                    bgOpacity: {
                        label: a.bgOpacity.title,
                        labelId: ta.VP_CC_BACKGROUND_OPACITY_LABEL,
                        items: fa(a.bgOpacity.items, o),
                        onSelect: e => {
                            n("bgOpacity", e.currentTarget.dataset.id), l()
                        }
                    }
                };
            return ke(We, {
                children: [ke(Kv, r({}, s.bgColor)), ke($v, r({}, s.bgOpacity)), ke(RE, {
                    updateMetricsPayload: t
                }), ke(DE, {
                    setPanel: e
                })]
            })
        },
        [ep.WINDOW]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = mv((e => e.setCaptions)),
                i = mv((e => e.captions.windowOpacity)),
                o = mv((e => e.captions.windowColor)),
                a = Wc(),
                l = () => t({
                    has_changed_window: !0,
                    final_action_reset_all: !1
                }),
                s = {
                    windowColor: {
                        label: a.windowColor.title,
                        labelId: ta.VP_CC_WINDOW_COLOR_LABEL,
                        items: fa(a.windowColor.items, o),
                        onSelect: e => {
                            n("windowColor", e.currentTarget.dataset.id), l()
                        }
                    },
                    windowOpacity: {
                        label: a.windowOpacity.title,
                        labelId: ta.VP_CC_WINDOW_OPACITY_LABEL,
                        items: fa(a.windowOpacity.items, i),
                        onSelect: e => {
                            n("windowOpacity", e.currentTarget.dataset.id), l()
                        }
                    }
                };
            return ke(We, {
                children: [ke(Kv, r({}, s.windowColor)), ke($v, r({}, s.windowOpacity)), ke(RE, {
                    updateMetricsPayload: t
                }), ke(DE, {
                    setPanel: e
                })]
            })
        },
        [ep.PREVIEW]: ({
            updateMetricsPayload: e
        }) => ke(We, {
            children: [ke(NE, {}), ke(RE, {
                updateMetricsPayload: e
            })]
        })
    },
    kE = {
        [ep.EMPTY]: () => ke(We, {}),
        [ep.LANGUAGES]: ({
            setMenuDisplayed: e
        }) => mv((e => e.appearance.isMenuBlockingUI)) && ke(Mv, {
            title: "CC/Legendas",
            setMenuDisplayed: e
        }),
        [ep.CUSTOMIZE]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Customizar",
            onBack: e,
            setMenuDisplayed: t
        }),
        [ep.FONT]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Fonte",
            onBack: e,
            setMenuDisplayed: t
        }),
        [ep.BACKGROUND]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Fundo",
            onBack: e,
            setMenuDisplayed: t
        }),
        [ep.WINDOW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Janela",
            onBack: e,
            setMenuDisplayed: t
        }),
        [ep.PREVIEW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => ke(Mv, {
            title: "Visualização",
            onBack: e,
            setMenuDisplayed: t
        })
    },
    ME = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i
    }) => {
        const o = ep.LANGUAGES,
            {
                panel: a,
                setPanel: l,
                goToPreviousPanel: s
            } = cm(o, e),
            c = (e => wE[e] || wE[ep.EMPTY])(a),
            d = (e => kE[e] || kE[ep.EMPTY])(a),
            {
                sendBPClosedCaptionsClickEvent: u,
                updateCCMetricsPayload: _
            } = (() => {
                const e = Ip((e => e.bigPicture)),
                    t = mv((e => e.captions.language)),
                    n = mv((e => e.captions.provenance)),
                    i = mv((e => e.captions.fontSize)),
                    o = mv((e => e.captions.fontOpacity)),
                    a = mv((e => e.captions.fontFamily)),
                    l = mv((e => e.captions.color)),
                    s = mv((e => e.captions.edgeStyle)),
                    c = mv((e => e.captions.bgColor)),
                    d = mv((e => e.captions.bgOpacity)),
                    u = mv((e => e.captions.windowColor)),
                    _ = mv((e => e.captions.windowOpacity)),
                    p = Re({
                        fontSize: i,
                        fontOpacity: o,
                        fontColor: l,
                        fontFamily: a,
                        edgeStyle: s,
                        bgColor: c,
                        bgOpacity: d,
                        windowColor: u,
                        windowOpacity: _
                    }),
                    m = Re({
                        language_selected: t || "off",
                        has_updated_language: !1,
                        prev_selected_language: t || "off",
                        language_provenance: n || null,
                        prev_language_provenance: n || null,
                        has_clicked_customize: !1,
                        has_customized: !1,
                        has_clicked_font: !1,
                        has_changed_font: !1,
                        has_clicked_background: !1,
                        has_changed_background: !1,
                        has_clicked_window: !1,
                        has_changed_window: !1,
                        has_reset_all: !1,
                        final_action_reset_all: !1
                    }),
                    v = Ne((e => {
                        m.current = r(r({}, m.current), e)
                    }), []);
                return Oe((function() {
                    const e = i !== p.current.fontSize || l !== p.current.fontColor || a !== p.current.fontFamily || o !== p.current.fontOpacity || s !== p.current.edgeStyle || c !== p.current.bgColor || d !== p.current.bgOpacity || u !== p.current.windowColor || _ !== p.current.windowOpacity;
                    v({
                        has_customized: e
                    })
                }), [i, o, l, a, s, c, d, u, _, v]), {
                    sendBPClosedCaptionsClickEvent: () => {
                        e.sendEvent(Ml.CLOSED_CAPTIONS_CLICK, m.current), m.current = r(r({}, m.current), {}, {
                            prev_language_provenance: m.current.language_provenance || null,
                            prev_selected_language: m.current.language_selected,
                            has_updated_language: !1,
                            has_clicked_customize: !1,
                            has_customized: !1,
                            has_clicked_font: !1,
                            has_changed_font: !1,
                            has_clicked_background: !1,
                            has_changed_background: !1,
                            has_clicked_window: !1,
                            has_changed_window: !1,
                            has_reset_all: !1,
                            final_action_reset_all: !1
                        }), p.current = {
                            fontSize: i,
                            fontOpacity: o,
                            fontColor: l,
                            fontFamily: a,
                            edgeStyle: s,
                            bgColor: c,
                            bgOpacity: d,
                            windowColor: u,
                            windowOpacity: _
                        }
                    },
                    updateCCMetricsPayload: v
                }
            })(),
            p = Re(e);
        return Oe((() => {
            p.current && !e && u(), p.current = e
        }), [e, u]), ke(Nv, {
            type: Q_.CC,
            ariaLabel: "CC/Legendas",
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: a,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: Qa.CCMenu,
            onBack: s,
            panelContent: ke(c, {
                setPanel: l,
                setMenuDisplayed: t,
                onBack: s,
                updateMetricsPayload: _
            }),
            headerContent: ke(d, {
                setPanel: l,
                setMenuDisplayed: t,
                onBack: s
            })
        })
    };
const VE = ({
    buttonProperties: e = {}
}) => {
    const t = Re(null),
        n = Re(null),
        i = mv((e => e.setPlayback)),
        a = mv((e => e.setDisplayList)),
        l = mv((e => e.playback.volume)),
        s = mv((e => e.playback.muted)) ? 0 : l,
        c = mv((e => e.playback.supportsSettingVolume)),
        d = mv((e => e.displayList.controlBar)),
        [u, _] = Pe(!1),
        p = 100 * s,
        [m, v] = Pe(!1),
        [f, h] = Pe(!1),
        E = _p(qs.VOLUME_SLIDER) && c,
        g = u && E,
        b = Math.round(100 * s) + "% de volume";
    Oe((() => {
        d || _(!1)
    }), [d]);
    const C = e => {
            O(e)
        },
        T = () => {
            _(!0), a("menu", !1)
        },
        y = e => {
            ma(t.current, e) || ma(null == n ? void 0 : n.current, e) || _(!1), v(!1), document.removeEventListener("mouseup", y), document.removeEventListener("mousemove", C), document.removeEventListener("pointerup", y), document.removeEventListener("pointermove", C)
        },
        L = e => {
            v(!0), O(e), o.pointerEvents ? (document.addEventListener("pointerup", y), document.addEventListener("pointermove", C)) : (document.addEventListener("mouseup", y), document.addEventListener("mousemove", C))
        },
        A = () => {
            m || _(!1)
        },
        S = () => h(!0),
        I = () => h(!1);

    function O(e) {
        let n = e.clientY;
        e.targetTouches && e.targetTouches.length && (n = e.targetTouches[0].clientY, e.preventDefault());
        const o = function(e) {
            const n = or(t.current).top,
                i = or(t.current).bottom;
            return lr((i - e) / (i - n), 0, 100)
        }(n);
        i("volume", o)
    }
    const P = va("VolumeControl_module_volumeControl__a0c94891", Kr.VOLUME, of .focusable),
        R = va("VolumeControl_module_volumeBar__a0c94891", f || m ? "VolumeControl_module_mouseEnteredSlider__a0c94891" : ""),
        N = !E || e.ariaHidden || void 0,
        D = o.pointerEvents ? {
            onPointerEnter: T,
            onPointerLeave: A
        } : {
            onMouseEnter: T,
            onMouseLeave: A
        },
        w = o.pointerEvents ? {
            onPointerDown: L,
            onPointerEnter: S,
            onPointerLeave: I
        } : {
            onMouseDown: L,
            onMouseEnter: S,
            onMouseLeave: I
        };
    return ke("div", r(r({
        className: "VolumeControl_module_volumeControlContainer__a0c94891"
    }, D), {}, {
        "data-volume-control-container": !0,
        children: [ke(Kh, r({
            ref: n
        }, e)), ke(Ev, {
            visible: g,
            children: ke("div", r(r({
                role: "slider",
                className: P,
                ref: t,
                tabIndex: E ? 0 : -1,
                "aria-label": "Volume (use as teclas de setas para cima/baixo para mudar)",
                "aria-valuenow": 100 * s,
                "aria-valuetext": b,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-hidden": N,
                onBlur: () => {
                    m || _(!1)
                },
                onFocus: () => {
                    _(!0), a("menu", !1)
                },
                onTouchMove: O
            }, w), {}, {
                "data-volume-control": !0,
                children: ke("div", {
                    className: R,
                    children: [ke("div", {
                        className: "VolumeControl_module_volumeBarFill__a0c94891",
                        style: {
                            height: `${p}%`
                        }
                    }), ke("div", {
                        className: "VolumeControl_module_sliderHandle__a0c94891",
                        style: {
                            bottom: `${p}%`
                        }
                    })]
                })
            }))
        })]
    }))
};
var BE = "ControlBarButtonsAndMenus_module_progressHidden__83ef5043",
    xE = "ControlBarButtonsAndMenus_module_buttonsHidden__83ef5043",
    UE = "ControlBarButtonsAndMenus_module_collapsingEnabled__83ef5043",
    HE = "ControlBarButtonsAndMenus_module_canScroll__83ef5043";
const FE = [up.VIMEO_LOGO],
    GE = ({
        menuProps: e
    }) => {
        const t = vv(),
            n = mv((e => e.appearance.isMenuBlockingUI)),
            i = mv((e => e.appearance.isMenuVerticalVideoMode)),
            a = mv((e => e.controlBar.showAllControls)),
            l = mv((e => e.displayList.controlBarButtons)),
            s = mv((e => e.displayList.progressBar)),
            c = mv((e => e.controlBar.isExpanded)),
            d = np(),
            u = (() => {
                const e = mv((e => e.playback.canPlayPictureInPicture)),
                    t = mv((e => e.embed.fullscreen)),
                    n = mv((e => e.embed.showVimeoLogo)),
                    i = mv((e => e.embed.volume)),
                    r = mv((e => e.appearance.fullscreen)),
                    a = mv((e => e.embed.airplay)),
                    l = mv((e => e.playback.supportsAirPlay)),
                    s = mv((e => e.embed.chromecast)),
                    c = mv((e => e.chromecast.supportsChromecast)),
                    d = mv((e => e.chromecast.isChromecastReady)),
                    u = mv((e => e.appearance.stereoscopicEnabled)),
                    _ = mv((e => e.playback.supportsStereoscopic)),
                    p = mv((e => e.displayList.ad)),
                    m = mv((e => e.playback.loadedMetadata)),
                    v = mv((e => {
                        var t;
                        return null == (t = e.interactive.hotspots) ? void 0 : t.length
                    })),
                    f = mv((e => e.interactive.enabled)),
                    h = mv((e => e.interactive.ready)),
                    E = mv((e => e.liveEvent.isLiveEvent)),
                    g = mv((e => e.liveEvent.isArchived)),
                    b = !!f && (!h || v),
                    C = l && m && !p && !b && a,
                    T = s && c && d && !p && !b && (!E || g),
                    y = u && _ && !p,
                    L = e && !p,
                    A = (t || r) && !(o.iOS && v),
                    S = n && !p;
                return {
                    [up.AIRPLAY]: C,
                    [up.CHROMECAST]: T,
                    [up.FULLSCREEN]: A,
                    [up.PIP]: L,
                    [up.STEREOSCOPIC]: y,
                    [up.VIMEO_LOGO]: S,
                    [up.VOLUME]: i
                }
            })(),
            _ = Re(),
            p = Re(),
            m = Object.keys(u).filter((e => u[e])),
            v = Object.keys(d).filter((e => d[e])),
            f = !!m.length || !!v.length,
            h = m.concat(v).filter((e => !FE.includes(e))),
            E = h.length > 0,
            g = h.length > 1,
            [b, C] = Pe(!1),
            T = () => {
                if (t.getState().controlBar.showAllControls) return void C(!1);
                const e = _.current,
                    n = p.current,
                    i = null == e ? void 0 : e.children;
                if (!n || null == i || !i.length || !t.getState().displayList.controlBarButtons) return;
                const o = n.clientWidth,
                    r = Array.from(i).reduce(((e, t) => e + t.clientWidth + 4), 4);
                C(o < r)
            };
        Tp(_, T, 100), Oe((() => {
            T()
        }), [m.length, v.length]);
        const y = !n && !i,
            L = !a && g && b,
            A = !a && g,
            S = !l && g,
            I = !s && !S && E,
            O = u[up.VIMEO_LOGO],
            P = va("ControlBarButtonsAndMenus_module_wrapper__83ef5043", S && xE, !s && BE, c && "ControlBarButtonsAndMenus_module_progressExpanded__83ef5043"),
            R = va("ControlBarButtonsAndMenus_module_collapsibleWrapper__83ef5043", S && xE, !s && BE, A && UE, L && HE, I && "ControlBarButtonsAndMenus_module_buttonsOnly__83ef5043", O && "ControlBarButtonsAndMenus_module_vimeoLogoEnabled__83ef5043"),
            N = va("ControlBarButtonsAndMenus_module_collapsibleContent__83ef5043", S && xE, A && UE, L && HE);
        if (!f) return null;
        const D = {
            onFocus: e => {
                const t = null == e ? void 0 : e.target;
                if (!t || !l || a || !_.current || !p.current || !b) return;
                const n = or(t),
                    i = or(p.current);
                if (n.left > i.left && n.right < i.right) return;
                const o = n.right - i.width;
                _.current.scrollTo({
                    top: 0,
                    left: o,
                    behavior: "smooth"
                })
            }
        };
        return S && (D.ariaHidden = !0), ke("div", {
            className: P,
            children: [A && ke(eE, {}), ke("div", {
                className: R,
                ref: p,
                onKeyDown: e => {
                    "ArrowLeft" !== e.code && "ArrowRight" !== e.code || e.preventDefault()
                },
                role: "none",
                children: ke("div", {
                    className: N,
                    ref: _,
                    role: "none",
                    children: [u[up.VOLUME] && ke(VE, {
                        buttonProperties: D
                    }), d[Q_.CC] && ke(Xh, r(r({}, e[Q_.CC]), {}, {
                        ref: e[Q_.CC].buttonRef
                    }, D)), y && d[Q_.CC] && ke(ME, r({}, e[Q_.CC])), d[Q_.TRANSCRIPT] && ke(Qh, r({}, D)), d[Q_.PREFS] && ke(Yh, r(r({}, e[Q_.PREFS]), {}, {
                        ref: e[Q_.PREFS].buttonRef
                    }, D)), y && d[Q_.PREFS] && ke(yE, r({}, e[Q_.PREFS])), d[Q_.CHAPTERS] && ke(jh, r(r({}, e[Q_.CHAPTERS]), {}, {
                        ref: e[Q_.CHAPTERS].buttonRef
                    }, D)), y && d[Q_.CHAPTERS] && ke(PE, r({}, e[Q_.CHAPTERS])), u[up.CHROMECAST] && ke(Jh, r({}, D)), u[up.AIRPLAY] && ke(zh, r({}, D)), u[up.STEREOSCOPIC] && ke(Zh, r({}, D)), u[up.PIP] && ke($h, r({}, D)), u[up.FULLSCREEN] && ke(Wh, r({}, D))]
                })
            }), O && ke(qh, {})]
        })
    },
    WE = ({
        menuProps: e
    }) => {
        const t = np(),
            n = mv((e => e.appearance.isMenuBlockingUI)),
            i = mv((e => e.appearance.isMenuVerticalVideoMode));
        return (n || i) && ke(We, {
            children: [t[Q_.CC] && ke(ME, r({}, e[Q_.CC])), t[Q_.PREFS] && ke(yE, r({}, e[Q_.PREFS])), t[Q_.CHAPTERS] && ke(PE, r({}, e[Q_.CHAPTERS]))]
        })
    },
    YE = () => {
        const e = Re(null),
            t = mv((e => e.displayList.controlBar)),
            n = mv((e => e.displayList.outro)),
            i = mv((e => e.playback.playInitiated)),
            o = mv((e => e.embed.isTrailer)),
            a = mv((e => e.displayList.controlBarButtons)),
            l = mv((e => e.controlBar.showAllControls)),
            s = mv((e => e.embed.playbar)),
            c = (() => {
                const e = mv((e => e.setAppearance)),
                    [t, n] = Pe(!1);
                return {
                    onMouseEnter: () => {
                        t || e("mousedOverControlBar", !0), n(!1)
                    },
                    onMouseLeave: () => {
                        t || e("mousedOverControlBar", !1), n(!1)
                    },
                    onTouchStart: () => {
                        e("mousedOverControlBar", !0), n(!0)
                    },
                    onTouchEnd: () => {
                        e("mousedOverControlBar", !1), n(!0)
                    }
                }
            })(),
            d = sp() === lp.CENTER,
            u = o && !i,
            _ = _p(qs.PROGRESS_BAR) && s,
            [p, m] = Pe(null),
            v = (({
                setHoveredChapterId: e,
                progressBarAndButtonsRef: t
            }) => {
                const n = mv((e => e.displayList.menu)),
                    i = mv((e => e.setDisplayList)),
                    o = Re(null),
                    r = Re(null),
                    a = Re(null),
                    [l, s] = Pe(!1),
                    [c, d] = Pe(!1),
                    [u, _] = Pe(!1),
                    p = e => t => {
                        e(t), i("menu", t), e !== s && s(!1), e !== d && d(!1), e !== _ && _(!1)
                    };
                n || (s(!1), d(!1), _(!1));
                const m = p(s),
                    v = p(_),
                    f = p(d),
                    h = {
                        [Q_.CC]: {
                            isMenuDisplayed: c,
                            setMenuDisplayed: f,
                            buttonRef: a,
                            progressBarAndButtonsRef: t
                        },
                        [Q_.PREFS]: {
                            isMenuDisplayed: l,
                            setMenuDisplayed: m,
                            buttonRef: o,
                            progressBarAndButtonsRef: t
                        },
                        [Q_.CHAPTERS]: {
                            isMenuDisplayed: u,
                            setMenuDisplayed: v,
                            buttonRef: r,
                            progressBarAndButtonsRef: t,
                            onMenuOptionMouseEnter: t => {
                                var n;
                                return e(parseInt(null == t || null == (n = t.currentTarget) || null == (n = n.dataset) ? void 0 : n.id, 10))
                            },
                            onMenuOptionMouseLeave: () => e(null)
                        }
                    };
                return h
            })({
                setHoveredChapterId: m,
                progressBarAndButtonsRef: e
            }),
            f = va("ControlBar_module_controlBarWrapper__293a16b4", d && "ControlBar_module_centerPlayButton__293a16b4"),
            h = va($r.VP_CONTROLS, "ControlBar_module_controls__293a16b4", u && "ControlBar_module_trailer__293a16b4"),
            E = va("ControlBar_module_progressBarAndButtons__293a16b4", !_ && "ControlBar_module_progressBarDisabled__293a16b4", l && "ControlBar_module_showAllControls__293a16b4", a && !l && "ControlBar_module_buttonsExpanded__293a16b4");
        return ke(wv, {
            children: [ke("div", {
                className: f,
                children: [ke(xh, {
                    controlBarVisibilityHandlers: c
                }), ke(Ev, {
                    visible: t,
                    children: ke("div", r(r({
                        className: h
                    }, c), {}, {
                        "data-control-bar": !0,
                        children: !n && !u && ke("div", {
                            className: E,
                            ref: e,
                            children: [_ && ke(gE, {
                                hoveredChapterId: p
                            }), ke(GE, {
                                menuProps: v
                            })]
                        })
                    }))
                }), ke(nE, {})]
            }), ke(WE, {
                menuProps: v
            })]
        })
    },
    $E = ({
        styles: e
    }) => ke(Sv, {
        name: yp.HEART_WIDER_FILLED,
        style: e
    }),
    KE = ({
        styles: e
    }) => ke(Sv, {
        name: yp.HEART_WIDER_BROKEN_FILLED,
        style: e
    });
var qE = "AnimatedClock_module_hands__167fcd36",
    zE = "AnimatedClock_module_reverse__167fcd36";
const jE = ({
        style: e,
        animateDirection: t = "forward"
    }) => {
        const n = va(qE, "AnimatedClock_module_hour__167fcd36", "reverse" === t && zE),
            i = va(qE, "AnimatedClock_module_minute__167fcd36", "reverse" === t && zE);
        return ke("svg", {
            viewBox: "0 0 20 20",
            style: e,
            children: [ke("polyline", {
                className: n,
                points: "9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68"
            }), ke("polyline", {
                className: i,
                points: "14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65"
            }), ke("circle", {
                className: "AnimatedClock_module_circle__167fcd36",
                cx: "10",
                cy: "10",
                r: "8",
                strokeWidth: "2"
            })]
        })
    },
    XE = ({
        styles: e
    }) => ke(jE, {
        style: e
    }),
    ZE = ({
        styles: e
    }) => ke(jE, {
        animateDirection: "reverse",
        style: e
    });
const JE = () => {
    const e = Re(null),
        t = mv((e => e.displayList.menu)),
        n = mv((e => e.notification.currentNotification)),
        i = mv((e => e.setNotification)),
        {
            width: o,
            height: r
        } = mv((e => e.appearance.boundingClientRect)),
        a = _p(qs.SIDE_DOCK_MENU);
    return ke(Af, {
        fadeIn: !1,
        onContentChange: function(t) {
            null !== t && (clearTimeout(e.current), e.current = setTimeout((() => {
                i("currentNotification", null)
            }), 750))
        },
        targetContent: n,
        children: e => {
            const n = va("Notification_module_root__c083c238", null !== e && "Notification_module_active__c083c238", a && t && "Notification_module_behindSideDock__c083c238"),
                i = function(e, t, n) {
                    const i = e === dv.WatchLaterAdded || e === dv.WatchLaterRemoved ? .5 : .4,
                        o = n > t ? t : n;
                    return {
                        width: `${Math.round(o*i*1.6)}px`,
                        height: `${Math.round(o*i)}px`
                    }
                }(e, o, r);
            return ke("div", {
                className: n,
                children: [e === dv.LikedAdded && ke($E, {
                    styles: i
                }), e === dv.LikeRemoved && ke(KE, {
                    styles: i
                }), e === dv.WatchLaterAdded && ke(XE, {
                    styles: i
                }), e === dv.WatchLaterRemoved && ke(ZE, {
                    styles: i
                })]
            })
        }
    })
};
let QE = function(e) {
    return e.Backward = "backward", e.Forward = "forward", e
}({});
const eg = () => {
    const e = mv((e => e.displayList.nudgeNotification)),
        t = mv((e => e.nudge.direction)),
        n = mv((e => e.nudge.time));
    return ke(Ev, {
        visible: e,
        children: ke("div", {
            "aria-hidden": "true",
            className: `NudgeNotification_module_nudge__24f10a71 ${t===QE.Backward&&"NudgeNotification_module_nudgeBackward__24f10a71"}`,
            children: ke("div", {
                className: "NudgeNotification_module_nudgeInfo__24f10a71",
                children: [ke("div", {
                    className: "NudgeNotification_module_nudgeIcon__24f10a71",
                    children: ke(Sv, {
                        name: yp.FAST_FORWARD
                    })
                }), ke("div", {
                    className: "NudgeNotification_module_nudgeTime__24f10a71",
                    children: n ? n + " segundos" : ""
                })]
            })
        })
    })
};
var tg = "NudgeArea_module_nudgeArea__7d84d7de";
let ng;
const ig = () => {
        const e = vv(),
            t = mv((e => e.displayList.fullPlayerElement)),
            n = mv((e => e.displayList.ad)),
            i = mv((e => e.liveEvent.isLiveEvent)),
            r = mv((e => e.liveEvent.dvrEnabled)),
            a = mv((e => e.liveEvent.isArchived)),
            l = i && !a && !r,
            s = mv((e => e.embed.background)),
            c = mv((e => e.embed.controls)),
            d = mv((e => e.displayList.outro)),
            u = mv((e => e.config.video.spatial)),
            _ = mv((e => e.seekingController)),
            p = mv((e => e.playback.playInitiated)),
            m = !(!o.spatialPlayback || !u),
            v = o.touch && !t && !n && !l && !s && c && !d && !m,
            f = mv((e => e.setPlayback)),
            h = mv((e => e.setNudgeProperties)),
            E = mv((e => e.startNudgeHideTimeout)),
            [g, b] = Pe({
                left: 0,
                right: 0
            }),
            C = t => n => {
                let o;
                n.preventDefault(), t === QE.Forward ? (o = g.left + 1, b({
                    left: o,
                    right: 0
                })) : (o = g.right + 1, b({
                    left: 0,
                    right: o
                })), clearTimeout(ng), ng = setTimeout(T, 250), o >= 2 && function(t, n) {
                    let o, r;
                    const {
                        liveTailTime: a,
                        liveEdgeTime: l,
                        currentFragment: s,
                        currentTime: c
                    } = e.getState().playback;
                    i ? (o = a, r = l) : ({
                        startTime: o,
                        endTime: r
                    } = s);
                    let d = 0;
                    d = t === QE.Forward ? c + 10 : c - 10;
                    let u = _.getAllowedSeekTime(d);
                    u < o && (u = o), u >= r && (u = r - .001), t === QE.Forward && !_.canSeekNow && p || (u === d && h({
                        direction: t,
                        time: 10 + 10 * (n - 2)
                    }), E(), f("currentTime", u, {
                        seekType: "nudge"
                    }))
                }(t, o)
            };

        function T() {
            b({
                left: 0,
                right: 0
            })
        }
        return v && ke(We, {
            children: [ke("div", {
                className: `${tg} NudgeArea_module_nudgeBackwardArea__7d84d7de`,
                onTouchEnd: C(QE.Backward)
            }), ke("div", {
                className: `${tg} NudgeArea_module_nudgeForwardArea__7d84d7de`,
                onTouchEnd: C(QE.Forward)
            })]
        })
    },
    og = ({
        element: e,
        children: t
    }) => je(ke(We, {
        children: t
    }), e);
var rg = "HelpOverlay_module_hideOnSmall__079276a9",
    ag = "HelpOverlay_module_arrow__079276a9";
const lg = () => {
        const e = Ip((e => e.embed.onsite)),
            t = mv((e => e.embed.like)),
            n = mv((e => e.embed.watchLater)),
            i = mv((e => e.embed.share)),
            o = mv((e => e.embed.transcript)),
            r = mv((e => e.embed.aiWidget)),
            a = mv((e => e.playback.drm)),
            l = mv((e => e.playback.playInitiated)),
            s = [{
                key: "↑",
                text: "Aumentar volume",
                className: `${ag} ${rg}`
            }, {
                key: "↓",
                text: "Abaixar volume",
                className: `${ag} ${rg}`
            }, {
                key: "→",
                text: "Para frente",
                className: `${ag} ${rg}`
            }, {
                key: "←",
                text: "Para trás",
                className: `${ag} ${rg}`
            }, {
                key: "X",
                text: "Curtir",
                ignore: !t
            }, {
                key: "S",
                text: "Compartilhar",
                ignore: !i
            }, {
                key: "W",
                text: "Ver Depois",
                ignore: !n
            }, {
                key: "C",
                text: "Ativar/Desativar Closed Captions (CC)"
            }, {
                key: "H",
                text: "Ativar/desativar Menu de preferências"
            }, {
                key: "F",
                text: "Ativar/Desativar tela cheia"
            }, {
                key: "⇧T",
                text: "Alternar transcrição",
                ignore: !o
            }, {
                key: "⇧A",
                text: "Ativar/Desativar Vimeo AI",
                ignore: !r
            }, {
                key: "V",
                text: "Assistir no Vimeo",
                ignore: e
            }, {
                key: "J",
                text: "Para trás"
            }, {
                key: "K",
                text: "Reproduzir/Pausar"
            }, {
                key: "L",
                text: "Para frente"
            }, {
                key: "M",
                text: "Ativar som ou silenciar"
            }, {
                key: "P",
                text: "Frame da captura de tela",
                ignore: !("ClipboardItem" in window && "clipboard" in navigator) || a || !l
            }];
        return ke(We, {
            children: [ke("h1", {
                id: zr.VP_OVERLAY_LABELLEDBY,
                children: "Atalhos do Teclado"
            }), ke("div", {
                className: "HelpOverlay_module_keysWrapper__079276a9",
                "data-help-keys": !0,
                children: s.map((e => !e.ignore && ke("div", {
                    className: `HelpOverlay_module_keyWrapper__079276a9 ${e.className||""}`,
                    children: [ke("div", {
                        className: "HelpOverlay_module_keySymbol__079276a9",
                        children: e.key
                    }), ke("div", {
                        className: "HelpOverlay_module_keyText__079276a9",
                        children: e.text
                    })]
                })))
            })]
        })
    },
    sg = () => {
        const e = mv((e => e.overlay.incrementOverlayElementsUpdatedCount));
        return ke(jf, {
            onEmbedShareVisibilityChange: e
        })
    };
const cg = [St, Ot],
    dg = () => {
        const e = Ip((e => e.embed.onsite)),
            t = Ip((e => e.embed.videoId)),
            n = mv((e => e.overlay.spatialRedirectContext)),
            i = {
                title: "headset" === n ? "Atualmente, a visualização com fone de ouvido não é suportada no seu navegador de dispositivo móvel." : null,
                buttonText: "Assista no aplicativo do Vimeo",
                lowerText: "browser-support" === n ? "Os vídeos em 360 não são suportados neste navegador" : null
            },
            o = mv((e => e.embed.doNotTrack)),
            r = mv((e => !cg.includes(e.embed.privacy))),
            a = mv((e => e.embed.shareUrl));
        return ke(We, {
            children: [ke(Ev, {
                visible: !0,
                children: ke("div", {
                    className: "SpatialRedirectOverlay_module_background__43dc92f8"
                })
            }), "headset" === n && ke("div", {
                className: "SpatialRedirectOverlay_module_title__43dc92f8",
                children: i.title
            }), r && ke(cf, {
                className: "SpatialRedirectOverlay_module_button__43dc92f8",
                onClick: () => {
                    const n = o ? a : function(e) {
                        return `https://vimeo.page.link/?link=https%3A%2F%2Fvimeo.com%2F${e}%3Futm_source%3Dvimeo%26utm_campaign%3Dmobileweb%26utm_content%3Dplayer-button-360video&apn=com.vimeo.android.videoapp&ibi=com.vimeo&isi=425194759&utm_source=vimeo&utm_campaign=mobileweb&utm_content=player-button&ct=360video&pt=417731&efr=1`
                    }(t);
                    window.open(n, e && "_blank", e ? "noopener" : "")
                },
                children: i.buttonText
            }), "browser-support" === n && ke("div", {
                className: "SpatialRedirectOverlay_module_lowerText__43dc92f8",
                children: i.lowerText
            })]
        })
    },
    ug = () => {
        const e = mv((e => e.overlay.purpose)),
            t = mv((e => e.displayList.overlay)),
            n = mv((e => e.setDisplayList)),
            i = Ia(e) ? null : e;
        return ke(Af, {
            onContentChange: e => {
                n("overlay", !(null === e || e === Sa.EMPTY))
            },
            styleOverrides: {
                exitDone: {
                    display: "block",
                    visibility: "hidden"
                }
            },
            targetContent: i,
            children: n => ke(eh, {
                visible: n === e && t,
                children: [n === Sa.ERROR && ke(Jf, {}), n === Sa.HELP && ke(lg, {}), n === Sa.SHARE && ke(sg, {}), n === Sa.SPATIAL_REDIRECT && ke(dg, {})]
            })
        })
    };
const _g = () => {
    const {
        pipOverlay: e
    } = mv((e => e.displayList));
    return ke(Ev, {
        visible: e,
        children: ke("div", {
            className: "PipOverlay_module_overlay__8ff12d1a",
            "aria-hidden": "true",
            children: [ke(Sv, {
                name: yp.PIP
            }), ke("div", {
                className: "PipOverlay_module_title__8ff12d1a",
                children: "Reproduzindo em PiP (picture-in-picture)"
            })]
        })
    })
};
const pg = () => {
    const e = mv((e => e.liveEvent.isLiveEvent)),
        t = mv((e => e.liveEvent.isPlayable)),
        n = mv((e => e.playback.paused)),
        i = mv((e => e.liveEvent.isEnded)),
        o = e && !i,
        r = mv((e => e.displayList.controlBar)),
        a = mv((e => e.displayList.topCenterActionItem)),
        l = mv((e => e.displayList.title)),
        s = mv((e => e.displayList.toast)),
        c = mv((e => e.playback.atLiveEdge));
    return !!o && ke(Ev, {
        visible: (r || a) && !(l || s) && t && !n && c,
        children: ke("div", {
            className: "LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__62de121d",
            "aria-hidden": "true",
            children: [ke(fg, {}), ke(bg, {})]
        })
    })
};
var mg = "LiveStatusLabel_module_offline__dccd53f8",
    vg = "LiveStatusLabel_module_live__dccd53f8";
const fg = () => {
    const e = mv((e => e.embed.hideLiveLabel)),
        t = mv((e => e.liveEvent.isLiveEvent)),
        n = mv((e => e.liveEvent.isPlayable)),
        i = mv((e => e.liveEvent.isArchived)),
        o = va("LiveStatusLabel_module_liveStatusCircle__dccd53f8", n ? vg : mg),
        r = va("LiveStatusLabel_module_liveStatusText__dccd53f8", n ? vg : mg);
    return t && !i && !e && ke("div", {
        className: "LiveStatusLabel_module_liveStatusLabel__dccd53f8",
        "data-live-status-label": !0,
        children: [ke("div", {
            className: o
        }), ke("span", {
            className: r,
            children: "AO VIVO"
        })]
    })
};

function hg(e, t) {
    try {
        var n = e()
    } catch (ke) {
        return t(ke)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Eg() {}

function gg(e) {
    if (e && e.then) return e.then(Eg)
}
const bg = () => {
        const e = Ip((e => e.embed.videoId)),
            t = Ip((e => e.config.vimeo_api_url)),
            n = mv((e => e.events)),
            i = mv((e => e.updatePhpTokens)),
            o = mv((e => e.liveEvent.isPlayable)),
            r = mv((e => e.embed.showViewerCount)),
            a = mv((e => e.liveEvent.viewerCount)),
            l = mv((e => e.liveEvent.liveStatsRequestSucceeded)),
            s = mv((e => e.liveEvent.isStarted)),
            c = mv((e => e.liveEvent.isOnline)),
            d = mv((e => e.embed.privacy)),
            u = mv((e => e.embed.videoUnlistedHash)),
            _ = mv((e => e.user.vimeoBucketedLiveClientToken)),
            p = s && r && c,
            m = Ne(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (ke) {
                        return Promise.reject(ke)
                    }
                }
            }((function() {
                let o = `${e}`;
                d === ja.PRIVACY_UNLISTED && u && (o += `:${u}`);
                const r = `https://${t}/videos/${o}/stats/live`,
                    a = {
                        jwt_token: _
                    };
                return gg(hg((function() {
                    return function(e, t) {
                        try {
                            var n = Promise.resolve(e());
                            return t ? n.then(t) : n
                        } catch (ke) {
                            return Promise.reject(ke)
                        }
                    }(i, (function() {
                        return gg(hg((function() {
                            return function(e, t) {
                                return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                            }(y({
                                url: r,
                                searchParams: a
                            }).json(), (function(e) {
                                e.viewers && n.fire(K.LIVE_STATS_SUCCESS, {
                                    viewerCount: e.viewers.current
                                })
                            }))
                        }), (function() {
                            n.fire(K.LIVE_STATS_FAILURE)
                        })))
                    }))
                }), (function(e) {
                    n.fire(K.LIVE_STATS_FAILURE)
                })))
            })), [n, i, e, t, _, d, u]);
        return Oe((() => {
            if (p) {
                m();
                const e = setInterval(m, 3e4);
                return () => clearInterval(e)
            }
            return () => {}
        }), [p, m]), o && r && l && ke("div", {
            className: "LiveViewerCounter_module_liveViewerCounter__29a255e3",
            "data-live-viewer-counter": !0,
            children: [ke(Sv, {
                className: "LiveViewerCounter_module_liveViewerCounterIcon__29a255e3",
                name: yp.PERSON_FILLED
            }), ke("span", {
                className: "LiveViewerCounter_module_liveViewerCountValue__29a255e3",
                "data-live-viewer-count": !0,
                children: a
            })]
        })
    },
    Cg = [Lr.privateLocked, Lr.privatePassword, Lr.geoBlocked, Lr.drmPlaybackUnavailable],
    Tg = {
        [Ma.LIGHT]: ka.EIGHTY,
        [Ma.DARK]: ka.TWENTY
    },
    yg = "transparent !important",
    Lg = () => {
        const e = Ip((e => e.uuid)),
            t = Ip((e => e.view)),
            n = Ip((e => e.embed.transparent)),
            i = Ip((e => e.colors.colorOne)),
            o = Ip((e => e.colors.colorTwo)),
            r = Ip((e => e.colors.colorThree)),
            a = Ip((e => e.colors.colorFour)),
            l = [
                [wa.ONE, Ba(i, ka.ONE_HUNDRED)],
                [wa.TWO, Ba(o, ka.ONE_HUNDRED)],
                [wa.THREE, Ba(r, ka.ONE_HUNDRED)],
                [wa.FOUR, Ba(a, ka.ONE_HUNDRED, {
                    forceHexAlpha: !0
                })],
                [wa.ONE_MONOCHROME, Ba(i, ka.ONE_HUNDRED, {
                    monochrome: !0
                })],
                [wa.TWO_MONOCHROME, Ba(o, ka.ONE_HUNDRED, {
                    monochrome: !0
                })],
                [wa.ONE_OPACITY_NINETY, Ba(i, ka.NINETY, {
                    forceHexAlpha: !0
                })],
                [wa.TWO_OPACITY_NINETY, Ba(o, ka.NINETY, {
                    forceHexAlpha: !0
                })],
                [wa.THREE_OPACITY_TWENTY, Ba(r, ka.TWENTY)],
                [wa.ONE_MONOCHROME_OPACITY_TWENTY, Ba(i, ka.TWENTY, {
                    monochrome: !0
                })],
                [wa.TWO_MONOCHROME_OPACITY_TWENTY, Ba(o, ka.TWENTY, {
                    monochrome: !0
                })],
                [wa.ONE_MONOCHROME_OPACITY_SIXTY, Ba(i, ka.SIXTY, {
                    monochrome: !0
                })],
                [wa.TWO_COMPLEMENT, Ba(o, ka.ONE_HUNDRED, {
                    complement: !0
                })],
                [wa.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY, Ba(i, Tg, {
                    monochrome: !0
                })],
                [wa.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY, Ba(o, Tg, {
                    monochrome: !0
                })]
            ];
        let s, c;
        return Cg.includes(t) ? (s = "#000 !important", c = yg) : n ? (s = yg, c = yg) : (s = `var(${wa.FOUR})`, c = `var(${wa.FOUR})`), ke("style", {
            type: "text/css",
            "data-player-colors": e,
            children: [`.player-${e} {\n                ${xa(l)}\n            }`, `.player-${e} {\n                background-color: ${s};\n            }`, `.player-${e} .${$r.VP_VIDEO_WRAPPER} {\n                background-color: ${c};\n            }`]
        })
    };
const Ag = () => {
    const e = mv((e => e.embed.rightContentAreaEnabled)),
        t = mv((e => e.displayList.rightContentArea)),
        n = mv((e => e.appearance.rightContentAreaAnimating));
    let i = mv((e => e.element));
    const r = {
            transcript: {
                component: Mg,
                displayed: mv((e => e.displayList.transcript))
            },
            aiWidget: {
                component: tb,
                displayed: mv((e => e.displayList.aiWidget))
            }
        },
        a = o.isGoogleBot && r.transcript.displayed;
    var l;
    a && (i = null == (l = i) ? void 0 : l.parentElement);
    const s = va("RightContentArea_module_rightContentArea__98a162b1", t && "RightContentArea_module_visible__98a162b1", ps && "RightContentArea_module_iframeEmbed__98a162b1", a && "RightContentArea_module_googleBot__98a162b1"),
        c = Object.keys(r).some((e => {
            var t;
            return null == (t = r[e]) ? void 0 : t.displayed
        })),
        d = !t && n,
        u = d ? 400 : void 0,
        _ = d || c && t && !n ? void 0 : 0,
        p = {
            exitDone: {
                visibility: "hidden",
                display: "block"
            }
        };
    return e && je(ke("div", {
        id: zr.RIGHT_CONTENT_AREA,
        className: s,
        "aria-hidden": !t,
        children: Object.keys(r).map((function(e) {
            var t, n;
            const i = null == (t = r[e]) ? void 0 : t.component,
                o = null == (n = r[e]) ? void 0 : n.displayed;
            return i ? ke(Ev, {
                duration: _,
                visible: o,
                delay: u,
                styleOverrides: p,
                children: ke(i, {})
            }, e) : null
        }))
    }), i)
};
const Sg = () => {
    const [e, t] = Pe(!1), n = mv((e => e.appearance.placeholderThumbnail)), i = mv((e => e.appearance.appSizeMode)), a = mv((e => e.appearance.appBreakpoint)), l = mv((e => e.embed.rightContentAreaEnabled)), s = mv((e => e.displayList.rightContentArea)), c = mv((e => e.appearance.rightContentAreaAnimating)), d = mv((e => e.element)), u = l && (s || c), _ = a === xs.XS || a === xs.XXS || i === $a.MINI || i === $a.TINY, p = va("ContentAreaBackground_module_img__5e37c38e", e && "ContentAreaBackground_module_loaded__5e37c38e"), m = _ ? {
        visible: s,
        duration: 400
    } : {
        visible: u,
        duration: 0
    };
    return o.isGoogleBot ? null : je(ke(Ev, r(r({}, m), {}, {
        children: ke("div", {
            className: "ContentAreaBackground_module_imgContainer__5e37c38e",
            children: ke("img", {
                onLoad: () => t(!0),
                alt: "Miniatura de foto do vídeo",
                className: p,
                src: n
            })
        })
    })), null == d ? void 0 : d.querySelector(`.${qr.CONTENT_AREA_BACKGROUND_CONTAINER}`))
};
Xe(".TranscriptError_lazy_module_refresh__eeacf550{background:#ffffff1a;border:none;border-radius:4px;gap:4px;height:32px;padding:4px 12px}.TranscriptError_lazy_module_icon__eeacf550{height:40px;width:40px}", {});
const {
    Provider: Ig,
    useStore: Og
} = De(), Pg = {
    timecodeDisplayed: !0,
    selectedSettingsMenu: I_.MAIN,
    settingsDisplayed: !1,
    currentSearchResultIndex: 0,
    searchTerms: {
        terms: "",
        timestamp: null
    },
    searchResults: [],
    transcriptDisabled: !1,
    autofollowEnabled: !0
}, Rg = ({
    children: e
}) => {
    const t = mv((e => e.subscribe)),
        n = mv((e => e.captions.textTrackEls)),
        i = mv((e => e.captions.rtlTracks)),
        o = mv((e => e.config)),
        a = mv((e => e.events)),
        l = mv((e => e.displayList.transcript)),
        s = mv((e => e.displayList.fullPlayerElement)),
        c = mv((e => e.appearance.appBreakpoint)),
        d = mv((e => e.appearance.appSizeMode)),
        u = Ip((e => e.bigPicture)),
        _ = ((e, t) => e.map((e => {
            const n = e.id.replace(Qr.TEXT_TRACK_ID_PREFIX, ""),
                i = t.includes(n);
            return {
                id: e.id,
                label: e.label,
                language: e.srclang,
                rtl: i
            }
        })))(n, i),
        p = w_(o, _),
        m = Re(null == p ? void 0 : p.language);
    return ke(Ig, {
        createStore: () => Me(((e, n) => {
            const i = (t, n) => e((e => r(r({}, e), {}, {
                    [t]: n
                }))),
                o = Pg.selectedSettingsMenu,
                v = e => i("selectedSettingsMenu", e),
                f = Pg.settingsDisplayed,
                h = t => {
                    var i, o;
                    const l = {};
                    if (t !== (null == (i = n()) ? void 0 : i.settingsDisplayed)) {
                        var s;
                        l.settingsDisplayed = t;
                        const e = null == (s = n()) || null == (s = s.selectedTrack) ? void 0 : s.language;
                        t ? u.sendEvent(Ml.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "open_embed_transcript_setting",
                            copy: "settings",
                            location: "player_embedded_transcript",
                            element: "embedded_transcript_settings_menu",
                            current_transcript_language: e
                        }) : t || e === m.current || (u.sendEvent(Ml.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "change_language_settings",
                            copy: e,
                            location: "player_embedded_transcript_settings",
                            element: "language_select_panel",
                            current_transcript_language: e
                        }), m.current = e)
                    }(null == (o = n()) ? void 0 : o.settingsDisplayed) && !t && (l.selectedSettingsMenu = Pg.selectedSettingsMenu), Object.keys(l).length && e((e => r(r({}, e), l)));
                    const c = t ? kr : "";
                    a.fire(Kn, c)
                },
                E = Pg.timecodeDisplayed,
                g = Pg.currentSearchResultIndex,
                b = e => i("currentSearchResultIndex", e),
                C = Pg.searchResults,
                T = e => {
                    0 === e.length && i("currentSearchResultIndex", 0), i("searchResults", e)
                },
                y = Pg.searchTerms,
                L = e => i("searchTerms", e),
                A = !l || s,
                S = Ng(c, d),
                I = Pg.autofollowEnabled;

            function O() {
                L(Pg.searchTerms), T(Pg.searchResults), b(Pg.currentSearchResultIndex)
            }
            return t((e => {
                var t;
                return null == e || null == (t = e.displayList) ? void 0 : t.transcript
            }), (e => {
                e || (h(Pg.settingsDisplayed), v(Pg.selectedSettingsMenu))
            })), t((e => {
                var t, n;
                return {
                    transcriptVisible: null == e || null == (t = e.displayList) ? void 0 : t.transcript,
                    overlayVisible: null == e || null == (n = e.displayList) ? void 0 : n.fullPlayerElement
                }
            }), (({
                transcriptVisible: e,
                fullPlayerElement: t
            }) => {
                i("transcriptDisabled", !(e && !t))
            })), t((e => {
                var t, n;
                return {
                    breakpoint: null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint,
                    sizeMode: null == e || null == (n = e.appearance) ? void 0 : n.appSizeMode
                }
            }), (({
                breakpoint: t,
                sizeMode: i
            }) => {
                const o = Ng(t, i);
                o !== n().transcriptSizeMode && e((e => r(r({}, e), {}, {
                    transcriptSizeMode: o
                })))
            })), t((e => {
                var t, n;
                return {
                    outroDisplayed: null == e || null == (t = e.displayList) ? void 0 : t.outro,
                    animationActive: null == e || null == (n = e.appearance) ? void 0 : n.rightContentAreaAnimating
                }
            }), (({
                outroDisplayed: e,
                animationActive: t
            }) => {
                e && !t && O()
            })), {
                timecodeDisplayed: E,
                searchTerms: y,
                setSearchTerms: L,
                resetSearchTerms: () => L(Pg.searchTerms),
                currentSearchResultIndex: g,
                setCurrentSearchResultIndex: b,
                settingsDisplayed: f,
                setSettingsDisplayed: h,
                selectedTrack: p,
                availableTracks: _,
                setSelectedTrack: e => {
                    const t = _.find((t => t.id === e));
                    i("selectedTrack", t), O(), a.fire(Ro, t)
                },
                selectedSettingsMenu: o,
                setSelectedSettingsMenu: v,
                searchResults: C,
                setSearchResults: T,
                toggleTimecodeDisplayed: () => {
                    var e;
                    return i("timecodeDisplayed", !(null != (e = n()) && e.timecodeDisplayed))
                },
                toggleSettingsDisplayed: () => {
                    var e;
                    return h(!(null != (e = n()) && e.settingsDisplayed))
                },
                transcriptDisabled: A,
                transcriptSizeMode: S,
                autoFollowEnabled: I,
                setAutoFollowEnabled: e => i("autoFollowEnabled", e)
            }
        })),
        children: e
    })
};

function Ng(e, t) {
    const n = e === xs.XS || e === xs.XXS,
        i = t === $a.MINI || t === $a.TINY;
    return n || i ? O_.SMALL : e === xs.XL || e === xs.XXL ? O_.LARGE : O_.MEDIUM
}
const Dg = ({
    onClose: e
}) => {
    const t = va(qr.EXCLUDE_GLOBAL_BUTTON_STYLES, "ContentAreaCloseButton_module_closeContentAreaButton__22a1987e", of .focusableButton),
        n = "Fechar";
    let i = Us.MD;
    const r = mv((e => e.appearance.appBreakpoint)),
        a = mv((e => e.displayList.rightContentArea));
    r !== xs.XL && r !== xs.XXL || (i = Us.CUSTOM);
    const {
        onClick: l,
        onKeyDown: s
    } = sa(e), c = ke(cf, {
        onClick: l,
        onKeyDown: s,
        size: i,
        icon: ke(Sv, {
            name: yp.CLOSE,
            focusable: "false"
        }),
        "aria-label": n,
        disabled: !a,
        color: Hs.CUSTOM,
        className: t
    });
    return o.touch ? c : ke(jv, {
        tooltipContent: n,
        className: "ContentAreaCloseButton_module_tooltip__22a1987e",
        children: c
    })
};
const wg = ({
        message: e,
        icon: t,
        componentType: n,
        children: i,
        onClose: o
    }) => ke("div", {
        className: "ContentAreaMessage_module_container__7df41131",
        "data-component-type": n,
        children: [ke(Dg, {
            onClose: o
        }), t || ke(Sv, {
            name: yp.INFO_CIRCLE,
            className: "ContentAreaMessage_module_icon__7df41131"
        }), ke(tf, {
            size: Ws.MD,
            weight: Ys.NORMAL,
            className: "ContentAreaMessage_module_messageText__7df41131",
            children: e
        }), i]
    }),
    kg = ({
        onRetry: e
    }) => {
        const t = Ip((e => e.bigPicture)),
            n = Og((e => e.selectedTrack)),
            i = mv((e => e.setDisplayList)),
            o = "Atualizar",
            r = ke(Sv, {
                name: yp.WARN_CIRCLE,
                className: "TranscriptError_lazy_module_icon__eeacf550"
            });
        return ke(wg, {
            message: "Houve um problema ao carregar a transcrição.",
            onClose: () => i("transcript", !1),
            componentType: "transcript-error",
            icon: r,
            children: ke(cf, {
                className: "TranscriptError_lazy_module_refresh__eeacf550",
                color: Hs.PRIMARY,
                onClick: () => {
                    e(), t.sendEvent(Ml.EMBEDDED_TRANSCRIPT_CLICK, {
                        name: "click_refresh_error",
                        copy: o,
                        location: "player_embedded_transcript_error",
                        element: "refresh_transcript_button",
                        current_transcript_language: null == n ? void 0 : n.language
                    })
                },
                "data-component-type": "retry-request",
                children: ke(tf, {
                    size: Ws.MD,
                    weight: Ys.BOLD,
                    color: $s.WHITE,
                    children: o
                })
            })
        })
    };
const Mg = ({
    style: e = {}
}) => {
    const t = Re(!0),
        n = mv((e => e.displayList.transcript)),
        {
            module: i,
            load: o,
            readyState: r
        } = rp(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (ke) {
                    return Promise.reject(ke)
                }
            }
        }((function() {
            return import ("./Transcript.lazy.pt-BR.module.js")
        }))),
        a = null == i ? void 0 : i.Transcript,
        l = mv((e => e.embed.transcript));
    if (n && t.current && (o(), t.current = !1), !l || r !== ip.LOADED && !n) return null;
    const s = va(!n && "TranscriptLoader_module_hidden__48b2f57a");
    return ke("div", {
        style: e,
        className: s,
        children: [r === ip.LOADING && ke(mf, {}), r === ip.ERROR && ke(kg, {
            onRetry: o
        }), r === ip.LOADED && ke(a, {})]
    })
};
let Vg;
const Bg = () => {
    const e = mv((e => e.playback.buffering)),
        t = mv((e => e.chromecast.isChromecastBuffering)),
        n = mv((e => e.chromecast.isChromecastConnected)),
        i = mv((e => e.displayList.progressBar)),
        [o, r] = Pe(!1);
    return e || t ? Vg = setTimeout((() => {
        r(!0)
    }), 600) : (clearTimeout(Vg), r(!1)), i && ke(We, {
        children: [ke(Ev, {
            visible: n || o,
            styleOverrides: {
                enterActive: {
                    opacity: .4
                },
                enterDone: {
                    opacity: .4
                },
                exit: {
                    opacity: .4
                },
                exitDone: {
                    display: "none"
                }
            },
            children: ke("div", {
                className: "BufferHandler_module_shade__a4e303c9",
                "data-shade": !0
            })
        }), ke(Ev, {
            visible: o,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: ke(mf, {
                size: Ks.LG
            })
        })]
    })
};
const xg = () => {
    const e = mv((e => e.captions.activeCues)),
        t = mv((e => e.captions.language)),
        n = mv((e => e.captions.direction)),
        i = mv((e => e.displayList.captions)),
        o = mv((e => e.displayList.controlBar)),
        r = mv((e => e.displayList.progressBar)),
        a = mv((e => e.appearance.fullscreen)),
        l = mv((e => e.embed.rightContentAreaEnabled)),
        s = mv((e => e.captions.fontSize)),
        c = mv((e => e.captions.fontFamily)),
        d = mv((e => e.captions.fontOpacity)),
        u = mv((e => e.captions.color)),
        _ = mv((e => e.captions.bgColor)),
        p = mv((e => e.captions.bgOpacity)),
        m = mv((e => e.captions.windowOpacity)),
        v = mv((e => e.captions.windowColor)),
        f = mv((e => e.captions.edgeStyle)),
        h = mv((e => e.appearance.videoHeight)),
        E = mv((e => e.appearance.containerHeight)),
        g = Ip((e => e.embed.transparent));
    let b = null,
        C = {};
    !a && g || h < E - 58 && (b = `translateY(-${(E-h)/2}px)`, C.transform = b);
    const T = va("Captions_module_captions__0d35c569", !i && "Captions_module_hide__0d35c569", o && !b && "Captions_module_withControls__0d35c569", !r && "Captions_module_noPlaybar__0d35c569", a && "Captions_module_fullscreen__0d35c569", l && "Captions_module_contentAreaSibling__0d35c569");
    return ke(vf, {
        cues: e,
        language: t,
        direction: n,
        className: T,
        fontSize: s,
        fontFamily: c,
        fontOpacity: d,
        color: u,
        bgColor: _,
        bgOpacity: p,
        windowOpacity: m,
        windowColor: v,
        edgeStyle: f,
        height: h,
        style: C
    })
};
var Ug = "QoESurvey_module_selected__32b208ff";
let Hg;
const Fg = ({
        containerRef: e
    }) => {
        const t = mv((e => e.closeToast)),
            n = Ip((e => e.bigPicture)),
            [i, o] = Pe(!1),
            [r, a] = Pe(!1),
            [l, s] = Pe(!1);
        Oe((() => {
            n.sendEvent(Ml.VIEW_PLAYER_CSAT_V1), Hg = setTimeout(t, 1e4)
        }), [n, t]);
        const c = "Ruim";
        return ke(We, {
            children: [ke(Tf, {
                transitionTime: 1e4,
                ariaLabelledby: Zr.QOE_SURVEY_TEXT
            }), ke(yf, {
                id: Zr.QOE_SURVEY_TEXT,
                children: "Como está a visualização?"
            }), ke(gf, {
                className: `QoESurvey_module_thumbsUp__32b208ff ${i?Ug:""}`,
                tooltipLabel: "Boa",
                "aria-label": "Boa",
                "aria-describedby": Zr.QOE_SURVEY_TEXT,
                icon: ke(Sv, {
                    name: i ? yp.THUMBS_UP_FILLED : yp.THUMBS_UP
                }),
                onClick: () => {
                    i || r || l || (n.sendEvent(Ml.SELECT_THUMBS_UP_PLAYER_CSAT_V1), o(!0), clearTimeout(Hg), setTimeout(t, 200))
                },
                containerRef: e
            }), ke(gf, {
                className: `QoESurvey_module_thumbsDown__32b208ff ${r?Ug:""}`,
                tooltipLabel: c,
                "aria-label": c,
                "aria-describedby": Zr.QOE_SURVEY_TEXT,
                icon: ke(Sv, {
                    name: r ? yp.THUMBS_DOWN_FILLED : yp.THUMBS_DOWN
                }),
                onClick: () => {
                    i || r || l || (n.sendEvent(Ml.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1), a(!0), clearTimeout(Hg), setTimeout(t, 200))
                },
                containerRef: e
            }), ke(hf, {}), ke(Lf, {
                onClick: () => {
                    i || r || l || (n.sendEvent(Ml.DISMISS_PLAYER_CSAT_V1), s(!0), clearTimeout(Hg), t())
                },
                describedBy: Zr.QOE_SURVEY_TEXT,
                selected: l
            })]
        })
    },
    Gg = () => {
        const e = mv((e => e.playback.liveEdgeTime)),
            t = mv((e => e.setPlayback)),
            n = Ip((e => e.bigPicture));
        return ke(Cf, {
            onClick: () => {
                t("atLiveEdge", !0), t("currentTime", e), n.sendEvent(Ml.SKIP_TO_LIVE_CLICK)
            },
            label: "Ir para a transmissão ao vivo"
        })
    },
    Wg = () => {
        const e = mv((e => e.closeToast));
        return ke(We, {
            children: [ke(yf, {
                id: Zr.BROADCAST_OVER,
                children: "A transmissão ao vivo acabou"
            }), ke(hf, {}), ke(Lf, {
                onClick: e,
                describedBy: Zr.BROADCAST_OVER
            })]
        })
    },
    Yg = () => {
        const e = mv((e => e.closeToast));
        return Oe((() => {
            const t = setTimeout(e, 3e3);
            return () => {
                clearTimeout(t)
            }
        }), [e]), ke(We, {
            children: [ke(Tf, {
                transitionTime: 3e3,
                ariaLabelledby: Zr.FRAME_CAPTURED
            }), ke(yf, {
                id: Zr.FRAME_CAPTURED,
                children: "Captura de tela copiada para a sua área de transferência!"
            }), ke(hf, {}), ke(Lf, {
                onClick: e,
                describedBy: Zr.FRAME_CAPTURED
            })]
        })
    };
const $g = {
        [nv.QOE_SURVEY]: Zr.QOE_SURVEY_TEXT,
        [nv.BROADCAST_OVER]: Zr.BROADCAST_OVER
    },
    Kg = () => {
        const e = Re(null),
            t = mv((e => e.toast.purpose)),
            n = mv((e => e.appearance.fullscreen)),
            i = mv((e => e.setDisplayList)),
            r = $g[t],
            a = "translateY(" + (n && o.iPadOS ? "calc(36px + 16px)" : "0") + ")",
            l = "translateY(calc(-100% - 16px))",
            s = "transform 400 ease-in-out",
            c = {
                enter: {
                    transform: l,
                    opacity: 1
                },
                enterActive: {
                    transition: s,
                    transform: a
                },
                enterDone: {
                    transform: a
                },
                exit: {
                    transform: a
                },
                exitActive: {
                    transition: s,
                    transform: l,
                    opacity: 1
                },
                exitDone: {
                    transform: l,
                    display: "none"
                }
            };
        return ke(Af, {
            targetContent: t !== nv.EMPTY ? t : null,
            onContentChange: e => {
                i("toast", !!e)
            },
            delay: 400,
            styleOverrides: c,
            children: t => ke(ff, {
                className: "Toasts_module_toasts__25d07d44",
                ref: e,
                ariaLabelledby: r,
                children: [t === nv.QOE_SURVEY && ke(Fg, {
                    containerRef: e
                }), t === nv.SKIP_TO_LIVE && ke(Gg, {}), t === nv.BROADCAST_OVER && ke(Wg, {}), t === nv.FRAME_CAPTURED && ke(Yg, {})]
            })
        })
    };
const qg = ({
        text: e
    }) => ke("div", {
        className: "SpatialInstructions_module_instructions__4867d5d0",
        children: ke(tf, {
            size: Ws.MD,
            weight: Ys.NORMAL,
            children: e
        })
    }),
    zg = () => {
        const e = mv((e => e.liveEvent.isLiveEvent)) ? "Ativar áudio da transmissão" : "Ativar som",
            {
                unmute: t
            } = cp();
        return ke(Cf, {
            onClick: t,
            label: e
        })
    },
    jg = () => {
        const e = mv((e => e.setAppearance)),
            t = mv((e => e.clearSegment)),
            n = mv((e => e.playback.startTime)),
            i = mv((e => e.playback.endTime)),
            o = Ip((e => e.bigPicture));
        return ke(Cf, {
            onMouseEnter: () => e("mousedOverControlBar", !0),
            onMouseLeave: () => e("mousedOverControlBar", !1),
            onClick: () => {
                o.sendEvent(Ml.WATCH_FULL_VIDEO, {
                    start_time: n,
                    end_time: i
                }), t()
            },
            label: "Assista ao vídeo completo"
        })
    };
const Xg = o.android ? "Olhe por aí" : "Clique e arraste para ver mais",
    Zg = o.android ? "Olhe por aí" : "Use as teclas de setas para ver mais opções",
    Jg = () => {
        const e = mv((e => e.topCenterActionItem.purpose)),
            t = mv((e => e.setDisplayList));
        return ke(Af, {
            targetContent: e !== u_.EMPTY ? e : null,
            onContentChange: e => {
                t("topCenterActionItem", !!e)
            },
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: e => ke(ff, {
                className: "TopCenterActionItems_module_topCenterActionItems__2bfde47f",
                children: [e === u_.UNMUTE && ke(zg, {}), e === u_.WATCH_FULL_VIDEO && ke(jg, {}), e === u_.SPATIAL_INSTRUCTIONS_CLICK && ke(qg, {
                    text: Xg
                }), e === u_.SPATIAL_INSTRUCTIONS_ARROWS && ke(qg, {
                    text: Zg
                })]
            })
        })
    };
const Qg = ({
    onReload: e
}) => {
    const t = mv((e => e.setDisplayList)),
        n = va(qr.EXCLUDE_GLOBAL_BUTTON_STYLES, "AIWidgetError_module_reload__12d5a300");
    return ke(wg, {
        message: "Não foi possível carregar o Vimeo AI",
        componentType: "ai-error",
        onClose: () => t("aiWidget", !1),
        children: ke(cf, {
            className: n,
            size: Us.CUSTOM,
            onClick: e,
            "data-component-type": "reload-ai",
            children: ke(tf, {
                size: Ws.MD,
                weight: Ys.BOLD,
                children: "Tente de novo"
            })
        })
    })
};
const eb = "Ask Vimeo AI",
    tb = ({
        style: e = {}
    }) => {
        const t = mv((e => e.displayList.aiWidget)),
            i = Ip((e => e.embed.vimeoUrl)),
            o = Ip((e => e.embed.videoId)),
            a = Ip((e => e.embed.onsite)),
            l = mv((e => e.embed.videoUnlistedHash)),
            s = mv((e => e.setDisplayList)),
            c = mv((e => e.appearance.rightContentAreaAnimating)),
            d = mv((e => e.embed.aiWidgetSignature)),
            u = Ip((e => e.bigPicture)),
            _ = Cp(t),
            [p, m] = Pe(!1),
            v = va("AIWidget_module_aiWidget__9bd9d0b8", !t && "AIWidget_module_hidden__9bd9d0b8"),
            f = {
                transparentBackground: !a
            };
        d && (f.guestSignature = d);
        const h = n(`https://${i}/ai-player/${o}${l?`/${l}`:""}`, f),
            {
                componentVersion: E,
                hasError: g,
                componentTimeout: b,
                onError: C,
                onReload: T
            } = dp(),
            y = Ne((() => {
                u.sendEvent(Ml.OPEN_AI_OPTIONS, {}, {
                    [Vl.WEB]: {
                        page_name: "player"
                    },
                    [Vl.PRODUCT_ANALYTICS]: {
                        copy: eb,
                        feature: "ai",
                        product: "ai",
                        element: "icon"
                    }
                })
            }), [u]);
        return Oe((() => {
            t && (y(), p || m(!0))
        }), [t]), ke("div", r(r({
            className: v,
            style: e,
            "aria-label": "Perguntar ao Vimeo AI"
        }, _), {}, {
            children: [g && ke(Qg, {
                onReload: T
            }), !g && p && ke(Df, {
                id: Xr.AI_WIDGET_ID,
                url: h,
                title: eb,
                onError: C,
                timeout: b,
                visible: t,
                onClose: () => {
                    s("aiWidget", !1)
                },
                isAnimating: c,
                waitForReady: !0
            }, E)]
        }))
    },
    nb = () => {
        const e = Re(!0),
            {
                module: t,
                load: n,
                readyState: i
            } = rp(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (ke) {
                        return Promise.reject(ke)
                    }
                }
            }((function() {
                return import ("./Compass.lazy.pt-BR.module.js")
            }))),
            o = null == t ? void 0 : t.Compass,
            r = mv((e => e.playback.playInitiated)),
            a = mv((e => e.embed.compass));
        return a && r && e.current && (n(), e.current = !1), !a || i !== ip.LOADED && !r ? null : ke(o, {})
    };
const ib = () => {
    const e = mv((e => e.embed.persistentLogo)),
        t = mv((e => e.appearance.playerBreakpoint));
    return e && ke("div", {
        className: "PersistentLogo_module_persistentLogo__e4ddb428",
        tabIndex: -1,
        "aria-hidden": "true",
        "data-persistent-logo": !0,
        children: ke(kf, {
            playerBreakpoint: t
        })
    })
};
const ob = ({
    children: e,
    shade: t,
    hideOnTiny: n
}) => {
    const i = mv((e => e.appearance.playerSizeMode)),
        o = va("OutroContentWrapper_module_outroContent__1c499014", t && "OutroContentWrapper_module_outroShade__1c499014", i === $a.TINY && n && "OutroContentWrapper_module_hidden__1c499014");
    return ke("div", {
        className: o,
        children: e
    })
};
const rb = () => {
    const e = mv((e => e.outro.outroData));
    return ke(ob, {
        hideOnTiny: !0,
        shade: !0,
        children: ke("div", {
            className: "TextOutro_module_textWrapper__eb1c7bb7",
            children: e && ke("div", {
                className: "TextOutro_module_text__eb1c7bb7",
                dangerouslySetInnerHTML: {
                    __html: e.text
                }
            })
        })
    })
};
const ab = ({
        url: e
    }) => {
        const t = {};
        return e && (t.backgroundImage = `url(${e})`), ke("div", {
            className: "OutroContentBackground_module_background__fad7b858",
            style: t
        })
    },
    lb = () => {
        const e = mv((e => e.outro.outroData));
        return e && ke(We, {
            children: [ke(ab, {
                url: null == e ? void 0 : e.imageUrl
            }), ke(ob, {
                shade: !0,
                hideOnTiny: !0,
                children: ke(jf, {})
            })]
        })
    };
const sb = () => {
    const e = mv((e => e.events)),
        t = mv((e => e.outro.outroData)),
        n = {};
    return null != t && t.imageUrl && (n.backgroundImage = `url(${t.imageUrl})`), ke(We, {
        children: [ke(Ev, {
            visible: !0,
            children: ke("div", {
                className: "LinkOutro_module_linkBackground__1d6e5c98",
                style: n
            })
        }), ke(ob, {
            shade: !0,
            children: ke("div", {
                className: "LinkOutro_module_linkWrapper__1d6e5c98",
                children: t && ke(We, {
                    children: [t.title && ke("h1", {
                        className: "LinkOutro_module_title__1d6e5c98",
                        children: t.title
                    }), t.description && ke("p", {
                        className: "LinkOutro_module_description__1d6e5c98",
                        children: t.description
                    }), t.text && t.url && ke("div", {
                        className: "LinkOutro_module_buttonWrap__1d6e5c98",
                        children: ke(Cv, {
                            href: t.url,
                            className: "LinkOutro_module_button__1d6e5c98",
                            onClick: () => e.fire(eo, null == t ? void 0 : t.url),
                            children: ke("span", {
                                children: t.text
                            })
                        })
                    }), t.text2 && t.url2 && ke(Cv, {
                        href: t.url2,
                        className: "LinkOutro_module_link__1d6e5c98",
                        onClick: () => e.fire(Xi, null == t ? void 0 : t.url2),
                        children: ke("span", {
                            children: t.text2
                        })
                    })]
                })
            })
        })]
    })
};
const cb = () => {
    const e = mv((e => e.outro.outroData)),
        t = function(e) {
            const t = mv((e => e.events));
            return Ne((function() {
                t.fire(Qi, e)
            }), [e, t])
        }(null == e ? void 0 : e.url);
    return e && ke(ob, {
        children: null != e && e.url ? ke(Cv, {
            href: e.url,
            className: "ImageOutro_module_imageOutroLink__7a84ec40",
            onClick: t,
            targetBlank: !0,
            children: ke(db, {
                url: e.imageUrl,
                altText: null == e ? void 0 : e.alt_text
            })
        }) : ke(db, {
            url: e.imageUrl,
            altText: null == e ? void 0 : e.alt_text
        })
    })
};

function db({
    url: e,
    altText: t
}) {
    return ke("div", r({
        role: "img",
        className: "ImageOutro_module_imageOutro__7a84ec40",
        style: {
            backgroundImage: `url(${e})`
        }
    }, t ? {
        ariaLabel: t
    } : {}))
}
const ub = () => ke(We, {
    children: [ke(ab, {}), ke(ob, {
        shade: !0
    }), ";"]
});
const _b = ({
    videos: e
}) => {
    const t = Ip((e => e.loadVideoViaIframe)),
        n = Ip((e => e.embed.onsite)),
        i = mv((e => e.events)),
        o = mv((e => e.user.isPayingOwner)),
        a = mv((e => e.embed.svvContext)),
        l = e => n => {
            i.fire($i, e.id), o && !a && (n.preventDefault(), t(e.id, {
                autoplay: !0
            }))
        },
        s = va("VideosList_module_videoLink__e7886b41", of .focusable);
    return e.length && ke("ul", {
        className: "VideosList_module_videosList__e7886b41",
        "data-num-videos": e.length,
        children: e.map((e => ke("li", {
            children: ke(Cv, r(r({
                className: s,
                targetBlank: !n,
                href: e.url,
                onClick: l(e)
            }, zv), {}, {
                children: [ke(Mf, {
                    url: e.thumbnail,
                    className: "VideosList_module_videoThumbnail__e7886b41"
                }), ke("header", {
                    className: "VideosList_module_videoHeader__e7886b41",
                    children: [ke(tf, {
                        className: "VideosList_module_videoTitle__e7886b41",
                        weight: Ys.BOLD,
                        element: "h1",
                        size: Ws.MD,
                        color: $s.WHITE,
                        children: e.title
                    }), e.byline && ke(tf, {
                        className: "VideosList_module_videoByline__e7886b41",
                        element: "h2",
                        children: e.byline
                    })]
                })]
            }))
        }, e.id)))
    })
};
var pb = "FollowButton_module_icon__9a75dd35";
const mb = () => {
    const [e, t] = Pe(!1), n = Ip((e => e.user.isClipOwner)), i = mv((e => e.events)), o = mv((e => e.user.following)), r = mv((e => e.user.loggedIn)), a = mv((e => e.user.persistUserAction));
    let l = "SEGUIR";
    const s = o && e,
        c = o && !e;
    s && (l = "Parar de seguir"), c && (l = "Seguindo");
    const d = va(pb, "FollowButton_module_check__9a75dd35"),
        u = va(pb, "FollowButton_module_close__9a75dd35"),
        _ = va("FollowButton_module_followButton__9a75dd35", c && "FollowButton_module_following__9a75dd35");
    return ke("div", {
        onMouseEnter: () => o && t(!0),
        onMouseLeave: () => t(!1),
        className: "FollowButton_module_followButtonContainer__9a75dd35",
        children: ke(cf, {
            className: _,
            onClick: () => {
                if (r && !n) {
                    if (i.fire(ci), o) return a(qp.FOLLOWING, "DELETE"), void i.fire(Ji);
                    a(qp.FOLLOWING, "PUT"), i.fire(Zi)
                }
            },
            children: [!o && ke(Sv, {
                className: pb,
                name: yp.PLUS_SYMBOL
            }), c && ke(Sv, {
                className: d,
                name: yp.CHECKMARK
            }), s && ke(Sv, {
                className: u,
                name: yp.CLOSE
            }), ke("span", {
                className: "FollowButton_module_followButtonText__9a75dd35",
                children: l
            })]
        })
    })
};
const vb = ({
    titleMarkup: e
}) => {
    const t = Ip((e => !e.user.isClipOwner));
    return ke("div", {
        className: "VideosHeader_module_videosHeaderWrapper__82d8877c",
        children: ke("header", {
            className: "VideosHeader_module_videosHeader__82d8877c",
            children: [ke(tf, {
                className: "VideosHeader_module_videosTitle__82d8877c",
                size: Ws.LG,
                element: "h1",
                containsMarkup: !0,
                children: e
            }), t && ke(mb, {})]
        })
    })
};
const fb = () => {
    var e;
    const t = mv((e => e.outro.outroData));
    return (null == t || null == (e = t.videos) ? void 0 : e.length) > 0 && ke(We, {
        children: [ke(ab, {
            url: t.imageUrl
        }), ke(ob, {
            shade: !0,
            children: ke("div", {
                className: "VideosOutro_module_videosOutro__aa31a3f4",
                children: [ke(vb, {
                    titleMarkup: t.context
                }), ke(_b, {
                    videos: t.videos
                })]
            })
        })]
    })
};

function hb({
    children: e,
    url: t,
    onClick: n,
    type: i = "purchase-item"
}) {
    const o = va("VODButton_module_VODButton__3dccb3f8", "watch" === i && "VODButton_module_watch__3dccb3f8");
    return ke(Cv, r(r({
        className: o,
        role: "button",
        href: t
    }, sa(n)), {}, {
        children: e
    }))
}
const Eb = () => {
        const e = mv((e => e.vod.url)),
            t = mv((e => e.setDisplayList)),
            n = mv((e => e.vod.isPreorder)),
            i = (mv((e => e.vod.releaseDate)), n ? "Assista no dia {releaseDate}" : "Assistir Agora"),
            o = sm();
        return ke(hb, {
            url: e,
            type: "watch",
            onClick: e => {
                n || (e.preventDefault(), t("outro", !1), o(e))
            },
            children: i
        })
    },
    gb = () => {
        const e = mv((e => e.vod.isComingSoon)),
            t = mv((e => e.vod.isPreorder)),
            n = mv((e => e.vod.releaseDate));
        let i = "Em breve no Vimeo On Demand.";
        return e && n && (i = "Em breve no Vimeo On Demand, lançamento dia " + n + "."), t && (i = "Faça a pré-encomenda agora. Assista no dia " + n + "."), ke("p", {
            children: i
        })
    };
const bb = e => {
    const t = function({
        type: e
    }) {
        switch (e) {
            case "buy":
                return yp.VOD_DOWNLOAD;
            case "rent":
                return yp.VOD_RENT;
            case "subscribe":
                return yp.VOD_SUBSCRIBE;
            default:
                return yp.VOD
        }
    }(e);
    return ke("div", {
        className: "VODIcon_module_VODIconContainer__f6dd6c94",
        children: ke(Sv, {
            className: "VODIcon_module_VODIcon__f6dd6c94",
            name: t
        })
    })
};
const Cb = ({
    product_id: e,
    formattedLabel: t,
    type: n
}) => {
    const i = mv((e => e.vod.url)),
        o = sm(e);
    return ke("li", {
        className: "PurchaseOptionItem_module_purchaseOptionItem__9ee33594",
        children: ke(hb, {
            url: `${i}#buy=${e}`,
            onClick: e => {
                e.preventDefault(), o(e)
            },
            children: [ke(bb, {
                type: n
            }), ke("p", {
                className: "PurchaseOptionItem_module_label__9ee33594",
                children: t
            })]
        })
    })
};
const Tb = () => {
        const e = mv((e => e.vod.purchaseOptions));
        return ke("ul", {
            className: "PurchaseOptions_module_purchaseOptions__2aad36ed",
            children: e.map(((e, t) => ke(Cb, r({}, e), `${e.type}-${t}`)))
        })
    },
    yb = () => {
        const e = mv((e => e.vod.isComingSoon)),
            t = mv((e => e.vod.isPreorder));
        return ke(We, {
            children: [!e && ke(Tb, {}), (t || e) && ke(gb, {})]
        })
    };
const Lb = () => {
        const e = mv((e => e.vod.url)),
            t = mv((e => e.vod.title)),
            n = mv((e => e.vod.isAvailableInCountry)),
            i = mv((e => e.vod.purchased)),
            o = mv((e => e.outro.outroData));
        return o && ke(We, {
            children: [(null == o ? void 0 : o.imageUrl) && ke(ab, {
                url: null == o ? void 0 : o.imageUrl
            }), ke(ob, {
                shade: !0,
                children: ke("div", {
                    className: "VODOutro_module_VODOutroContainer__e53bfe58",
                    children: [ke("h1", {
                        "aria-describedby": "new-window",
                        className: "VODOutro_module_VODHeader__e53bfe58",
                        children: ke(Cv, {
                            href: e,
                            children: t
                        })
                    }), n && ke(i ? Eb : yb, {})]
                })
            })]
        })
    },
    Ab = () => {
        const e = mv((e => e.displayList.outro)),
            t = mv((e => e.outro.active)),
            n = mv((e => e.outro.purpose)),
            i = va("Outro_module_outroWrapper__552ef1cd", Kr.VP_OUTRO_WRAPPER, !t && "Outro_module_inactive__552ef1cd");
        return ke(Ev, {
            visible: e,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: ke("div", {
                className: i,
                "data-content-area-sibling-eligible": !0,
                children: ke("div", {
                    className: "Outro_module_outro__552ef1cd",
                    role: "dialog",
                    children: [n === b_.TEXT && ke(rb, {}), n === b_.SHARE && ke(lb, {}), n === b_.VIDEOS && ke(fb, {}), n === b_.LINK && ke(sb, {}), n === b_.IMAGE && ke(cb, {}), n === b_.NOTHING && ke(ub, {}), n === b_.VOD && ke(Lb, {})]
                })
            })
        })
    };
const Sb = ({
    text: e
}) => ke("h3", {
    children: [ke(Sv, {
        name: yp.WARN_TRIANGLE,
        className: "Warning_module_warningIcon__d2643ae4"
    }), ke("span", {
        dangerouslySetInnerHTML: {
            __html: e
        }
    })]
});

function Ib() {
    const e = `Veja a <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="${zr.NEW_WINDOW_DESCRIPTION}">lista de navegadores</a>que suportam a visualização em 360.`;
    return ke(Sb, {
        text: e
    })
}

function Ob() {
    const e = `Procurando um vídeo 360? Veja <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="${zr.NEW_WINDOW_DESCRIPTION}">os navegadores e as configurações suportadas</a>.`;
    return ke(Sb, {
        text: e
    })
}
const Pb = ({
        visible: e,
        children: t,
        duration: n,
        onComplete: i
    }) => ke(Ue, { in: e,
        duration: n,
        styles: {
            enter: {
                transform: "translateY(-100%)",
                transition: `transform ${n}ms linear, opacity ${n}ms`,
                opacity: 0
            },
            enterActive: {
                opacity: 1,
                transition: `transform ${n}ms cubic-bezier(0, 1.14, 0.57, 1.21), opacity ${n}ms`,
                transform: "translateY(0)",
                animationName: "bounce",
                animationDelay: n,
                animationDuration: "0.5s",
                animationFillMode: "forwards"
            },
            enterDone: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exit: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exitActive: {
                animationFillMode: "none",
                opacity: 0,
                transform: "translateY(-100%)",
                transition: `transform ${2*n}ms linear, opacity ${2*n}ms linear`
            },
            exitDone: {
                display: "none"
            }
        },
        onExited: i,
        children: t
    }),
    Rb = () => {
        const e = mv((e => e.displayList.alert)),
            t = Re(null),
            n = mv((e => e.setAlert)),
            i = mv((e => e.setDisplayList)),
            o = mv((e => e.alert.currentAlert)),
            r = Ne((() => i("alert", !1)), [i]),
            a = Ne((() => n("currentAlert", L_.EMPTY)), [n]);
        return Oe((function() {
            e && (clearTimeout(t.current), t.current = setTimeout(r, 1e3))
        }), [e, o]), ke(Pb, {
            visible: e,
            duration: 100,
            onComplete: a,
            children: ke("div", {
                className: "Alert_module_alert__bde6a4f3",
                role: "alert",
                hidden: !e,
                children: [ke(cf, {
                    onClick: r,
                    icon: ke(Sv, {
                        name: yp.CLOSE,
                        className: "Alert_module_closeIcon__bde6a4f3"
                    }),
                    "aria-label": "Close alert",
                    className: "Alert_module_close__bde6a4f3"
                }), o === L_.SPATIAL_UNSUPPORTED && ke(Ib, {}), o === L_.SPATIAL_FAILURE && ke(Ob, {})]
            })
        })
    };
const Nb = "opacity 250ms ease-out",
    Db = {
        enter: {
            opacity: 0
        },
        enterActive: {
            opacity: 1,
            transition: Nb
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: Nb
        },
        exitDone: {
            display: "none"
        }
    },
    wb = Object.values(Sf),
    kb = () => {
        const e = Ip((e => e.element)),
            t = Ip((e => e.accessGate.purpose)),
            n = Ip((e => e.accessGate.url)),
            i = Ip((e => e.accessGate.title)),
            o = Ip((e => e.accessGate.accessGateReady)),
            r = Ip((e => e.accessGate.accessGateLoaded)),
            a = Ip((e => e.accessGate.closeAccessGate)),
            l = Ip((e => e.accessGate.setAccessGateReady)),
            s = Ip((e => e.accessGate.setAccessGateLoaded)),
            c = Ip((e => e.accessGate.sendGateBPEvent)),
            d = Ip((e => e.bigPicture)),
            [u, _] = Pe(!1),
            [p, m] = Pe(!1),
            v = t !== bs.EMPTY,
            f = u && p && v,
            h = u && v && !r,
            E = f && o,
            g = va(qr.REMOTE_ACCESS_GATE, "RemoteAccessGate_module_accessGate__82178468", h && "RemoteAccessGate_module_waitingToDisplay__82178468", E && "RemoteAccessGate_module_visible__82178468"),
            {
                componentVersion: b,
                hasError: C,
                componentTimeout: T,
                onError: y,
                onReload: L
            } = dp();
        return Oe((() => {
            _(!0)
        }), []), Oe((() => {
            const t = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (ke) {
                        return Promise.reject(ke)
                    }
                }
            }((function() {
                return function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(Ze(e), (function() {
                    m(!0)
                }))
            }));
            p || t()
        }), [p, e]), ke(Ue, { in: f,
            styles: Db,
            duration: 250,
            children: ke("div", {
                className: "RemoteAccessGate_module_accessGateWrapper__82178468",
                children: [C && ke(Mb, {
                    onReload: L
                }), !C && f && ke(Rf, {
                    visible: E,
                    id: t,
                    url: n,
                    title: i,
                    className: g,
                    timeout: T,
                    bigPicture: d,
                    waitForReady: !0,
                    onClose: a,
                    onError: e => {
                        wb.includes(null == e ? void 0 : e.message) && y(), c(Ts.ERROR, e)
                    },
                    onRemoteComponentReady: l,
                    onIframeLoad: s
                }, b)]
            })
        })
    };
const Mb = ({
    onReload: e
}) => {
    const t = va(qr.EXCLUDE_GLOBAL_BUTTON_STYLES, "RemoteAccessGateError_module_reload__765f151c");
    return ke("div", {
        className: "RemoteAccessGateError_module_container__765f151c",
        "data-component-type": "access-gate",
        children: [ke(Sv, {
            name: yp.INFO_CIRCLE,
            className: "RemoteAccessGateError_module_icon__765f151c",
            "aria-hidden": "true"
        }), ke(tf, {
            size: Ws.LG,
            weight: Ys.NORMAL,
            className: "RemoteAccessGateError_module_messageText__765f151c",
            role: "alert",
            children: "Não foi possível carregar o formulário de inscrição"
        }), ke(cf, {
            className: t,
            size: Us.CUSTOM,
            onClick: e,
            "data-component-type": "reload-access-gate",
            children: ke(tf, {
                size: Ws.MD,
                weight: Ys.BOLD,
                children: "Tente de novo"
            })
        })]
    })
};
const Vb = () => {
    const e = Ip((e => e.login.status)),
        t = Ip((e => e.embed.videoId)),
        n = Ip((e => e.embed.vimeoUrl)),
        {
            loginText: i,
            buttonTarget: o
        } = ((e = Ps.NOT_LOGGED_IN) => {
            const t = {
                loginText: Dl() ? {
                    title: "Faça login no Vimeo para assistir ao vídeo",
                    subtitle: "Talvez seja necessário permitir cookies primeiro. Se solicitado, selecione <b>Permitir</b> para continuar.",
                    buttonText: "Entrar"
                } : {
                    title: "fazer login no vimeo",
                    subtitle: "Este vídeo é privado. Faça login para assistir.",
                    buttonText: "Entrar"
                },
                buttonTarget: Gr.POPUP
            };
            switch (e) {
                case Ps.LOGGED_IN_NO_ACCESS:
                    t.loginText = {
                        title: "Vídeo Privado",
                        subtitle: "Desculpe, mas você não tem permissão para assistir.",
                        buttonText: null
                    };
                    break;
                case Ps.LOGGED_IN_STORAGE_ACCESS_REQUIRED:
                    t.loginText = {
                        title: "Permitir cookies",
                        subtitle: "O navegador perguntará se você deseja permitir cookies. Selecione <b>Permitir</b> para continuar.",
                        buttonText: "Continuar"
                    };
                    break;
                case Ps.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED:
                    t.loginText = {
                        title: "Continue e faça login",
                        subtitle: "Agora você pode fazer login para assistir ao vídeo.",
                        buttonText: "Continuar"
                    };
                    break;
                case Ps.ALL_ACCESS_ATTEMPTS_FAILED:
                    t.loginText = {
                        title: "Vídeo indisponível",
                        subtitle: "Assista no vimeo.com.",
                        buttonText: "Assistir no Vimeo"
                    }, t.buttonTarget = Gr.ON_SITE
            }
            return t
        })(e),
        {
            loginHandler: r
        } = (() => {
            const e = Ip((e => e.events)),
                t = Ip((e => e.embed.videoId)),
                n = Re(null),
                {
                    openLoginPopup: i
                } = om({
                    url: `/video/${t}/login/private`,
                    context: Rs.PRIVATE_LOCKED
                });
            return Oe((() => {
                n.current = function({
                    events: e,
                    dependencies: t = Ns
                }) {
                    const n = {
                            onLoginRequested: function(t) {
                                c = t, !i() || a ? (d(), u()) : (l++, o(d).then((t => t ? (a = !0, r || u(), void e.fire(Oi, Rs.PRIVATE)) : void(v(1) ? p(Ps.ALL_ACCESS_ATTEMPTS_FAILED) : u()))).catch((e => {})))
                            }
                        },
                        {
                            storageAccessRequired: i,
                            requestCookieAccess: o
                        } = t;
                    let r = !1,
                        a = !1,
                        l = 0,
                        s = 0,
                        c = Ua;

                    function d() {
                        r = !0, c()
                    }

                    function u() {
                        e.once(Ni, _)
                    }

                    function _() {
                        s++;
                        const e = m();
                        v() ? p(Ps.ALL_ACCESS_ATTEMPTS_FAILED) : p(!e && r ? Ps.LOGGED_IN_STORAGE_ACCESS_REQUIRED : Ps.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED)
                    }

                    function p(t) {
                        e.fire(jo, t)
                    }

                    function m() {
                        return l >= 2
                    }

                    function v(e = 2) {
                        const t = !i() && r && s > 0,
                            n = s >= e,
                            o = m();
                        return n && o || t
                    }
                    return n
                }({
                    events: e
                })
            }), [e]), {
                loginHandler: () => {
                    n.current && n.current.onLoginRequested(i)
                }
            }
        })(),
        a = e === Ps.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED || e === Ps.ALL_ACCESS_ATTEMPTS_FAILED;
    return ke("div", {
        className: "PrivateGate_module_privateGateWrapper__19e4c72e",
        "data-private-gate": !0,
        children: [ke(tf, {
            element: "h1",
            className: "PrivateGate_module_header__19e4c72e",
            children: i.title
        }), ke(tf, {
            className: "PrivateGate_module_subtitle__19e4c72e",
            weight: Ys.NORMAL,
            containsMarkup: !0,
            "data-private-text": !0,
            children: i.subtitle
        }), e !== Ps.LOGGED_IN_NO_ACCESS && ke(cf, {
            role: a ? "link" : void 0,
            color: Hs.PRIMARY,
            className: va("PrivateGate_module_login__19e4c72e", "PrivateGate_module_loginButton__19e4c72e", of .focusableButton),
            "aria-describedby": a ? zr.NEW_WINDOW_DESCRIPTION : void 0,
            onClick: () => {
                if (o === Gr.POPUP) return void r();
                const e = `https://${n}/${t}`;
                window.open(e, "_blank")
            },
            children: i.buttonText
        })]
    })
};

function Bb(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const xb = Fb((function(e, i) {
    const o = new URLSearchParams({
            password: window.btoa(tr(e))
        }),
        r = n(i, t(window.location.search));
    return Bb(ze(r, {
        method: "post",
        body: o.toString(),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include"
    }), (function(e) {
        return Bb(e.json(), (function(t) {
            if (!e.ok || !1 === t) throw new Error("Password submission failed");
            return t
        }))
    }))
}));

function Ub() {}

function Hb(e) {
    var t = e();
    if (t && t.then) return t.then(Ub)
}

function Fb(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (ke) {
            return Promise.reject(ke)
        }
    }
}
const Gb = () => {
    const e = Ip((e => e.events)),
        t = Ip((e => e.embed.playerUrl)),
        n = Ip((e => e.embed.referrer)),
        i = Ip((e => e.embed.videoId)),
        o = Re(null),
        r = Re(null),
        a = Re(null),
        [l, s] = Pe(!1),
        [c, d] = Pe("Há um erro com esta função."),
        [u, _] = Pe(!1),
        p = `https://${t}/video/${i}/check-password?referrer=${n}`,
        m = "Digite a senha",
        v = va("PasswordGate_module_submitPassword__34c044bd", u && "PasswordGate_module_loading__34c044bd"),
        f = () => {
            const e = a.current;
            e.focus(), _(!1), s(!0), e.value.length ? d("A senha que você digitou está incorreta. Tente novamente.") : d("Por favor, digite a senha.")
        },
        h = Fb((function(t) {
            return t.preventDefault(), d(""), s(!1), Hb((function() {
                if (a.current.checkValidity()) return _(!0), Hb((function() {
                    if (a.current.checkValidity()) return function(e) {
                        if (e && e.then) return e.then(Ub)
                    }(function(n, i) {
                        try {
                            var o = Bb(xb(a.current.value, p), (function(t) {
                                t && e.fire(ki, t)
                            }))
                        } catch (t) {
                            return i()
                        }
                        return o && o.then ? o.then(void 0, i) : o
                    }(0, (function() {
                        f()
                    })))
                }));
                f()
            }))
        }));
    return ke("div", {
        className: "PasswordGate_module_passwordGateWrapper__34c044bd",
        "data-password-gate": !0,
        children: [ke(tf, {
            className: "PasswordGate_module_header__34c044bd",
            element: "h1",
            children: "Senha necessária"
        }), ke(tf, {
            className: "PasswordGate_module_subtitle__34c044bd",
            weight: Ys.NORMAL,
            containsMarkup: !0,
            "data-private-text": !0,
            children: "Se você tiver acesso, digite a senha para assistir."
        }), ke("form", {
            className: "PasswordGate_module_form__34c044bd",
            ref: o,
            noValidate: !0,
            onSubmit: h,
            children: [ke(Zf, {
                message: c,
                visible: l,
                wrapperEl: a.current
            }), ke("input", {
                className: "PasswordGate_module_passwordInput__34c044bd",
                placeholder: m,
                required: !0,
                "aria-required": "true",
                "aria-label": m,
                "aria-invalid": l ? "true" : "false",
                ref: a,
                onInput: () => s(!1),
                minLength: 1,
                type: "password"
            }), ke(cf, {
                className: v,
                onClick: h,
                ref: r,
                disabled: l,
                focusable: !1,
                "data-submit-password": !0,
                children: "Enviar"
            })]
        })]
    })
};
const Wb = () => ke("div", {
    className: "GeoBlockingGate_module_geoblockingGateWrapper__075a0430",
    "data-geo-blocking-gate": !0,
    children: ke(tf, {
        className: "GeoBlockingGate_module_header__075a0430",
        element: "h1",
        weight: Ys.BOLD,
        children: "Este vídeo não está disponível na sua região"
    })
});
const Yb = () => {
        const e = Ip((e => e.user.isClipOwner)),
            t = {
                header: e ? "A conta está acima do limite de DRM" : "O vídeo não está disponível no momento",
                message: "Entre em contato com a equipe de vendas do Vimeo para adicionar mais licenças ou desativar o DRM. Até lá, o vídeo aparecerá como indisponível para os espectadores."
            };
        return ke("div", {
            className: "DRMPlaybackUnavailableGate_module_wrapper__9e5b96d5",
            "data-drm-playback-unavailable-gate": !0,
            children: [ke(tf, {
                className: "DRMPlaybackUnavailableGate_module_header__9e5b96d5",
                element: "h1",
                weight: Ys.BOLD,
                children: t.header
            }), e && ke(tf, {
                className: "DRMPlaybackUnavailableGate_module_message__9e5b96d5",
                weight: Ys.NORMAL,
                children: t.message
            })]
        })
    },
    $b = () => {
        const e = Ip((e => e.localAccessGate.purpose));
        return e !== wp.EMPTY && ke("div", {
            className: "LocalAccessGate_module_localAccessGateWrapper__28aa198a",
            children: [e === wp.GEO_BLOCKED && ke(Wb, {}), e === wp.DRM_PLAYBACK_UNAVAILABLE && ke(Yb, {}), e === wp.PASSWORD && ke(Gb, {}), e === wp.PRIVATE_LOCKED && ke(Vb, {}), e === wp.ERROR && ke(Jf, {})]
        })
    };

function Kb() {
    const e = mv((e => e.setInteractive)),
        t = mv((e => e.interactive.instanceId)),
        n = mv((e => e.interactive.active)),
        i = mv((e => e.interactive.enabled)),
        o = va("VimeoInteractive_module_container__211f1fff", n && "VimeoInteractive_module_active__211f1fff");
    return i ? t ? ke("div", {
        children: ke("div", {
            id: t,
            className: o
        }, t)
    }) : (e("instanceId", `vp-vimeo-interactive-instance-${Math.random().toString(36).substring(2)}`), null) : null
}
const qb = () => {
        const e = Ip((e => e.videoThumbnail.isDisplayed)),
            t = Ip((e => e.videoThumbnail.thumbnailUrl)),
            n = Ip((e => e.videoThumbnail.shouldCoverBackground)),
            i = {
                backgroundImage: `url(${t})`
            },
            o = va($r.VP_PREVIEW, "VideoThumbnail_module_videoThumbnail__d1b35579", n && "VideoThumbnail_module_cover__d1b35579");
        return e && t && ke("div", {
            className: o,
            style: i,
            "data-thumb": t
        })
    },
    zb = () => ke("span", {
        id: zr.NEW_WINDOW_DESCRIPTION,
        hidden: !0,
        children: "(abre uma nova janela)"
    });
var jb = "LiveStatusAlerts_module_schedule__cf2b4eb9";
const Xb = () => {
    const e = mv((e => e.liveEvent.isLiveEvent)),
        t = mv((e => e.liveEvent.isOnline)),
        n = mv((e => e.liveEvent.liveEventSchedule)),
        i = mv((e => e.liveEvent.isPending)),
        o = mv((e => e.liveEvent.isActive)),
        r = mv((e => e.liveEvent.isEnded)),
        a = mv((e => e.liveEvent.isArchived)),
        l = mv((e => e.liveEvent.dvrEnabled)),
        s = mv((e => e.liveEvent.showEventSchedule)),
        c = mv((e => e.playback.currentTime)),
        d = mv((e => e.playback.atLiveEdge)),
        u = mv((e => e.config.request.lang)),
        _ = mv((e => e.element)),
        [p, m] = Pe(null),
        [v, f] = Pe(null),
        [h, E] = Pe(new Date),
        g = Re(null),
        b = Je((() => new Date(n)), [n]),
        C = r && l && 0 !== c || !1 === t && !d,
        T = null === t,
        y = r && !C && !a,
        L = !1 === t && !C;
    return Oe((() => (T && s ? (i || o) && n ? Xs(b, h) > 0 ? (m("time"), f(function(e, t, n = new Date) {
        const i = Xs(t),
            o = Math.ceil(i / 1e3).toFixed(0),
            r = Math.ceil(i / 6e4).toFixed(0),
            a = Math.ceil(i / 36e5).toFixed(0),
            l = Math.ceil(i / 864e5).toFixed(0),
            s = n.toDateString() === t.toDateString();
        if (parseInt(l, 10) > 1 || !s) return ("Este evento está programado para\n" + new Intl.DateTimeFormat(e, {
            month: "long",
            day: "numeric"
        }).format(t) + "\nàs " + new Intl.DateTimeFormat(e, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(t)).split("\n");
        if (parseInt(a, 10) > 1 && s) return ("Este evento está agendado para\nhoje\nà(s) " + new Intl.DateTimeFormat(e, {
            hour: "numeric",
            minute: "numeric"
        }).format(t)).split("\n");
        let c;
        const d = parseInt(r, 10) > 1;
        return c = d ? "minutos" : parseInt(o, 10) > 1 ? "segundos" : "segundo", ("Este evento começará em\n" + (d ? r : o) + " " + c).split("\n")
    }(u, b, h)), g.current = setInterval((() => {
        E(new Date)
    }), 1e3)) : (m("text"), f("Este evento ainda não começou")) : (i || o) && (m("text"), f("Este evento ainda não começou")) : y ? (m("text"), f("O evento ao vivo terminou")) : L ? (m("text"), f("A transmissão ao vivo está offline")) : (m(null), f(null)), () => {
        g.current && (clearInterval(g.current), g.current = null)
    })), [i, o, r, a, t, C, n, u, b, h, T, s, y, L]), e && p && v && je(ke("div", {
        className: "LiveStatusAlerts_module_eventTextWrapper__cf2b4eb9",
        "data-live-status-alerts": !0,
        children: ["text" === p && ke("span", {
            className: jb,
            children: v
        }), "time" === p && ke("div", {
            className: jb,
            "data-live-event-schedule": !0,
            children: [ke("span", {
                className: "LiveStatusAlerts_module_scheduleTitle__cf2b4eb9",
                children: v[0]
            }), ke("span", {
                className: "LiveStatusAlerts_module_scheduleBody__cf2b4eb9",
                children: v[1]
            }), ke("span", {
                className: "LiveStatusAlerts_module_scheduleFooter__cf2b4eb9",
                children: v[2]
            })]
        })]
    }), _)
};
const Zb = () => {
    const e = mv((e => e.chromecast.isChromecastConnected)),
        t = mv((e => e.chromecast.receiverFriendlyName)),
        n = mv((e => e.playback.ended));
    return e && !n && ke("div", {
        className: "ChromecastText_module_wrapper__5708223b",
        children: ke("span", {
            className: "ChromecastText_module_text__5708223b",
            children: `Exibindo em ${t}`
        })
    })
};

function Jb(e, t) {
    const n = t.querySelector(`.${$r.VP_PLAYER_UI_CONTAINER}`),
        i = t.querySelector(`.${$r.VP_PLAYER_UI_OVERLAYS}`),
        o = t.querySelector(`.${$r.VP_VIDEO_WRAPPER}`);
    Qe(ke(Op, {
        player: e,
        children: [ke(Lg, {}), ke(kb, {}), ke($b, {}), ke(og, {
            element: o,
            children: ke(qb, {})
        }), ke(fv, {
            player: e,
            children: [ke(eg, {}), ke(_g, {}), ke(og, {
                element: i,
                children: [ke(Jg, {}), ke(Kg, {}), ke(pg, {}), ke(Nh, {}), ke(_h, {}), ke(Oh, {}), ke(kh, {}), ke(JE, {}), ke(ug, {}), ke(YE, {}), ke(ig, {}), ke(Bg, {}), ke(xg, {}), ke(nb, {}), ke(Ab, {}), ke(Rb, {}), ke(Kb, {}), ke(Zb, {})]
            }), ke(Xb, {}), ke(ib, {}), ke(Sg, {}), ke(Ag, {})]
        }), ke(zb, {})]
    }), n)
}
const Qb = Symbol("CONFIG_CHANGED"),
    eC = Symbol("TELECINE_READY"),
    tC = Symbol("TELECINE_VIDEO_INIT"),
    nC = Symbol("PLAY_INITIATED"),
    iC = Symbol("QUALITY_CHANGED"),
    oC = Symbol("CUE_CHANGED"),
    rC = Symbol("CAPTIONS_CHANGED"),
    aC = Symbol("SPATIAL_PLAYBACK_TOGGLED"),
    lC = Symbol("PICTURE_IN_PICTURE_AVAILABLE_SAFARI"),
    sC = Symbol("HLS_QUALITY_CHANGED"),
    cC = Symbol("REQUEST_COMPLETE_LIVE_SUBTITLES"),
    dC = Symbol("COMPLETE_LIVE_SUBTITLES_LOADED"),
    uC = Symbol("COMPLETE_LIVE_SUBTITLES_ERROR");
var _C = Object.freeze({
    __proto__: null,
    CONFIG_CHANGED: Qb,
    TELECINE_READY: eC,
    TELECINE_VIDEO_INIT: tC,
    PLAY_INITIATED: nC,
    QUALITY_CHANGED: iC,
    CUE_CHANGED: oC,
    CAPTIONS_CHANGED: rC,
    SPATIAL_PLAYBACK_TOGGLED: aC,
    PICTURE_IN_PICTURE_AVAILABLE_SAFARI: lC,
    HLS_QUALITY_CHANGED: sC,
    REQUEST_COMPLETE_LIVE_SUBTITLES: cC,
    COMPLETE_LIVE_SUBTITLES_LOADED: dC,
    COMPLETE_LIVE_SUBTITLES_ERROR: uC
});
const pC = Symbol("liveeventpending"),
    mC = Symbol("liveeventactive"),
    vC = Symbol("liveeventstarting"),
    fC = Symbol("liveeventstarted"),
    hC = Symbol("liveeventended"),
    EC = Symbol("livearchivestarted"),
    gC = Symbol("livearchivedone"),
    bC = Symbol("livearchiveerror"),
    CC = Symbol("livesettingsupdated"),
    TC = Symbol("lowlatencyfallback"),
    yC = Symbol("livestatssuccess"),
    LC = Symbol("livestatsfailure");
var AC = Object.freeze({
    __proto__: null,
    EVENT_PENDING: pC,
    EVENT_ACTIVE: mC,
    EVENT_STARTING: vC,
    EVENT_STARTED: fC,
    EVENT_ENDED: hC,
    ARCHIVE_STARTED: EC,
    ARCHIVE_DONE: gC,
    ARCHIVE_ERROR: bC,
    SETTINGS_UPDATED: CC,
    LOW_LATENCY_FALLBACK: TC,
    LIVE_STATS_SUCCESS: yC,
    LIVE_STATS_FAILURE: LC
});
r(r(r(r(r(r(r(r({}, g), C), et), AC), z), $), q), _C), r(r({}, et), AC);
let SC = function() {
        function e() {}
        return e.init = function(e) {
            this.configurePictureInPicture(e.config, e.backbone), e.backbone.on(Qb, ((t, n) => {
                this.getPipSetting(n) !== this.getPipSetting(t) && this.configurePictureInPicture(t, e.backbone)
            }))
        }, e.getPipSetting = function(e) {
            var t;
            return null == (t = e.embed) || null == (t = t.settings) ? void 0 : t.pip
        }, e.configurePictureInPicture = function(e, t) {
            var n, i, o, r;
            t.disablePictureInPicture = !(null === (n = null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.pip) || void 0 === n || n), t.autoPictureInPicture = !(null !== (o = null == (r = e.embed) || null == (r = r.settings) ? void 0 : r.auto_pip) && void 0 !== o && !o)
        }, e
    }(),
    IC = function(e) {
        SC.init(e)
    };
const OC = `\n    <div class="${qr.CONTENT_AREA_BACKGROUND_CONTAINER}" aria-hidden="true"></div>\n        <div class="${$r.VP_VIDEO_WRAPPER}" ${ia.CONTENT_AREA_SIBLING_ELIGIBLE} aria-hidden="true">\n            <div class="${$r.VP_VIDEO}">\n                <div class="${$r.VP_TELECINE}"></div>\n            </div>\n        </div>\n        <div class="${$r.VP_TARGET}" ${ia.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n        <div class="${$r.VP_PLAYER_UI_CONTAINER}" ${ia.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n        <div class="${$r.VP_PLAYER_UI_OVERLAYS}" ${ia.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n    </div>\n`;
var PC = new WeakMap,
    RC = new WeakMap,
    NC = new WeakMap,
    DC = new WeakMap;
let wC = function() {
    function e(e) {
        var t;
        ot(this, PC, void 0), ot(this, RC, void 0), ot(this, NC, void 0), ot(this, DC, void 0), it(PC, this, e), it(RC, this, {}), it(NC, this, 0 !== (null == (t = e.config) || null == (t = t.embed) || null == (t = t.settings) ? void 0 : t.skipping_forward)), it(DC, this, {
            timeStamp: null,
            videoTime: null,
            timeElapsed: 0,
            playbackElapsed: 0
        }), this._onTimeUpdate = this._onTimeUpdate.bind(this), this._onConfigChanged = this._onConfigChanged.bind(this), this._init()
    }
    var t = e.prototype;
    return t._init = function() {
        tt(PC, this).events.on(g.TIME_UPDATE, this._onTimeUpdate), tt(PC, this).events.on(Di, this._onConfigChanged)
    }, t._onTimeUpdate = function() {
        this._captureTimeUpdateElapsedTime();
        const e = tt(PC, this).currentTime;
        if (this.canSeekForward) this.maxPlayedTime = e;
        else if (!tt(PC, this).backbone.seeking) {
            const n = nt(tt(DC, this).timeElapsed, 0, 1) + 1;
            if (O(e) > O(this.maxPlayedTime + n)) try {
                td.isCastConnected && (td.chromecastPlayer.currentTime = this.maxPlayedTime), tt(PC, this).backbone.currentTime = this.maxPlayedTime
            } catch (t) {} else this.maxPlayedTime = e
        }
    }, t._onConfigChanged = function(e, t) {
        var n;
        if (e)
            for (const i in tt(RC, this)) tt(RC, this).hasOwnProperty(i) && delete tt(RC, this)[i];
        it(NC, this, 0 !== (null == t || null == (n = t.embed) || null == (n = n.settings) ? void 0 : n.skipping_forward))
    }, t._captureTimeUpdateElapsedTime = function() {
        var e, t;
        const n = performance.now() / 1e3,
            i = tt(PC, this).currentTime,
            o = n - (null !== (e = tt(DC, this).timeStamp) && void 0 !== e ? e : n),
            r = i - (null !== (t = tt(DC, this).videoTime) && void 0 !== t ? t : i);
        Object.assign(tt(DC, this), {
            timeStamp: n,
            videoTime: i,
            timeElapsed: o,
            playbackElapsed: r
        })
    }, t._getMaxPlayedTimeForFragment = function(e) {
        const t = e.startTime;
        return void 0 === tt(RC, this)[t] && (tt(RC, this)[t] = t), tt(RC, this)[t]
    }, t.getAllowedSeekTime = function(e) {
        if (!this.canSeekForward) {
            const t = tt(PC, this).fragmentsHandler.getFragmentFromTime(e),
                n = this._getMaxPlayedTimeForFragment(t);
            return Math.min(e, n)
        }
        return e
    }, t.canSeekToTime = function(e) {
        return this.getAllowedSeekTime(e) >= e
    }, P(e, [{
        key: "maxPlayedTime",
        get: function() {
            const e = tt(PC, this).fragmentsHandler.getFragmentFromTime(tt(PC, this).currentTime);
            return this._getMaxPlayedTimeForFragment(e)
        },
        set: function(e) {
            const t = tt(PC, this).fragmentsHandler.getFragmentFromTime(e),
                n = this._getMaxPlayedTimeForFragment(t);
            e = Math.max(e, n), tt(RC, this)[t.startTime] = e
        }
    }, {
        key: "canSeekForward",
        get: function() {
            return tt(NC, this)
        }
    }, {
        key: "canSeekNow",
        get: function() {
            return !!this.canSeekForward || tt(PC, this).currentTime < this.maxPlayedTime
        }
    }])
}();

function kC({
    element: n,
    delegate: i = {},
    cssLoadedPromise: a = Promise.resolve(null),
    name: l = null
}) {
    rt.set(rc);
    let c = !1;
    const p = at(cu, st((e => (...t) => {
            const n = e.apply(void 0, t),
                i = ir();

            function o(e, t) {
                return (e = [].concat(e)).map((e => t(n.createGetter(e))))
            }
            return r(r({}, n), {}, {
                watch: function(e, t) {
                    return o(e, (e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    }))
                },
                unwatch: function(e, t) {
                    return o(e, (e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    }))
                }
            })
        }), function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const a = te((e => {
                    if (ne(e)) return e;
                    const t = _(o(), e);
                    return ne(t) ? t : t => _(t, e)
                }));
                return r(r({}, i), {}, {
                    getSelectors: o,
                    createGetter: a,
                    get: function(e, t) {
                        let n = (e = a(e))(i.getState());
                        return void 0 !== t && (n = ie(n, t)), n
                    }
                })
            }
        }(du), lt.apply(void 0, []))),
        m = new Map,
        v = new N,
        f = new lc({
            events: v
        }),
        h = d();
    n.classList.add(`player-${h}`), n.classList.add("loading"), n.id || (n.id = `player${h}`), n.innerHTML = OC;
    const E = n.querySelector(`.${$r.VP_TELECINE}`);
    if (o.iOS) {
        const e = document.createElement("video");
        E.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (ke) {
            rc.captureException(ke)
        }
    }
    let b, C, T, L, A, S, I, O = null,
        P = null,
        R = null,
        D = null,
        w = null,
        k = null,
        M = [],
        B = null,
        x = null,
        U = null,
        H = null,
        F = null,
        G = null,
        W = new Nu,
        Y = !1,
        $ = !1,
        K = null,
        q = null,
        z = {};
    const j = new Promise(((e, t) => {
        S = e, I = t, Y = !0
    })).then((() => (Y = !1, v.fire(so), null)));
    let X, Z;
    const J = new Promise(((e, t) => {
        X = e, Z = t, $ = !0
    })).then((() => ($ = !1, null)));
    let Q = ((e, t, n, i = !0) => new Promise(((o, r) => {
            e.on(t, ((...e) => {
                o.apply(void 0, e)
            })), "number" == typeof n && setTimeout((() => {
                i ? r() : o(null)
            }), n)
        })))(v, zo),
        ee = {
            get config() {
                return f.config
            },
            set config(e) {
                f.config = e
            },
            get delegate() {
                return i
            },
            set delegate(e) {
                i = e
            },
            ready(e) {
                if (!e) return j;
                j.then((() => e())).catch((e => {
                    rc.captureException(e)
                }))
            },
            playbackEngineReady(e) {
                if (!e) return J;
                J.then((() => e())).catch((e => {
                    rc.captureException(e)
                }))
            },
            get sessionId() {
                return f.config.request.session
            },
            get name() {
                return l
            },
            get parentUrl() {
                return H
            },
            set parentUrl(e) {
                H = e
            },
            destroy() {
                (Y || $) && (I("Cancelling ready promise for player initialization."), Z("Cancelling playback engine ready promise for player initialization.")), v.fire(sn)
            }
        };

    function oe(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), ut(_t(i.request.flags.disable_mms)), null != (t = i.request) && t.urls.js && pt(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== Lr.main && i.view !== Lr.privateUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, null != (o = history) && o.replaceState && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== Lr.main && i.view !== Lr.privateUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        ! function(e, t) {
            null != e && e.embed && null != t && t.embed && [
                ["color", Vr],
                ["color_one", Mr],
                ["color_two", Vr],
                ["color_three", Br],
                ["color_four", xr]
            ].forEach((([n, i]) => {
                t.embed[n] && e.embed[n] !== t.embed[n] && v.fire(xt, t.embed[n], i)
            }))
        }(n, i), D && D.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return C = null, L = O, v.fire(kt), p.dispatch(ld(i)), v.fire(Di, r, i), e
    }

    function re() {
        var e;
        null == (e = P) || e.hide(), n.classList.remove("loading"), S()
    }

    function ae(e) {
        return a.then((() => {
            if (ce(e), v.fire(mn), "function" != typeof z.authorizationHandler) throw new Error("Config was not authorized.");
            return z.authorizationHandler(re)
        })).then((e => (f.config = e, C = null, p.dispatch(ld(f.config)), v.fire(kt), v.fire(Di, !0, f.config), e)))
    }

    function le() {
        c || (v.on(Oi, (function(e) {
            f.reload().then((t => f.config.user.logged_in ? (v.fire(Pi), "private" === e && v.fire(Mi, t.loaded), t) : (v.fire(Ni), t))).catch((e => {
                rc.captureException(e)
            }))
        })), v.on(Ri, (() => {
            f.reload().catch((e => {
                rc.captureException(e)
            }))
        })), c = !0)
    }

    function se(e) {
        ! function(e) {
            Ou.forEach((t => {
                const n = t(e.config);
                n && e.addABTest(n)
            }))
        }(e), G = new wC(e), F = gc(e), le(),
            function(e) {
                P = new yc(e), O = new dt(E, f.config), L = O, B = new zu(e), new Cd(e, p, n.querySelector(`.${$r.VP_VIDEO_WRAPPER}`)), de(e), e.doNotTrackEnabled || (f.config.request.urls.test_imp && function(e, t) {
                        if (!e.config.request.ab_tests) return;
                        const n = new u(t);
                        for (const i in e.config.request.ab_tests) {
                            const t = e.config.request.ab_tests[i];
                            if (!t.track) continue;
                            const o = {
                                session_id: e.config.request.session,
                                test_id: i,
                                test_group: String(t.group)
                            };
                            n.log(o, !0, !1).catch((e => {}))
                        }
                    }(e, `${f.config.request.urls.test_imp}?beacon=1`), new Ru(e, p), W.init(e), new wd(e), new Du(e), new ec(e), function(e) {
                        function t(t) {
                            return function({
                                value: n
                            }) {
                                Ju[t] || (Ju[t] = !0, function(t, n) {
                                    e.bigPicture.sendEvent(Ml.PLAYER_PERFORMANCE_MEASUREMENT, {
                                        measurement_type: t,
                                        measurement_value: n
                                    })
                                }(t, n))
                            }
                        }
                        Math.random() <= Zu && (Le(t(Xu.FIRST_INPUT_DELAY)), Ae(t(Xu.CUMULATIVE_LAYOUT_SHIFT)), Se(t(Xu.LARGEST_CONTENTFUL_PAINT)))
                    }(e)), D = new qc(e),
                    function(e) {
                        if (!Rl(e.config) || !e.config.embed.settings.chromecast) return;
                        const t = new Qc({
                            core: e
                        });
                        td.init({
                            chromecastPlayer: t
                        }), td.on([Jc.error, Jc.mediaLoadedFailed], (e => {
                            rc.captureException(e)
                        }))
                    }(e), ce(e)
            }(e), new IC(e)
    }

    function ce(e) {
        R || (R = new yu(e), uu(ee, R), mt.set(rc))
    }

    function de(e) {
        const t = f.config.request.ads;
        t && (t.adcode && t.adunit || t.adurl) && (w = new wu(e, n.querySelector(`.${$r.VP_VIDEO_WRAPPER}`)), v.on(bn, (() => {
            L = w, v.fire(oo)
        })), v.on(Cn, (() => {
            L = O, v.fire(oo)
        })), td && (td.on(Jc.connected, (() => {
            w.toggleCastingState(!0)
        })), td.on(Jc.disconnected, (() => {
            w.toggleCastingState(!1)
        }))))
    }

    function ue(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = dr(cr(e), e, t)), n
    }
    const _e = {
        get store() {
            return p
        },
        get config() {
            return f.config
        },
        get element() {
            return n
        },
        get events() {
            return v
        },
        get uuid() {
            return h
        },
        get expose() {
            return ee
        },
        get backbone() {
            return O
        },
        get adHandler() {
            return w
        },
        get displayContext() {
            return L
        },
        get doNotTrackEnabled() {
            var e;
            return f.config.embed.dnt || (null == (e = f.config.request.flags) ? void 0 : e.dnt)
        },
        get playLoggingEnabled() {
            var e;
            return f.config.embed.log_plays && (null == (e = f.config.request.flags) ? void 0 : e.plays)
        },
        get canPlayPictureInPicture() {
            var e;
            const t = !1 !== o.pictureInPictureSupportType,
                n = o.spatialPlayback && (null == (e = f.config.video) ? void 0 : e.spatial),
                i = (o.iOS >= 17 || o.browser.safari) && O.readyState < 2;
            i && O.once(g.LOADED_DATA, (() => v.fire(V)));
            const r = 1 === f.config.embed.settings.pip;
            return t && !i && !n && r
        },
        get currentTime() {
            return td.isCastConnected ? td.chromecastPlayer.currentTime : O.currentTime
        },
        get debugCollector() {
            return B
        },
        overrideFragmentsHandler(e, t) {
            var n;
            null == (n = x) || n.hibernate(), b = f.config.embed.interactive, U = x, x = e, f.config.embed.interactive = f.config.embed.interactive || {
                markers: 0
            }, f.config.embed.interactive.fragments = t, v.fire(Dn)
        },
        restoreLastFragmentsHandler() {
            var e;
            x = U, null == (e = x) || e.wake(), f.config.embed.interactive && (f.config.embed.interactive = b), v.fire(Dn)
        },
        get fragmentsHandler() {
            return x
        },
        get seekingController() {
            return G
        },
        get ottVideoMetadata() {
            return k
        },
        set ottVideoMetadata(e) {
            k = e
        },
        get startTime() {
            return K
        },
        set startTime(e) {
            var t;
            null !== K && null === e && null === q && (null == (t = F) || t.clearSegmentedPlayback()), K = e, v.fire(Fo, K)
        },
        get endTime() {
            return q
        },
        set endTime(e) {
            var t;
            null !== q && null === e && null === K && (null == (t = F) || t.clearSegmentedPlayback()), q = e, v.fire(Go, q)
        },
        get segmentedPlaybackEnabled() {
            return null !== K && null !== q
        },
        get bigPicture() {
            return W
        },
        get abTests() {
            return M
        },
        inView: () => Ze(n),
        addABTest(e) {
            s("A/B Test", "color: white; background-color: blue")(`Test: ${e.test}, Group: ${e.group}`), M.push(e)
        },
        init: (e, t) => T || (x = new ju(_e), new fu(_e, p, n), z = t, T = f.load(e).then((e => (new Jb(_e, n), e))).then(oe).catch((e => (le(), ae(_e)))).then((() => "function" == typeof z.initializationHandler ? Promise.resolve(t.initializationHandler()) : null)).then((() => (se(_e), X(), "function" == typeof z.postInitializationHandler ? Promise.resolve(t.postInitializationHandler()) : null))).then((() => Promise.all([Q, a]))).then(re).then((() => (rc.setUp(_e.config, l || Ya.VimeoPlayer), null))).catch((e => {
            rc.captureException(e)
        })), T),
        loadVideoViaIframe(e, n = {}, i = {}) {
            let o = [],
                r = n;
            for (const t in i) !0 === i[t] && o.push(t);
            o.length && (r.listeners = o.join(",")), r.fromLoadVideo = 1, r.referrer = f.config.request.referrer;
            const a = t(window.location.search),
                l = t(`${e}`.split("?")[1]);
            r = Object.assign(a, l, r);
            const s = ct(r),
                c = ur(e);
            window.location.replace(`https://${f.config.player_url}/video/${c}?${s}`)
        },
        loadVideoViaConfig(e, t) {
            if (A === e && C) return C;
            if (v.fire(mn), null != t && t.video_version) {
                let e = f.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map((e => e.id)), -1 === e.indexOf(t.video_version)) return Promise.reject("Invalid version id specified")
            }
            v.fire(zi), A = e, n.classList.add("loading");
            const i = ue(e, t),
                o = m.get(i);
            return e = o ? o._config.loaded : e, C = f.load(e, t).then((e => {
                if (o) {
                    const e = O.element;
                    O = o._backbone, O.element.style.visibility = "visible", e.parentNode.replaceChild(O.element, e), v.fire(ji)
                }
                return e = oe(e), w || de(_e), e
            })).catch((e => ae(_e))).then((() => Promise.resolve(Q))).then(re), C
        },
        preloadVideo(e, t, n) {
            const i = ue(t, n),
                o = m.get(i);
            return o ? Promise.resolve(o) : new lc({
                events: v
            }).load(t, n).then((t => {
                t.loaded.preload = !0;
                const n = O.element.cloneNode(!1);
                n.style.visibility = "hidden", O.element.parentNode.insertBefore(n, O.element);
                const o = new dt(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return m.set(i, r), r
            }))
        },
        performDelegateAction(t, n = () => {}, o = []) {
            var r, a;
            let l;
            var s;
            null != (r = i) && r[t.will] && (l = (s = i)[t.will].apply(s, [f.config.video.id].concat(e(o))), !1 === l) || (n.apply(void 0, [f.config.video.id].concat(e(o), [l])), null != (a = i) && a[t.did] && i[t.did]())
        },
        ready: () => j,
        playbackEngineReady: () => J,
        verifyConfig: () => f.verify(),
        refreshAssetUrls: () => f.refreshAssetUrls().then((e => {
            const t = r(r({}, f.config), {}, {
                request: e
            });
            return oe({
                old: f.config,
                loaded: t
            })
        })).catch((e => ae(_e))),
        updatePhpTokens: () => new Promise(((e, t) => {
            if (function(e) {
                    const {
                        vimeo_api_client_token: t,
                        vimeo_api_interaction_tokens: {
                            likes: n,
                            watch_later: i,
                            following: o
                        } = {},
                        vimeo_live_client_token: r,
                        vimeo_bucketed_live_client_token: a
                    } = e;
                    return t && Vs(t) || n && Vs(n) || i && Vs(i) || o && Vs(o) || r && Vs(r) || a && Vs(a)
                }(f.config.user)) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = f.config.request, a = `https://${f.config.player_url}/video/${f.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                y(a, {
                    withCredentials: !0
                }).json().then((t => (f.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, f.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, f.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, f.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e()))).catch((e => {
                    rc.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                }))
            } else e()
        }))
    };
    return _e
}

function MC(e, t, n) {
    var i, r = 2e3,
        a = 4500,
        l = null,
        s = o.touch ? a : r,
        c = !0,
        d = !0,
        u = !1,
        _ = null,
        p = !1,
        m = null,
        v = null,
        f = !0,
        h = !1,
        E = !1,
        b = !1,
        T = !1;
    let y = !1;
    var L = !1;
    let I, O;
    var P = n.querySelector(`.${$r.VP_TARGET}`),
        R = n.querySelector(`.${$r.VP_CONTROLS}`);
    let N = n.querySelector('button[class*="_playButton_"]');
    var D = n.querySelector(`.${$r.VP_TITLE}`),
        w = n.querySelector(`.${$r.VP_VIDEO}`);
    let k, M = n.querySelector(`.${$r.VP_SIDEDOCK}`),
        V = n.querySelectorAll(`.${$r.VP_MENU}`),
        B = n.querySelector(`.${$r.ADS_WRAPPER}`),
        U = n.querySelector(`.${$r.COMPASS_WRAPPER}`),
        H = Array.from(n.querySelectorAll("dialog[data-menu]"));
    const F = e.config.embed.autoplay && (null == (i = e.config.request.flags) ? void 0 : i.autohide_controls),
        G = o.touch ? 300 : 0;
    let W = null;
    const Y = Iu(e.config, "webvr").group || !1;

    function $() {
        clearTimeout(l), l = null
    }

    function K() {
        v !== kr && (v && v.isNewMenu && v.isFullwidth() || L && (clearTimeout(l), l = setTimeout((() => j(!1, !0)), s)))
    }

    function q() {
        se.element && se.element.classList.contains("js-player-fullscreen") && (u || (n.classList.add("player-cursor-hide"), d = !0, u = !0))
    }

    function j(t, i) {
        var r, a, l;
        if (v === kr && i) return;
        if (v && v.isNewMenu && v.isFullwidth()) return;
        if (!h && !f && !n.classList.contains("player-ad")) return;
        if (b) return;
        $(), R = te(), N = ne(), M = ee(), V = n.querySelectorAll(`.${$r.VP_MENU}`);
        const s = document.activeElement && document.body.classList.contains($r.SHOWFOCUS) && ((null == (r = M) ? void 0 : r.contains(document.activeElement)) || (null == (a = R) ? void 0 : a.contains(document.activeElement)) || (null == (l = N) ? void 0 : l.contains(document.activeElement))),
            u = document.activeElement && v === kr && Array.from(V).find((e => null == e ? void 0 : e.contains(document.activeElement)));
        s || u || (e.events.fire(t ? Ci : yi), d = !0, o.spatialPlayback && e.config.video.spatial || (P.classList.add("hidden"), P.setAttribute("hidden", "")), c = !0, q())
    }

    function X() {
        K(), T || (e.events.fire(Ti), P.classList.remove("hidden"), P.removeAttribute("hidden"))
    }

    function Z() {
        h || f ? n.removeAttribute("tabindex") : h || f || E || n.setAttribute("tabindex", "0")
    }

    function J() {
        e.events.on([g.TIME_UPDATE, g.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === l && (e.events.fire(Sn), e.events.off([g.TIME_UPDATE, g.SEEKED], t))
        }))
    }

    function Q() {
        e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing")
    }

    function ee() {
        return M || (M = n.querySelector(`.${$r.VP_SIDEDOCK}`), M)
    }

    function te() {
        return R || (R = n.querySelector(`.${$r.VP_CONTROLS}`))
    }

    function ne() {
        return N || (N = n.querySelector('button[class*="_playButton_"]'), N)
    }
    return function() {
            var t = !0;

            function i() {
                X()
            }

            function l(i) {
                var a;
                if (s = r, d) d = !1;
                else if (void 0 === I || void 0 === O || i.screenX !== I || i.screenY !== O)
                    if (I = i.screenX, O = i.screenY, u && (n.classList.remove("player-cursor-hide"), u = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                        if (t = !0, o.spatialPlayback && null != (a = e.config.video) && a.spatial) {
                            const t = or(e.element),
                                n = i.clientX - t.left,
                                o = i.clientY - t.top,
                                r = 180,
                                a = o > e.element.clientHeight - 55,
                                l = n > e.element.clientWidth - 45 && o < r;
                            if (p || !a && !l) return
                        }
                        c && X(), K()
                    } else $(), q(), t && (j(!0), t = !1)
            }

            function _(e) {
                var t;
                B = B || (B = n.querySelector(`.${$r.ADS_WRAPPER}`), B), H.length || (H = Array.from(n.querySelectorAll("dialog[data-menu]"))), null != (t = B) && t.contains(e.target) || H.length && H.some((t => t.contains(e.target))) || j(!0)
            }

            function m(e) {
                var t, i, o, r;
                R = te(), M = ee(), N = ne(), U = U || (U = n.querySelector(`.${$r.COMPASS_WRAPPER}`), U);
                var a = (null == (t = R) ? void 0 : t.contains(e.target)) || (null == (i = M) ? void 0 : i.contains(e.target)) || (null == (o = N) ? void 0 : o.contains(e.target));
                let l = null == (r = U) ? void 0 : r.contains(e.target);
                h && f || l ? a || !h && !f || j(!0) : (clearTimeout(W), W = setTimeout(X, G))
            }

            function v(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return l(e)
            }
            o.pointerEvents ? S(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return s = r, i();
                s = a, m(e)
            })).on("pointermove", v).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return _(e)
            })) : S(n).on("touchmove", (function() {
                s = a, K()
            })).on("touchend", m).on("mouseenter", i).on("mousemove", l).on("mouseleave", _), e.events.on(ei, (function(e) {
                var t;
                o.pointerEvents ? S(se.element).on("pointermove", v) : S(se.element).on("mousemove", l), e || (null == (t = k) || t.focus(), y = !0)
            })), e.events.on(ni, (function() {
                o.pointerEvents ? S(se.element).off("pointermove", v) : S(se.element).off("mousemove", l), k && y && k.focus(), y = !1
            }))
        }(), e.events.on(g.PLAY, (function(e) {
            F || 0 === e || X()
        })).on(gn, X).on([C.BUFFER_ENDED, g.SEEKED, Gn, yn, Zn], K).on(A, (function() {
            L = !0
        })), e.events.on(Kn, (function(e) {
            e && K()
        })), e.events.on(di, Z).on(Yo, Z).on(Wn, (function(e) {
            f = e, Z()
        })).on($n, (function(e) {
            h = e, Z()
        })), e.events.on(Wi, (function() {
            b = !0, X()
        })).on(Yi, (function() {
            b = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(Kn, (function(e, t) {
                v = e === kr ? e : e ? t : null
            })), S(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (v) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return M = ee(), D = D || (D = n.querySelector(`.${$r.VP_TITLE}`)), (e.classList.contains($r.VP_TITLE) || e.classList.contains($r.VP_TARGET) || (null == (t = D) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || w.contains(e)) && !(null != (i = M) && i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const l = L && o.spatialPlayback && e.config.video.spatial && _;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!l) {
                        if (L && t) return;
                        return void e.events.fire(Mn)
                    }
                }
                1 === ++r && setTimeout((function() {
                    if (l) {
                        let t = m && m.x === i.clientX && m.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? Mn : kn), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(cd) && !t.get(ud) && !t.get(pd)) return;
                        e.events.fire(e.backbone.paused ? Mn : kn)
                    } else e.events.fire(wn);
                    r = 0
                }), 200)
            })), S(n).on("mousedown", `.${$r.VP_VIDEO_WRAPPER}`, (function(e) {
                var t;
                if (!i) return P.classList.remove("hidden"), P.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), P.dispatchEvent(t)), !1
            })).on("contextmenu", `.${$r.VP_VIDEO}`, (function(e) {
                return P.classList.remove("hidden"), P.removeAttribute("hidden"), !1
            })), e.events.on(zt, (function(e) {
                if (e) return i = !0, void P.classList.add("hidden");
                i = !1, P.classList.remove("hidden")
            }))
        }(),
        function() {
            function t() {
                E = !0, n.removeAttribute("tabindex")
            }

            function i() {
                E = !1, Z()
            }
            let o;
            S(n).on("focus", "a, button, input, [tabindex]", (function(e) {
                y || (k = this), clearTimeout(o), o = null, document.activeElement === this && X()
            })), S(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (o = setTimeout(j, 50))
            })), n.addEventListener("focus", (function() {
                X(), k && k.focus()
            }), !1), e.events.on(di, t), e.events.on(ui, i), e.events.on(Yo, t), e.events.on($o, i)
        }(), e.events.on(ei, (function(e) {
            q(), _ && _.adjustRenderSize(), b && X()
        })).on(ni, (function(e) {
            c = !0, _ && _.adjustRenderSize(), e ? j() : (X(), $())
        })), J(), e.events.on(kt, (function() {
            c = !0, d = !0, f = !0, h = !1, T = !1, L = !1, J(), $()
        })), e.events.on(tn, (function() {
            const t = e => (...t) => {
                    _ && e.apply(void 0, t)
                },
                i = t((t => {
                    const n = e.element.classList.contains("webvr");
                    _ && n && _.toggleVR()
                })),
                r = t((t => {
                    _.isVRPresenting ? setTimeout((() => {
                        e.events.fire(z.WEBVR_ENTER)
                    }), 100) : setTimeout((() => {
                        e.events.fire(z.WEBVR_EXIT)
                    }), 100)
                }));
            e.events.on(nn, t((() => {
                e.element.classList.contains("webvr") || e.element.classList.add("grabbable")
            }))), e.events.on(Tn, t((() => {
                Q(), o.webvr && _.isVRPresenting && Y && _.toggleVR()
            }))), e.events.on(A, t((() => {
                e.config.video.spatial || Q()
            }))), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(Xn, t((() => {
                o.webvr && _.hasVRHeadset && Y ? _.toggleVR() : e.events.fire(gi)
            }))), e.events.on(z.WEBVR_HARDWARE_AVAILABLE, t((e => {
                const t = n.querySelector(`.${$r.STEREOSCOPIC}`);
                t && t.classList.contains("off") && Y && t.classList.remove("off")
            }))), e.events.on(z.WEBVR_ENTER, t((t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), _.isUserInteracting = !1
            }))), e.events.on(z.WEBVR_EXIT, t((t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), _.isUserInteracting = !0
            }))));
            let a = null;
            const l = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p || n || (p = !0, t.preventDefault(), e.element.classList.add("grabbing"), m = {
                        x: t.clientX,
                        y: t.clientY
                    }, _.makeContact(m))
                })),
                s = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && _.move({
                        x: t.clientX,
                        y: t.clientY
                    })
                })),
                c = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && (e.element.classList.remove("grabbing"), _.releaseContact(!1), p = !1)
                })),
                d = t((t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (_.isUserInteracting || (_.isUserInteracting = !0), null !== a && clearTimeout(a), a = setTimeout((() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), _.isUserInteracting = !1
                    }), 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), _.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                })),
                u = t((e => {
                    p || (p = !0, _.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                })),
                v = t((e => {
                    p && (e.preventDefault(), _.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                })),
                f = t((e => {
                    _.releaseContact(!0), p = !1
                })),
                h = t((e => {
                    _.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                })),
                E = t((t => {
                    p = !1, e.element.classList.remove("grabbing"), _.abandonMotion()
                }));
            e.events.on(A, (() => {
                o.android && _ && window.addEventListener("deviceorientation", h, !1)
            })), e.events.once(A, (() => {
                e.store.watch("ui.player.boundingRect", (() => {
                    _ && _.adjustRenderSize(), p = !1
                })), o.pointerEvents ? (S(P).on("pointerdown", l), window.addEventListener("pointermove", s), window.addEventListener("pointerup", c), window.addEventListener("pointerleave", E)) : (S(P).on("mousedown", l).on("wheel", d), P.addEventListener("touchstart", u, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", v, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", f, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", s), window.addEventListener("mouseup", c), window.addEventListener("mouseleave", E))
            }))
        })), e.events.on(x, (e => {
            Q(), _ = e
        })), e.events.on(Pn, (() => {
            T = !0, clearTimeout(W), W = null
        })), e.events.on(Nn, (() => {
            T = !1
        })), {}
}
const VC = {
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        74: "j",
        75: "k",
        76: "l",
        80: "p"
    },
    BC = {
        106: "j",
        107: "k",
        108: "l",
        112: "p"
    },
    xC = ["up", "down", "left", "right"],
    UC = ["right", "l"],
    HC = ["left", "j"],
    FC = "scrub",
    GC = [FC],
    WC = [jr.TRANSCRIPT_LIST];

function YC(e, t, n) {
    var i = !!e.config.embed.on_site,
        r = n.querySelector(".volume"),
        a = !1;
    let l;
    var s = null;
    let c = !1;
    var d = !1,
        u = e.config.video.fps / 5,
        _ = u,
        p = 0,
        m = !1,
        v = b(A, 80),
        f = 5;
    const h = o.spatialPlayback && e.config.video.spatial;

    function E(n) {
        var i;
        return !t.get(cd) || !(GC.includes(n) && (null == (i = e.config.video.live_event) || !i.dvr)) && (t.get(ud) || t.get(pd))
    }

    function C(t) {
        return "d" === t || !i && (e.config.view === Lr.main || e.config.view === Lr.privateUnlocked)
    }

    function T(e) {
        return "number" != typeof e.which && (e.which = e.keyCode), e
    }

    function y(e) {
        if (!e) return "";
        if ("keypress" === e.type) {
            var t = String.fromCharCode(e.which);
            return e.shiftKey || (t = t.toLowerCase()), t
        }
        return e.which in VC ? VC[e.which] : String.fromCharCode(e.which).toLowerCase()
    }

    function L(t) {
        if (e.config.embed.settings.background) return !0;
        var n = t.target || t.srcElement;
        return "INPUT" === n.tagName || "SELECT" === n.tagName || "TEXTAREA" === n.tagName || n.isContentEditable
    }

    function A(n, i) {
        var o, r;
        const a = UC.includes(n);
        if (!E(FC)) return;
        if (null != (o = e.backbone) && null != (o = o.telecine) && o.ended && a) return;
        if (null != (r = e.config.video.live_event) && r.dvr && a && e.backbone.atLiveEdge) return;
        if (a && !e.seekingController.canSeekNow) return;
        m || (i && !e.backbone.paused && e.events.fire(kn), e.events.fire(Fn, {
                seekType: "keyboard",
                isFrameByFrame: i
            }), m = !0),
            function(n) {
                var i = n,
                    o = Math.ceil(u),
                    r = Math.ceil(function() {
                        const n = t.get(cd) ? e.backbone.liveEdgeTime - e.backbone.liveTailTime : e.config.video.duration;
                        return Math.max(u, .618 * n)
                    }() - u);
                _ = function(e, t, n) {
                    return e /= 100, n * (--e * e * e + 1) + t
                }(i, o, r)
            }(p), 1 === ++p && (_ = e.config.video.fps * f);
        const l = i ? 1 : _,
            s = a ? l : -l,
            c = e.currentTime * e.config.video.fps;
        ! function(n, i) {
            let o, r;
            t.get(cd) ? (o = e.backbone.liveTailTime, r = e.backbone.liveEdgeTime) : (o = e.fragmentsHandler.currentFragment.startTime, r = e.fragmentsHandler.currentFragment.endTime);
            let a = n / e.config.video.fps;
            a < o ? a = o : a >= r ? a = r - .001 : e.events.fire(Rn, {
                direction: a - e.currentTime > 0 ? "forward" : "backward",
                time: 1 !== p || i ? null : f
            }), e.events.fire(Rt, a)
        }((a ? Math.ceil(c) : Math.floor(c)) + s, i)
    }

    function S(e) {
        if (s === kr) return !1;
        var t = s.getTabIndexItems(),
            n = t.indexOf(document.activeElement),
            i = "up" === e ? n - 1 : n + 1,
            o = null;
        return !(o = i >= t.length ? t[0] : i < 0 ? t[t.length - 1] : t[i]) || (o.focus(), !1)
    }

    function I(t, n) {
        if (s && document.body.classList.contains($r.SHOWFOCUS) && "k" !== n) return !0;
        if (!E("play/pause")) return !0;
        if (!document.activeElement || document.activeElement === document.body || !document.body.classList.contains($r.SHOWFOCUS) || "k" === n) {
            const t = e.backbone.paused ? Mn : kn;
            return e.events.fire(t), !1
        }
    }

    function O() {
        const t = e.backbone.muted,
            n = e.backbone.volume;
        return t ? (e.events.fire(Dt, !1), 0 === n && e.events.fire(Nt, 1)) : t || 0 !== n ? !t && n > 0 && e.events.fire(Dt, !0) : e.events.fire(Nt, 1), !1
    }

    function P() {
        const t = "ClipboardItem" in window && "clipboard" in navigator,
            n = e.element.querySelector("video");
        if (!t || !n || e.config.request.drm || !c) return !1;
        let i = document.createElement("canvas");
        i.width = n.videoWidth, i.height = n.videoHeight, i.getContext("2d").drawImage(n, 0, 0);
        const o = new ClipboardItem({
            "image/png": new Promise((e => {
                i.toBlob((t => {
                    e(t)
                }), "image/png")
            }))
        });
        return navigator.clipboard.write([o]).then((() => {
            e.events.fire(Xo)
        })), !0
    }

    function R() {
        return s !== kr && (s ? (s.element.contains(document.activeElement) && s.button.focus(), s.hide(), !1) : !a && void 0)
    }

    function N() {
        return !d && (s === kr || (s ? !s.element.contains(document.activeElement) || S("up") : h ? (e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"), !1) : !(!e.config.embed.on_site || !document.activeElement || n.contains(document.activeElement)) || (e.events.fire(Nt, .05, !1, !0), !1)))
    }

    function D() {
        return !d && (s === kr || (s ? !s.element.contains(document.activeElement) || S("down") : h ? (e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"), !1) : !(!e.config.embed.on_site || !document.activeElement || n.contains(document.activeElement)) || (e.events.fire(Nt, -.05, !1, !0), !1)))
    }

    function w(t, n) {
        const i = xC.includes(n);
        if (s === kr) return !0;
        if (e.displayContext === e.adHandler) return !0;
        if (s) return !s.element.contains(document.activeElement) || !i || S("left" === n ? "up" : "down");
        if (a && l !== Sa.HELP) return !0;
        if (h && i) return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n), !1;
        if (document.activeElement && document.activeElement === r && i) {
            var o = "left" === n ? -.05 : .05;
            return e.events.fire(Nt, o, !1, !0), !1
        }
        t.shiftKey || 0 === p ? A(n, t.shiftKey) : v(n, t.shiftKey)
    }
    return function() {
            function t(e) {
                a = !0, l = e, e !== Sa.NOT_SUPPORTED && e !== bs.LEAD_CAPTURE_FORM || (i = !0)
            }

            function n() {
                a = !1, l = null
            }
            e.events.on(di, t), e.events.on(Yo, t), e.events.on(ui, n), e.events.on($o, n)
        }(), e.events.on(Kn, (function(e, t) {
            s = e ? t || e : null
        })), e.events.on(ko, (function(e) {
            d = e
        })), e.events.on(Di, (function(e) {
            e && (i = !1)
        })),
        function() {
            const {
                like: t,
                watch_later: n,
                share: i
            } = e.config.embed.settings, o = {
                c: [Bn, !0],
                h: [Vn, !0],
                T: Vo,
                f: wn,
                d: hi,
                A: Bo,
                k: I,
                j: w,
                l: w,
                m: O,
                p: P,
                space: I,
                up: N,
                down: D,
                left: w,
                right: w,
                esc: R,
                "?": [wt, Sa.HELP]
            };

            function r(t) {
                T(t);
                const n = y(t);
                if (function(e) {
                        return !(e.ctrlKey || e.metaKey || e.altKey || "keypress" === e.type && e.charCode in BC || (e.which in VC ? "keydown" !== e.type : "keypress" !== e.type))
                    }(t) && !L(t) && C(n) && n in o) {
                    if ("function" == typeof o[n]) {
                        if (!1 === o[n](t, n)) {
                            var i;
                            if (t.preventDefault(), WC.includes(null == (i = t.target) ? void 0 : i.id)) return;
                            t.stopPropagation()
                        }
                        return
                    }
                    if (!1 === function(t) {
                            return t = Array.isArray(t) ? t : [t], e.events.fire.apply(null, t), !1
                        }(o[n])) {
                        var r;
                        if (t.preventDefault(), WC.includes(null == (r = t.target) ? void 0 : r.id)) return;
                        t.stopPropagation()
                    }
                }
            }
            e.config.embed.on_site || (o.v = Bt), t && (o.x = ii), n && (o.w = oi), i && (o.s = ri), e.config.embed.keyboard && (document.addEventListener("keydown", r, !1), document.addEventListener("keypress", r, !1), document.addEventListener("keyup", (function(t) {
                if (s !== kr && (T(t), !L(t) && C())) {
                    var n = y(t);
                    h && xC.includes(n) ? e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(n) : E(FC) && (HC.includes(n) || UC.includes(n)) && function(t) {
                        v.cancel(), _ = u, p = 0;
                        var n = t.shiftKey;
                        e.events.fire(Gn, n), m = !1
                    }(t)
                }
            }), !1))
        }(), e.events.on(Ki, (function() {
            i = !1
        })).on(qi, (function() {
            i = !0
        })), e.config.embed.on_site && document.querySelector(".player") === n && (i = !1),
        function() {
            let e, t = !1;
            document.body.addEventListener("keyup", (e => {
                T(e), 9 !== e.which || document.body.classList.contains($r.SHOWFOCUS) || document.body.classList.add($r.SHOWFOCUS)
            })), document.body.addEventListener("keydown", (n => {
                T(n), 32 !== n.which && 13 !== n.which || (t = !0, clearTimeout(e), e = setTimeout((() => {
                    t = !1
                }), 200))
            })), document.body.addEventListener("click", (e => {
                t || document.body.classList.remove($r.SHOWFOCUS)
            }))
        }(), e.events.on(sn, (() => {
            i = !0
        })), e.events.on(g.PLAY, (() => {
            c = !0
        })), e.events.on(g.ENDED, (() => {
            c = !1
        })), {
            pause: function() {
                i = !0
            },
            unpause: function() {
                i = !1
            }
        }
}

function $C(e, t, n, i) {
    const r = function(e) {
            if (!0 === e) return Promise.resolve(null);
            let t = !1;
            return new Promise((n => {
                e.link.addEventListener("load", (() => {
                    if (!t) {
                        t = !0;
                        const i = (new Date).getTime() - e.startTime;
                        setTimeout((() => n(i)), 100)
                    }
                }), !1)
            }))
        }(n),
        a = new kC({
            element: e,
            delegate: i,
            cssLoadedPromise: r
        }),
        l = a.store;
    e.classList.add("js-player-fullscreen");
    let s = a.expose,
        c = null,
        d = null,
        u = null,
        _ = null,
        p = null,
        m = null;
    const v = e.querySelector(`.${$r.VP_CONTROLS}`),
        f = {
            tiny: Vi,
            mini: Bi,
            normal: xi,
            none: xi
        };

    function h(t) {
        t && void 0 !== f[t] && (a.events.fire(f[t]), e.classList.toggle("player-normal", "normal" === t), e.classList.toggle("player-mini", "mini" === t), e.classList.toggle("player-tiny", "tiny" === t))
    }

    function E(t) {
        t && void 0 !== f[t] && (e.classList.toggle("app-normal", "normal" === t), e.classList.toggle("app-mini", "mini" === t), e.classList.toggle("app-tiny", "tiny" === t))
    }

    function g(t) {
        Object.keys(Jd).forEach((n => e.classList.toggle(`player-${n}`, t === n)))
    }

    function b(t) {
        Object.keys(Jd).forEach((n => e.classList.toggle(`app-${n}`, t === n)))
    }

    function C() {
        const t = a.config.embed.settings;
        e.classList.toggle("with-fullscreen", !!t.fullscreen);
        const n = t.custom_logo;
        e.classList.toggle("with-custom-logo", !!n), e.classList.toggle("with-sticky-custom-logo", n && n.sticky), e.classList.toggle("hide-controls-mode", !!t.background || 0 === t.controls), e.classList.toggle("touch-support", o.touch), e.classList.toggle("is-google-bot", o.isGoogleBot)
    }

    function T(e, t = a.config.video.url) {
        if (!(!t || e && e.metaKey)) {
            if (-1 === t.indexOf("#") && a.backbone.currentTime > 0 && a.backbone.currentTime < a.config.video.duration - 30 && !a.backbone.paused && (t += `#at=${Math.floor(a.backbone.currentTime)}`), !a.config.embed.on_site) return window.open(t),
                function(e) {
                    if (e && e.detail > 0) try {
                        document.activeElement.blur()
                    } catch (ke) {}
                }(e), a.events.fire(kn), !1;
            window.location = t
        }
    }

    function y() {
        _ || (h(l.get("ui.player.mode")), _ = l.watch("ui.player.mode", h)), p || (h(l.get("ui.app.mode")), p = l.watch("ui.app.mode", E))
    }

    function L() {
        d || (g(l.get("ui.player.breakpoint")), d = l.watch("ui.player.breakpoint", g)), u || (b(l.get("ui.app.breakpoint")), u = l.watch("ui.app.breakpoint", b))
    }

    function A() {
        C(), m = new Promise((e => {
                let t = null;
                const n = () => {
                    clearTimeout(t), window.innerWidth > 0 && window.innerHeight > 0 ? e() : t = setTimeout(n, 250)
                };
                a.events.once(so, n), a.events.once(fn, n)
            })), a.events.on(si, (() => {
                a.performDelegateAction(Rd, (() => {
                    a.config.video.vod && a.config.video.vod.url ? T(null, `${a.config.video.vod.url}#collections`) : a.config.video.url && T(null, `${a.config.video.url}#collections`)
                }))
            })), a.events.on(ri, (() => {
                const e = a.config.embed.settings.share && a.config.embed.settings.share.embed_only,
                    t = () => {
                        a.events.fire(wt, "share", e)
                    };
                se.element ? t() : a.performDelegateAction(Od, t)
            })), a.events.on(ai, (() => {
                a.config.embed.settings.share.embed_only && a.performDelegateAction(Od, (() => {
                    a.events.fire(wt, "share", !0)
                }))
            })), a.events.on(bn, (() => {
                e.classList.add("player-ad")
            })), a.events.on([Cn, kt], (() => {
                e.classList.remove("player-ad")
            })),
            function() {
                const t = function() {
                    return function(e, t) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(m, (function() {
                        const t = function() {
                            const {
                                width: t,
                                height: n
                            } = or(e), i = "10px";
                            return Kl ? n <= 200 ? i : t < 450 ? "12px" : t <= 1024 ? "11px" : i : i
                        }();
                        v && (v.style.fontSize = t);
                        const n = e.querySelector(`.${$r.VP_SIDEDOCK}`);
                        n && (n.style.fontSize = t)
                    }))
                };
                a.events.on(ei, t), a.events.on(ni, t), window.addEventListener("orientationchange", t), Kl && (e.classList.add("mobile"), t())
            }(), y(), L(),
            function() {
                function t() {
                    let t = e;
                    if (i && i.getFullscreenElement && "function" == typeof i.getFullscreenElement) {
                        const n = i.getFullscreenElement();
                        n && n instanceof HTMLElement && n.contains(e) && n.classList.contains("js-player-fullscreen") && (t = n)
                    }
                    return t
                }
                a.config.embed.fullscreen = !0, o.iPad && e.classList.add("no-fullscreen-api-support");
                const n = a.config.embed.playsinline && (o.iOS >= 10 || Pr),
                    r = o.iPad || n;
                se.enabled || r || (e.classList.add("no-fullscreen-support"), o.iOS || (a.config.embed.fullscreen = !1));
                let l = !1,
                    s = !1;
                a.events.on(Wt, (function() {
                    se.enabled || se.videoEnabled(e) ? (a.events.fire(Qn), s = !1, se.request(t())) : a.events.fire(zt, !0)
                })), a.events.on(wn, (function() {
                    if (a.backbone.pictureInPictureActive && a.backbone.exitPictureInPicture(), se.element) a.events.fire(ti), se.exit();
                    else {
                        const {
                            HAVE_CURRENT_DATA: e
                        } = a.backbone.videoElement;
                        o.fullscreenRequiresDataLoaded && a.backbone.readyState < e && a.backbone.play(), a.events.fire(Qn), s = !0, se.request(t())
                    }
                }));
                var c = se.onenter,
                    d = se.onexit;
                if (se.onenter = function(e) {
                        null !== document.webkitFullScreenElement && (l || (t().contains(e) ? function(e) {
                            l || (l = !0, a.events.fire(ei, t() === e, s))
                        }(e) : "function" == typeof c && c(e)))
                    }, se.onexit = function() {
                        document.webkitFullScreenElement || (l ? l && (l = !1, a.events.fire(ni, s), s || a.events.fire(zt, !1), s = !1) : "function" == typeof d && d())
                    }, S(e).on("click", "a", (function(e) {
                        se.element === t() && se.exit()
                    })), S(e).on("gestureend", (function(e) {
                        e.scale > 1 && a.events.fire(wn)
                    })), "undefined" != typeof MSGesture) {
                    var u = 1,
                        _ = new MSGesture;
                    _.target = e, S(e).on("pointerdown", (function(e) {
                        _.addPointer(e.pointerId)
                    })).on(["MSGestureChange"], (function(e) {
                        u *= e.scale
                    })).on(["MSGestureEnd"], (function() {
                        (!l && u >= 2 || l && u < 1) && a.events.fire(wn), u = 1
                    }))
                }
            }(),
            function() {
                const t = ml(Et, a.config);
                ! function(e, t, n, i) {
                    var o = !1;
                    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
                    var r = function(e) {
                            var t = !0;
                            if (e.changedTouches) {
                                var r = e.changedTouches[0].pageX - window.pageXOffset,
                                    a = e.changedTouches[0].pageY - window.pageYOffset,
                                    l = document.elementFromPoint(r, a);
                                null !== l && this.contains(l) && (t = n.call(this, e))
                            }
                            return "function" == typeof i && i.call(this, e), o = !0, t
                        },
                        a = function(e) {
                            if (!o) return n.call(this, e);
                            o = !1
                        };
                    (t = "function" == typeof t ? null : t) ? S(e).on("click", t, a).on("touchend", t, r): S(e).on("click", a).on("touchend", r)
                }(e, "a[data-clip-link]", (e => T(e, t))), a.events.on(Bt, T)
            }(), a.events.on(Di, (() => {
                C()
            }))
    }

    function I() {
        c || (c = new YC(a, l, e), Object.defineProperties(s, {
            pauseKeyboard: {
                enumerable: !0,
                value: c.pause
            },
            unpauseKeyboard: {
                enumerable: !0,
                value: c.unpause
            }
        }))
    }
    const O = "right-content-area-open",
        P = "right-content-area-supported",
        R = "[data-content-area-sibling-eligible]",
        N = "content-area-sibling-enabled";
    let D;

    function w(e = 400) {
        var t;
        D && clearTimeout(D), null == (t = a.element) || null == (t = t.classList) || t.add("animating"), D = setTimeout((() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.remove("animating")
        }), e)
    }
    const k = {
        initializationHandler: () => (a.events.on(No, (e => {
            e && !a.element.classList.contains(O) ? (w(), a.element.classList.add(O)) : !e && a.element.classList.contains(O) && (w(), a.element.classList.remove(O))
        })), a.events.on(Do, (() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.add(P), Array.from(a.element.querySelectorAll(R)).forEach((e => {
                var t;
                return null == e || null == (t = e.classList) ? void 0 : t.add(N)
            }))
        })), a.events.on(wo, (() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.remove(P), Array.from(a.element.querySelectorAll(R)).forEach((e => {
                var t;
                return null == e || null == (t = e.classList) ? void 0 : t.remove(N)
            }))
        })), new MC(a, l, e), I(), A(), Promise.resolve()),
        postInitializationHandler: () => Promise.resolve(),
        authorizationHandler(e) {
            L(), y(), e(), I();
            let t = "Error",
                n = "Unhandled video privacy";
            switch (a.config.view) {
                case Lr.privatePassword:
                    return new Promise((e => {
                        a.events.once(ki, (t => {
                            e(t)
                        }))
                    }));
                case Lr.privateLocked:
                    let e;
                    return e = a.config.user.logged_in ? Promise.reject() : new Promise(((e, t) => {
                        a.events.once(Mi, (n => {
                            n.view !== Lr.privateLocked ? e(n) : t()
                        }))
                    })), e;
                case Lr.geoBlocked:
                case Lr.drmPlaybackUnavailable:
                    return Promise.reject();
                case Lr.error:
                    t = a.config.title, n = a.config.message
            }
            return a.config.view !== Lr.main && a.config.view !== Lr.privateUnlocked && a.events.fire(vn, "error", {
                title: t,
                message: n
            }), Promise.reject()
        }
    };
    return a.init(t, k).catch((t => {
        rc.captureException(t), e.classList.remove("loading");
        const n = aa();
        a.events.fire(fn, n.type, n)
    })), s
}
window.requestModule = window.requestModule || vt, window.BigScreen = window.BigScreen || se;
export {
    ea as $, O_ as A, cf as B, qr as C, R_ as D, Ws as E, Ev as F, xv as G, tf as H, Sv as I, Ys as J, Gv as K, $r as L, tp as M, Mv as N, ep as O, Nv as P, H_ as Q, _f as R, I_ as S, jv as T, wg as U, _s as V, $C as VimeoPlayer, Eu as W, Us as X, Z_ as Y, $s as Z, dn as _, va as a, pp as a0, Rg as a1, Cp as a2, kg as a3, wv as a4, mf as a5, qv as b, sa as c, rs as d, ls as e, yp as f, as as g, S_ as h, Ka as i, gl as j, U_ as k, x_ as l, of as m, Ua as n, Og as o, B_ as p, jr as q, P_ as r, ap as s, Jo as t, mv as u, Ip as v, k_ as w, V_ as x, M_ as y, Ml as z
};