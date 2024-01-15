import { jsx as ne, jsxs as Cn, Fragment as Xw } from "react/jsx-runtime";
import "./lib/form-validations/index.es.js";
import * as Fe from "react";
import pe, { useCallback as dr, forwardRef as Rr, Children as Of, isValidElement as Dv, createElement as St, cloneElement as H4, Fragment as y9, useRef as xn, useState as pr, useEffect as Pt, createContext as i2, useMemo as Ls, useContext as d2, useLayoutEffect as g9, useReducer as Kw, memo as qw } from "react";
import { c as Sn, t as F7, a as p2 } from "./index-vDNL9MXV.js";
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(u) {
    for (var d = 1; d < arguments.length; d++) {
      var f = arguments[d];
      for (var y in f)
        Object.prototype.hasOwnProperty.call(f, y) && (u[y] = f[y]);
    }
    return u;
  }, nr.apply(this, arguments);
}
function Jw(u, d) {
  typeof u == "function" ? u(d) : u != null && (u.current = d);
}
function C9(...u) {
  return (d) => u.forEach(
    (f) => Jw(f, d)
  );
}
function Ns(...u) {
  return dr(C9(...u), u);
}
const Hv = /* @__PURE__ */ Rr((u, d) => {
  const { children: f, ...y } = u, C = Of.toArray(f), x = C.find(eb);
  if (x) {
    const h = x.props.children, k = C.map((E) => E === x ? Of.count(h) > 1 ? Of.only(null) : /* @__PURE__ */ Dv(h) ? h.props.children : null : E);
    return /* @__PURE__ */ St(R4, nr({}, y, {
      ref: d
    }), /* @__PURE__ */ Dv(h) ? /* @__PURE__ */ H4(h, void 0, k) : null);
  }
  return /* @__PURE__ */ St(R4, nr({}, y, {
    ref: d
  }), f);
});
Hv.displayName = "Slot";
const R4 = /* @__PURE__ */ Rr((u, d) => {
  const { children: f, ...y } = u;
  return /* @__PURE__ */ Dv(f) ? /* @__PURE__ */ H4(f, {
    ...tb(y, f.props),
    ref: d ? C9(d, f.ref) : f.ref
  }) : Of.count(f) > 1 ? Of.only(null) : null;
});
R4.displayName = "SlotClone";
const x9 = ({ children: u }) => /* @__PURE__ */ St(y9, null, u);
function eb(u) {
  return /* @__PURE__ */ Dv(u) && u.type === x9;
}
function tb(u, d) {
  const f = {
    ...d
  };
  for (const y in d) {
    const C = u[y], x = d[y];
    /^on[A-Z]/.test(y) ? C && x ? f[y] = (...k) => {
      x(...k), C(...k);
    } : C && (f[y] = C) : y === "style" ? f[y] = {
      ...C,
      ...x
    } : y === "className" && (f[y] = [
      C,
      x
    ].filter(Boolean).join(" "));
  }
  return {
    ...u,
    ...f
  };
}
function S9(u) {
  var d, f, y = "";
  if (typeof u == "string" || typeof u == "number")
    y += u;
  else if (typeof u == "object")
    if (Array.isArray(u))
      for (d = 0; d < u.length; d++)
        u[d] && (f = S9(u[d])) && (y && (y += " "), y += f);
    else
      for (d in u)
        u[d] && (y && (y += " "), y += d);
  return y;
}
function nb() {
  for (var u, d, f = 0, y = ""; f < arguments.length; )
    (u = arguments[f++]) && (d = S9(u)) && (y && (y += " "), y += d);
  return y;
}
const P7 = (u) => typeof u == "boolean" ? "".concat(u) : u === 0 ? "0" : u, B7 = nb, Uv = (u, d) => (f) => {
  var y;
  if ((d == null ? void 0 : d.variants) == null)
    return B7(u, f == null ? void 0 : f.class, f == null ? void 0 : f.className);
  const { variants: C, defaultVariants: x } = d, h = Object.keys(C).map((b) => {
    const N = f == null ? void 0 : f[b], R = x == null ? void 0 : x[b];
    if (N === null)
      return null;
    const M = P7(N) || P7(R);
    return C[b][M];
  }), k = f && Object.entries(f).reduce((b, N) => {
    let [R, M] = N;
    return M === void 0 || (b[R] = M), b;
  }, {}), E = d == null || (y = d.compoundVariants) === null || y === void 0 ? void 0 : y.reduce((b, N) => {
    let { class: R, className: M, ...L } = N;
    return Object.entries(L).every((_) => {
      let [$, P] = _;
      return Array.isArray(P) ? P.includes({
        ...x,
        ...k
      }[$]) : {
        ...x,
        ...k
      }[$] === P;
    }) ? [
      ...b,
      R,
      M
    ] : b;
  }, []);
  return B7(u, h, E, f == null ? void 0 : f.class, f == null ? void 0 : f.className);
}, rb = Uv(
  "nxth-inline-flex nxth-items-center nxth-justify-center nxth-whitespace-nowrap nxth-transition-all nxth-rounded-md nxth-select-none hover:nxth-scale-[1.01] disabled:nxth-pointer-events-none disabled:nxth-cursor-not-allowed disabled:nxth-text-dark-3 disabled:nxth-bg-dark-5 dark:disabled:nxth-bg-transparent disabled:nxth-border-dark-3",
  {
    variants: {
      variant: {
        clean: "nxth-transition-all",
        default: "nxth-bg-primary nxth-font-bold dark:nxth-bg-transparent nxth-text-white nxth-text-[18px] dark:nxth-text-primary-dark nxth-shadow-sm nxth-border nxth-border-primary-border dark:nxth-border-primary-dark hover:nxth-bg-primary-hover dark:hover:nxth-bg-primary-dark hover:nxth-text-primary-border dark:hover:nxth-text-fix-darker dark:hover:nxth-border-fix-darker",
        destructive: "nxth-bg-red-500 nxth-text-slate-50 hover:nxth-bg-red-500/90 dark:nxth-bg-red-900 dark:nxth-text-slate-50 dark:hover:nxth-bg-red-900/90",
        outline: "nxth-border nxth-border-slate-200 nxth-bg-white hover:nxth-bg-slate-100 hover:nxth-text-slate-900 dark:nxth-border-slate-800 dark:nxth-bg-slate-950 dark:hover:nxth-bg-slate-800 dark:hover:nxth-text-slate-50",
        secondary: "nxth-border nxth-border-dark-4 nxth-text-dark-2 nxth-bg-white nxth-font-bold dark:nxth-bg-transparent dark:nxth-border-dark-2 dark:nxth-text-white hover:nxth-scale-[1.03] nxth-transition-all",
        ghost: "hover:nxth-bg-slate-100 hover:nxth-text-slate-900 dark:hover:nxth-bg-slate-800 dark:hover:nxth-text-slate-50",
        link: "nxth-text-slate-900 nxth-underline-offset-4 hover:nxth-underline dark:nxth-text-slate-50"
      },
      size: {
        clean: "",
        default: "nxth-min-h-[3.5rem] nxth-h-[3.5rem] nxth-w-full",
        sm: "nxth-h-9 nxth-rounded-md nxth-px-3",
        lg: "nxth-h-11 nxth-rounded-md nxth-px-8",
        icon: "nxth-h-9 nxth-w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), U4 = Fe.forwardRef(
  ({ className: u, variant: d, size: f, asChild: y = !1, loading: C = !1, ...x }, h) => /* @__PURE__ */ ne(
    y ? Hv : "button",
    {
      className: Sn(rb({ variant: d, size: f, className: u })),
      ref: h,
      ...x,
      children: C ? /* @__PURE__ */ ne(UT, {}) : x.children
    }
  )
);
U4.displayName = "Button";
const ab = Fe.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ ne(
  "div",
  {
    ref: f,
    className: Sn(
      "nxth-rounded-lg nxth-border nxth-border-slate-200 nxth-bg-white nxth-text-slate-950 nxth-shadow-sm dark:nxth-border-slate-800 dark:nxth-bg-slate-950 dark:nxth-text-slate-50",
      u
    ),
    ...d
  }
));
ab.displayName = "Card";
const ib = Fe.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ ne(
  "div",
  {
    ref: f,
    className: Sn(
      "nxth-flex nxth-flex-col nxth-space-y-1.5 nxth-p-6",
      u
    ),
    ...d
  }
));
ib.displayName = "CardHeader";
const ob = Fe.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ ne(
  "h3",
  {
    ref: f,
    className: Sn(
      "nxth-text-2xl nxth-font-semibold nxth-leading-none nxth-tracking-tight",
      u
    ),
    ...d
  }
));
ob.displayName = "CardTitle";
const lb = Fe.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ ne(
  "p",
  {
    ref: f,
    className: Sn(
      "nxth-text-sm nxth-text-slate-500 dark:nxth-text-slate-400",
      u
    ),
    ...d
  }
));
lb.displayName = "CardDescription";
const ub = Fe.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ ne("div", { ref: f, className: Sn("nxth-p-6 nxth-pt-0", u), ...d }));
ub.displayName = "CardContent";
const sb = Fe.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ ne(
  "div",
  {
    ref: f,
    className: Sn("nxth-flex nxth-items-center nxth-p-6 nxth-pt-0", u),
    ...d
  }
));
sb.displayName = "CardFooter";
const cb = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null
};
function Lv(u = {}) {
  let d, f, y, C = !1, x = !0, h = !1, k = 0, E = 0;
  function b(F, X) {
    f = F;
    const {
      mergeOptions: K,
      optionsAtMedia: le
    } = X, ue = K(cb, Lv.globalOptions), ae = K(ue, u);
    if (d = le(ae), f.scrollSnapList().length <= 1)
      return;
    h = d.jump, y = !1;
    const {
      eventStore: ye,
      ownerDocument: we
    } = f.internalEngine(), xe = f.rootNode(), Me = d.rootNode && d.rootNode(xe) || xe;
    f.on("pointerDown", M), d.stopOnInteraction || f.on("pointerUp", R), d.stopOnMouseEnter && (ye.add(Me, "mouseenter", () => {
      x = !1, M();
    }), d.stopOnInteraction || ye.add(Me, "mouseleave", () => {
      x = !0, R();
    })), d.stopOnFocusIn && (ye.add(Me, "focusin", M), d.stopOnInteraction || ye.add(Me, "focusout", R)), ye.add(we, "visibilitychange", () => {
      if (we.visibilityState === "hidden")
        return x = C, M();
      x && R();
    }), d.playOnInit && f.on("init", R).on("reInit", R);
  }
  function N() {
    y = !0, C = !1, f.off("init", R).off("reInit", R), f.off("pointerDown", M), d.stopOnInteraction || f.off("pointerUp", R), M(), cancelAnimationFrame(k), k = 0;
  }
  function R() {
    if (y || !x)
      return;
    C || f.emit("autoplay:play");
    const {
      ownerWindow: F
    } = f.internalEngine();
    F.clearInterval(E), E = F.setInterval(V, d.delay), C = !0;
  }
  function M() {
    if (y)
      return;
    C && f.emit("autoplay:stop");
    const {
      ownerWindow: F
    } = f.internalEngine();
    F.clearInterval(E), E = 0, C = !1;
  }
  function L(F) {
    typeof F < "u" && (h = F), x = !0, R();
  }
  function _() {
    C && M();
  }
  function $() {
    C && L();
  }
  function P() {
    return C;
  }
  function V() {
    k = requestAnimationFrame(() => {
      const {
        index: F
      } = f.internalEngine(), X = F.clone().add(1).get(), K = f.scrollSnapList().length - 1;
      d.stopOnLastSnap && X === K && M(), f.canScrollNext() ? f.scrollNext(h) : f.scrollTo(0, h);
    });
  }
  return {
    name: "autoplay",
    options: u,
    init: b,
    destroy: N,
    play: L,
    stop: _,
    reset: $,
    isPlaying: P
  };
}
Lv.globalOptions = void 0;
function fb(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
function j7(u) {
  return fb(u) || Array.isArray(u);
}
function db() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function $4(u, d) {
  const f = Object.keys(u), y = Object.keys(d);
  if (f.length !== y.length)
    return !1;
  const C = JSON.stringify(Object.keys(u.breakpoints || {})), x = JSON.stringify(Object.keys(d.breakpoints || {}));
  return C !== x ? !1 : f.every((h) => {
    const k = u[h], E = d[h];
    return typeof k == "function" ? `${k}` == `${E}` : !j7(k) || !j7(E) ? k === E : $4(k, E);
  });
}
function I7(u) {
  return u.concat().sort((d, f) => d.name > f.name ? 1 : -1).map((d) => d.options);
}
function pb(u, d) {
  if (u.length !== d.length)
    return !1;
  const f = I7(u), y = I7(d);
  return f.every((C, x) => {
    const h = y[x];
    return $4(C, h);
  });
}
function V4(u) {
  return typeof u == "number";
}
function k4(u) {
  return typeof u == "string";
}
function F4(u) {
  return typeof u == "boolean";
}
function Y7(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
function vn(u) {
  return Math.abs(u);
}
function P4(u) {
  return Math.sign(u);
}
function Tv(u, d) {
  return vn(u - d);
}
function vb(u, d) {
  if (u === 0 || d === 0 || vn(u) <= vn(d))
    return 0;
  const f = Tv(vn(u), vn(d));
  return vn(f / u);
}
function o2(u) {
  return l2(u).map(Number);
}
function Ai(u) {
  return u[v2(u)];
}
function v2(u) {
  return Math.max(0, u.length - 1);
}
function B4(u, d) {
  return d === v2(u);
}
function Z7(u, d = 0) {
  return Array.from(Array(u), (f, y) => d + y);
}
function l2(u) {
  return Object.keys(u);
}
function w9(u, d) {
  return [u, d].reduce((f, y) => (l2(y).forEach((C) => {
    const x = f[C], h = y[C], k = Y7(x) && Y7(h);
    f[C] = k ? w9(x, h) : h;
  }), f), {});
}
function b9(u, d) {
  return typeof d.MouseEvent < "u" && u instanceof d.MouseEvent;
}
function hb(u, d) {
  const f = {
    start: y,
    center: C,
    end: x
  };
  function y() {
    return 0;
  }
  function C(E) {
    return x(E) / 2;
  }
  function x(E) {
    return d - E;
  }
  function h(E, b) {
    return k4(u) ? f[u](E) : u(d, E, b);
  }
  return {
    measure: h
  };
}
function u2() {
  let u = [];
  function d(C, x, h, k = {
    passive: !0
  }) {
    let E;
    if ("addEventListener" in C)
      C.addEventListener(x, h, k), E = () => C.removeEventListener(x, h, k);
    else {
      const b = C;
      b.addListener(h), E = () => b.removeListener(h);
    }
    return u.push(E), y;
  }
  function f() {
    u = u.filter((C) => C());
  }
  const y = {
    add: d,
    clear: f
  };
  return y;
}
function mb(u, d, f, y) {
  const C = u2(), x = 1e3 / 60;
  let h = null, k = 0, E = 0;
  function b() {
    C.add(u, "visibilitychange", () => {
      u.hidden && _();
    });
  }
  function N() {
    L(), C.clear();
  }
  function R(P) {
    h || (h = P);
    const V = P - h;
    for (h = P, k += V; k >= x; )
      f(), k -= x;
    const Y = vn(k / x);
    y(Y), E && d.requestAnimationFrame(R);
  }
  function M() {
    E || (E = d.requestAnimationFrame(R));
  }
  function L() {
    d.cancelAnimationFrame(E), h = null, k = 0, E = 0;
  }
  function _() {
    h = null, k = 0;
  }
  return {
    init: b,
    destroy: N,
    start: M,
    stop: L,
    update: f,
    render: y
  };
}
function yb(u, d) {
  const f = u === "y" ? "y" : "x", y = u === "y" ? "x" : "y", C = k(), x = E();
  function h(N) {
    const {
      width: R,
      height: M
    } = N;
    return f === "x" ? R : M;
  }
  function k() {
    return f === "y" ? "top" : d === "rtl" ? "right" : "left";
  }
  function E() {
    return f === "y" ? "bottom" : d === "rtl" ? "left" : "right";
  }
  return {
    scroll: f,
    cross: y,
    startEdge: C,
    endEdge: x,
    measureSize: h
  };
}
function Ms(u = 0, d = 0) {
  const f = vn(u - d);
  function y(b) {
    return b < u;
  }
  function C(b) {
    return b > d;
  }
  function x(b) {
    return y(b) || C(b);
  }
  function h(b) {
    return x(b) ? y(b) ? u : d : b;
  }
  function k(b) {
    return f ? b - f * Math.ceil((b - d) / f) : b;
  }
  return {
    length: f,
    max: d,
    min: u,
    constrain: h,
    reachedAny: x,
    reachedMax: C,
    reachedMin: y,
    removeOffset: k
  };
}
function E9(u, d, f) {
  const {
    constrain: y
  } = Ms(0, u), C = u + 1;
  let x = h(d);
  function h(M) {
    return f ? vn((C + M) % C) : y(M);
  }
  function k() {
    return x;
  }
  function E(M) {
    return x = h(M), R;
  }
  function b(M) {
    return N().set(k() + M);
  }
  function N() {
    return E9(u, k(), f);
  }
  const R = {
    get: k,
    set: E,
    add: b,
    clone: N
  };
  return R;
}
function gb(u) {
  const d = u === "rtl" ? -1 : 1;
  function f(C) {
    return C * d;
  }
  return {
    apply: f
  };
}
function Cb(u, d, f, y, C, x, h, k, E, b, N, R, M, L, _, $, P, V, Y, F) {
  const {
    cross: X
  } = u, K = ["INPUT", "SELECT", "TEXTAREA"], le = {
    passive: !1
  }, ue = u2(), ae = u2(), ye = Ms(50, 225).constrain(_.measure(20)), we = {
    mouse: 300,
    touch: 400
  }, xe = {
    mouse: 500,
    touch: 600
  }, Me = $ ? 43 : 25;
  let Oe = !1, he = 0, Ke = 0, be = !1, ot = !1, ee = !1, me = !1;
  function de(Se) {
    if (!F)
      return;
    function Ie(ft) {
      (F4(F) || F(Se, ft)) && kt(ft);
    }
    const st = f;
    ue.add(st, "dragstart", (ft) => ft.preventDefault(), le).add(st, "touchmove", () => {
    }, le).add(st, "touchend", () => {
    }).add(st, "touchstart", Ie).add(st, "mousedown", Ie).add(st, "touchcancel", Tt).add(st, "contextmenu", Tt).add(st, "click", wt, !0);
  }
  function Pe() {
    ue.clear(), ae.clear();
  }
  function tt() {
    const Se = me ? y : f;
    ae.add(Se, "touchmove", _t, le).add(Se, "touchend", Tt).add(Se, "mousemove", _t, le).add(Se, "mouseup", Tt);
  }
  function lt(Se) {
    const Ie = Se.nodeName || "";
    return K.includes(Ie);
  }
  function Ot() {
    return ($ ? xe : we)[me ? "mouse" : "touch"];
  }
  function Bt(Se, Ie) {
    const st = M.add(P4(Se) * -1), ft = R.byDistance(Se, !$).distance;
    return $ || vn(Se) < ye ? ft : V && Ie ? ft * 0.5 : R.byIndex(st.get(), 0).distance;
  }
  function kt(Se) {
    const Ie = b9(Se, C);
    me = Ie, !(Ie && Se.button !== 0) && (lt(Se.target) || (ee = $ && Ie && !Se.buttons && Oe, Oe = Tv(x.get(), k.get()) >= 2, be = !0, h.pointerDown(Se), N.useFriction(0).useDuration(0), x.set(k), tt(), he = h.readPoint(Se), Ke = h.readPoint(Se, X), L.emit("pointerDown")));
  }
  function _t(Se) {
    const Ie = h.readPoint(Se), st = h.readPoint(Se, X), ft = Tv(Ie, he), At = Tv(st, Ke);
    if (!ot && !me && (!Se.cancelable || (ot = ft > At, !ot)))
      return Tt(Se);
    const Dt = h.pointerMove(Se);
    ft > P && (ee = !0), N.useFriction(0.3).useDuration(1), E.start(), x.add(d.apply(Dt)), Se.preventDefault();
  }
  function Tt(Se) {
    const st = R.byDistance(0, !1).index !== M.get(), ft = h.pointerUp(Se) * Ot(), At = Bt(d.apply(ft), st), Dt = vb(ft, At), tn = Me - 10 * Dt, jt = Y + Dt / 50;
    ot = !1, be = !1, ae.clear(), N.useDuration(tn).useFriction(jt), b.distance(At, !$), me = !1, L.emit("pointerUp");
  }
  function wt(Se) {
    ee && (Se.stopPropagation(), Se.preventDefault());
  }
  function hn() {
    return be;
  }
  return {
    init: de,
    pointerDown: hn,
    destroy: Pe
  };
}
function xb(u, d) {
  let y, C;
  function x(R) {
    return R.timeStamp;
  }
  function h(R, M) {
    const _ = `client${(M || u.scroll) === "x" ? "X" : "Y"}`;
    return (b9(R, d) ? R : R.touches[0])[_];
  }
  function k(R) {
    return y = R, C = R, h(R);
  }
  function E(R) {
    const M = h(R) - h(C), L = x(R) - x(y) > 170;
    return C = R, L && (y = R), M;
  }
  function b(R) {
    if (!y || !C)
      return 0;
    const M = h(C) - h(y), L = x(R) - x(y), _ = x(R) - x(C) > 170, $ = M / L;
    return L && !_ && vn($) > 0.1 ? $ : 0;
  }
  return {
    pointerDown: k,
    pointerMove: E,
    pointerUp: b,
    readPoint: h
  };
}
function Sb() {
  function u(f) {
    const {
      offsetTop: y,
      offsetLeft: C,
      offsetWidth: x,
      offsetHeight: h
    } = f;
    return {
      top: y,
      right: C + x,
      bottom: y + h,
      left: C,
      width: x,
      height: h
    };
  }
  return {
    measure: u
  };
}
function wb(u) {
  function d(y) {
    return u * (y / 100);
  }
  return {
    measure: d
  };
}
function bb(u, d, f, y, C, x, h) {
  let k, E, b = [], N = !1;
  function R($) {
    return C.measureSize(h.measure($));
  }
  function M($) {
    if (!x)
      return;
    E = R(u), b = y.map(R);
    function P(Y) {
      for (const F of Y) {
        const X = F.target === u, K = y.indexOf(F.target), le = X ? E : b[K], ue = R(X ? u : y[K]);
        if (vn(ue - le) >= 0.5) {
          f.requestAnimationFrame(() => {
            $.reInit(), d.emit("resize");
          });
          break;
        }
      }
    }
    k = new ResizeObserver((Y) => {
      N || (F4(x) || x($, Y)) && P(Y);
    }), [u].concat(y).forEach((Y) => k.observe(Y));
  }
  function L() {
    k && k.disconnect(), N = !0;
  }
  return {
    init: M,
    destroy: L
  };
}
function Eb(u, d, f, y, C) {
  let x = 0, h = 0, k = y, E = C, b = u.get(), N = 0;
  function R() {
    const K = f.get() - u.get(), le = !k;
    let ue = 0;
    return le ? (x = 0, u.set(f), ue = K) : (x += K / k, x *= E, b += x, u.add(x), ue = b - N), h = P4(ue), N = b, X;
  }
  function M() {
    const K = f.get() - d.get();
    return vn(K) < 1e-3;
  }
  function L() {
    return k;
  }
  function _() {
    return h;
  }
  function $() {
    return x;
  }
  function P() {
    return Y(y);
  }
  function V() {
    return F(C);
  }
  function Y(K) {
    return k = K, X;
  }
  function F(K) {
    return E = K, X;
  }
  const X = {
    direction: _,
    duration: L,
    velocity: $,
    seek: R,
    settled: M,
    useBaseFriction: V,
    useBaseDuration: P,
    useFriction: F,
    useDuration: Y
  };
  return X;
}
function Tb(u, d, f, y, C) {
  const x = C.measure(10), h = C.measure(50), k = Ms(0.1, 0.99);
  let E = !1;
  function b() {
    return !(E || !u.reachedAny(f.get()) || !u.reachedAny(d.get()));
  }
  function N(L) {
    if (!b())
      return;
    const _ = u.reachedMin(d.get()) ? "min" : "max", $ = vn(u[_] - d.get()), P = f.get() - d.get(), V = k.constrain($ / h);
    f.subtract(P * V), !L && vn(P) < x && (f.set(u.constrain(f.get())), y.useDuration(25).useBaseFriction());
  }
  function R(L) {
    E = !L;
  }
  return {
    constrain: N,
    toggleActive: R
  };
}
function Rb(u, d, f, y, C) {
  const x = Ms(-d + u, 0), h = N(), k = b(), E = R();
  function b() {
    const L = h[0], _ = Ai(h), $ = h.lastIndexOf(L), P = h.indexOf(_) + 1;
    return Ms($, P);
  }
  function N() {
    return f.map((L, _) => {
      const $ = !_, P = B4(f, _);
      return $ ? x.max : P ? x.min : x.constrain(L);
    }).map((L) => parseFloat(L.toFixed(3)));
  }
  function R() {
    if (d <= u + C)
      return [x.max];
    if (y === "keepSnaps")
      return h;
    const {
      min: L,
      max: _
    } = k;
    return h.slice(L, _);
  }
  return {
    snapsContained: E,
    scrollContainLimit: k
  };
}
function kb(u, d, f) {
  const y = d[0], C = f ? y - u : Ai(d);
  return {
    limit: Ms(C, y)
  };
}
function Db(u, d, f, y) {
  const x = d.min + 0.1, h = d.max + 0.1, {
    reachedMin: k,
    reachedMax: E
  } = Ms(x, h);
  function b(M) {
    return M === 1 ? E(f.get()) : M === -1 ? k(f.get()) : !1;
  }
  function N(M) {
    if (!b(M))
      return;
    const L = u * (M * -1);
    y.forEach((_) => _.add(L));
  }
  return {
    loop: N
  };
}
function Lb(u) {
  const {
    max: d,
    length: f
  } = u;
  function y(x) {
    const h = x - d;
    return f ? h / -f : 0;
  }
  return {
    get: y
  };
}
function Mb(u, d, f, y, C) {
  const {
    startEdge: x,
    endEdge: h
  } = u, {
    groupSlides: k
  } = C, E = R().map(d.measure), b = M(), N = L();
  function R() {
    return k(y).map(($) => Ai($)[h] - $[0][x]).map(vn);
  }
  function M() {
    return y.map(($) => f[x] - $[x]).map(($) => -vn($));
  }
  function L() {
    return k(b).map(($) => $[0]).map(($, P) => $ + E[P]);
  }
  return {
    snaps: b,
    snapsAligned: N
  };
}
function Ob(u, d, f, y, C, x) {
  const {
    groupSlides: h
  } = C, {
    min: k,
    max: E
  } = y, b = N();
  function N() {
    const M = h(x), L = !u || d === "keepSnaps";
    return f.length === 1 ? [x] : L ? M : M.slice(k, E).map((_, $, P) => {
      const V = !$, Y = B4(P, $);
      if (V) {
        const F = Ai(P[0]) + 1;
        return Z7(F);
      }
      if (Y) {
        const F = v2(x) - Ai(P)[0] + 1;
        return Z7(F, Ai(P)[0]);
      }
      return _;
    });
  }
  return {
    slideRegistry: b
  };
}
function Nb(u, d, f, y, C) {
  const {
    reachedAny: x,
    removeOffset: h,
    constrain: k
  } = y;
  function E(_) {
    return _.concat().sort(($, P) => vn($) - vn(P))[0];
  }
  function b(_) {
    const $ = u ? h(_) : k(_), P = d.map((Y) => Y - $).map((Y) => N(Y, 0)).map((Y, F) => ({
      diff: Y,
      index: F
    })).sort((Y, F) => vn(Y.diff) - vn(F.diff)), {
      index: V
    } = P[0];
    return {
      index: V,
      distance: $
    };
  }
  function N(_, $) {
    const P = [_, _ + f, _ - f];
    if (!u)
      return P[0];
    if (!$)
      return E(P);
    const V = P.filter((Y) => P4(Y) === $);
    return V.length ? E(V) : Ai(P) - f;
  }
  function R(_, $) {
    const P = d[_] - C.get(), V = N(P, $);
    return {
      index: _,
      distance: V
    };
  }
  function M(_, $) {
    const P = C.get() + _, {
      index: V,
      distance: Y
    } = b(P), F = !u && x(P);
    if (!$ || F)
      return {
        index: V,
        distance: _
      };
    const X = d[V] - Y, K = _ + N(X, 0);
    return {
      index: V,
      distance: K
    };
  }
  return {
    byDistance: M,
    byIndex: R,
    shortcut: N
  };
}
function _b(u, d, f, y, C, x) {
  function h(N) {
    const R = N.distance, M = N.index !== d.get();
    C.add(R), R && u.start(), M && (f.set(d.get()), d.set(N.index), x.emit("select"));
  }
  function k(N, R) {
    const M = y.byDistance(N, R);
    h(M);
  }
  function E(N, R) {
    const M = d.clone().set(N), L = y.byIndex(M.get(), R);
    h(L);
  }
  return {
    distance: k,
    index: E
  };
}
function Ab(u, d, f, y, C, x) {
  let h = 0;
  function k() {
    x.add(document, "keydown", E, !1), d.forEach(b);
  }
  function E(R) {
    R.code === "Tab" && (h = (/* @__PURE__ */ new Date()).getTime());
  }
  function b(R) {
    const M = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - h > 10)
        return;
      u.scrollLeft = 0;
      const $ = d.indexOf(R), P = f.findIndex((V) => V.includes($));
      V4(P) && (C.useDuration(0), y.index(P, 0));
    };
    x.add(R, "focus", M, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: k
  };
}
function Rv(u) {
  let d = u;
  function f() {
    return d;
  }
  function y(E) {
    d = h(E);
  }
  function C(E) {
    d += h(E);
  }
  function x(E) {
    d -= h(E);
  }
  function h(E) {
    return V4(E) ? E : E.get();
  }
  return {
    get: f,
    set: y,
    add: C,
    subtract: x
  };
}
function T9(u, d, f) {
  const y = u.scroll === "x" ? h : k, C = f.style;
  let x = !1;
  function h(M) {
    return `translate3d(${M}px,0px,0px)`;
  }
  function k(M) {
    return `translate3d(0px,${M}px,0px)`;
  }
  function E(M) {
    x || (C.transform = y(d.apply(M)));
  }
  function b(M) {
    x = !M;
  }
  function N() {
    x || (C.transform = "", f.getAttribute("style") || f.removeAttribute("style"));
  }
  return {
    clear: N,
    to: E,
    toggleActive: b
  };
}
function zb(u, d, f, y, C, x, h, k, E, b) {
  const R = o2(x), M = o2(x).reverse(), L = Y().concat(F());
  function _(ae, ye) {
    return ae.reduce((we, xe) => we - x[xe], ye);
  }
  function $(ae, ye) {
    return ae.reduce((we, xe) => _(we, ye) > 0 ? we.concat([xe]) : we, []);
  }
  function P(ae) {
    return h.map((ye, we) => ({
      start: ye - C[we] + 0.5 + ae,
      end: ye + f - 0.5 + ae
    }));
  }
  function V(ae, ye, we) {
    const xe = P(ye);
    return ae.map((Me) => {
      const Oe = we ? 0 : -y, he = we ? y : 0, Ke = we ? "end" : "start", be = xe[Me][Ke];
      return {
        index: Me,
        loopPoint: be,
        slideLocation: Rv(-1),
        translate: T9(u, d, b[Me]),
        target: () => E.get() > be ? Oe : he
      };
    });
  }
  function Y() {
    const ae = k[0], ye = $(M, ae);
    return V(ye, y, !1);
  }
  function F() {
    const ae = f - k[0] - 1, ye = $(R, ae);
    return V(ye, -y, !0);
  }
  function X() {
    return L.every(({
      index: ae
    }) => {
      const ye = R.filter((we) => we !== ae);
      return _(ye, f) <= 0.1;
    });
  }
  function K() {
    L.forEach((ae) => {
      const {
        target: ye,
        translate: we,
        slideLocation: xe
      } = ae, Me = ye();
      Me !== xe.get() && (we.to(Me), xe.set(Me));
    });
  }
  function le() {
    L.forEach((ae) => ae.translate.clear());
  }
  return {
    canLoop: X,
    clear: le,
    loop: K,
    loopPoints: L
  };
}
function Hb(u, d, f) {
  let y, C = !1;
  function x(E) {
    if (!f)
      return;
    function b(N) {
      for (const R of N)
        if (R.type === "childList") {
          E.reInit(), d.emit("slidesChanged");
          break;
        }
    }
    y = new MutationObserver((N) => {
      C || (F4(f) || f(E, N)) && b(N);
    }), y.observe(u, {
      childList: !0
    });
  }
  function h() {
    y && y.disconnect(), C = !0;
  }
  return {
    init: x,
    destroy: h
  };
}
function Ub(u, d, f, y) {
  const C = {};
  let x = null, h = null, k, E = !1;
  function b() {
    k = new IntersectionObserver((_) => {
      E || (_.forEach(($) => {
        const P = d.indexOf($.target);
        C[P] = $;
      }), x = null, h = null, f.emit("slidesInView"));
    }, {
      root: u.parentElement,
      threshold: y
    }), d.forEach((_) => k.observe(_));
  }
  function N() {
    k && k.disconnect(), E = !0;
  }
  function R(_) {
    return l2(C).reduce(($, P) => {
      const V = parseInt(P), {
        isIntersecting: Y
      } = C[V];
      return (_ && Y || !_ && !Y) && $.push(V), $;
    }, []);
  }
  function M(_ = !0) {
    if (_ && x)
      return x;
    if (!_ && h)
      return h;
    const $ = R(_);
    return _ && (x = $), _ || (h = $), $;
  }
  return {
    init: b,
    destroy: N,
    get: M
  };
}
function $b(u, d, f, y, C, x) {
  const {
    measureSize: h,
    startEdge: k,
    endEdge: E
  } = u, b = f[0] && C, N = _(), R = $(), M = f.map(h), L = P();
  function _() {
    if (!b)
      return 0;
    const Y = f[0];
    return vn(d[k] - Y[k]);
  }
  function $() {
    if (!b)
      return 0;
    const Y = x.getComputedStyle(Ai(y));
    return parseFloat(Y.getPropertyValue(`margin-${E}`));
  }
  function P() {
    return f.map((Y, F, X) => {
      const K = !F, le = B4(X, F);
      return K ? M[F] + N : le ? M[F] + R : X[F + 1][k] - Y[k];
    }).map(vn);
  }
  return {
    slideSizes: M,
    slideSizesWithGaps: L,
    startGap: N,
    endGap: R
  };
}
function Vb(u, d, f, y, C, x, h, k, E, b) {
  const {
    startEdge: N,
    endEdge: R
  } = u, M = V4(y);
  function L(V, Y) {
    return o2(V).filter((F) => F % Y === 0).map((F) => V.slice(F, F + Y));
  }
  function _(V) {
    return V.length ? o2(V).reduce((Y, F) => {
      const X = Ai(Y) || 0, K = X === 0, le = F === v2(V), ue = x[N] - h[X][N], ae = x[N] - h[F][R], ye = !C && K ? d.apply(k) : 0, we = !C && le ? d.apply(E) : 0;
      return vn(ae - we - (ue + ye)) > f + b && Y.push(F), le && Y.push(V.length), Y;
    }, []).map((Y, F, X) => {
      const K = Math.max(X[F - 1] || 0);
      return V.slice(K, Y);
    }) : [];
  }
  function $(V) {
    return M ? L(V, y) : _(V);
  }
  return {
    groupSlides: $
  };
}
function Fb(u, d, f, y, C, x, h) {
  const {
    align: k,
    axis: E,
    direction: b,
    startIndex: N,
    loop: R,
    duration: M,
    dragFree: L,
    dragThreshold: _,
    inViewThreshold: $,
    slidesToScroll: P,
    skipSnaps: V,
    containScroll: Y,
    watchResize: F,
    watchSlides: X,
    watchDrag: K
  } = x, le = 2, ue = Sb(), ae = ue.measure(d), ye = f.map(ue.measure), we = gb(b), xe = yb(E, b), Me = xe.measureSize(ae), Oe = wb(Me), he = hb(k, Me), Ke = !R && !!Y, be = R || !!Y, {
    slideSizes: ot,
    slideSizesWithGaps: ee,
    startGap: me,
    endGap: de
  } = $b(xe, ae, ye, f, be, C), Pe = Vb(xe, we, Me, P, R, ae, ye, me, de, le), {
    snaps: tt,
    snapsAligned: lt
  } = Mb(xe, he, ae, ye, Pe), Ot = -Ai(tt) + Ai(ee), {
    snapsContained: Bt,
    scrollContainLimit: kt
  } = Rb(Me, Ot, lt, Y, le), _t = Ke ? Bt : lt, {
    limit: Tt
  } = kb(Ot, _t, R), wt = E9(v2(_t), N, R), hn = wt.clone(), ut = o2(f), Se = ({
    dragHandler: Ye,
    scrollBody: gt,
    scrollBounds: se,
    options: {
      loop: ke
    }
  }) => {
    ke || se.constrain(Ye.pointerDown()), gt.seek();
  }, Ie = ({
    scrollBody: Ye,
    translate: gt,
    location: se,
    offsetLocation: ke,
    scrollLooper: Ge,
    slideLooper: Ct,
    dragHandler: Yt,
    animation: An,
    eventHandler: un,
    options: {
      loop: Mr
    }
  }, qt) => {
    const Yr = Ye.velocity(), nn = Ye.settled();
    nn && !Yt.pointerDown() && (An.stop(), un.emit("settle")), nn || un.emit("scroll"), ke.set(se.get() - Yr + Yr * qt), Mr && (Ge.loop(Ye.direction()), Ct.loop()), gt.to(ke.get());
  }, st = mb(y, C, () => Se(In), (Ye) => Ie(In, Ye)), ft = 0.68, At = _t[wt.get()], Dt = Rv(At), tn = Rv(At), jt = Rv(At), jn = Eb(Dt, tn, jt, M, ft), Kt = Nb(R, _t, Ot, Tt, jt), kr = _b(st, wt, hn, Kt, jt, h), rr = Lb(Tt), Dr = u2(), Lr = Ub(d, f, h, $), {
    slideRegistry: vr
  } = Ob(Ke, Y, _t, kt, Pe, ut), It = Ab(u, f, vr, kr, jn, Dr), In = {
    ownerDocument: y,
    ownerWindow: C,
    eventHandler: h,
    containerRect: ae,
    slideRects: ye,
    animation: st,
    axis: xe,
    direction: we,
    dragHandler: Cb(xe, we, u, y, C, jt, xb(xe, C), Dt, st, kr, jn, Kt, wt, h, Oe, L, _, V, ft, K),
    eventStore: Dr,
    percentOfView: Oe,
    index: wt,
    indexPrevious: hn,
    limit: Tt,
    location: Dt,
    offsetLocation: tn,
    options: x,
    resizeHandler: bb(d, h, C, f, xe, F, ue),
    scrollBody: jn,
    scrollBounds: Tb(Tt, Dt, jt, jn, Oe),
    scrollLooper: Db(Ot, Tt, tn, [Dt, tn, jt]),
    scrollProgress: rr,
    scrollSnapList: _t.map(rr.get),
    scrollSnaps: _t,
    scrollTarget: Kt,
    scrollTo: kr,
    slideLooper: zb(xe, we, Me, Ot, ot, ee, tt, _t, tn, f),
    slideFocus: It,
    slidesHandler: Hb(d, h, X),
    slidesInView: Lr,
    slideIndexes: ut,
    slideRegistry: vr,
    slidesToScroll: Pe,
    target: jt,
    translate: T9(xe, we, d)
  };
  return In;
}
function Pb() {
  const u = {};
  let d;
  function f(E) {
    d = E;
  }
  function y(E) {
    return u[E] || [];
  }
  function C(E) {
    return y(E).forEach((b) => b(d, E)), k;
  }
  function x(E, b) {
    return u[E] = y(E).concat([b]), k;
  }
  function h(E, b) {
    return u[E] = y(E).filter((N) => N !== b), k;
  }
  const k = {
    init: f,
    emit: C,
    off: h,
    on: x
  };
  return k;
}
const Bb = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function jb(u) {
  function d(x, h) {
    return w9(x, h || {});
  }
  function f(x) {
    const h = x.breakpoints || {}, k = l2(h).filter((E) => u.matchMedia(E).matches).map((E) => h[E]).reduce((E, b) => d(E, b), {});
    return d(x, k);
  }
  function y(x) {
    return x.map((h) => l2(h.breakpoints || {})).reduce((h, k) => h.concat(k), []).map(u.matchMedia);
  }
  return {
    mergeOptions: d,
    optionsAtMedia: f,
    optionsMediaQueries: y
  };
}
function Ib(u) {
  let d = [];
  function f(x, h) {
    return d = h.filter(({
      options: k
    }) => u.optionsAtMedia(k).active !== !1), d.forEach((k) => k.init(x, u)), h.reduce((k, E) => Object.assign(k, {
      [E.name]: E
    }), {});
  }
  function y() {
    d = d.filter((x) => x.destroy());
  }
  return {
    init: f,
    destroy: y
  };
}
function Mv(u, d, f) {
  const y = u.ownerDocument, C = y.defaultView, x = jb(C), h = Ib(x), k = u2(), E = Pb(), {
    mergeOptions: b,
    optionsAtMedia: N,
    optionsMediaQueries: R
  } = x, {
    on: M,
    off: L,
    emit: _
  } = E, $ = xe;
  let P = !1, V, Y = b(Bb, Mv.globalOptions), F = b(Y), X = [], K, le, ue;
  function ae() {
    const {
      container: ut,
      slides: Se
    } = F;
    le = (k4(ut) ? u.querySelector(ut) : ut) || u.children[0];
    const st = k4(Se) ? le.querySelectorAll(Se) : Se;
    ue = [].slice.call(st || le.children);
  }
  function ye(ut) {
    const Se = Fb(u, le, ue, y, C, ut, E);
    if (ut.loop && !Se.slideLooper.canLoop()) {
      const Ie = Object.assign({}, ut, {
        loop: !1
      });
      return ye(Ie);
    }
    return Se;
  }
  function we(ut, Se) {
    P || (Y = b(Y, ut), F = N(Y), X = Se || X, ae(), V = ye(F), R([Y, ...X.map(({
      options: Ie
    }) => Ie)]).forEach((Ie) => k.add(Ie, "change", xe)), F.active && (V.translate.to(V.location.get()), V.animation.init(), V.slidesInView.init(), V.slideFocus.init(), V.eventHandler.init(hn), V.resizeHandler.init(hn), V.slidesHandler.init(hn), V.options.loop && V.slideLooper.loop(), le.offsetParent && ue.length && V.dragHandler.init(hn), K = h.init(hn, X)));
  }
  function xe(ut, Se) {
    const Ie = Pe();
    Me(), we(b({
      startIndex: Ie
    }, ut), Se), E.emit("reInit");
  }
  function Me() {
    V.dragHandler.destroy(), V.eventStore.clear(), V.translate.clear(), V.slideLooper.clear(), V.resizeHandler.destroy(), V.slidesHandler.destroy(), V.slidesInView.destroy(), V.animation.destroy(), h.destroy(), k.clear();
  }
  function Oe() {
    P || (P = !0, k.clear(), Me(), E.emit("destroy"));
  }
  function he(ut, Se, Ie) {
    !F.active || P || (V.scrollBody.useBaseFriction().useDuration(Se === !0 ? 0 : F.duration), V.scrollTo.index(ut, Ie || 0));
  }
  function Ke(ut) {
    const Se = V.index.add(1).get();
    he(Se, ut, -1);
  }
  function be(ut) {
    const Se = V.index.add(-1).get();
    he(Se, ut, 1);
  }
  function ot() {
    return V.index.add(1).get() !== Pe();
  }
  function ee() {
    return V.index.add(-1).get() !== Pe();
  }
  function me() {
    return V.scrollSnapList;
  }
  function de() {
    return V.scrollProgress.get(V.location.get());
  }
  function Pe() {
    return V.index.get();
  }
  function tt() {
    return V.indexPrevious.get();
  }
  function lt() {
    return V.slidesInView.get();
  }
  function Ot() {
    return V.slidesInView.get(!1);
  }
  function Bt() {
    return K;
  }
  function kt() {
    return V;
  }
  function _t() {
    return u;
  }
  function Tt() {
    return le;
  }
  function wt() {
    return ue;
  }
  const hn = {
    canScrollNext: ot,
    canScrollPrev: ee,
    containerNode: Tt,
    internalEngine: kt,
    destroy: Oe,
    off: L,
    on: M,
    emit: _,
    plugins: Bt,
    previousScrollSnap: tt,
    reInit: $,
    rootNode: _t,
    scrollNext: Ke,
    scrollPrev: be,
    scrollProgress: de,
    scrollSnapList: me,
    scrollTo: he,
    selectedScrollSnap: Pe,
    slideNodes: wt,
    slidesInView: lt,
    slidesNotInView: Ot
  };
  return we(d, f), setTimeout(() => E.emit("init"), 0), hn;
}
Mv.globalOptions = void 0;
function j4(u = {}, d = []) {
  const f = xn(u), y = xn(d), [C, x] = pr(), [h, k] = pr(), E = dr(() => {
    C && C.reInit(f.current, y.current);
  }, [C]);
  return Pt(() => {
    if (db() && h) {
      Mv.globalOptions = j4.globalOptions;
      const b = Mv(h, f.current, y.current);
      return x(b), () => b.destroy();
    } else
      x(void 0);
  }, [h, x]), Pt(() => {
    $4(f.current, u) || (f.current = u, E());
  }, [u, E]), Pt(() => {
    pb(y.current, d) || (y.current = d, E());
  }, [d, E]), [k, C];
}
j4.globalOptions = void 0;
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zb = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), R9 = (u, d) => {
  const f = Rr(
    ({ color: y = "currentColor", size: C = 24, strokeWidth: x = 2, absoluteStrokeWidth: h, className: k = "", children: E, ...b }, N) => St(
      "svg",
      {
        ref: N,
        ...Yb,
        width: C,
        height: C,
        stroke: y,
        strokeWidth: h ? Number(x) * 24 / Number(C) : x,
        className: ["lucide", `lucide-${Zb(u)}`, k].join(" "),
        ...b
      },
      [
        ...d.map(([R, M]) => St(R, M)),
        ...Array.isArray(E) ? E : [E]
      ]
    )
  );
  return f.displayName = `${u}`, f;
};
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qb = R9("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = R9("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), k9 = Fe.createContext(null);
function h2() {
  const u = Fe.useContext(k9);
  if (!u)
    throw new Error("useCarousel must be used within a <Carousel />");
  return u;
}
const Gb = Fe.forwardRef(
  ({
    orientation: u = "horizontal",
    opts: d,
    setApi: f,
    autoPlay: y,
    plugins: C,
    className: x,
    children: h,
    ...k
  }, E) => {
    const b = y !== void 0 ? C !== void 0 ? C.concat([Lv(y)]) : [Lv(y)] : C, [N, R] = j4(
      {
        ...d,
        axis: u === "horizontal" ? "x" : "y"
      },
      b
    ), [M, L] = Fe.useState(!1), [_, $] = Fe.useState(!1), P = Fe.useCallback((X) => {
      X && (L(X.canScrollPrev()), $(X.canScrollNext()));
    }, []), V = Fe.useCallback(() => {
      R == null || R.scrollPrev();
    }, [R]), Y = Fe.useCallback(() => {
      R == null || R.scrollNext();
    }, [R]), F = Fe.useCallback(
      (X) => {
        X.key === "ArrowLeft" ? (X.preventDefault(), V()) : X.key === "ArrowRight" && (X.preventDefault(), Y());
      },
      [V, Y]
    );
    return Fe.useEffect(() => {
      !R || !f || f(R);
    }, [R, f]), Fe.useEffect(() => {
      if (R)
        return P(R), R.on("reInit", P), R.on("select", P), () => {
          R == null || R.off("select", P);
        };
    }, [R, P]), /* @__PURE__ */ ne(
      k9.Provider,
      {
        value: {
          carouselRef: N,
          api: R,
          opts: d,
          autoPlay: y,
          orientation: u || ((d == null ? void 0 : d.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: V,
          scrollNext: Y,
          canScrollPrev: M,
          canScrollNext: _
        },
        children: /* @__PURE__ */ ne(
          "div",
          {
            ref: E,
            onKeyDownCapture: F,
            className: Sn("nxth-relative", x),
            role: "region",
            "aria-roledescription": "carousel",
            ...k,
            children: h
          }
        )
      }
    );
  }
);
Gb.displayName = "Carousel";
const Xb = Fe.forwardRef(({ className: u, ...d }, f) => {
  const { carouselRef: y, orientation: C } = h2();
  return /* @__PURE__ */ ne("div", { ref: y, className: "nxth-overflow-hidden", children: /* @__PURE__ */ ne(
    "div",
    {
      ref: f,
      className: Sn(
        "nxth-flex",
        C === "horizontal" ? "nxth--ml-4" : "nxth--mt-4 nxth-flex-col",
        u
      ),
      ...d
    }
  ) });
});
Xb.displayName = "CarouselContent";
const Kb = Fe.forwardRef(({ className: u, ...d }, f) => {
  const { orientation: y } = h2();
  return /* @__PURE__ */ ne(
    "div",
    {
      ref: f,
      role: "group",
      "aria-roledescription": "slide",
      className: Sn(
        "nxth-min-w-0 nxth-shrink-0 nxth-grow-0 nxth-basis-full",
        y === "horizontal" ? "nxth-pl-4" : "nxth-pt-4",
        u
      ),
      ...d
    }
  );
});
Kb.displayName = "CarouselItem";
const qb = Fe.forwardRef(({ className: u, variant: d = "outline", size: f = "icon", ...y }, C) => {
  const { orientation: x, scrollPrev: h, canScrollPrev: k } = h2();
  return /* @__PURE__ */ Cn(
    U4,
    {
      ref: C,
      variant: d,
      size: f,
      className: Sn(
        "nxth-absolute nxth- nxth-h-8 nxth-w-8 nxth-rounded-full",
        x === "horizontal" ? "nxth--left-12 nxth-top-1/2 nxth--translate-y-1/2" : "nxth--top-12 nxth-left-1/2 nxth--translate-x-1/2 nxth-rotate-90",
        u
      ),
      disabled: !k,
      onClick: h,
      ...y,
      children: [
        /* @__PURE__ */ ne(Qb, { className: "nxth-h-4 nxth-w-4" }),
        /* @__PURE__ */ ne("span", { className: "nxth-sr-only", children: "Previous slide" })
      ]
    }
  );
});
qb.displayName = "CarouselPrevious";
const Jb = Fe.forwardRef(({ className: u, variant: d = "outline", size: f = "icon", ...y }, C) => {
  const { orientation: x, scrollNext: h, canScrollNext: k } = h2();
  return /* @__PURE__ */ Cn(
    U4,
    {
      ref: C,
      variant: d,
      size: f,
      className: Sn(
        "nxth-absolute nxth-h-8 nxth-w-8 nxth-rounded-full",
        x === "horizontal" ? "nxth--right-12 nxth-top-1/2 nxth--translate-y-1/2" : "nxth--bottom-12 nxth-left-1/2 nxth--translate-x-1/2 nxth-rotate-90",
        u
      ),
      disabled: !k,
      onClick: h,
      ...y,
      children: [
        /* @__PURE__ */ ne(Wb, { className: "nxth-h-4 nxth-w-4" }),
        /* @__PURE__ */ ne("span", { className: "nxth-sr-only", children: "Next slide" })
      ]
    }
  );
});
Jb.displayName = "CarouselNext";
const eE = Fe.forwardRef(({ ...u }, d) => {
  const { api: f } = h2(), [y, C] = Fe.useState(0), [x, h] = Fe.useState(0);
  return Fe.useEffect(() => {
    f && (h(f.scrollSnapList().length), C(f.selectedScrollSnap() + 1), f.on("select", () => {
      C(f.selectedScrollSnap() + 1);
    }));
  }, [f]), /* @__PURE__ */ ne("div", { className: "nxth-flex nxth-gap-1 nxth-justify-center", children: Array.from({ length: x }).map((k, E) => /* @__PURE__ */ ne(
    "div",
    {
      ref: d,
      "data-active": E === y - 1,
      className: "nxth-w-2 nxth-h-2 nxth-bg-[#383838] nxth-rounded-full data-[active=true]:nxth-bg-primary data-[active=true]:nxth-w-6 nxth-transition-all ",
      ...u
    },
    E
  )) });
});
eE.displayName = "CarouselDots";
function I4(u, d = []) {
  let f = [];
  function y(x, h) {
    const k = /* @__PURE__ */ i2(h), E = f.length;
    f = [
      ...f,
      h
    ];
    function b(R) {
      const { scope: M, children: L, ..._ } = R, $ = (M == null ? void 0 : M[u][E]) || k, P = Ls(
        () => _,
        Object.values(_)
      );
      return /* @__PURE__ */ St($.Provider, {
        value: P
      }, L);
    }
    function N(R, M) {
      const L = (M == null ? void 0 : M[u][E]) || k, _ = d2(L);
      if (_)
        return _;
      if (h !== void 0)
        return h;
      throw new Error(`\`${R}\` must be used within \`${x}\``);
    }
    return b.displayName = x + "Provider", [
      b,
      N
    ];
  }
  const C = () => {
    const x = f.map((h) => /* @__PURE__ */ i2(h));
    return function(k) {
      const E = (k == null ? void 0 : k[u]) || x;
      return Ls(
        () => ({
          [`__scope${u}`]: {
            ...k,
            [u]: E
          }
        }),
        [
          k,
          E
        ]
      );
    };
  };
  return C.scopeName = u, [
    y,
    tE(C, ...d)
  ];
}
function tE(...u) {
  const d = u[0];
  if (u.length === 1)
    return d;
  const f = () => {
    const y = u.map(
      (C) => ({
        useScope: C(),
        scopeName: C.scopeName
      })
    );
    return function(x) {
      const h = y.reduce((k, { useScope: E, scopeName: b }) => {
        const R = E(x)[`__scope${b}`];
        return {
          ...k,
          ...R
        };
      }, {});
      return Ls(
        () => ({
          [`__scope${d.scopeName}`]: h
        }),
        [
          h
        ]
      );
    };
  };
  return f.scopeName = d.scopeName, f;
}
function _i(u, d, { checkForDefaultPrevented: f = !0 } = {}) {
  return function(C) {
    if (u == null || u(C), f === !1 || !C.defaultPrevented)
      return d == null ? void 0 : d(C);
  };
}
function zf(u) {
  const d = xn(u);
  return Pt(() => {
    d.current = u;
  }), Ls(
    () => (...f) => {
      var y;
      return (y = d.current) === null || y === void 0 ? void 0 : y.call(d, ...f);
    },
    []
  );
}
function D9({ prop: u, defaultProp: d, onChange: f = () => {
} }) {
  const [y, C] = nE({
    defaultProp: d,
    onChange: f
  }), x = u !== void 0, h = x ? u : y, k = zf(f), E = dr((b) => {
    if (x) {
      const R = typeof b == "function" ? b(u) : b;
      R !== u && k(R);
    } else
      C(b);
  }, [
    x,
    u,
    C,
    k
  ]);
  return [
    h,
    E
  ];
}
function nE({ defaultProp: u, onChange: d }) {
  const f = pr(u), [y] = f, C = xn(y), x = zf(d);
  return Pt(() => {
    C.current !== y && (x(y), C.current = y);
  }, [
    y,
    C,
    x
  ]), f;
}
function rE(u) {
  const d = xn({
    value: u,
    previous: u
  });
  return Ls(() => (d.current.value !== u && (d.current.previous = d.current.value, d.current.value = u), d.current.previous), [
    u
  ]);
}
const _f = globalThis != null && globalThis.document ? g9 : () => {
};
function L9(u) {
  const [d, f] = pr(void 0);
  return _f(() => {
    if (u) {
      f({
        width: u.offsetWidth,
        height: u.offsetHeight
      });
      const y = new ResizeObserver((C) => {
        if (!Array.isArray(C) || !C.length)
          return;
        const x = C[0];
        let h, k;
        if ("borderBoxSize" in x) {
          const E = x.borderBoxSize, b = Array.isArray(E) ? E[0] : E;
          h = b.inlineSize, k = b.blockSize;
        } else
          h = u.offsetWidth, k = u.offsetHeight;
        f({
          width: h,
          height: k
        });
      });
      return y.observe(u, {
        box: "border-box"
      }), () => y.unobserve(u);
    } else
      f(void 0);
  }, [
    u
  ]), d;
}
function aE(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var D4 = { exports: {} }, Ta = {}, wv = { exports: {} }, E4 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q7;
function iE() {
  return Q7 || (Q7 = 1, function(u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = !1, f = !1, y = 5;
      function C(se, ke) {
        var Ge = se.length;
        se.push(ke), k(se, ke, Ge);
      }
      function x(se) {
        return se.length === 0 ? null : se[0];
      }
      function h(se) {
        if (se.length === 0)
          return null;
        var ke = se[0], Ge = se.pop();
        return Ge !== ke && (se[0] = Ge, E(se, Ge, 0)), ke;
      }
      function k(se, ke, Ge) {
        for (var Ct = Ge; Ct > 0; ) {
          var Yt = Ct - 1 >>> 1, An = se[Yt];
          if (b(An, ke) > 0)
            se[Yt] = ke, se[Ct] = An, Ct = Yt;
          else
            return;
        }
      }
      function E(se, ke, Ge) {
        for (var Ct = Ge, Yt = se.length, An = Yt >>> 1; Ct < An; ) {
          var un = (Ct + 1) * 2 - 1, Mr = se[un], qt = un + 1, Yr = se[qt];
          if (b(Mr, ke) < 0)
            qt < Yt && b(Yr, Mr) < 0 ? (se[Ct] = Yr, se[qt] = ke, Ct = qt) : (se[Ct] = Mr, se[un] = ke, Ct = un);
          else if (qt < Yt && b(Yr, ke) < 0)
            se[Ct] = Yr, se[qt] = ke, Ct = qt;
          else
            return;
        }
      }
      function b(se, ke) {
        var Ge = se.sortIndex - ke.sortIndex;
        return Ge !== 0 ? Ge : se.id - ke.id;
      }
      var N = 1, R = 2, M = 3, L = 4, _ = 5;
      function $(se, ke) {
      }
      var P = typeof performance == "object" && typeof performance.now == "function";
      if (P) {
        var V = performance;
        u.unstable_now = function() {
          return V.now();
        };
      } else {
        var Y = Date, F = Y.now();
        u.unstable_now = function() {
          return Y.now() - F;
        };
      }
      var X = 1073741823, K = -1, le = 250, ue = 5e3, ae = 1e4, ye = X, we = [], xe = [], Me = 1, Oe = null, he = M, Ke = !1, be = !1, ot = !1, ee = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Pe(se) {
        for (var ke = x(xe); ke !== null; ) {
          if (ke.callback === null)
            h(xe);
          else if (ke.startTime <= se)
            h(xe), ke.sortIndex = ke.expirationTime, C(we, ke);
          else
            return;
          ke = x(xe);
        }
      }
      function tt(se) {
        if (ot = !1, Pe(se), !be)
          if (x(we) !== null)
            be = !0, vr(lt);
          else {
            var ke = x(xe);
            ke !== null && It(tt, ke.startTime - se);
          }
      }
      function lt(se, ke) {
        be = !1, ot && (ot = !1, In()), Ke = !0;
        var Ge = he;
        try {
          var Ct;
          if (!f)
            return Ot(se, ke);
        } finally {
          Oe = null, he = Ge, Ke = !1;
        }
      }
      function Ot(se, ke) {
        var Ge = ke;
        for (Pe(Ge), Oe = x(we); Oe !== null && !d && !(Oe.expirationTime > Ge && (!se || jt())); ) {
          var Ct = Oe.callback;
          if (typeof Ct == "function") {
            Oe.callback = null, he = Oe.priorityLevel;
            var Yt = Oe.expirationTime <= Ge, An = Ct(Yt);
            Ge = u.unstable_now(), typeof An == "function" ? Oe.callback = An : Oe === x(we) && h(we), Pe(Ge);
          } else
            h(we);
          Oe = x(we);
        }
        if (Oe !== null)
          return !0;
        var un = x(xe);
        return un !== null && It(tt, un.startTime - Ge), !1;
      }
      function Bt(se, ke) {
        switch (se) {
          case N:
          case R:
          case M:
          case L:
          case _:
            break;
          default:
            se = M;
        }
        var Ge = he;
        he = se;
        try {
          return ke();
        } finally {
          he = Ge;
        }
      }
      function kt(se) {
        var ke;
        switch (he) {
          case N:
          case R:
          case M:
            ke = M;
            break;
          default:
            ke = he;
            break;
        }
        var Ge = he;
        he = ke;
        try {
          return se();
        } finally {
          he = Ge;
        }
      }
      function _t(se) {
        var ke = he;
        return function() {
          var Ge = he;
          he = ke;
          try {
            return se.apply(this, arguments);
          } finally {
            he = Ge;
          }
        };
      }
      function Tt(se, ke, Ge) {
        var Ct = u.unstable_now(), Yt;
        if (typeof Ge == "object" && Ge !== null) {
          var An = Ge.delay;
          typeof An == "number" && An > 0 ? Yt = Ct + An : Yt = Ct;
        } else
          Yt = Ct;
        var un;
        switch (se) {
          case N:
            un = K;
            break;
          case R:
            un = le;
            break;
          case _:
            un = ye;
            break;
          case L:
            un = ae;
            break;
          case M:
          default:
            un = ue;
            break;
        }
        var Mr = Yt + un, qt = {
          id: Me++,
          callback: ke,
          priorityLevel: se,
          startTime: Yt,
          expirationTime: Mr,
          sortIndex: -1
        };
        return Yt > Ct ? (qt.sortIndex = Yt, C(xe, qt), x(we) === null && qt === x(xe) && (ot ? In() : ot = !0, It(tt, Yt - Ct))) : (qt.sortIndex = Mr, C(we, qt), !be && !Ke && (be = !0, vr(lt))), qt;
      }
      function wt() {
      }
      function hn() {
        !be && !Ke && (be = !0, vr(lt));
      }
      function ut() {
        return x(we);
      }
      function Se(se) {
        se.callback = null;
      }
      function Ie() {
        return he;
      }
      var st = !1, ft = null, At = -1, Dt = y, tn = -1;
      function jt() {
        var se = u.unstable_now() - tn;
        return !(se < Dt);
      }
      function jn() {
      }
      function Kt(se) {
        if (se < 0 || se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        se > 0 ? Dt = Math.floor(1e3 / se) : Dt = y;
      }
      var kr = function() {
        if (ft !== null) {
          var se = u.unstable_now();
          tn = se;
          var ke = !0, Ge = !0;
          try {
            Ge = ft(ke, se);
          } finally {
            Ge ? rr() : (st = !1, ft = null);
          }
        } else
          st = !1;
      }, rr;
      if (typeof de == "function")
        rr = function() {
          de(kr);
        };
      else if (typeof MessageChannel < "u") {
        var Dr = new MessageChannel(), Lr = Dr.port2;
        Dr.port1.onmessage = kr, rr = function() {
          Lr.postMessage(null);
        };
      } else
        rr = function() {
          ee(kr, 0);
        };
      function vr(se) {
        ft = se, st || (st = !0, rr());
      }
      function It(se, ke) {
        At = ee(function() {
          se(u.unstable_now());
        }, ke);
      }
      function In() {
        me(At), At = -1;
      }
      var Ye = jn, gt = null;
      u.unstable_IdlePriority = _, u.unstable_ImmediatePriority = N, u.unstable_LowPriority = L, u.unstable_NormalPriority = M, u.unstable_Profiling = gt, u.unstable_UserBlockingPriority = R, u.unstable_cancelCallback = Se, u.unstable_continueExecution = hn, u.unstable_forceFrameRate = Kt, u.unstable_getCurrentPriorityLevel = Ie, u.unstable_getFirstCallbackNode = ut, u.unstable_next = kt, u.unstable_pauseExecution = wt, u.unstable_requestPaint = Ye, u.unstable_runWithPriority = Bt, u.unstable_scheduleCallback = Tt, u.unstable_shouldYield = jt, u.unstable_wrapCallback = _t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(E4)), E4;
}
var T4 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W7;
function oE() {
  return W7 || (W7 = 1, function(u) {
    function d(ee, me) {
      var de = ee.length;
      ee.push(me);
      e:
        for (; 0 < de; ) {
          var Pe = de - 1 >>> 1, tt = ee[Pe];
          if (0 < C(tt, me))
            ee[Pe] = me, ee[de] = tt, de = Pe;
          else
            break e;
        }
    }
    function f(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function y(ee) {
      if (ee.length === 0)
        return null;
      var me = ee[0], de = ee.pop();
      if (de !== me) {
        ee[0] = de;
        e:
          for (var Pe = 0, tt = ee.length, lt = tt >>> 1; Pe < lt; ) {
            var Ot = 2 * (Pe + 1) - 1, Bt = ee[Ot], kt = Ot + 1, _t = ee[kt];
            if (0 > C(Bt, de))
              kt < tt && 0 > C(_t, Bt) ? (ee[Pe] = _t, ee[kt] = de, Pe = kt) : (ee[Pe] = Bt, ee[Ot] = de, Pe = Ot);
            else if (kt < tt && 0 > C(_t, de))
              ee[Pe] = _t, ee[kt] = de, Pe = kt;
            else
              break e;
          }
      }
      return me;
    }
    function C(ee, me) {
      var de = ee.sortIndex - me.sortIndex;
      return de !== 0 ? de : ee.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      u.unstable_now = function() {
        return x.now();
      };
    } else {
      var h = Date, k = h.now();
      u.unstable_now = function() {
        return h.now() - k;
      };
    }
    var E = [], b = [], N = 1, R = null, M = 3, L = !1, _ = !1, $ = !1, P = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, Y = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function F(ee) {
      for (var me = f(b); me !== null; ) {
        if (me.callback === null)
          y(b);
        else if (me.startTime <= ee)
          y(b), me.sortIndex = me.expirationTime, d(E, me);
        else
          break;
        me = f(b);
      }
    }
    function X(ee) {
      if ($ = !1, F(ee), !_)
        if (f(E) !== null)
          _ = !0, be(K);
        else {
          var me = f(b);
          me !== null && ot(X, me.startTime - ee);
        }
    }
    function K(ee, me) {
      _ = !1, $ && ($ = !1, V(ae), ae = -1), L = !0;
      var de = M;
      try {
        for (F(me), R = f(E); R !== null && (!(R.expirationTime > me) || ee && !xe()); ) {
          var Pe = R.callback;
          if (typeof Pe == "function") {
            R.callback = null, M = R.priorityLevel;
            var tt = Pe(R.expirationTime <= me);
            me = u.unstable_now(), typeof tt == "function" ? R.callback = tt : R === f(E) && y(E), F(me);
          } else
            y(E);
          R = f(E);
        }
        if (R !== null)
          var lt = !0;
        else {
          var Ot = f(b);
          Ot !== null && ot(X, Ot.startTime - me), lt = !1;
        }
        return lt;
      } finally {
        R = null, M = de, L = !1;
      }
    }
    var le = !1, ue = null, ae = -1, ye = 5, we = -1;
    function xe() {
      return !(u.unstable_now() - we < ye);
    }
    function Me() {
      if (ue !== null) {
        var ee = u.unstable_now();
        we = ee;
        var me = !0;
        try {
          me = ue(!0, ee);
        } finally {
          me ? Oe() : (le = !1, ue = null);
        }
      } else
        le = !1;
    }
    var Oe;
    if (typeof Y == "function")
      Oe = function() {
        Y(Me);
      };
    else if (typeof MessageChannel < "u") {
      var he = new MessageChannel(), Ke = he.port2;
      he.port1.onmessage = Me, Oe = function() {
        Ke.postMessage(null);
      };
    } else
      Oe = function() {
        P(Me, 0);
      };
    function be(ee) {
      ue = ee, le || (le = !0, Oe());
    }
    function ot(ee, me) {
      ae = P(function() {
        ee(u.unstable_now());
      }, me);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, u.unstable_continueExecution = function() {
      _ || L || (_ = !0, be(K));
    }, u.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ye = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, u.unstable_getFirstCallbackNode = function() {
      return f(E);
    }, u.unstable_next = function(ee) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = M;
      }
      var de = M;
      M = me;
      try {
        return ee();
      } finally {
        M = de;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(ee, me) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var de = M;
      M = ee;
      try {
        return me();
      } finally {
        M = de;
      }
    }, u.unstable_scheduleCallback = function(ee, me, de) {
      var Pe = u.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? Pe + de : Pe) : de = Pe, ee) {
        case 1:
          var tt = -1;
          break;
        case 2:
          tt = 250;
          break;
        case 5:
          tt = 1073741823;
          break;
        case 4:
          tt = 1e4;
          break;
        default:
          tt = 5e3;
      }
      return tt = de + tt, ee = { id: N++, callback: me, priorityLevel: ee, startTime: de, expirationTime: tt, sortIndex: -1 }, de > Pe ? (ee.sortIndex = de, d(b, ee), f(E) === null && ee === f(b) && ($ ? (V(ae), ae = -1) : $ = !0, ot(X, de - Pe))) : (ee.sortIndex = tt, d(E, ee), _ || L || (_ = !0, be(K))), ee;
    }, u.unstable_shouldYield = xe, u.unstable_wrapCallback = function(ee) {
      var me = M;
      return function() {
        var de = M;
        M = me;
        try {
          return ee.apply(this, arguments);
        } finally {
          M = de;
        }
      };
    };
  }(T4)), T4;
}
var G7;
function M9() {
  return G7 || (G7 = 1, process.env.NODE_ENV === "production" ? wv.exports = oE() : wv.exports = iE()), wv.exports;
}
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X7;
function lE() {
  return X7 || (X7 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var u = pe, d = M9(), f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function C(e) {
      y = e;
    }
    function x(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        k("warn", e, a);
      }
    }
    function h(e) {
      if (!y) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        k("error", e, a);
      }
    }
    function k(e, t, a) {
      {
        var i = f.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var c = a.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var E = 0, b = 1, N = 2, R = 3, M = 4, L = 5, _ = 6, $ = 7, P = 8, V = 9, Y = 10, F = 11, X = 12, K = 13, le = 14, ue = 15, ae = 16, ye = 17, we = 18, xe = 19, Me = 21, Oe = 22, he = 23, Ke = 24, be = 25, ot = !0, ee = !1, me = !1, de = !1, Pe = !1, tt = !0, lt = !1, Ot = !1, Bt = !0, kt = !0, _t = !0, Tt = /* @__PURE__ */ new Set(), wt = {}, hn = {};
    function ut(e, t) {
      Se(e, t), Se(e + "Capture", t);
    }
    function Se(e, t) {
      wt[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), wt[e] = t;
      {
        var a = e.toLowerCase();
        hn[a] = e, e === "onDoubleClick" && (hn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Tt.add(t[i]);
    }
    var Ie = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", st = Object.prototype.hasOwnProperty;
    function ft(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function At(e) {
      try {
        return Dt(e), !1;
      } catch {
        return !0;
      }
    }
    function Dt(e) {
      return "" + e;
    }
    function tn(e, t) {
      if (At(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ft(e)), Dt(e);
    }
    function jt(e) {
      if (At(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ft(e)), Dt(e);
    }
    function jn(e, t) {
      if (At(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ft(e)), Dt(e);
    }
    function Kt(e, t) {
      if (At(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ft(e)), Dt(e);
    }
    function kr(e) {
      if (At(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ft(e)), Dt(e);
    }
    function rr(e) {
      if (At(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", ft(e)), Dt(e);
    }
    var Dr = 0, Lr = 1, vr = 2, It = 3, In = 4, Ye = 5, gt = 6, se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ke = se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ge = new RegExp("^[" + se + "][" + ke + "]*$"), Ct = {}, Yt = {};
    function An(e) {
      return st.call(Yt, e) ? !0 : st.call(Ct, e) ? !1 : Ge.test(e) ? (Yt[e] = !0, !0) : (Ct[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function un(e, t, a) {
      return t !== null ? t.type === Dr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Mr(e, t, a, i) {
      if (a !== null && a.type === Dr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function qt(e, t, a, i) {
      if (t === null || typeof t > "u" || Mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case It:
            return !t;
          case In:
            return t === !1;
          case Ye:
            return isNaN(t);
          case gt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Yr(e) {
      return sn.hasOwnProperty(e) ? sn[e] : null;
    }
    function nn(e, t, a, i, l, c, v) {
      this.acceptsBooleans = t === vr || t === It || t === In, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var sn = {}, y2 = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    y2.forEach(function(e) {
      sn[e] = new nn(
        e,
        Dr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      sn[t] = new nn(
        t,
        Lr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      sn[e] = new nn(
        e,
        vr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      sn[e] = new nn(
        e,
        vr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      sn[e] = new nn(
        e,
        It,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      sn[e] = new nn(
        e,
        It,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      sn[e] = new nn(
        e,
        In,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      sn[e] = new nn(
        e,
        gt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      sn[e] = new nn(
        e,
        Ye,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _s = /[\-\:]([a-z])/g, As = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_s, As);
      sn[t] = new nn(
        t,
        Lr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_s, As);
      sn[t] = new nn(
        t,
        Lr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_s, As);
      sn[t] = new nn(
        t,
        Lr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      sn[e] = new nn(
        e,
        Lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var g2 = "xlinkHref";
    sn[g2] = new nn(
      "xlinkHref",
      Lr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      sn[e] = new nn(
        e,
        Lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var C2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, zs = !1;
    function Vf(e) {
      !zs && C2.test(e) && (zs = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function yu(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        tn(a, t), i.sanitizeURL && Vf("" + a);
        var c = i.attributeName, v = null;
        if (i.type === In) {
          if (e.hasAttribute(c)) {
            var g = e.getAttribute(c);
            return g === "" ? !0 : qt(t, a, i, !1) ? g : g === "" + a ? a : g;
          }
        } else if (e.hasAttribute(c)) {
          if (qt(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === It)
            return a;
          v = e.getAttribute(c);
        }
        return qt(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Hs(e, t, a, i) {
      {
        if (!An(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return tn(a, t), l === "" + a ? a : l;
      }
    }
    function yo(e, t, a, i) {
      var l = Yr(t);
      if (!un(t, l, i)) {
        if (qt(t, a, l, i) && (a = null), i || l === null) {
          if (An(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : (tn(a, t), e.setAttribute(c, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var g = l.propertyName;
          if (a === null) {
            var S = l.type;
            e[g] = S === It ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var T = l.attributeName, D = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var U = l.type, z;
          U === It || U === In && a === !0 ? z = "" : (tn(a, T), z = "" + a, l.sanitizeURL && Vf(z.toString())), D ? e.setAttributeNS(D, T, z) : e.setAttribute(T, z);
        }
      }
    }
    var fl = Symbol.for("react.element"), ka = Symbol.for("react.portal"), ri = Symbol.for("react.fragment"), dl = Symbol.for("react.strict_mode"), gu = Symbol.for("react.profiler"), Ff = Symbol.for("react.provider"), Pf = Symbol.for("react.context"), pl = Symbol.for("react.forward_ref"), Pa = Symbol.for("react.suspense"), Cu = Symbol.for("react.suspense_list"), vl = Symbol.for("react.memo"), hr = Symbol.for("react.lazy"), x2 = Symbol.for("react.scope"), S2 = Symbol.for("react.debug_trace_mode"), Bf = Symbol.for("react.offscreen"), w2 = Symbol.for("react.legacy_hidden"), Yv = Symbol.for("react.cache"), Zv = Symbol.for("react.tracing_marker"), cn = Symbol.iterator, Qv = "@@iterator";
    function ai(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = cn && e[cn] || e[Qv];
      return typeof t == "function" ? t : null;
    }
    var dt = Object.assign, zi = 0, b2, jf, xu, Da, E2, ia, T2;
    function R2() {
    }
    R2.__reactDisabledLog = !0;
    function Wv() {
      {
        if (zi === 0) {
          b2 = console.log, jf = console.info, xu = console.warn, Da = console.error, E2 = console.group, ia = console.groupCollapsed, T2 = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: R2,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        zi++;
      }
    }
    function Us() {
      {
        if (zi--, zi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: dt({}, e, {
              value: b2
            }),
            info: dt({}, e, {
              value: jf
            }),
            warn: dt({}, e, {
              value: xu
            }),
            error: dt({}, e, {
              value: Da
            }),
            group: dt({}, e, {
              value: E2
            }),
            groupCollapsed: dt({}, e, {
              value: ia
            }),
            groupEnd: dt({}, e, {
              value: T2
            })
          });
        }
        zi < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var hl = f.ReactCurrentDispatcher, go;
    function La(e, t, a) {
      {
        if (go === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            go = i && i[1] || "";
          }
        return `
` + go + e;
      }
    }
    var If = !1, $s;
    {
      var Yf = typeof WeakMap == "function" ? WeakMap : Map;
      $s = new Yf();
    }
    function Vs(e, t) {
      if (!e || If)
        return "";
      {
        var a = $s.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      If = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = hl.current, hl.current = null, Wv();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (W) {
              i = W;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (W) {
              i = W;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            i = W;
          }
          e();
        }
      } catch (W) {
        if (W && i && typeof W.stack == "string") {
          for (var g = W.stack.split(`
`), S = i.stack.split(`
`), T = g.length - 1, D = S.length - 1; T >= 1 && D >= 0 && g[T] !== S[D]; )
            D--;
          for (; T >= 1 && D >= 0; T--, D--)
            if (g[T] !== S[D]) {
              if (T !== 1 || D !== 1)
                do
                  if (T--, D--, D < 0 || g[T] !== S[D]) {
                    var U = `
` + g[T].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && $s.set(e, U), U;
                  }
                while (T >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        If = !1, hl.current = c, Us(), Error.prepareStackTrace = l;
      }
      var z = e ? e.displayName || e.name : "", Q = z ? La(z) : "";
      return typeof e == "function" && $s.set(e, Q), Q;
    }
    function Zf(e, t, a) {
      return Vs(e, !0);
    }
    function Co(e, t, a) {
      return Vs(e, !1);
    }
    function Gv(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Su(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Vs(e, Gv(e));
      if (typeof e == "string")
        return La(e);
      switch (e) {
        case Pa:
          return La("Suspense");
        case Cu:
          return La("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pl:
            return Co(e.render);
          case vl:
            return Su(e.type, t, a);
          case hr: {
            var i = e, l = i._payload, c = i._init;
            try {
              return Su(c(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Nt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case L:
          return La(e.type);
        case ae:
          return La("Lazy");
        case K:
          return La("Suspense");
        case xe:
          return La("SuspenseList");
        case E:
        case N:
        case ue:
          return Co(e.type);
        case F:
          return Co(e.type.render);
        case b:
          return Zf(e.type);
        default:
          return "";
      }
    }
    function Qf(e) {
      try {
        var t = "", a = e;
        do
          t += Nt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function k2(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Fs(e) {
      return e.displayName || "Context";
    }
    function $t(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ri:
          return "Fragment";
        case ka:
          return "Portal";
        case gu:
          return "Profiler";
        case dl:
          return "StrictMode";
        case Pa:
          return "Suspense";
        case Cu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Pf:
            var t = e;
            return Fs(t) + ".Consumer";
          case Ff:
            var a = e;
            return Fs(a._context) + ".Provider";
          case pl:
            return k2(e, e.render, "ForwardRef");
          case vl:
            var i = e.displayName || null;
            return i !== null ? i : $t(e.type) || "Memo";
          case hr: {
            var l = e, c = l._payload, v = l._init;
            try {
              return $t(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function D2(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Wf(e) {
      return e.displayName || "Context";
    }
    function rt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ke:
          return "Cache";
        case V:
          var i = a;
          return Wf(i) + ".Consumer";
        case Y:
          var l = a;
          return Wf(l._context) + ".Provider";
        case we:
          return "DehydratedFragment";
        case F:
          return D2(a, a.render, "ForwardRef");
        case $:
          return "Fragment";
        case L:
          return a;
        case M:
          return "Portal";
        case R:
          return "Root";
        case _:
          return "Text";
        case ae:
          return $t(a);
        case P:
          return a === dl ? "StrictMode" : "Mode";
        case Oe:
          return "Offscreen";
        case X:
          return "Profiler";
        case Me:
          return "Scope";
        case K:
          return "Suspense";
        case xe:
          return "SuspenseList";
        case be:
          return "TracingMarker";
        case b:
        case E:
        case ye:
        case N:
        case le:
        case ue:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var wu = f.ReactDebugCurrentFrame, wn = null, oa = !1;
    function la() {
      {
        if (wn === null)
          return null;
        var e = wn._debugOwner;
        if (e !== null && typeof e < "u")
          return rt(e);
      }
      return null;
    }
    function bu() {
      return wn === null ? "" : Qf(wn);
    }
    function kn() {
      wu.getCurrentStack = null, wn = null, oa = !1;
    }
    function zt(e) {
      wu.getCurrentStack = e === null ? null : bu, wn = e, oa = !1;
    }
    function Xv() {
      return wn;
    }
    function Ma(e) {
      oa = e;
    }
    function ar(e) {
      return "" + e;
    }
    function Hi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return rr(e), e;
        default:
          return "";
      }
    }
    var L2 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ml(e, t) {
      L2[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Gf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function M2(e) {
      return e._valueTracker;
    }
    function Eu(e) {
      e._valueTracker = null;
    }
    function Tu(e) {
      var t = "";
      return e && (Gf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function yl(e) {
      var t = Gf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      rr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(g) {
            rr(g), i = "" + g, c.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(g) {
            rr(g), i = "" + g;
          },
          stopTracking: function() {
            Eu(e), delete e[t];
          }
        };
        return v;
      }
    }
    function xo(e) {
      M2(e) || (e._valueTracker = yl(e));
    }
    function O2(e) {
      if (!e)
        return !1;
      var t = M2(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Tu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ps(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Bs = !1, Ru = !1, js = !1, Xf = !1;
    function ii(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ku(e, t) {
      var a = e, i = t.checked, l = dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function Du(e, t) {
      ml("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ru && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", la() || "A component", t.type), Ru = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Bs && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", la() || "A component", t.type), Bs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Hi(t.value != null ? t.value : i),
        controlled: ii(t)
      };
    }
    function Kf(e, t) {
      var a = e, i = t.checked;
      i != null && yo(a, "checked", i, !1);
    }
    function gl(e, t) {
      var a = e;
      {
        var i = ii(t);
        !a._wrapperState.controlled && i && !Xf && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xf = !0), a._wrapperState.controlled && !i && !js && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), js = !0);
      }
      Kf(e, t);
      var l = Hi(t.value), c = t.type;
      if (l != null)
        c === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = ar(l)) : a.value !== ar(l) && (a.value = ar(l));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ui(a, t.type, l) : t.hasOwnProperty("defaultValue") && Ui(a, t.type, Hi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Lu(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, c = l === "submit" || l === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = ar(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var g = i.name;
      g !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, g !== "" && (i.name = g);
    }
    function N2(e, t) {
      var a = e;
      gl(a, t), Zr(a, t);
    }
    function Zr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        tn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < l.length; c++) {
          var v = l[c];
          if (!(v === e || v.form !== e.form)) {
            var g = u0(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            O2(v), gl(v, g);
          }
        }
      }
    }
    function Ui(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ps(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ar(e._wrapperState.initialValue) : e.defaultValue !== ar(a) && (e.defaultValue = ar(a)));
    }
    var Is = !1, Cl = !1, _2 = !1;
    function Ys(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Cl || (Cl = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (_2 || (_2 = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Is && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Is = !0);
    }
    function qf(e, t) {
      t.value != null && e.setAttribute("value", ar(Hi(t.value)));
    }
    var Mu = Array.isArray;
    function zn(e) {
      return Mu(e);
    }
    var Zs;
    Zs = !1;
    function A2() {
      var e = la();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var z2 = ["value", "defaultValue"];
    function Kv(e) {
      {
        ml("select", e);
        for (var t = 0; t < z2.length; t++) {
          var a = z2[t];
          if (e[a] != null) {
            var i = zn(e[a]);
            e.multiple && !i ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, A2()) : !e.multiple && i && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, A2());
          }
        }
      }
    }
    function $i(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var c = a, v = {}, g = 0; g < c.length; g++)
          v["$" + c[g]] = !0;
        for (var S = 0; S < l.length; S++) {
          var T = v.hasOwnProperty("$" + l[S].value);
          l[S].selected !== T && (l[S].selected = T), T && i && (l[S].defaultSelected = !0);
        }
      } else {
        for (var D = ar(Hi(a)), U = null, z = 0; z < l.length; z++) {
          if (l[z].value === D) {
            l[z].selected = !0, i && (l[z].defaultSelected = !0);
            return;
          }
          U === null && !l[z].disabled && (U = l[z]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function Jf(e, t) {
      return dt({}, t, {
        value: void 0
      });
    }
    function H2(e, t) {
      var a = e;
      Kv(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zs && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zs = !0);
    }
    function qv(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? $i(a, !!t.multiple, i, !1) : t.defaultValue != null && $i(a, !!t.multiple, t.defaultValue, !0);
    }
    function Jv(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? $i(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? $i(a, !!t.multiple, t.defaultValue, !0) : $i(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function eh(e, t) {
      var a = e, i = t.value;
      i != null && $i(a, !!t.multiple, i, !1);
    }
    var ed = !1;
    function td(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ar(a._wrapperState.initialValue)
      });
      return i;
    }
    function U2(e, t) {
      var a = e;
      ml("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ed && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", la() || "A component"), ed = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, c = t.defaultValue;
        if (l != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (zn(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            c = l;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: Hi(i)
      };
    }
    function $2(e, t) {
      var a = e, i = Hi(t.value), l = Hi(t.defaultValue);
      if (i != null) {
        var c = ar(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      l != null && (a.defaultValue = ar(l));
    }
    function V2(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function nd(e, t) {
      $2(e, t);
    }
    var oi = "http://www.w3.org/1999/xhtml", th = "http://www.w3.org/1998/Math/MathML", rd = "http://www.w3.org/2000/svg";
    function Qs(e) {
      switch (e) {
        case "svg":
          return rd;
        case "math":
          return th;
        default:
          return oi;
      }
    }
    function ad(e, t) {
      return e == null || e === oi ? Qs(t) : e === rd && t === "foreignObject" ? oi : e;
    }
    var nh = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Ws, F2 = nh(function(e, t) {
      if (e.namespaceURI === rd && !("innerHTML" in e)) {
        Ws = Ws || document.createElement("div"), Ws.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ws.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Or = 1, li = 3, bn = 8, Oa = 9, So = 11, Gs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === li) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, P2 = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, xl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function B2(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var j2 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(xl).forEach(function(e) {
      j2.forEach(function(t) {
        xl[B2(t, e)] = xl[e];
      });
    });
    function Xs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(xl.hasOwnProperty(e) && xl[e]) ? t + "px" : (Kt(t, e), ("" + t).trim());
    }
    var Sl = /([A-Z])/g, rh = /^ms-/;
    function ah(e) {
      return e.replace(Sl, "-$1").toLowerCase().replace(rh, "-ms-");
    }
    var I2 = function() {
    };
    {
      var Y2 = /^(?:webkit|moz|o)[A-Z]/, Z2 = /^-ms-/, Ou = /-(.)/g, wl = /;\s*$/, bl = {}, El = {}, Q2 = !1, id = !1, od = function(e) {
        return e.replace(Ou, function(t, a) {
          return a.toUpperCase();
        });
      }, ld = function(e) {
        bl.hasOwnProperty(e) && bl[e] || (bl[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          od(e.replace(Z2, "ms-"))
        ));
      }, W2 = function(e) {
        bl.hasOwnProperty(e) && bl[e] || (bl[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, G2 = function(e, t) {
        El.hasOwnProperty(t) && El[t] || (El[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(wl, "")));
      }, X2 = function(e, t) {
        Q2 || (Q2 = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ih = function(e, t) {
        id || (id = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      I2 = function(e, t) {
        e.indexOf("-") > -1 ? ld(e) : Y2.test(e) ? W2(e) : wl.test(t) && G2(e, t), typeof t == "number" && (isNaN(t) ? X2(e, t) : isFinite(t) || ih(e, t));
      };
    }
    var oh = I2;
    function lh(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : ah(i)) + ":", t += Xs(i, l, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function K2(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || oh(i, t[i]);
          var c = Xs(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function uh(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ua(e) {
      var t = {};
      for (var a in e)
        for (var i = P2[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Nu(e, t) {
      {
        if (!t)
          return;
        var a = ua(e), i = ua(t), l = {};
        for (var c in a) {
          var v = a[c], g = i[c];
          if (g && v !== g) {
            var S = v + "," + g;
            if (l[S])
              continue;
            l[S] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", uh(e[v]) ? "Removing" : "Updating", v, g);
          }
        }
      }
    }
    var q2 = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, J2 = dt({
      menuitem: !0
    }, q2), ep = "__html";
    function Ks(e, t) {
      if (t) {
        if (J2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(ep in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ui(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var qs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, tp = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Na = {}, ud = new RegExp("^(aria)-[" + ke + "]*$"), _u = new RegExp("^(aria)[A-Z][" + ke + "]*$");
    function sd(e, t) {
      {
        if (st.call(Na, t) && Na[t])
          return !0;
        if (_u.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = tp.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Na[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Na[t] = !0, !0;
        }
        if (ud.test(t)) {
          var l = t.toLowerCase(), c = tp.hasOwnProperty(l) ? l : null;
          if (c == null)
            return Na[t] = !0, !1;
          if (t !== c)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Na[t] = !0, !0;
        }
      }
      return !0;
    }
    function np(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = sd(e, i);
          l || a.push(i);
        }
        var c = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function Js(e, t) {
      ui(e, t) || np(e, t);
    }
    var wo = !1;
    function cd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !wo && (wo = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var fd = function() {
    };
    {
      var Hn = {}, dd = /^on./, rp = /^on[^A-Z]/, ap = new RegExp("^(aria)-[" + ke + "]*$"), ip = new RegExp("^(aria)[A-Z][" + ke + "]*$");
      fd = function(e, t, a, i) {
        if (st.call(Hn, t) && Hn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Hn[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(l) ? v[l] : null;
          if (g != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, g), Hn[t] = !0, !0;
          if (dd.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), Hn[t] = !0, !0;
        } else if (dd.test(t))
          return rp.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Hn[t] = !0, !0;
        if (ap.test(t) || ip.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Hn[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Hn[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Hn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Hn[t] = !0, !0;
        var S = Yr(t), T = S !== null && S.type === Dr;
        if (qs.hasOwnProperty(l)) {
          var D = qs[l];
          if (D !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, D), Hn[t] = !0, !0;
        } else if (!T && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Hn[t] = !0, !0;
        return typeof a == "boolean" && Mr(t, a, S, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Hn[t] = !0, !0) : T ? !0 : Mr(t, a, S, !1) ? (Hn[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === It && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Hn[t] = !0), !0);
      };
    }
    var op = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var c = fd(e, l, t[l], a);
          c || i.push(l);
        }
        var v = i.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function lp(e, t, a) {
      ui(e, t) || op(e, t, a);
    }
    var si = 1, Au = 2, bo = 4, sh = si | Au | bo, zu = null;
    function Hu(e) {
      zu !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), zu = e;
    }
    function ch() {
      zu === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), zu = null;
    }
    function up(e) {
      return e === zu;
    }
    function ec(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === li ? t.parentNode : t;
    }
    var Vt = null, Vi = null, ci = null;
    function Tl(e) {
      var t = Kl(e);
      if (t) {
        if (typeof Vt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = u0(a);
          Vt(t.stateNode, t.type, i);
        }
      }
    }
    function sp(e) {
      Vt = e;
    }
    function tc(e) {
      Vi ? ci ? ci.push(e) : ci = [e] : Vi = e;
    }
    function Uu() {
      return Vi !== null || ci !== null;
    }
    function $u() {
      if (Vi) {
        var e = Vi, t = ci;
        if (Vi = null, ci = null, Tl(e), t)
          for (var a = 0; a < t.length; a++)
            Tl(t[a]);
      }
    }
    var Eo = function(e, t) {
      return e(t);
    }, pd = function() {
    }, vd = !1;
    function fh() {
      var e = Uu();
      e && (pd(), $u());
    }
    function hd(e, t, a) {
      if (vd)
        return e(t, a);
      vd = !0;
      try {
        return Eo(e, t, a);
      } finally {
        vd = !1, fh();
      }
    }
    function nc(e, t, a) {
      Eo = e, pd = a;
    }
    function rc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function md(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && rc(t));
        default:
          return !1;
      }
    }
    function To(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = u0(a);
      if (i === null)
        return null;
      var l = i[t];
      if (md(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Vu = !1;
    if (Ie)
      try {
        var Ro = {};
        Object.defineProperty(Ro, "passive", {
          get: function() {
            Vu = !0;
          }
        }), window.addEventListener("test", Ro, Ro), window.removeEventListener("test", Ro, Ro);
      } catch {
        Vu = !1;
      }
    function cp(e, t, a, i, l, c, v, g, S) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (D) {
        this.onError(D);
      }
    }
    var yd = cp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var gd = document.createElement("react");
      yd = function(t, a, i, l, c, v, g, S, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var D = document.createEvent("Event"), U = !1, z = !0, Q = window.event, W = Object.getOwnPropertyDescriptor(window, "event");
        function q() {
          gd.removeEventListener(J, je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Q);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function je() {
          U = !0, q(), a.apply(i, De), z = !1;
        }
        var $e, yt = !1, vt = !1;
        function j(I) {
          if ($e = I.error, yt = !0, $e === null && I.colno === 0 && I.lineno === 0 && (vt = !0), I.defaultPrevented && $e != null && typeof $e == "object")
            try {
              $e._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), gd.addEventListener(J, je, !1), D.initEvent(J, !1, !1), gd.dispatchEvent(D), W && Object.defineProperty(window, "event", W), U && z && (yt ? vt && ($e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : $e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError($e)), window.removeEventListener("error", j), !U)
          return q(), cp.apply(this, arguments);
      };
    }
    var dh = yd, Fi = !1, _a = null, Fu = !1, Pi = null, Ba = {
      onError: function(e) {
        Fi = !0, _a = e;
      }
    };
    function ko(e, t, a, i, l, c, v, g, S) {
      Fi = !1, _a = null, dh.apply(Ba, arguments);
    }
    function fi(e, t, a, i, l, c, v, g, S) {
      if (ko.apply(this, arguments), Fi) {
        var T = xd();
        Fu || (Fu = !0, Pi = T);
      }
    }
    function Cd() {
      if (Fu) {
        var e = Pi;
        throw Fu = !1, Pi = null, e;
      }
    }
    function ph() {
      return Fi;
    }
    function xd() {
      if (Fi) {
        var e = _a;
        return Fi = !1, _a = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function sa(e) {
      return e._reactInternals;
    }
    function Pu(e) {
      return e._reactInternals !== void 0;
    }
    function Rl(e, t) {
      e._reactInternals = t;
    }
    var Be = (
      /*                      */
      0
    ), Bi = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), at = (
      /*                       */
      4
    ), Rt = (
      /*                */
      16
    ), Lt = (
      /*                 */
      32
    ), ja = (
      /*                     */
      64
    ), qe = (
      /*                   */
      128
    ), fn = (
      /*            */
      256
    ), Nr = (
      /*                          */
      512
    ), ca = (
      /*                     */
      1024
    ), Jt = (
      /*                      */
      2048
    ), fa = (
      /*                    */
      4096
    ), ji = (
      /*                   */
      8192
    ), Bu = (
      /*             */
      16384
    ), ac = Jt | at | ja | Nr | ca | Bu, fp = (
      /*               */
      32767
    ), Qr = (
      /*                   */
      32768
    ), Un = (
      /*                */
      65536
    ), ju = (
      /* */
      131072
    ), Sd = (
      /*                       */
      1048576
    ), wd = (
      /*                    */
      2097152
    ), _r = (
      /*                 */
      4194304
    ), Ii = (
      /*                */
      8388608
    ), Ar = (
      /*               */
      16777216
    ), Do = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      at | ca | 0
    ), zr = Zt | at | Rt | Lt | Nr | fa | ji, ir = at | ja | Nr | ji, da = Jt | Rt, Yn = _r | Ii | wd, di = f.ReactCurrentOwner;
    function Wr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | fa)) !== Be && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === R ? a : null;
    }
    function bd(e) {
      if (e.tag === K) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function ic(e) {
      return e.tag === R ? e.stateNode.containerInfo : null;
    }
    function Ed(e) {
      return Wr(e) === e;
    }
    function Gr(e) {
      {
        var t = di.current;
        if (t !== null && t.tag === b) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", rt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = sa(e);
      return l ? Wr(l) === l : !1;
    }
    function Hr(e) {
      if (Wr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Qt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Wr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var g = c.return;
          if (g !== null) {
            i = l = g;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var S = c.child; S; ) {
            if (S === i)
              return Hr(c), e;
            if (S === l)
              return Hr(c), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = c, l = v;
        else {
          for (var T = !1, D = c.child; D; ) {
            if (D === i) {
              T = !0, i = c, l = v;
              break;
            }
            if (D === l) {
              T = !0, l = c, i = v;
              break;
            }
            D = D.sibling;
          }
          if (!T) {
            for (D = v.child; D; ) {
              if (D === i) {
                T = !0, i = v, l = c;
                break;
              }
              if (D === l) {
                T = !0, l = v, i = c;
                break;
              }
              D = D.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== R)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function pa(e) {
      var t = Qt(e);
      return t !== null ? Td(t) : null;
    }
    function Td(e) {
      if (e.tag === L || e.tag === _)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Td(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dp(e) {
      var t = Qt(e);
      return t !== null ? oc(t) : null;
    }
    function oc(e) {
      if (e.tag === L || e.tag === _)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== M) {
          var a = oc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var lc = d.unstable_scheduleCallback, pp = d.unstable_cancelCallback, uc = d.unstable_shouldYield, vp = d.unstable_requestPaint, rn = d.unstable_now, Rd = d.unstable_getCurrentPriorityLevel, sc = d.unstable_ImmediatePriority, Xr = d.unstable_UserBlockingPriority, Ia = d.unstable_NormalPriority, cc = d.unstable_LowPriority, Yi = d.unstable_IdlePriority, kd = d.unstable_yieldValue, Dd = d.unstable_setDisableYieldValue, Zi = null, $n = null, ge = null, mn = !1, Zn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ld(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Bt && (e = dt({}, e, {
          getLaneLabelMap: Wi,
          injectProfilingHooks: vi
        })), Zi = t.inject(e), $n = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function hp(e, t) {
      if ($n && typeof $n.onScheduleFiberRoot == "function")
        try {
          $n.onScheduleFiberRoot(Zi, e, t);
        } catch (a) {
          mn || (mn = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function pi(e, t) {
      if ($n && typeof $n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & qe) === qe;
          if (kt) {
            var i;
            switch (t) {
              case or:
                i = sc;
                break;
              case Qn:
                i = Xr;
                break;
              case mi:
                i = Ia;
                break;
              case qu:
                i = Yi;
                break;
              default:
                i = Ia;
                break;
            }
            $n.onCommitFiberRoot(Zi, e, i, a);
          }
        } catch (l) {
          mn || (mn = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function Qi(e) {
      if ($n && typeof $n.onPostCommitFiberRoot == "function")
        try {
          $n.onPostCommitFiberRoot(Zi, e);
        } catch (t) {
          mn || (mn = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Md(e) {
      if ($n && typeof $n.onCommitFiberUnmount == "function")
        try {
          $n.onCommitFiberUnmount(Zi, e);
        } catch (t) {
          mn || (mn = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Dn(e) {
      if (typeof kd == "function" && (Dd(e), C(e)), $n && typeof $n.setStrictMode == "function")
        try {
          $n.setStrictMode(Zi, e);
        } catch (t) {
          mn || (mn = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function vi(e) {
      ge = e;
    }
    function Wi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Wt; a++) {
          var i = vh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function fc(e) {
      ge !== null && typeof ge.markCommitStarted == "function" && ge.markCommitStarted(e);
    }
    function Od() {
      ge !== null && typeof ge.markCommitStopped == "function" && ge.markCommitStopped();
    }
    function Gi(e) {
      ge !== null && typeof ge.markComponentRenderStarted == "function" && ge.markComponentRenderStarted(e);
    }
    function Lo() {
      ge !== null && typeof ge.markComponentRenderStopped == "function" && ge.markComponentRenderStopped();
    }
    function mp(e) {
      ge !== null && typeof ge.markComponentPassiveEffectMountStarted == "function" && ge.markComponentPassiveEffectMountStarted(e);
    }
    function Nd() {
      ge !== null && typeof ge.markComponentPassiveEffectMountStopped == "function" && ge.markComponentPassiveEffectMountStopped();
    }
    function dc(e) {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStarted == "function" && ge.markComponentPassiveEffectUnmountStarted(e);
    }
    function yp() {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStopped == "function" && ge.markComponentPassiveEffectUnmountStopped();
    }
    function gp(e) {
      ge !== null && typeof ge.markComponentLayoutEffectMountStarted == "function" && ge.markComponentLayoutEffectMountStarted(e);
    }
    function Cp() {
      ge !== null && typeof ge.markComponentLayoutEffectMountStopped == "function" && ge.markComponentLayoutEffectMountStopped();
    }
    function pc(e) {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStarted == "function" && ge.markComponentLayoutEffectUnmountStarted(e);
    }
    function Dl() {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStopped == "function" && ge.markComponentLayoutEffectUnmountStopped();
    }
    function vc(e, t, a) {
      ge !== null && typeof ge.markComponentErrored == "function" && ge.markComponentErrored(e, t, a);
    }
    function xp(e, t, a) {
      ge !== null && typeof ge.markComponentSuspended == "function" && ge.markComponentSuspended(e, t, a);
    }
    function Sp(e) {
      ge !== null && typeof ge.markLayoutEffectsStarted == "function" && ge.markLayoutEffectsStarted(e);
    }
    function Ll() {
      ge !== null && typeof ge.markLayoutEffectsStopped == "function" && ge.markLayoutEffectsStopped();
    }
    function wp(e) {
      ge !== null && typeof ge.markPassiveEffectsStarted == "function" && ge.markPassiveEffectsStarted(e);
    }
    function Iu() {
      ge !== null && typeof ge.markPassiveEffectsStopped == "function" && ge.markPassiveEffectsStopped();
    }
    function Aa(e) {
      ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
    }
    function Yu() {
      ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded();
    }
    function Ml() {
      ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
    }
    function Mo(e) {
      ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(e);
    }
    function _d(e, t) {
      ge !== null && typeof ge.markForceUpdateScheduled == "function" && ge.markForceUpdateScheduled(e, t);
    }
    function Xi(e, t) {
      ge !== null && typeof ge.markStateUpdateScheduled == "function" && ge.markStateUpdateScheduled(e, t);
    }
    var Ze = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Qe = (
      /*                    */
      2
    ), an = (
      /*               */
      8
    ), va = (
      /*              */
      16
    ), hc = Math.clz32 ? Math.clz32 : Oo, mc = Math.log, Ad = Math.LN2;
    function Oo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (mc(t) / Ad | 0) | 0;
    }
    var Wt = 31, te = (
      /*                        */
      0
    ), ht = (
      /*                          */
      0
    ), We = (
      /*                        */
      1
    ), Ya = (
      /*    */
      2
    ), Kr = (
      /*             */
      4
    ), No = (
      /*            */
      8
    ), Gt = (
      /*                     */
      16
    ), _o = (
      /*                */
      32
    ), Ki = (
      /*                       */
      4194240
    ), Ao = (
      /*                        */
      64
    ), ha = (
      /*                        */
      128
    ), Ur = (
      /*                        */
      256
    ), zo = (
      /*                        */
      512
    ), Zu = (
      /*                        */
      1024
    ), Qu = (
      /*                        */
      2048
    ), yc = (
      /*                        */
      4096
    ), gc = (
      /*                        */
      8192
    ), Cc = (
      /*                        */
      16384
    ), xc = (
      /*                       */
      32768
    ), Sc = (
      /*                       */
      65536
    ), wc = (
      /*                       */
      131072
    ), bc = (
      /*                       */
      262144
    ), Ec = (
      /*                       */
      524288
    ), Ho = (
      /*                       */
      1048576
    ), Tc = (
      /*                       */
      2097152
    ), Uo = (
      /*                            */
      130023424
    ), hi = (
      /*                             */
      4194304
    ), Rc = (
      /*                             */
      8388608
    ), Wu = (
      /*                             */
      16777216
    ), kc = (
      /*                             */
      33554432
    ), Dc = (
      /*                             */
      67108864
    ), zd = hi, Ol = (
      /*          */
      134217728
    ), Lc = (
      /*                          */
      268435455
    ), Nl = (
      /*               */
      268435456
    ), qi = (
      /*                        */
      536870912
    ), $r = (
      /*                   */
      1073741824
    );
    function vh(e) {
      {
        if (e & We)
          return "Sync";
        if (e & Ya)
          return "InputContinuousHydration";
        if (e & Kr)
          return "InputContinuous";
        if (e & No)
          return "DefaultHydration";
        if (e & Gt)
          return "Default";
        if (e & _o)
          return "TransitionHydration";
        if (e & Ki)
          return "Transition";
        if (e & Uo)
          return "Retry";
        if (e & Ol)
          return "SelectiveHydration";
        if (e & Nl)
          return "IdleHydration";
        if (e & qi)
          return "Idle";
        if (e & $r)
          return "Offscreen";
      }
    }
    var Ft = -1, Mc = Ao, Oc = hi;
    function _l(e) {
      switch (En(e)) {
        case We:
          return We;
        case Ya:
          return Ya;
        case Kr:
          return Kr;
        case No:
          return No;
        case Gt:
          return Gt;
        case _o:
          return _o;
        case Ao:
        case ha:
        case Ur:
        case zo:
        case Zu:
        case Qu:
        case yc:
        case gc:
        case Cc:
        case xc:
        case Sc:
        case wc:
        case bc:
        case Ec:
        case Ho:
        case Tc:
          return e & Ki;
        case hi:
        case Rc:
        case Wu:
        case kc:
        case Dc:
          return e & Uo;
        case Ol:
          return Ol;
        case Nl:
          return Nl;
        case qi:
          return qi;
        case $r:
          return $r;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Gu(e, t) {
      var a = e.pendingLanes;
      if (a === te)
        return te;
      var i = te, l = e.suspendedLanes, c = e.pingedLanes, v = a & Lc;
      if (v !== te) {
        var g = v & ~l;
        if (g !== te)
          i = _l(g);
        else {
          var S = v & c;
          S !== te && (i = _l(S));
        }
      } else {
        var T = a & ~l;
        T !== te ? i = _l(T) : c !== te && (i = _l(c));
      }
      if (i === te)
        return te;
      if (t !== te && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === te) {
        var D = En(i), U = En(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          D >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          D === Gt && (U & Ki) !== te
        )
          return t;
      }
      (i & Kr) !== te && (i |= a & Gt);
      var z = e.entangledLanes;
      if (z !== te)
        for (var Q = e.entanglements, W = i & z; W > 0; ) {
          var q = Ji(W), De = 1 << q;
          i |= Q[q], W &= ~De;
        }
      return i;
    }
    function bp(e, t) {
      for (var a = e.eventTimes, i = Ft; t > 0; ) {
        var l = Ji(t), c = 1 << l, v = a[l];
        v > i && (i = v), t &= ~c;
      }
      return i;
    }
    function Nc(e, t) {
      switch (e) {
        case We:
        case Ya:
        case Kr:
          return t + 250;
        case No:
        case Gt:
        case _o:
        case Ao:
        case ha:
        case Ur:
        case zo:
        case Zu:
        case Qu:
        case yc:
        case gc:
        case Cc:
        case xc:
        case Sc:
        case wc:
        case bc:
        case Ec:
        case Ho:
        case Tc:
          return t + 5e3;
        case hi:
        case Rc:
        case Wu:
        case kc:
        case Dc:
          return Ft;
        case Ol:
        case Nl:
        case qi:
        case $r:
          return Ft;
        default:
          return h("Should have found matching lanes. This is a bug in React."), Ft;
      }
    }
    function hh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, v = a; v > 0; ) {
        var g = Ji(v), S = 1 << g, T = c[g];
        T === Ft ? ((S & i) === te || (S & l) !== te) && (c[g] = Nc(S, t)) : T <= t && (e.expiredLanes |= S), v &= ~S;
      }
    }
    function mh(e) {
      return _l(e.pendingLanes);
    }
    function Hd(e) {
      var t = e.pendingLanes & ~$r;
      return t !== te ? t : t & $r ? $r : te;
    }
    function Al(e) {
      return (e & We) !== te;
    }
    function Xu(e) {
      return (e & Lc) !== te;
    }
    function _c(e) {
      return (e & Uo) === e;
    }
    function yh(e) {
      var t = We | Kr | Gt;
      return (e & t) === te;
    }
    function Ep(e) {
      return (e & Ki) === e;
    }
    function Ku(e, t) {
      var a = Ya | Kr | No | Gt;
      return (t & a) !== te;
    }
    function Tp(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function Ud(e) {
      return (e & Ki) !== te;
    }
    function $d() {
      var e = Mc;
      return Mc <<= 1, (Mc & Ki) === te && (Mc = Ao), e;
    }
    function gh() {
      var e = Oc;
      return Oc <<= 1, (Oc & Uo) === te && (Oc = hi), e;
    }
    function En(e) {
      return e & -e;
    }
    function Ln(e) {
      return En(e);
    }
    function Ji(e) {
      return 31 - hc(e);
    }
    function Ac(e) {
      return Ji(e);
    }
    function Vr(e, t) {
      return (e & t) !== te;
    }
    function $o(e, t) {
      return (e & t) === t;
    }
    function it(e, t) {
      return e | t;
    }
    function zl(e, t) {
      return e & ~t;
    }
    function Vd(e, t) {
      return e & t;
    }
    function Rp(e) {
      return e;
    }
    function kp(e, t) {
      return e !== ht && e < t ? e : t;
    }
    function zc(e) {
      for (var t = [], a = 0; a < Wt; a++)
        t.push(e);
      return t;
    }
    function Vo(e, t, a) {
      e.pendingLanes |= t, t !== qi && (e.suspendedLanes = te, e.pingedLanes = te);
      var i = e.eventTimes, l = Ac(t);
      i[l] = a;
    }
    function Fd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Ji(i), c = 1 << l;
        a[l] = Ft, i &= ~c;
      }
    }
    function Pd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Bd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, c = e.expirationTimes, v = a; v > 0; ) {
        var g = Ji(v), S = 1 << g;
        i[g] = te, l[g] = Ft, c[g] = Ft, v &= ~S;
      }
    }
    function Hl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var c = Ji(l), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), l &= ~v;
      }
    }
    function Ch(e, t) {
      var a = En(t), i;
      switch (a) {
        case Kr:
          i = Ya;
          break;
        case Gt:
          i = No;
          break;
        case Ao:
        case ha:
        case Ur:
        case zo:
        case Zu:
        case Qu:
        case yc:
        case gc:
        case Cc:
        case xc:
        case Sc:
        case wc:
        case bc:
        case Ec:
        case Ho:
        case Tc:
        case hi:
        case Rc:
        case Wu:
        case kc:
        case Dc:
          i = _o;
          break;
        case qi:
          i = Nl;
          break;
        default:
          i = ht;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== ht ? ht : i;
    }
    function jd(e, t, a) {
      if (Zn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Ac(a), c = 1 << l, v = i[l];
          v.add(t), a &= ~c;
        }
    }
    function Hc(e, t) {
      if (Zn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Ac(t), c = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(g) {
            var S = g.alternate;
            (S === null || !i.has(S)) && i.add(g);
          }), v.clear()), t &= ~c;
        }
    }
    function Id(e, t) {
      return null;
    }
    var or = We, Qn = Kr, mi = Gt, qu = qi, Fo = ht;
    function ma() {
      return Fo;
    }
    function Mn(e) {
      Fo = e;
    }
    function Ju(e, t) {
      var a = Fo;
      try {
        return Fo = e, t();
      } finally {
        Fo = a;
      }
    }
    function lr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xh(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Yd(e, t) {
      return e !== 0 && e < t;
    }
    function es(e) {
      var t = En(e);
      return Yd(or, t) ? Yd(Qn, t) ? Xu(t) ? mi : qu : Qn : or;
    }
    function On(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Dp;
    function Ne(e) {
      Dp = e;
    }
    function Ul(e) {
      Dp(e);
    }
    var ts;
    function Lp(e) {
      ts = e;
    }
    var Mp;
    function ns(e) {
      Mp = e;
    }
    var rs;
    function Zd(e) {
      rs = e;
    }
    var Qd;
    function Op(e) {
      Qd = e;
    }
    var Uc = !1, $l = [], Za = null, en = null, Vn = null, ya = /* @__PURE__ */ new Map(), Vl = /* @__PURE__ */ new Map(), yi = [], za = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Np(e) {
      return za.indexOf(e) > -1;
    }
    function Qa(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function _p(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Za = null;
          break;
        case "dragenter":
        case "dragleave":
          en = null;
          break;
        case "mouseover":
        case "mouseout":
          Vn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ya.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Vl.delete(i);
          break;
        }
      }
    }
    function Fl(e, t, a, i, l, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = Qa(t, a, i, l, c);
        if (t !== null) {
          var g = Kl(t);
          g !== null && ts(g);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var S = e.targetContainers;
      return l !== null && S.indexOf(l) === -1 && S.push(l), e;
    }
    function Ap(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var c = l;
          return Za = Fl(Za, e, t, a, i, c), !0;
        }
        case "dragenter": {
          var v = l;
          return en = Fl(en, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var g = l;
          return Vn = Fl(Vn, e, t, a, i, g), !0;
        }
        case "pointerover": {
          var S = l, T = S.pointerId;
          return ya.set(T, Fl(ya.get(T) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var D = l, U = D.pointerId;
          return Vl.set(U, Fl(Vl.get(U) || null, e, t, a, i, D)), !0;
        }
      }
      return !1;
    }
    function Wd(e) {
      var t = ds(e.target);
      if (t !== null) {
        var a = Wr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === K) {
            var l = bd(a);
            if (l !== null) {
              e.blockedOn = l, Qd(e.priority, function() {
                Mp(a);
              });
              return;
            }
          } else if (i === R) {
            var c = a.stateNode;
            if (On(c)) {
              e.blockedOn = ic(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function zp(e) {
      for (var t = rs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < yi.length && Yd(t, yi[i].priority); i++)
        ;
      yi.splice(i, 0, a), i === 0 && Wd(a);
    }
    function $c(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Po(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, c = new l.constructor(l.type, l);
          Hu(c), l.target.dispatchEvent(c), ch();
        } else {
          var v = Kl(i);
          return v !== null && ts(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function as(e, t, a) {
      $c(e) && a.delete(t);
    }
    function Gd() {
      Uc = !1, Za !== null && $c(Za) && (Za = null), en !== null && $c(en) && (en = null), Vn !== null && $c(Vn) && (Vn = null), ya.forEach(as), Vl.forEach(as);
    }
    function ur(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Uc || (Uc = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, Gd)));
    }
    function pt(e) {
      if ($l.length > 0) {
        ur($l[0], e);
        for (var t = 1; t < $l.length; t++) {
          var a = $l[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Za !== null && ur(Za, e), en !== null && ur(en, e), Vn !== null && ur(Vn, e);
      var i = function(g) {
        return ur(g, e);
      };
      ya.forEach(i), Vl.forEach(i);
      for (var l = 0; l < yi.length; l++) {
        var c = yi[l];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; yi.length > 0; ) {
        var v = yi[0];
        if (v.blockedOn !== null)
          break;
        Wd(v), v.blockedOn === null && yi.shift();
      }
    }
    var on = f.ReactCurrentBatchConfig, dn = !0;
    function Fn(e) {
      dn = !!e;
    }
    function qr() {
      return dn;
    }
    function Pl(e, t, a) {
      var i = mr(t), l;
      switch (i) {
        case or:
          l = Nn;
          break;
        case Qn:
          l = is;
          break;
        case mi:
        default:
          l = gi;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Nn(e, t, a, i) {
      var l = ma(), c = on.transition;
      on.transition = null;
      try {
        Mn(or), gi(e, t, a, i);
      } finally {
        Mn(l), on.transition = c;
      }
    }
    function is(e, t, a, i) {
      var l = ma(), c = on.transition;
      on.transition = null;
      try {
        Mn(Qn), gi(e, t, a, i);
      } finally {
        Mn(l), on.transition = c;
      }
    }
    function gi(e, t, a, i) {
      dn && Vc(e, t, a, i);
    }
    function Vc(e, t, a, i) {
      var l = Po(e, t, a, i);
      if (l === null) {
        Fh(e, t, i, Bl, a), _p(e, i);
        return;
      }
      if (Ap(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (_p(e, i), t & bo && Np(e)) {
        for (; l !== null; ) {
          var c = Kl(l);
          c !== null && Ul(c);
          var v = Po(e, t, a, i);
          if (v === null && Fh(e, t, i, Bl, a), v === l)
            break;
          l = v;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Fh(e, t, i, null, a);
    }
    var Bl = null;
    function Po(e, t, a, i) {
      Bl = null;
      var l = ec(i), c = ds(l);
      if (c !== null) {
        var v = Wr(c);
        if (v === null)
          c = null;
        else {
          var g = v.tag;
          if (g === K) {
            var S = bd(v);
            if (S !== null)
              return S;
            c = null;
          } else if (g === R) {
            var T = v.stateNode;
            if (On(T))
              return ic(v);
            c = null;
          } else
            v !== c && (c = null);
        }
      }
      return Bl = c, null;
    }
    function mr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return or;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Qn;
        case "message": {
          var t = Rd();
          switch (t) {
            case sc:
              return or;
            case Xr:
              return Qn;
            case Ia:
            case cc:
              return mi;
            case Yi:
              return qu;
            default:
              return mi;
          }
        }
        default:
          return mi;
      }
    }
    function Xd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function jl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ci(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Fc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Bo = null, Wa = null, eo = null;
    function to(e) {
      return Bo = e, Wa = Bc(), !0;
    }
    function Pc() {
      Bo = null, Wa = null, eo = null;
    }
    function Il() {
      if (eo)
        return eo;
      var e, t = Wa, a = t.length, i, l = Bc(), c = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[c - i]; i++)
        ;
      var g = i > 1 ? 1 - i : void 0;
      return eo = l.slice(e, g), eo;
    }
    function Bc() {
      return "value" in Bo ? Bo.value : Bo.textContent;
    }
    function jo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Io() {
      return !0;
    }
    function sr() {
      return !1;
    }
    function Tn(e) {
      function t(a, i, l, c, v) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var S = e[g];
            S ? this[g] = S(c) : this[g] = c[g];
          }
        var T = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return T ? this.isDefaultPrevented = Io : this.isDefaultPrevented = sr, this.isPropagationStopped = sr, this;
      }
      return dt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Io);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Io);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Io
      }), t;
    }
    var cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, fr = Tn(cr), Yl = dt({}, cr, {
      view: 0,
      detail: 0
    }), Kd = Tn(Yl), os, qd, ga;
    function Hp(e) {
      e !== ga && (ga && e.type === "mousemove" ? (os = e.screenX - ga.screenX, qd = e.screenY - ga.screenY) : (os = 0, qd = 0), ga = e);
    }
    var Zl = dt({}, Yl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Hp(e), os);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : qd;
      }
    }), no = Tn(Zl), Jd = dt({}, Zl, {
      dataTransfer: 0
    }), Yo = Tn(Jd), Up = dt({}, Yl, {
      relatedTarget: 0
    }), jc = Tn(Up), e1 = dt({}, cr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ic = Tn(e1), Sh = dt({}, cr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), wh = Tn(Sh), $p = dt({}, cr, {
      data: 0
    }), t1 = Tn($p), Zo = t1, bh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ql = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Vp(e) {
      if (e.key) {
        var t = bh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ql[e.keyCode] || "Unidentified" : "";
    }
    var pn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Eh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = pn[e];
      return i ? !!a[i] : !1;
    }
    function Yc(e) {
      return Eh;
    }
    var Th = dt({}, Yl, {
      key: Vp,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Rh = Tn(Th), Fp = dt({}, Zl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), n1 = Tn(Fp), kh = dt({}, Yl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yc
    }), Ca = Tn(kh), r1 = dt({}, cr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Dh = Tn(r1), ro = dt({}, Zl, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Zc = Tn(ro), Qo = [9, 13, 27, 32], ls = 229, us = Ie && "CompositionEvent" in window, Wo = null;
    Ie && "documentMode" in document && (Wo = document.documentMode);
    var Lh = Ie && "TextEvent" in window && !Wo, Qc = Ie && (!us || Wo && Wo > 8 && Wo <= 11), Pp = 32, a1 = String.fromCharCode(Pp);
    function Bp() {
      ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ut("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ss = !1;
    function Wc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function jp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function i1(e, t) {
      return e === "keydown" && t.keyCode === ls;
    }
    function Ip(e, t) {
      switch (e) {
        case "keyup":
          return Qo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ls;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function o1(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Gc(e) {
      return e.locale === "ko";
    }
    var xi = !1;
    function l1(e, t, a, i, l) {
      var c, v;
      if (us ? c = jp(t) : xi ? Ip(t, i) && (c = "onCompositionEnd") : i1(t, i) && (c = "onCompositionStart"), !c)
        return null;
      Qc && !Gc(i) && (!xi && c === "onCompositionStart" ? xi = to(l) : c === "onCompositionEnd" && xi && (v = Il()));
      var g = Gp(a, c);
      if (g.length > 0) {
        var S = new t1(c, t, null, i, l);
        if (e.push({
          event: S,
          listeners: g
        }), v)
          S.data = v;
        else {
          var T = o1(i);
          T !== null && (S.data = T);
        }
      }
    }
    function Xc(e, t) {
      switch (e) {
        case "compositionend":
          return o1(t);
        case "keypress":
          var a = t.which;
          return a !== Pp ? null : (ss = !0, a1);
        case "textInput":
          var i = t.data;
          return i === a1 && ss ? null : i;
        default:
          return null;
      }
    }
    function Yp(e, t) {
      if (xi) {
        if (e === "compositionend" || !us && Ip(e, t)) {
          var a = Il();
          return Pc(), xi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Wc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Qc && !Gc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Mh(e, t, a, i, l) {
      var c;
      if (Lh ? c = Xc(t, i) : c = Yp(t, i), !c)
        return null;
      var v = Gp(a, "onBeforeInput");
      if (v.length > 0) {
        var g = new Zo("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: g,
          listeners: v
        }), g.data = c;
      }
    }
    function Kc(e, t, a, i, l, c, v) {
      l1(e, t, a, i, l), Mh(e, t, a, i, l);
    }
    var Oh = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Wl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Oh[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Nh(e) {
      if (!Ie)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function qc() {
      ut("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      tc(i);
      var l = Gp(t, "onChange");
      if (l.length > 0) {
        var c = new fr("onChange", "change", null, a, i);
        e.push({
          event: c,
          listeners: l
        });
      }
    }
    var r = null, o = null;
    function s(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, o, e, ec(e)), hd(m, t);
    }
    function m(e) {
      gm(e, 0);
    }
    function w(e) {
      var t = af(e);
      if (O2(t))
        return e;
    }
    function O(e, t) {
      if (e === "change")
        return t;
    }
    var A = !1;
    Ie && (A = Nh("input") && (!document.documentMode || document.documentMode > 9));
    function G(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", ce);
    }
    function oe() {
      r && (r.detachEvent("onpropertychange", ce), r = null, o = null);
    }
    function ce(e) {
      e.propertyName === "value" && w(o) && p(e);
    }
    function ie(e, t, a) {
      e === "focusin" ? (oe(), G(t, a)) : e === "focusout" && oe();
    }
    function Te(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(o);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function He(e, t) {
      if (e === "click")
        return w(t);
    }
    function yn(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function B(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ui(e, "number", e.value);
    }
    function H(e, t, a, i, l, c, v) {
      var g = a ? af(a) : window, S, T;
      if (s(g) ? S = O : Wl(g) ? A ? S = yn : (S = Te, T = ie) : _e(g) && (S = He), S) {
        var D = S(t, a);
        if (D) {
          n(e, D, i, l);
          return;
        }
      }
      T && T(t, g, a), t === "focusout" && B(g);
    }
    function Z() {
      Se("onMouseEnter", ["mouseout", "mouseover"]), Se("onMouseLeave", ["mouseout", "mouseover"]), Se("onPointerEnter", ["pointerout", "pointerover"]), Se("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ve(e, t, a, i, l, c, v) {
      var g = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (g && !up(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (ds(T) || S1(T)))
          return;
      }
      if (!(!S && !g)) {
        var D;
        if (l.window === l)
          D = l;
        else {
          var U = l.ownerDocument;
          U ? D = U.defaultView || U.parentWindow : D = window;
        }
        var z, Q;
        if (S) {
          var W = i.relatedTarget || i.toElement;
          if (z = a, Q = W ? ds(W) : null, Q !== null) {
            var q = Wr(Q);
            (Q !== q || Q.tag !== L && Q.tag !== _) && (Q = null);
          }
        } else
          z = null, Q = a;
        if (z !== Q) {
          var De = no, je = "onMouseLeave", $e = "onMouseEnter", yt = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = n1, je = "onPointerLeave", $e = "onPointerEnter", yt = "pointer");
          var vt = z == null ? D : af(z), j = Q == null ? D : af(Q), J = new De(je, yt + "leave", z, i, l);
          J.target = vt, J.relatedTarget = j;
          var I = null, fe = ds(l);
          if (fe === a) {
            var Le = new De($e, yt + "enter", Q, i, l);
            Le.target = j, Le.relatedTarget = vt, I = Le;
          }
          Ly(e, J, I, z, Q);
        }
      }
    }
    function Ue(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ae = typeof Object.is == "function" ? Object.is : Ue;
    function Ve(e, t) {
      if (Ae(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (!st.call(t, c) || !Ae(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function Je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Pn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function xt(e, t) {
      for (var a = Je(e), i = 0, l = 0; a; ) {
        if (a.nodeType === li) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Je(Pn(a));
      }
    }
    function ao(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, c = i.anchorOffset, v = i.focusNode, g = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return _h(e, l, c, v, g);
    }
    function _h(e, t, a, i, l) {
      var c = 0, v = -1, g = -1, S = 0, T = 0, D = e, U = null;
      e:
        for (; ; ) {
          for (var z = null; D === t && (a === 0 || D.nodeType === li) && (v = c + a), D === i && (l === 0 || D.nodeType === li) && (g = c + l), D.nodeType === li && (c += D.nodeValue.length), (z = D.firstChild) !== null; )
            U = D, D = z;
          for (; ; ) {
            if (D === e)
              break e;
            if (U === t && ++S === a && (v = c), U === i && ++T === l && (g = c), (z = D.nextSibling) !== null)
              break;
            D = U, U = D.parentNode;
          }
          D = z;
        }
      return v === -1 || g === -1 ? null : {
        start: v,
        end: g
      };
    }
    function cy(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), g = t.end === void 0 ? v : Math.min(t.end, c);
        if (!l.extend && v > g) {
          var S = g;
          g = v, v = S;
        }
        var T = xt(e, v), D = xt(e, g);
        if (T && D) {
          if (l.rangeCount === 1 && l.anchorNode === T.node && l.anchorOffset === T.offset && l.focusNode === D.node && l.focusOffset === D.offset)
            return;
          var U = a.createRange();
          U.setStart(T.node, T.offset), l.removeAllRanges(), v > g ? (l.addRange(U), l.extend(D.node, D.offset)) : (U.setEnd(D.node, D.offset), l.addRange(U));
        }
      }
    }
    function om(e) {
      return e && e.nodeType === li;
    }
    function lm(e, t) {
      return !e || !t ? !1 : e === t ? !0 : om(e) ? !1 : om(t) ? lm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fy(e) {
      return e && e.ownerDocument && lm(e.ownerDocument.documentElement, e);
    }
    function dy(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function um() {
      for (var e = window, t = Ps(); t instanceof e.HTMLIFrameElement; ) {
        if (dy(t))
          e = t.contentWindow;
        else
          return t;
        t = Ps(e.document);
      }
      return t;
    }
    function Ah(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function py() {
      var e = um();
      return {
        focusedElem: e,
        selectionRange: Ah(e) ? hy(e) : null
      };
    }
    function vy(e) {
      var t = um(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fy(a)) {
        i !== null && Ah(a) && my(a, i);
        for (var l = [], c = a; c = c.parentNode; )
          c.nodeType === Or && l.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var g = l[v];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function hy(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ao(e), t || {
        start: 0,
        end: 0
      };
    }
    function my(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : cy(e, t);
    }
    var yy = Ie && "documentMode" in document && document.documentMode <= 11;
    function gy() {
      ut("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Jc = null, zh = null, u1 = null, Hh = !1;
    function Cy(e) {
      if ("selectionStart" in e && Ah(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function xy(e) {
      return e.window === e ? e.document : e.nodeType === Oa ? e : e.ownerDocument;
    }
    function sm(e, t, a) {
      var i = xy(a);
      if (!(Hh || Jc == null || Jc !== Ps(i))) {
        var l = Cy(Jc);
        if (!u1 || !Ve(u1, l)) {
          u1 = l;
          var c = Gp(zh, "onSelect");
          if (c.length > 0) {
            var v = new fr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: c
            }), v.target = Jc;
          }
        }
      }
    }
    function Sy(e, t, a, i, l, c, v) {
      var g = a ? af(a) : window;
      switch (t) {
        case "focusin":
          (Wl(g) || g.contentEditable === "true") && (Jc = g, zh = a, u1 = null);
          break;
        case "focusout":
          Jc = null, zh = null, u1 = null;
          break;
        case "mousedown":
          Hh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hh = !1, sm(e, i, l);
          break;
        case "selectionchange":
          if (yy)
            break;
        case "keydown":
        case "keyup":
          sm(e, i, l);
      }
    }
    function Zp(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ef = {
      animationend: Zp("Animation", "AnimationEnd"),
      animationiteration: Zp("Animation", "AnimationIteration"),
      animationstart: Zp("Animation", "AnimationStart"),
      transitionend: Zp("Transition", "TransitionEnd")
    }, Uh = {}, cm = {};
    Ie && (cm = document.createElement("div").style, "AnimationEvent" in window || (delete ef.animationend.animation, delete ef.animationiteration.animation, delete ef.animationstart.animation), "TransitionEvent" in window || delete ef.transitionend.transition);
    function Qp(e) {
      if (Uh[e])
        return Uh[e];
      if (!ef[e])
        return e;
      var t = ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in cm)
          return Uh[e] = t[a];
      return e;
    }
    var fm = Qp("animationend"), dm = Qp("animationiteration"), pm = Qp("animationstart"), vm = Qp("transitionend"), hm = /* @__PURE__ */ new Map(), mm = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Gl(e, t) {
      hm.set(e, t), ut(t, [e]);
    }
    function wy() {
      for (var e = 0; e < mm.length; e++) {
        var t = mm[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Gl(a, "on" + i);
      }
      Gl(fm, "onAnimationEnd"), Gl(dm, "onAnimationIteration"), Gl(pm, "onAnimationStart"), Gl("dblclick", "onDoubleClick"), Gl("focusin", "onFocus"), Gl("focusout", "onBlur"), Gl(vm, "onTransitionEnd");
    }
    function by(e, t, a, i, l, c, v) {
      var g = hm.get(t);
      if (g !== void 0) {
        var S = fr, T = t;
        switch (t) {
          case "keypress":
            if (jo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            S = Rh;
            break;
          case "focusin":
            T = "focus", S = jc;
            break;
          case "focusout":
            T = "blur", S = jc;
            break;
          case "beforeblur":
          case "afterblur":
            S = jc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = no;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Yo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Ca;
            break;
          case fm:
          case dm:
          case pm:
            S = Ic;
            break;
          case vm:
            S = Dh;
            break;
          case "scroll":
            S = Kd;
            break;
          case "wheel":
            S = Zc;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = wh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = n1;
            break;
        }
        var D = (c & bo) !== 0;
        {
          var U = !D && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = ky(a, g, i.type, D, U);
          if (z.length > 0) {
            var Q = new S(g, T, null, i, l);
            e.push({
              event: Q,
              listeners: z
            });
          }
        }
      }
    }
    wy(), Z(), qc(), gy(), Bp();
    function Ey(e, t, a, i, l, c, v) {
      by(e, t, a, i, l, c);
      var g = (c & sh) === 0;
      g && (ve(e, t, a, i, l), H(e, t, a, i, l), Sy(e, t, a, i, l), Kc(e, t, a, i, l));
    }
    var s1 = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], $h = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(s1));
    function ym(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, fi(i, t, void 0, e), e.currentTarget = null;
    }
    function Ty(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var c = t[l], v = c.instance, g = c.currentTarget, S = c.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          ym(e, S, g), i = v;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var D = t[T], U = D.instance, z = D.currentTarget, Q = D.listener;
          if (U !== i && e.isPropagationStopped())
            return;
          ym(e, Q, z), i = U;
        }
    }
    function gm(e, t) {
      for (var a = (t & bo) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], c = l.event, v = l.listeners;
        Ty(c, v, a);
      }
      Cd();
    }
    function Ry(e, t, a, i, l) {
      var c = ec(a), v = [];
      Ey(v, e, i, a, c, t), gm(v, t);
    }
    function ln(e, t) {
      $h.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nC(t), l = My(e, a);
      i.has(l) || (Cm(t, e, Au, a), i.add(l));
    }
    function Vh(e, t, a) {
      $h.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= bo), Cm(a, e, i, t);
    }
    var Wp = "_reactListening" + Math.random().toString(36).slice(2);
    function c1(e) {
      if (!e[Wp]) {
        e[Wp] = !0, Tt.forEach(function(a) {
          a !== "selectionchange" && ($h.has(a) || Vh(a, !1, e), Vh(a, !0, e));
        });
        var t = e.nodeType === Oa ? e : e.ownerDocument;
        t !== null && (t[Wp] || (t[Wp] = !0, Vh("selectionchange", !1, t)));
      }
    }
    function Cm(e, t, a, i, l) {
      var c = Pl(e, t, a), v = void 0;
      Vu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? Ci(e, t, c, v) : jl(e, t, c) : v !== void 0 ? Fc(e, t, c, v) : Xd(e, t, c);
    }
    function xm(e, t) {
      return e === t || e.nodeType === bn && e.parentNode === t;
    }
    function Fh(e, t, a, i, l) {
      var c = i;
      if (!(t & si) && !(t & Au)) {
        var v = l;
        if (i !== null) {
          var g = i;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var S = g.tag;
              if (S === R || S === M) {
                var T = g.stateNode.containerInfo;
                if (xm(T, v))
                  break;
                if (S === M)
                  for (var D = g.return; D !== null; ) {
                    var U = D.tag;
                    if (U === R || U === M) {
                      var z = D.stateNode.containerInfo;
                      if (xm(z, v))
                        return;
                    }
                    D = D.return;
                  }
                for (; T !== null; ) {
                  var Q = ds(T);
                  if (Q === null)
                    return;
                  var W = Q.tag;
                  if (W === L || W === _) {
                    g = c = Q;
                    continue e;
                  }
                  T = T.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      hd(function() {
        return Ry(e, t, a, c);
      });
    }
    function f1(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ky(e, t, a, i, l, c) {
      for (var v = t !== null ? t + "Capture" : null, g = i ? v : t, S = [], T = e, D = null; T !== null; ) {
        var U = T, z = U.stateNode, Q = U.tag;
        if (Q === L && z !== null && (D = z, g !== null)) {
          var W = To(T, g);
          W != null && S.push(f1(T, W, D));
        }
        if (l)
          break;
        T = T.return;
      }
      return S;
    }
    function Gp(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var c = l, v = c.stateNode, g = c.tag;
        if (g === L && v !== null) {
          var S = v, T = To(l, a);
          T != null && i.unshift(f1(l, T, S));
          var D = To(l, t);
          D != null && i.push(f1(l, D, S));
        }
        l = l.return;
      }
      return i;
    }
    function tf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== L);
      return e || null;
    }
    function Dy(e, t) {
      for (var a = e, i = t, l = 0, c = a; c; c = tf(c))
        l++;
      for (var v = 0, g = i; g; g = tf(g))
        v++;
      for (; l - v > 0; )
        a = tf(a), l--;
      for (; v - l > 0; )
        i = tf(i), v--;
      for (var S = l; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = tf(a), i = tf(i);
      }
      return null;
    }
    function Sm(e, t, a, i, l) {
      for (var c = t._reactName, v = [], g = a; g !== null && g !== i; ) {
        var S = g, T = S.alternate, D = S.stateNode, U = S.tag;
        if (T !== null && T === i)
          break;
        if (U === L && D !== null) {
          var z = D;
          if (l) {
            var Q = To(g, c);
            Q != null && v.unshift(f1(g, Q, z));
          } else if (!l) {
            var W = To(g, c);
            W != null && v.push(f1(g, W, z));
          }
        }
        g = g.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function Ly(e, t, a, i, l) {
      var c = i && l ? Dy(i, l) : null;
      i !== null && Sm(e, t, i, c, !1), l !== null && a !== null && Sm(e, a, l, c, !0);
    }
    function My(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var xa = !1, d1 = "dangerouslySetInnerHTML", Xp = "suppressContentEditableWarning", Xl = "suppressHydrationWarning", wm = "autoFocus", cs = "children", fs = "style", Kp = "__html", Ph, qp, p1, bm, Jp, Em, Tm;
    Ph = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, qp = function(e, t) {
      Js(e, t), cd(e, t), lp(e, t, {
        registrationNameDependencies: wt,
        possibleRegistrationNames: hn
      });
    }, Em = Ie && !document.documentMode, p1 = function(e, t, a) {
      if (!xa) {
        var i = e0(a), l = e0(t);
        l !== i && (xa = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, bm = function(e) {
      if (!xa) {
        xa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Jp = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Tm = function(e, t) {
      var a = e.namespaceURI === oi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Oy = /\r\n?/g, Ny = /\u0000|\uFFFD/g;
    function e0(e) {
      kr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Oy, `
`).replace(Ny, "");
    }
    function t0(e, t, a, i) {
      var l = e0(t), c = e0(e);
      if (c !== l && (i && (xa || (xa = !0, h('Text content did not match. Server: "%s" Client: "%s"', c, l))), a && ot))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Rm(e) {
      return e.nodeType === Oa ? e : e.ownerDocument;
    }
    function _y() {
    }
    function n0(e) {
      e.onclick = _y;
    }
    function Ay(e, t, a, i, l) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var v = i[c];
          if (c === fs)
            v && Object.freeze(v), K2(t, v);
          else if (c === d1) {
            var g = v ? v[Kp] : void 0;
            g != null && F2(t, g);
          } else if (c === cs)
            if (typeof v == "string") {
              var S = e !== "textarea" || v !== "";
              S && Gs(t, v);
            } else
              typeof v == "number" && Gs(t, "" + v);
          else
            c === Xp || c === Xl || c === wm || (wt.hasOwnProperty(c) ? v != null && (typeof v != "function" && Jp(c, v), c === "onScroll" && ln("scroll", t)) : v != null && yo(t, c, v, l));
        }
    }
    function zy(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var c = t[l], v = t[l + 1];
        c === fs ? K2(e, v) : c === d1 ? F2(e, v) : c === cs ? Gs(e, v) : yo(e, c, v, i);
      }
    }
    function Hy(e, t, a, i) {
      var l, c = Rm(a), v, g = i;
      if (g === oi && (g = Qs(e)), g === oi) {
        if (l = ui(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = c.createElement("div");
          S.innerHTML = "<script><\/script>";
          var T = S.firstChild;
          v = S.removeChild(T);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var D = v;
          t.multiple ? D.multiple = !0 : t.size && (D.size = t.size);
        }
      } else
        v = c.createElementNS(g, e);
      return g === oi && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !st.call(Ph, e) && (Ph[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function Uy(e, t) {
      return Rm(t).createTextNode(e);
    }
    function $y(e, t, a, i) {
      var l = ui(t, a);
      qp(t, a);
      var c;
      switch (t) {
        case "dialog":
          ln("cancel", e), ln("close", e), c = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          ln("load", e), c = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < s1.length; v++)
            ln(s1[v], e);
          c = a;
          break;
        case "source":
          ln("error", e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          ln("error", e), ln("load", e), c = a;
          break;
        case "details":
          ln("toggle", e), c = a;
          break;
        case "input":
          Du(e, a), c = ku(e, a), ln("invalid", e);
          break;
        case "option":
          Ys(e, a), c = a;
          break;
        case "select":
          H2(e, a), c = Jf(e, a), ln("invalid", e);
          break;
        case "textarea":
          U2(e, a), c = td(e, a), ln("invalid", e);
          break;
        default:
          c = a;
      }
      switch (Ks(t, c), Ay(t, e, i, c, l), t) {
        case "input":
          xo(e), Lu(e, a, !1);
          break;
        case "textarea":
          xo(e), V2(e);
          break;
        case "option":
          qf(e, a);
          break;
        case "select":
          qv(e, a);
          break;
        default:
          typeof c.onClick == "function" && n0(e);
          break;
      }
    }
    function Vy(e, t, a, i, l) {
      qp(t, i);
      var c = null, v, g;
      switch (t) {
        case "input":
          v = ku(e, a), g = ku(e, i), c = [];
          break;
        case "select":
          v = Jf(e, a), g = Jf(e, i), c = [];
          break;
        case "textarea":
          v = td(e, a), g = td(e, i), c = [];
          break;
        default:
          v = a, g = i, typeof v.onClick != "function" && typeof g.onClick == "function" && n0(e);
          break;
      }
      Ks(t, g);
      var S, T, D = null;
      for (S in v)
        if (!(g.hasOwnProperty(S) || !v.hasOwnProperty(S) || v[S] == null))
          if (S === fs) {
            var U = v[S];
            for (T in U)
              U.hasOwnProperty(T) && (D || (D = {}), D[T] = "");
          } else
            S === d1 || S === cs || S === Xp || S === Xl || S === wm || (wt.hasOwnProperty(S) ? c || (c = []) : (c = c || []).push(S, null));
      for (S in g) {
        var z = g[S], Q = v != null ? v[S] : void 0;
        if (!(!g.hasOwnProperty(S) || z === Q || z == null && Q == null))
          if (S === fs)
            if (z && Object.freeze(z), Q) {
              for (T in Q)
                Q.hasOwnProperty(T) && (!z || !z.hasOwnProperty(T)) && (D || (D = {}), D[T] = "");
              for (T in z)
                z.hasOwnProperty(T) && Q[T] !== z[T] && (D || (D = {}), D[T] = z[T]);
            } else
              D || (c || (c = []), c.push(S, D)), D = z;
          else if (S === d1) {
            var W = z ? z[Kp] : void 0, q = Q ? Q[Kp] : void 0;
            W != null && q !== W && (c = c || []).push(S, W);
          } else
            S === cs ? (typeof z == "string" || typeof z == "number") && (c = c || []).push(S, "" + z) : S === Xp || S === Xl || (wt.hasOwnProperty(S) ? (z != null && (typeof z != "function" && Jp(S, z), S === "onScroll" && ln("scroll", e)), !c && Q !== z && (c = [])) : (c = c || []).push(S, z));
      }
      return D && (Nu(D, g[fs]), (c = c || []).push(fs, D)), c;
    }
    function Fy(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Kf(e, l);
      var c = ui(a, i), v = ui(a, l);
      switch (zy(e, t, c, v), a) {
        case "input":
          gl(e, l);
          break;
        case "textarea":
          $2(e, l);
          break;
        case "select":
          Jv(e, l);
          break;
      }
    }
    function Py(e) {
      {
        var t = e.toLowerCase();
        return qs.hasOwnProperty(t) && qs[t] || null;
      }
    }
    function By(e, t, a, i, l, c, v) {
      var g, S;
      switch (g = ui(t, a), qp(t, a), t) {
        case "dialog":
          ln("cancel", e), ln("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ln("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < s1.length; T++)
            ln(s1[T], e);
          break;
        case "source":
          ln("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ln("error", e), ln("load", e);
          break;
        case "details":
          ln("toggle", e);
          break;
        case "input":
          Du(e, a), ln("invalid", e);
          break;
        case "option":
          Ys(e, a);
          break;
        case "select":
          H2(e, a), ln("invalid", e);
          break;
        case "textarea":
          U2(e, a), ln("invalid", e);
          break;
      }
      Ks(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var D = e.attributes, U = 0; U < D.length; U++) {
          var z = D[U].name.toLowerCase();
          switch (z) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(D[U].name);
          }
        }
      }
      var Q = null;
      for (var W in a)
        if (a.hasOwnProperty(W)) {
          var q = a[W];
          if (W === cs)
            typeof q == "string" ? e.textContent !== q && (a[Xl] !== !0 && t0(e.textContent, q, c, v), Q = [cs, q]) : typeof q == "number" && e.textContent !== "" + q && (a[Xl] !== !0 && t0(e.textContent, q, c, v), Q = [cs, "" + q]);
          else if (wt.hasOwnProperty(W))
            q != null && (typeof q != "function" && Jp(W, q), W === "onScroll" && ln("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var De = void 0, je = g && lt ? null : Yr(W);
            if (a[Xl] !== !0) {
              if (!(W === Xp || W === Xl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              W === "value" || W === "checked" || W === "selected")) {
                if (W === d1) {
                  var $e = e.innerHTML, yt = q ? q[Kp] : void 0;
                  if (yt != null) {
                    var vt = Tm(e, yt);
                    vt !== $e && p1(W, $e, vt);
                  }
                } else if (W === fs) {
                  if (S.delete(W), Em) {
                    var j = lh(q);
                    De = e.getAttribute("style"), j !== De && p1(W, De, j);
                  }
                } else if (g && !lt)
                  S.delete(W.toLowerCase()), De = Hs(e, W, q), q !== De && p1(W, De, q);
                else if (!un(W, je, g) && !qt(W, q, je, g)) {
                  var J = !1;
                  if (je !== null)
                    S.delete(je.attributeName), De = yu(e, W, q, je);
                  else {
                    var I = i;
                    if (I === oi && (I = Qs(t)), I === oi)
                      S.delete(W.toLowerCase());
                    else {
                      var fe = Py(W);
                      fe !== null && fe !== W && (J = !0, S.delete(fe)), S.delete(W);
                    }
                    De = Hs(e, W, q);
                  }
                  var Le = lt;
                  !Le && q !== De && !J && p1(W, De, q);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Xl] !== !0 && bm(S), t) {
        case "input":
          xo(e), Lu(e, a, !0);
          break;
        case "textarea":
          xo(e), V2(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && n0(e);
          break;
      }
      return Q;
    }
    function jy(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Bh(e, t) {
      {
        if (xa)
          return;
        xa = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function jh(e, t) {
      {
        if (xa)
          return;
        xa = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ih(e, t, a) {
      {
        if (xa)
          return;
        xa = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Yh(e, t) {
      {
        if (t === "" || xa)
          return;
        xa = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Iy(e, t, a) {
      switch (t) {
        case "input":
          N2(e, a);
          return;
        case "textarea":
          nd(e, a);
          return;
        case "select":
          eh(e, a);
          return;
      }
    }
    var v1 = function() {
    }, h1 = function() {
    };
    {
      var Yy = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], km = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Zy = km.concat(["button"]), Qy = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Dm = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      h1 = function(e, t) {
        var a = dt({}, e || Dm), i = {
          tag: t
        };
        return km.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Zy.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Yy.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Wy = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Qy.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Gy = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, Lm = {};
      v1 = function(e, t, a) {
        a = a || Dm;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = Wy(e, l) ? null : i, v = c ? null : Gy(e, a), g = c || v;
        if (g) {
          var S = g.tag, T = !!c + "|" + e + "|" + S;
          if (!Lm[T]) {
            Lm[T] = !0;
            var D = e, U = "";
            if (e === "#text" ? /\S/.test(t) ? D = "Text nodes" : (D = "Whitespace text nodes", U = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : D = "<" + e + ">", c) {
              var z = "";
              S === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", D, S, U, z);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", D, S);
          }
        }
      };
    }
    var r0 = "suppressHydrationWarning", a0 = "$", i0 = "/$", m1 = "$?", y1 = "$!", Xy = "style", Zh = null, Qh = null;
    function Ky(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Oa:
        case So: {
          t = i === Oa ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : ad(null, "");
          break;
        }
        default: {
          var c = i === bn ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, a = ad(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), S = h1(null, g);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function qy(e, t, a) {
      {
        var i = e, l = ad(i.namespace, t), c = h1(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: c
        };
      }
    }
    function gk(e) {
      return e;
    }
    function Jy(e) {
      Zh = qr(), Qh = py();
      var t = null;
      return Fn(!1), t;
    }
    function eg(e) {
      vy(Qh), Fn(Zh), Zh = null, Qh = null;
    }
    function tg(e, t, a, i, l) {
      var c;
      {
        var v = i;
        if (v1(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, S = h1(v.ancestorInfo, e);
          v1(null, g, S);
        }
        c = v.namespace;
      }
      var T = Hy(e, t, a, c);
      return x1(l, T), t5(T, t), T;
    }
    function ng(e, t) {
      e.appendChild(t);
    }
    function rg(e, t, a, i, l) {
      switch ($y(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function ag(e, t, a, i, l, c) {
      {
        var v = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var g = "" + i.children, S = h1(v.ancestorInfo, t);
          v1(null, g, S);
        }
      }
      return Vy(e, t, a, i);
    }
    function Wh(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ig(e, t, a, i) {
      {
        var l = a;
        v1(null, e, l.ancestorInfo);
      }
      var c = Uy(e, t);
      return x1(i, c), c;
    }
    function og() {
      var e = window.event;
      return e === void 0 ? mi : mr(e.type);
    }
    var Gh = typeof setTimeout == "function" ? setTimeout : void 0, lg = typeof clearTimeout == "function" ? clearTimeout : void 0, Xh = -1, Mm = typeof Promise == "function" ? Promise : void 0, ug = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mm < "u" ? function(e) {
      return Mm.resolve(null).then(e).catch(sg);
    } : Gh;
    function sg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cg(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function fg(e, t, a, i, l, c) {
      Fy(e, t, a, i, l), t5(e, l);
    }
    function Om(e) {
      Gs(e, "");
    }
    function dg(e, t, a) {
      e.nodeValue = a;
    }
    function pg(e, t) {
      e.appendChild(t);
    }
    function vg(e, t) {
      var a;
      e.nodeType === bn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && n0(a);
    }
    function hg(e, t, a) {
      e.insertBefore(t, a);
    }
    function mg(e, t, a) {
      e.nodeType === bn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yg(e, t) {
      e.removeChild(t);
    }
    function gg(e, t) {
      e.nodeType === bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Kh(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === bn) {
          var c = l.data;
          if (c === i0)
            if (i === 0) {
              e.removeChild(l), pt(t);
              return;
            } else
              i--;
          else
            (c === a0 || c === m1 || c === y1) && i++;
        }
        a = l;
      } while (a);
      pt(t);
    }
    function Cg(e, t) {
      e.nodeType === bn ? Kh(e.parentNode, t) : e.nodeType === Or && Kh(e, t), pt(e);
    }
    function xg(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Sg(e) {
      e.nodeValue = "";
    }
    function wg(e, t) {
      e = e;
      var a = t[Xy], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Xs("display", i);
    }
    function bg(e, t) {
      e.nodeValue = t;
    }
    function Eg(e) {
      e.nodeType === Or ? e.textContent = "" : e.nodeType === Oa && e.documentElement && e.removeChild(e.documentElement);
    }
    function Tg(e, t, a) {
      return e.nodeType !== Or || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Rg(e, t) {
      return t === "" || e.nodeType !== li ? null : e;
    }
    function kg(e) {
      return e.nodeType !== bn ? null : e;
    }
    function Nm(e) {
      return e.data === m1;
    }
    function qh(e) {
      return e.data === y1;
    }
    function Dg(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function Lg(e, t) {
      e._reactRetry = t;
    }
    function o0(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Or || t === li)
          break;
        if (t === bn) {
          var a = e.data;
          if (a === a0 || a === y1 || a === m1)
            break;
          if (a === i0)
            return null;
        }
      }
      return e;
    }
    function g1(e) {
      return o0(e.nextSibling);
    }
    function Mg(e) {
      return o0(e.firstChild);
    }
    function Og(e) {
      return o0(e.firstChild);
    }
    function Ng(e) {
      return o0(e.nextSibling);
    }
    function _g(e, t, a, i, l, c, v) {
      x1(c, e), t5(e, a);
      var g;
      {
        var S = l;
        g = S.namespace;
      }
      var T = (c.mode & ct) !== Ze;
      return By(e, t, a, g, i, T, v);
    }
    function Ag(e, t, a, i) {
      return x1(a, e), a.mode & ct, jy(e, t);
    }
    function zg(e, t) {
      x1(t, e);
    }
    function Hg(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === i0) {
            if (a === 0)
              return g1(t);
            a--;
          } else
            (i === a0 || i === y1 || i === m1) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function _m(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === a0 || i === y1 || i === m1) {
            if (a === 0)
              return t;
            a--;
          } else
            i === i0 && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ug(e) {
      pt(e);
    }
    function $g(e) {
      pt(e);
    }
    function Vg(e) {
      return e !== "head" && e !== "body";
    }
    function Fg(e, t, a, i) {
      var l = !0;
      t0(t.nodeValue, a, i, l);
    }
    function Pg(e, t, a, i, l, c) {
      if (t[r0] !== !0) {
        var v = !0;
        t0(i.nodeValue, l, c, v);
      }
    }
    function Bg(e, t) {
      t.nodeType === Or ? Bh(e, t) : t.nodeType === bn || jh(e, t);
    }
    function jg(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Or ? Bh(a, t) : t.nodeType === bn || jh(a, t));
      }
    }
    function Ig(e, t, a, i, l) {
      (l || t[r0] !== !0) && (i.nodeType === Or ? Bh(a, i) : i.nodeType === bn || jh(a, i));
    }
    function Yg(e, t, a) {
      Ih(e, t);
    }
    function Zg(e, t) {
      Yh(e, t);
    }
    function Qg(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ih(i, t);
      }
    }
    function Wg(e, t) {
      {
        var a = e.parentNode;
        a !== null && Yh(a, t);
      }
    }
    function Gg(e, t, a, i, l, c) {
      (c || t[r0] !== !0) && Ih(a, i);
    }
    function Xg(e, t, a, i, l) {
      (l || t[r0] !== !0) && Yh(a, i);
    }
    function Kg(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function qg(e) {
      c1(e);
    }
    var nf = Math.random().toString(36).slice(2), rf = "__reactFiber$" + nf, Jh = "__reactProps$" + nf, C1 = "__reactContainer$" + nf, e5 = "__reactEvents$" + nf, Jg = "__reactListeners$" + nf, eC = "__reactHandles$" + nf;
    function tC(e) {
      delete e[rf], delete e[Jh], delete e[e5], delete e[Jg], delete e[eC];
    }
    function x1(e, t) {
      t[rf] = e;
    }
    function l0(e, t) {
      t[C1] = e;
    }
    function Am(e) {
      e[C1] = null;
    }
    function S1(e) {
      return !!e[C1];
    }
    function ds(e) {
      var t = e[rf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[C1] || a[rf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = _m(e); l !== null; ) {
              var c = l[rf];
              if (c)
                return c;
              l = _m(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Kl(e) {
      var t = e[rf] || e[C1];
      return t && (t.tag === L || t.tag === _ || t.tag === K || t.tag === R) ? t : null;
    }
    function af(e) {
      if (e.tag === L || e.tag === _)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function u0(e) {
      return e[Jh] || null;
    }
    function t5(e, t) {
      e[Jh] = t;
    }
    function nC(e) {
      var t = e[e5];
      return t === void 0 && (t = e[e5] = /* @__PURE__ */ new Set()), t;
    }
    var zm = {}, Hm = f.ReactDebugCurrentFrame;
    function s0(e) {
      if (e) {
        var t = e._owner, a = Su(e.type, e._source, t ? t.type : null);
        Hm.setExtraStackFrame(a);
      } else
        Hm.setExtraStackFrame(null);
    }
    function Si(e, t, a, i, l) {
      {
        var c = Function.call.bind(st);
        for (var v in e)
          if (c(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var S = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              g = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              g = T;
            }
            g && !(g instanceof Error) && (s0(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof g), s0(null)), g instanceof Error && !(g.message in zm) && (zm[g.message] = !0, s0(l), h("Failed %s type: %s", a, g.message), s0(null));
          }
      }
    }
    var n5 = [], c0;
    c0 = [];
    var Go = -1;
    function ql(e) {
      return {
        current: e
      };
    }
    function Fr(e, t) {
      if (Go < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== c0[Go] && h("Unexpected Fiber popped."), e.current = n5[Go], n5[Go] = null, c0[Go] = null, Go--;
    }
    function Pr(e, t, a) {
      Go++, n5[Go] = e.current, c0[Go] = a, e.current = t;
    }
    var r5;
    r5 = {};
    var Ha = {};
    Object.freeze(Ha);
    var Xo = ql(Ha), io = ql(!1), a5 = Ha;
    function of(e, t, a) {
      return a && oo(t) ? a5 : Xo.current;
    }
    function Um(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function lf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ha;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in i)
          c[v] = t[v];
        {
          var g = rt(e) || "Unknown";
          Si(i, c, "context", g);
        }
        return l && Um(e, t, c), c;
      }
    }
    function f0() {
      return io.current;
    }
    function oo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function d0(e) {
      Fr(io, e), Fr(Xo, e);
    }
    function i5(e) {
      Fr(io, e), Fr(Xo, e);
    }
    function $m(e, t, a) {
      {
        if (Xo.current !== Ha)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Pr(Xo, t, e), Pr(io, a, e);
      }
    }
    function Vm(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = rt(e) || "Unknown";
            r5[c] || (r5[c] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var g in v)
          if (!(g in l))
            throw new Error((rt(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var S = rt(e) || "Unknown";
          Si(l, v, "child context", S);
        }
        return dt({}, a, v);
      }
    }
    function p0(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ha;
        return a5 = Xo.current, Pr(Xo, a, e), Pr(io, io.current, e), !0;
      }
    }
    function Fm(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = Vm(e, t, a5);
          i.__reactInternalMemoizedMergedChildContext = l, Fr(io, e), Fr(Xo, e), Pr(Xo, l, e), Pr(io, a, e);
        } else
          Fr(io, e), Pr(io, a, e);
      }
    }
    function rC(e) {
      {
        if (!Ed(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case R:
              return t.stateNode.context;
            case b: {
              var a = t.type;
              if (oo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Jl = 0, v0 = 1, Ko = null, o5 = !1, l5 = !1;
    function Pm(e) {
      Ko === null ? Ko = [e] : Ko.push(e);
    }
    function aC(e) {
      o5 = !0, Pm(e);
    }
    function Bm() {
      o5 && eu();
    }
    function eu() {
      if (!l5 && Ko !== null) {
        l5 = !0;
        var e = 0, t = ma();
        try {
          var a = !0, i = Ko;
          for (Mn(or); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ko = null, o5 = !1;
        } catch (c) {
          throw Ko !== null && (Ko = Ko.slice(e + 1)), lc(sc, eu), c;
        } finally {
          Mn(t), l5 = !1;
        }
      }
      return null;
    }
    var uf = [], sf = 0, h0 = null, m0 = 0, Ga = [], Xa = 0, ps = null, qo = 1, Jo = "";
    function iC(e) {
      return hs(), (e.flags & Sd) !== Be;
    }
    function oC(e) {
      return hs(), m0;
    }
    function lC() {
      var e = Jo, t = qo, a = t & ~uC(t);
      return a.toString(32) + e;
    }
    function vs(e, t) {
      hs(), uf[sf++] = m0, uf[sf++] = h0, h0 = e, m0 = t;
    }
    function jm(e, t, a) {
      hs(), Ga[Xa++] = qo, Ga[Xa++] = Jo, Ga[Xa++] = ps, ps = e;
      var i = qo, l = Jo, c = y0(i) - 1, v = i & ~(1 << c), g = a + 1, S = y0(t) + c;
      if (S > 30) {
        var T = c - c % 5, D = (1 << T) - 1, U = (v & D).toString(32), z = v >> T, Q = c - T, W = y0(t) + Q, q = g << Q, De = q | z, je = U + l;
        qo = 1 << W | De, Jo = je;
      } else {
        var $e = g << c, yt = $e | v, vt = l;
        qo = 1 << S | yt, Jo = vt;
      }
    }
    function u5(e) {
      hs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        vs(e, a), jm(e, a, i);
      }
    }
    function y0(e) {
      return 32 - hc(e);
    }
    function uC(e) {
      return 1 << y0(e) - 1;
    }
    function s5(e) {
      for (; e === h0; )
        h0 = uf[--sf], uf[sf] = null, m0 = uf[--sf], uf[sf] = null;
      for (; e === ps; )
        ps = Ga[--Xa], Ga[Xa] = null, Jo = Ga[--Xa], Ga[Xa] = null, qo = Ga[--Xa], Ga[Xa] = null;
    }
    function sC() {
      return hs(), ps !== null ? {
        id: qo,
        overflow: Jo
      } : null;
    }
    function cC(e, t) {
      hs(), Ga[Xa++] = qo, Ga[Xa++] = Jo, Ga[Xa++] = ps, qo = t.id, Jo = t.overflow, ps = e;
    }
    function hs() {
      gr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var yr = null, Ka = null, wi = !1, ms = !1, tu = null;
    function fC() {
      wi && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Im() {
      ms = !0;
    }
    function dC() {
      return ms;
    }
    function pC(e) {
      var t = e.stateNode.containerInfo;
      return Ka = Og(t), yr = e, wi = !0, tu = null, ms = !1, !0;
    }
    function vC(e, t, a) {
      return Ka = Ng(t), yr = e, wi = !0, tu = null, ms = !1, a !== null && cC(e, a), !0;
    }
    function Ym(e, t) {
      switch (e.tag) {
        case R: {
          Bg(e.stateNode.containerInfo, t);
          break;
        }
        case L: {
          var a = (e.mode & ct) !== Ze;
          Ig(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case K: {
          var i = e.memoizedState;
          i.dehydrated !== null && jg(i.dehydrated, t);
          break;
        }
      }
    }
    function Zm(e, t) {
      Ym(e, t);
      var a = yw();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Rt) : i.push(a);
    }
    function c5(e, t) {
      {
        if (ms)
          return;
        switch (e.tag) {
          case R: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case L:
                var i = t.type;
                t.pendingProps, Yg(a, i);
                break;
              case _:
                var l = t.pendingProps;
                Zg(a, l);
                break;
            }
            break;
          }
          case L: {
            var c = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case L: {
                var S = t.type, T = t.pendingProps, D = (e.mode & ct) !== Ze;
                Gg(
                  c,
                  v,
                  g,
                  S,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
              case _: {
                var U = t.pendingProps, z = (e.mode & ct) !== Ze;
                Xg(
                  c,
                  v,
                  g,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  z
                );
                break;
              }
            }
            break;
          }
          case K: {
            var Q = e.memoizedState, W = Q.dehydrated;
            if (W !== null)
              switch (t.tag) {
                case L:
                  var q = t.type;
                  t.pendingProps, Qg(W, q);
                  break;
                case _:
                  var De = t.pendingProps;
                  Wg(W, De);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Qm(e, t) {
      t.flags = t.flags & ~fa | Zt, c5(e, t);
    }
    function Wm(e, t) {
      switch (e.tag) {
        case L: {
          var a = e.type;
          e.pendingProps;
          var i = Tg(t, a);
          return i !== null ? (e.stateNode = i, yr = e, Ka = Mg(i), !0) : !1;
        }
        case _: {
          var l = e.pendingProps, c = Rg(t, l);
          return c !== null ? (e.stateNode = c, yr = e, Ka = null, !0) : !1;
        }
        case K: {
          var v = kg(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: sC(),
              retryLane: $r
            };
            e.memoizedState = g;
            var S = gw(v);
            return S.return = e, e.child = S, yr = e, Ka = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function f5(e) {
      return (e.mode & ct) !== Ze && (e.flags & qe) === Be;
    }
    function d5(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function p5(e) {
      if (wi) {
        var t = Ka;
        if (!t) {
          f5(e) && (c5(yr, e), d5()), Qm(yr, e), wi = !1, yr = e;
          return;
        }
        var a = t;
        if (!Wm(e, t)) {
          f5(e) && (c5(yr, e), d5()), t = g1(a);
          var i = yr;
          if (!t || !Wm(e, t)) {
            Qm(yr, e), wi = !1, yr = e;
            return;
          }
          Zm(i, a);
        }
      }
    }
    function hC(e, t, a) {
      var i = e.stateNode, l = !ms, c = _g(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = c, c !== null;
    }
    function mC(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Ag(t, a, e);
      if (i) {
        var l = yr;
        if (l !== null)
          switch (l.tag) {
            case R: {
              var c = l.stateNode.containerInfo, v = (l.mode & ct) !== Ze;
              Fg(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case L: {
              var g = l.type, S = l.memoizedProps, T = l.stateNode, D = (l.mode & ct) !== Ze;
              Pg(
                g,
                S,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                D
              );
              break;
            }
          }
      }
      return i;
    }
    function yC(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zg(a, e);
    }
    function gC(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Hg(a);
    }
    function Gm(e) {
      for (var t = e.return; t !== null && t.tag !== L && t.tag !== R && t.tag !== K; )
        t = t.return;
      yr = t;
    }
    function g0(e) {
      if (e !== yr)
        return !1;
      if (!wi)
        return Gm(e), wi = !0, !1;
      if (e.tag !== R && (e.tag !== L || Vg(e.type) && !Wh(e.type, e.memoizedProps))) {
        var t = Ka;
        if (t)
          if (f5(e))
            Xm(e), d5();
          else
            for (; t; )
              Zm(e, t), t = g1(t);
      }
      return Gm(e), e.tag === K ? Ka = gC(e) : Ka = yr ? g1(e.stateNode) : null, !0;
    }
    function CC() {
      return wi && Ka !== null;
    }
    function Xm(e) {
      for (var t = Ka; t; )
        Ym(e, t), t = g1(t);
    }
    function cf() {
      yr = null, Ka = null, wi = !1, ms = !1;
    }
    function Km() {
      tu !== null && (Y8(tu), tu = null);
    }
    function gr() {
      return wi;
    }
    function v5(e) {
      tu === null ? tu = [e] : tu.push(e);
    }
    var xC = f.ReactCurrentBatchConfig, SC = null;
    function wC() {
      return xC.transition;
    }
    var bi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var bC = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & an && (t = a), a = a.return;
        return t;
      }, ys = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, w1 = [], b1 = [], E1 = [], T1 = [], R1 = [], k1 = [], gs = /* @__PURE__ */ new Set();
      bi.recordUnsafeLifecycleWarnings = function(e, t) {
        gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && w1.push(e), e.mode & an && typeof t.UNSAFE_componentWillMount == "function" && b1.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && E1.push(e), e.mode & an && typeof t.UNSAFE_componentWillReceiveProps == "function" && T1.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && R1.push(e), e.mode & an && typeof t.UNSAFE_componentWillUpdate == "function" && k1.push(e));
      }, bi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        w1.length > 0 && (w1.forEach(function(z) {
          e.add(rt(z) || "Component"), gs.add(z.type);
        }), w1 = []);
        var t = /* @__PURE__ */ new Set();
        b1.length > 0 && (b1.forEach(function(z) {
          t.add(rt(z) || "Component"), gs.add(z.type);
        }), b1 = []);
        var a = /* @__PURE__ */ new Set();
        E1.length > 0 && (E1.forEach(function(z) {
          a.add(rt(z) || "Component"), gs.add(z.type);
        }), E1 = []);
        var i = /* @__PURE__ */ new Set();
        T1.length > 0 && (T1.forEach(function(z) {
          i.add(rt(z) || "Component"), gs.add(z.type);
        }), T1 = []);
        var l = /* @__PURE__ */ new Set();
        R1.length > 0 && (R1.forEach(function(z) {
          l.add(rt(z) || "Component"), gs.add(z.type);
        }), R1 = []);
        var c = /* @__PURE__ */ new Set();
        if (k1.length > 0 && (k1.forEach(function(z) {
          c.add(rt(z) || "Component"), gs.add(z.type);
        }), k1 = []), t.size > 0) {
          var v = ys(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var g = ys(i);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (c.size > 0) {
          var S = ys(c);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var T = ys(e);
          x(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var D = ys(a);
          x(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (l.size > 0) {
          var U = ys(l);
          x(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var C0 = /* @__PURE__ */ new Map(), qm = /* @__PURE__ */ new Set();
      bi.recordLegacyContextWarning = function(e, t) {
        var a = bC(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!qm.has(e.type)) {
          var i = C0.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], C0.set(a, i)), i.push(e));
        }
      }, bi.flushLegacyContextWarning = function() {
        C0.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(rt(c) || "Component"), qm.add(c.type);
            });
            var l = ys(i);
            try {
              zt(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              kn();
            }
          }
        });
      }, bi.discardPendingWarnings = function() {
        w1 = [], b1 = [], E1 = [], T1 = [], R1 = [], k1 = [], C0 = /* @__PURE__ */ new Map();
      };
    }
    function Ei(e, t) {
      if (e && e.defaultProps) {
        var a = dt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var h5 = ql(null), m5;
    m5 = {};
    var x0 = null, ff = null, y5 = null, S0 = !1;
    function w0() {
      x0 = null, ff = null, y5 = null, S0 = !1;
    }
    function Jm() {
      S0 = !0;
    }
    function e6() {
      S0 = !1;
    }
    function t6(e, t, a) {
      Pr(h5, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== m5 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = m5;
    }
    function g5(e, t) {
      var a = h5.current;
      Fr(h5, t), e._currentValue = a;
    }
    function C5(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if ($o(i.childLanes, t) ? l !== null && !$o(l.childLanes, t) && (l.childLanes = it(l.childLanes, t)) : (i.childLanes = it(i.childLanes, t), l !== null && (l.childLanes = it(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function EC(e, t, a) {
      TC(e, t, a);
    }
    function TC(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, c = i.dependencies;
        if (c !== null) {
          l = i.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === b) {
                var g = Ln(a), S = el(Ft, g);
                S.tag = E0;
                var T = i.updateQueue;
                if (T !== null) {
                  var D = T.shared, U = D.pending;
                  U === null ? S.next = S : (S.next = U.next, U.next = S), D.pending = S;
                }
              }
              i.lanes = it(i.lanes, a);
              var z = i.alternate;
              z !== null && (z.lanes = it(z.lanes, a)), C5(i.return, a, e), c.lanes = it(c.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === Y)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === we) {
          var Q = i.return;
          if (Q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Q.lanes = it(Q.lanes, a);
          var W = Q.alternate;
          W !== null && (W.lanes = it(W.lanes, a)), C5(Q, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var q = l.sibling;
            if (q !== null) {
              q.return = l.return, l = q;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function df(e, t) {
      x0 = e, ff = null, y5 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Vr(a.lanes, t) && P1(), a.firstContext = null);
      }
    }
    function Bn(e) {
      S0 && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (y5 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (ff === null) {
          if (x0 === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          ff = a, x0.dependencies = {
            lanes: te,
            firstContext: a
          };
        } else
          ff = ff.next = a;
      }
      return t;
    }
    var Cs = null;
    function x5(e) {
      Cs === null ? Cs = [e] : Cs.push(e);
    }
    function RC() {
      if (Cs !== null) {
        for (var e = 0; e < Cs.length; e++) {
          var t = Cs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var c = l.next;
              l.next = i, a.next = c;
            }
            t.pending = a;
          }
        }
        Cs = null;
      }
    }
    function n6(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, x5(t)) : (a.next = l.next, l.next = a), t.interleaved = a, b0(e, i);
    }
    function kC(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, x5(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function DC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, x5(t)) : (a.next = l.next, l.next = a), t.interleaved = a, b0(e, i);
    }
    function Sa(e, t) {
      return b0(e, t);
    }
    var LC = b0;
    function b0(e, t) {
      e.lanes = it(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = it(a.lanes, t)), a === null && (e.flags & (Zt | fa)) !== Be && r7(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = it(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = it(a.childLanes, t) : (l.flags & (Zt | fa)) !== Be && r7(e), i = l, l = l.return;
      if (i.tag === R) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var r6 = 0, a6 = 1, E0 = 2, S5 = 3, T0 = !1, w5, R0;
    w5 = !1, R0 = null;
    function b5(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function i6(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function el(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: r6,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function nu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (R0 === l && !w5 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), w5 = !0), LS()) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, LC(e, a);
      } else
        return DC(e, l, t, a);
    }
    function k0(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Ud(a)) {
          var c = l.lanes;
          c = Vd(c, e.pendingLanes);
          var v = it(c, a);
          l.lanes = v, Hl(e, v);
        }
      }
    }
    function E5(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var c = null, v = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var S = g;
            do {
              var T = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              v === null ? c = v = T : (v.next = T, v = T), S = S.next;
            } while (S !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var D = a.lastBaseUpdate;
      D === null ? a.firstBaseUpdate = t : D.next = t, a.lastBaseUpdate = t;
    }
    function MC(e, t, a, i, l, c) {
      switch (a.tag) {
        case a6: {
          var v = a.payload;
          if (typeof v == "function") {
            Jm();
            var g = v.call(c, i, l);
            {
              if (e.mode & an) {
                Dn(!0);
                try {
                  v.call(c, i, l);
                } finally {
                  Dn(!1);
                }
              }
              e6();
            }
            return g;
          }
          return v;
        }
        case S5:
          e.flags = e.flags & ~Un | qe;
        case r6: {
          var S = a.payload, T;
          if (typeof S == "function") {
            Jm(), T = S.call(c, i, l);
            {
              if (e.mode & an) {
                Dn(!0);
                try {
                  S.call(c, i, l);
                } finally {
                  Dn(!1);
                }
              }
              e6();
            }
          } else
            T = S;
          return T == null ? i : dt({}, i, T);
        }
        case E0:
          return T0 = !0, i;
      }
      return i;
    }
    function D0(e, t, a, i) {
      var l = e.updateQueue;
      T0 = !1, R0 = l.shared;
      var c = l.firstBaseUpdate, v = l.lastBaseUpdate, g = l.shared.pending;
      if (g !== null) {
        l.shared.pending = null;
        var S = g, T = S.next;
        S.next = null, v === null ? c = T : v.next = T, v = S;
        var D = e.alternate;
        if (D !== null) {
          var U = D.updateQueue, z = U.lastBaseUpdate;
          z !== v && (z === null ? U.firstBaseUpdate = T : z.next = T, U.lastBaseUpdate = S);
        }
      }
      if (c !== null) {
        var Q = l.baseState, W = te, q = null, De = null, je = null, $e = c;
        do {
          var yt = $e.lane, vt = $e.eventTime;
          if ($o(i, yt)) {
            if (je !== null) {
              var J = {
                eventTime: vt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                tag: $e.tag,
                payload: $e.payload,
                callback: $e.callback,
                next: null
              };
              je = je.next = J;
            }
            Q = MC(e, l, $e, Q, t, a);
            var I = $e.callback;
            if (I !== null && // If the update was already committed, we should not queue its
            // callback again.
            $e.lane !== ht) {
              e.flags |= ja;
              var fe = l.effects;
              fe === null ? l.effects = [$e] : fe.push($e);
            }
          } else {
            var j = {
              eventTime: vt,
              lane: yt,
              tag: $e.tag,
              payload: $e.payload,
              callback: $e.callback,
              next: null
            };
            je === null ? (De = je = j, q = Q) : je = je.next = j, W = it(W, yt);
          }
          if ($e = $e.next, $e === null) {
            if (g = l.shared.pending, g === null)
              break;
            var Le = g, Ee = Le.next;
            Le.next = null, $e = Ee, l.lastBaseUpdate = Le, l.shared.pending = null;
          }
        } while (!0);
        je === null && (q = Q), l.baseState = q, l.firstBaseUpdate = De, l.lastBaseUpdate = je;
        var Xe = l.shared.interleaved;
        if (Xe !== null) {
          var nt = Xe;
          do
            W = it(W, nt.lane), nt = nt.next;
          while (nt !== Xe);
        } else
          c === null && (l.shared.lanes = te);
        J1(W), e.lanes = W, e.memoizedState = Q;
      }
      R0 = null;
    }
    function OC(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function o6() {
      T0 = !1;
    }
    function L0() {
      return T0;
    }
    function l6(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l], v = c.callback;
          v !== null && (c.callback = null, OC(v, a));
        }
    }
    var T5 = {}, u6 = new u.Component().refs, R5, k5, D5, L5, M5, s6, M0, O5, N5, _5;
    {
      R5 = /* @__PURE__ */ new Set(), k5 = /* @__PURE__ */ new Set(), D5 = /* @__PURE__ */ new Set(), L5 = /* @__PURE__ */ new Set(), O5 = /* @__PURE__ */ new Set(), M5 = /* @__PURE__ */ new Set(), N5 = /* @__PURE__ */ new Set(), _5 = /* @__PURE__ */ new Set();
      var c6 = /* @__PURE__ */ new Set();
      M0 = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          c6.has(a) || (c6.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, s6 = function(e, t) {
        if (t === void 0) {
          var a = $t(e) || "Component";
          M5.has(a) || (M5.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(T5, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(T5);
    }
    function A5(e, t, a, i) {
      var l = e.memoizedState, c = a(i, l);
      {
        if (e.mode & an) {
          Dn(!0);
          try {
            c = a(i, l);
          } finally {
            Dn(!1);
          }
        }
        s6(t, c);
      }
      var v = c == null ? l : dt({}, l, c);
      if (e.memoizedState = v, e.lanes === te) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var z5 = {
      isMounted: Gr,
      enqueueSetState: function(e, t, a) {
        var i = sa(e), l = ta(), c = cu(i), v = el(l, c);
        v.payload = t, a != null && (M0(a, "setState"), v.callback = a);
        var g = nu(i, v, c);
        g !== null && (tr(g, i, c, l), k0(g, i, c)), Xi(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = sa(e), l = ta(), c = cu(i), v = el(l, c);
        v.tag = a6, v.payload = t, a != null && (M0(a, "replaceState"), v.callback = a);
        var g = nu(i, v, c);
        g !== null && (tr(g, i, c, l), k0(g, i, c)), Xi(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = sa(e), i = ta(), l = cu(a), c = el(i, l);
        c.tag = E0, t != null && (M0(t, "forceUpdate"), c.callback = t);
        var v = nu(a, c, l);
        v !== null && (tr(v, a, l, i), k0(v, a, l)), _d(a, l);
      }
    };
    function f6(e, t, a, i, l, c, v) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var S = g.shouldComponentUpdate(i, c, v);
        {
          if (e.mode & an) {
            Dn(!0);
            try {
              S = g.shouldComponentUpdate(i, c, v);
            } finally {
              Dn(!1);
            }
          }
          S === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", $t(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ve(a, i) || !Ve(l, c) : !0;
    }
    function NC(e, t, a) {
      var i = e.stateNode;
      {
        var l = $t(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !N5.has(t) && (N5.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", $t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !D5.has(t) && (D5.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", $t(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var g = i.state;
        g && (typeof g != "object" || zn(g)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function d6(e, t) {
      t.updater = z5, e.stateNode = t, Rl(t, e), t._reactInternalInstance = T5;
    }
    function p6(e, t, a) {
      var i = !1, l = Ha, c = Ha, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Pf && v._context === void 0
        );
        if (!g && !_5.has(t)) {
          _5.add(t);
          var S = "";
          v === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? S = " However, it is set to a " + typeof v + "." : v.$$typeof === Ff ? S = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", $t(t) || "Component", S);
        }
      }
      if (typeof v == "object" && v !== null)
        c = Bn(v);
      else {
        l = of(e, t, !0);
        var T = t.contextTypes;
        i = T != null, c = i ? lf(e, l) : Ha;
      }
      var D = new t(a, c);
      if (e.mode & an) {
        Dn(!0);
        try {
          D = new t(a, c);
        } finally {
          Dn(!1);
        }
      }
      var U = e.memoizedState = D.state !== null && D.state !== void 0 ? D.state : null;
      d6(e, D);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var z = $t(t) || "Component";
          k5.has(z) || (k5.add(z), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, D.state === null ? "null" : "undefined", z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var Q = null, W = null, q = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? Q = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (Q = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? q = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (q = "UNSAFE_componentWillUpdate"), Q !== null || W !== null || q !== null) {
            var De = $t(t) || "Component", je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            L5.has(De) || (L5.add(De), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, je, Q !== null ? `
  ` + Q : "", W !== null ? `
  ` + W : "", q !== null ? `
  ` + q : ""));
          }
        }
      }
      return i && Um(e, l, c), D;
    }
    function _C(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", rt(e) || "Component"), z5.enqueueReplaceState(t, t.state, null));
    }
    function v6(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var c = rt(e) || "Component";
          R5.has(c) || (R5.add(c), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        z5.enqueueReplaceState(t, t.state, null);
      }
    }
    function H5(e, t, a, i) {
      NC(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = u6, b5(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        l.context = Bn(c);
      else {
        var v = of(e, t, !0);
        l.context = lf(e, v);
      }
      {
        if (l.state === a) {
          var g = $t(t) || "Component";
          O5.has(g) || (O5.add(g), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & an && bi.recordLegacyContextWarning(e, l), bi.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (A5(e, t, S, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (_C(e, l), D0(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var T = at;
        T |= _r, (e.mode & va) !== Ze && (T |= Ar), e.flags |= T;
      }
    }
    function AC(e, t, a, i) {
      var l = e.stateNode, c = e.memoizedProps;
      l.props = c;
      var v = l.context, g = t.contextType, S = Ha;
      if (typeof g == "object" && g !== null)
        S = Bn(g);
      else {
        var T = of(e, t, !0);
        S = lf(e, T);
      }
      var D = t.getDerivedStateFromProps, U = typeof D == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !U && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (c !== a || v !== S) && v6(e, l, a, S), o6();
      var z = e.memoizedState, Q = l.state = z;
      if (D0(e, a, l, i), Q = e.memoizedState, c === a && z === Q && !f0() && !L0()) {
        if (typeof l.componentDidMount == "function") {
          var W = at;
          W |= _r, (e.mode & va) !== Ze && (W |= Ar), e.flags |= W;
        }
        return !1;
      }
      typeof D == "function" && (A5(e, t, D, a), Q = e.memoizedState);
      var q = L0() || f6(e, t, c, a, z, Q, S);
      if (q) {
        if (!U && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var De = at;
          De |= _r, (e.mode & va) !== Ze && (De |= Ar), e.flags |= De;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var je = at;
          je |= _r, (e.mode & va) !== Ze && (je |= Ar), e.flags |= je;
        }
        e.memoizedProps = a, e.memoizedState = Q;
      }
      return l.props = a, l.state = Q, l.context = S, q;
    }
    function zC(e, t, a, i, l) {
      var c = t.stateNode;
      i6(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : Ei(t.type, v);
      c.props = g;
      var S = t.pendingProps, T = c.context, D = a.contextType, U = Ha;
      if (typeof D == "object" && D !== null)
        U = Bn(D);
      else {
        var z = of(t, a, !0);
        U = lf(t, z);
      }
      var Q = a.getDerivedStateFromProps, W = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !W && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== S || T !== U) && v6(t, c, i, U), o6();
      var q = t.memoizedState, De = c.state = q;
      if (D0(t, i, c, l), De = t.memoizedState, v === S && q === De && !f0() && !L0() && !me)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= at), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= ca), !1;
      typeof Q == "function" && (A5(t, a, Q, i), De = t.memoizedState);
      var je = L0() || f6(t, a, g, i, q, De, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      me;
      return je ? (!W && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, De, U), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, De, U)), typeof c.componentDidUpdate == "function" && (t.flags |= at), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= ca)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= at), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= ca), t.memoizedProps = i, t.memoizedState = De), c.props = i, c.state = De, c.context = U, je;
    }
    var U5, $5, V5, F5, P5, h6 = function(e, t) {
    };
    U5 = !1, $5 = !1, V5 = {}, F5 = {}, P5 = {}, h6 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = rt(t) || "Component";
        F5[a] || (F5[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function D1(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & an || Ot) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = rt(e) || "Component";
          V5[l] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), V5[l] = !0);
        }
        if (a._owner) {
          var c = a._owner, v;
          if (c) {
            var g = c;
            if (g.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = g.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = v;
          jn(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var D = function(U) {
            var z = S.refs;
            z === u6 && (z = S.refs = {}), U === null ? delete z[T] : z[T] = U;
          };
          return D._stringRef = T, D;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function O0(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function N0(e) {
      {
        var t = rt(e) || "Component";
        if (P5[t])
          return;
        P5[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function m6(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function y6(e) {
      function t(j, J) {
        if (e) {
          var I = j.deletions;
          I === null ? (j.deletions = [J], j.flags |= Rt) : I.push(J);
        }
      }
      function a(j, J) {
        if (!e)
          return null;
        for (var I = J; I !== null; )
          t(j, I), I = I.sibling;
        return null;
      }
      function i(j, J) {
        for (var I = /* @__PURE__ */ new Map(), fe = J; fe !== null; )
          fe.key !== null ? I.set(fe.key, fe) : I.set(fe.index, fe), fe = fe.sibling;
        return I;
      }
      function l(j, J) {
        var I = ks(j, J);
        return I.index = 0, I.sibling = null, I;
      }
      function c(j, J, I) {
        if (j.index = I, !e)
          return j.flags |= Sd, J;
        var fe = j.alternate;
        if (fe !== null) {
          var Le = fe.index;
          return Le < J ? (j.flags |= Zt, J) : Le;
        } else
          return j.flags |= Zt, J;
      }
      function v(j) {
        return e && j.alternate === null && (j.flags |= Zt), j;
      }
      function g(j, J, I, fe) {
        if (J === null || J.tag !== _) {
          var Le = v4(I, j.mode, fe);
          return Le.return = j, Le;
        } else {
          var Ee = l(J, I);
          return Ee.return = j, Ee;
        }
      }
      function S(j, J, I, fe) {
        var Le = I.type;
        if (Le === ri)
          return D(j, J, I.props.children, fe, I.key);
        if (J !== null && (J.elementType === Le || // Keep this check inline so it only runs on the false path:
        l7(J, I) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Le == "object" && Le !== null && Le.$$typeof === hr && m6(Le) === J.type)) {
          var Ee = l(J, I.props);
          return Ee.ref = D1(j, J, I), Ee.return = j, Ee._debugSource = I._source, Ee._debugOwner = I._owner, Ee;
        }
        var Xe = p4(I, j.mode, fe);
        return Xe.ref = D1(j, J, I), Xe.return = j, Xe;
      }
      function T(j, J, I, fe) {
        if (J === null || J.tag !== M || J.stateNode.containerInfo !== I.containerInfo || J.stateNode.implementation !== I.implementation) {
          var Le = h4(I, j.mode, fe);
          return Le.return = j, Le;
        } else {
          var Ee = l(J, I.children || []);
          return Ee.return = j, Ee;
        }
      }
      function D(j, J, I, fe, Le) {
        if (J === null || J.tag !== $) {
          var Ee = du(I, j.mode, fe, Le);
          return Ee.return = j, Ee;
        } else {
          var Xe = l(J, I);
          return Xe.return = j, Xe;
        }
      }
      function U(j, J, I) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var fe = v4("" + J, j.mode, I);
          return fe.return = j, fe;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case fl: {
              var Le = p4(J, j.mode, I);
              return Le.ref = D1(j, null, J), Le.return = j, Le;
            }
            case ka: {
              var Ee = h4(J, j.mode, I);
              return Ee.return = j, Ee;
            }
            case hr: {
              var Xe = J._payload, nt = J._init;
              return U(j, nt(Xe), I);
            }
          }
          if (zn(J) || ai(J)) {
            var Ut = du(J, j.mode, I, null);
            return Ut.return = j, Ut;
          }
          O0(j, J);
        }
        return typeof J == "function" && N0(j), null;
      }
      function z(j, J, I, fe) {
        var Le = J !== null ? J.key : null;
        if (typeof I == "string" && I !== "" || typeof I == "number")
          return Le !== null ? null : g(j, J, "" + I, fe);
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case fl:
              return I.key === Le ? S(j, J, I, fe) : null;
            case ka:
              return I.key === Le ? T(j, J, I, fe) : null;
            case hr: {
              var Ee = I._payload, Xe = I._init;
              return z(j, J, Xe(Ee), fe);
            }
          }
          if (zn(I) || ai(I))
            return Le !== null ? null : D(j, J, I, fe, null);
          O0(j, I);
        }
        return typeof I == "function" && N0(j), null;
      }
      function Q(j, J, I, fe, Le) {
        if (typeof fe == "string" && fe !== "" || typeof fe == "number") {
          var Ee = j.get(I) || null;
          return g(J, Ee, "" + fe, Le);
        }
        if (typeof fe == "object" && fe !== null) {
          switch (fe.$$typeof) {
            case fl: {
              var Xe = j.get(fe.key === null ? I : fe.key) || null;
              return S(J, Xe, fe, Le);
            }
            case ka: {
              var nt = j.get(fe.key === null ? I : fe.key) || null;
              return T(J, nt, fe, Le);
            }
            case hr:
              var Ut = fe._payload, bt = fe._init;
              return Q(j, J, I, bt(Ut), Le);
          }
          if (zn(fe) || ai(fe)) {
            var _n = j.get(I) || null;
            return D(J, _n, fe, Le, null);
          }
          O0(J, fe);
        }
        return typeof fe == "function" && N0(J), null;
      }
      function W(j, J, I) {
        {
          if (typeof j != "object" || j === null)
            return J;
          switch (j.$$typeof) {
            case fl:
            case ka:
              h6(j, I);
              var fe = j.key;
              if (typeof fe != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(fe);
                break;
              }
              if (!J.has(fe)) {
                J.add(fe);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", fe);
              break;
            case hr:
              var Le = j._payload, Ee = j._init;
              W(Ee(Le), J, I);
              break;
          }
        }
        return J;
      }
      function q(j, J, I, fe) {
        for (var Le = null, Ee = 0; Ee < I.length; Ee++) {
          var Xe = I[Ee];
          Le = W(Xe, Le, j);
        }
        for (var nt = null, Ut = null, bt = J, _n = 0, Et = 0, Rn = null; bt !== null && Et < I.length; Et++) {
          bt.index > Et ? (Rn = bt, bt = null) : Rn = bt.sibling;
          var jr = z(j, bt, I[Et], fe);
          if (jr === null) {
            bt === null && (bt = Rn);
            break;
          }
          e && bt && jr.alternate === null && t(j, bt), _n = c(jr, _n, Et), Ut === null ? nt = jr : Ut.sibling = jr, Ut = jr, bt = Rn;
        }
        if (Et === I.length) {
          if (a(j, bt), gr()) {
            var Tr = Et;
            vs(j, Tr);
          }
          return nt;
        }
        if (bt === null) {
          for (; Et < I.length; Et++) {
            var $a = U(j, I[Et], fe);
            $a !== null && (_n = c($a, _n, Et), Ut === null ? nt = $a : Ut.sibling = $a, Ut = $a);
          }
          if (gr()) {
            var na = Et;
            vs(j, na);
          }
          return nt;
        }
        for (var ra = i(j, bt); Et < I.length; Et++) {
          var Ir = Q(ra, j, Et, I[Et], fe);
          Ir !== null && (e && Ir.alternate !== null && ra.delete(Ir.key === null ? Et : Ir.key), _n = c(Ir, _n, Et), Ut === null ? nt = Ir : Ut.sibling = Ir, Ut = Ir);
        }
        if (e && ra.forEach(function(Lf) {
          return t(j, Lf);
        }), gr()) {
          var ol = Et;
          vs(j, ol);
        }
        return nt;
      }
      function De(j, J, I, fe) {
        var Le = ai(I);
        if (typeof Le != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          I[Symbol.toStringTag] === "Generator" && ($5 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), $5 = !0), I.entries === Le && (U5 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), U5 = !0);
          var Ee = Le.call(I);
          if (Ee)
            for (var Xe = null, nt = Ee.next(); !nt.done; nt = Ee.next()) {
              var Ut = nt.value;
              Xe = W(Ut, Xe, j);
            }
        }
        var bt = Le.call(I);
        if (bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var _n = null, Et = null, Rn = J, jr = 0, Tr = 0, $a = null, na = bt.next(); Rn !== null && !na.done; Tr++, na = bt.next()) {
          Rn.index > Tr ? ($a = Rn, Rn = null) : $a = Rn.sibling;
          var ra = z(j, Rn, na.value, fe);
          if (ra === null) {
            Rn === null && (Rn = $a);
            break;
          }
          e && Rn && ra.alternate === null && t(j, Rn), jr = c(ra, jr, Tr), Et === null ? _n = ra : Et.sibling = ra, Et = ra, Rn = $a;
        }
        if (na.done) {
          if (a(j, Rn), gr()) {
            var Ir = Tr;
            vs(j, Ir);
          }
          return _n;
        }
        if (Rn === null) {
          for (; !na.done; Tr++, na = bt.next()) {
            var ol = U(j, na.value, fe);
            ol !== null && (jr = c(ol, jr, Tr), Et === null ? _n = ol : Et.sibling = ol, Et = ol);
          }
          if (gr()) {
            var Lf = Tr;
            vs(j, Lf);
          }
          return _n;
        }
        for (var a2 = i(j, Rn); !na.done; Tr++, na = bt.next()) {
          var ho = Q(a2, j, Tr, na.value, fe);
          ho !== null && (e && ho.alternate !== null && a2.delete(ho.key === null ? Tr : ho.key), jr = c(ho, jr, Tr), Et === null ? _n = ho : Et.sibling = ho, Et = ho);
        }
        if (e && a2.forEach(function(Gw) {
          return t(j, Gw);
        }), gr()) {
          var Ww = Tr;
          vs(j, Ww);
        }
        return _n;
      }
      function je(j, J, I, fe) {
        if (J !== null && J.tag === _) {
          a(j, J.sibling);
          var Le = l(J, I);
          return Le.return = j, Le;
        }
        a(j, J);
        var Ee = v4(I, j.mode, fe);
        return Ee.return = j, Ee;
      }
      function $e(j, J, I, fe) {
        for (var Le = I.key, Ee = J; Ee !== null; ) {
          if (Ee.key === Le) {
            var Xe = I.type;
            if (Xe === ri) {
              if (Ee.tag === $) {
                a(j, Ee.sibling);
                var nt = l(Ee, I.props.children);
                return nt.return = j, nt._debugSource = I._source, nt._debugOwner = I._owner, nt;
              }
            } else if (Ee.elementType === Xe || // Keep this check inline so it only runs on the false path:
            l7(Ee, I) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Xe == "object" && Xe !== null && Xe.$$typeof === hr && m6(Xe) === Ee.type) {
              a(j, Ee.sibling);
              var Ut = l(Ee, I.props);
              return Ut.ref = D1(j, Ee, I), Ut.return = j, Ut._debugSource = I._source, Ut._debugOwner = I._owner, Ut;
            }
            a(j, Ee);
            break;
          } else
            t(j, Ee);
          Ee = Ee.sibling;
        }
        if (I.type === ri) {
          var bt = du(I.props.children, j.mode, fe, I.key);
          return bt.return = j, bt;
        } else {
          var _n = p4(I, j.mode, fe);
          return _n.ref = D1(j, J, I), _n.return = j, _n;
        }
      }
      function yt(j, J, I, fe) {
        for (var Le = I.key, Ee = J; Ee !== null; ) {
          if (Ee.key === Le)
            if (Ee.tag === M && Ee.stateNode.containerInfo === I.containerInfo && Ee.stateNode.implementation === I.implementation) {
              a(j, Ee.sibling);
              var Xe = l(Ee, I.children || []);
              return Xe.return = j, Xe;
            } else {
              a(j, Ee);
              break;
            }
          else
            t(j, Ee);
          Ee = Ee.sibling;
        }
        var nt = h4(I, j.mode, fe);
        return nt.return = j, nt;
      }
      function vt(j, J, I, fe) {
        var Le = typeof I == "object" && I !== null && I.type === ri && I.key === null;
        if (Le && (I = I.props.children), typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case fl:
              return v($e(j, J, I, fe));
            case ka:
              return v(yt(j, J, I, fe));
            case hr:
              var Ee = I._payload, Xe = I._init;
              return vt(j, J, Xe(Ee), fe);
          }
          if (zn(I))
            return q(j, J, I, fe);
          if (ai(I))
            return De(j, J, I, fe);
          O0(j, I);
        }
        return typeof I == "string" && I !== "" || typeof I == "number" ? v(je(j, J, "" + I, fe)) : (typeof I == "function" && N0(j), a(j, J));
      }
      return vt;
    }
    var pf = y6(!0), g6 = y6(!1);
    function HC(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ks(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ks(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function UC(e, t) {
      for (var a = e.child; a !== null; )
        dw(a, t), a = a.sibling;
    }
    var L1 = {}, ru = ql(L1), M1 = ql(L1), _0 = ql(L1);
    function A0(e) {
      if (e === L1)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function C6() {
      var e = A0(_0.current);
      return e;
    }
    function B5(e, t) {
      Pr(_0, t, e), Pr(M1, e, e), Pr(ru, L1, e);
      var a = Ky(t);
      Fr(ru, e), Pr(ru, a, e);
    }
    function vf(e) {
      Fr(ru, e), Fr(M1, e), Fr(_0, e);
    }
    function j5() {
      var e = A0(ru.current);
      return e;
    }
    function x6(e) {
      A0(_0.current);
      var t = A0(ru.current), a = qy(t, e.type);
      t !== a && (Pr(M1, e, e), Pr(ru, a, e));
    }
    function I5(e) {
      M1.current === e && (Fr(ru, e), Fr(M1, e));
    }
    var $C = 0, S6 = 1, w6 = 1, O1 = 2, Ti = ql($C);
    function Y5(e, t) {
      return (e & t) !== 0;
    }
    function hf(e) {
      return e & S6;
    }
    function Z5(e, t) {
      return e & S6 | t;
    }
    function VC(e, t) {
      return e | t;
    }
    function au(e, t) {
      Pr(Ti, t, e);
    }
    function mf(e) {
      Fr(Ti, e);
    }
    function FC(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function z0(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === K) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Nm(i) || qh(i))
              return t;
          }
        } else if (t.tag === xe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & qe) !== Be;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var wa = (
      /*   */
      0
    ), Wn = (
      /* */
      1
    ), lo = (
      /*  */
      2
    ), Gn = (
      /*    */
      4
    ), Cr = (
      /*   */
      8
    ), Q5 = [];
    function W5() {
      for (var e = 0; e < Q5.length; e++) {
        var t = Q5[e];
        t._workInProgressVersionPrimary = null;
      }
      Q5.length = 0;
    }
    function PC(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = f.ReactCurrentDispatcher, N1 = f.ReactCurrentBatchConfig, G5, yf;
    G5 = /* @__PURE__ */ new Set();
    var xs = te, Ht = null, Xn = null, Kn = null, H0 = !1, _1 = !1, A1 = 0, BC = 0, jC = 25, re = null, qa = null, iu = -1, X5 = !1;
    function Mt() {
      {
        var e = re;
        qa === null ? qa = [e] : qa.push(e);
      }
    }
    function Ce() {
      {
        var e = re;
        qa !== null && (iu++, qa[iu] !== e && IC(e));
      }
    }
    function gf(e) {
      e != null && !zn(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function IC(e) {
      {
        var t = rt(Ht);
        if (!G5.has(t) && (G5.add(t), qa !== null)) {
          for (var a = "", i = 30, l = 0; l <= iu; l++) {
            for (var c = qa[l], v = l === iu ? e : c, g = l + 1 + ". " + c; g.length < i; )
              g += " ";
            g += v + `
`, a += g;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Br() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function K5(e, t) {
      if (X5)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ae(e[a], t[a]))
          return !1;
      return !0;
    }
    function Cf(e, t, a, i, l, c) {
      xs = c, Ht = t, qa = e !== null ? e._debugHookTypes : null, iu = -1, X5 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Re.current = I6 : qa !== null ? Re.current = j6 : Re.current = B6;
      var v = a(i, l);
      if (_1) {
        var g = 0;
        do {
          if (_1 = !1, A1 = 0, g >= jC)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, X5 = !1, Xn = null, Kn = null, t.updateQueue = null, iu = -1, Re.current = Y6, v = a(i, l);
        } while (_1);
      }
      Re.current = G0, t._debugHookTypes = qa;
      var S = Xn !== null && Xn.next !== null;
      if (xs = te, Ht = null, Xn = null, Kn = null, re = null, qa = null, iu = -1, e !== null && (e.flags & Yn) !== (t.flags & Yn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== Ze && h("Internal React error: Expected static flag was missing. Please notify the React team."), H0 = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function xf() {
      var e = A1 !== 0;
      return A1 = 0, e;
    }
    function b6(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & va) !== Ze ? t.flags &= ~(Do | Ar | Jt | at) : t.flags &= ~(Jt | at), e.lanes = zl(e.lanes, a);
    }
    function E6() {
      if (Re.current = G0, H0) {
        for (var e = Ht.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        H0 = !1;
      }
      xs = te, Ht = null, Xn = null, Kn = null, qa = null, iu = -1, re = null, U6 = !1, _1 = !1, A1 = 0;
    }
    function uo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Kn === null ? Ht.memoizedState = Kn = e : Kn = Kn.next = e, Kn;
    }
    function Ja() {
      var e;
      if (Xn === null) {
        var t = Ht.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Xn.next;
      var a;
      if (Kn === null ? a = Ht.memoizedState : a = Kn.next, a !== null)
        Kn = a, a = Kn.next, Xn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Xn = e;
        var i = {
          memoizedState: Xn.memoizedState,
          baseState: Xn.baseState,
          baseQueue: Xn.baseQueue,
          queue: Xn.queue,
          next: null
        };
        Kn === null ? Ht.memoizedState = Kn = i : Kn = Kn.next = i;
      }
      return Kn;
    }
    function T6() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function q5(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function J5(e, t, a) {
      var i = uo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var c = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = c;
      var v = c.dispatch = WC.bind(null, Ht, c);
      return [i.memoizedState, v];
    }
    function e3(e, t, a) {
      var i = Ja(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = Xn, v = c.baseQueue, g = l.pending;
      if (g !== null) {
        if (v !== null) {
          var S = v.next, T = g.next;
          v.next = T, g.next = S;
        }
        c.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = g, l.pending = null;
      }
      if (v !== null) {
        var D = v.next, U = c.baseState, z = null, Q = null, W = null, q = D;
        do {
          var De = q.lane;
          if ($o(xs, De)) {
            if (W !== null) {
              var $e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                action: q.action,
                hasEagerState: q.hasEagerState,
                eagerState: q.eagerState,
                next: null
              };
              W = W.next = $e;
            }
            if (q.hasEagerState)
              U = q.eagerState;
            else {
              var yt = q.action;
              U = e(U, yt);
            }
          } else {
            var je = {
              lane: De,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            };
            W === null ? (Q = W = je, z = U) : W = W.next = je, Ht.lanes = it(Ht.lanes, De), J1(De);
          }
          q = q.next;
        } while (q !== null && q !== D);
        W === null ? z = U : W.next = Q, Ae(U, i.memoizedState) || P1(), i.memoizedState = U, i.baseState = z, i.baseQueue = W, l.lastRenderedState = U;
      }
      var vt = l.interleaved;
      if (vt !== null) {
        var j = vt;
        do {
          var J = j.lane;
          Ht.lanes = it(Ht.lanes, J), J1(J), j = j.next;
        } while (j !== vt);
      } else
        v === null && (l.lanes = te);
      var I = l.dispatch;
      return [i.memoizedState, I];
    }
    function t3(e, t, a) {
      var i = Ja(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = l.dispatch, v = l.pending, g = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var S = v.next, T = S;
        do {
          var D = T.action;
          g = e(g, D), T = T.next;
        } while (T !== S);
        Ae(g, i.memoizedState) || P1(), i.memoizedState = g, i.baseQueue === null && (i.baseState = g), l.lastRenderedState = g;
      }
      return [g, c];
    }
    function Ck(e, t, a) {
    }
    function xk(e, t, a) {
    }
    function n3(e, t, a) {
      var i = Ht, l = uo(), c, v = gr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), yf || c !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), yf = !0);
      } else {
        if (c = t(), !yf) {
          var g = t();
          Ae(c, g) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), yf = !0);
        }
        var S = pv();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ku(S, xs) || R6(i, t, c);
      }
      l.memoizedState = c;
      var T = {
        value: c,
        getSnapshot: t
      };
      return l.queue = T, P0(D6.bind(null, i, T, e), [e]), i.flags |= Jt, z1(Wn | Cr, k6.bind(null, i, T, c, t), void 0, null), c;
    }
    function U0(e, t, a) {
      var i = Ht, l = Ja(), c = t();
      if (!yf) {
        var v = t();
        Ae(c, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), yf = !0);
      }
      var g = l.memoizedState, S = !Ae(g, c);
      S && (l.memoizedState = c, P1());
      var T = l.queue;
      if (U1(D6.bind(null, i, T, e), [e]), T.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Kn !== null && Kn.memoizedState.tag & Wn) {
        i.flags |= Jt, z1(Wn | Cr, k6.bind(null, i, T, c, t), void 0, null);
        var D = pv();
        if (D === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ku(D, xs) || R6(i, t, c);
      }
      return c;
    }
    function R6(e, t, a) {
      e.flags |= Bu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Ht.updateQueue;
      if (l === null)
        l = T6(), Ht.updateQueue = l, l.stores = [i];
      else {
        var c = l.stores;
        c === null ? l.stores = [i] : c.push(i);
      }
    }
    function k6(e, t, a, i) {
      t.value = a, t.getSnapshot = i, L6(t) && M6(e);
    }
    function D6(e, t, a) {
      var i = function() {
        L6(t) && M6(e);
      };
      return a(i);
    }
    function L6(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ae(a, i);
      } catch {
        return !0;
      }
    }
    function M6(e) {
      var t = Sa(e, We);
      t !== null && tr(t, e, We, Ft);
    }
    function $0(e) {
      var t = uo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: q5,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = GC.bind(null, Ht, a);
      return [t.memoizedState, i];
    }
    function r3(e) {
      return e3(q5);
    }
    function a3(e) {
      return t3(q5);
    }
    function z1(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = Ht.updateQueue;
      if (c === null)
        c = T6(), Ht.updateQueue = c, c.lastEffect = l.next = l;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = l.next = l;
        else {
          var g = v.next;
          v.next = l, l.next = g, c.lastEffect = l;
        }
      }
      return l;
    }
    function i3(e) {
      var t = uo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function V0(e) {
      var t = Ja();
      return t.memoizedState;
    }
    function H1(e, t, a, i) {
      var l = uo(), c = i === void 0 ? null : i;
      Ht.flags |= e, l.memoizedState = z1(Wn | t, a, void 0, c);
    }
    function F0(e, t, a, i) {
      var l = Ja(), c = i === void 0 ? null : i, v = void 0;
      if (Xn !== null) {
        var g = Xn.memoizedState;
        if (v = g.destroy, c !== null) {
          var S = g.deps;
          if (K5(c, S)) {
            l.memoizedState = z1(t, a, v, c);
            return;
          }
        }
      }
      Ht.flags |= e, l.memoizedState = z1(Wn | t, a, v, c);
    }
    function P0(e, t) {
      return (Ht.mode & va) !== Ze ? H1(Do | Jt | Ii, Cr, e, t) : H1(Jt | Ii, Cr, e, t);
    }
    function U1(e, t) {
      return F0(Jt, Cr, e, t);
    }
    function o3(e, t) {
      return H1(at, lo, e, t);
    }
    function B0(e, t) {
      return F0(at, lo, e, t);
    }
    function l3(e, t) {
      var a = at;
      return a |= _r, (Ht.mode & va) !== Ze && (a |= Ar), H1(a, Gn, e, t);
    }
    function j0(e, t) {
      return F0(at, Gn, e, t);
    }
    function O6(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var c = e();
        return l.current = c, function() {
          l.current = null;
        };
      }
    }
    function u3(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = at;
      return l |= _r, (Ht.mode & va) !== Ze && (l |= Ar), H1(l, Gn, O6.bind(null, t, e), i);
    }
    function I0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return F0(at, Gn, O6.bind(null, t, e), i);
    }
    function YC(e, t) {
    }
    var Y0 = YC;
    function s3(e, t) {
      var a = uo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Z0(e, t) {
      var a = Ja(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (K5(i, c))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function c3(e, t) {
      var a = uo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Q0(e, t) {
      var a = Ja(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var c = l[1];
        if (K5(i, c))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function f3(e) {
      var t = uo();
      return t.memoizedState = e, e;
    }
    function N6(e) {
      var t = Ja(), a = Xn, i = a.memoizedState;
      return A6(t, i, e);
    }
    function _6(e) {
      var t = Ja();
      if (Xn === null)
        return t.memoizedState = e, e;
      var a = Xn.memoizedState;
      return A6(t, a, e);
    }
    function A6(e, t, a) {
      var i = !yh(xs);
      if (i) {
        if (!Ae(a, t)) {
          var l = $d();
          Ht.lanes = it(Ht.lanes, l), J1(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, P1()), e.memoizedState = a, a;
    }
    function ZC(e, t, a) {
      var i = ma();
      Mn(lr(i, Qn)), e(!0);
      var l = N1.transition;
      N1.transition = {};
      var c = N1.transition;
      N1.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Mn(i), N1.transition = l, l === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && x("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function d3() {
      var e = $0(!1), t = e[0], a = e[1], i = ZC.bind(null, a), l = uo();
      return l.memoizedState = i, [t, i];
    }
    function z6() {
      var e = r3(), t = e[0], a = Ja(), i = a.memoizedState;
      return [t, i];
    }
    function H6() {
      var e = a3(), t = e[0], a = Ja(), i = a.memoizedState;
      return [t, i];
    }
    var U6 = !1;
    function QC() {
      return U6;
    }
    function p3() {
      var e = uo(), t = pv(), a = t.identifierPrefix, i;
      if (gr()) {
        var l = lC();
        i = ":" + a + "R" + l;
        var c = A1++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var v = BC++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function W0() {
      var e = Ja(), t = e.memoizedState;
      return t;
    }
    function WC(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = cu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($6(e))
        V6(t, l);
      else {
        var c = n6(e, t, l, i);
        if (c !== null) {
          var v = ta();
          tr(c, e, i, v), F6(c, t, i);
        }
      }
      P6(e, i);
    }
    function GC(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = cu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($6(e))
        V6(t, l);
      else {
        var c = e.alternate;
        if (e.lanes === te && (c === null || c.lanes === te)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = Re.current, Re.current = Ri;
            try {
              var S = t.lastRenderedState, T = v(S, a);
              if (l.hasEagerState = !0, l.eagerState = T, Ae(T, S)) {
                kC(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Re.current = g;
            }
          }
        }
        var D = n6(e, t, l, i);
        if (D !== null) {
          var U = ta();
          tr(D, e, i, U), F6(D, t, i);
        }
      }
      P6(e, i);
    }
    function $6(e) {
      var t = e.alternate;
      return e === Ht || t !== null && t === Ht;
    }
    function V6(e, t) {
      _1 = H0 = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function F6(e, t, a) {
      if (Ud(a)) {
        var i = t.lanes;
        i = Vd(i, e.pendingLanes);
        var l = it(i, a);
        t.lanes = l, Hl(e, l);
      }
    }
    function P6(e, t, a) {
      Xi(e, t);
    }
    var G0 = {
      readContext: Bn,
      useCallback: Br,
      useContext: Br,
      useEffect: Br,
      useImperativeHandle: Br,
      useInsertionEffect: Br,
      useLayoutEffect: Br,
      useMemo: Br,
      useReducer: Br,
      useRef: Br,
      useState: Br,
      useDebugValue: Br,
      useDeferredValue: Br,
      useTransition: Br,
      useMutableSource: Br,
      useSyncExternalStore: Br,
      useId: Br,
      unstable_isNewReconciler: ee
    }, B6 = null, j6 = null, I6 = null, Y6 = null, so = null, Ri = null, X0 = null;
    {
      var v3 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, et = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      B6 = {
        readContext: function(e) {
          return Bn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Mt(), gf(t), s3(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Mt(), Bn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Mt(), gf(t), P0(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Mt(), gf(a), u3(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Mt(), gf(t), o3(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Mt(), gf(t), l3(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Mt(), gf(t);
          var a = Re.current;
          Re.current = so;
          try {
            return c3(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Mt();
          var i = Re.current;
          Re.current = so;
          try {
            return J5(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Mt(), i3(e);
        },
        useState: function(e) {
          re = "useState", Mt();
          var t = Re.current;
          Re.current = so;
          try {
            return $0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Mt(), f3(e);
        },
        useTransition: function() {
          return re = "useTransition", Mt(), d3();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Mt(), n3(e, t, a);
        },
        useId: function() {
          return re = "useId", Mt(), p3();
        },
        unstable_isNewReconciler: ee
      }, j6 = {
        readContext: function(e) {
          return Bn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Ce(), s3(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Ce(), Bn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Ce(), P0(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Ce(), u3(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Ce(), o3(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Ce(), l3(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Ce();
          var a = Re.current;
          Re.current = so;
          try {
            return c3(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Ce();
          var i = Re.current;
          Re.current = so;
          try {
            return J5(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Ce(), i3(e);
        },
        useState: function(e) {
          re = "useState", Ce();
          var t = Re.current;
          Re.current = so;
          try {
            return $0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Ce(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Ce(), f3(e);
        },
        useTransition: function() {
          return re = "useTransition", Ce(), d3();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Ce(), n3(e, t, a);
        },
        useId: function() {
          return re = "useId", Ce(), p3();
        },
        unstable_isNewReconciler: ee
      }, I6 = {
        readContext: function(e) {
          return Bn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Ce(), Z0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Ce(), Bn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Ce(), U1(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Ce(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Ce(), B0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Ce(), j0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Ce();
          var a = Re.current;
          Re.current = Ri;
          try {
            return Q0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Ce();
          var i = Re.current;
          Re.current = Ri;
          try {
            return e3(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Ce(), V0();
        },
        useState: function(e) {
          re = "useState", Ce();
          var t = Re.current;
          Re.current = Ri;
          try {
            return r3(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Ce(), Y0();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Ce(), N6(e);
        },
        useTransition: function() {
          return re = "useTransition", Ce(), z6();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Ce(), U0(e, t);
        },
        useId: function() {
          return re = "useId", Ce(), W0();
        },
        unstable_isNewReconciler: ee
      }, Y6 = {
        readContext: function(e) {
          return Bn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Ce(), Z0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Ce(), Bn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Ce(), U1(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Ce(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Ce(), B0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Ce(), j0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Ce();
          var a = Re.current;
          Re.current = X0;
          try {
            return Q0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Ce();
          var i = Re.current;
          Re.current = X0;
          try {
            return t3(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Ce(), V0();
        },
        useState: function(e) {
          re = "useState", Ce();
          var t = Re.current;
          Re.current = X0;
          try {
            return a3(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Ce(), Y0();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Ce(), _6(e);
        },
        useTransition: function() {
          return re = "useTransition", Ce(), H6();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Ce(), U0(e, t);
        },
        useId: function() {
          return re = "useId", Ce(), W0();
        },
        unstable_isNewReconciler: ee
      }, so = {
        readContext: function(e) {
          return v3(), Bn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), Mt(), s3(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), Mt(), Bn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), Mt(), P0(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", et(), Mt(), u3(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), Mt(), o3(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), Mt(), l3(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), Mt();
          var a = Re.current;
          Re.current = so;
          try {
            return c3(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", et(), Mt();
          var i = Re.current;
          Re.current = so;
          try {
            return J5(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), Mt(), i3(e);
        },
        useState: function(e) {
          re = "useState", et(), Mt();
          var t = Re.current;
          Re.current = so;
          try {
            return $0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), Mt(), f3(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), Mt(), d3();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", et(), Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", et(), Mt(), n3(e, t, a);
        },
        useId: function() {
          return re = "useId", et(), Mt(), p3();
        },
        unstable_isNewReconciler: ee
      }, Ri = {
        readContext: function(e) {
          return v3(), Bn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), Ce(), Z0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), Ce(), Bn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), Ce(), U1(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", et(), Ce(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), Ce(), B0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), Ce(), j0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), Ce();
          var a = Re.current;
          Re.current = Ri;
          try {
            return Q0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", et(), Ce();
          var i = Re.current;
          Re.current = Ri;
          try {
            return e3(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), Ce(), V0();
        },
        useState: function(e) {
          re = "useState", et(), Ce();
          var t = Re.current;
          Re.current = Ri;
          try {
            return r3(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), Ce(), Y0();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), Ce(), N6(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), Ce(), z6();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", et(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", et(), Ce(), U0(e, t);
        },
        useId: function() {
          return re = "useId", et(), Ce(), W0();
        },
        unstable_isNewReconciler: ee
      }, X0 = {
        readContext: function(e) {
          return v3(), Bn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), Ce(), Z0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), Ce(), Bn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), Ce(), U1(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", et(), Ce(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), Ce(), B0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), Ce(), j0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), Ce();
          var a = Re.current;
          Re.current = Ri;
          try {
            return Q0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", et(), Ce();
          var i = Re.current;
          Re.current = Ri;
          try {
            return t3(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), Ce(), V0();
        },
        useState: function(e) {
          re = "useState", et(), Ce();
          var t = Re.current;
          Re.current = Ri;
          try {
            return a3(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), Ce(), Y0();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), Ce(), _6(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), Ce(), H6();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", et(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", et(), Ce(), U0(e, t);
        },
        useId: function() {
          return re = "useId", et(), Ce(), W0();
        },
        unstable_isNewReconciler: ee
      };
    }
    var ou = d.unstable_now, Z6 = 0, K0 = -1, $1 = -1, q0 = -1, h3 = !1, J0 = !1;
    function Q6() {
      return h3;
    }
    function XC() {
      J0 = !0;
    }
    function KC() {
      h3 = !1, J0 = !1;
    }
    function qC() {
      h3 = J0, J0 = !1;
    }
    function W6() {
      return Z6;
    }
    function G6() {
      Z6 = ou();
    }
    function m3(e) {
      $1 = ou(), e.actualStartTime < 0 && (e.actualStartTime = ou());
    }
    function X6(e) {
      $1 = -1;
    }
    function ev(e, t) {
      if ($1 >= 0) {
        var a = ou() - $1;
        e.actualDuration += a, t && (e.selfBaseDuration = a), $1 = -1;
      }
    }
    function co(e) {
      if (K0 >= 0) {
        var t = ou() - K0;
        K0 = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case R:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case X:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function y3(e) {
      if (q0 >= 0) {
        var t = ou() - q0;
        q0 = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case R:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case X:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function fo() {
      K0 = ou();
    }
    function g3() {
      q0 = ou();
    }
    function C3(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ss(e, t) {
      return {
        value: e,
        source: t,
        stack: Qf(t),
        digest: null
      };
    }
    function x3(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function JC(e, t) {
      return !0;
    }
    function S3(e, t) {
      try {
        var a = JC(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, c = t.stack, v = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(i);
        }
        var g = l ? rt(l) : null, S = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === R)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var D = rt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + D + ".");
        }
        var U = S + `
` + v + `

` + ("" + T);
        console.error(U);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var ex = typeof WeakMap == "function" ? WeakMap : Map;
    function K6(e, t, a) {
      var i = el(Ft, a);
      i.tag = S5, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        ZS(l), S3(e, t);
      }, i;
    }
    function w3(e, t, a) {
      var i = el(Ft, a);
      i.tag = S5;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        i.payload = function() {
          return l(c);
        }, i.callback = function() {
          u7(e), S3(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        u7(e), S3(e, t), typeof l != "function" && IS(this);
        var S = t.value, T = t.stack;
        this.componentDidCatch(S, {
          componentStack: T !== null ? T : ""
        }), typeof l != "function" && (Vr(e.lanes, We) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", rt(e) || "Unknown"));
      }), i;
    }
    function q6(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new ex(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var c = QS.bind(null, e, t, a);
        Zn && e2(e, a), t.then(c, c);
      }
    }
    function tx(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        l.add(a);
    }
    function nx(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === Ze && (a === E || a === F || a === ue)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function J6(e) {
      var t = e;
      do {
        if (t.tag === K && FC(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function e8(e, t, a, i, l) {
      if ((e.mode & ct) === Ze) {
        if (e === t)
          e.flags |= Un;
        else {
          if (e.flags |= qe, a.flags |= ju, a.flags &= ~(ac | Qr), a.tag === b) {
            var c = a.alternate;
            if (c === null)
              a.tag = ye;
            else {
              var v = el(Ft, We);
              v.tag = E0, nu(a, v, We);
            }
          }
          a.lanes = it(a.lanes, We);
        }
        return e;
      }
      return e.flags |= Un, e.lanes = l, e;
    }
    function rx(e, t, a, i, l) {
      if (a.flags |= Qr, Zn && e2(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        nx(a), gr() && a.mode & ct && Im();
        var v = J6(t);
        if (v !== null) {
          v.flags &= ~fn, e8(v, t, a, e, l), v.mode & ct && q6(e, c, l), tx(v, e, c);
          return;
        } else {
          if (!Al(l)) {
            q6(e, c, l), t4();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = g;
        }
      } else if (gr() && a.mode & ct) {
        Im();
        var S = J6(t);
        if (S !== null) {
          (S.flags & Un) === Be && (S.flags |= fn), e8(S, t, a, e, l), v5(Ss(i, a));
          return;
        }
      }
      i = Ss(i, a), HS(i);
      var T = t;
      do {
        switch (T.tag) {
          case R: {
            var D = i;
            T.flags |= Un;
            var U = Ln(l);
            T.lanes = it(T.lanes, U);
            var z = K6(T, D, U);
            E5(T, z);
            return;
          }
          case b:
            var Q = i, W = T.type, q = T.stateNode;
            if ((T.flags & qe) === Be && (typeof W.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && !J8(q))) {
              T.flags |= Un;
              var De = Ln(l);
              T.lanes = it(T.lanes, De);
              var je = w3(T, Q, De);
              E5(T, je);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function ax() {
      return null;
    }
    var V1 = f.ReactCurrentOwner, ki = !1, b3, F1, E3, T3, R3, ws, k3, tv;
    b3 = {}, F1 = {}, E3 = {}, T3 = {}, R3 = {}, ws = !1, k3 = {}, tv = {};
    function Jr(e, t, a, i) {
      e === null ? t.child = g6(t, null, a, i) : t.child = pf(t, e.child, a, i);
    }
    function ix(e, t, a, i) {
      t.child = pf(t, e.child, null, i), t.child = pf(t, null, a, i);
    }
    function t8(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && Si(
          c,
          i,
          // Resolved props
          "prop",
          $t(a)
        );
      }
      var v = a.render, g = t.ref, S, T;
      df(t, l), Gi(t);
      {
        if (V1.current = t, Ma(!0), S = Cf(e, t, v, i, g, l), T = xf(), t.mode & an) {
          Dn(!0);
          try {
            S = Cf(e, t, v, i, g, l), T = xf();
          } finally {
            Dn(!1);
          }
        }
        Ma(!1);
      }
      return Lo(), e !== null && !ki ? (b6(e, t, l), tl(e, t, l)) : (gr() && T && u5(t), t.flags |= Bi, Jr(e, t, S, l), t.child);
    }
    function n8(e, t, a, i, l) {
      if (e === null) {
        var c = a.type;
        if (cw(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = c;
          return v = Df(c), t.tag = ue, t.type = v, M3(t, c), r8(e, t, v, i, l);
        }
        {
          var g = c.propTypes;
          g && Si(
            g,
            i,
            // Resolved props
            "prop",
            $t(c)
          );
        }
        var S = d4(a.type, null, i, t, t.mode, l);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var T = a.type, D = T.propTypes;
        D && Si(
          D,
          i,
          // Resolved props
          "prop",
          $t(T)
        );
      }
      var U = e.child, z = H3(e, l);
      if (!z) {
        var Q = U.memoizedProps, W = a.compare;
        if (W = W !== null ? W : Ve, W(Q, i) && e.ref === t.ref)
          return tl(e, t, l);
      }
      t.flags |= Bi;
      var q = ks(U, i);
      return q.ref = t.ref, q.return = t, t.child = q, q;
    }
    function r8(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === hr) {
          var v = c, g = v._payload, S = v._init;
          try {
            c = S(g);
          } catch {
            c = null;
          }
          var T = c && c.propTypes;
          T && Si(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            $t(c)
          );
        }
      }
      if (e !== null) {
        var D = e.memoizedProps;
        if (Ve(D, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ki = !1, t.pendingProps = i = D, H3(e, l))
            (e.flags & ju) !== Be && (ki = !0);
          else
            return t.lanes = e.lanes, tl(e, t, l);
      }
      return D3(e, t, a, i, l);
    }
    function a8(e, t, a) {
      var i = t.pendingProps, l = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || de)
        if ((t.mode & ct) === Ze) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, vv(t, a);
        } else if (Vr(a, $r)) {
          var U = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var z = c !== null ? c.baseLanes : a;
          vv(t, z);
        } else {
          var g = null, S;
          if (c !== null) {
            var T = c.baseLanes;
            S = it(T, a);
          } else
            S = a;
          t.lanes = t.childLanes = $r;
          var D = {
            baseLanes: S,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = D, t.updateQueue = null, vv(t, S), null;
        }
      else {
        var Q;
        c !== null ? (Q = it(c.baseLanes, a), t.memoizedState = null) : Q = a, vv(t, Q);
      }
      return Jr(e, t, l, a), t.child;
    }
    function ox(e, t, a) {
      var i = t.pendingProps;
      return Jr(e, t, i, a), t.child;
    }
    function lx(e, t, a) {
      var i = t.pendingProps.children;
      return Jr(e, t, i, a), t.child;
    }
    function ux(e, t, a) {
      {
        t.flags |= at;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, c = l.children;
      return Jr(e, t, c, a), t.child;
    }
    function i8(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nr, t.flags |= wd);
    }
    function D3(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && Si(
          c,
          i,
          // Resolved props
          "prop",
          $t(a)
        );
      }
      var v;
      {
        var g = of(t, a, !0);
        v = lf(t, g);
      }
      var S, T;
      df(t, l), Gi(t);
      {
        if (V1.current = t, Ma(!0), S = Cf(e, t, a, i, v, l), T = xf(), t.mode & an) {
          Dn(!0);
          try {
            S = Cf(e, t, a, i, v, l), T = xf();
          } finally {
            Dn(!1);
          }
        }
        Ma(!1);
      }
      return Lo(), e !== null && !ki ? (b6(e, t, l), tl(e, t, l)) : (gr() && T && u5(t), t.flags |= Bi, Jr(e, t, S, l), t.child);
    }
    function o8(e, t, a, i, l) {
      {
        switch (Tw(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, g = new v(t.memoizedProps, c.context), S = g.state;
            c.updater.enqueueSetState(c, S, null);
            break;
          }
          case !0: {
            t.flags |= qe, t.flags |= Un;
            var T = new Error("Simulated error coming from DevTools"), D = Ln(l);
            t.lanes = it(t.lanes, D);
            var U = w3(t, Ss(T, t), D);
            E5(t, U);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && Si(
            z,
            i,
            // Resolved props
            "prop",
            $t(a)
          );
        }
      }
      var Q;
      oo(a) ? (Q = !0, p0(t)) : Q = !1, df(t, l);
      var W = t.stateNode, q;
      W === null ? (rv(e, t), p6(t, a, i), H5(t, a, i, l), q = !0) : e === null ? q = AC(t, a, i, l) : q = zC(e, t, a, i, l);
      var De = L3(e, t, a, q, Q, l);
      {
        var je = t.stateNode;
        q && je.props !== i && (ws || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", rt(t) || "a component"), ws = !0);
      }
      return De;
    }
    function L3(e, t, a, i, l, c) {
      i8(e, t);
      var v = (t.flags & qe) !== Be;
      if (!i && !v)
        return l && Fm(t, a, !1), tl(e, t, c);
      var g = t.stateNode;
      V1.current = t;
      var S;
      if (v && typeof a.getDerivedStateFromError != "function")
        S = null, X6();
      else {
        Gi(t);
        {
          if (Ma(!0), S = g.render(), t.mode & an) {
            Dn(!0);
            try {
              g.render();
            } finally {
              Dn(!1);
            }
          }
          Ma(!1);
        }
        Lo();
      }
      return t.flags |= Bi, e !== null && v ? ix(e, t, S, c) : Jr(e, t, S, c), t.memoizedState = g.state, l && Fm(t, a, !0), t.child;
    }
    function l8(e) {
      var t = e.stateNode;
      t.pendingContext ? $m(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $m(e, t.context, !1), B5(e, t.containerInfo);
    }
    function sx(e, t, a) {
      if (l8(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, c = l.element;
      i6(e, t), D0(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var g = v.element;
      if (l.isDehydrated) {
        var S = {
          element: g,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, T = t.updateQueue;
        if (T.baseState = S, t.memoizedState = S, t.flags & fn) {
          var D = Ss(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return u8(e, t, g, a, D);
        } else if (g !== c) {
          var U = Ss(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return u8(e, t, g, a, U);
        } else {
          pC(t);
          var z = g6(t, null, g, a);
          t.child = z;
          for (var Q = z; Q; )
            Q.flags = Q.flags & ~Zt | fa, Q = Q.sibling;
        }
      } else {
        if (cf(), g === c)
          return tl(e, t, a);
        Jr(e, t, g, a);
      }
      return t.child;
    }
    function u8(e, t, a, i, l) {
      return cf(), v5(l), t.flags |= fn, Jr(e, t, a, i), t.child;
    }
    function cx(e, t, a) {
      x6(t), e === null && p5(t);
      var i = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = l.children, g = Wh(i, l);
      return g ? v = null : c !== null && Wh(i, c) && (t.flags |= Lt), i8(e, t), Jr(e, t, v, a), t.child;
    }
    function fx(e, t) {
      return e === null && p5(t), null;
    }
    function dx(e, t, a, i) {
      rv(e, t);
      var l = t.pendingProps, c = a, v = c._payload, g = c._init, S = g(v);
      t.type = S;
      var T = t.tag = fw(S), D = Ei(S, l), U;
      switch (T) {
        case E:
          return M3(t, S), t.type = S = Df(S), U = D3(null, t, S, D, i), U;
        case b:
          return t.type = S = o4(S), U = o8(null, t, S, D, i), U;
        case F:
          return t.type = S = l4(S), U = t8(null, t, S, D, i), U;
        case le: {
          if (t.type !== t.elementType) {
            var z = S.propTypes;
            z && Si(
              z,
              D,
              // Resolved for outer only
              "prop",
              $t(S)
            );
          }
          return U = n8(
            null,
            t,
            S,
            Ei(S.type, D),
            // The inner type can have defaults too
            i
          ), U;
        }
      }
      var Q = "";
      throw S !== null && typeof S == "object" && S.$$typeof === hr && (Q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + Q));
    }
    function px(e, t, a, i, l) {
      rv(e, t), t.tag = b;
      var c;
      return oo(a) ? (c = !0, p0(t)) : c = !1, df(t, l), p6(t, a, i), H5(t, a, i, l), L3(null, t, a, !0, c, l);
    }
    function vx(e, t, a, i) {
      rv(e, t);
      var l = t.pendingProps, c;
      {
        var v = of(t, a, !1);
        c = lf(t, v);
      }
      df(t, i);
      var g, S;
      Gi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = $t(a) || "Unknown";
          b3[T] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), b3[T] = !0);
        }
        t.mode & an && bi.recordLegacyContextWarning(t, null), Ma(!0), V1.current = t, g = Cf(null, t, a, l, c, i), S = xf(), Ma(!1);
      }
      if (Lo(), t.flags |= Bi, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var D = $t(a) || "Unknown";
        F1[D] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), F1[D] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var U = $t(a) || "Unknown";
          F1[U] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), F1[U] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return oo(a) ? (z = !0, p0(t)) : z = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, b5(t), d6(t, g), H5(t, a, l, i), L3(null, t, a, !0, z, i);
      } else {
        if (t.tag = E, t.mode & an) {
          Dn(!0);
          try {
            g = Cf(null, t, a, l, c, i), S = xf();
          } finally {
            Dn(!1);
          }
        }
        return gr() && S && u5(t), Jr(null, t, g, i), M3(t, a), t.child;
      }
    }
    function M3(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = la();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", c = e._debugSource;
          c && (l = c.fileName + ":" + c.lineNumber), R3[l] || (R3[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = $t(t) || "Unknown";
          T3[v] || (h("%s: Function components do not support getDerivedStateFromProps.", v), T3[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = $t(t) || "Unknown";
          E3[g] || (h("%s: Function components do not support contextType.", g), E3[g] = !0);
        }
      }
    }
    var O3 = {
      dehydrated: null,
      treeContext: null,
      retryLane: ht
    };
    function N3(e) {
      return {
        baseLanes: e,
        cachePool: ax(),
        transitions: null
      };
    }
    function hx(e, t) {
      var a = null;
      return {
        baseLanes: it(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mx(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Y5(e, O1);
    }
    function yx(e, t) {
      return zl(e.childLanes, t);
    }
    function s8(e, t, a) {
      var i = t.pendingProps;
      Rw(t) && (t.flags |= qe);
      var l = Ti.current, c = !1, v = (t.flags & qe) !== Be;
      if (v || mx(l, e) ? (c = !0, t.flags &= ~qe) : (e === null || e.memoizedState !== null) && (l = VC(l, w6)), l = hf(l), au(t, l), e === null) {
        p5(t);
        var g = t.memoizedState;
        if (g !== null) {
          var S = g.dehydrated;
          if (S !== null)
            return wx(t, S);
        }
        var T = i.children, D = i.fallback;
        if (c) {
          var U = gx(t, T, D, a), z = t.child;
          return z.memoizedState = N3(a), t.memoizedState = O3, U;
        } else
          return _3(t, T);
      } else {
        var Q = e.memoizedState;
        if (Q !== null) {
          var W = Q.dehydrated;
          if (W !== null)
            return bx(e, t, v, i, W, Q, a);
        }
        if (c) {
          var q = i.fallback, De = i.children, je = xx(e, t, De, q, a), $e = t.child, yt = e.child.memoizedState;
          return $e.memoizedState = yt === null ? N3(a) : hx(yt, a), $e.childLanes = yx(e, a), t.memoizedState = O3, je;
        } else {
          var vt = i.children, j = Cx(e, t, vt, a);
          return t.memoizedState = null, j;
        }
      }
    }
    function _3(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, c = A3(l, i);
      return c.return = e, e.child = c, c;
    }
    function gx(e, t, a, i) {
      var l = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, g, S;
      return (l & ct) === Ze && c !== null ? (g = c, g.childLanes = te, g.pendingProps = v, e.mode & Qe && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), S = du(a, l, i, null)) : (g = A3(v, l), S = du(a, l, i, null)), g.return = e, S.return = e, g.sibling = S, e.child = g, S;
    }
    function A3(e, t, a) {
      return c7(e, t, te, null);
    }
    function c8(e, t) {
      return ks(e, t);
    }
    function Cx(e, t, a, i) {
      var l = e.child, c = l.sibling, v = c8(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === Ze && (v.lanes = i), v.return = t, v.sibling = null, c !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [c], t.flags |= Rt) : g.push(c);
      }
      return t.child = v, v;
    }
    function xx(e, t, a, i, l) {
      var c = t.mode, v = e.child, g = v.sibling, S = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & ct) === Ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var D = t.child;
        T = D, T.childLanes = te, T.pendingProps = S, t.mode & Qe && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = v.selfBaseDuration, T.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        T = c8(v, S), T.subtreeFlags = v.subtreeFlags & Yn;
      var U;
      return g !== null ? U = ks(g, i) : (U = du(i, c, l, null), U.flags |= Zt), U.return = t, T.return = t, T.sibling = U, t.child = T, U;
    }
    function nv(e, t, a, i) {
      i !== null && v5(i), pf(t, e.child, null, a);
      var l = t.pendingProps, c = l.children, v = _3(t, c);
      return v.flags |= Zt, t.memoizedState = null, v;
    }
    function Sx(e, t, a, i, l) {
      var c = t.mode, v = {
        mode: "visible",
        children: a
      }, g = A3(v, c), S = du(i, c, l, null);
      return S.flags |= Zt, g.return = t, S.return = t, g.sibling = S, t.child = g, (t.mode & ct) !== Ze && pf(t, e.child, null, l), S;
    }
    function wx(e, t, a) {
      return (e.mode & ct) === Ze ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : qh(t) ? e.lanes = No : e.lanes = $r, null;
    }
    function bx(e, t, a, i, l, c, v) {
      if (a)
        if (t.flags & fn) {
          t.flags &= ~fn;
          var j = x3(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return nv(e, t, v, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= qe, null;
          var J = i.children, I = i.fallback, fe = Sx(e, t, J, I, v), Le = t.child;
          return Le.memoizedState = N3(v), t.memoizedState = O3, fe;
        }
      else {
        if (fC(), (t.mode & ct) === Ze)
          return nv(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (qh(l)) {
          var g, S, T;
          {
            var D = Dg(l);
            g = D.digest, S = D.message, T = D.stack;
          }
          var U;
          S ? U = new Error(S) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = x3(U, g, T);
          return nv(e, t, v, z);
        }
        var Q = Vr(v, e.childLanes);
        if (ki || Q) {
          var W = pv();
          if (W !== null) {
            var q = Ch(W, v);
            if (q !== ht && q !== c.retryLane) {
              c.retryLane = q;
              var De = Ft;
              Sa(e, q), tr(W, e, q, De);
            }
          }
          t4();
          var je = x3(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return nv(e, t, v, je);
        } else if (Nm(l)) {
          t.flags |= qe, t.child = e.child;
          var $e = WS.bind(null, e);
          return Lg(l, $e), null;
        } else {
          vC(t, l, c.treeContext);
          var yt = i.children, vt = _3(t, yt);
          return vt.flags |= fa, vt;
        }
      }
    }
    function f8(e, t, a) {
      e.lanes = it(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = it(i.lanes, t)), C5(e.return, t, a);
    }
    function Ex(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === K) {
          var l = i.memoizedState;
          l !== null && f8(i, a, e);
        } else if (i.tag === xe)
          f8(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Tx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && z0(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Rx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !k3[e])
        if (k3[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              h('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          h('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function kx(e, t) {
      e !== void 0 && !tv[e] && (e !== "collapsed" && e !== "hidden" ? (tv[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (tv[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function d8(e, t) {
      {
        var a = zn(e), i = !a && typeof ai(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function Dx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (zn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!d8(e[a], a))
              return;
        } else {
          var i = ai(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var c = l.next(), v = 0; !c.done; c = l.next()) {
                if (!d8(c.value, v))
                  return;
                v++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function z3(e, t, a, i, l) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = a, c.tailMode = l);
    }
    function p8(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, c = i.tail, v = i.children;
      Rx(l), kx(c, l), Dx(v, l), Jr(e, t, v, a);
      var g = Ti.current, S = Y5(g, O1);
      if (S)
        g = Z5(g, O1), t.flags |= qe;
      else {
        var T = e !== null && (e.flags & qe) !== Be;
        T && Ex(t, t.child, a), g = hf(g);
      }
      if (au(t, g), (t.mode & ct) === Ze)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var D = Tx(t.child), U;
            D === null ? (U = t.child, t.child = null) : (U = D.sibling, D.sibling = null), z3(
              t,
              !1,
              // isBackwards
              U,
              D,
              c
            );
            break;
          }
          case "backwards": {
            var z = null, Q = t.child;
            for (t.child = null; Q !== null; ) {
              var W = Q.alternate;
              if (W !== null && z0(W) === null) {
                t.child = Q;
                break;
              }
              var q = Q.sibling;
              Q.sibling = z, z = Q, Q = q;
            }
            z3(
              t,
              !0,
              // isBackwards
              z,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            z3(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Lx(e, t, a) {
      B5(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = pf(t, null, i, a) : Jr(e, t, i, a), t.child;
    }
    var v8 = !1;
    function Mx(e, t, a) {
      var i = t.type, l = i._context, c = t.pendingProps, v = t.memoizedProps, g = c.value;
      {
        "value" in c || v8 || (v8 = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && Si(S, c, "prop", "Context.Provider");
      }
      if (t6(t, l, g), v !== null) {
        var T = v.value;
        if (Ae(T, g)) {
          if (v.children === c.children && !f0())
            return tl(e, t, a);
        } else
          EC(t, l, a);
      }
      var D = c.children;
      return Jr(e, t, D, a), t.child;
    }
    var h8 = !1;
    function Ox(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (h8 || (h8 = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, c = l.children;
      typeof c != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), df(t, a);
      var v = Bn(i);
      Gi(t);
      var g;
      return V1.current = t, Ma(!0), g = c(v), Ma(!1), Lo(), t.flags |= Bi, Jr(e, t, g, a), t.child;
    }
    function P1() {
      ki = !0;
    }
    function rv(e, t) {
      (t.mode & ct) === Ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
    }
    function tl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), X6(), J1(t.lanes), Vr(a, t.childLanes) ? (HC(e, t), t.child) : null;
    }
    function Nx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= Rt) : c.push(e), a.flags |= Zt, a;
      }
    }
    function H3(e, t) {
      var a = e.lanes;
      return !!Vr(a, t);
    }
    function _x(e, t, a) {
      switch (t.tag) {
        case R:
          l8(t), t.stateNode, cf();
          break;
        case L:
          x6(t);
          break;
        case b: {
          var i = t.type;
          oo(i) && p0(t);
          break;
        }
        case M:
          B5(t, t.stateNode.containerInfo);
          break;
        case Y: {
          var l = t.memoizedProps.value, c = t.type._context;
          t6(t, c, l);
          break;
        }
        case X:
          {
            var v = Vr(a, t.childLanes);
            v && (t.flags |= at);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case K: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return au(t, hf(Ti.current)), t.flags |= qe, null;
            var T = t.child, D = T.childLanes;
            if (Vr(a, D))
              return s8(e, t, a);
            au(t, hf(Ti.current));
            var U = tl(e, t, a);
            return U !== null ? U.sibling : null;
          } else
            au(t, hf(Ti.current));
          break;
        }
        case xe: {
          var z = (e.flags & qe) !== Be, Q = Vr(a, t.childLanes);
          if (z) {
            if (Q)
              return p8(e, t, a);
            t.flags |= qe;
          }
          var W = t.memoizedState;
          if (W !== null && (W.rendering = null, W.tail = null, W.lastEffect = null), au(t, Ti.current), Q)
            break;
          return null;
        }
        case Oe:
        case he:
          return t.lanes = te, a8(e, t, a);
      }
      return tl(e, t, a);
    }
    function m8(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nx(e, t, d4(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || f0() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ki = !0;
        else {
          var c = H3(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & qe) === Be)
            return ki = !1, _x(e, t, a);
          (e.flags & ju) !== Be ? ki = !0 : ki = !1;
        }
      } else if (ki = !1, gr() && iC(t)) {
        var v = t.index, g = oC();
        jm(t, g, v);
      }
      switch (t.lanes = te, t.tag) {
        case N:
          return vx(e, t, t.type, a);
        case ae: {
          var S = t.elementType;
          return dx(e, t, S, a);
        }
        case E: {
          var T = t.type, D = t.pendingProps, U = t.elementType === T ? D : Ei(T, D);
          return D3(e, t, T, U, a);
        }
        case b: {
          var z = t.type, Q = t.pendingProps, W = t.elementType === z ? Q : Ei(z, Q);
          return o8(e, t, z, W, a);
        }
        case R:
          return sx(e, t, a);
        case L:
          return cx(e, t, a);
        case _:
          return fx(e, t);
        case K:
          return s8(e, t, a);
        case M:
          return Lx(e, t, a);
        case F: {
          var q = t.type, De = t.pendingProps, je = t.elementType === q ? De : Ei(q, De);
          return t8(e, t, q, je, a);
        }
        case $:
          return ox(e, t, a);
        case P:
          return lx(e, t, a);
        case X:
          return ux(e, t, a);
        case Y:
          return Mx(e, t, a);
        case V:
          return Ox(e, t, a);
        case le: {
          var $e = t.type, yt = t.pendingProps, vt = Ei($e, yt);
          if (t.type !== t.elementType) {
            var j = $e.propTypes;
            j && Si(
              j,
              vt,
              // Resolved for outer only
              "prop",
              $t($e)
            );
          }
          return vt = Ei($e.type, vt), n8(e, t, $e, vt, a);
        }
        case ue:
          return r8(e, t, t.type, t.pendingProps, a);
        case ye: {
          var J = t.type, I = t.pendingProps, fe = t.elementType === J ? I : Ei(J, I);
          return px(e, t, J, fe, a);
        }
        case xe:
          return p8(e, t, a);
        case Me:
          break;
        case Oe:
          return a8(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Sf(e) {
      e.flags |= at;
    }
    function y8(e) {
      e.flags |= Nr, e.flags |= wd;
    }
    var g8, U3, C8, x8;
    g8 = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === L || l.tag === _)
          ng(e, l.stateNode);
        else if (l.tag !== M) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, U3 = function(e, t) {
    }, C8 = function(e, t, a, i, l) {
      var c = e.memoizedProps;
      if (c !== i) {
        var v = t.stateNode, g = j5(), S = ag(v, a, c, i, l, g);
        t.updateQueue = S, S && Sf(t);
      }
    }, x8 = function(e, t, a, i) {
      a !== i && Sf(t);
    };
    function B1(e, t) {
      if (!gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, c = null; l !== null; )
              l.alternate !== null && (c = l), l = l.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function xr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = te, i = Be;
      if (t) {
        if ((e.mode & Qe) !== Ze) {
          for (var S = e.selfBaseDuration, T = e.child; T !== null; )
            a = it(a, it(T.lanes, T.childLanes)), i |= T.subtreeFlags & Yn, i |= T.flags & Yn, S += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = S;
        } else
          for (var D = e.child; D !== null; )
            a = it(a, it(D.lanes, D.childLanes)), i |= D.subtreeFlags & Yn, i |= D.flags & Yn, D.return = e, D = D.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Qe) !== Ze) {
          for (var l = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            a = it(a, it(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, l += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = c;
        } else
          for (var g = e.child; g !== null; )
            a = it(a, it(g.lanes, g.childLanes)), i |= g.subtreeFlags, i |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ax(e, t, a) {
      if (CC() && (t.mode & ct) !== Ze && (t.flags & qe) === Be)
        return Xm(t), cf(), t.flags |= fn | Qr | Un, !1;
      var i = g0(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yC(t), xr(t), (t.mode & Qe) !== Ze) {
            var l = a !== null;
            if (l) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (cf(), (t.flags & qe) === Be && (t.memoizedState = null), t.flags |= at, xr(t), (t.mode & Qe) !== Ze) {
            var v = a !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Km(), !0;
    }
    function S8(e, t, a) {
      var i = t.pendingProps;
      switch (s5(t), t.tag) {
        case N:
        case ae:
        case ue:
        case E:
        case F:
        case $:
        case P:
        case X:
        case V:
        case le:
          return xr(t), null;
        case b: {
          var l = t.type;
          return oo(l) && d0(t), xr(t), null;
        }
        case R: {
          var c = t.stateNode;
          if (vf(t), i5(t), W5(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = g0(t);
            if (v)
              Sf(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & fn) !== Be) && (t.flags |= ca, Km());
            }
          }
          return U3(e, t), xr(t), null;
        }
        case L: {
          I5(t);
          var S = C6(), T = t.type;
          if (e !== null && t.stateNode != null)
            C8(e, t, T, i, S), e.ref !== t.ref && y8(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return xr(t), null;
            }
            var D = j5(), U = g0(t);
            if (U)
              hC(t, S, D) && Sf(t);
            else {
              var z = tg(T, i, S, D, t);
              g8(z, t, !1, !1), t.stateNode = z, rg(z, T, i, S) && Sf(t);
            }
            t.ref !== null && y8(t);
          }
          return xr(t), null;
        }
        case _: {
          var Q = i;
          if (e && t.stateNode != null) {
            var W = e.memoizedProps;
            x8(e, t, W, Q);
          } else {
            if (typeof Q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var q = C6(), De = j5(), je = g0(t);
            je ? mC(t) && Sf(t) : t.stateNode = ig(Q, q, De, t);
          }
          return xr(t), null;
        }
        case K: {
          mf(t);
          var $e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var yt = Ax(e, t, $e);
            if (!yt)
              return t.flags & Un ? t : null;
          }
          if ((t.flags & qe) !== Be)
            return t.lanes = a, (t.mode & Qe) !== Ze && C3(t), t;
          var vt = $e !== null, j = e !== null && e.memoizedState !== null;
          if (vt !== j && vt) {
            var J = t.child;
            if (J.flags |= ji, (t.mode & ct) !== Ze) {
              var I = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Pe);
              I || Y5(Ti.current, w6) ? zS() : t4();
            }
          }
          var fe = t.updateQueue;
          if (fe !== null && (t.flags |= at), xr(t), (t.mode & Qe) !== Ze && vt) {
            var Le = t.child;
            Le !== null && (t.treeBaseDuration -= Le.treeBaseDuration);
          }
          return null;
        }
        case M:
          return vf(t), U3(e, t), e === null && qg(t.stateNode.containerInfo), xr(t), null;
        case Y:
          var Ee = t.type._context;
          return g5(Ee, t), xr(t), null;
        case ye: {
          var Xe = t.type;
          return oo(Xe) && d0(t), xr(t), null;
        }
        case xe: {
          mf(t);
          var nt = t.memoizedState;
          if (nt === null)
            return xr(t), null;
          var Ut = (t.flags & qe) !== Be, bt = nt.rendering;
          if (bt === null)
            if (Ut)
              B1(nt, !1);
            else {
              var _n = US() && (e === null || (e.flags & qe) === Be);
              if (!_n)
                for (var Et = t.child; Et !== null; ) {
                  var Rn = z0(Et);
                  if (Rn !== null) {
                    Ut = !0, t.flags |= qe, B1(nt, !1);
                    var jr = Rn.updateQueue;
                    return jr !== null && (t.updateQueue = jr, t.flags |= at), t.subtreeFlags = Be, UC(t, a), au(t, Z5(Ti.current, O1)), t.child;
                  }
                  Et = Et.sibling;
                }
              nt.tail !== null && rn() > B8() && (t.flags |= qe, Ut = !0, B1(nt, !1), t.lanes = zd);
            }
          else {
            if (!Ut) {
              var Tr = z0(bt);
              if (Tr !== null) {
                t.flags |= qe, Ut = !0;
                var $a = Tr.updateQueue;
                if ($a !== null && (t.updateQueue = $a, t.flags |= at), B1(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !bt.alternate && !gr())
                  return xr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                rn() * 2 - nt.renderingStartTime > B8() && a !== $r && (t.flags |= qe, Ut = !0, B1(nt, !1), t.lanes = zd);
            }
            if (nt.isBackwards)
              bt.sibling = t.child, t.child = bt;
            else {
              var na = nt.last;
              na !== null ? na.sibling = bt : t.child = bt, nt.last = bt;
            }
          }
          if (nt.tail !== null) {
            var ra = nt.tail;
            nt.rendering = ra, nt.tail = ra.sibling, nt.renderingStartTime = rn(), ra.sibling = null;
            var Ir = Ti.current;
            return Ut ? Ir = Z5(Ir, O1) : Ir = hf(Ir), au(t, Ir), ra;
          }
          return xr(t), null;
        }
        case Me:
          break;
        case Oe:
        case he: {
          e4(t);
          var ol = t.memoizedState, Lf = ol !== null;
          if (e !== null) {
            var a2 = e.memoizedState, ho = a2 !== null;
            ho !== Lf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !de && (t.flags |= ji);
          }
          return !Lf || (t.mode & ct) === Ze ? xr(t) : Vr(vo, $r) && (xr(t), t.subtreeFlags & (Zt | at) && (t.flags |= ji)), null;
        }
        case Ke:
          return null;
        case be:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zx(e, t, a) {
      switch (s5(t), t.tag) {
        case b: {
          var i = t.type;
          oo(i) && d0(t);
          var l = t.flags;
          return l & Un ? (t.flags = l & ~Un | qe, (t.mode & Qe) !== Ze && C3(t), t) : null;
        }
        case R: {
          t.stateNode, vf(t), i5(t), W5();
          var c = t.flags;
          return (c & Un) !== Be && (c & qe) === Be ? (t.flags = c & ~Un | qe, t) : null;
        }
        case L:
          return I5(t), null;
        case K: {
          mf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            cf();
          }
          var g = t.flags;
          return g & Un ? (t.flags = g & ~Un | qe, (t.mode & Qe) !== Ze && C3(t), t) : null;
        }
        case xe:
          return mf(t), null;
        case M:
          return vf(t), null;
        case Y:
          var S = t.type._context;
          return g5(S, t), null;
        case Oe:
        case he:
          return e4(t), null;
        case Ke:
          return null;
        default:
          return null;
      }
    }
    function w8(e, t, a) {
      switch (s5(t), t.tag) {
        case b: {
          var i = t.type.childContextTypes;
          i != null && d0(t);
          break;
        }
        case R: {
          t.stateNode, vf(t), i5(t), W5();
          break;
        }
        case L: {
          I5(t);
          break;
        }
        case M:
          vf(t);
          break;
        case K:
          mf(t);
          break;
        case xe:
          mf(t);
          break;
        case Y:
          var l = t.type._context;
          g5(l, t);
          break;
        case Oe:
        case he:
          e4(t);
          break;
      }
    }
    var b8 = null;
    b8 = /* @__PURE__ */ new Set();
    var av = !1, Sr = !1, Hx = typeof WeakSet == "function" ? WeakSet : Set, ze = null, wf = null, bf = null;
    function Ux(e) {
      ko(null, function() {
        throw e;
      }), xd();
    }
    var $x = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Qe)
        try {
          fo(), t.componentWillUnmount();
        } finally {
          co(e);
        }
      else
        t.componentWillUnmount();
    };
    function E8(e, t) {
      try {
        lu(Gn, e);
      } catch (a) {
        Xt(e, t, a);
      }
    }
    function $3(e, t, a) {
      try {
        $x(e, a);
      } catch (i) {
        Xt(e, t, i);
      }
    }
    function Vx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Xt(e, t, i);
      }
    }
    function T8(e, t) {
      try {
        k8(e);
      } catch (a) {
        Xt(e, t, a);
      }
    }
    function Ef(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (kt && _t && e.mode & Qe)
              try {
                fo(), i = a(null);
              } finally {
                co(e);
              }
            else
              i = a(null);
          } catch (l) {
            Xt(e, t, l);
          }
          typeof i == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          a.current = null;
    }
    function iv(e, t, a) {
      try {
        a();
      } catch (i) {
        Xt(e, t, i);
      }
    }
    var R8 = !1;
    function Fx(e, t) {
      Jy(e.containerInfo), ze = t, Px();
      var a = R8;
      return R8 = !1, a;
    }
    function Px() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        (e.subtreeFlags & kl) !== Be && t !== null ? (t.return = e, ze = t) : Bx();
      }
    }
    function Bx() {
      for (; ze !== null; ) {
        var e = ze;
        zt(e);
        try {
          jx(e);
        } catch (a) {
          Xt(e, e.return, a);
        }
        kn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function jx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ca) !== Be) {
        switch (zt(e), e.tag) {
          case E:
          case F:
          case ue:
            break;
          case b: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !ws && (c.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(e) || "instance"), c.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ei(e.type, i), l);
              {
                var g = b8;
                v === void 0 && !g.has(e.type) && (g.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", rt(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case R: {
            {
              var S = e.stateNode;
              Eg(S.containerInfo);
            }
            break;
          }
          case L:
          case _:
          case M:
          case ye:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        kn();
      }
    }
    function Di(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var g = v.destroy;
            v.destroy = void 0, g !== void 0 && ((e & Cr) !== wa ? dc(t) : (e & Gn) !== wa && pc(t), (e & lo) !== wa && t2(!0), iv(t, a, g), (e & lo) !== wa && t2(!1), (e & Cr) !== wa ? yp() : (e & Gn) !== wa && Dl());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function lu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, c = l;
        do {
          if ((c.tag & e) === e) {
            (e & Cr) !== wa ? mp(t) : (e & Gn) !== wa && gp(t);
            var v = c.create;
            (e & lo) !== wa && t2(!0), c.destroy = v(), (e & lo) !== wa && t2(!1), (e & Cr) !== wa ? Nd() : (e & Gn) !== wa && Cp();
            {
              var g = c.destroy;
              if (g !== void 0 && typeof g != "function") {
                var S = void 0;
                (c.tag & Gn) !== Be ? S = "useLayoutEffect" : (c.tag & lo) !== Be ? S = "useInsertionEffect" : S = "useEffect";
                var T = void 0;
                g === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? T = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + g, h("%s must not return anything besides a function, which is used for clean-up.%s", S, T);
              }
            }
          }
          c = c.next;
        } while (c !== l);
      }
    }
    function Ix(e, t) {
      if ((t.flags & at) !== Be)
        switch (t.tag) {
          case X: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, c = i.onPostCommit, v = W6(), g = t.alternate === null ? "mount" : "update";
            Q6() && (g = "nested-update"), typeof c == "function" && c(l, g, a, v);
            var S = t.return;
            e:
              for (; S !== null; ) {
                switch (S.tag) {
                  case R:
                    var T = S.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                  case X:
                    var D = S.stateNode;
                    D.passiveEffectDuration += a;
                    break e;
                }
                S = S.return;
              }
            break;
          }
        }
    }
    function Yx(e, t, a, i) {
      if ((a.flags & ir) !== Be)
        switch (a.tag) {
          case E:
          case F:
          case ue: {
            if (!Sr)
              if (a.mode & Qe)
                try {
                  fo(), lu(Gn | Wn, a);
                } finally {
                  co(a);
                }
              else
                lu(Gn | Wn, a);
            break;
          }
          case b: {
            var l = a.stateNode;
            if (a.flags & at && !Sr)
              if (t === null)
                if (a.type === a.elementType && !ws && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), a.mode & Qe)
                  try {
                    fo(), l.componentDidMount();
                  } finally {
                    co(a);
                  }
                else
                  l.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : Ei(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !ws && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), a.mode & Qe)
                  try {
                    fo(), l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    co(a);
                  }
                else
                  l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !ws && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), l6(a, g, l));
            break;
          }
          case R: {
            var S = a.updateQueue;
            if (S !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case L:
                    T = a.child.stateNode;
                    break;
                  case b:
                    T = a.child.stateNode;
                    break;
                }
              l6(a, S, T);
            }
            break;
          }
          case L: {
            var D = a.stateNode;
            if (t === null && a.flags & at) {
              var U = a.type, z = a.memoizedProps;
              cg(D, U, z);
            }
            break;
          }
          case _:
            break;
          case M:
            break;
          case X: {
            {
              var Q = a.memoizedProps, W = Q.onCommit, q = Q.onRender, De = a.stateNode.effectDuration, je = W6(), $e = t === null ? "mount" : "update";
              Q6() && ($e = "nested-update"), typeof q == "function" && q(a.memoizedProps.id, $e, a.actualDuration, a.treeBaseDuration, a.actualStartTime, je);
              {
                typeof W == "function" && W(a.memoizedProps.id, $e, De, je), BS(a);
                var yt = a.return;
                e:
                  for (; yt !== null; ) {
                    switch (yt.tag) {
                      case R:
                        var vt = yt.stateNode;
                        vt.effectDuration += De;
                        break e;
                      case X:
                        var j = yt.stateNode;
                        j.effectDuration += De;
                        break e;
                    }
                    yt = yt.return;
                  }
              }
            }
            break;
          }
          case K: {
            Jx(e, a);
            break;
          }
          case xe:
          case ye:
          case Me:
          case Oe:
          case he:
          case be:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Sr || a.flags & Nr && k8(a);
    }
    function Zx(e) {
      switch (e.tag) {
        case E:
        case F:
        case ue: {
          if (e.mode & Qe)
            try {
              fo(), E8(e, e.return);
            } finally {
              co(e);
            }
          else
            E8(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Vx(e, e.return, t), T8(e, e.return);
          break;
        }
        case L: {
          T8(e, e.return);
          break;
        }
      }
    }
    function Qx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === L) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? xg(l) : wg(i.stateNode, i.memoizedProps);
            } catch (v) {
              Xt(e, e.return, v);
            }
          }
        } else if (i.tag === _) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? Sg(c) : bg(c, i.memoizedProps);
            } catch (v) {
              Xt(e, e.return, v);
            }
        } else if (!((i.tag === Oe || i.tag === he) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function k8(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case L:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Qe)
            try {
              fo(), l = t(i);
            } finally {
              co(e);
            }
          else
            l = t(i);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", rt(e)), t.current = i;
      }
    }
    function Wx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function D8(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, D8(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === L) {
          var a = e.stateNode;
          a !== null && tC(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gx(e) {
      for (var t = e.return; t !== null; ) {
        if (L8(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function L8(e) {
      return e.tag === L || e.tag === R || e.tag === M;
    }
    function M8(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || L8(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== L && t.tag !== _ && t.tag !== we; ) {
            if (t.flags & Zt || t.child === null || t.tag === M)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Zt))
            return t.stateNode;
        }
    }
    function Xx(e) {
      var t = Gx(e);
      switch (t.tag) {
        case L: {
          var a = t.stateNode;
          t.flags & Lt && (Om(a), t.flags &= ~Lt);
          var i = M8(e);
          F3(e, i, a);
          break;
        }
        case R:
        case M: {
          var l = t.stateNode.containerInfo, c = M8(e);
          V3(e, c, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function V3(e, t, a) {
      var i = e.tag, l = i === L || i === _;
      if (l) {
        var c = e.stateNode;
        t ? mg(a, c, t) : vg(a, c);
      } else if (i !== M) {
        var v = e.child;
        if (v !== null) {
          V3(v, t, a);
          for (var g = v.sibling; g !== null; )
            V3(g, t, a), g = g.sibling;
        }
      }
    }
    function F3(e, t, a) {
      var i = e.tag, l = i === L || i === _;
      if (l) {
        var c = e.stateNode;
        t ? hg(a, c, t) : pg(a, c);
      } else if (i !== M) {
        var v = e.child;
        if (v !== null) {
          F3(v, t, a);
          for (var g = v.sibling; g !== null; )
            F3(g, t, a), g = g.sibling;
        }
      }
    }
    var wr = null, Li = !1;
    function Kx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case L: {
                wr = i.stateNode, Li = !1;
                break e;
              }
              case R: {
                wr = i.stateNode.containerInfo, Li = !0;
                break e;
              }
              case M: {
                wr = i.stateNode.containerInfo, Li = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        O8(e, t, a), wr = null, Li = !1;
      }
      Wx(a);
    }
    function uu(e, t, a) {
      for (var i = a.child; i !== null; )
        O8(e, t, i), i = i.sibling;
    }
    function O8(e, t, a) {
      switch (Md(a), a.tag) {
        case L:
          Sr || Ef(a, t);
        case _: {
          {
            var i = wr, l = Li;
            wr = null, uu(e, t, a), wr = i, Li = l, wr !== null && (Li ? gg(wr, a.stateNode) : yg(wr, a.stateNode));
          }
          return;
        }
        case we: {
          wr !== null && (Li ? Cg(wr, a.stateNode) : Kh(wr, a.stateNode));
          return;
        }
        case M: {
          {
            var c = wr, v = Li;
            wr = a.stateNode.containerInfo, Li = !0, uu(e, t, a), wr = c, Li = v;
          }
          return;
        }
        case E:
        case F:
        case le:
        case ue: {
          if (!Sr) {
            var g = a.updateQueue;
            if (g !== null) {
              var S = g.lastEffect;
              if (S !== null) {
                var T = S.next, D = T;
                do {
                  var U = D, z = U.destroy, Q = U.tag;
                  z !== void 0 && ((Q & lo) !== wa ? iv(a, t, z) : (Q & Gn) !== wa && (pc(a), a.mode & Qe ? (fo(), iv(a, t, z), co(a)) : iv(a, t, z), Dl())), D = D.next;
                } while (D !== T);
              }
            }
          }
          uu(e, t, a);
          return;
        }
        case b: {
          if (!Sr) {
            Ef(a, t);
            var W = a.stateNode;
            typeof W.componentWillUnmount == "function" && $3(a, t, W);
          }
          uu(e, t, a);
          return;
        }
        case Me: {
          uu(e, t, a);
          return;
        }
        case Oe: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var q = Sr;
            Sr = q || a.memoizedState !== null, uu(e, t, a), Sr = q;
          } else
            uu(e, t, a);
          break;
        }
        default: {
          uu(e, t, a);
          return;
        }
      }
    }
    function qx(e) {
      e.memoizedState;
    }
    function Jx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            c !== null && $g(c);
          }
        }
      }
    }
    function N8(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Hx()), t.forEach(function(i) {
          var l = GS.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zn)
              if (wf !== null && bf !== null)
                e2(bf, wf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function eS(e, t, a) {
      wf = a, bf = e, zt(t), _8(t, e), zt(t), wf = null, bf = null;
    }
    function Mi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l];
          try {
            Kx(e, t, c);
          } catch (S) {
            Xt(c, t, S);
          }
        }
      var v = Xv();
      if (t.subtreeFlags & zr)
        for (var g = t.child; g !== null; )
          zt(g), _8(g, e), g = g.sibling;
      zt(v);
    }
    function _8(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case E:
        case F:
        case le:
        case ue: {
          if (Mi(t, e), po(e), l & at) {
            try {
              Di(lo | Wn, e, e.return), lu(lo | Wn, e);
            } catch (Xe) {
              Xt(e, e.return, Xe);
            }
            if (e.mode & Qe) {
              try {
                fo(), Di(Gn | Wn, e, e.return);
              } catch (Xe) {
                Xt(e, e.return, Xe);
              }
              co(e);
            } else
              try {
                Di(Gn | Wn, e, e.return);
              } catch (Xe) {
                Xt(e, e.return, Xe);
              }
          }
          return;
        }
        case b: {
          Mi(t, e), po(e), l & Nr && i !== null && Ef(i, i.return);
          return;
        }
        case L: {
          Mi(t, e), po(e), l & Nr && i !== null && Ef(i, i.return);
          {
            if (e.flags & Lt) {
              var c = e.stateNode;
              try {
                Om(c);
              } catch (Xe) {
                Xt(e, e.return, Xe);
              }
            }
            if (l & at) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, S = i !== null ? i.memoizedProps : g, T = e.type, D = e.updateQueue;
                if (e.updateQueue = null, D !== null)
                  try {
                    fg(v, D, T, S, g, e);
                  } catch (Xe) {
                    Xt(e, e.return, Xe);
                  }
              }
            }
          }
          return;
        }
        case _: {
          if (Mi(t, e), po(e), l & at) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, z = e.memoizedProps, Q = i !== null ? i.memoizedProps : z;
            try {
              dg(U, Q, z);
            } catch (Xe) {
              Xt(e, e.return, Xe);
            }
          }
          return;
        }
        case R: {
          if (Mi(t, e), po(e), l & at && i !== null) {
            var W = i.memoizedState;
            if (W.isDehydrated)
              try {
                Ug(t.containerInfo);
              } catch (Xe) {
                Xt(e, e.return, Xe);
              }
          }
          return;
        }
        case M: {
          Mi(t, e), po(e);
          return;
        }
        case K: {
          Mi(t, e), po(e);
          var q = e.child;
          if (q.flags & ji) {
            var De = q.stateNode, je = q.memoizedState, $e = je !== null;
            if (De.isHidden = $e, $e) {
              var yt = q.alternate !== null && q.alternate.memoizedState !== null;
              yt || AS();
            }
          }
          if (l & at) {
            try {
              qx(e);
            } catch (Xe) {
              Xt(e, e.return, Xe);
            }
            N8(e);
          }
          return;
        }
        case Oe: {
          var vt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var j = Sr;
            Sr = j || vt, Mi(t, e), Sr = j;
          } else
            Mi(t, e);
          if (po(e), l & ji) {
            var J = e.stateNode, I = e.memoizedState, fe = I !== null, Le = e;
            if (J.isHidden = fe, fe && !vt && (Le.mode & ct) !== Ze) {
              ze = Le;
              for (var Ee = Le.child; Ee !== null; )
                ze = Ee, nS(Ee), Ee = Ee.sibling;
            }
            Qx(Le, fe);
          }
          return;
        }
        case xe: {
          Mi(t, e), po(e), l & at && N8(e);
          return;
        }
        case Me:
          return;
        default: {
          Mi(t, e), po(e);
          return;
        }
      }
    }
    function po(e) {
      var t = e.flags;
      if (t & Zt) {
        try {
          Xx(e);
        } catch (a) {
          Xt(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & fa && (e.flags &= ~fa);
    }
    function tS(e, t, a) {
      wf = a, bf = t, ze = e, A8(e, t, a), wf = null, bf = null;
    }
    function A8(e, t, a) {
      for (var i = (e.mode & ct) !== Ze; ze !== null; ) {
        var l = ze, c = l.child;
        if (l.tag === Oe && i) {
          var v = l.memoizedState !== null, g = v || av;
          if (g) {
            P3(e, t, a);
            continue;
          } else {
            var S = l.alternate, T = S !== null && S.memoizedState !== null, D = T || Sr, U = av, z = Sr;
            av = g, Sr = D, Sr && !z && (ze = l, rS(l));
            for (var Q = c; Q !== null; )
              ze = Q, A8(
                Q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Q = Q.sibling;
            ze = l, av = U, Sr = z, P3(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & ir) !== Be && c !== null ? (c.return = l, ze = c) : P3(e, t, a);
      }
    }
    function P3(e, t, a) {
      for (; ze !== null; ) {
        var i = ze;
        if ((i.flags & ir) !== Be) {
          var l = i.alternate;
          zt(i);
          try {
            Yx(t, l, i, a);
          } catch (v) {
            Xt(i, i.return, v);
          }
          kn();
        }
        if (i === e) {
          ze = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, ze = c;
          return;
        }
        ze = i.return;
      }
    }
    function nS(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        switch (t.tag) {
          case E:
          case F:
          case le:
          case ue: {
            if (t.mode & Qe)
              try {
                fo(), Di(Gn, t, t.return);
              } finally {
                co(t);
              }
            else
              Di(Gn, t, t.return);
            break;
          }
          case b: {
            Ef(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && $3(t, t.return, i);
            break;
          }
          case L: {
            Ef(t, t.return);
            break;
          }
          case Oe: {
            var l = t.memoizedState !== null;
            if (l) {
              z8(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ze = a) : z8(e);
      }
    }
    function z8(e) {
      for (; ze !== null; ) {
        var t = ze;
        if (t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function rS(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        if (t.tag === Oe) {
          var i = t.memoizedState !== null;
          if (i) {
            H8(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ze = a) : H8(e);
      }
    }
    function H8(e) {
      for (; ze !== null; ) {
        var t = ze;
        zt(t);
        try {
          Zx(t);
        } catch (i) {
          Xt(t, t.return, i);
        }
        if (kn(), t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function aS(e, t, a, i) {
      ze = t, iS(t, e, a, i);
    }
    function iS(e, t, a, i) {
      for (; ze !== null; ) {
        var l = ze, c = l.child;
        (l.subtreeFlags & da) !== Be && c !== null ? (c.return = l, ze = c) : oS(e, t, a, i);
      }
    }
    function oS(e, t, a, i) {
      for (; ze !== null; ) {
        var l = ze;
        if ((l.flags & Jt) !== Be) {
          zt(l);
          try {
            lS(t, l, a, i);
          } catch (v) {
            Xt(l, l.return, v);
          }
          kn();
        }
        if (l === e) {
          ze = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, ze = c;
          return;
        }
        ze = l.return;
      }
    }
    function lS(e, t, a, i) {
      switch (t.tag) {
        case E:
        case F:
        case ue: {
          if (t.mode & Qe) {
            g3();
            try {
              lu(Cr | Wn, t);
            } finally {
              y3(t);
            }
          } else
            lu(Cr | Wn, t);
          break;
        }
      }
    }
    function uS(e) {
      ze = e, sS();
    }
    function sS() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        if ((ze.flags & Rt) !== Be) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              ze = l, dS(l, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var g = v.sibling;
                    v.sibling = null, v = g;
                  } while (v !== null);
                }
              }
            }
            ze = e;
          }
        }
        (e.subtreeFlags & da) !== Be && t !== null ? (t.return = e, ze = t) : cS();
      }
    }
    function cS() {
      for (; ze !== null; ) {
        var e = ze;
        (e.flags & Jt) !== Be && (zt(e), fS(e), kn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function fS(e) {
      switch (e.tag) {
        case E:
        case F:
        case ue: {
          e.mode & Qe ? (g3(), Di(Cr | Wn, e, e.return), y3(e)) : Di(Cr | Wn, e, e.return);
          break;
        }
      }
    }
    function dS(e, t) {
      for (; ze !== null; ) {
        var a = ze;
        zt(a), vS(a, t), kn();
        var i = a.child;
        i !== null ? (i.return = a, ze = i) : pS(e);
      }
    }
    function pS(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.sibling, i = t.return;
        if (D8(t), t === e) {
          ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, ze = a;
          return;
        }
        ze = i;
      }
    }
    function vS(e, t) {
      switch (e.tag) {
        case E:
        case F:
        case ue: {
          e.mode & Qe ? (g3(), Di(Cr, e, t), y3(e)) : Di(Cr, e, t);
          break;
        }
      }
    }
    function hS(e) {
      switch (e.tag) {
        case E:
        case F:
        case ue: {
          try {
            lu(Gn | Wn, e);
          } catch (a) {
            Xt(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Xt(e, e.return, a);
          }
          break;
        }
      }
    }
    function mS(e) {
      switch (e.tag) {
        case E:
        case F:
        case ue: {
          try {
            lu(Cr | Wn, e);
          } catch (t) {
            Xt(e, e.return, t);
          }
          break;
        }
      }
    }
    function yS(e) {
      switch (e.tag) {
        case E:
        case F:
        case ue: {
          try {
            Di(Gn | Wn, e, e.return);
          } catch (a) {
            Xt(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && $3(e, e.return, t);
          break;
        }
      }
    }
    function gS(e) {
      switch (e.tag) {
        case E:
        case F:
        case ue:
          try {
            Di(Cr | Wn, e, e.return);
          } catch (t) {
            Xt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var j1 = Symbol.for;
      j1("selector.component"), j1("selector.has_pseudo_class"), j1("selector.role"), j1("selector.test_id"), j1("selector.text");
    }
    var CS = [];
    function xS() {
      CS.forEach(function(e) {
        return e();
      });
    }
    var SS = f.ReactCurrentActQueue;
    function wS(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function U8() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && SS.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var bS = Math.ceil, B3 = f.ReactCurrentDispatcher, j3 = f.ReactCurrentOwner, br = f.ReactCurrentBatchConfig, Oi = f.ReactCurrentActQueue, qn = (
      /*             */
      0
    ), $8 = (
      /*               */
      1
    ), Er = (
      /*                */
      2
    ), ei = (
      /*                */
      4
    ), nl = 0, I1 = 1, bs = 2, ov = 3, Y1 = 4, V8 = 5, I3 = 6, mt = qn, ea = null, gn = null, Jn = te, vo = te, Y3 = ql(te), er = nl, Z1 = null, lv = te, Q1 = te, uv = te, W1 = null, ba = null, Z3 = 0, F8 = 500, P8 = 1 / 0, ES = 500, rl = null;
    function G1() {
      P8 = rn() + ES;
    }
    function B8() {
      return P8;
    }
    var sv = !1, Q3 = null, Tf = null, Es = !1, su = null, X1 = te, W3 = [], G3 = null, TS = 50, K1 = 0, X3 = null, K3 = !1, cv = !1, RS = 50, Rf = 0, fv = null, q1 = Ft, dv = te, j8 = !1;
    function pv() {
      return ea;
    }
    function ta() {
      return (mt & (Er | ei)) !== qn ? rn() : (q1 !== Ft || (q1 = rn()), q1);
    }
    function cu(e) {
      var t = e.mode;
      if ((t & ct) === Ze)
        return We;
      if ((mt & Er) !== qn && Jn !== te)
        return Ln(Jn);
      var a = wC() !== SC;
      if (a) {
        if (br.transition !== null) {
          var i = br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return dv === ht && (dv = $d()), dv;
      }
      var l = ma();
      if (l !== ht)
        return l;
      var c = og();
      return c;
    }
    function kS(e) {
      var t = e.mode;
      return (t & ct) === Ze ? We : gh();
    }
    function tr(e, t, a, i) {
      KS(), j8 && h("useInsertionEffect must not schedule updates."), K3 && (cv = !0), Vo(e, a, i), (mt & Er) !== te && e === ea ? ew(t) : (Zn && jd(e, t, a), tw(t), e === ea && ((mt & Er) === qn && (Q1 = it(Q1, a)), er === Y1 && fu(e, Jn)), Ea(e, i), a === We && mt === qn && (t.mode & ct) === Ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Oi.isBatchingLegacy && (G1(), Bm()));
    }
    function DS(e, t, a) {
      var i = e.current;
      i.lanes = t, Vo(e, t, a), Ea(e, a);
    }
    function LS(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (mt & Er) !== qn
      );
    }
    function Ea(e, t) {
      var a = e.callbackNode;
      hh(e, t);
      var i = Gu(e, e === ea ? Jn : te);
      if (i === te) {
        a !== null && i7(a), e.callbackNode = null, e.callbackPriority = ht;
        return;
      }
      var l = En(i), c = e.callbackPriority;
      if (c === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Oi.current !== null && a !== a4)) {
        a == null && c !== We && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && i7(a);
      var v;
      if (l === We)
        e.tag === Jl ? (Oi.isBatchingLegacy !== null && (Oi.didScheduleLegacyUpdate = !0), aC(Z8.bind(null, e))) : Pm(Z8.bind(null, e)), Oi.current !== null ? Oi.current.push(eu) : ug(function() {
          (mt & (Er | ei)) === qn && eu();
        }), v = null;
      else {
        var g;
        switch (es(i)) {
          case or:
            g = sc;
            break;
          case Qn:
            g = Xr;
            break;
          case mi:
            g = Ia;
            break;
          case qu:
            g = Yi;
            break;
          default:
            g = Ia;
            break;
        }
        v = i4(g, I8.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function I8(e, t) {
      if (KC(), q1 = Ft, dv = te, (mt & (Er | ei)) !== qn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = il();
      if (i && e.callbackNode !== a)
        return null;
      var l = Gu(e, e === ea ? Jn : te);
      if (l === te)
        return null;
      var c = !Ku(e, l) && !Tp(e, l) && !t, v = c ? VS(e, l) : hv(e, l);
      if (v !== nl) {
        if (v === bs) {
          var g = Hd(e);
          g !== te && (l = g, v = q3(e, g));
        }
        if (v === I1) {
          var S = Z1;
          throw Ts(e, te), fu(e, l), Ea(e, rn()), S;
        }
        if (v === I3)
          fu(e, l);
        else {
          var T = !Ku(e, l), D = e.current.alternate;
          if (T && !OS(D)) {
            if (v = hv(e, l), v === bs) {
              var U = Hd(e);
              U !== te && (l = U, v = q3(e, U));
            }
            if (v === I1) {
              var z = Z1;
              throw Ts(e, te), fu(e, l), Ea(e, rn()), z;
            }
          }
          e.finishedWork = D, e.finishedLanes = l, MS(e, v, l);
        }
      }
      return Ea(e, rn()), e.callbackNode === a ? I8.bind(null, e) : null;
    }
    function q3(e, t) {
      var a = W1;
      if (On(e)) {
        var i = Ts(e, t);
        i.flags |= fn, Kg(e.containerInfo);
      }
      var l = hv(e, t);
      if (l !== bs) {
        var c = ba;
        ba = a, c !== null && Y8(c);
      }
      return l;
    }
    function Y8(e) {
      ba === null ? ba = e : ba.push.apply(ba, e);
    }
    function MS(e, t, a) {
      switch (t) {
        case nl:
        case I1:
          throw new Error("Root did not complete. This is a bug in React.");
        case bs: {
          Rs(e, ba, rl);
          break;
        }
        case ov: {
          if (fu(e, a), _c(a) && // do not delay if we're inside an act() scope
          !o7()) {
            var i = Z3 + F8 - rn();
            if (i > 10) {
              var l = Gu(e, te);
              if (l !== te)
                break;
              var c = e.suspendedLanes;
              if (!$o(c, a)) {
                ta(), Pd(e, c);
                break;
              }
              e.timeoutHandle = Gh(Rs.bind(null, e, ba, rl), i);
              break;
            }
          }
          Rs(e, ba, rl);
          break;
        }
        case Y1: {
          if (fu(e, a), Ep(a))
            break;
          if (!o7()) {
            var v = bp(e, a), g = v, S = rn() - g, T = XS(S) - S;
            if (T > 10) {
              e.timeoutHandle = Gh(Rs.bind(null, e, ba, rl), T);
              break;
            }
          }
          Rs(e, ba, rl);
          break;
        }
        case V8: {
          Rs(e, ba, rl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function OS(e) {
      for (var t = e; ; ) {
        if (t.flags & Bu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var c = i[l], v = c.getSnapshot, g = c.value;
                try {
                  if (!Ae(v(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & Bu && S !== null) {
          S.return = t, t = S;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function fu(e, t) {
      t = zl(t, uv), t = zl(t, Q1), Fd(e, t);
    }
    function Z8(e) {
      if (qC(), (mt & (Er | ei)) !== qn)
        throw new Error("Should not already be working.");
      il();
      var t = Gu(e, te);
      if (!Vr(t, We))
        return Ea(e, rn()), null;
      var a = hv(e, t);
      if (e.tag !== Jl && a === bs) {
        var i = Hd(e);
        i !== te && (t = i, a = q3(e, i));
      }
      if (a === I1) {
        var l = Z1;
        throw Ts(e, te), fu(e, t), Ea(e, rn()), l;
      }
      if (a === I3)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, Rs(e, ba, rl), Ea(e, rn()), null;
    }
    function NS(e, t) {
      t !== te && (Hl(e, it(t, We)), Ea(e, rn()), (mt & (Er | ei)) === qn && (G1(), eu()));
    }
    function J3(e, t) {
      var a = mt;
      mt |= $8;
      try {
        return e(t);
      } finally {
        mt = a, mt === qn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Oi.isBatchingLegacy && (G1(), Bm());
      }
    }
    function _S(e, t, a, i, l) {
      var c = ma(), v = br.transition;
      try {
        return br.transition = null, Mn(or), e(t, a, i, l);
      } finally {
        Mn(c), br.transition = v, mt === qn && G1();
      }
    }
    function al(e) {
      su !== null && su.tag === Jl && (mt & (Er | ei)) === qn && il();
      var t = mt;
      mt |= $8;
      var a = br.transition, i = ma();
      try {
        return br.transition = null, Mn(or), e ? e() : void 0;
      } finally {
        Mn(i), br.transition = a, mt = t, (mt & (Er | ei)) === qn && eu();
      }
    }
    function Q8() {
      return (mt & (Er | ei)) !== qn;
    }
    function vv(e, t) {
      Pr(Y3, vo, e), vo = it(vo, t);
    }
    function e4(e) {
      vo = Y3.current, Fr(Y3, e);
    }
    function Ts(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var a = e.timeoutHandle;
      if (a !== Xh && (e.timeoutHandle = Xh, lg(a)), gn !== null)
        for (var i = gn.return; i !== null; ) {
          var l = i.alternate;
          w8(l, i), i = i.return;
        }
      ea = e;
      var c = ks(e.current, null);
      return gn = c, Jn = vo = t, er = nl, Z1 = null, lv = te, Q1 = te, uv = te, W1 = null, ba = null, RC(), bi.discardPendingWarnings(), c;
    }
    function W8(e, t) {
      do {
        var a = gn;
        try {
          if (w0(), E6(), kn(), j3.current = null, a === null || a.return === null) {
            er = I1, Z1 = t, gn = null;
            return;
          }
          if (kt && a.mode & Qe && ev(a, !0), Bt)
            if (Lo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xp(a, i, Jn);
            } else
              vc(a, t, Jn);
          rx(e, a.return, a, t, Jn), q8(a);
        } catch (l) {
          t = l, gn === a && a !== null ? (a = a.return, gn = a) : a = gn;
          continue;
        }
        return;
      } while (!0);
    }
    function G8() {
      var e = B3.current;
      return B3.current = G0, e === null ? G0 : e;
    }
    function X8(e) {
      B3.current = e;
    }
    function AS() {
      Z3 = rn();
    }
    function J1(e) {
      lv = it(e, lv);
    }
    function zS() {
      er === nl && (er = ov);
    }
    function t4() {
      (er === nl || er === ov || er === bs) && (er = Y1), ea !== null && (Xu(lv) || Xu(Q1)) && fu(ea, Jn);
    }
    function HS(e) {
      er !== Y1 && (er = bs), W1 === null ? W1 = [e] : W1.push(e);
    }
    function US() {
      return er === nl;
    }
    function hv(e, t) {
      var a = mt;
      mt |= Er;
      var i = G8();
      if (ea !== e || Jn !== t) {
        if (Zn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (e2(e, Jn), l.clear()), Hc(e, t);
        }
        rl = Id(), Ts(e, t);
      }
      Aa(t);
      do
        try {
          $S();
          break;
        } catch (c) {
          W8(e, c);
        }
      while (!0);
      if (w0(), mt = a, X8(i), gn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ml(), ea = null, Jn = te, er;
    }
    function $S() {
      for (; gn !== null; )
        K8(gn);
    }
    function VS(e, t) {
      var a = mt;
      mt |= Er;
      var i = G8();
      if (ea !== e || Jn !== t) {
        if (Zn) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (e2(e, Jn), l.clear()), Hc(e, t);
        }
        rl = Id(), G1(), Ts(e, t);
      }
      Aa(t);
      do
        try {
          FS();
          break;
        } catch (c) {
          W8(e, c);
        }
      while (!0);
      return w0(), X8(i), mt = a, gn !== null ? (Yu(), nl) : (Ml(), ea = null, Jn = te, er);
    }
    function FS() {
      for (; gn !== null && !uc(); )
        K8(gn);
    }
    function K8(e) {
      var t = e.alternate;
      zt(e);
      var a;
      (e.mode & Qe) !== Ze ? (m3(e), a = n4(t, e, vo), ev(e, !0)) : a = n4(t, e, vo), kn(), e.memoizedProps = e.pendingProps, a === null ? q8(e) : gn = a, j3.current = null;
    }
    function q8(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Qr) === Be) {
          zt(t);
          var l = void 0;
          if ((t.mode & Qe) === Ze ? l = S8(a, t, vo) : (m3(t), l = S8(a, t, vo), ev(t, !1)), kn(), l !== null) {
            gn = l;
            return;
          }
        } else {
          var c = zx(a, t);
          if (c !== null) {
            c.flags &= fp, gn = c;
            return;
          }
          if ((t.mode & Qe) !== Ze) {
            ev(t, !1);
            for (var v = t.actualDuration, g = t.child; g !== null; )
              v += g.actualDuration, g = g.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= Qr, i.subtreeFlags = Be, i.deletions = null;
          else {
            er = I3, gn = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          gn = S;
          return;
        }
        t = i, gn = t;
      } while (t !== null);
      er === nl && (er = V8);
    }
    function Rs(e, t, a) {
      var i = ma(), l = br.transition;
      try {
        br.transition = null, Mn(or), PS(e, t, a, i);
      } finally {
        br.transition = l, Mn(i);
      }
      return null;
    }
    function PS(e, t, a, i) {
      do
        il();
      while (su !== null);
      if (qS(), (mt & (Er | ei)) !== qn)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (fc(c), l === null)
        return Od(), null;
      if (c === te && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ht;
      var v = it(l.lanes, l.childLanes);
      Bd(e, v), e === ea && (ea = null, gn = null, Jn = te), ((l.subtreeFlags & da) !== Be || (l.flags & da) !== Be) && (Es || (Es = !0, G3 = a, i4(Ia, function() {
        return il(), null;
      })));
      var g = (l.subtreeFlags & (kl | zr | ir | da)) !== Be, S = (l.flags & (kl | zr | ir | da)) !== Be;
      if (g || S) {
        var T = br.transition;
        br.transition = null;
        var D = ma();
        Mn(or);
        var U = mt;
        mt |= ei, j3.current = null, Fx(e, l), G6(), eS(e, l, c), eg(e.containerInfo), e.current = l, Sp(c), tS(l, e, c), Ll(), vp(), mt = U, Mn(D), br.transition = T;
      } else
        e.current = l, G6();
      var z = Es;
      if (Es ? (Es = !1, su = e, X1 = c) : (Rf = 0, fv = null), v = e.pendingLanes, v === te && (Tf = null), z || n7(e.current, !1), pi(l.stateNode, i), Zn && e.memoizedUpdaters.clear(), xS(), Ea(e, rn()), t !== null)
        for (var Q = e.onRecoverableError, W = 0; W < t.length; W++) {
          var q = t[W], De = q.stack, je = q.digest;
          Q(q.value, {
            componentStack: De,
            digest: je
          });
        }
      if (sv) {
        sv = !1;
        var $e = Q3;
        throw Q3 = null, $e;
      }
      return Vr(X1, We) && e.tag !== Jl && il(), v = e.pendingLanes, Vr(v, We) ? (XC(), e === X3 ? K1++ : (K1 = 0, X3 = e)) : K1 = 0, eu(), Od(), null;
    }
    function il() {
      if (su !== null) {
        var e = es(X1), t = xh(mi, e), a = br.transition, i = ma();
        try {
          return br.transition = null, Mn(t), jS();
        } finally {
          Mn(i), br.transition = a;
        }
      }
      return !1;
    }
    function BS(e) {
      W3.push(e), Es || (Es = !0, i4(Ia, function() {
        return il(), null;
      }));
    }
    function jS() {
      if (su === null)
        return !1;
      var e = G3;
      G3 = null;
      var t = su, a = X1;
      if (su = null, X1 = te, (mt & (Er | ei)) !== qn)
        throw new Error("Cannot flush passive effects while already rendering.");
      K3 = !0, cv = !1, wp(a);
      var i = mt;
      mt |= ei, uS(t.current), aS(t, t.current, a, e);
      {
        var l = W3;
        W3 = [];
        for (var c = 0; c < l.length; c++) {
          var v = l[c];
          Ix(t, v);
        }
      }
      Iu(), n7(t.current, !0), mt = i, eu(), cv ? t === fv ? Rf++ : (Rf = 0, fv = t) : Rf = 0, K3 = !1, cv = !1, Qi(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function J8(e) {
      return Tf !== null && Tf.has(e);
    }
    function IS(e) {
      Tf === null ? Tf = /* @__PURE__ */ new Set([e]) : Tf.add(e);
    }
    function YS(e) {
      sv || (sv = !0, Q3 = e);
    }
    var ZS = YS;
    function e7(e, t, a) {
      var i = Ss(a, t), l = K6(e, i, We), c = nu(e, l, We), v = ta();
      c !== null && (Vo(c, We, v), Ea(c, v));
    }
    function Xt(e, t, a) {
      if (Ux(a), t2(!1), e.tag === R) {
        e7(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === R) {
          e7(i, e, a);
          return;
        } else if (i.tag === b) {
          var l = i.type, c = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !J8(c)) {
            var v = Ss(a, e), g = w3(i, v, We), S = nu(i, g, We), T = ta();
            S !== null && (Vo(S, We, T), Ea(S, T));
            return;
          }
        }
        i = i.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function QS(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ta();
      Pd(e, a), nw(e), ea === e && $o(Jn, a) && (er === Y1 || er === ov && _c(Jn) && rn() - Z3 < F8 ? Ts(e, te) : uv = it(uv, a)), Ea(e, l);
    }
    function t7(e, t) {
      t === ht && (t = kS(e));
      var a = ta(), i = Sa(e, t);
      i !== null && (Vo(i, t, a), Ea(i, a));
    }
    function WS(e) {
      var t = e.memoizedState, a = ht;
      t !== null && (a = t.retryLane), t7(e, a);
    }
    function GS(e, t) {
      var a = ht, i;
      switch (e.tag) {
        case K:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case xe:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), t7(e, a);
    }
    function XS(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : bS(e / 1960) * 1960;
    }
    function KS() {
      if (K1 > TS)
        throw K1 = 0, X3 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Rf > RS && (Rf = 0, fv = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function qS() {
      bi.flushLegacyContextWarning(), bi.flushPendingUnsafeLifecycleWarnings();
    }
    function n7(e, t) {
      zt(e), mv(e, Ar, yS), t && mv(e, Do, gS), mv(e, Ar, hS), t && mv(e, Do, mS), kn();
    }
    function mv(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== l && i.child !== null && c !== Be ? i = i.child : ((i.flags & t) !== Be && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var yv = null;
    function r7(e) {
      {
        if ((mt & Er) !== qn || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== N && t !== R && t !== b && t !== E && t !== F && t !== le && t !== ue)
          return;
        var a = rt(e) || "ReactComponent";
        if (yv !== null) {
          if (yv.has(a))
            return;
          yv.add(a);
        } else
          yv = /* @__PURE__ */ new Set([a]);
        var i = wn;
        try {
          zt(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? zt(e) : kn();
        }
      }
    }
    var n4;
    {
      var JS = null;
      n4 = function(e, t, a) {
        var i = f7(JS, t);
        try {
          return m8(e, t, a);
        } catch (c) {
          if (dC() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (w0(), E6(), w8(e, t), f7(t, i), t.mode & Qe && m3(t), ko(null, m8, null, e, t, a), ph()) {
            var l = xd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var a7 = !1, r4;
    r4 = /* @__PURE__ */ new Set();
    function ew(e) {
      if (oa && !QC())
        switch (e.tag) {
          case E:
          case F:
          case ue: {
            var t = gn && rt(gn) || "Unknown", a = t;
            if (!r4.has(a)) {
              r4.add(a);
              var i = rt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case b: {
            a7 || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), a7 = !0);
            break;
          }
        }
    }
    function e2(e, t) {
      if (Zn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          jd(e, i, t);
        });
      }
    }
    var a4 = {};
    function i4(e, t) {
      {
        var a = Oi.current;
        return a !== null ? (a.push(t), a4) : lc(e, t);
      }
    }
    function i7(e) {
      if (e !== a4)
        return pp(e);
    }
    function o7() {
      return Oi.current !== null;
    }
    function tw(e) {
      {
        if (e.mode & ct) {
          if (!U8())
            return;
        } else if (!wS() || mt !== qn || e.tag !== E && e.tag !== F && e.tag !== ue)
          return;
        if (Oi.current === null) {
          var t = wn;
          try {
            zt(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, rt(e));
          } finally {
            t ? zt(e) : kn();
          }
        }
      }
    }
    function nw(e) {
      e.tag !== Jl && U8() && Oi.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function t2(e) {
      j8 = e;
    }
    var ti = null, kf = null, rw = function(e) {
      ti = e;
    };
    function Df(e) {
      {
        if (ti === null)
          return e;
        var t = ti(e);
        return t === void 0 ? e : t.current;
      }
    }
    function o4(e) {
      return Df(e);
    }
    function l4(e) {
      {
        if (ti === null)
          return e;
        var t = ti(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Df(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: pl,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function l7(e, t) {
      {
        if (ti === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof i == "function" && (l = !0);
            break;
          }
          case E: {
            (typeof i == "function" || c === hr) && (l = !0);
            break;
          }
          case F: {
            (c === pl || c === hr) && (l = !0);
            break;
          }
          case le:
          case ue: {
            (c === vl || c === hr) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = ti(a);
          if (v !== void 0 && v === ti(i))
            return !0;
        }
        return !1;
      }
    }
    function u7(e) {
      {
        if (ti === null || typeof WeakSet != "function")
          return;
        kf === null && (kf = /* @__PURE__ */ new WeakSet()), kf.add(e);
      }
    }
    var aw = function(e, t) {
      {
        if (ti === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        il(), al(function() {
          u4(e.current, i, a);
        });
      }
    }, iw = function(e, t) {
      {
        if (e.context !== Ha)
          return;
        il(), al(function() {
          n2(t, e, null, null);
        });
      }
    };
    function u4(e, t, a) {
      {
        var i = e.alternate, l = e.child, c = e.sibling, v = e.tag, g = e.type, S = null;
        switch (v) {
          case E:
          case ue:
          case b:
            S = g;
            break;
          case F:
            S = g.render;
            break;
        }
        if (ti === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, D = !1;
        if (S !== null) {
          var U = ti(S);
          U !== void 0 && (a.has(U) ? D = !0 : t.has(U) && (v === b ? D = !0 : T = !0));
        }
        if (kf !== null && (kf.has(e) || i !== null && kf.has(i)) && (D = !0), D && (e._debugNeedsRemount = !0), D || T) {
          var z = Sa(e, We);
          z !== null && tr(z, e, We, Ft);
        }
        l !== null && !D && u4(l, t, a), c !== null && u4(c, t, a);
      }
    }
    var ow = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return s4(e.current, i, a), a;
      }
    };
    function s4(e, t, a) {
      {
        var i = e.child, l = e.sibling, c = e.tag, v = e.type, g = null;
        switch (c) {
          case E:
          case ue:
          case b:
            g = v;
            break;
          case F:
            g = v.render;
            break;
        }
        var S = !1;
        g !== null && t.has(g) && (S = !0), S ? lw(e, a) : i !== null && s4(i, t, a), l !== null && s4(l, t, a);
      }
    }
    function lw(e, t) {
      {
        var a = uw(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case L:
              t.add(i.stateNode);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
            case R:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function uw(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === L)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var c4;
    {
      c4 = !1;
      try {
        var s7 = Object.preventExtensions({});
      } catch {
        c4 = !0;
      }
    }
    function sw(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Be, this.subtreeFlags = Be, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !c4 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ua = function(e, t, a, i) {
      return new sw(e, t, a, i);
    };
    function f4(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cw(e) {
      return typeof e == "function" && !f4(e) && e.defaultProps === void 0;
    }
    function fw(e) {
      if (typeof e == "function")
        return f4(e) ? b : E;
      if (e != null) {
        var t = e.$$typeof;
        if (t === pl)
          return F;
        if (t === vl)
          return le;
      }
      return N;
    }
    function ks(e, t) {
      var a = e.alternate;
      a === null ? (a = Ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Be, a.subtreeFlags = Be, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Yn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case N:
        case E:
        case ue:
          a.type = Df(e.type);
          break;
        case b:
          a.type = o4(e.type);
          break;
        case F:
          a.type = l4(e.type);
          break;
      }
      return a;
    }
    function dw(e, t) {
      e.flags &= Yn | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = Be, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Be, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pw(e, t, a) {
      var i;
      return e === v0 ? (i = ct, t === !0 && (i |= an, i |= va)) : i = Ze, Zn && (i |= Qe), Ua(R, null, null, i);
    }
    function d4(e, t, a, i, l, c) {
      var v = N, g = e;
      if (typeof e == "function")
        f4(e) ? (v = b, g = o4(g)) : g = Df(g);
      else if (typeof e == "string")
        v = L;
      else
        e:
          switch (e) {
            case ri:
              return du(a.children, l, c, t);
            case dl:
              v = P, l |= an, (l & ct) !== Ze && (l |= va);
              break;
            case gu:
              return vw(a, l, c, t);
            case Pa:
              return hw(a, l, c, t);
            case Cu:
              return mw(a, l, c, t);
            case Bf:
              return c7(a, l, c, t);
            case w2:
            case x2:
            case Yv:
            case Zv:
            case S2:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Ff:
                    v = Y;
                    break e;
                  case Pf:
                    v = V;
                    break e;
                  case pl:
                    v = F, g = l4(g);
                    break e;
                  case vl:
                    v = le;
                    break e;
                  case hr:
                    v = ae, g = null;
                    break e;
                }
              var S = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var T = i ? rt(i) : null;
                T && (S += `

Check the render method of \`` + T + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
            }
          }
      var D = Ua(v, a, t, l);
      return D.elementType = e, D.type = g, D.lanes = c, D._debugOwner = i, D;
    }
    function p4(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, c = e.key, v = e.props, g = d4(l, c, v, i, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function du(e, t, a, i) {
      var l = Ua($, e, i, t);
      return l.lanes = a, l;
    }
    function vw(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Ua(X, e, i, t | Qe);
      return l.elementType = gu, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function hw(e, t, a, i) {
      var l = Ua(K, e, i, t);
      return l.elementType = Pa, l.lanes = a, l;
    }
    function mw(e, t, a, i) {
      var l = Ua(xe, e, i, t);
      return l.elementType = Cu, l.lanes = a, l;
    }
    function c7(e, t, a, i) {
      var l = Ua(Oe, e, i, t);
      l.elementType = Bf, l.lanes = a;
      var c = {
        isHidden: !1
      };
      return l.stateNode = c, l;
    }
    function v4(e, t, a) {
      var i = Ua(_, e, null, t);
      return i.lanes = a, i;
    }
    function yw() {
      var e = Ua(L, null, null, Ze);
      return e.elementType = "DELETED", e;
    }
    function gw(e) {
      var t = Ua(we, null, null, Ze);
      return t.stateNode = e, t;
    }
    function h4(e, t, a) {
      var i = e.children !== null ? e.children : [], l = Ua(M, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function f7(e, t) {
      return e === null && (e = Ua(N, null, null, Ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Cw(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Xh, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ht, this.eventTimes = zc(te), this.expirationTimes = zc(Ft), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = zc(te), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < Wt; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case v0:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Jl:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function d7(e, t, a, i, l, c, v, g, S, T) {
      var D = new Cw(e, t, a, g, S), U = pw(t, c);
      D.current = U, U.stateNode = D;
      {
        var z = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = z;
      }
      return b5(U), D;
    }
    var m4 = "18.2.0";
    function xw(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return jt(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ka,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var y4, g4;
    y4 = !1, g4 = {};
    function p7(e) {
      if (!e)
        return Ha;
      var t = sa(e), a = rC(t);
      if (t.tag === b) {
        var i = t.type;
        if (oo(i))
          return Vm(t, i, a);
      }
      return a;
    }
    function Sw(e, t) {
      {
        var a = sa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = pa(a);
        if (l === null)
          return null;
        if (l.mode & an) {
          var c = rt(a) || "Component";
          if (!g4[c]) {
            g4[c] = !0;
            var v = wn;
            try {
              zt(l), a.mode & an ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? zt(v) : kn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function v7(e, t, a, i, l, c, v, g) {
      var S = !1, T = null;
      return d7(e, t, S, T, a, i, l, c, v);
    }
    function h7(e, t, a, i, l, c, v, g, S, T) {
      var D = !0, U = d7(a, i, D, e, l, c, v, g, S);
      U.context = p7(null);
      var z = U.current, Q = ta(), W = cu(z), q = el(Q, W);
      return q.callback = t ?? null, nu(z, q, W), DS(U, W, Q), U;
    }
    function n2(e, t, a, i) {
      hp(t, e);
      var l = t.current, c = ta(), v = cu(l);
      Mo(v);
      var g = p7(a);
      t.context === null ? t.context = g : t.pendingContext = g, oa && wn !== null && !y4 && (y4 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, rt(wn) || "Unknown"));
      var S = el(c, v);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var T = nu(l, S, v);
      return T !== null && (tr(T, l, v, c), k0(T, l, v)), v;
    }
    function gv(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case L:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ww(e) {
      switch (e.tag) {
        case R: {
          var t = e.stateNode;
          if (On(t)) {
            var a = mh(t);
            NS(t, a);
          }
          break;
        }
        case K: {
          al(function() {
            var l = Sa(e, We);
            if (l !== null) {
              var c = ta();
              tr(l, e, We, c);
            }
          });
          var i = We;
          C4(e, i);
          break;
        }
      }
    }
    function m7(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = kp(a.retryLane, t));
    }
    function C4(e, t) {
      m7(e, t);
      var a = e.alternate;
      a && m7(a, t);
    }
    function bw(e) {
      if (e.tag === K) {
        var t = Ol, a = Sa(e, t);
        if (a !== null) {
          var i = ta();
          tr(a, e, t, i);
        }
        C4(e, t);
      }
    }
    function Ew(e) {
      if (e.tag === K) {
        var t = cu(e), a = Sa(e, t);
        if (a !== null) {
          var i = ta();
          tr(a, e, t, i);
        }
        C4(e, t);
      }
    }
    function y7(e) {
      var t = dp(e);
      return t === null ? null : t.stateNode;
    }
    var g7 = function(e) {
      return null;
    };
    function Tw(e) {
      return g7(e);
    }
    var C7 = function(e) {
      return !1;
    };
    function Rw(e) {
      return C7(e);
    }
    var x7 = null, S7 = null, w7 = null, b7 = null, E7 = null, T7 = null, R7 = null, k7 = null, D7 = null;
    {
      var L7 = function(e, t, a) {
        var i = t[a], l = zn(e) ? e.slice() : dt({}, e);
        return a + 1 === t.length ? (zn(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = L7(e[i], t, a + 1), l);
      }, M7 = function(e, t) {
        return L7(e, t, 0);
      }, O7 = function(e, t, a, i) {
        var l = t[i], c = zn(e) ? e.slice() : dt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          c[v] = c[l], zn(c) ? c.splice(l, 1) : delete c[l];
        } else
          c[l] = O7(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return c;
      }, N7 = function(e, t, a) {
        if (t.length !== a.length) {
          x("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              x("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return O7(e, t, a, 0);
      }, _7 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], c = zn(e) ? e.slice() : dt({}, e);
        return c[l] = _7(e[l], t, a + 1, i), c;
      }, A7 = function(e, t, a) {
        return _7(e, t, 0, a);
      }, x4 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x7 = function(e, t, a, i) {
        var l = x4(e, t);
        if (l !== null) {
          var c = A7(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = dt({}, e.memoizedProps);
          var v = Sa(e, We);
          v !== null && tr(v, e, We, Ft);
        }
      }, S7 = function(e, t, a) {
        var i = x4(e, t);
        if (i !== null) {
          var l = M7(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = dt({}, e.memoizedProps);
          var c = Sa(e, We);
          c !== null && tr(c, e, We, Ft);
        }
      }, w7 = function(e, t, a, i) {
        var l = x4(e, t);
        if (l !== null) {
          var c = N7(l.memoizedState, a, i);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = dt({}, e.memoizedProps);
          var v = Sa(e, We);
          v !== null && tr(v, e, We, Ft);
        }
      }, b7 = function(e, t, a) {
        e.pendingProps = A7(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Sa(e, We);
        i !== null && tr(i, e, We, Ft);
      }, E7 = function(e, t) {
        e.pendingProps = M7(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Sa(e, We);
        a !== null && tr(a, e, We, Ft);
      }, T7 = function(e, t, a) {
        e.pendingProps = N7(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Sa(e, We);
        i !== null && tr(i, e, We, Ft);
      }, R7 = function(e) {
        var t = Sa(e, We);
        t !== null && tr(t, e, We, Ft);
      }, k7 = function(e) {
        g7 = e;
      }, D7 = function(e) {
        C7 = e;
      };
    }
    function kw(e) {
      var t = pa(e);
      return t === null ? null : t.stateNode;
    }
    function Dw(e) {
      return null;
    }
    function Lw() {
      return wn;
    }
    function Mw(e) {
      var t = e.findFiberByHostInstance, a = f.ReactCurrentDispatcher;
      return Ld({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: x7,
        overrideHookStateDeletePath: S7,
        overrideHookStateRenamePath: w7,
        overrideProps: b7,
        overridePropsDeletePath: E7,
        overridePropsRenamePath: T7,
        setErrorHandler: k7,
        setSuspenseHandler: D7,
        scheduleUpdate: R7,
        currentDispatcherRef: a,
        findHostInstanceByFiber: kw,
        findFiberByHostInstance: t || Dw,
        // React Refresh
        findHostInstancesForRefresh: ow,
        scheduleRefresh: aw,
        scheduleRoot: iw,
        setRefreshHandler: rw,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Lw,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: m4
      });
    }
    var z7 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function S4(e) {
      this._internalRoot = e;
    }
    Cv.prototype.render = S4.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : xv(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== bn) {
          var i = y7(t.current);
          i && i.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      n2(e, t, null, null);
    }, Cv.prototype.unmount = S4.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Q8() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), al(function() {
          n2(null, e, null, null);
        }), Am(t);
      }
    };
    function Ow(e, t) {
      if (!xv(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      H7(e);
      var a = !1, i = !1, l = "", c = z7;
      t != null && (t.hydrate ? x("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === fl && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = v7(e, v0, null, a, i, l, c);
      l0(v.current, e);
      var g = e.nodeType === bn ? e.parentNode : e;
      return c1(g), new S4(v);
    }
    function Cv(e) {
      this._internalRoot = e;
    }
    function Nw(e) {
      e && zp(e);
    }
    Cv.prototype.unstable_scheduleHydration = Nw;
    function _w(e, t, a) {
      if (!xv(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      H7(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, c = !1, v = !1, g = "", S = z7;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var T = h7(t, null, e, v0, i, c, v, g, S);
      if (l0(T.current, e), c1(e), l)
        for (var D = 0; D < l.length; D++) {
          var U = l[D];
          PC(T, U);
        }
      return new Cv(T);
    }
    function xv(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === Oa || e.nodeType === So || !tt));
    }
    function r2(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === Oa || e.nodeType === So || e.nodeType === bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function H7(e) {
      e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), S1(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Aw = f.ReactCurrentOwner, U7;
    U7 = function(e) {
      if (e._reactRootContainer && e.nodeType !== bn) {
        var t = y7(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = w4(e), l = !!(i && Kl(i));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function w4(e) {
      return e ? e.nodeType === Oa ? e.documentElement : e.firstChild : null;
    }
    function $7() {
    }
    function zw(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var z = gv(v);
            c.call(z);
          };
        }
        var v = h7(
          t,
          i,
          e,
          Jl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $7
        );
        e._reactRootContainer = v, l0(v.current, e);
        var g = e.nodeType === bn ? e.parentNode : e;
        return c1(g), al(), v;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var z = gv(D);
            T.call(z);
          };
        }
        var D = v7(
          e,
          Jl,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $7
        );
        e._reactRootContainer = D, l0(D.current, e);
        var U = e.nodeType === bn ? e.parentNode : e;
        return c1(U), al(function() {
          n2(t, D, a, i);
        }), D;
      }
    }
    function Hw(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Sv(e, t, a, i, l) {
      U7(a), Hw(l === void 0 ? null : l, "render");
      var c = a._reactRootContainer, v;
      if (!c)
        v = zw(a, t, e, l, i);
      else {
        if (v = c, typeof l == "function") {
          var g = l;
          l = function() {
            var S = gv(v);
            g.call(S);
          };
        }
        n2(t, v, e, l);
      }
      return gv(v);
    }
    function Uw(e) {
      {
        var t = Aw.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", $t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Or ? e : Sw(e, "findDOMNode");
    }
    function $w(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !r2(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = S1(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Sv(null, e, t, !0, a);
    }
    function Vw(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !r2(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = S1(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Sv(null, e, t, !1, a);
    }
    function Fw(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !r2(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Pu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Sv(e, t, a, !1, i);
    }
    function Pw(e) {
      if (!r2(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = S1(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = w4(e), i = a && !Kl(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return al(function() {
          Sv(null, null, e, !1, function() {
            e._reactRootContainer = null, Am(e);
          });
        }), !0;
      } else {
        {
          var l = w4(e), c = !!(l && Kl(l)), v = e.nodeType === Or && r2(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ne(ww), Lp(bw), ns(Ew), Zd(ma), Op(Ju), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), sp(Iy), nc(J3, _S, al);
    function Bw(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xv(t))
        throw new Error("Target container is not a DOM element.");
      return xw(e, t, null, a);
    }
    function jw(e, t, a, i) {
      return Fw(e, t, a, i);
    }
    var b4 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Kl, af, u0, tc, $u, J3]
    };
    function Iw(e, t) {
      return b4.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ow(e, t);
    }
    function Yw(e, t, a) {
      return b4.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _w(e, t, a);
    }
    function Zw(e) {
      return Q8() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), al(e);
    }
    var Qw = Mw({
      findFiberByHostInstance: ds,
      bundleType: 1,
      version: m4,
      rendererPackageName: "react-dom"
    });
    if (!Qw && Ie && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var V7 = window.location.protocol;
      /^(https?|file):$/.test(V7) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (V7 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b4, Ta.createPortal = Bw, Ta.createRoot = Iw, Ta.findDOMNode = Uw, Ta.flushSync = Zw, Ta.hydrate = $w, Ta.hydrateRoot = Yw, Ta.render = Vw, Ta.unmountComponentAtNode = Pw, Ta.unstable_batchedUpdates = J3, Ta.unstable_renderSubtreeIntoContainer = jw, Ta.version = m4, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ta;
}
var Ra = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K7;
function uE() {
  if (K7)
    return Ra;
  K7 = 1;
  var u = pe, d = M9();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = /* @__PURE__ */ new Set(), C = {};
  function x(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (C[n] = r, n = 0; n < r.length; n++)
      y.add(r[n]);
  }
  var k = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), E = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, R = {};
  function M(n) {
    return E.call(R, n) ? !0 : E.call(N, n) ? !1 : b.test(n) ? R[n] = !0 : (N[n] = !0, !1);
  }
  function L(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function _(n, r, o, s) {
    if (r === null || typeof r > "u" || L(n, r, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function $(n, r, o, s, p, m, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = w;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    P[n] = new $(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    P[r] = new $(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    P[n] = new $(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    P[n] = new $(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    P[n] = new $(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    P[n] = new $(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    P[n] = new $(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    P[n] = new $(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    P[n] = new $(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function Y(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      V,
      Y
    );
    P[r] = new $(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(V, Y);
    P[r] = new $(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(V, Y);
    P[r] = new $(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    P[n] = new $(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    P[n] = new $(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function F(n, r, o, s) {
    var p = P.hasOwnProperty(r) ? P[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (_(r, o, p, s) && (o = null), s || p === null ? M(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var X = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, K = Symbol.for("react.element"), le = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), xe = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Ke = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), ot = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var de = Object.assign, Pe;
  function tt(n) {
    if (Pe === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        Pe = r && r[1] || "";
      }
    return `
` + Pe + n;
  }
  var lt = !1;
  function Ot(n, r) {
    if (!n || lt)
      return "";
    lt = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (G) {
            var s = G;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (G) {
            s = G;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (G) {
          s = G;
        }
        n();
      }
    } catch (G) {
      if (G && s && typeof G.stack == "string") {
        for (var p = G.stack.split(`
`), m = s.stack.split(`
`), w = p.length - 1, O = m.length - 1; 1 <= w && 0 <= O && p[w] !== m[O]; )
          O--;
        for (; 1 <= w && 0 <= O; w--, O--)
          if (p[w] !== m[O]) {
            if (w !== 1 || O !== 1)
              do
                if (w--, O--, 0 > O || p[w] !== m[O]) {
                  var A = `
` + p[w].replace(" at new ", " at ");
                  return n.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", n.displayName)), A;
                }
              while (1 <= w && 0 <= O);
            break;
          }
      }
    } finally {
      lt = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? tt(n) : "";
  }
  function Bt(n) {
    switch (n.tag) {
      case 5:
        return tt(n.type);
      case 16:
        return tt("Lazy");
      case 13:
        return tt("Suspense");
      case 19:
        return tt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ot(n.type, !1), n;
      case 11:
        return n = Ot(n.type.render, !1), n;
      case 1:
        return n = Ot(n.type, !0), n;
      default:
        return "";
    }
  }
  function kt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ue:
        return "Fragment";
      case le:
        return "Portal";
      case ye:
        return "Profiler";
      case ae:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case xe:
          return (n.displayName || "Context") + ".Consumer";
        case we:
          return (n._context.displayName || "Context") + ".Provider";
        case Me:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ke:
          return r = n.displayName || null, r !== null ? r : kt(n.type) || "Memo";
        case be:
          r = n._payload, n = n._init;
          try {
            return kt(n(r));
          } catch {
          }
      }
    return null;
  }
  function _t(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return kt(r);
      case 8:
        return r === ae ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Tt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function wt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function hn(n) {
    var r = wt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(w) {
        s = "" + w, m.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(w) {
        s = "" + w;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function ut(n) {
    n._valueTracker || (n._valueTracker = hn(n));
  }
  function Se(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = wt(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Ie(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function st(n, r) {
    var o = r.checked;
    return de({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function ft(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = Tt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function At(n, r) {
    r = r.checked, r != null && F(n, "checked", r, !1);
  }
  function Dt(n, r) {
    At(n, r);
    var o = Tt(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? jt(n, r.type, o) : r.hasOwnProperty("defaultValue") && jt(n, r.type, Tt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function tn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function jt(n, r, o) {
    (r !== "number" || Ie(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var jn = Array.isArray;
  function Kt(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++)
        r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++)
        p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Tt(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function kr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return de({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function rr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(f(92));
        if (jn(o)) {
          if (1 < o.length)
            throw Error(f(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Tt(o) };
  }
  function Dr(n, r) {
    var o = Tt(r.value), s = Tt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function Lr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function vr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function It(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? vr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var In, Ye = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (In = In || document.createElement("div"), In.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = In.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function gt(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var se = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(se).forEach(function(n) {
    ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), se[r] = se[n];
    });
  });
  function Ge(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || se.hasOwnProperty(n) && se[n] ? ("" + r).trim() : r + "px";
  }
  function Ct(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, p = Ge(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
      }
  }
  var Yt = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function An(n, r) {
    if (r) {
      if (Yt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(f(62));
    }
  }
  function un(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Mr = null;
  function qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yr = null, nn = null, sn = null;
  function y2(n) {
    if (n = Pu(n)) {
      if (typeof Yr != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = Be(r), Yr(n.stateNode, n.type, r));
    }
  }
  function _s(n) {
    nn ? sn ? sn.push(n) : sn = [n] : nn = n;
  }
  function As() {
    if (nn) {
      var n = nn, r = sn;
      if (sn = nn = null, y2(n), r)
        for (n = 0; n < r.length; n++)
          y2(r[n]);
    }
  }
  function g2(n, r) {
    return n(r);
  }
  function C2() {
  }
  var zs = !1;
  function Vf(n, r, o) {
    if (zs)
      return n(r, o);
    zs = !0;
    try {
      return g2(n, r, o);
    } finally {
      zs = !1, (nn !== null || sn !== null) && (C2(), As());
    }
  }
  function yu(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = Be(o);
    if (s === null)
      return null;
    o = s[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(f(231, r, typeof o));
    return o;
  }
  var Hs = !1;
  if (k)
    try {
      var yo = {};
      Object.defineProperty(yo, "passive", { get: function() {
        Hs = !0;
      } }), window.addEventListener("test", yo, yo), window.removeEventListener("test", yo, yo);
    } catch {
      Hs = !1;
    }
  function fl(n, r, o, s, p, m, w, O, A) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, G);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var ka = !1, ri = null, dl = !1, gu = null, Ff = { onError: function(n) {
    ka = !0, ri = n;
  } };
  function Pf(n, r, o, s, p, m, w, O, A) {
    ka = !1, ri = null, fl.apply(Ff, arguments);
  }
  function pl(n, r, o, s, p, m, w, O, A) {
    if (Pf.apply(this, arguments), ka) {
      if (ka) {
        var G = ri;
        ka = !1, ri = null;
      } else
        throw Error(f(198));
      dl || (dl = !0, gu = G);
    }
  }
  function Pa(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Cu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function vl(n) {
    if (Pa(n) !== n)
      throw Error(f(188));
  }
  function hr(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Pa(n), r === null)
        throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null)
        break;
      var m = p.alternate;
      if (m === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === m.child) {
        for (m = p.child; m; ) {
          if (m === o)
            return vl(p), n;
          if (m === s)
            return vl(p), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== s.return)
        o = p, s = m;
      else {
        for (var w = !1, O = p.child; O; ) {
          if (O === o) {
            w = !0, o = p, s = m;
            break;
          }
          if (O === s) {
            w = !0, s = p, o = m;
            break;
          }
          O = O.sibling;
        }
        if (!w) {
          for (O = m.child; O; ) {
            if (O === o) {
              w = !0, o = m, s = p;
              break;
            }
            if (O === s) {
              w = !0, s = m, o = p;
              break;
            }
            O = O.sibling;
          }
          if (!w)
            throw Error(f(189));
        }
      }
      if (o.alternate !== s)
        throw Error(f(190));
    }
    if (o.tag !== 3)
      throw Error(f(188));
    return o.stateNode.current === o ? n : r;
  }
  function x2(n) {
    return n = hr(n), n !== null ? S2(n) : null;
  }
  function S2(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = S2(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Bf = d.unstable_scheduleCallback, w2 = d.unstable_cancelCallback, Yv = d.unstable_shouldYield, Zv = d.unstable_requestPaint, cn = d.unstable_now, Qv = d.unstable_getCurrentPriorityLevel, ai = d.unstable_ImmediatePriority, dt = d.unstable_UserBlockingPriority, zi = d.unstable_NormalPriority, b2 = d.unstable_LowPriority, jf = d.unstable_IdlePriority, xu = null, Da = null;
  function E2(n) {
    if (Da && typeof Da.onCommitFiberRoot == "function")
      try {
        Da.onCommitFiberRoot(xu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ia = Math.clz32 ? Math.clz32 : Wv, T2 = Math.log, R2 = Math.LN2;
  function Wv(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (T2(n) / R2 | 0) | 0;
  }
  var Us = 64, hl = 4194304;
  function go(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function La(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, p = n.suspendedLanes, m = n.pingedLanes, w = o & 268435455;
    if (w !== 0) {
      var O = w & ~p;
      O !== 0 ? s = go(O) : (m &= w, m !== 0 && (s = go(m)));
    } else
      w = o & ~p, w !== 0 ? s = go(w) : m !== 0 && (s = go(m));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, m = r & -r, p >= m || p === 16 && (m & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - ia(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function If(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $s(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var w = 31 - ia(m), O = 1 << w, A = p[w];
      A === -1 ? (!(O & o) || O & s) && (p[w] = If(O, r)) : A <= r && (n.expiredLanes |= O), m &= ~O;
    }
  }
  function Yf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Vs() {
    var n = Us;
    return Us <<= 1, !(Us & 4194240) && (Us = 64), n;
  }
  function Zf(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Co(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ia(r), n[r] = o;
  }
  function Gv(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - ia(o), m = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~m;
    }
  }
  function Su(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - ia(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var Nt = 0;
  function Qf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var k2, Fs, $t, D2, Wf, rt = !1, wu = [], wn = null, oa = null, la = null, bu = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), zt = [], Xv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ma(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        la = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kn.delete(r.pointerId);
    }
  }
  function ar(n, r, o, s, p, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: m, targetContainers: [p] }, r !== null && (r = Pu(r), r !== null && Fs(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function Hi(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return wn = ar(wn, n, r, o, s, p), !0;
      case "dragenter":
        return oa = ar(oa, n, r, o, s, p), !0;
      case "mouseover":
        return la = ar(la, n, r, o, s, p), !0;
      case "pointerover":
        var m = p.pointerId;
        return bu.set(m, ar(bu.get(m) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return m = p.pointerId, kn.set(m, ar(kn.get(m) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function L2(n) {
    var r = sa(n.target);
    if (r !== null) {
      var o = Pa(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Cu(o), r !== null) {
            n.blockedOn = r, Wf(n.priority, function() {
              $t(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ml(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = js(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        Mr = s, o.target.dispatchEvent(s), Mr = null;
      } else
        return r = Pu(o), r !== null && Fs(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Gf(n, r, o) {
    ml(n) && o.delete(r);
  }
  function M2() {
    rt = !1, wn !== null && ml(wn) && (wn = null), oa !== null && ml(oa) && (oa = null), la !== null && ml(la) && (la = null), bu.forEach(Gf), kn.forEach(Gf);
  }
  function Eu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, rt || (rt = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, M2)));
  }
  function Tu(n) {
    function r(p) {
      return Eu(p, n);
    }
    if (0 < wu.length) {
      Eu(wu[0], n);
      for (var o = 1; o < wu.length; o++) {
        var s = wu[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (wn !== null && Eu(wn, n), oa !== null && Eu(oa, n), la !== null && Eu(la, n), bu.forEach(r), kn.forEach(r), o = 0; o < zt.length; o++)
      s = zt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < zt.length && (o = zt[0], o.blockedOn === null); )
      L2(o), o.blockedOn === null && zt.shift();
  }
  var yl = X.ReactCurrentBatchConfig, xo = !0;
  function O2(n, r, o, s) {
    var p = Nt, m = yl.transition;
    yl.transition = null;
    try {
      Nt = 1, Bs(n, r, o, s);
    } finally {
      Nt = p, yl.transition = m;
    }
  }
  function Ps(n, r, o, s) {
    var p = Nt, m = yl.transition;
    yl.transition = null;
    try {
      Nt = 4, Bs(n, r, o, s);
    } finally {
      Nt = p, yl.transition = m;
    }
  }
  function Bs(n, r, o, s) {
    if (xo) {
      var p = js(n, r, o, s);
      if (p === null)
        tc(n, r, s, Ru, o), Ma(n, s);
      else if (Hi(p, n, r, o, s))
        s.stopPropagation();
      else if (Ma(n, s), r & 4 && -1 < Xv.indexOf(n)) {
        for (; p !== null; ) {
          var m = Pu(p);
          if (m !== null && k2(m), m = js(n, r, o, s), m === null && tc(n, r, s, Ru, o), m === p)
            break;
          p = m;
        }
        p !== null && s.stopPropagation();
      } else
        tc(n, r, s, null, o);
    }
  }
  var Ru = null;
  function js(n, r, o, s) {
    if (Ru = null, n = qt(s), n = sa(n), n !== null)
      if (r = Pa(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Cu(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Ru = n, null;
  }
  function Xf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Qv()) {
          case ai:
            return 1;
          case dt:
            return 4;
          case zi:
          case b2:
            return 16;
          case jf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, ku = null, Du = null;
  function Kf() {
    if (Du)
      return Du;
    var n, r = ku, o = r.length, s, p = "value" in ii ? ii.value : ii.textContent, m = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var w = o - n;
    for (s = 1; s <= w && r[o - s] === p[m - s]; s++)
      ;
    return Du = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function gl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Lu() {
    return !0;
  }
  function N2() {
    return !1;
  }
  function Zr(n) {
    function r(o, s, p, m, w) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = m, this.target = w, this.currentTarget = null;
      for (var O in n)
        n.hasOwnProperty(O) && (o = n[O], this[O] = o ? o(m) : m[O]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Lu : N2, this.isPropagationStopped = N2, this;
    }
    return de(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Lu);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Lu);
    }, persist: function() {
    }, isPersistent: Lu }), r;
  }
  var Ui = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Is = Zr(Ui), Cl = de({}, Ui, { view: 0, detail: 0 }), _2 = Zr(Cl), Ys, qf, Mu, zn = de({}, Cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Mu && (Mu && n.type === "mousemove" ? (Ys = n.screenX - Mu.screenX, qf = n.screenY - Mu.screenY) : qf = Ys = 0, Mu = n), Ys);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qf;
  } }), Zs = Zr(zn), A2 = de({}, zn, { dataTransfer: 0 }), z2 = Zr(A2), Kv = de({}, Cl, { relatedTarget: 0 }), $i = Zr(Kv), Jf = de({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), H2 = Zr(Jf), qv = de({}, Ui, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Jv = Zr(qv), eh = de({}, Ui, { data: 0 }), ed = Zr(eh), td = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, U2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, $2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function V2(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = $2[n]) ? !!r[n] : !1;
  }
  function nd() {
    return V2;
  }
  var oi = de({}, Cl, { key: function(n) {
    if (n.key) {
      var r = td[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = gl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? U2[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nd, charCode: function(n) {
    return n.type === "keypress" ? gl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? gl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), th = Zr(oi), rd = de({}, zn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qs = Zr(rd), ad = de({}, Cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nd }), nh = Zr(ad), Ws = de({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), F2 = Zr(Ws), Or = de({}, zn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), li = Zr(Or), bn = [9, 13, 27, 32], Oa = k && "CompositionEvent" in window, So = null;
  k && "documentMode" in document && (So = document.documentMode);
  var Gs = k && "TextEvent" in window && !So, P2 = k && (!Oa || So && 8 < So && 11 >= So), xl = " ", B2 = !1;
  function j2(n, r) {
    switch (n) {
      case "keyup":
        return bn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Sl = !1;
  function rh(n, r) {
    switch (n) {
      case "compositionend":
        return Xs(r);
      case "keypress":
        return r.which !== 32 ? null : (B2 = !0, xl);
      case "textInput":
        return n = r.data, n === xl && B2 ? null : n;
      default:
        return null;
    }
  }
  function ah(n, r) {
    if (Sl)
      return n === "compositionend" || !Oa && j2(n, r) ? (n = Kf(), Du = ku = ii = null, Sl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return P2 && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var I2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Y2(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!I2[n.type] : r === "textarea";
  }
  function Z2(n, r, o, s) {
    _s(s), r = $u(r, "onChange"), 0 < r.length && (o = new Is("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var Ou = null, wl = null;
  function bl(n) {
    ec(n, 0);
  }
  function El(n) {
    var r = Rl(n);
    if (Se(r))
      return n;
  }
  function Q2(n, r) {
    if (n === "change")
      return r;
  }
  var id = !1;
  if (k) {
    var od;
    if (k) {
      var ld = "oninput" in document;
      if (!ld) {
        var W2 = document.createElement("div");
        W2.setAttribute("oninput", "return;"), ld = typeof W2.oninput == "function";
      }
      od = ld;
    } else
      od = !1;
    id = od && (!document.documentMode || 9 < document.documentMode);
  }
  function G2() {
    Ou && (Ou.detachEvent("onpropertychange", X2), wl = Ou = null);
  }
  function X2(n) {
    if (n.propertyName === "value" && El(wl)) {
      var r = [];
      Z2(r, wl, n, qt(n)), Vf(bl, r);
    }
  }
  function ih(n, r, o) {
    n === "focusin" ? (G2(), Ou = r, wl = o, Ou.attachEvent("onpropertychange", X2)) : n === "focusout" && G2();
  }
  function oh(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return El(wl);
  }
  function lh(n, r) {
    if (n === "click")
      return El(r);
  }
  function K2(n, r) {
    if (n === "input" || n === "change")
      return El(r);
  }
  function uh(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ua = typeof Object.is == "function" ? Object.is : uh;
  function Nu(n, r) {
    if (ua(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!E.call(r, p) || !ua(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function q2(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function J2(n, r) {
    var o = q2(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = q2(o);
    }
  }
  function ep(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? ep(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ks() {
    for (var n = window, r = Ie(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Ie(n.document);
    }
    return r;
  }
  function ui(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function qs(n) {
    var r = Ks(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && ep(o.ownerDocument.documentElement, o)) {
      if (s !== null && ui(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, m = Math.min(s.start, p);
          s = s.end === void 0 ? m : Math.min(s.end, p), !n.extend && m > s && (p = s, s = m, m = p), p = J2(o, m);
          var w = J2(
            o,
            s
          );
          p && w && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), m > s ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var tp = k && "documentMode" in document && 11 >= document.documentMode, Na = null, ud = null, _u = null, sd = !1;
  function np(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    sd || Na == null || Na !== Ie(s) || (s = Na, "selectionStart" in s && ui(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), _u && Nu(_u, s) || (_u = s, s = $u(ud, "onSelect"), 0 < s.length && (r = new Is("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = Na)));
  }
  function Js(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var wo = { animationend: Js("Animation", "AnimationEnd"), animationiteration: Js("Animation", "AnimationIteration"), animationstart: Js("Animation", "AnimationStart"), transitionend: Js("Transition", "TransitionEnd") }, cd = {}, fd = {};
  k && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete wo.animationend.animation, delete wo.animationiteration.animation, delete wo.animationstart.animation), "TransitionEvent" in window || delete wo.transitionend.transition);
  function Hn(n) {
    if (cd[n])
      return cd[n];
    if (!wo[n])
      return n;
    var r = wo[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in fd)
        return cd[n] = r[o];
    return n;
  }
  var dd = Hn("animationend"), rp = Hn("animationiteration"), ap = Hn("animationstart"), ip = Hn("transitionend"), op = /* @__PURE__ */ new Map(), lp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function si(n, r) {
    op.set(n, r), x(r, [n]);
  }
  for (var Au = 0; Au < lp.length; Au++) {
    var bo = lp[Au], sh = bo.toLowerCase(), zu = bo[0].toUpperCase() + bo.slice(1);
    si(sh, "on" + zu);
  }
  si(dd, "onAnimationEnd"), si(rp, "onAnimationIteration"), si(ap, "onAnimationStart"), si("dblclick", "onDoubleClick"), si("focusin", "onFocus"), si("focusout", "onBlur"), si(ip, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ch = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hu));
  function up(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, pl(s, r, void 0, n), n.currentTarget = null;
  }
  function ec(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var w = s.length - 1; 0 <= w; w--) {
            var O = s[w], A = O.instance, G = O.currentTarget;
            if (O = O.listener, A !== m && p.isPropagationStopped())
              break e;
            up(p, O, G), m = A;
          }
        else
          for (w = 0; w < s.length; w++) {
            if (O = s[w], A = O.instance, G = O.currentTarget, O = O.listener, A !== m && p.isPropagationStopped())
              break e;
            up(p, O, G), m = A;
          }
      }
    }
    if (dl)
      throw n = gu, dl = !1, gu = null, n;
  }
  function Vt(n, r) {
    var o = r[Cd];
    o === void 0 && (o = r[Cd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (sp(r, n, 2, !1), o.add(s));
  }
  function Vi(n, r, o) {
    var s = 0;
    r && (s |= 4), sp(o, n, s, r);
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Tl(n) {
    if (!n[ci]) {
      n[ci] = !0, y.forEach(function(o) {
        o !== "selectionchange" && (ch.has(o) || Vi(o, !1, n), Vi(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ci] || (r[ci] = !0, Vi("selectionchange", !1, r));
    }
  }
  function sp(n, r, o, s) {
    switch (Xf(r)) {
      case 1:
        var p = O2;
        break;
      case 4:
        p = Ps;
        break;
      default:
        p = Bs;
    }
    o = p.bind(null, r, o, n), p = void 0, !Hs || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function tc(n, r, o, s, p) {
    var m = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var w = s.tag;
          if (w === 3 || w === 4) {
            var O = s.stateNode.containerInfo;
            if (O === p || O.nodeType === 8 && O.parentNode === p)
              break;
            if (w === 4)
              for (w = s.return; w !== null; ) {
                var A = w.tag;
                if ((A === 3 || A === 4) && (A = w.stateNode.containerInfo, A === p || A.nodeType === 8 && A.parentNode === p))
                  return;
                w = w.return;
              }
            for (; O !== null; ) {
              if (w = sa(O), w === null)
                return;
              if (A = w.tag, A === 5 || A === 6) {
                s = m = w;
                continue e;
              }
              O = O.parentNode;
            }
          }
          s = s.return;
        }
    Vf(function() {
      var G = m, oe = qt(o), ce = [];
      e: {
        var ie = op.get(n);
        if (ie !== void 0) {
          var Te = Is, _e = n;
          switch (n) {
            case "keypress":
              if (gl(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Te = th;
              break;
            case "focusin":
              _e = "focus", Te = $i;
              break;
            case "focusout":
              _e = "blur", Te = $i;
              break;
            case "beforeblur":
            case "afterblur":
              Te = $i;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Te = Zs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Te = z2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Te = nh;
              break;
            case dd:
            case rp:
            case ap:
              Te = H2;
              break;
            case ip:
              Te = F2;
              break;
            case "scroll":
              Te = _2;
              break;
            case "wheel":
              Te = li;
              break;
            case "copy":
            case "cut":
            case "paste":
              Te = Jv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Te = Qs;
          }
          var He = (r & 4) !== 0, yn = !He && n === "scroll", B = He ? ie !== null ? ie + "Capture" : null : ie;
          He = [];
          for (var H = G, Z; H !== null; ) {
            Z = H;
            var ve = Z.stateNode;
            if (Z.tag === 5 && ve !== null && (Z = ve, B !== null && (ve = yu(H, B), ve != null && He.push(Uu(H, ve, Z)))), yn)
              break;
            H = H.return;
          }
          0 < He.length && (ie = new Te(ie, _e, null, o, oe), ce.push({ event: ie, listeners: He }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", Te = n === "mouseout" || n === "pointerout", ie && o !== Mr && (_e = o.relatedTarget || o.fromElement) && (sa(_e) || _e[fi]))
            break e;
          if ((Te || ie) && (ie = oe.window === oe ? oe : (ie = oe.ownerDocument) ? ie.defaultView || ie.parentWindow : window, Te ? (_e = o.relatedTarget || o.toElement, Te = G, _e = _e ? sa(_e) : null, _e !== null && (yn = Pa(_e), _e !== yn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (Te = null, _e = G), Te !== _e)) {
            if (He = Zs, ve = "onMouseLeave", B = "onMouseEnter", H = "mouse", (n === "pointerout" || n === "pointerover") && (He = Qs, ve = "onPointerLeave", B = "onPointerEnter", H = "pointer"), yn = Te == null ? ie : Rl(Te), Z = _e == null ? ie : Rl(_e), ie = new He(ve, H + "leave", Te, o, oe), ie.target = yn, ie.relatedTarget = Z, ve = null, sa(oe) === G && (He = new He(B, H + "enter", _e, o, oe), He.target = Z, He.relatedTarget = yn, ve = He), yn = ve, Te && _e)
              t: {
                for (He = Te, B = _e, H = 0, Z = He; Z; Z = Eo(Z))
                  H++;
                for (Z = 0, ve = B; ve; ve = Eo(ve))
                  Z++;
                for (; 0 < H - Z; )
                  He = Eo(He), H--;
                for (; 0 < Z - H; )
                  B = Eo(B), Z--;
                for (; H--; ) {
                  if (He === B || B !== null && He === B.alternate)
                    break t;
                  He = Eo(He), B = Eo(B);
                }
                He = null;
              }
            else
              He = null;
            Te !== null && pd(ce, ie, Te, He, !1), _e !== null && yn !== null && pd(ce, yn, _e, He, !0);
          }
        }
        e: {
          if (ie = G ? Rl(G) : window, Te = ie.nodeName && ie.nodeName.toLowerCase(), Te === "select" || Te === "input" && ie.type === "file")
            var Ue = Q2;
          else if (Y2(ie))
            if (id)
              Ue = K2;
            else {
              Ue = oh;
              var Ae = ih;
            }
          else
            (Te = ie.nodeName) && Te.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Ue = lh);
          if (Ue && (Ue = Ue(n, G))) {
            Z2(ce, Ue, o, oe);
            break e;
          }
          Ae && Ae(n, ie, G), n === "focusout" && (Ae = ie._wrapperState) && Ae.controlled && ie.type === "number" && jt(ie, "number", ie.value);
        }
        switch (Ae = G ? Rl(G) : window, n) {
          case "focusin":
            (Y2(Ae) || Ae.contentEditable === "true") && (Na = Ae, ud = G, _u = null);
            break;
          case "focusout":
            _u = ud = Na = null;
            break;
          case "mousedown":
            sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sd = !1, np(ce, o, oe);
            break;
          case "selectionchange":
            if (tp)
              break;
          case "keydown":
          case "keyup":
            np(ce, o, oe);
        }
        var Ve;
        if (Oa)
          e: {
            switch (n) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          Sl ? j2(n, o) && (Je = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Je = "onCompositionStart");
        Je && (P2 && o.locale !== "ko" && (Sl || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Sl && (Ve = Kf()) : (ii = oe, ku = "value" in ii ? ii.value : ii.textContent, Sl = !0)), Ae = $u(G, Je), 0 < Ae.length && (Je = new ed(Je, n, null, o, oe), ce.push({ event: Je, listeners: Ae }), Ve ? Je.data = Ve : (Ve = Xs(o), Ve !== null && (Je.data = Ve)))), (Ve = Gs ? rh(n, o) : ah(n, o)) && (G = $u(G, "onBeforeInput"), 0 < G.length && (oe = new ed("onBeforeInput", "beforeinput", null, o, oe), ce.push({ event: oe, listeners: G }), oe.data = Ve));
      }
      ec(ce, r);
    });
  }
  function Uu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function $u(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, m = p.stateNode;
      p.tag === 5 && m !== null && (p = m, m = yu(n, o), m != null && s.unshift(Uu(n, m, p)), m = yu(n, r), m != null && s.push(Uu(n, m, p))), n = n.return;
    }
    return s;
  }
  function Eo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function pd(n, r, o, s, p) {
    for (var m = r._reactName, w = []; o !== null && o !== s; ) {
      var O = o, A = O.alternate, G = O.stateNode;
      if (A !== null && A === s)
        break;
      O.tag === 5 && G !== null && (O = G, p ? (A = yu(o, m), A != null && w.unshift(Uu(o, A, O))) : p || (A = yu(o, m), A != null && w.push(Uu(o, A, O)))), o = o.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var vd = /\r\n?/g, fh = /\u0000|\uFFFD/g;
  function hd(n) {
    return (typeof n == "string" ? n : "" + n).replace(vd, `
`).replace(fh, "");
  }
  function nc(n, r, o) {
    if (r = hd(r), hd(n) !== r && o)
      throw Error(f(425));
  }
  function rc() {
  }
  var md = null, To = null;
  function Vu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ro = typeof setTimeout == "function" ? setTimeout : void 0, cp = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(n) {
    return yd.resolve(null).then(n).catch(dh);
  } : Ro;
  function dh(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Fi(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8)
        if (o = p.data, o === "/$") {
          if (s === 0) {
            n.removeChild(p), Tu(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    Tu(r);
  }
  function _a(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Fu(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Pi = Math.random().toString(36).slice(2), Ba = "__reactFiber$" + Pi, ko = "__reactProps$" + Pi, fi = "__reactContainer$" + Pi, Cd = "__reactEvents$" + Pi, ph = "__reactListeners$" + Pi, xd = "__reactHandles$" + Pi;
  function sa(n) {
    var r = n[Ba];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[fi] || o[Ba]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Fu(n); n !== null; ) {
            if (o = n[Ba])
              return o;
            n = Fu(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Pu(n) {
    return n = n[Ba] || n[fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Rl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function Be(n) {
    return n[ko] || null;
  }
  var Bi = [], Zt = -1;
  function at(n) {
    return { current: n };
  }
  function Rt(n) {
    0 > Zt || (n.current = Bi[Zt], Bi[Zt] = null, Zt--);
  }
  function Lt(n, r) {
    Zt++, Bi[Zt] = n.current, n.current = r;
  }
  var ja = {}, qe = at(ja), fn = at(!1), Nr = ja;
  function ca(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return ja;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, m;
    for (m in o)
      p[m] = r[m];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Jt(n) {
    return n = n.childContextTypes, n != null;
  }
  function fa() {
    Rt(fn), Rt(qe);
  }
  function ji(n, r, o) {
    if (qe.current !== ja)
      throw Error(f(168));
    Lt(qe, r), Lt(fn, o);
  }
  function Bu(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var p in s)
      if (!(p in r))
        throw Error(f(108, _t(n) || "Unknown", p));
    return de({}, o, s);
  }
  function ac(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ja, Nr = qe.current, Lt(qe, n), Lt(fn, fn.current), !0;
  }
  function fp(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(f(169));
    o ? (n = Bu(n, r, Nr), s.__reactInternalMemoizedMergedChildContext = n, Rt(fn), Rt(qe), Lt(qe, n)) : Rt(fn), Lt(fn, o);
  }
  var Qr = null, Un = !1, ju = !1;
  function Sd(n) {
    Qr === null ? Qr = [n] : Qr.push(n);
  }
  function wd(n) {
    Un = !0, Sd(n);
  }
  function _r() {
    if (!ju && Qr !== null) {
      ju = !0;
      var n = 0, r = Nt;
      try {
        var o = Qr;
        for (Nt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        Qr = null, Un = !1;
      } catch (p) {
        throw Qr !== null && (Qr = Qr.slice(n + 1)), Bf(ai, _r), p;
      } finally {
        Nt = r, ju = !1;
      }
    }
    return null;
  }
  var Ii = [], Ar = 0, Do = null, kl = 0, zr = [], ir = 0, da = null, Yn = 1, di = "";
  function Wr(n, r) {
    Ii[Ar++] = kl, Ii[Ar++] = Do, Do = n, kl = r;
  }
  function bd(n, r, o) {
    zr[ir++] = Yn, zr[ir++] = di, zr[ir++] = da, da = n;
    var s = Yn;
    n = di;
    var p = 32 - ia(s) - 1;
    s &= ~(1 << p), o += 1;
    var m = 32 - ia(r) + p;
    if (30 < m) {
      var w = p - p % 5;
      m = (s & (1 << w) - 1).toString(32), s >>= w, p -= w, Yn = 1 << 32 - ia(r) + p | o << p | s, di = m + n;
    } else
      Yn = 1 << m | o << p | s, di = n;
  }
  function ic(n) {
    n.return !== null && (Wr(n, 1), bd(n, 1, 0));
  }
  function Ed(n) {
    for (; n === Do; )
      Do = Ii[--Ar], Ii[Ar] = null, kl = Ii[--Ar], Ii[Ar] = null;
    for (; n === da; )
      da = zr[--ir], zr[ir] = null, di = zr[--ir], zr[ir] = null, Yn = zr[--ir], zr[ir] = null;
  }
  var Gr = null, Hr = null, Qt = !1, pa = null;
  function Td(n, r) {
    var o = Ca(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function dp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Gr = n, Hr = _a(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Gr = n, Hr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = da !== null ? { id: Yn, overflow: di } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ca(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Gr = n, Hr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function oc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function lc(n) {
    if (Qt) {
      var r = Hr;
      if (r) {
        var o = r;
        if (!dp(n, r)) {
          if (oc(n))
            throw Error(f(418));
          r = _a(o.nextSibling);
          var s = Gr;
          r && dp(n, r) ? Td(s, o) : (n.flags = n.flags & -4097 | 2, Qt = !1, Gr = n);
        }
      } else {
        if (oc(n))
          throw Error(f(418));
        n.flags = n.flags & -4097 | 2, Qt = !1, Gr = n;
      }
    }
  }
  function pp(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Gr = n;
  }
  function uc(n) {
    if (n !== Gr)
      return !1;
    if (!Qt)
      return pp(n), Qt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Vu(n.type, n.memoizedProps)), r && (r = Hr)) {
      if (oc(n))
        throw vp(), Error(f(418));
      for (; r; )
        Td(n, r), r = _a(r.nextSibling);
    }
    if (pp(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Hr = _a(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Hr = null;
      }
    } else
      Hr = Gr ? _a(n.stateNode.nextSibling) : null;
    return !0;
  }
  function vp() {
    for (var n = Hr; n; )
      n = _a(n.nextSibling);
  }
  function rn() {
    Hr = Gr = null, Qt = !1;
  }
  function Rd(n) {
    pa === null ? pa = [n] : pa.push(n);
  }
  var sc = X.ReactCurrentBatchConfig;
  function Xr(n, r) {
    if (n && n.defaultProps) {
      r = de({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Ia = at(null), cc = null, Yi = null, kd = null;
  function Dd() {
    kd = Yi = cc = null;
  }
  function Zi(n) {
    var r = Ia.current;
    Rt(Ia), n._currentValue = r;
  }
  function $n(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function ge(n, r) {
    cc = n, kd = Yi = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (En = !0), n.firstContext = null);
  }
  function mn(n) {
    var r = n._currentValue;
    if (kd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Yi === null) {
        if (cc === null)
          throw Error(f(308));
        Yi = n, cc.dependencies = { lanes: 0, firstContext: n };
      } else
        Yi = Yi.next = n;
    return r;
  }
  var Zn = null;
  function Ld(n) {
    Zn === null ? Zn = [n] : Zn.push(n);
  }
  function hp(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Ld(r)) : (o.next = p.next, p.next = o), r.interleaved = o, pi(n, s);
  }
  function pi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Qi = !1;
  function Md(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Dn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function vi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Wi(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, pt & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, pi(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, Ld(s)) : (r.next = p.next, p.next = r), s.interleaved = r, pi(n, o);
  }
  function fc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Su(n, o);
    }
  }
  function Od(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var w = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? p = m = w : m = m.next = w, o = o.next;
        } while (o !== null);
        m === null ? p = m = r : m = m.next = r;
      } else
        p = m = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: m, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Gi(n, r, o, s) {
    var p = n.updateQueue;
    Qi = !1;
    var m = p.firstBaseUpdate, w = p.lastBaseUpdate, O = p.shared.pending;
    if (O !== null) {
      p.shared.pending = null;
      var A = O, G = A.next;
      A.next = null, w === null ? m = G : w.next = G, w = A;
      var oe = n.alternate;
      oe !== null && (oe = oe.updateQueue, O = oe.lastBaseUpdate, O !== w && (O === null ? oe.firstBaseUpdate = G : O.next = G, oe.lastBaseUpdate = A));
    }
    if (m !== null) {
      var ce = p.baseState;
      w = 0, oe = G = A = null, O = m;
      do {
        var ie = O.lane, Te = O.eventTime;
        if ((s & ie) === ie) {
          oe !== null && (oe = oe.next = {
            eventTime: Te,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var _e = n, He = O;
            switch (ie = r, Te = o, He.tag) {
              case 1:
                if (_e = He.payload, typeof _e == "function") {
                  ce = _e.call(Te, ce, ie);
                  break e;
                }
                ce = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = He.payload, ie = typeof _e == "function" ? _e.call(Te, ce, ie) : _e, ie == null)
                  break e;
                ce = de({}, ce, ie);
                break e;
              case 2:
                Qi = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, ie = p.effects, ie === null ? p.effects = [O] : ie.push(O));
        } else
          Te = { eventTime: Te, lane: ie, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, oe === null ? (G = oe = Te, A = ce) : oe = oe.next = Te, w |= ie;
        if (O = O.next, O === null) {
          if (O = p.shared.pending, O === null)
            break;
          ie = O, O = ie.next, ie.next = null, p.lastBaseUpdate = ie, p.shared.pending = null;
        }
      } while (!0);
      if (oe === null && (A = ce), p.baseState = A, p.firstBaseUpdate = G, p.lastBaseUpdate = oe, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          w |= p.lane, p = p.next;
        while (p !== r);
      } else
        m === null && (p.shared.lanes = 0);
      gi |= w, n.lanes = w, n.memoizedState = ce;
    }
  }
  function Lo(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], p = s.callback;
        if (p !== null) {
          if (s.callback = null, s = o, typeof p != "function")
            throw Error(f(191, p));
          p.call(s);
        }
      }
  }
  var mp = new u.Component().refs;
  function Nd(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : de({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var dc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Pa(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = sr(), p = Tn(n), m = vi(s, p);
    m.payload = r, o != null && (m.callback = o), r = Wi(n, m, p), r !== null && (cr(r, n, p, s), fc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = sr(), p = Tn(n), m = vi(s, p);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = Wi(n, m, p), r !== null && (cr(r, n, p, s), fc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = sr(), s = Tn(n), p = vi(o, s);
    p.tag = 2, r != null && (p.callback = r), r = Wi(n, p, s), r !== null && (cr(r, n, s, o), fc(r, n, s));
  } };
  function yp(n, r, o, s, p, m, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, m, w) : r.prototype && r.prototype.isPureReactComponent ? !Nu(o, s) || !Nu(p, m) : !0;
  }
  function gp(n, r, o) {
    var s = !1, p = ja, m = r.contextType;
    return typeof m == "object" && m !== null ? m = mn(m) : (p = Jt(r) ? Nr : qe.current, s = r.contextTypes, m = (s = s != null) ? ca(n, p) : ja), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = dc, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Cp(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && dc.enqueueReplaceState(r, r.state, null);
  }
  function pc(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = mp, Md(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? p.context = mn(m) : (m = Jt(r) ? Nr : qe.current, p.context = ca(n, m)), p.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Nd(n, r, m, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && dc.enqueueReplaceState(p, p.state, null), Gi(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Dl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(f(147, n));
        var p = s, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(w) {
          var O = p.refs;
          O === mp && (O = p.refs = {}), w === null ? delete O[m] : O[m] = w;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function vc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function xp(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Sp(n) {
    function r(B, H) {
      if (n) {
        var Z = B.deletions;
        Z === null ? (B.deletions = [H], B.flags |= 16) : Z.push(H);
      }
    }
    function o(B, H) {
      if (!n)
        return null;
      for (; H !== null; )
        r(B, H), H = H.sibling;
      return null;
    }
    function s(B, H) {
      for (B = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? B.set(H.key, H) : B.set(H.index, H), H = H.sibling;
      return B;
    }
    function p(B, H) {
      return B = ro(B, H), B.index = 0, B.sibling = null, B;
    }
    function m(B, H, Z) {
      return B.index = Z, n ? (Z = B.alternate, Z !== null ? (Z = Z.index, Z < H ? (B.flags |= 2, H) : Z) : (B.flags |= 2, H)) : (B.flags |= 1048576, H);
    }
    function w(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function O(B, H, Z, ve) {
      return H === null || H.tag !== 6 ? (H = us(Z, B.mode, ve), H.return = B, H) : (H = p(H, Z), H.return = B, H);
    }
    function A(B, H, Z, ve) {
      var Ue = Z.type;
      return Ue === ue ? oe(B, H, Z.props.children, ve, Z.key) : H !== null && (H.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === be && xp(Ue) === H.type) ? (ve = p(H, Z.props), ve.ref = Dl(B, H, Z), ve.return = B, ve) : (ve = Zc(Z.type, Z.key, Z.props, null, B.mode, ve), ve.ref = Dl(B, H, Z), ve.return = B, ve);
    }
    function G(B, H, Z, ve) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== Z.containerInfo || H.stateNode.implementation !== Z.implementation ? (H = Wo(Z, B.mode, ve), H.return = B, H) : (H = p(H, Z.children || []), H.return = B, H);
    }
    function oe(B, H, Z, ve, Ue) {
      return H === null || H.tag !== 7 ? (H = Qo(Z, B.mode, ve, Ue), H.return = B, H) : (H = p(H, Z), H.return = B, H);
    }
    function ce(B, H, Z) {
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return H = us("" + H, B.mode, Z), H.return = B, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case K:
            return Z = Zc(H.type, H.key, H.props, null, B.mode, Z), Z.ref = Dl(B, null, H), Z.return = B, Z;
          case le:
            return H = Wo(H, B.mode, Z), H.return = B, H;
          case be:
            var ve = H._init;
            return ce(B, ve(H._payload), Z);
        }
        if (jn(H) || me(H))
          return H = Qo(H, B.mode, Z, null), H.return = B, H;
        vc(B, H);
      }
      return null;
    }
    function ie(B, H, Z, ve) {
      var Ue = H !== null ? H.key : null;
      if (typeof Z == "string" && Z !== "" || typeof Z == "number")
        return Ue !== null ? null : O(B, H, "" + Z, ve);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case K:
            return Z.key === Ue ? A(B, H, Z, ve) : null;
          case le:
            return Z.key === Ue ? G(B, H, Z, ve) : null;
          case be:
            return Ue = Z._init, ie(
              B,
              H,
              Ue(Z._payload),
              ve
            );
        }
        if (jn(Z) || me(Z))
          return Ue !== null ? null : oe(B, H, Z, ve, null);
        vc(B, Z);
      }
      return null;
    }
    function Te(B, H, Z, ve, Ue) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number")
        return B = B.get(Z) || null, O(H, B, "" + ve, Ue);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case K:
            return B = B.get(ve.key === null ? Z : ve.key) || null, A(H, B, ve, Ue);
          case le:
            return B = B.get(ve.key === null ? Z : ve.key) || null, G(H, B, ve, Ue);
          case be:
            var Ae = ve._init;
            return Te(B, H, Z, Ae(ve._payload), Ue);
        }
        if (jn(ve) || me(ve))
          return B = B.get(Z) || null, oe(H, B, ve, Ue, null);
        vc(H, ve);
      }
      return null;
    }
    function _e(B, H, Z, ve) {
      for (var Ue = null, Ae = null, Ve = H, Je = H = 0, Pn = null; Ve !== null && Je < Z.length; Je++) {
        Ve.index > Je ? (Pn = Ve, Ve = null) : Pn = Ve.sibling;
        var xt = ie(B, Ve, Z[Je], ve);
        if (xt === null) {
          Ve === null && (Ve = Pn);
          break;
        }
        n && Ve && xt.alternate === null && r(B, Ve), H = m(xt, H, Je), Ae === null ? Ue = xt : Ae.sibling = xt, Ae = xt, Ve = Pn;
      }
      if (Je === Z.length)
        return o(B, Ve), Qt && Wr(B, Je), Ue;
      if (Ve === null) {
        for (; Je < Z.length; Je++)
          Ve = ce(B, Z[Je], ve), Ve !== null && (H = m(Ve, H, Je), Ae === null ? Ue = Ve : Ae.sibling = Ve, Ae = Ve);
        return Qt && Wr(B, Je), Ue;
      }
      for (Ve = s(B, Ve); Je < Z.length; Je++)
        Pn = Te(Ve, B, Je, Z[Je], ve), Pn !== null && (n && Pn.alternate !== null && Ve.delete(Pn.key === null ? Je : Pn.key), H = m(Pn, H, Je), Ae === null ? Ue = Pn : Ae.sibling = Pn, Ae = Pn);
      return n && Ve.forEach(function(ao) {
        return r(B, ao);
      }), Qt && Wr(B, Je), Ue;
    }
    function He(B, H, Z, ve) {
      var Ue = me(Z);
      if (typeof Ue != "function")
        throw Error(f(150));
      if (Z = Ue.call(Z), Z == null)
        throw Error(f(151));
      for (var Ae = Ue = null, Ve = H, Je = H = 0, Pn = null, xt = Z.next(); Ve !== null && !xt.done; Je++, xt = Z.next()) {
        Ve.index > Je ? (Pn = Ve, Ve = null) : Pn = Ve.sibling;
        var ao = ie(B, Ve, xt.value, ve);
        if (ao === null) {
          Ve === null && (Ve = Pn);
          break;
        }
        n && Ve && ao.alternate === null && r(B, Ve), H = m(ao, H, Je), Ae === null ? Ue = ao : Ae.sibling = ao, Ae = ao, Ve = Pn;
      }
      if (xt.done)
        return o(
          B,
          Ve
        ), Qt && Wr(B, Je), Ue;
      if (Ve === null) {
        for (; !xt.done; Je++, xt = Z.next())
          xt = ce(B, xt.value, ve), xt !== null && (H = m(xt, H, Je), Ae === null ? Ue = xt : Ae.sibling = xt, Ae = xt);
        return Qt && Wr(B, Je), Ue;
      }
      for (Ve = s(B, Ve); !xt.done; Je++, xt = Z.next())
        xt = Te(Ve, B, Je, xt.value, ve), xt !== null && (n && xt.alternate !== null && Ve.delete(xt.key === null ? Je : xt.key), H = m(xt, H, Je), Ae === null ? Ue = xt : Ae.sibling = xt, Ae = xt);
      return n && Ve.forEach(function(_h) {
        return r(B, _h);
      }), Qt && Wr(B, Je), Ue;
    }
    function yn(B, H, Z, ve) {
      if (typeof Z == "object" && Z !== null && Z.type === ue && Z.key === null && (Z = Z.props.children), typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case K:
            e: {
              for (var Ue = Z.key, Ae = H; Ae !== null; ) {
                if (Ae.key === Ue) {
                  if (Ue = Z.type, Ue === ue) {
                    if (Ae.tag === 7) {
                      o(B, Ae.sibling), H = p(Ae, Z.props.children), H.return = B, B = H;
                      break e;
                    }
                  } else if (Ae.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === be && xp(Ue) === Ae.type) {
                    o(B, Ae.sibling), H = p(Ae, Z.props), H.ref = Dl(B, Ae, Z), H.return = B, B = H;
                    break e;
                  }
                  o(B, Ae);
                  break;
                } else
                  r(B, Ae);
                Ae = Ae.sibling;
              }
              Z.type === ue ? (H = Qo(Z.props.children, B.mode, ve, Z.key), H.return = B, B = H) : (ve = Zc(Z.type, Z.key, Z.props, null, B.mode, ve), ve.ref = Dl(B, H, Z), ve.return = B, B = ve);
            }
            return w(B);
          case le:
            e: {
              for (Ae = Z.key; H !== null; ) {
                if (H.key === Ae)
                  if (H.tag === 4 && H.stateNode.containerInfo === Z.containerInfo && H.stateNode.implementation === Z.implementation) {
                    o(B, H.sibling), H = p(H, Z.children || []), H.return = B, B = H;
                    break e;
                  } else {
                    o(B, H);
                    break;
                  }
                else
                  r(B, H);
                H = H.sibling;
              }
              H = Wo(Z, B.mode, ve), H.return = B, B = H;
            }
            return w(B);
          case be:
            return Ae = Z._init, yn(B, H, Ae(Z._payload), ve);
        }
        if (jn(Z))
          return _e(B, H, Z, ve);
        if (me(Z))
          return He(B, H, Z, ve);
        vc(B, Z);
      }
      return typeof Z == "string" && Z !== "" || typeof Z == "number" ? (Z = "" + Z, H !== null && H.tag === 6 ? (o(B, H.sibling), H = p(H, Z), H.return = B, B = H) : (o(B, H), H = us(Z, B.mode, ve), H.return = B, B = H), w(B)) : o(B, H);
    }
    return yn;
  }
  var Ll = Sp(!0), wp = Sp(!1), Iu = {}, Aa = at(Iu), Yu = at(Iu), Ml = at(Iu);
  function Mo(n) {
    if (n === Iu)
      throw Error(f(174));
    return n;
  }
  function _d(n, r) {
    switch (Lt(Ml, r), Lt(Yu, n), Lt(Aa, Iu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : It(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = It(r, n);
    }
    Rt(Aa), Lt(Aa, r);
  }
  function Xi() {
    Rt(Aa), Rt(Yu), Rt(Ml);
  }
  function Ze(n) {
    Mo(Ml.current);
    var r = Mo(Aa.current), o = It(r, n.type);
    r !== o && (Lt(Yu, n), Lt(Aa, o));
  }
  function ct(n) {
    Yu.current === n && (Rt(Aa), Rt(Yu));
  }
  var Qe = at(0);
  function an(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var va = [];
  function hc() {
    for (var n = 0; n < va.length; n++)
      va[n]._workInProgressVersionPrimary = null;
    va.length = 0;
  }
  var mc = X.ReactCurrentDispatcher, Ad = X.ReactCurrentBatchConfig, Oo = 0, Wt = null, te = null, ht = null, We = !1, Ya = !1, Kr = 0, No = 0;
  function Gt() {
    throw Error(f(321));
  }
  function _o(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!ua(n[o], r[o]))
        return !1;
    return !0;
  }
  function Ki(n, r, o, s, p, m) {
    if (Oo = m, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, mc.current = n === null || n.memoizedState === null ? hh : mh, n = o(s, p), Ya) {
      m = 0;
      do {
        if (Ya = !1, Kr = 0, 25 <= m)
          throw Error(f(301));
        m += 1, ht = te = null, r.updateQueue = null, mc.current = Hd, n = o(s, p);
      } while (Ya);
    }
    if (mc.current = Nc, r = te !== null && te.next !== null, Oo = 0, ht = te = Wt = null, We = !1, r)
      throw Error(f(300));
    return n;
  }
  function Ao() {
    var n = Kr !== 0;
    return Kr = 0, n;
  }
  function ha() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ht === null ? Wt.memoizedState = ht = n : ht = ht.next = n, ht;
  }
  function Ur() {
    if (te === null) {
      var n = Wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = te.next;
    var r = ht === null ? Wt.memoizedState : ht.next;
    if (r !== null)
      ht = r, te = n;
    else {
      if (n === null)
        throw Error(f(310));
      te = n, n = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, ht === null ? Wt.memoizedState = ht = n : ht = ht.next = n;
    }
    return ht;
  }
  function zo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Zu(n) {
    var r = Ur(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = te, p = s.baseQueue, m = o.pending;
    if (m !== null) {
      if (p !== null) {
        var w = p.next;
        p.next = m.next, m.next = w;
      }
      s.baseQueue = p = m, o.pending = null;
    }
    if (p !== null) {
      m = p.next, s = s.baseState;
      var O = w = null, A = null, G = m;
      do {
        var oe = G.lane;
        if ((Oo & oe) === oe)
          A !== null && (A = A.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), s = G.hasEagerState ? G.eagerState : n(s, G.action);
        else {
          var ce = {
            lane: oe,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          A === null ? (O = A = ce, w = s) : A = A.next = ce, Wt.lanes |= oe, gi |= oe;
        }
        G = G.next;
      } while (G !== null && G !== m);
      A === null ? w = s : A.next = O, ua(s, r.memoizedState) || (En = !0), r.memoizedState = s, r.baseState = w, r.baseQueue = A, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        m = p.lane, Wt.lanes |= m, gi |= m, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Qu(n) {
    var r = Ur(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, m = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var w = p = p.next;
      do
        m = n(m, w.action), w = w.next;
      while (w !== p);
      ua(m, r.memoizedState) || (En = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, s];
  }
  function yc() {
  }
  function gc(n, r) {
    var o = Wt, s = Ur(), p = r(), m = !ua(s.memoizedState, p);
    if (m && (s.memoizedState = p, En = !0), s = s.queue, Wu(Sc.bind(null, o, s, n), [n]), s.getSnapshot !== r || m || ht !== null && ht.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ho(9, xc.bind(null, o, s, p, r), void 0, null), on === null)
        throw Error(f(349));
      Oo & 30 || Cc(o, r, p);
    }
    return p;
  }
  function Cc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function xc(n, r, o, s) {
    r.value = o, r.getSnapshot = s, wc(r) && bc(n);
  }
  function Sc(n, r, o) {
    return o(function() {
      wc(r) && bc(n);
    });
  }
  function wc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ua(n, o);
    } catch {
      return !0;
    }
  }
  function bc(n) {
    var r = pi(n, 1);
    r !== null && cr(r, n, 1, -1);
  }
  function Ec(n) {
    var r = ha();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Oc.bind(null, Wt, n), [r.memoizedState, n];
  }
  function Ho(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Tc() {
    return Ur().memoizedState;
  }
  function Uo(n, r, o, s) {
    var p = ha();
    Wt.flags |= n, p.memoizedState = Ho(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function hi(n, r, o, s) {
    var p = Ur();
    s = s === void 0 ? null : s;
    var m = void 0;
    if (te !== null) {
      var w = te.memoizedState;
      if (m = w.destroy, s !== null && _o(s, w.deps)) {
        p.memoizedState = Ho(r, o, m, s);
        return;
      }
    }
    Wt.flags |= n, p.memoizedState = Ho(1 | r, o, m, s);
  }
  function Rc(n, r) {
    return Uo(8390656, 8, n, r);
  }
  function Wu(n, r) {
    return hi(2048, 8, n, r);
  }
  function kc(n, r) {
    return hi(4, 2, n, r);
  }
  function Dc(n, r) {
    return hi(4, 4, n, r);
  }
  function zd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ol(n, r, o) {
    return o = o != null ? o.concat([n]) : null, hi(4, 4, zd.bind(null, r, n), o);
  }
  function Lc() {
  }
  function Nl(n, r) {
    var o = Ur();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && _o(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function qi(n, r) {
    var o = Ur();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && _o(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function $r(n, r, o) {
    return Oo & 21 ? (ua(o, r) || (o = Vs(), Wt.lanes |= o, gi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, En = !0), n.memoizedState = o);
  }
  function vh(n, r) {
    var o = Nt;
    Nt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Ad.transition;
    Ad.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = o, Ad.transition = s;
    }
  }
  function Ft() {
    return Ur().memoizedState;
  }
  function Mc(n, r, o) {
    var s = Tn(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, _l(n))
      Gu(r, o);
    else if (o = hp(n, r, o, s), o !== null) {
      var p = sr();
      cr(o, n, s, p), bp(o, r, s);
    }
  }
  function Oc(n, r, o) {
    var s = Tn(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (_l(n))
      Gu(r, p);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var w = r.lastRenderedState, O = m(w, o);
          if (p.hasEagerState = !0, p.eagerState = O, ua(O, w)) {
            var A = r.interleaved;
            A === null ? (p.next = p, Ld(r)) : (p.next = A.next, A.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      o = hp(n, r, p, s), o !== null && (p = sr(), cr(o, n, s, p), bp(o, r, s));
    }
  }
  function _l(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function Gu(n, r) {
    Ya = We = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function bp(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Su(n, o);
    }
  }
  var Nc = { readContext: mn, useCallback: Gt, useContext: Gt, useEffect: Gt, useImperativeHandle: Gt, useInsertionEffect: Gt, useLayoutEffect: Gt, useMemo: Gt, useReducer: Gt, useRef: Gt, useState: Gt, useDebugValue: Gt, useDeferredValue: Gt, useTransition: Gt, useMutableSource: Gt, useSyncExternalStore: Gt, useId: Gt, unstable_isNewReconciler: !1 }, hh = { readContext: mn, useCallback: function(n, r) {
    return ha().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: mn, useEffect: Rc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Uo(
      4194308,
      4,
      zd.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Uo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Uo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = ha();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = ha();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = Mc.bind(null, Wt, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = ha();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ec, useDebugValue: Lc, useDeferredValue: function(n) {
    return ha().memoizedState = n;
  }, useTransition: function() {
    var n = Ec(!1), r = n[0];
    return n = vh.bind(null, n[1]), ha().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Wt, p = ha();
    if (Qt) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), on === null)
        throw Error(f(349));
      Oo & 30 || Cc(s, r, o);
    }
    p.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return p.queue = m, Rc(Sc.bind(
      null,
      s,
      m,
      n
    ), [n]), s.flags |= 2048, Ho(9, xc.bind(null, s, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = ha(), r = on.identifierPrefix;
    if (Qt) {
      var o = di, s = Yn;
      o = (s & ~(1 << 32 - ia(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Kr++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = No++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, mh = {
    readContext: mn,
    useCallback: Nl,
    useContext: mn,
    useEffect: Wu,
    useImperativeHandle: Ol,
    useInsertionEffect: kc,
    useLayoutEffect: Dc,
    useMemo: qi,
    useReducer: Zu,
    useRef: Tc,
    useState: function() {
      return Zu(zo);
    },
    useDebugValue: Lc,
    useDeferredValue: function(n) {
      var r = Ur();
      return $r(r, te.memoizedState, n);
    },
    useTransition: function() {
      var n = Zu(zo)[0], r = Ur().memoizedState;
      return [n, r];
    },
    useMutableSource: yc,
    useSyncExternalStore: gc,
    useId: Ft,
    unstable_isNewReconciler: !1
  }, Hd = { readContext: mn, useCallback: Nl, useContext: mn, useEffect: Wu, useImperativeHandle: Ol, useInsertionEffect: kc, useLayoutEffect: Dc, useMemo: qi, useReducer: Qu, useRef: Tc, useState: function() {
    return Qu(zo);
  }, useDebugValue: Lc, useDeferredValue: function(n) {
    var r = Ur();
    return te === null ? r.memoizedState = n : $r(r, te.memoizedState, n);
  }, useTransition: function() {
    var n = Qu(zo)[0], r = Ur().memoizedState;
    return [n, r];
  }, useMutableSource: yc, useSyncExternalStore: gc, useId: Ft, unstable_isNewReconciler: !1 };
  function Al(n, r) {
    try {
      var o = "", s = r;
      do
        o += Bt(s), s = s.return;
      while (s);
      var p = o;
    } catch (m) {
      p = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Xu(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function _c(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var yh = typeof WeakMap == "function" ? WeakMap : Map;
  function Ep(n, r, o) {
    o = vi(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Fc || (Fc = !0, Bo = s), _c(n, r);
    }, o;
  }
  function Ku(n, r, o) {
    o = vi(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        _c(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      _c(n, r), typeof s != "function" && (Wa === null ? Wa = /* @__PURE__ */ new Set([this]) : Wa.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), o;
  }
  function Tp(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new yh();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else
      p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = Eh.bind(null, n, r, o), r.then(n, n));
  }
  function Ud(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function $d(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = vi(-1, 1), r.tag = 2, Wi(o, r, 1))), o.lanes |= 1), n);
  }
  var gh = X.ReactCurrentOwner, En = !1;
  function Ln(n, r, o, s) {
    r.child = n === null ? wp(r, null, o, s) : Ll(r, n.child, o, s);
  }
  function Ji(n, r, o, s, p) {
    o = o.render;
    var m = r.ref;
    return ge(r, p), s = Ki(n, r, o, s, m, p), o = Ao(), n !== null && !En ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Qn(n, r, p)) : (Qt && o && ic(r), r.flags |= 1, Ln(n, r, s, p), r.child);
  }
  function Ac(n, r, o, s, p) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !r1(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, Vr(n, r, m, s, p)) : (n = Zc(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & p)) {
      var w = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Nu, o(w, s) && n.ref === r.ref)
        return Qn(n, r, p);
    }
    return r.flags |= 1, n = ro(m, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Vr(n, r, o, s, p) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Nu(m, s) && n.ref === r.ref)
        if (En = !1, r.pendingProps = s = m, (n.lanes & p) !== 0)
          n.flags & 131072 && (En = !0);
        else
          return r.lanes = n.lanes, Qn(n, r, p);
    }
    return zl(n, r, o, s, p);
  }
  function $o(n, r, o) {
    var s = r.pendingProps, p = s.children, m = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Lt(Pl, qr), qr |= o;
      else {
        if (!(o & 1073741824))
          return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Lt(Pl, qr), qr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = m !== null ? m.baseLanes : o, Lt(Pl, qr), qr |= s;
      }
    else
      m !== null ? (s = m.baseLanes | o, r.memoizedState = null) : s = o, Lt(Pl, qr), qr |= s;
    return Ln(n, r, p, o), r.child;
  }
  function it(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function zl(n, r, o, s, p) {
    var m = Jt(o) ? Nr : qe.current;
    return m = ca(r, m), ge(r, p), o = Ki(n, r, o, s, m, p), s = Ao(), n !== null && !En ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Qn(n, r, p)) : (Qt && s && ic(r), r.flags |= 1, Ln(n, r, o, p), r.child);
  }
  function Vd(n, r, o, s, p) {
    if (Jt(o)) {
      var m = !0;
      ac(r);
    } else
      m = !1;
    if (ge(r, p), r.stateNode === null)
      or(n, r), gp(r, o, s), pc(r, o, s, p), s = !0;
    else if (n === null) {
      var w = r.stateNode, O = r.memoizedProps;
      w.props = O;
      var A = w.context, G = o.contextType;
      typeof G == "object" && G !== null ? G = mn(G) : (G = Jt(o) ? Nr : qe.current, G = ca(r, G));
      var oe = o.getDerivedStateFromProps, ce = typeof oe == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      ce || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (O !== s || A !== G) && Cp(r, w, s, G), Qi = !1;
      var ie = r.memoizedState;
      w.state = ie, Gi(r, s, w, p), A = r.memoizedState, O !== s || ie !== A || fn.current || Qi ? (typeof oe == "function" && (Nd(r, o, oe, s), A = r.memoizedState), (O = Qi || yp(r, o, O, s, ie, A, G)) ? (ce || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = A), w.props = s, w.state = A, w.context = G, s = O) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      w = r.stateNode, Dn(n, r), O = r.memoizedProps, G = r.type === r.elementType ? O : Xr(r.type, O), w.props = G, ce = r.pendingProps, ie = w.context, A = o.contextType, typeof A == "object" && A !== null ? A = mn(A) : (A = Jt(o) ? Nr : qe.current, A = ca(r, A));
      var Te = o.getDerivedStateFromProps;
      (oe = typeof Te == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (O !== ce || ie !== A) && Cp(r, w, s, A), Qi = !1, ie = r.memoizedState, w.state = ie, Gi(r, s, w, p);
      var _e = r.memoizedState;
      O !== ce || ie !== _e || fn.current || Qi ? (typeof Te == "function" && (Nd(r, o, Te, s), _e = r.memoizedState), (G = Qi || yp(r, o, G, s, ie, _e, A) || !1) ? (oe || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(s, _e, A), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(s, _e, A)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = _e), w.props = s, w.state = _e, w.context = A, s = G) : (typeof w.componentDidUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Rp(n, r, o, s, m, p);
  }
  function Rp(n, r, o, s, p, m) {
    it(n, r);
    var w = (r.flags & 128) !== 0;
    if (!s && !w)
      return p && fp(r, o, !1), Qn(n, r, m);
    s = r.stateNode, gh.current = r;
    var O = w && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && w ? (r.child = Ll(r, n.child, null, m), r.child = Ll(r, null, O, m)) : Ln(n, r, O, m), r.memoizedState = s.state, p && fp(r, o, !0), r.child;
  }
  function kp(n) {
    var r = n.stateNode;
    r.pendingContext ? ji(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ji(n, r.context, !1), _d(n, r.containerInfo);
  }
  function zc(n, r, o, s, p) {
    return rn(), Rd(p), r.flags |= 256, Ln(n, r, o, s), r.child;
  }
  var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Pd(n, r, o) {
    var s = r.pendingProps, p = Qe.current, m = !1, w = (r.flags & 128) !== 0, O;
    if ((O = w) || (O = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), O ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Lt(Qe, p & 1), n === null)
      return lc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = s.children, n = s.fallback, m ? (s = r.mode, m = r.child, w = { mode: "hidden", children: w }, !(s & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = w) : m = ls(w, s, 0, null), n = Qo(n, s, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Fd(o), r.memoizedState = Vo, n) : Bd(r, w));
    if (p = n.memoizedState, p !== null && (O = p.dehydrated, O !== null))
      return Ch(n, r, w, s, O, p, o);
    if (m) {
      m = s.fallback, w = r.mode, p = n.child, O = p.sibling;
      var A = { mode: "hidden", children: s.children };
      return !(w & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = A, r.deletions = null) : (s = ro(p, A), s.subtreeFlags = p.subtreeFlags & 14680064), O !== null ? m = ro(O, m) : (m = Qo(m, w, o, null), m.flags |= 2), m.return = r, s.return = r, s.sibling = m, r.child = s, s = m, m = r.child, w = n.child.memoizedState, w = w === null ? Fd(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }, m.memoizedState = w, m.childLanes = n.childLanes & ~o, r.memoizedState = Vo, s;
    }
    return m = n.child, n = m.sibling, s = ro(m, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Bd(n, r) {
    return r = ls({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Hl(n, r, o, s) {
    return s !== null && Rd(s), Ll(r, n.child, null, o), n = Bd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ch(n, r, o, s, p, m, w) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Xu(Error(f(422))), Hl(n, r, w, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = s.fallback, p = r.mode, s = ls({ mode: "visible", children: s.children }, p, 0, null), m = Qo(m, p, w, null), m.flags |= 2, s.return = r, m.return = r, s.sibling = m, r.child = s, r.mode & 1 && Ll(r, n.child, null, w), r.child.memoizedState = Fd(w), r.memoizedState = Vo, m);
    if (!(r.mode & 1))
      return Hl(n, r, w, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s)
        var O = s.dgst;
      return s = O, m = Error(f(419)), s = Xu(m, s, void 0), Hl(n, r, w, s);
    }
    if (O = (w & n.childLanes) !== 0, En || O) {
      if (s = on, s !== null) {
        switch (w & -w) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (s.suspendedLanes | w) ? 0 : p, p !== 0 && p !== m.retryLane && (m.retryLane = p, pi(n, p), cr(s, n, p, -1));
      }
      return e1(), s = Xu(Error(f(421))), Hl(n, r, w, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Th.bind(null, n), p._reactRetry = r, null) : (n = m.treeContext, Hr = _a(p.nextSibling), Gr = r, Qt = !0, pa = null, n !== null && (zr[ir++] = Yn, zr[ir++] = di, zr[ir++] = da, Yn = n.id, di = n.overflow, da = r), r = Bd(r, s.children), r.flags |= 4096, r);
  }
  function jd(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), $n(n.return, r, o);
  }
  function Hc(n, r, o, s, p) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = o, m.tailMode = p);
  }
  function Id(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, m = s.tail;
    if (Ln(n, r, s.children, o), s = Qe.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && jd(n, o, r);
            else if (n.tag === 19)
              jd(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      s &= 1;
    }
    if (Lt(Qe, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && an(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), Hc(r, !1, p, o, m);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && an(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          Hc(r, !0, o, null, m);
          break;
        case "together":
          Hc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function or(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Qn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), gi |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = ro(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = ro(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function mi(n, r, o) {
    switch (r.tag) {
      case 3:
        kp(r), rn();
        break;
      case 5:
        Ze(r);
        break;
      case 1:
        Jt(r.type) && ac(r);
        break;
      case 4:
        _d(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        Lt(Ia, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Lt(Qe, Qe.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Pd(n, r, o) : (Lt(Qe, Qe.current & 1), n = Qn(n, r, o), n !== null ? n.sibling : null);
        Lt(Qe, Qe.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return Id(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Lt(Qe, Qe.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, $o(n, r, o);
    }
    return Qn(n, r, o);
  }
  var qu, Fo, ma, Mn;
  qu = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Fo = function() {
  }, ma = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, Mo(Aa.current);
      var m = null;
      switch (o) {
        case "input":
          p = st(n, p), s = st(n, s), m = [];
          break;
        case "select":
          p = de({}, p, { value: void 0 }), s = de({}, s, { value: void 0 }), m = [];
          break;
        case "textarea":
          p = kr(n, p), s = kr(n, s), m = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = rc);
      }
      An(o, s);
      var w;
      o = null;
      for (G in p)
        if (!s.hasOwnProperty(G) && p.hasOwnProperty(G) && p[G] != null)
          if (G === "style") {
            var O = p[G];
            for (w in O)
              O.hasOwnProperty(w) && (o || (o = {}), o[w] = "");
          } else
            G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (C.hasOwnProperty(G) ? m || (m = []) : (m = m || []).push(G, null));
      for (G in s) {
        var A = s[G];
        if (O = p != null ? p[G] : void 0, s.hasOwnProperty(G) && A !== O && (A != null || O != null))
          if (G === "style")
            if (O) {
              for (w in O)
                !O.hasOwnProperty(w) || A && A.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
              for (w in A)
                A.hasOwnProperty(w) && O[w] !== A[w] && (o || (o = {}), o[w] = A[w]);
            } else
              o || (m || (m = []), m.push(
                G,
                o
              )), o = A;
          else
            G === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, O = O ? O.__html : void 0, A != null && O !== A && (m = m || []).push(G, A)) : G === "children" ? typeof A != "string" && typeof A != "number" || (m = m || []).push(G, "" + A) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (C.hasOwnProperty(G) ? (A != null && G === "onScroll" && Vt("scroll", n), m || O === A || (m = [])) : (m = m || []).push(G, A));
      }
      o && (m = m || []).push("style", o);
      var G = m;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, Mn = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function Ju(n, r) {
    if (!Qt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
      }
  }
  function lr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function xh(n, r, o) {
    var s = r.pendingProps;
    switch (Ed(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lr(r), null;
      case 1:
        return Jt(r.type) && fa(), lr(r), null;
      case 3:
        return s = r.stateNode, Xi(), Rt(fn), Rt(qe), hc(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, pa !== null && (os(pa), pa = null))), Fo(n, r), lr(r), null;
      case 5:
        ct(r);
        var p = Mo(Ml.current);
        if (o = r.type, n !== null && r.stateNode != null)
          ma(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(f(166));
            return lr(r), null;
          }
          if (n = Mo(Aa.current), uc(r)) {
            s = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (s[Ba] = r, s[ko] = m, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Vt("cancel", s), Vt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Hu.length; p++)
                  Vt(Hu[p], s);
                break;
              case "source":
                Vt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Vt(
                  "error",
                  s
                ), Vt("load", s);
                break;
              case "details":
                Vt("toggle", s);
                break;
              case "input":
                ft(s, m), Vt("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!m.multiple }, Vt("invalid", s);
                break;
              case "textarea":
                rr(s, m), Vt("invalid", s);
            }
            An(o, m), p = null;
            for (var w in m)
              if (m.hasOwnProperty(w)) {
                var O = m[w];
                w === "children" ? typeof O == "string" ? s.textContent !== O && (m.suppressHydrationWarning !== !0 && nc(s.textContent, O, n), p = ["children", O]) : typeof O == "number" && s.textContent !== "" + O && (m.suppressHydrationWarning !== !0 && nc(
                  s.textContent,
                  O,
                  n
                ), p = ["children", "" + O]) : C.hasOwnProperty(w) && O != null && w === "onScroll" && Vt("scroll", s);
              }
            switch (o) {
              case "input":
                ut(s), tn(s, m, !0);
                break;
              case "textarea":
                ut(s), Lr(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (s.onclick = rc);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            w = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = vr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = w.createElement(o, { is: s.is }) : (n = w.createElement(o), o === "select" && (w = n, s.multiple ? w.multiple = !0 : s.size && (w.size = s.size))) : n = w.createElementNS(n, o), n[Ba] = r, n[ko] = s, qu(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = un(o, s), o) {
                case "dialog":
                  Vt("cancel", n), Vt("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Hu.length; p++)
                    Vt(Hu[p], n);
                  p = s;
                  break;
                case "source":
                  Vt("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt(
                    "error",
                    n
                  ), Vt("load", n), p = s;
                  break;
                case "details":
                  Vt("toggle", n), p = s;
                  break;
                case "input":
                  ft(n, s), p = st(n, s), Vt("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = de({}, s, { value: void 0 }), Vt("invalid", n);
                  break;
                case "textarea":
                  rr(n, s), p = kr(n, s), Vt("invalid", n);
                  break;
                default:
                  p = s;
              }
              An(o, p), O = p;
              for (m in O)
                if (O.hasOwnProperty(m)) {
                  var A = O[m];
                  m === "style" ? Ct(n, A) : m === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, A != null && Ye(n, A)) : m === "children" ? typeof A == "string" ? (o !== "textarea" || A !== "") && gt(n, A) : typeof A == "number" && gt(n, "" + A) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (C.hasOwnProperty(m) ? A != null && m === "onScroll" && Vt("scroll", n) : A != null && F(n, m, A, w));
                }
              switch (o) {
                case "input":
                  ut(n), tn(n, s, !1);
                  break;
                case "textarea":
                  ut(n), Lr(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + Tt(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, m = s.value, m != null ? Kt(n, !!s.multiple, m, !1) : s.defaultValue != null && Kt(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = rc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return lr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Mn(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = Mo(Ml.current), Mo(Aa.current), uc(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[Ba] = r, (m = s.nodeValue !== o) && (n = Gr, n !== null))
              switch (n.tag) {
                case 3:
                  nc(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && nc(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Ba] = r, r.stateNode = s;
        }
        return lr(r), null;
      case 13:
        if (Rt(Qe), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Qt && Hr !== null && r.mode & 1 && !(r.flags & 128))
            vp(), rn(), r.flags |= 98560, m = !1;
          else if (m = uc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!m)
                throw Error(f(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(f(317));
              m[Ba] = r;
            } else
              rn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            lr(r), m = !1;
          } else
            pa !== null && (os(pa), pa = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || Qe.current & 1 ? Nn === 0 && (Nn = 3) : e1())), r.updateQueue !== null && (r.flags |= 4), lr(r), null);
      case 4:
        return Xi(), Fo(n, r), n === null && Tl(r.stateNode.containerInfo), lr(r), null;
      case 10:
        return Zi(r.type._context), lr(r), null;
      case 17:
        return Jt(r.type) && fa(), lr(r), null;
      case 19:
        if (Rt(Qe), m = r.memoizedState, m === null)
          return lr(r), null;
        if (s = (r.flags & 128) !== 0, w = m.rendering, w === null)
          if (s)
            Ju(m, !1);
          else {
            if (Nn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = an(n), w !== null) {
                  for (r.flags |= 128, Ju(m, !1), s = w.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    m = o, n = s, m.flags &= 14680066, w = m.alternate, w === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = w.childLanes, m.lanes = w.lanes, m.child = w.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = w.memoizedProps, m.memoizedState = w.memoizedState, m.updateQueue = w.updateQueue, m.type = w.type, n = w.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Lt(Qe, Qe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && cn() > jl && (r.flags |= 128, s = !0, Ju(m, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = an(w), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Ju(m, !0), m.tail === null && m.tailMode === "hidden" && !w.alternate && !Qt)
                return lr(r), null;
            } else
              2 * cn() - m.renderingStartTime > jl && o !== 1073741824 && (r.flags |= 128, s = !0, Ju(m, !1), r.lanes = 4194304);
          m.isBackwards ? (w.sibling = r.child, r.child = w) : (o = m.last, o !== null ? o.sibling = w : r.child = w, m.last = w);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = cn(), r.sibling = null, o = Qe.current, Lt(Qe, s ? o & 1 | 2 : o & 1), r) : (lr(r), null);
      case 22:
      case 23:
        return Jd(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? qr & 1073741824 && (lr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : lr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function Yd(n, r) {
    switch (Ed(r), r.tag) {
      case 1:
        return Jt(r.type) && fa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Xi(), Rt(fn), Rt(qe), hc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ct(r), null;
      case 13:
        if (Rt(Qe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          rn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Rt(Qe), null;
      case 4:
        return Xi(), null;
      case 10:
        return Zi(r.type._context), null;
      case 22:
      case 23:
        return Jd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var es = !1, On = !1, Dp = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
  function Ul(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          pn(n, r, s);
        }
      else
        o.current = null;
  }
  function ts(n, r, o) {
    try {
      o();
    } catch (s) {
      pn(n, r, s);
    }
  }
  var Lp = !1;
  function Mp(n, r) {
    if (md = xo, n = Ks(), ui(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var p = s.anchorOffset, m = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break e;
            }
            var w = 0, O = -1, A = -1, G = 0, oe = 0, ce = n, ie = null;
            t:
              for (; ; ) {
                for (var Te; ce !== o || p !== 0 && ce.nodeType !== 3 || (O = w + p), ce !== m || s !== 0 && ce.nodeType !== 3 || (A = w + s), ce.nodeType === 3 && (w += ce.nodeValue.length), (Te = ce.firstChild) !== null; )
                  ie = ce, ce = Te;
                for (; ; ) {
                  if (ce === n)
                    break t;
                  if (ie === o && ++G === p && (O = w), ie === m && ++oe === s && (A = w), (Te = ce.nextSibling) !== null)
                    break;
                  ce = ie, ie = ce.parentNode;
                }
                ce = Te;
              }
            o = O === -1 || A === -1 ? null : { start: O, end: A };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (To = { focusedElem: n, selectionRange: o }, xo = !1, Ne = r; Ne !== null; )
      if (r = Ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ne = n;
      else
        for (; Ne !== null; ) {
          r = Ne;
          try {
            var _e = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_e !== null) {
                    var He = _e.memoizedProps, yn = _e.memoizedState, B = r.stateNode, H = B.getSnapshotBeforeUpdate(r.elementType === r.type ? He : Xr(r.type, He), yn);
                    B.__reactInternalSnapshotBeforeUpdate = H;
                  }
                  break;
                case 3:
                  var Z = r.stateNode.containerInfo;
                  Z.nodeType === 1 ? Z.textContent = "" : Z.nodeType === 9 && Z.documentElement && Z.removeChild(Z.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (ve) {
            pn(r, r.return, ve);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ne = n;
            break;
          }
          Ne = r.return;
        }
    return _e = Lp, Lp = !1, _e;
  }
  function ns(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var m = p.destroy;
          p.destroy = void 0, m !== void 0 && ts(r, o, m);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function rs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Zd(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Qd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Qd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ba], delete r[ko], delete r[Cd], delete r[ph], delete r[xd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Op(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Uc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Op(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function $l(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = rc));
    else if (s !== 4 && (n = n.child, n !== null))
      for ($l(n, r, o), n = n.sibling; n !== null; )
        $l(n, r, o), n = n.sibling;
  }
  function Za(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (Za(n, r, o), n = n.sibling; n !== null; )
        Za(n, r, o), n = n.sibling;
  }
  var en = null, Vn = !1;
  function ya(n, r, o) {
    for (o = o.child; o !== null; )
      Vl(n, r, o), o = o.sibling;
  }
  function Vl(n, r, o) {
    if (Da && typeof Da.onCommitFiberUnmount == "function")
      try {
        Da.onCommitFiberUnmount(xu, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        On || Ul(o, r);
      case 6:
        var s = en, p = Vn;
        en = null, ya(n, r, o), en = s, Vn = p, en !== null && (Vn ? (n = en, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : en.removeChild(o.stateNode));
        break;
      case 18:
        en !== null && (Vn ? (n = en, o = o.stateNode, n.nodeType === 8 ? Fi(n.parentNode, o) : n.nodeType === 1 && Fi(n, o), Tu(n)) : Fi(en, o.stateNode));
        break;
      case 4:
        s = en, p = Vn, en = o.stateNode.containerInfo, Vn = !0, ya(n, r, o), en = s, Vn = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!On && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var m = p, w = m.destroy;
            m = m.tag, w !== void 0 && (m & 2 || m & 4) && ts(o, r, w), p = p.next;
          } while (p !== s);
        }
        ya(n, r, o);
        break;
      case 1:
        if (!On && (Ul(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (O) {
            pn(o, r, O);
          }
        ya(n, r, o);
        break;
      case 21:
        ya(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (On = (s = On) || o.memoizedState !== null, ya(n, r, o), On = s) : ya(n, r, o);
        break;
      default:
        ya(n, r, o);
    }
  }
  function yi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Dp()), r.forEach(function(s) {
        var p = Rh.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function za(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var p = o[s];
        try {
          var m = n, w = r, O = w;
          e:
            for (; O !== null; ) {
              switch (O.tag) {
                case 5:
                  en = O.stateNode, Vn = !1;
                  break e;
                case 3:
                  en = O.stateNode.containerInfo, Vn = !0;
                  break e;
                case 4:
                  en = O.stateNode.containerInfo, Vn = !0;
                  break e;
              }
              O = O.return;
            }
          if (en === null)
            throw Error(f(160));
          Vl(m, w, p), en = null, Vn = !1;
          var A = p.alternate;
          A !== null && (A.return = null), p.return = null;
        } catch (G) {
          pn(p, r, G);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Np(r, n), r = r.sibling;
  }
  function Np(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (za(r, n), Qa(n), s & 4) {
          try {
            ns(3, n, n.return), rs(3, n);
          } catch (He) {
            pn(n, n.return, He);
          }
          try {
            ns(5, n, n.return);
          } catch (He) {
            pn(n, n.return, He);
          }
        }
        break;
      case 1:
        za(r, n), Qa(n), s & 512 && o !== null && Ul(o, o.return);
        break;
      case 5:
        if (za(r, n), Qa(n), s & 512 && o !== null && Ul(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            gt(p, "");
          } catch (He) {
            pn(n, n.return, He);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var m = n.memoizedProps, w = o !== null ? o.memoizedProps : m, O = n.type, A = n.updateQueue;
          if (n.updateQueue = null, A !== null)
            try {
              O === "input" && m.type === "radio" && m.name != null && At(p, m), un(O, w);
              var G = un(O, m);
              for (w = 0; w < A.length; w += 2) {
                var oe = A[w], ce = A[w + 1];
                oe === "style" ? Ct(p, ce) : oe === "dangerouslySetInnerHTML" ? Ye(p, ce) : oe === "children" ? gt(p, ce) : F(p, oe, ce, G);
              }
              switch (O) {
                case "input":
                  Dt(p, m);
                  break;
                case "textarea":
                  Dr(p, m);
                  break;
                case "select":
                  var ie = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!m.multiple;
                  var Te = m.value;
                  Te != null ? Kt(p, !!m.multiple, Te, !1) : ie !== !!m.multiple && (m.defaultValue != null ? Kt(
                    p,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : Kt(p, !!m.multiple, m.multiple ? [] : "", !1));
              }
              p[ko] = m;
            } catch (He) {
              pn(n, n.return, He);
            }
        }
        break;
      case 6:
        if (za(r, n), Qa(n), s & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          p = n.stateNode, m = n.memoizedProps;
          try {
            p.nodeValue = m;
          } catch (He) {
            pn(n, n.return, He);
          }
        }
        break;
      case 3:
        if (za(r, n), Qa(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Tu(r.containerInfo);
          } catch (He) {
            pn(n, n.return, He);
          }
        break;
      case 4:
        za(r, n), Qa(n);
        break;
      case 13:
        za(r, n), Qa(n), p = n.child, p.flags & 8192 && (m = p.memoizedState !== null, p.stateNode.isHidden = m, !m || p.alternate !== null && p.alternate.memoizedState !== null || (Xd = cn())), s & 4 && yi(n);
        break;
      case 22:
        if (oe = o !== null && o.memoizedState !== null, n.mode & 1 ? (On = (G = On) || oe, za(r, n), On = G) : za(r, n), Qa(n), s & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !oe && n.mode & 1)
            for (Ne = n, oe = n.child; oe !== null; ) {
              for (ce = Ne = oe; Ne !== null; ) {
                switch (ie = Ne, Te = ie.child, ie.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ns(4, ie, ie.return);
                    break;
                  case 1:
                    Ul(ie, ie.return);
                    var _e = ie.stateNode;
                    if (typeof _e.componentWillUnmount == "function") {
                      s = ie, o = ie.return;
                      try {
                        r = s, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                      } catch (He) {
                        pn(s, o, He);
                      }
                    }
                    break;
                  case 5:
                    Ul(ie, ie.return);
                    break;
                  case 22:
                    if (ie.memoizedState !== null) {
                      Wd(ce);
                      continue;
                    }
                }
                Te !== null ? (Te.return = ie, Ne = Te) : Wd(ce);
              }
              oe = oe.sibling;
            }
          e:
            for (oe = null, ce = n; ; ) {
              if (ce.tag === 5) {
                if (oe === null) {
                  oe = ce;
                  try {
                    p = ce.stateNode, G ? (m = p.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (O = ce.stateNode, A = ce.memoizedProps.style, w = A != null && A.hasOwnProperty("display") ? A.display : null, O.style.display = Ge("display", w));
                  } catch (He) {
                    pn(n, n.return, He);
                  }
                }
              } else if (ce.tag === 6) {
                if (oe === null)
                  try {
                    ce.stateNode.nodeValue = G ? "" : ce.memoizedProps;
                  } catch (He) {
                    pn(n, n.return, He);
                  }
              } else if ((ce.tag !== 22 && ce.tag !== 23 || ce.memoizedState === null || ce === n) && ce.child !== null) {
                ce.child.return = ce, ce = ce.child;
                continue;
              }
              if (ce === n)
                break e;
              for (; ce.sibling === null; ) {
                if (ce.return === null || ce.return === n)
                  break e;
                oe === ce && (oe = null), ce = ce.return;
              }
              oe === ce && (oe = null), ce.sibling.return = ce.return, ce = ce.sibling;
            }
        }
        break;
      case 19:
        za(r, n), Qa(n), s & 4 && yi(n);
        break;
      case 21:
        break;
      default:
        za(
          r,
          n
        ), Qa(n);
    }
  }
  function Qa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Op(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (gt(p, ""), s.flags &= -33);
            var m = Uc(n);
            Za(n, m, p);
            break;
          case 3:
          case 4:
            var w = s.stateNode.containerInfo, O = Uc(n);
            $l(n, O, w);
            break;
          default:
            throw Error(f(161));
        }
      } catch (A) {
        pn(n, n.return, A);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function _p(n, r, o) {
    Ne = n, Fl(n);
  }
  function Fl(n, r, o) {
    for (var s = (n.mode & 1) !== 0; Ne !== null; ) {
      var p = Ne, m = p.child;
      if (p.tag === 22 && s) {
        var w = p.memoizedState !== null || es;
        if (!w) {
          var O = p.alternate, A = O !== null && O.memoizedState !== null || On;
          O = es;
          var G = On;
          if (es = w, (On = A) && !G)
            for (Ne = p; Ne !== null; )
              w = Ne, A = w.child, w.tag === 22 && w.memoizedState !== null ? zp(p) : A !== null ? (A.return = w, Ne = A) : zp(p);
          for (; m !== null; )
            Ne = m, Fl(m), m = m.sibling;
          Ne = p, es = O, On = G;
        }
        Ap(n);
      } else
        p.subtreeFlags & 8772 && m !== null ? (m.return = p, Ne = m) : Ap(n);
    }
  }
  function Ap(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                On || rs(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !On)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : Xr(r.type, o.memoizedProps);
                    s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && Lo(r, m, s);
                break;
              case 3:
                var w = r.updateQueue;
                if (w !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Lo(r, w, o);
                }
                break;
              case 5:
                var O = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = O;
                  var A = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      A.autoFocus && o.focus();
                      break;
                    case "img":
                      A.src && (o.src = A.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var G = r.alternate;
                  if (G !== null) {
                    var oe = G.memoizedState;
                    if (oe !== null) {
                      var ce = oe.dehydrated;
                      ce !== null && Tu(ce);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(f(163));
            }
          On || r.flags & 512 && Zd(r);
        } catch (ie) {
          pn(r, r.return, ie);
        }
      }
      if (r === n) {
        Ne = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ne = o;
        break;
      }
      Ne = r.return;
    }
  }
  function Wd(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r === n) {
        Ne = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ne = o;
        break;
      }
      Ne = r.return;
    }
  }
  function zp(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              rs(4, r);
            } catch (A) {
              pn(r, o, A);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (A) {
                pn(r, p, A);
              }
            }
            var m = r.return;
            try {
              Zd(r);
            } catch (A) {
              pn(r, m, A);
            }
            break;
          case 5:
            var w = r.return;
            try {
              Zd(r);
            } catch (A) {
              pn(r, w, A);
            }
        }
      } catch (A) {
        pn(r, r.return, A);
      }
      if (r === n) {
        Ne = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Ne = O;
        break;
      }
      Ne = r.return;
    }
  }
  var $c = Math.ceil, as = X.ReactCurrentDispatcher, Gd = X.ReactCurrentOwner, ur = X.ReactCurrentBatchConfig, pt = 0, on = null, dn = null, Fn = 0, qr = 0, Pl = at(0), Nn = 0, is = null, gi = 0, Vc = 0, Bl = 0, Po = null, mr = null, Xd = 0, jl = 1 / 0, Ci = null, Fc = !1, Bo = null, Wa = null, eo = !1, to = null, Pc = 0, Il = 0, Bc = null, jo = -1, Io = 0;
  function sr() {
    return pt & 6 ? cn() : jo !== -1 ? jo : jo = cn();
  }
  function Tn(n) {
    return n.mode & 1 ? pt & 2 && Fn !== 0 ? Fn & -Fn : sc.transition !== null ? (Io === 0 && (Io = Vs()), Io) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Xf(n.type)), n) : 1;
  }
  function cr(n, r, o, s) {
    if (50 < Il)
      throw Il = 0, Bc = null, Error(f(185));
    Co(n, o, s), (!(pt & 2) || n !== on) && (n === on && (!(pt & 2) && (Vc |= o), Nn === 4 && ga(n, Fn)), fr(n, s), o === 1 && pt === 0 && !(r.mode & 1) && (jl = cn() + 500, Un && _r()));
  }
  function fr(n, r) {
    var o = n.callbackNode;
    $s(n, r);
    var s = La(n, n === on ? Fn : 0);
    if (s === 0)
      o !== null && w2(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && w2(o), r === 1)
        n.tag === 0 ? wd(Hp.bind(null, n)) : Sd(Hp.bind(null, n)), gd(function() {
          !(pt & 6) && _r();
        }), o = null;
      else {
        switch (Qf(s)) {
          case 1:
            o = ai;
            break;
          case 4:
            o = dt;
            break;
          case 16:
            o = zi;
            break;
          case 536870912:
            o = jf;
            break;
          default:
            o = zi;
        }
        o = n1(o, Yl.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Yl(n, r) {
    if (jo = -1, Io = 0, pt & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (Ql() && n.callbackNode !== o)
      return null;
    var s = La(n, n === on ? Fn : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = Ic(n, s);
    else {
      r = s;
      var p = pt;
      pt |= 2;
      var m = jc();
      (on !== n || Fn !== r) && (Ci = null, jl = cn() + 500, Yo(n, r));
      do
        try {
          wh();
          break;
        } catch (O) {
          Up(n, O);
        }
      while (!0);
      Dd(), as.current = m, pt = p, dn !== null ? r = 0 : (on = null, Fn = 0, r = Nn);
    }
    if (r !== 0) {
      if (r === 2 && (p = Yf(n), p !== 0 && (s = p, r = Kd(n, p))), r === 1)
        throw o = is, Yo(n, 0), ga(n, s), fr(n, cn()), o;
      if (r === 6)
        ga(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !qd(p) && (r = Ic(n, s), r === 2 && (m = Yf(n), m !== 0 && (s = m, r = Kd(n, m))), r === 1))
          throw o = is, Yo(n, 0), ga(n, s), fr(n, cn()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            Zo(n, mr, Ci);
            break;
          case 3:
            if (ga(n, s), (s & 130023424) === s && (r = Xd + 500 - cn(), 10 < r)) {
              if (La(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                sr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Ro(Zo.bind(null, n, mr, Ci), r);
              break;
            }
            Zo(n, mr, Ci);
            break;
          case 4:
            if (ga(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var w = 31 - ia(s);
              m = 1 << w, w = r[w], w > p && (p = w), s &= ~m;
            }
            if (s = p, s = cn() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * $c(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Ro(Zo.bind(null, n, mr, Ci), s);
              break;
            }
            Zo(n, mr, Ci);
            break;
          case 5:
            Zo(n, mr, Ci);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return fr(n, cn()), n.callbackNode === o ? Yl.bind(null, n) : null;
  }
  function Kd(n, r) {
    var o = Po;
    return n.current.memoizedState.isDehydrated && (Yo(n, r).flags |= 256), n = Ic(n, r), n !== 2 && (r = mr, mr = o, r !== null && os(r)), n;
  }
  function os(n) {
    mr === null ? mr = n : mr.push.apply(mr, n);
  }
  function qd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var p = o[s], m = p.getSnapshot;
            p = p.value;
            try {
              if (!ua(m(), p))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ga(n, r) {
    for (r &= ~Bl, r &= ~Vc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - ia(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Hp(n) {
    if (pt & 6)
      throw Error(f(327));
    Ql();
    var r = La(n, 0);
    if (!(r & 1))
      return fr(n, cn()), null;
    var o = Ic(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Yf(n);
      s !== 0 && (r = s, o = Kd(n, s));
    }
    if (o === 1)
      throw o = is, Yo(n, 0), ga(n, r), fr(n, cn()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Zo(n, mr, Ci), fr(n, cn()), null;
  }
  function Zl(n, r) {
    var o = pt;
    pt |= 1;
    try {
      return n(r);
    } finally {
      pt = o, pt === 0 && (jl = cn() + 500, Un && _r());
    }
  }
  function no(n) {
    to !== null && to.tag === 0 && !(pt & 6) && Ql();
    var r = pt;
    pt |= 1;
    var o = ur.transition, s = Nt;
    try {
      if (ur.transition = null, Nt = 1, n)
        return n();
    } finally {
      Nt = s, ur.transition = o, pt = r, !(pt & 6) && _r();
    }
  }
  function Jd() {
    qr = Pl.current, Rt(Pl);
  }
  function Yo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, cp(o)), dn !== null)
      for (o = dn.return; o !== null; ) {
        var s = o;
        switch (Ed(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && fa();
            break;
          case 3:
            Xi(), Rt(fn), Rt(qe), hc();
            break;
          case 5:
            ct(s);
            break;
          case 4:
            Xi();
            break;
          case 13:
            Rt(Qe);
            break;
          case 19:
            Rt(Qe);
            break;
          case 10:
            Zi(s.type._context);
            break;
          case 22:
          case 23:
            Jd();
        }
        o = o.return;
      }
    if (on = n, dn = n = ro(n.current, null), Fn = qr = r, Nn = 0, is = null, Bl = Vc = gi = 0, mr = Po = null, Zn !== null) {
      for (r = 0; r < Zn.length; r++)
        if (o = Zn[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var p = s.next, m = o.pending;
          if (m !== null) {
            var w = m.next;
            m.next = p, s.next = w;
          }
          o.pending = s;
        }
      Zn = null;
    }
    return n;
  }
  function Up(n, r) {
    do {
      var o = dn;
      try {
        if (Dd(), mc.current = Nc, We) {
          for (var s = Wt.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          We = !1;
        }
        if (Oo = 0, ht = te = Wt = null, Ya = !1, Kr = 0, Gd.current = null, o === null || o.return === null) {
          Nn = 1, is = r, dn = null;
          break;
        }
        e: {
          var m = n, w = o.return, O = o, A = r;
          if (r = Fn, O.flags |= 32768, A !== null && typeof A == "object" && typeof A.then == "function") {
            var G = A, oe = O, ce = oe.tag;
            if (!(oe.mode & 1) && (ce === 0 || ce === 11 || ce === 15)) {
              var ie = oe.alternate;
              ie ? (oe.updateQueue = ie.updateQueue, oe.memoizedState = ie.memoizedState, oe.lanes = ie.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
            }
            var Te = Ud(w);
            if (Te !== null) {
              Te.flags &= -257, $d(Te, w, O, m, r), Te.mode & 1 && Tp(m, G, r), r = Te, A = G;
              var _e = r.updateQueue;
              if (_e === null) {
                var He = /* @__PURE__ */ new Set();
                He.add(A), r.updateQueue = He;
              } else
                _e.add(A);
              break e;
            } else {
              if (!(r & 1)) {
                Tp(m, G, r), e1();
                break e;
              }
              A = Error(f(426));
            }
          } else if (Qt && O.mode & 1) {
            var yn = Ud(w);
            if (yn !== null) {
              !(yn.flags & 65536) && (yn.flags |= 256), $d(yn, w, O, m, r), Rd(Al(A, O));
              break e;
            }
          }
          m = A = Al(A, O), Nn !== 4 && (Nn = 2), Po === null ? Po = [m] : Po.push(m), m = w;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var B = Ep(m, A, r);
                Od(m, B);
                break e;
              case 1:
                O = A;
                var H = m.type, Z = m.stateNode;
                if (!(m.flags & 128) && (typeof H.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && (Wa === null || !Wa.has(Z)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ve = Ku(m, O, r);
                  Od(m, ve);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        t1(o);
      } catch (Ue) {
        r = Ue, dn === o && o !== null && (dn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jc() {
    var n = as.current;
    return as.current = Nc, n === null ? Nc : n;
  }
  function e1() {
    (Nn === 0 || Nn === 3 || Nn === 2) && (Nn = 4), on === null || !(gi & 268435455) && !(Vc & 268435455) || ga(on, Fn);
  }
  function Ic(n, r) {
    var o = pt;
    pt |= 2;
    var s = jc();
    (on !== n || Fn !== r) && (Ci = null, Yo(n, r));
    do
      try {
        Sh();
        break;
      } catch (p) {
        Up(n, p);
      }
    while (!0);
    if (Dd(), pt = o, as.current = s, dn !== null)
      throw Error(f(261));
    return on = null, Fn = 0, Nn;
  }
  function Sh() {
    for (; dn !== null; )
      $p(dn);
  }
  function wh() {
    for (; dn !== null && !Yv(); )
      $p(dn);
  }
  function $p(n) {
    var r = Fp(n.alternate, n, qr);
    n.memoizedProps = n.pendingProps, r === null ? t1(n) : dn = r, Gd.current = null;
  }
  function t1(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Yd(o, r), o !== null) {
          o.flags &= 32767, dn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Nn = 6, dn = null;
          return;
        }
      } else if (o = xh(o, r, qr), o !== null) {
        dn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        dn = r;
        return;
      }
      dn = r = n;
    } while (r !== null);
    Nn === 0 && (Nn = 5);
  }
  function Zo(n, r, o) {
    var s = Nt, p = ur.transition;
    try {
      ur.transition = null, Nt = 1, bh(n, r, o, s);
    } finally {
      ur.transition = p, Nt = s;
    }
    return null;
  }
  function bh(n, r, o, s) {
    do
      Ql();
    while (to !== null);
    if (pt & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (Gv(n, m), n === on && (dn = on = null, Fn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || eo || (eo = !0, n1(zi, function() {
      return Ql(), null;
    })), m = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || m) {
      m = ur.transition, ur.transition = null;
      var w = Nt;
      Nt = 1;
      var O = pt;
      pt |= 4, Gd.current = null, Mp(n, o), Np(o, n), qs(To), xo = !!md, To = md = null, n.current = o, _p(o), Zv(), pt = O, Nt = w, ur.transition = m;
    } else
      n.current = o;
    if (eo && (eo = !1, to = n, Pc = p), m = n.pendingLanes, m === 0 && (Wa = null), E2(o.stateNode), fr(n, cn()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (Fc)
      throw Fc = !1, n = Bo, Bo = null, n;
    return Pc & 1 && n.tag !== 0 && Ql(), m = n.pendingLanes, m & 1 ? n === Bc ? Il++ : (Il = 0, Bc = n) : Il = 0, _r(), null;
  }
  function Ql() {
    if (to !== null) {
      var n = Qf(Pc), r = ur.transition, o = Nt;
      try {
        if (ur.transition = null, Nt = 16 > n ? 16 : n, to === null)
          var s = !1;
        else {
          if (n = to, to = null, Pc = 0, pt & 6)
            throw Error(f(331));
          var p = pt;
          for (pt |= 4, Ne = n.current; Ne !== null; ) {
            var m = Ne, w = m.child;
            if (Ne.flags & 16) {
              var O = m.deletions;
              if (O !== null) {
                for (var A = 0; A < O.length; A++) {
                  var G = O[A];
                  for (Ne = G; Ne !== null; ) {
                    var oe = Ne;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ns(8, oe, m);
                    }
                    var ce = oe.child;
                    if (ce !== null)
                      ce.return = oe, Ne = ce;
                    else
                      for (; Ne !== null; ) {
                        oe = Ne;
                        var ie = oe.sibling, Te = oe.return;
                        if (Qd(oe), oe === G) {
                          Ne = null;
                          break;
                        }
                        if (ie !== null) {
                          ie.return = Te, Ne = ie;
                          break;
                        }
                        Ne = Te;
                      }
                  }
                }
                var _e = m.alternate;
                if (_e !== null) {
                  var He = _e.child;
                  if (He !== null) {
                    _e.child = null;
                    do {
                      var yn = He.sibling;
                      He.sibling = null, He = yn;
                    } while (He !== null);
                  }
                }
                Ne = m;
              }
            }
            if (m.subtreeFlags & 2064 && w !== null)
              w.return = m, Ne = w;
            else
              e:
                for (; Ne !== null; ) {
                  if (m = Ne, m.flags & 2048)
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ns(9, m, m.return);
                    }
                  var B = m.sibling;
                  if (B !== null) {
                    B.return = m.return, Ne = B;
                    break e;
                  }
                  Ne = m.return;
                }
          }
          var H = n.current;
          for (Ne = H; Ne !== null; ) {
            w = Ne;
            var Z = w.child;
            if (w.subtreeFlags & 2064 && Z !== null)
              Z.return = w, Ne = Z;
            else
              e:
                for (w = H; Ne !== null; ) {
                  if (O = Ne, O.flags & 2048)
                    try {
                      switch (O.tag) {
                        case 0:
                        case 11:
                        case 15:
                          rs(9, O);
                      }
                    } catch (Ue) {
                      pn(O, O.return, Ue);
                    }
                  if (O === w) {
                    Ne = null;
                    break e;
                  }
                  var ve = O.sibling;
                  if (ve !== null) {
                    ve.return = O.return, Ne = ve;
                    break e;
                  }
                  Ne = O.return;
                }
          }
          if (pt = p, _r(), Da && typeof Da.onPostCommitFiberRoot == "function")
            try {
              Da.onPostCommitFiberRoot(xu, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Nt = o, ur.transition = r;
      }
    }
    return !1;
  }
  function Vp(n, r, o) {
    r = Al(o, r), r = Ep(n, r, 1), n = Wi(n, r, 1), r = sr(), n !== null && (Co(n, 1, r), fr(n, r));
  }
  function pn(n, r, o) {
    if (n.tag === 3)
      Vp(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Vp(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Wa === null || !Wa.has(s))) {
            n = Al(o, n), n = Ku(r, n, 1), r = Wi(r, n, 1), n = sr(), r !== null && (Co(r, 1, n), fr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Eh(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = sr(), n.pingedLanes |= n.suspendedLanes & o, on === n && (Fn & o) === o && (Nn === 4 || Nn === 3 && (Fn & 130023424) === Fn && 500 > cn() - Xd ? Yo(n, 0) : Bl |= o), fr(n, r);
  }
  function Yc(n, r) {
    r === 0 && (n.mode & 1 ? (r = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : r = 1);
    var o = sr();
    n = pi(n, r), n !== null && (Co(n, r, o), fr(n, o));
  }
  function Th(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Yc(n, o);
  }
  function Rh(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    s !== null && s.delete(r), Yc(n, o);
  }
  var Fp;
  Fp = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || fn.current)
        En = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return En = !1, mi(n, r, o);
        En = !!(n.flags & 131072);
      }
    else
      En = !1, Qt && r.flags & 1048576 && bd(r, kl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        or(n, r), n = r.pendingProps;
        var p = ca(r, qe.current);
        ge(r, o), p = Ki(null, r, s, n, p, o);
        var m = Ao();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Jt(s) ? (m = !0, ac(r)) : m = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Md(r), p.updater = dc, r.stateNode = p, p._reactInternals = r, pc(r, s, n, o), r = Rp(null, r, s, !0, m, o)) : (r.tag = 0, Qt && m && ic(r), Ln(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (or(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = Dh(s), n = Xr(s, n), p) {
            case 0:
              r = zl(null, r, s, n, o);
              break e;
            case 1:
              r = Vd(null, r, s, n, o);
              break e;
            case 11:
              r = Ji(null, r, s, n, o);
              break e;
            case 14:
              r = Ac(null, r, s, Xr(s.type, n), o);
              break e;
          }
          throw Error(f(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Xr(s, p), zl(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Xr(s, p), Vd(n, r, s, p, o);
      case 3:
        e: {
          if (kp(r), n === null)
            throw Error(f(387));
          s = r.pendingProps, m = r.memoizedState, p = m.element, Dn(n, r), Gi(r, s, null, o);
          var w = r.memoizedState;
          if (s = w.element, m.isDehydrated)
            if (m = { element: s, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              p = Al(Error(f(423)), r), r = zc(n, r, s, o, p);
              break e;
            } else if (s !== p) {
              p = Al(Error(f(424)), r), r = zc(n, r, s, o, p);
              break e;
            } else
              for (Hr = _a(r.stateNode.containerInfo.firstChild), Gr = r, Qt = !0, pa = null, o = wp(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (rn(), s === p) {
              r = Qn(n, r, o);
              break e;
            }
            Ln(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ze(r), n === null && lc(r), s = r.type, p = r.pendingProps, m = n !== null ? n.memoizedProps : null, w = p.children, Vu(s, p) ? w = null : m !== null && Vu(s, m) && (r.flags |= 32), it(n, r), Ln(n, r, w, o), r.child;
      case 6:
        return n === null && lc(r), null;
      case 13:
        return Pd(n, r, o);
      case 4:
        return _d(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = Ll(r, null, s, o) : Ln(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Xr(s, p), Ji(n, r, s, p, o);
      case 7:
        return Ln(n, r, r.pendingProps, o), r.child;
      case 8:
        return Ln(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Ln(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, m = r.memoizedProps, w = p.value, Lt(Ia, s._currentValue), s._currentValue = w, m !== null)
            if (ua(m.value, w)) {
              if (m.children === p.children && !fn.current) {
                r = Qn(n, r, o);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var O = m.dependencies;
                if (O !== null) {
                  w = m.child;
                  for (var A = O.firstContext; A !== null; ) {
                    if (A.context === s) {
                      if (m.tag === 1) {
                        A = vi(-1, o & -o), A.tag = 2;
                        var G = m.updateQueue;
                        if (G !== null) {
                          G = G.shared;
                          var oe = G.pending;
                          oe === null ? A.next = A : (A.next = oe.next, oe.next = A), G.pending = A;
                        }
                      }
                      m.lanes |= o, A = m.alternate, A !== null && (A.lanes |= o), $n(
                        m.return,
                        o,
                        r
                      ), O.lanes |= o;
                      break;
                    }
                    A = A.next;
                  }
                } else if (m.tag === 10)
                  w = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (w = m.return, w === null)
                    throw Error(f(341));
                  w.lanes |= o, O = w.alternate, O !== null && (O.lanes |= o), $n(w, o, r), w = m.sibling;
                } else
                  w = m.child;
                if (w !== null)
                  w.return = m;
                else
                  for (w = m; w !== null; ) {
                    if (w === r) {
                      w = null;
                      break;
                    }
                    if (m = w.sibling, m !== null) {
                      m.return = w.return, w = m;
                      break;
                    }
                    w = w.return;
                  }
                m = w;
              }
          Ln(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, ge(r, o), p = mn(p), s = s(p), r.flags |= 1, Ln(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = Xr(s, r.pendingProps), p = Xr(s.type, p), Ac(n, r, s, p, o);
      case 15:
        return Vr(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Xr(s, p), or(n, r), r.tag = 1, Jt(s) ? (n = !0, ac(r)) : n = !1, ge(r, o), gp(r, s, p), pc(r, s, p, o), Rp(null, r, s, !0, n, o);
      case 19:
        return Id(n, r, o);
      case 22:
        return $o(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function n1(n, r) {
    return Bf(n, r);
  }
  function kh(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ca(n, r, o, s) {
    return new kh(n, r, o, s);
  }
  function r1(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Dh(n) {
    if (typeof n == "function")
      return r1(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Me)
        return 11;
      if (n === Ke)
        return 14;
    }
    return 2;
  }
  function ro(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ca(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Zc(n, r, o, s, p, m) {
    var w = 2;
    if (s = n, typeof n == "function")
      r1(n) && (w = 1);
    else if (typeof n == "string")
      w = 5;
    else
      e:
        switch (n) {
          case ue:
            return Qo(o.children, p, m, r);
          case ae:
            w = 8, p |= 8;
            break;
          case ye:
            return n = Ca(12, o, r, p | 2), n.elementType = ye, n.lanes = m, n;
          case Oe:
            return n = Ca(13, o, r, p), n.elementType = Oe, n.lanes = m, n;
          case he:
            return n = Ca(19, o, r, p), n.elementType = he, n.lanes = m, n;
          case ot:
            return ls(o, p, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case we:
                  w = 10;
                  break e;
                case xe:
                  w = 9;
                  break e;
                case Me:
                  w = 11;
                  break e;
                case Ke:
                  w = 14;
                  break e;
                case be:
                  w = 16, s = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = Ca(w, o, r, p), r.elementType = n, r.type = s, r.lanes = m, r;
  }
  function Qo(n, r, o, s) {
    return n = Ca(7, n, s, r), n.lanes = o, n;
  }
  function ls(n, r, o, s) {
    return n = Ca(22, n, s, r), n.elementType = ot, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function us(n, r, o) {
    return n = Ca(6, n, null, r), n.lanes = o, n;
  }
  function Wo(n, r, o) {
    return r = Ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Lh(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zf(0), this.expirationTimes = Zf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zf(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Qc(n, r, o, s, p, m, w, O, A) {
    return n = new Lh(n, r, o, O, A), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ca(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Md(m), n;
  }
  function Pp(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function a1(n) {
    if (!n)
      return ja;
    n = n._reactInternals;
    e: {
      if (Pa(n) !== n || n.tag !== 1)
        throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Jt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Jt(o))
        return Bu(n, o, r);
    }
    return r;
  }
  function Bp(n, r, o, s, p, m, w, O, A) {
    return n = Qc(o, s, !0, n, p, m, w, O, A), n.context = a1(null), o = n.current, s = sr(), p = Tn(o), m = vi(s, p), m.callback = r ?? null, Wi(o, m, p), n.current.lanes = p, Co(n, p, s), fr(n, s), n;
  }
  function ss(n, r, o, s) {
    var p = r.current, m = sr(), w = Tn(p);
    return o = a1(o), r.context === null ? r.context = o : r.pendingContext = o, r = vi(m, w), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Wi(p, r, w), n !== null && (cr(n, p, w, m), fc(n, p, w)), w;
  }
  function Wc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function jp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function i1(n, r) {
    jp(n, r), (n = n.alternate) && jp(n, r);
  }
  function Ip() {
    return null;
  }
  var o1 = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Gc(n) {
    this._internalRoot = n;
  }
  xi.prototype.render = Gc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    ss(n, r, null, null);
  }, xi.prototype.unmount = Gc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      no(function() {
        ss(null, n, null, null);
      }), r[fi] = null;
    }
  };
  function xi(n) {
    this._internalRoot = n;
  }
  xi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = D2();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < zt.length && r !== 0 && r < zt[o].priority; o++)
        ;
      zt.splice(o, 0, n), o === 0 && L2(n);
    }
  };
  function l1(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Xc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Yp() {
  }
  function Mh(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var G = Wc(w);
          m.call(G);
        };
      }
      var w = Bp(r, s, n, 0, null, !1, !1, "", Yp);
      return n._reactRootContainer = w, n[fi] = w.current, Tl(n.nodeType === 8 ? n.parentNode : n), no(), w;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof s == "function") {
      var O = s;
      s = function() {
        var G = Wc(A);
        O.call(G);
      };
    }
    var A = Qc(n, 0, !1, null, null, !1, !1, "", Yp);
    return n._reactRootContainer = A, n[fi] = A.current, Tl(n.nodeType === 8 ? n.parentNode : n), no(function() {
      ss(r, A, o, s);
    }), A;
  }
  function Kc(n, r, o, s, p) {
    var m = o._reactRootContainer;
    if (m) {
      var w = m;
      if (typeof p == "function") {
        var O = p;
        p = function() {
          var A = Wc(w);
          O.call(A);
        };
      }
      ss(r, w, n, p);
    } else
      w = Mh(o, r, n, p, s);
    return Wc(w);
  }
  k2 = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = go(r.pendingLanes);
          o !== 0 && (Su(r, o | 1), fr(r, cn()), !(pt & 6) && (jl = cn() + 500, _r()));
        }
        break;
      case 13:
        no(function() {
          var s = pi(n, 1);
          if (s !== null) {
            var p = sr();
            cr(s, n, 1, p);
          }
        }), i1(n, 1);
    }
  }, Fs = function(n) {
    if (n.tag === 13) {
      var r = pi(n, 134217728);
      if (r !== null) {
        var o = sr();
        cr(r, n, 134217728, o);
      }
      i1(n, 134217728);
    }
  }, $t = function(n) {
    if (n.tag === 13) {
      var r = Tn(n), o = pi(n, r);
      if (o !== null) {
        var s = sr();
        cr(o, n, r, s);
      }
      i1(n, r);
    }
  }, D2 = function() {
    return Nt;
  }, Wf = function(n, r) {
    var o = Nt;
    try {
      return Nt = n, r();
    } finally {
      Nt = o;
    }
  }, Yr = function(n, r, o) {
    switch (r) {
      case "input":
        if (Dt(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = Be(s);
              if (!p)
                throw Error(f(90));
              Se(s), Dt(s, p);
            }
          }
        }
        break;
      case "textarea":
        Dr(n, o);
        break;
      case "select":
        r = o.value, r != null && Kt(n, !!o.multiple, r, !1);
    }
  }, g2 = Zl, C2 = no;
  var Oh = { usingClientEntryPoint: !1, Events: [Pu, Rl, Be, _s, As, Zl] }, Wl = { findFiberByHostInstance: sa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Nh = { bundleType: Wl.bundleType, version: Wl.version, rendererPackageName: Wl.rendererPackageName, rendererConfig: Wl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: X.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = x2(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Wl.findFiberByHostInstance || Ip, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qc.isDisabled && qc.supportsFiber)
      try {
        xu = qc.inject(Nh), Da = qc;
      } catch {
      }
  }
  return Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh, Ra.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!l1(r))
      throw Error(f(200));
    return Pp(n, r, null, o);
  }, Ra.createRoot = function(n, r) {
    if (!l1(n))
      throw Error(f(299));
    var o = !1, s = "", p = o1;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Qc(n, 1, !1, null, null, o, !1, s, p), n[fi] = r.current, Tl(n.nodeType === 8 ? n.parentNode : n), new Gc(r);
  }, Ra.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = x2(r), n = n === null ? null : n.stateNode, n;
  }, Ra.flushSync = function(n) {
    return no(n);
  }, Ra.hydrate = function(n, r, o) {
    if (!Xc(r))
      throw Error(f(200));
    return Kc(null, n, r, !0, o);
  }, Ra.hydrateRoot = function(n, r, o) {
    if (!l1(n))
      throw Error(f(405));
    var s = o != null && o.hydratedSources || null, p = !1, m = "", w = o1;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), r = Bp(r, null, n, 1, o ?? null, p, !1, m, w), n[fi] = r.current, Tl(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new xi(r);
  }, Ra.render = function(n, r, o) {
    if (!Xc(r))
      throw Error(f(200));
    return Kc(null, n, r, !1, o);
  }, Ra.unmountComponentAtNode = function(n) {
    if (!Xc(n))
      throw Error(f(40));
    return n._reactRootContainer ? (no(function() {
      Kc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[fi] = null;
      });
    }), !0) : !1;
  }, Ra.unstable_batchedUpdates = Zl, Ra.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!Xc(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return Kc(n, r, o, !1, s);
  }, Ra.version = "18.2.0-next-9e3b772b8-20220608", Ra;
}
function O9() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O9);
    } catch (u) {
      console.error(u);
    }
  }
}
process.env.NODE_ENV === "production" ? (O9(), D4.exports = uE()) : D4.exports = lE();
var $v = D4.exports;
const sE = /* @__PURE__ */ aE($v);
function cE(u, d) {
  return Kw((f, y) => {
    const C = d[f][y];
    return C ?? f;
  }, u);
}
const Y4 = (u) => {
  const { present: d, children: f } = u, y = fE(d), C = typeof f == "function" ? f({
    present: y.isPresent
  }) : Of.only(f), x = Ns(y.ref, C.ref);
  return typeof f == "function" || y.isPresent ? /* @__PURE__ */ H4(C, {
    ref: x
  }) : null;
};
Y4.displayName = "Presence";
function fE(u) {
  const [d, f] = pr(), y = xn({}), C = xn(u), x = xn("none"), h = u ? "mounted" : "unmounted", [k, E] = cE(h, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Pt(() => {
    const b = bv(y.current);
    x.current = k === "mounted" ? b : "none";
  }, [
    k
  ]), _f(() => {
    const b = y.current, N = C.current;
    if (N !== u) {
      const M = x.current, L = bv(b);
      u ? E("MOUNT") : L === "none" || (b == null ? void 0 : b.display) === "none" ? E("UNMOUNT") : E(N && M !== L ? "ANIMATION_OUT" : "UNMOUNT"), C.current = u;
    }
  }, [
    u,
    E
  ]), _f(() => {
    if (d) {
      const b = (R) => {
        const L = bv(y.current).includes(R.animationName);
        R.target === d && L && $v.flushSync(
          () => E("ANIMATION_END")
        );
      }, N = (R) => {
        R.target === d && (x.current = bv(y.current));
      };
      return d.addEventListener("animationstart", N), d.addEventListener("animationcancel", b), d.addEventListener("animationend", b), () => {
        d.removeEventListener("animationstart", N), d.removeEventListener("animationcancel", b), d.removeEventListener("animationend", b);
      };
    } else
      E("ANIMATION_END");
  }, [
    d,
    E
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(k),
    ref: dr((b) => {
      b && (y.current = getComputedStyle(b)), f(b);
    }, [])
  };
}
function bv(u) {
  return (u == null ? void 0 : u.animationName) || "none";
}
const dE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], mu = dE.reduce((u, d) => {
  const f = /* @__PURE__ */ Rr((y, C) => {
    const { asChild: x, ...h } = y, k = x ? Hv : d;
    return Pt(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ St(k, nr({}, h, {
      ref: C
    }));
  });
  return f.displayName = `Primitive.${d}`, {
    ...u,
    [d]: f
  };
}, {});
function pE(u, d) {
  u && $v.flushSync(
    () => u.dispatchEvent(d)
  );
}
const N9 = "Checkbox", [vE, Tk] = I4(N9), [hE, mE] = vE(N9), yE = /* @__PURE__ */ Rr((u, d) => {
  const { __scopeCheckbox: f, name: y, checked: C, defaultChecked: x, required: h, disabled: k, value: E = "on", onCheckedChange: b, ...N } = u, [R, M] = pr(null), L = Ns(
    d,
    (F) => M(F)
  ), _ = xn(!1), $ = R ? !!R.closest("form") : !0, [P = !1, V] = D9({
    prop: C,
    defaultProp: x,
    onChange: b
  }), Y = xn(P);
  return Pt(() => {
    const F = R == null ? void 0 : R.form;
    if (F) {
      const X = () => V(Y.current);
      return F.addEventListener("reset", X), () => F.removeEventListener("reset", X);
    }
  }, [
    R,
    V
  ]), /* @__PURE__ */ St(hE, {
    scope: f,
    state: P,
    disabled: k
  }, /* @__PURE__ */ St(mu.button, nr({
    type: "button",
    role: "checkbox",
    "aria-checked": Ds(P) ? "mixed" : P,
    "aria-required": h,
    "data-state": _9(P),
    "data-disabled": k ? "" : void 0,
    disabled: k,
    value: E
  }, N, {
    ref: L,
    onKeyDown: _i(u.onKeyDown, (F) => {
      F.key === "Enter" && F.preventDefault();
    }),
    onClick: _i(u.onClick, (F) => {
      V(
        (X) => Ds(X) ? !0 : !X
      ), $ && (_.current = F.isPropagationStopped(), _.current || F.stopPropagation());
    })
  })), $ && /* @__PURE__ */ St(xE, {
    control: R,
    bubbles: !_.current,
    name: y,
    value: E,
    checked: P,
    required: h,
    disabled: k,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), gE = "CheckboxIndicator", CE = /* @__PURE__ */ Rr((u, d) => {
  const { __scopeCheckbox: f, forceMount: y, ...C } = u, x = mE(gE, f);
  return /* @__PURE__ */ St(Y4, {
    present: y || Ds(x.state) || x.state === !0
  }, /* @__PURE__ */ St(mu.span, nr({
    "data-state": _9(x.state),
    "data-disabled": x.disabled ? "" : void 0
  }, C, {
    ref: d,
    style: {
      pointerEvents: "none",
      ...u.style
    }
  })));
}), xE = (u) => {
  const { control: d, checked: f, bubbles: y = !0, ...C } = u, x = xn(null), h = rE(f), k = L9(d);
  return Pt(() => {
    const E = x.current, b = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(b, "checked").set;
    if (h !== f && R) {
      const M = new Event("click", {
        bubbles: y
      });
      E.indeterminate = Ds(f), R.call(E, Ds(f) ? !1 : f), E.dispatchEvent(M);
    }
  }, [
    h,
    f,
    y
  ]), /* @__PURE__ */ St("input", nr({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Ds(f) ? !1 : f
  }, C, {
    tabIndex: -1,
    ref: x,
    style: {
      ...u.style,
      ...k,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Ds(u) {
  return u === "indeterminate";
}
function _9(u) {
  return Ds(u) ? "indeterminate" : u ? "checked" : "unchecked";
}
const A9 = yE, SE = CE, Ov = ["light", "dark"], Z4 = "(prefers-color-scheme: dark)", wE = typeof window > "u", Q4 = /* @__PURE__ */ i2(void 0), bE = { setTheme: (u) => {
}, themes: [] }, EE = () => {
  var u;
  return (u = d2(Q4)) !== null && u !== void 0 ? u : bE;
}, TE = (u) => d2(Q4) ? /* @__PURE__ */ pe.createElement(y9, null, u.children) : /* @__PURE__ */ pe.createElement(kE, u), RE = ["light", "dark"], kE = ({ forcedTheme: u, disableTransitionOnChange: d = !1, enableSystem: f = !0, enableColorScheme: y = !0, storageKey: C = "theme", themes: x = RE, defaultTheme: h = f ? "system" : "light", attribute: k = "data-theme", value: E, children: b, nonce: N }) => {
  const [R, M] = pr(() => q7(C, h)), [L, _] = pr(() => q7(C)), $ = E ? Object.values(E) : x, P = dr((X) => {
    let K = X;
    if (!K)
      return;
    X === "system" && f && (K = J7());
    const le = E ? E[K] : K, ue = d ? LE() : null, ae = document.documentElement;
    if (k === "class" ? (ae.classList.remove(...$), le && ae.classList.add(le)) : le ? ae.setAttribute(k, le) : ae.removeAttribute(k), y) {
      const ye = Ov.includes(h) ? h : null, we = Ov.includes(K) ? K : ye;
      ae.style.colorScheme = we;
    }
    ue == null || ue();
  }, []), V = dr((X) => {
    M(X);
    try {
      localStorage.setItem(C, X);
    } catch {
    }
  }, [u]), Y = dr((X) => {
    const K = J7(X);
    _(K), R === "system" && f && !u && P("system");
  }, [R, u]);
  Pt(() => {
    const X = window.matchMedia(Z4);
    return X.addListener(Y), Y(X), () => X.removeListener(Y);
  }, [Y]), Pt(() => {
    const X = (K) => {
      K.key === C && V(K.newValue || h);
    };
    return window.addEventListener("storage", X), () => window.removeEventListener("storage", X);
  }, [V]), Pt(() => {
    P(u ?? R);
  }, [u, R]);
  const F = Ls(() => ({ theme: R, setTheme: V, forcedTheme: u, resolvedTheme: R === "system" ? L : R, themes: f ? [...x, "system"] : x, systemTheme: f ? L : void 0 }), [R, V, u, L, f, x]);
  return pe.createElement(Q4.Provider, { value: F }, /* @__PURE__ */ pe.createElement(DE, { forcedTheme: u, disableTransitionOnChange: d, enableSystem: f, enableColorScheme: y, storageKey: C, themes: x, defaultTheme: h, attribute: k, value: E, children: b, attrs: $, nonce: N }), b);
}, DE = /* @__PURE__ */ qw(({ forcedTheme: u, storageKey: d, attribute: f, enableSystem: y, enableColorScheme: C, defaultTheme: x, value: h, attrs: k, nonce: E }) => {
  const b = x === "system", N = f === "class" ? `var d=document.documentElement,c=d.classList;c.remove(${k.map((_) => `'${_}'`).join(",")});` : `var d=document.documentElement,n='${f}',s='setAttribute';`, R = C ? Ov.includes(x) && x ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${x}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", M = (_, $ = !1, P = !0) => {
    const V = h ? h[_] : _, Y = $ ? _ + "|| ''" : `'${V}'`;
    let F = "";
    return C && P && !$ && Ov.includes(_) && (F += `d.style.colorScheme = '${_}';`), f === "class" ? F += $ || V ? `c.add(${Y})` : "null" : V && (F += `d[s](n,${Y})`), F;
  }, L = u ? `!function(){${N}${M(u)}}()` : y ? `!function(){try{${N}var e=localStorage.getItem('${d}');if('system'===e||(!e&&${b})){var t='${Z4}',m=window.matchMedia(t);if(m.media!==t||m.matches){${M("dark")}}else{${M("light")}}}else if(e){${h ? `var x=${JSON.stringify(h)};` : ""}${M(h ? "x[e]" : "e", !0)}}${b ? "" : "else{" + M(x, !1, !1) + "}"}${R}}catch(e){}}()` : `!function(){try{${N}var e=localStorage.getItem('${d}');if(e){${h ? `var x=${JSON.stringify(h)};` : ""}${M(h ? "x[e]" : "e", !0)}}else{${M(x, !1, !1)};}${R}}catch(t){}}();`;
  return pe.createElement("script", { nonce: E, dangerouslySetInnerHTML: { __html: L } });
}, () => !0), q7 = (u, d) => {
  if (wE)
    return;
  let f;
  try {
    f = localStorage.getItem(u) || void 0;
  } catch {
  }
  return f || d;
}, LE = () => {
  const u = document.createElement("style");
  return u.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(u), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(u);
    }, 1);
  };
}, J7 = (u) => (u || (u = window.matchMedia(Z4)), u.matches ? "dark" : "light"), z9 = i2({}), ME = ({ children: u, app: d }) => {
  const { theme: f, setTheme: y } = EE();
  return Pt(() => {
    const C = document.documentElement, x = F7[d];
    Object.keys(x).map((h) => {
      C.style.setProperty(`--${h}`, x[h]);
    });
  }, [d]), /* @__PURE__ */ Cn(
    z9.Provider,
    {
      value: { app: d, pallete: F7[d], theme: f, setTheme: y },
      children: [
        u,
        /* @__PURE__ */ ne(HT, {})
      ]
    }
  );
}, Rk = ({ children: u, app: d }) => /* @__PURE__ */ ne(TE, { defaultTheme: "light", children: /* @__PURE__ */ ne(ME, { app: d, children: u }) }), W4 = () => d2(z9), kk = ({ ...u }) => /* @__PURE__ */ ne(
  "i",
  {
    ...u,
    className: p2("fi fi-rr-envelope nxth-leading-3", u.className)
  }
), OE = ({ ...u }) => /* @__PURE__ */ ne(
  "i",
  {
    ...u,
    className: p2("fi fi-rr-lock nxth-leading-3", u.className)
  }
), NE = ({ ...u }) => /* @__PURE__ */ ne(
  "i",
  {
    ...u,
    className: p2("fi fi-rr-triangle-warning", u.className)
  }
), Dk = ({ size: u = 22, ...d }) => /* @__PURE__ */ ne(
  "svg",
  {
    ...d,
    width: u,
    height: u,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ ne(
      "path",
      {
        d: "M23.5789 15.1625C21.6155 15.7131 19.541 15.7311 17.5684 15.2148C15.5958 14.6985 13.7962 13.6664 12.3543 12.2245C10.9125 10.7827 9.88041 8.98306 9.36409 7.01045C8.84777 5.03783 8.86581 2.96334 9.41636 1C7.48069 1.53877 5.71996 2.57528 4.30954 4.00629C2.89912 5.43731 1.88825 7.21288 1.3776 9.15616C0.866952 11.0994 0.874357 13.1426 1.39908 15.0821C1.9238 17.0216 2.94752 18.7898 4.36827 20.2106C5.78903 21.6313 7.55723 22.6551 9.49675 23.1798C11.4363 23.7045 13.4794 23.7119 15.4227 23.2013C17.366 22.6906 19.1416 21.6797 20.5726 20.2693C22.0036 18.8589 23.0401 17.0982 23.5789 15.1625Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Lk = ({ size: u = 22, ...d }) => /* @__PURE__ */ Cn(
  "svg",
  {
    ...d,
    width: u,
    height: u,
    viewBox: "0 0 262 262",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M131.003 59.5453C116.871 59.5453 103.056 63.736 91.3054 71.5875C79.5547 79.4391 70.3962 90.5987 64.988 103.655C59.5798 116.712 58.1647 131.079 60.9218 144.94C63.6789 158.801 70.4843 171.533 80.4774 181.526C90.4705 191.519 103.202 198.324 117.063 201.081C130.924 203.838 145.291 202.423 158.348 197.015C171.404 191.607 182.564 182.448 190.416 170.698C198.267 158.947 202.458 145.132 202.458 131C202.439 112.055 194.905 93.891 181.509 80.4947C168.112 67.0985 149.949 59.5642 131.003 59.5453V59.5453ZM131.003 178.636C121.582 178.636 112.372 175.842 104.538 170.608C96.7043 165.374 90.5986 157.934 86.9931 149.229C83.3877 140.525 82.4443 130.947 84.2824 121.706C86.1204 112.466 90.6573 103.978 97.3194 97.3158C103.981 90.6538 112.469 86.1168 121.71 84.2788C130.951 82.4407 140.529 83.3841 149.233 86.9896C157.937 90.595 165.377 96.7007 170.612 104.534C175.846 112.368 178.64 121.578 178.64 131C178.64 143.634 173.621 155.75 164.687 164.684C155.754 173.617 143.637 178.636 131.003 178.636Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M131.007 47.6364C134.165 47.6364 137.194 46.3817 139.428 44.1483C141.661 41.9149 142.916 38.8858 142.916 35.7273V11.9091C142.916 8.7506 141.661 5.72148 139.428 3.48809C137.194 1.2547 134.165 0 131.007 0C127.848 0 124.819 1.2547 122.586 3.48809C120.352 5.72148 119.098 8.7506 119.098 11.9091V35.7273C119.098 38.8858 120.352 41.9149 122.586 44.1483C124.819 46.3817 127.848 47.6364 131.007 47.6364Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M131.007 214.364C127.848 214.364 124.819 215.619 122.586 217.852C120.352 220.085 119.098 223.115 119.098 226.273V250.091C119.098 253.25 120.352 256.279 122.586 258.512C124.819 260.746 127.848 262 131.007 262C134.165 262 137.194 260.746 139.428 258.512C141.661 256.279 142.916 253.25 142.916 250.091V226.273C142.916 223.115 141.661 220.085 139.428 217.852C137.194 215.619 134.165 214.364 131.007 214.364Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M47.6364 131.001C47.6364 127.843 46.3817 124.813 44.1483 122.58C41.9149 120.347 38.8858 119.092 35.7273 119.092H11.9091C8.7506 119.092 5.72148 120.347 3.48809 122.58C1.2547 124.813 0 127.843 0 131.001C0 134.159 1.2547 137.189 3.48809 139.422C5.72148 141.655 8.7506 142.91 11.9091 142.91H35.7273C38.8858 142.91 41.9149 141.655 44.1483 139.422C46.3817 137.189 47.6364 134.159 47.6364 131.001Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M250.1 119.092H226.282C223.124 119.092 220.095 120.347 217.861 122.58C215.628 124.813 214.373 127.843 214.373 131.001C214.373 134.159 215.628 137.189 217.861 139.422C220.095 141.655 223.124 142.91 226.282 142.91H250.1C253.259 142.91 256.288 141.655 258.521 139.422C260.755 137.189 262.009 134.159 262.009 131.001C262.009 127.843 260.755 124.813 258.521 122.58C256.288 120.347 253.259 119.092 250.1 119.092Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M55.2059 72.0498C57.452 74.2191 60.4603 75.4195 63.5828 75.3923C66.7053 75.3652 69.6923 74.1127 71.9003 71.9047C74.1083 69.6967 75.3608 66.7097 75.3879 63.5872C75.4151 60.4647 74.2147 57.4564 72.0454 55.2103L55.2059 38.3709C52.9598 36.2015 49.9516 35.0011 46.829 35.0283C43.7065 35.0554 40.7196 36.3079 38.5115 38.5159C36.3035 40.724 35.051 43.7109 35.0239 46.8334C34.9968 49.956 36.1971 52.9642 38.3665 55.2103L55.2059 72.0498Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M206.79 189.95C204.544 187.78 201.536 186.58 198.413 186.607C195.29 186.634 192.304 187.887 190.096 190.095C187.887 192.303 186.635 195.29 186.608 198.412C186.581 201.535 187.781 204.543 189.95 206.789L206.79 223.629C209.036 225.798 212.044 226.998 215.167 226.971C218.289 226.944 221.276 225.692 223.484 223.484C225.692 221.276 226.945 218.289 226.972 215.166C226.999 212.044 225.799 209.035 223.629 206.789L206.79 189.95Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M198.362 75.5391C201.52 75.5385 204.548 74.2833 206.781 72.0498L223.621 55.2103C225.79 52.9642 226.991 49.956 226.963 46.8334C226.936 43.7109 225.684 40.724 223.476 38.5159C221.268 36.3079 218.281 35.0554 215.158 35.0283C212.036 35.0011 209.027 36.2015 206.781 38.3709L189.942 55.2103C188.277 56.8758 187.143 58.9976 186.684 61.3074C186.224 63.6172 186.46 66.0113 187.361 68.1871C188.263 70.3629 189.789 72.2227 191.747 73.5313C193.705 74.8399 196.007 75.5386 198.362 75.5391Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M55.2154 189.95L38.3759 206.789C37.2385 207.888 36.3312 209.202 35.7071 210.655C35.083 212.108 34.7544 213.671 34.7407 215.252C34.7269 216.833 35.0283 218.401 35.6271 219.865C36.2259 221.329 37.1102 222.658 38.2283 223.776C39.3465 224.895 40.6762 225.779 42.1398 226.378C43.6033 226.976 45.1715 227.278 46.7528 227.264C48.3341 227.25 49.8968 226.922 51.3498 226.298C52.8027 225.673 54.1168 224.766 55.2154 223.629L72.0549 206.789C74.2242 204.543 75.4246 201.535 75.3974 198.412C75.3703 195.29 74.1178 192.303 71.9098 190.095C69.7017 187.887 66.7148 186.634 63.5923 186.607C60.4697 186.58 57.4615 187.78 55.2154 189.95Z",
          fill: "currentColor"
        }
      )
    ]
  }
), _E = ({ size: u = 22, ...d }) => /* @__PURE__ */ ne(
  "svg",
  {
    ...d,
    width: u,
    viewBox: "0 0 24 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ ne(
      "path",
      {
        d: "M12 15C4.14881 15 0.256312 8.1555 0.0945 7.86431C-0.0315 7.63763 -0.0315 7.36219 0.0945 7.1355C0.256312 6.8445 4.14881 0 12 0C19.8512 0 23.7437 6.8445 23.9055 7.13569C24.0315 7.36237 24.0315 7.63781 23.9055 7.8645C23.7437 8.1555 19.8512 15 12 15ZM1.63256 7.49887C2.52469 8.85094 6.02737 13.5 12 13.5C17.9916 13.5 21.4787 8.85469 22.3674 7.50112C21.4753 6.14906 17.9726 1.5 12 1.5C6.00844 1.5 2.52131 6.14531 1.63256 7.49887ZM12 12C9.51862 12 7.5 9.98138 7.5 7.5C7.5 5.01862 9.51862 3 12 3C14.4814 3 16.5 5.01862 16.5 7.5C16.5 9.98138 14.4814 12 12 12ZM12 4.5C10.3459 4.5 9 5.84588 9 7.5C9 9.15412 10.3459 10.5 12 10.5C13.6541 10.5 15 9.15412 15 7.5C15 5.84588 13.6541 4.5 12 4.5Z",
        fill: "currentColor"
      }
    )
  }
), AE = ({ size: u = 22, ...d }) => /* @__PURE__ */ ne(
  "svg",
  {
    ...d,
    width: u,
    viewBox: "0 0 129 97",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ ne(
      "path",
      {
        d: "M80.5151 49.5894L87.8419 42.2436C88.3751 44.2432 88.6875 46.3338 88.6875 48.5001C88.6875 61.8719 77.8374 72.7501 64.5 72.7501C62.3392 72.7501 60.2541 72.4368 58.2596 71.9023L65.5864 64.5566C73.5975 64.009 79.9689 57.6211 80.5151 49.5894ZM128.492 46.5369C127.996 45.6427 120.964 33.2883 107.217 22.8184L101.351 28.7001C111.374 36.0892 117.726 44.707 120.226 48.5062C115.448 55.8004 96.7046 80.8334 64.5 80.8334C59.6706 80.8334 55.1797 80.214 50.954 79.2258L44.3296 85.8673C50.4199 87.7396 57.1137 88.9167 64.5 88.9167C106.7 88.9167 127.622 52.0325 128.492 50.4634C129.169 49.2418 129.169 47.7585 128.492 46.5369V46.5369ZM111.694 6.89936L23.0063 95.8158C22.2192 96.6049 21.1872 97 20.1562 97C19.1253 97 18.0933 96.6049 17.3062 95.8158C15.7309 94.2365 15.7309 91.6792 17.3062 90.1009L28.5896 78.7883C10.3482 67.7475 1.07937 51.495 0.507938 50.4634C-0.169312 49.2418 -0.169312 47.7575 0.507938 46.5359C1.37768 44.9677 22.2999 8.08356 64.5 8.08356C75.4116 8.08356 84.8629 10.5793 92.9425 14.2693L105.994 1.18446C107.569 -0.394819 110.12 -0.394819 111.694 1.18446C113.268 2.76373 113.269 5.32109 111.694 6.89936V6.89936ZM34.6012 72.7612L44.8073 62.5287C41.9885 58.5638 40.3125 53.729 40.3125 48.5001C40.3125 35.1283 51.1626 24.2502 64.5 24.2502C69.7154 24.2502 74.5378 25.9305 78.4925 28.7556L86.7454 20.4813C80.2249 17.8634 72.8155 16.1669 64.5 16.1669C32.2954 16.1669 13.5521 41.1999 8.77502 48.4941C11.8085 53.1036 20.5281 64.7718 34.6012 72.7612ZM50.6597 56.6602L72.6391 34.6241C70.2415 33.2045 67.4811 32.3335 64.5 32.3335C55.6091 32.3335 48.375 39.5863 48.375 48.5001C48.375 51.4889 49.2437 54.2564 50.6597 56.6602V56.6602Z",
        fill: "currentColor"
      }
    )
  }
), zE = ({ ...u }) => /* @__PURE__ */ Cn(
  "svg",
  {
    ...u,
    viewBox: "0 0 158 138",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M133.862 119.93C133.862 127.191 127.98 133.072 120.719 133.072H18.8616C11.6002 133.072 5.71875 127.191 5.71875 119.93V18.0725C5.71875 10.8111 11.6002 4.92963 18.8616 4.92963H120.719C127.98 4.92963 133.862 10.8111 133.862 18.0725V119.93Z",
          fill: "#8CCCEE"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M20.5045 119.93V18.0725C20.5045 10.8111 26.3859 4.92963 33.6473 4.92963H18.8616C11.6002 4.92963 5.71875 10.8111 5.71875 18.0725V119.93C5.71875 127.191 11.6002 133.072 18.8616 133.072H33.6473C26.3859 133.072 20.5045 127.191 20.5045 119.93Z",
          fill: "#4983AA"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M120.72 138H18.8624C8.89359 138 0.791016 129.897 0.791016 119.929V18.0714C0.791016 8.10257 8.89359 0 18.8624 0H101.005V9.85714H18.8624C14.3347 9.85714 10.6482 13.5437 10.6482 18.0714V119.929C10.6482 124.456 14.3347 128.143 18.8624 128.143H120.72C125.247 128.143 128.934 124.456 128.934 119.929V64.0714H138.791V119.929C138.791 129.897 130.688 138 120.72 138Z",
          fill: "#3A312B"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M81.2828 82.1421C80.0211 82.1421 78.7594 81.6624 77.7999 80.6964L48.2285 51.125L55.2008 44.1527L81.2894 70.2413L150.086 1.44497L157.058 8.41726L84.7722 80.703C83.8062 81.6624 82.5445 82.1421 81.2828 82.1421Z",
          fill: "#3A312B"
        }
      )
    ]
  }
), HE = ({ ...u }) => /* @__PURE__ */ Cn(
  "svg",
  {
    ...u,
    viewBox: "0 0 182 162",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M139.67 162H21.0462C9.43636 162 0 152.488 0 140.786V21.2143C0 9.51172 9.43636 0 21.0462 0H116.711V11.5714H21.0462C15.7732 11.5714 11.4798 15.8991 11.4798 21.2143V140.786C11.4798 146.101 15.7732 150.429 21.0462 150.429H139.67C144.943 150.429 149.237 146.101 149.237 140.786V75.2143H160.717V140.786C160.717 152.488 151.28 162 139.67 162Z",
          fill: "#3EA071"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M93.7513 96.4286C92.2819 96.4286 90.8125 95.8654 89.6951 94.7314L55.2559 60.0171L63.3759 51.8323L93.7589 82.458L173.88 1.69714L182 9.882L97.8151 94.7391C96.6901 95.8654 95.2207 96.4286 93.7513 96.4286Z",
          fill: "#3EA071"
        }
      )
    ]
  }
), e9 = ({ ...u }) => /* @__PURE__ */ Cn(
  "svg",
  {
    ...u,
    viewBox: "0 0 24 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M20.25 18.25C20.25 19.355 19.355 20.25 18.25 20.25H2.75C1.645 20.25 0.75 19.355 0.75 18.25V2.75C0.75 1.645 1.645 0.75 2.75 0.75H18.25C19.355 0.75 20.25 1.645 20.25 2.75V18.25Z",
          fill: "#2FDF84"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M3 18.25V2.75C3 1.645 3.895 0.75 5 0.75H2.75C1.645 0.75 0.75 1.645 0.75 2.75V18.25C0.75 19.355 1.645 20.25 2.75 20.25H5C3.895 20.25 3 19.355 3 18.25Z",
          fill: "#00B871"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M18.25 21H2.75C1.233 21 0 19.767 0 18.25V2.75C0 1.233 1.233 0 2.75 0H15.25V1.5H2.75C2.061 1.5 1.5 2.061 1.5 2.75V18.25C1.5 18.939 2.061 19.5 2.75 19.5H18.25C18.939 19.5 19.5 18.939 19.5 18.25V9.75H21V18.25C21 19.767 19.767 21 18.25 21Z",
          fill: "#3A312B"
        }
      ),
      /* @__PURE__ */ ne(
        "path",
        {
          d: "M12.2502 12.4997C12.0582 12.4997 11.8662 12.4267 11.7202 12.2797L7.22021 7.77973L8.28121 6.71873L12.2512 10.6887L22.7202 0.219727L23.7812 1.28073L12.7812 12.2807C12.6342 12.4267 12.4422 12.4997 12.2502 12.4997Z",
          fill: "#3A312B"
        }
      )
    ]
  }
), Mk = ({ size: u }) => {
  const { app: d, theme: f = "light" } = W4();
  return f === "light" ? {
    "nextmed-admin": /* @__PURE__ */ Cn(
      "svg",
      {
        width: u,
        viewBox: "0 0 290 83",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M51.6085 6.20911H22.2204C13.1154 6.20911 5.73438 13.3133 5.73438 22.0768V48.2929C5.73438 57.0564 13.1154 64.1606 22.2204 64.1606H51.6085C60.7135 64.1606 68.0946 57.0564 68.0946 48.2929V22.0768C68.0946 13.3133 60.7135 6.20911 51.6085 6.20911Z",
              fill: "url(#paint0_linear_3256_21916)"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M92.4471 24.1995C95.3422 24.1995 97.5836 25.0012 99.1698 26.6045C100.796 28.2078 101.609 30.4602 101.609 33.3614V51.7424H96.3737V33.9913C96.3737 32.1589 95.8977 30.7274 94.9458 29.6967C93.9939 28.6659 92.6851 28.1506 91.0193 28.1506C89.1549 28.1506 87.5486 28.7805 86.2004 30.0402C84.8521 31.3 83.86 32.9987 83.2257 35.1365V51.7424H77.9903V30.8419C77.9903 30.0402 77.8319 29.3912 77.5144 28.895C77.1968 28.3605 76.622 27.7879 75.7891 27.1771L79.2397 24.1995C80.5091 24.8867 81.4409 25.612 82.0358 26.3755C82.6308 27.139 83.0078 28.1315 83.1662 29.3531C84.0787 27.7498 85.328 26.49 86.9143 25.5738C88.5005 24.6576 90.3448 24.1995 92.4471 24.1995ZM121.529 48.4785C123.155 48.4785 124.543 48.2494 125.694 47.7913C126.884 47.3332 128.033 46.5888 129.144 45.5581L132.357 48.3639C131.167 49.7382 129.68 50.7498 127.895 51.3988C126.15 52.0478 123.988 52.3723 121.41 52.3723C117.325 52.3723 114.231 51.5324 112.129 49.8527C110.066 48.1349 109.036 45.5963 109.036 42.2369V33.705C109.036 30.7655 110.086 28.456 112.189 26.7763C114.331 25.0585 117.246 24.1995 120.934 24.1995C124.742 24.1995 127.676 25.0966 129.739 26.8908C131.841 28.6851 132.892 31.2618 132.892 34.6212C132.892 36.8735 132.476 38.4195 131.643 39.2593C130.85 40.0992 129.303 40.5191 127.003 40.5191H114.271V42.2942C114.271 44.3556 114.866 45.9017 116.056 46.9324C117.246 47.9631 119.07 48.4785 121.529 48.4785ZM120.934 28.0933C118.832 28.0933 117.186 28.6278 115.996 29.6967C114.846 30.7655 114.271 32.2162 114.271 34.0485V36.9116H124.444C125.674 36.9116 126.507 36.7207 126.943 36.339C127.419 35.9573 127.657 35.2319 127.657 34.1631C127.657 32.2543 127.062 30.7655 125.872 29.6967C124.682 28.6278 123.036 28.0933 120.934 28.0933ZM154.402 51.7424L147.263 41.6071L140.362 51.7424H135.008L144.526 37.7133L135.484 24.8294H140.778L147.62 34.5066L154.224 24.8294H159.578L150.416 38.4577L159.757 51.7424H154.402ZM169.902 28.7805V43.2104C169.902 44.8519 170.239 46.0735 170.913 46.8751C171.588 47.6386 172.659 48.0204 174.126 48.0204H177.934V51.9714H174.126C170.755 51.9714 168.335 51.2843 166.868 49.91C165.401 48.5357 164.667 46.3025 164.667 43.2104V19.275C164.667 18.4734 164.508 17.8244 164.191 17.3281C163.873 16.7937 163.298 16.2211 162.465 15.6103L165.976 12.6327C167.443 13.3962 168.454 14.2742 169.01 15.2667C169.605 16.2211 169.902 17.5572 169.902 19.275V24.8294H177.934V28.7805H169.902Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M216.302 24.1996C219.038 24.1996 221.14 25.0013 222.608 26.6046C224.115 28.1698 224.869 30.422 224.869 33.3615V51.7425H219.633V33.9914C219.633 32.1208 219.217 30.6893 218.384 29.6967C217.551 28.666 216.381 28.1507 214.874 28.1507C213.089 28.1507 211.542 28.8187 210.233 30.1548C208.964 31.4527 208.072 33.2088 207.556 35.4229V51.7425H202.321V33.9914C202.321 32.1208 201.904 30.6893 201.072 29.6967C200.239 28.666 199.068 28.1507 197.561 28.1507C195.777 28.1507 194.23 28.8378 192.921 30.2121C191.612 31.5482 190.72 33.2851 190.244 35.4229V51.7425H185.008V30.842C185.008 30.0403 184.849 29.3913 184.532 28.8951C184.215 28.3606 183.64 27.788 182.807 27.1772L186.258 24.1996C188.637 25.3449 189.926 27.0818 190.125 29.4104C191.077 27.7307 192.306 26.4519 193.813 25.5739C195.32 24.6577 197.045 24.1996 198.989 24.1996C201.17 24.1996 202.935 24.7341 204.284 25.803C205.672 26.8337 206.584 28.3416 207.021 30.3266C207.735 28.4561 208.905 26.9673 210.531 25.8602C212.197 24.7531 214.12 24.1996 216.302 24.1996ZM254.929 44.5275C255.325 44.1076 255.821 43.8976 256.416 43.8976C256.773 43.8976 257.09 44.0121 257.368 44.2412C257.645 44.4702 257.784 44.7565 257.784 45.1001C257.784 45.7873 257.526 46.4362 257.011 47.047C254.393 50.1773 250.744 51.7425 246.064 51.7425C241.424 51.7425 237.913 50.54 235.534 48.135C233.193 45.6918 232.024 42.3325 232.024 38.0569C232.024 33.1706 233.214 29.4486 235.593 26.8909C237.973 24.295 241.424 22.9971 245.945 22.9971C249.554 22.9971 252.449 23.9897 254.631 25.9747C256.812 27.9598 257.903 30.8038 257.903 34.5067C257.903 36.3772 256.773 37.3125 254.512 37.3125H238.508C238.468 37.618 238.449 38.0378 238.449 38.5723C238.449 41.8553 239.123 44.4511 240.472 46.3599C241.82 48.2686 243.902 49.223 246.718 49.223C248.622 49.223 250.129 48.8412 251.24 48.0777C252.35 47.3142 253.203 46.5889 253.798 45.9018C254.393 45.1765 254.769 44.7184 254.929 44.5275ZM245.588 25.2876C243.684 25.2876 242.117 26.0701 240.888 27.6353C239.658 29.2005 238.925 31.6245 238.687 34.9075H249.812C250.526 34.9075 251.041 34.793 251.359 34.564C251.676 34.2968 251.835 33.8577 251.835 33.247C251.835 30.6893 251.2 28.7233 249.931 27.349C248.701 25.9747 247.254 25.2876 245.588 25.2876ZM277.44 22.9971C279.384 22.9971 281.188 23.3216 282.854 23.9706V12.9191C282.854 11.2394 283.151 10.0369 283.746 9.3116C284.341 8.58631 285.313 8.22363 286.661 8.22363C287.574 8.22363 288.189 8.45268 288.506 8.91077C288.862 9.33071 289.041 9.99874 289.041 10.9149V49.0512C289.041 49.9674 288.883 50.6545 288.565 51.1126C288.248 51.5325 287.633 51.7425 286.721 51.7425C284.302 51.7425 283.092 49.7574 283.092 45.7873L282.913 45.73C281.763 47.5624 280.455 49.0321 278.987 50.1391C277.519 51.208 275.675 51.7425 273.454 51.7425C270.559 51.7425 268.14 50.7118 266.196 48.6503C264.252 46.5508 263.28 43.2105 263.28 38.6296C263.28 33.2851 264.51 29.3532 266.969 26.8337C269.428 24.276 272.918 22.9971 277.44 22.9971ZM269.706 38.1715C269.706 41.6072 270.261 44.0885 271.372 45.6155C272.522 47.1424 274.009 47.9059 275.834 47.9059C276.904 47.9059 277.995 47.5433 279.106 46.818C280.217 46.0545 281.128 45.1192 281.842 44.0121C282.556 42.8669 282.913 41.7408 282.913 40.6337V28.666C282.913 27.8262 282.418 27.0627 281.426 26.3756C280.435 25.6503 279.106 25.2876 277.44 25.2876C274.902 25.2876 272.978 26.2419 271.669 28.1507C270.36 30.0212 269.706 33.3615 269.706 38.1715Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30.0391 46.4245C29.121 48.6445 22.8039 55.746 21.1259 58.6085C16.2847 58.7968 12.2787 58.5871 8.89507 56.3995C1.30226 51.4903 3.23659 42.6009 3.23659 33.6428C3.23659 28.8437 3.23738 24.0449 3.23629 19.2461C3.23521 13.781 3.25472 11.4888 6.08546 7.86016C7.91982 5.50878 11.5879 3.34402 16.2739 3.19458C25.9394 2.88641 36.1419 3.20714 45.8725 3.1881C51.4113 3.17741 54.0182 3.68041 57.4125 6.26912C59.9501 8.20463 61.8213 11.768 61.8524 16.4276C61.9158 25.9105 61.8524 35.424 61.8481 44.9101C61.8438 54.1497 56.1213 58.6594 46.5237 58.6489C41.1581 58.6432 42.6064 57.5742 38.1385 64.7001C36.3229 67.5956 34.0529 70.803 32.5337 73.6778C31.5481 73.0293 29.5371 70.2179 28.6079 69.0396C27.6862 67.8716 25.5946 64.1351 23.8892 65.6398C22.0671 67.0299 24.551 69.0458 27.022 72.1227C33.9567 80.7575 31.4088 81.3212 42.1835 64.1999C44.1758 61.034 43.2159 61.6749 47.8333 61.688C57.1922 61.7142 64.4919 55.6693 65.0532 47.1092L65.0841 15.7932C64.9429 6.92225 57.9711 0.295559 48.8151 0.124809C38.2683 -0.0720885 27.1547 -0.00999724 16.5943 0.131846C7.3479 0.255959 0.21998 6.65684 0 15.4803L0.0116672 46.8005C0.742581 62.8705 21.5303 63.2348 23.5411 60.6596L33.8088 47.0644C34.8391 46.2193 36.6016 46.4774 38.7497 43.998L47.8382 29.2685C50.4408 24.9267 49.2001 20.475 45.481 18.3655C44.3581 17.7288 43.702 17.838 42.6817 17.3366C41.6465 16.8282 41.5601 15.9525 39.7149 16.0683C37.2532 16.2229 36.2784 19.0385 37.9879 20.579C40.4673 22.8131 41.5463 19.655 43.6142 20.4521C45.1944 21.0612 46.7551 23.1284 46.4614 25.4527C46.2642 27.0125 39.4074 37.7136 37.7197 40.508C36.7211 42.1617 35.696 43.7411 33.3849 44.1174C28.8346 44.8579 26.809 39.6176 25.0763 36.7645L19.0753 26.8957C17.9628 24.6271 18.9044 22.4306 20.2871 21.2212C23.4191 18.4823 22.896 22.2948 26.2648 21.0896C29.6414 19.8815 27.2206 14.0924 23.3352 16.6409C21.0939 18.111 22.8624 17.0657 20.486 17.9708C17.1627 19.2364 14.2686 23.5531 16.557 28.0447C18.1637 31.1983 20.6076 34.8355 22.5376 37.9449C24.6387 41.3302 26.1737 45.2702 30.0391 46.4245Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M207.125 78H203.981V67.1626H203.801L199.68 77.0679H197.422L193.29 67.1626H193.11V78H189.965V61.7944H193.963L198.444 72.688H198.646L203.139 61.7944H207.125V78ZM215.2 75.7314C216.716 75.7314 217.862 74.7656 217.862 73.5078V72.5981L215.357 72.7554C213.954 72.8564 213.269 73.3618 213.269 74.249C213.269 75.1699 214.066 75.7314 215.2 75.7314ZM214.122 78.1909C211.741 78.1909 210.068 76.731 210.068 74.4624C210.068 72.2163 211.786 70.9136 214.863 70.7339L217.862 70.5542V69.5435C217.862 68.5103 217.121 67.9263 215.773 67.9263C214.594 67.9263 213.808 68.3306 213.538 69.0718H210.528C210.742 66.7808 212.842 65.3433 215.953 65.3433C219.232 65.3433 221.085 66.8931 221.085 69.5435V78H217.918V76.3828H217.716C217.076 77.5171 215.728 78.1909 214.122 78.1909ZM224.297 78V65.6128H227.464V67.6006H227.666C228.239 66.208 229.497 65.3433 231.327 65.3433C234.079 65.3433 235.561 67.0278 235.561 69.9927V78H232.293V70.7676C232.293 69.0605 231.563 68.1621 230.013 68.1621C228.497 68.1621 227.565 69.229 227.565 70.8574V78H224.297ZM243.209 75.7314C244.725 75.7314 245.871 74.7656 245.871 73.5078V72.5981L243.366 72.7554C241.962 72.8564 241.277 73.3618 241.277 74.249C241.277 75.1699 242.075 75.7314 243.209 75.7314ZM242.131 78.1909C239.75 78.1909 238.077 76.731 238.077 74.4624C238.077 72.2163 239.795 70.9136 242.872 70.7339L245.871 70.5542V69.5435C245.871 68.5103 245.129 67.9263 243.782 67.9263C242.603 67.9263 241.816 68.3306 241.547 69.0718H238.537C238.75 66.7808 240.851 65.3433 243.961 65.3433C247.241 65.3433 249.094 66.8931 249.094 69.5435V78H245.927V76.3828H245.725C245.084 77.5171 243.737 78.1909 242.131 78.1909ZM257.809 75.2373C259.583 75.2373 260.639 73.8784 260.639 71.6997C260.639 69.521 259.572 68.1509 257.809 68.1509C256.045 68.1509 255.023 69.521 255.023 71.6885C255.023 73.8784 256.034 75.2373 257.809 75.2373ZM257.764 82.6943C254.473 82.6943 252.294 81.2456 252.092 79.0669H255.327C255.495 79.8306 256.416 80.3135 257.831 80.3135C259.583 80.3135 260.605 79.5049 260.605 78.1123V75.8213H260.403C259.718 77.124 258.415 77.8203 256.674 77.8203C253.586 77.8203 251.666 75.4282 251.666 71.6997C251.666 67.8589 253.597 65.4106 256.742 65.4106C258.415 65.4106 259.841 66.2417 260.504 67.6006H260.706V65.6128H263.873V77.9551C263.873 80.8638 261.503 82.6943 257.764 82.6943ZM272.509 67.8477C270.993 67.8477 269.926 68.9033 269.814 70.5093H275.092C275.025 68.8696 274.037 67.8477 272.509 67.8477ZM275.16 74.4736H278.203C277.709 76.8096 275.575 78.2695 272.543 78.2695C268.77 78.2695 266.546 75.8887 266.546 71.8682C266.546 67.8364 268.814 65.3433 272.498 65.3433C276.148 65.3433 278.304 67.668 278.304 71.5986V72.5981H269.803V72.7666C269.848 74.6084 270.926 75.7539 272.633 75.7539C273.924 75.7539 274.812 75.2935 275.16 74.4736ZM280.988 78V65.6128H284.155V67.5894H284.357C284.683 66.354 285.963 65.4106 287.536 65.4106C287.985 65.4106 288.535 65.4668 288.816 65.5679V68.5439C288.558 68.4429 287.794 68.3418 287.266 68.3418C285.48 68.3418 284.256 69.3975 284.256 71.1382V78H280.988Z",
              fill: "#E26D6D"
            }
          ),
          /* @__PURE__ */ ne("defs", { children: /* @__PURE__ */ Cn(
            "linearGradient",
            {
              id: "paint0_linear_3256_21916",
              x1: "122.929",
              y1: "95.896",
              x2: "42.4876",
              y2: "32.2193",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ ne("stop", { stopColor: "#013361" }),
                /* @__PURE__ */ ne("stop", { offset: "1", stopColor: "#0ABE93" })
              ]
            }
          ) })
        ]
      }
    ),
    "nextmed-institutions": /* @__PURE__ */ Cn(
      "svg",
      {
        width: u,
        viewBox: "0 0 553 155",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M98.6824 12.3353H42.4882C25.0782 12.3353 10.9646 26.4489 10.9646 43.8589V95.9414C10.9646 113.351 25.0782 127.465 42.4882 127.465H98.6824C116.092 127.465 130.206 113.351 130.206 95.9414V43.8589C130.206 26.4489 116.092 12.3353 98.6824 12.3353Z",
              fill: "url(#paint0_linear_3225_17925)"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M176.772 48.0762C182.308 48.0762 186.594 49.6689 189.627 52.8541C192.737 56.0394 194.291 60.5139 194.291 66.2777V102.794H184.28V67.529C184.28 63.8888 183.37 61.0448 181.55 58.9971C179.73 56.9495 177.227 55.9256 174.042 55.9256C170.477 55.9256 167.405 57.177 164.827 59.6797C162.249 62.1824 160.352 65.5572 159.139 69.8042V102.794H149.129V61.2723C149.129 59.6797 148.826 58.3904 148.218 57.4045C147.611 56.3427 146.512 55.2051 144.919 53.9917L151.517 48.0762C153.945 49.4414 155.727 50.8823 156.864 52.3991C158.002 53.9159 158.723 55.8877 159.026 58.3146C160.77 55.1293 163.159 52.6266 166.192 50.8065C169.225 48.9863 172.752 48.0762 176.772 48.0762ZM232.381 96.3101C235.489 96.3101 238.144 95.855 240.344 94.945C242.619 94.0349 244.818 92.556 246.942 90.5084L253.085 96.0826C250.81 98.8128 247.966 100.822 244.553 102.112C241.216 103.401 237.082 104.046 232.153 104.046C224.341 104.046 218.426 102.377 214.407 99.0403C210.462 95.6275 208.492 90.5842 208.492 83.9103V66.9602C208.492 61.1206 210.501 56.5324 214.521 53.1954C218.616 49.7826 224.19 48.0762 231.243 48.0762C238.524 48.0762 244.135 49.8584 248.08 53.4229C252.098 56.9874 254.109 62.1066 254.109 68.7804C254.109 73.255 253.313 76.3265 251.72 77.9949C250.203 79.6633 247.245 80.4976 242.847 80.4976H218.502V84.0241C218.502 88.1194 219.64 91.1909 221.915 93.2386C224.19 95.2862 227.678 96.3101 232.381 96.3101ZM231.243 55.8119C227.223 55.8119 224.077 56.8737 221.801 58.9971C219.602 61.1206 218.502 64.0025 218.502 67.6428V73.3308H237.955C240.306 73.3308 241.898 72.9515 242.733 72.1932C243.643 71.4348 244.098 69.9938 244.098 67.8703C244.098 64.0783 242.961 61.1206 240.685 58.9971C238.41 56.8737 235.262 55.8119 231.243 55.8119ZM295.239 102.794L281.588 82.659L268.392 102.794H258.154L276.355 74.9234L259.064 49.3276H269.188L282.27 68.5529L294.898 49.3276H305.136L287.617 76.4023L305.477 102.794H295.239ZM324.877 57.177V85.8443C324.877 89.1053 325.521 91.5322 326.811 93.1248C328.1 94.6417 330.148 95.4 332.954 95.4H340.234V103.249H332.954C326.508 103.249 321.881 101.884 319.075 99.1541C316.269 96.4238 314.866 91.9872 314.866 85.8443V38.293C314.866 36.7003 314.563 35.411 313.956 34.4252C313.349 33.3634 312.249 32.2258 310.657 31.0124L317.369 25.0969C320.174 26.6138 322.108 28.358 323.17 30.3298C324.308 32.2258 324.877 34.8802 324.877 38.293V49.3276H340.234V57.177H324.877Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M413.599 48.0762C418.832 48.0762 422.851 49.6689 425.658 52.8541C428.539 55.9636 429.98 60.438 429.98 66.2777V102.794H419.97V67.529C419.97 63.8129 419.173 60.969 417.581 58.9971C415.988 56.9494 413.75 55.9256 410.869 55.9256C407.456 55.9256 404.498 57.2528 401.996 59.9072C399.568 62.4857 397.862 65.9744 396.877 70.373V102.794H386.866V67.529C386.866 63.8129 386.069 60.969 384.477 58.9971C382.884 56.9494 380.646 55.9256 377.765 55.9256C374.352 55.9256 371.394 57.2907 368.892 60.0209C366.389 62.6754 364.683 66.126 363.773 70.373V102.794H353.762V61.2723C353.762 59.6797 353.458 58.3903 352.852 57.4045C352.245 56.3427 351.145 55.2051 349.553 53.9917L356.151 48.0762C360.701 50.3514 363.165 53.8022 363.545 58.4283C365.365 55.0913 367.716 52.5508 370.598 50.8065C373.479 48.9863 376.778 48.0762 380.495 48.0762C384.666 48.0762 388.04 49.138 390.62 51.2615C393.273 53.3092 395.018 56.3049 395.853 60.2485C397.218 56.5324 399.455 53.5746 402.564 51.3753C405.75 49.1759 409.427 48.0762 413.599 48.0762ZM487.459 88.4607C488.217 87.6264 489.165 87.2093 490.303 87.2093C490.985 87.2093 491.591 87.4369 492.123 87.8919C492.653 88.3469 492.919 88.9157 492.919 89.5983C492.919 90.9634 492.426 92.2527 491.44 93.4661C486.435 99.6849 479.457 102.794 470.509 102.794C461.636 102.794 454.924 100.405 450.373 95.6275C445.898 90.7739 443.662 84.0999 443.662 75.6059C443.662 65.8984 445.937 58.5041 450.487 53.4229C455.038 48.2658 461.636 45.6873 470.281 45.6873C477.182 45.6873 482.718 47.6592 486.89 51.6028C491.061 55.5464 493.147 61.1965 493.147 68.5529C493.147 72.2689 490.985 74.1271 486.663 74.1271H456.061C455.985 74.7338 455.948 75.568 455.948 76.6298C455.948 83.152 457.236 88.309 459.815 92.101C462.393 95.893 466.375 97.7889 471.76 97.7889C475.4 97.7889 478.281 97.0306 480.406 95.5138C482.529 93.9969 484.16 92.556 485.297 91.1909C486.435 89.75 487.155 88.8399 487.459 88.4607ZM469.599 50.2377C465.958 50.2377 462.962 51.7923 460.612 54.9018C458.26 58.0112 456.858 62.827 456.403 69.3492H477.676C479.041 69.3492 480.026 69.1217 480.633 68.6666C481.239 68.1358 481.543 67.2636 481.543 66.0502C481.543 60.969 480.329 57.0632 477.903 54.333C475.551 51.6028 472.784 50.2377 469.599 50.2377ZM530.504 45.6873C534.221 45.6873 537.67 46.3319 540.856 47.6212V25.6657C540.856 22.3287 541.424 19.9398 542.562 18.4989C543.7 17.058 545.558 16.3375 548.136 16.3375C549.881 16.3375 551.057 16.7925 551.663 17.7026C552.345 18.5369 552.687 19.864 552.687 21.6841V97.4477C552.687 99.2678 552.384 100.633 551.777 101.543C551.171 102.377 549.995 102.794 548.25 102.794C543.624 102.794 541.311 98.8507 541.311 90.9634L540.969 90.8496C538.771 94.4899 536.268 97.4097 533.461 99.6091C530.656 101.733 527.129 102.794 522.882 102.794C517.346 102.794 512.72 100.747 509.003 96.6513C505.287 92.4802 503.429 85.8442 503.429 76.7435C503.429 66.126 505.781 58.3146 510.482 53.3092C515.185 48.228 521.858 45.6873 530.504 45.6873ZM515.715 75.8335C515.715 82.659 516.777 87.5886 518.9 90.6221C521.1 93.6557 523.944 95.1725 527.432 95.1725C529.48 95.1725 531.566 94.452 533.689 93.0111C535.813 91.4942 537.557 89.6363 538.922 87.4369C540.287 85.1617 540.969 82.9245 540.969 80.7251V56.9494C540.969 55.281 540.022 53.7642 538.125 52.3991C536.23 50.9582 533.689 50.2377 530.504 50.2377C525.65 50.2377 521.972 52.1336 519.469 55.9256C516.966 59.6417 515.715 66.2777 515.715 75.8335Z",
              fill: "#0077B6"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M57.439 92.2294C55.6834 96.6398 43.6042 110.748 40.3957 116.435C31.1386 116.809 23.4786 116.392 17.0086 112.046C2.4901 102.294 6.18881 84.6332 6.18881 66.8366C6.18881 57.3025 6.19031 47.7689 6.18824 38.2352C6.18618 27.3781 6.22347 22.8242 11.6362 15.6154C15.1438 10.944 22.1577 6.6434 31.1179 6.34653C49.5998 5.73429 69.1083 6.37148 87.7145 6.33365C98.3055 6.3124 103.29 7.3117 109.781 12.4546C114.633 16.2998 118.211 23.379 118.27 32.636C118.392 51.4753 118.27 70.3752 118.262 89.2208C118.254 107.577 107.312 116.536 88.9598 116.515C78.7 116.504 81.4693 114.38 72.9261 128.537C69.4544 134.289 65.1139 140.661 62.2089 146.372C60.3244 145.084 56.479 139.499 54.7022 137.158C52.9399 134.837 48.9404 127.414 45.6795 130.403C42.1953 133.165 46.9449 137.17 51.6698 143.283C64.93 160.437 60.0581 161.557 80.6606 127.543C84.4702 121.253 82.6348 122.527 91.4639 122.553C109.359 122.605 123.317 110.596 124.391 93.5897L124.45 31.3757C124.18 13.7521 110.849 0.587173 93.3413 0.247952C73.1743 -0.143215 51.9236 -0.0198611 31.7307 0.261932C14.0502 0.508502 0.420632 13.2248 0 30.754L0.0223092 92.9764C1.41992 124.902 41.169 125.626 45.0138 120.51L64.6472 93.5006C66.6173 91.8218 69.9874 92.3345 74.0948 87.4088L91.4732 58.1464C96.4498 49.5208 94.0774 40.6767 86.966 36.486C84.8189 35.2209 83.5642 35.438 81.6133 34.4419C79.6339 33.4317 79.4688 31.6922 75.9405 31.9222C71.2333 32.2293 69.3694 37.823 72.6382 40.8834C77.379 45.3217 79.4423 39.0476 83.3963 40.6312C86.4179 41.8413 89.4023 45.9481 88.8407 50.5656C88.4637 53.6645 75.3525 74.9239 72.1253 80.4755C70.2159 83.7608 68.2557 86.8985 63.8365 87.646C55.1359 89.1172 51.2626 78.7065 47.9493 73.0384L36.4747 53.4324C34.3473 48.9256 36.1478 44.5619 38.7918 42.1592C44.7806 36.718 43.7804 44.292 50.2219 41.8977C56.6785 39.4977 52.0496 27.9967 44.6201 33.0598C40.3344 35.9804 43.7161 33.9036 39.172 35.7017C32.8176 38.2161 27.2835 46.7918 31.6593 55.7152C34.7316 61.9802 39.4046 69.2061 43.0949 75.3835C47.1127 82.1088 50.0478 89.9361 57.439 92.2294Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne("defs", { children: /* @__PURE__ */ Cn(
            "linearGradient",
            {
              id: "paint0_linear_3225_17925",
              x1: "235.056",
              y1: "190.512",
              x2: "60.5949",
              y2: "50.495",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ ne("stop", { offset: "0.459965", stopColor: "#013361" }),
                /* @__PURE__ */ ne("stop", { offset: "1", stopColor: "#8CCCEE" })
              ]
            }
          ) })
        ]
      }
    ),
    "nextmed-app": /* @__PURE__ */ Cn(
      "svg",
      {
        width: u,
        viewBox: "0 0 301 85",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M53.7449 6.71875H23.1408C13.6591 6.71875 5.97266 14.4052 5.97266 23.8869V52.2516C5.97266 61.7333 13.6591 69.4198 23.1408 69.4198H53.7449C63.2266 69.4198 70.913 61.7333 70.913 52.2516V23.8869C70.913 14.4052 63.2266 6.71875 53.7449 6.71875Z",
              fill: "url(#paint0_linear_3810_372)"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M96.2731 26.1828C99.2879 26.1828 101.622 27.0502 103.274 28.7849C104.968 30.5196 105.814 32.9565 105.814 36.0955V55.9829H100.362V36.777C100.362 34.7945 99.8664 33.2456 98.8752 32.1304C97.8839 31.0152 96.5209 30.4577 94.7862 30.4577C92.8447 30.4577 91.1719 31.1392 89.7678 32.5022C88.3638 33.8652 87.3307 35.7031 86.6701 38.0161V55.9829H81.2181V33.3695C81.2181 32.5022 81.0531 31.8 80.7225 31.2631C80.3918 30.6848 79.7931 30.0653 78.9258 29.4044L82.5191 26.1828C83.8411 26.9262 84.8115 27.711 85.431 28.5371C86.0506 29.3631 86.4432 30.437 86.6081 31.7587C87.5584 30.024 88.8594 28.661 90.5113 27.6697C92.1632 26.6784 94.0838 26.1828 96.2731 26.1828ZM126.558 52.4515C128.251 52.4515 129.697 52.2037 130.895 51.7081C132.134 51.2124 133.332 50.407 134.489 49.2918L137.834 52.3276C136.595 53.8145 135.046 54.909 133.188 55.6112C131.37 56.3134 129.119 56.6644 126.434 56.6644C122.18 56.6644 118.958 55.7558 116.77 53.9384C114.621 52.0798 113.548 49.3331 113.548 45.6985V36.4672C113.548 33.2869 114.642 30.7881 116.832 28.9707C119.062 27.1121 122.098 26.1828 125.939 26.1828C129.904 26.1828 132.96 27.1534 135.108 29.0947C137.297 31.0359 138.392 33.8239 138.392 37.4585C138.392 39.8954 137.958 41.5682 137.091 42.4768C136.264 43.3855 134.654 43.8398 132.258 43.8398H119V45.7604C119 47.9908 119.619 49.6636 120.859 50.7788C122.098 51.8939 123.997 52.4515 126.558 52.4515ZM125.939 30.3957C123.75 30.3957 122.036 30.974 120.797 32.1304C119.599 33.2869 119 34.8564 119 36.839V39.9367H129.594C130.874 39.9367 131.742 39.7302 132.196 39.3172C132.692 38.9042 132.94 38.1193 132.94 36.9629C132.94 34.8977 132.32 33.2869 131.081 32.1304C129.842 30.974 128.127 30.3957 125.939 30.3957ZM160.792 55.9829L153.357 45.017L146.17 55.9829H140.594L150.507 40.8041L141.09 26.8643H146.604L153.729 37.3346L160.606 26.8643H166.182L156.641 41.6095L166.368 55.9829H160.792ZM176.933 31.1392V46.7517C176.933 48.5277 177.284 49.8494 177.986 50.7168C178.688 51.5429 179.803 51.9559 181.331 51.9559H185.297V56.2308H181.331C177.821 56.2308 175.301 55.4873 173.773 54.0004C172.245 52.5135 171.481 50.0973 171.481 46.7517V20.8547C171.481 19.9873 171.316 19.2852 170.985 18.7482C170.654 18.17 170.056 17.5504 169.188 16.8896L172.844 13.668C174.372 14.4941 175.425 15.444 176.003 16.5179C176.623 17.5504 176.933 18.9961 176.933 20.8547V26.8643H185.297V31.1392H176.933Z",
              fill: "#013361"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M225.252 26.1838C228.101 26.1838 230.29 27.0511 231.819 28.7859C233.388 30.4793 234.173 32.9161 234.173 36.0965V55.9839H228.721V36.778C228.721 34.7542 228.287 33.2053 227.42 32.1314C226.553 31.0162 225.334 30.4586 223.765 30.4586C221.906 30.4586 220.295 31.1814 218.932 32.627C217.61 34.0313 216.681 35.9313 216.144 38.3269V55.9839H210.692V36.778C210.692 34.7542 210.259 33.2053 209.391 32.1314C208.524 31.0162 207.305 30.4586 205.736 30.4586C203.877 30.4586 202.266 31.2021 200.903 32.689C199.54 34.1346 198.611 36.0139 198.115 38.3269V55.9839H192.663V33.3705C192.663 32.5031 192.498 31.801 192.168 31.264C191.837 30.6858 191.238 30.0662 190.371 29.4054L193.964 26.1838C196.443 27.4229 197.785 29.3022 197.992 31.8216C198.983 30.0043 200.263 28.6207 201.833 27.6707C203.402 26.6794 205.198 26.1838 207.223 26.1838C209.494 26.1838 211.332 26.762 212.737 27.9185C214.182 29.0337 215.132 30.6652 215.587 32.8129C216.33 30.7891 217.548 29.1783 219.242 27.9804C220.977 26.7826 222.979 26.1838 225.252 26.1838ZM265.476 48.1776C265.889 47.7233 266.406 47.4961 267.025 47.4961C267.397 47.4961 267.727 47.62 268.017 47.8679C268.305 48.1157 268.45 48.4255 268.45 48.7972C268.45 49.5406 268.182 50.2428 267.645 50.9036C264.919 54.2905 261.119 55.9839 256.245 55.9839C251.413 55.9839 247.757 54.6829 245.279 52.0808C242.842 49.4374 241.624 45.8027 241.624 41.1768C241.624 35.89 242.863 31.8629 245.341 29.0956C247.819 26.287 251.413 24.8827 256.121 24.8827C259.88 24.8827 262.895 25.9566 265.167 28.1044C267.438 30.2521 268.574 33.3292 268.574 37.3356C268.574 39.3594 267.397 40.3714 265.043 40.3714H248.377C248.335 40.7018 248.315 41.1561 248.315 41.7344C248.315 45.2865 249.017 48.095 250.421 50.1602C251.826 52.2254 253.994 53.2579 256.927 53.2579C258.909 53.2579 260.478 52.8449 261.635 52.0188C262.792 51.1927 263.68 50.408 264.299 49.6645C264.919 48.8798 265.311 48.3842 265.476 48.1776ZM255.75 27.3609C253.767 27.3609 252.135 28.2076 250.855 29.901C249.574 31.5945 248.811 34.2172 248.563 37.7693H260.148C260.892 37.7693 261.428 37.6454 261.759 37.3975C262.089 37.1084 262.255 36.6334 262.255 35.9726C262.255 33.2053 261.593 31.0782 260.272 29.5913C258.991 28.1044 257.484 27.3609 255.75 27.3609ZM288.919 24.8827C290.944 24.8827 292.822 25.2338 294.557 25.9359V13.9787C294.557 12.1614 294.867 10.8603 295.486 10.0756C296.106 9.29084 297.118 8.89844 298.522 8.89844C299.472 8.89844 300.113 9.14626 300.443 9.64189C300.814 10.0963 301 10.819 301 11.8103V53.072C301 54.0633 300.835 54.8068 300.505 55.3024C300.175 55.7568 299.534 55.9839 298.584 55.9839C296.065 55.9839 294.805 53.8362 294.805 49.5406L294.619 49.4787C293.422 51.4612 292.059 53.0514 290.53 54.2492C289.002 55.4056 287.081 55.9839 284.768 55.9839C281.753 55.9839 279.234 54.8687 277.21 52.6384C275.186 50.3667 274.174 46.7527 274.174 41.7963C274.174 36.0139 275.455 31.7597 278.015 29.0337C280.576 26.2664 284.211 24.8827 288.919 24.8827ZM280.865 41.3007C280.865 45.018 281.444 47.7027 282.6 49.3548C283.798 51.0069 285.347 51.833 287.246 51.833C288.362 51.833 289.498 51.4406 290.654 50.6558C291.811 49.8297 292.76 48.8179 293.504 47.62C294.247 46.381 294.619 45.1625 294.619 43.9647V31.0162C294.619 30.1076 294.103 29.2815 293.07 28.538C292.038 27.7533 290.654 27.3609 288.919 27.3609C286.276 27.3609 284.273 28.3935 282.91 30.4586C281.547 32.4825 280.865 36.0965 280.865 41.3007Z",
              fill: "#0ABE93"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.282 50.2293C30.3259 52.6312 23.7474 60.3147 22 63.4119C16.9585 63.6156 12.7868 63.3887 9.2631 61.0217C1.35614 55.7103 3.3705 46.0923 3.3705 36.4C3.3705 31.2076 3.37132 26.0156 3.37019 20.8234C3.36907 14.9105 3.38938 12.4303 6.33724 8.50435C8.2475 5.96026 12.0673 3.61808 16.9472 3.4564C27.0126 3.12297 37.6372 3.46998 47.7704 3.44938C53.5384 3.43781 56.2532 3.98204 59.7879 6.78291C62.4305 8.87705 64.3791 12.7325 64.4115 17.774C64.4775 28.0341 64.4115 38.3272 64.407 48.5908C64.4025 58.5876 58.4433 63.4669 48.4486 63.4556C42.861 63.4494 44.3692 62.2927 39.7165 70.0027C37.8257 73.1355 35.4618 76.6057 33.8797 79.7161C32.8534 79.0145 30.7592 75.9727 29.7915 74.6978C28.8317 73.4341 26.6535 69.3914 24.8776 71.0193C22.9801 72.5234 25.5668 74.7045 28.14 78.0337C35.3616 87.3761 32.7084 87.9859 43.9288 69.4615C46.0035 66.0361 45.0039 66.7296 49.8124 66.7437C59.5585 66.7721 67.1602 60.2318 67.7447 50.9701L67.7769 17.0876C67.6299 7.48957 60.3696 0.319782 50.8348 0.135038C39.8516 -0.0779966 28.2782 -0.0108166 17.2809 0.142652C7.65191 0.276936 0.229081 7.20241 0 16.749L0.0121499 50.6361C0.773305 68.0231 22.4211 68.4173 24.515 65.631L35.2077 50.9216C36.2806 50.0073 38.116 50.2865 40.3529 47.6039L49.8174 31.6672C52.5278 26.9697 51.2357 22.153 47.3628 19.8707C46.1934 19.1817 45.5101 19.3 44.4476 18.7575C43.3696 18.2073 43.2797 17.26 41.3581 17.3852C38.7945 17.5525 37.7794 20.5989 39.5596 22.2656C42.1416 24.6828 43.2653 21.2658 45.4187 22.1282C47.0643 22.7873 48.6896 25.0239 48.3838 27.5387C48.1784 29.2264 41.0379 40.8045 39.2803 43.8279C38.2404 45.6172 37.1729 47.326 34.7661 47.7331C30.0277 48.5343 27.9182 42.8645 26.1138 39.7776L19.8646 29.0999C18.7059 26.6455 19.6865 24.269 21.1265 22.9604C24.3881 19.9971 23.8433 24.122 27.3514 22.818C30.8678 21.5109 28.3468 15.2473 24.3007 18.0048C21.9666 19.5953 23.8083 18.4643 21.3336 19.4436C17.8728 20.8129 14.8589 25.4834 17.242 30.3432C18.9153 33.7552 21.4602 37.6905 23.47 41.0548C25.6581 44.7175 27.2566 48.9803 31.282 50.2293Z",
              fill: "#013361"
            }
          ),
          /* @__PURE__ */ ne("defs", { children: /* @__PURE__ */ Cn(
            "linearGradient",
            {
              id: "paint0_linear_3810_372",
              x1: "128.016",
              y1: "103.756",
              x2: "41.8018",
              y2: "38.0693",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ ne("stop", { stopColor: "#013361" }),
                /* @__PURE__ */ ne("stop", { offset: "1", stopColor: "#0ABE93" })
              ]
            }
          ) })
        ]
      }
    )
  }[d] : {
    "nextmed-admin": /* @__PURE__ */ Cn(
      "svg",
      {
        width: u,
        viewBox: "0 0 290 83",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M51.6085 6.20911H22.2204C13.1154 6.20911 5.73438 13.3133 5.73438 22.0768V48.2929C5.73438 57.0564 13.1154 64.1606 22.2204 64.1606H51.6085C60.7135 64.1606 68.0946 57.0564 68.0946 48.2929V22.0768C68.0946 13.3133 60.7135 6.20911 51.6085 6.20911Z",
              fill: "url(#paint0_linear_3256_21916)"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M92.4471 24.1995C95.3422 24.1995 97.5836 25.0012 99.1698 26.6045C100.796 28.2078 101.609 30.4602 101.609 33.3614V51.7424H96.3737V33.9913C96.3737 32.1589 95.8977 30.7274 94.9458 29.6967C93.9939 28.6659 92.6851 28.1506 91.0193 28.1506C89.1549 28.1506 87.5486 28.7805 86.2004 30.0402C84.8521 31.3 83.86 32.9987 83.2257 35.1365V51.7424H77.9903V30.8419C77.9903 30.0402 77.8319 29.3912 77.5144 28.895C77.1968 28.3605 76.622 27.7879 75.7891 27.1771L79.2397 24.1995C80.5091 24.8867 81.4409 25.612 82.0358 26.3755C82.6308 27.139 83.0078 28.1315 83.1662 29.3531C84.0787 27.7498 85.328 26.49 86.9143 25.5738C88.5005 24.6576 90.3448 24.1995 92.4471 24.1995ZM121.529 48.4785C123.155 48.4785 124.543 48.2494 125.694 47.7913C126.884 47.3332 128.033 46.5888 129.144 45.5581L132.357 48.3639C131.167 49.7382 129.68 50.7498 127.895 51.3988C126.15 52.0478 123.988 52.3723 121.41 52.3723C117.325 52.3723 114.231 51.5324 112.129 49.8527C110.066 48.1349 109.036 45.5963 109.036 42.2369V33.705C109.036 30.7655 110.086 28.456 112.189 26.7763C114.331 25.0585 117.246 24.1995 120.934 24.1995C124.742 24.1995 127.676 25.0966 129.739 26.8908C131.841 28.6851 132.892 31.2618 132.892 34.6212C132.892 36.8735 132.476 38.4195 131.643 39.2593C130.85 40.0992 129.303 40.5191 127.003 40.5191H114.271V42.2942C114.271 44.3556 114.866 45.9017 116.056 46.9324C117.246 47.9631 119.07 48.4785 121.529 48.4785ZM120.934 28.0933C118.832 28.0933 117.186 28.6278 115.996 29.6967C114.846 30.7655 114.271 32.2162 114.271 34.0485V36.9116H124.444C125.674 36.9116 126.507 36.7207 126.943 36.339C127.419 35.9573 127.657 35.2319 127.657 34.1631C127.657 32.2543 127.062 30.7655 125.872 29.6967C124.682 28.6278 123.036 28.0933 120.934 28.0933ZM154.402 51.7424L147.263 41.6071L140.362 51.7424H135.008L144.526 37.7133L135.484 24.8294H140.778L147.62 34.5066L154.224 24.8294H159.578L150.416 38.4577L159.757 51.7424H154.402ZM169.902 28.7805V43.2104C169.902 44.8519 170.239 46.0735 170.913 46.8751C171.588 47.6386 172.659 48.0204 174.126 48.0204H177.934V51.9714H174.126C170.755 51.9714 168.335 51.2843 166.868 49.91C165.401 48.5357 164.667 46.3025 164.667 43.2104V19.275C164.667 18.4734 164.508 17.8244 164.191 17.3281C163.873 16.7937 163.298 16.2211 162.465 15.6103L165.976 12.6327C167.443 13.3962 168.454 14.2742 169.01 15.2667C169.605 16.2211 169.902 17.5572 169.902 19.275V24.8294H177.934V28.7805H169.902Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M216.302 24.1996C219.038 24.1996 221.14 25.0013 222.608 26.6046C224.115 28.1698 224.869 30.422 224.869 33.3615V51.7425H219.633V33.9914C219.633 32.1208 219.217 30.6893 218.384 29.6967C217.551 28.666 216.381 28.1507 214.874 28.1507C213.089 28.1507 211.542 28.8187 210.233 30.1548C208.964 31.4527 208.072 33.2088 207.556 35.4229V51.7425H202.321V33.9914C202.321 32.1208 201.904 30.6893 201.072 29.6967C200.239 28.666 199.068 28.1507 197.561 28.1507C195.777 28.1507 194.23 28.8378 192.921 30.2121C191.612 31.5482 190.72 33.2851 190.244 35.4229V51.7425H185.008V30.842C185.008 30.0403 184.849 29.3913 184.532 28.8951C184.215 28.3606 183.64 27.788 182.807 27.1772L186.258 24.1996C188.637 25.3449 189.926 27.0818 190.125 29.4104C191.077 27.7307 192.306 26.4519 193.813 25.5739C195.32 24.6577 197.045 24.1996 198.989 24.1996C201.17 24.1996 202.935 24.7341 204.284 25.803C205.672 26.8337 206.584 28.3416 207.021 30.3266C207.735 28.4561 208.905 26.9673 210.531 25.8602C212.197 24.7531 214.12 24.1996 216.302 24.1996ZM254.929 44.5275C255.325 44.1076 255.821 43.8976 256.416 43.8976C256.773 43.8976 257.09 44.0121 257.368 44.2412C257.645 44.4702 257.784 44.7565 257.784 45.1001C257.784 45.7873 257.526 46.4362 257.011 47.047C254.393 50.1773 250.744 51.7425 246.064 51.7425C241.424 51.7425 237.913 50.54 235.534 48.135C233.193 45.6918 232.024 42.3325 232.024 38.0569C232.024 33.1706 233.214 29.4486 235.593 26.8909C237.973 24.295 241.424 22.9971 245.945 22.9971C249.554 22.9971 252.449 23.9897 254.631 25.9747C256.812 27.9598 257.903 30.8038 257.903 34.5067C257.903 36.3772 256.773 37.3125 254.512 37.3125H238.508C238.468 37.618 238.449 38.0378 238.449 38.5723C238.449 41.8553 239.123 44.4511 240.472 46.3599C241.82 48.2686 243.902 49.223 246.718 49.223C248.622 49.223 250.129 48.8412 251.24 48.0777C252.35 47.3142 253.203 46.5889 253.798 45.9018C254.393 45.1765 254.769 44.7184 254.929 44.5275ZM245.588 25.2876C243.684 25.2876 242.117 26.0701 240.888 27.6353C239.658 29.2005 238.925 31.6245 238.687 34.9075H249.812C250.526 34.9075 251.041 34.793 251.359 34.564C251.676 34.2968 251.835 33.8577 251.835 33.247C251.835 30.6893 251.2 28.7233 249.931 27.349C248.701 25.9747 247.254 25.2876 245.588 25.2876ZM277.44 22.9971C279.384 22.9971 281.188 23.3216 282.854 23.9706V12.9191C282.854 11.2394 283.151 10.0369 283.746 9.3116C284.341 8.58631 285.313 8.22363 286.661 8.22363C287.574 8.22363 288.189 8.45268 288.506 8.91077C288.862 9.33071 289.041 9.99874 289.041 10.9149V49.0512C289.041 49.9674 288.883 50.6545 288.565 51.1126C288.248 51.5325 287.633 51.7425 286.721 51.7425C284.302 51.7425 283.092 49.7574 283.092 45.7873L282.913 45.73C281.763 47.5624 280.455 49.0321 278.987 50.1391C277.519 51.208 275.675 51.7425 273.454 51.7425C270.559 51.7425 268.14 50.7118 266.196 48.6503C264.252 46.5508 263.28 43.2105 263.28 38.6296C263.28 33.2851 264.51 29.3532 266.969 26.8337C269.428 24.276 272.918 22.9971 277.44 22.9971ZM269.706 38.1715C269.706 41.6072 270.261 44.0885 271.372 45.6155C272.522 47.1424 274.009 47.9059 275.834 47.9059C276.904 47.9059 277.995 47.5433 279.106 46.818C280.217 46.0545 281.128 45.1192 281.842 44.0121C282.556 42.8669 282.913 41.7408 282.913 40.6337V28.666C282.913 27.8262 282.418 27.0627 281.426 26.3756C280.435 25.6503 279.106 25.2876 277.44 25.2876C274.902 25.2876 272.978 26.2419 271.669 28.1507C270.36 30.0212 269.706 33.3615 269.706 38.1715Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M30.0391 46.4245C29.121 48.6445 22.8039 55.746 21.1259 58.6085C16.2847 58.7968 12.2787 58.5871 8.89507 56.3995C1.30226 51.4903 3.23659 42.6009 3.23659 33.6428C3.23659 28.8437 3.23738 24.0449 3.23629 19.2461C3.23521 13.781 3.25472 11.4888 6.08546 7.86016C7.91982 5.50878 11.5879 3.34402 16.2739 3.19458C25.9394 2.88641 36.1419 3.20714 45.8725 3.1881C51.4113 3.17741 54.0182 3.68041 57.4125 6.26912C59.9501 8.20463 61.8213 11.768 61.8524 16.4276C61.9158 25.9105 61.8524 35.424 61.8481 44.9101C61.8438 54.1497 56.1213 58.6594 46.5237 58.6489C41.1581 58.6432 42.6064 57.5742 38.1385 64.7001C36.3229 67.5956 34.0529 70.803 32.5337 73.6778C31.5481 73.0293 29.5371 70.2179 28.6079 69.0396C27.6862 67.8716 25.5946 64.1351 23.8892 65.6398C22.0671 67.0299 24.551 69.0458 27.022 72.1227C33.9567 80.7575 31.4088 81.3212 42.1835 64.1999C44.1758 61.034 43.2159 61.6749 47.8333 61.688C57.1922 61.7142 64.4919 55.6693 65.0532 47.1092L65.0841 15.7932C64.9429 6.92225 57.9711 0.295559 48.8151 0.124809C38.2683 -0.0720885 27.1547 -0.00999724 16.5943 0.131846C7.3479 0.255959 0.21998 6.65684 0 15.4803L0.0116672 46.8005C0.742581 62.8705 21.5303 63.2348 23.5411 60.6596L33.8088 47.0644C34.8391 46.2193 36.6016 46.4774 38.7497 43.998L47.8382 29.2685C50.4408 24.9267 49.2001 20.475 45.481 18.3655C44.3581 17.7288 43.702 17.838 42.6817 17.3366C41.6465 16.8282 41.5601 15.9525 39.7149 16.0683C37.2532 16.2229 36.2784 19.0385 37.9879 20.579C40.4673 22.8131 41.5463 19.655 43.6142 20.4521C45.1944 21.0612 46.7551 23.1284 46.4614 25.4527C46.2642 27.0125 39.4074 37.7136 37.7197 40.508C36.7211 42.1617 35.696 43.7411 33.3849 44.1174C28.8346 44.8579 26.809 39.6176 25.0763 36.7645L19.0753 26.8957C17.9628 24.6271 18.9044 22.4306 20.2871 21.2212C23.4191 18.4823 22.896 22.2948 26.2648 21.0896C29.6414 19.8815 27.2206 14.0924 23.3352 16.6409C21.0939 18.111 22.8624 17.0657 20.486 17.9708C17.1627 19.2364 14.2686 23.5531 16.557 28.0447C18.1637 31.1983 20.6076 34.8355 22.5376 37.9449C24.6387 41.3302 26.1737 45.2702 30.0391 46.4245Z",
              fill: "#383838"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M207.125 78H203.981V67.1626H203.801L199.68 77.0679H197.422L193.29 67.1626H193.11V78H189.965V61.7944H193.963L198.444 72.688H198.646L203.139 61.7944H207.125V78ZM215.2 75.7314C216.716 75.7314 217.862 74.7656 217.862 73.5078V72.5981L215.357 72.7554C213.954 72.8564 213.269 73.3618 213.269 74.249C213.269 75.1699 214.066 75.7314 215.2 75.7314ZM214.122 78.1909C211.741 78.1909 210.068 76.731 210.068 74.4624C210.068 72.2163 211.786 70.9136 214.863 70.7339L217.862 70.5542V69.5435C217.862 68.5103 217.121 67.9263 215.773 67.9263C214.594 67.9263 213.808 68.3306 213.538 69.0718H210.528C210.742 66.7808 212.842 65.3433 215.953 65.3433C219.232 65.3433 221.085 66.8931 221.085 69.5435V78H217.918V76.3828H217.716C217.076 77.5171 215.728 78.1909 214.122 78.1909ZM224.297 78V65.6128H227.464V67.6006H227.666C228.239 66.208 229.497 65.3433 231.327 65.3433C234.079 65.3433 235.561 67.0278 235.561 69.9927V78H232.293V70.7676C232.293 69.0605 231.563 68.1621 230.013 68.1621C228.497 68.1621 227.565 69.229 227.565 70.8574V78H224.297ZM243.209 75.7314C244.725 75.7314 245.871 74.7656 245.871 73.5078V72.5981L243.366 72.7554C241.962 72.8564 241.277 73.3618 241.277 74.249C241.277 75.1699 242.075 75.7314 243.209 75.7314ZM242.131 78.1909C239.75 78.1909 238.077 76.731 238.077 74.4624C238.077 72.2163 239.795 70.9136 242.872 70.7339L245.871 70.5542V69.5435C245.871 68.5103 245.129 67.9263 243.782 67.9263C242.603 67.9263 241.816 68.3306 241.547 69.0718H238.537C238.75 66.7808 240.851 65.3433 243.961 65.3433C247.241 65.3433 249.094 66.8931 249.094 69.5435V78H245.927V76.3828H245.725C245.084 77.5171 243.737 78.1909 242.131 78.1909ZM257.809 75.2373C259.583 75.2373 260.639 73.8784 260.639 71.6997C260.639 69.521 259.572 68.1509 257.809 68.1509C256.045 68.1509 255.023 69.521 255.023 71.6885C255.023 73.8784 256.034 75.2373 257.809 75.2373ZM257.764 82.6943C254.473 82.6943 252.294 81.2456 252.092 79.0669H255.327C255.495 79.8306 256.416 80.3135 257.831 80.3135C259.583 80.3135 260.605 79.5049 260.605 78.1123V75.8213H260.403C259.718 77.124 258.415 77.8203 256.674 77.8203C253.586 77.8203 251.666 75.4282 251.666 71.6997C251.666 67.8589 253.597 65.4106 256.742 65.4106C258.415 65.4106 259.841 66.2417 260.504 67.6006H260.706V65.6128H263.873V77.9551C263.873 80.8638 261.503 82.6943 257.764 82.6943ZM272.509 67.8477C270.993 67.8477 269.926 68.9033 269.814 70.5093H275.092C275.025 68.8696 274.037 67.8477 272.509 67.8477ZM275.16 74.4736H278.203C277.709 76.8096 275.575 78.2695 272.543 78.2695C268.77 78.2695 266.546 75.8887 266.546 71.8682C266.546 67.8364 268.814 65.3433 272.498 65.3433C276.148 65.3433 278.304 67.668 278.304 71.5986V72.5981H269.803V72.7666C269.848 74.6084 270.926 75.7539 272.633 75.7539C273.924 75.7539 274.812 75.2935 275.16 74.4736ZM280.988 78V65.6128H284.155V67.5894H284.357C284.683 66.354 285.963 65.4106 287.536 65.4106C287.985 65.4106 288.535 65.4668 288.816 65.5679V68.5439C288.558 68.4429 287.794 68.3418 287.266 68.3418C285.48 68.3418 284.256 69.3975 284.256 71.1382V78H280.988Z",
              fill: "#E26D6D"
            }
          ),
          /* @__PURE__ */ ne("defs", { children: /* @__PURE__ */ Cn(
            "linearGradient",
            {
              id: "paint0_linear_3256_21916",
              x1: "122.929",
              y1: "95.896",
              x2: "42.4876",
              y2: "32.2193",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ ne("stop", { stopColor: "#013361" }),
                /* @__PURE__ */ ne("stop", { offset: "1", stopColor: "#0ABE93" })
              ]
            }
          ) })
        ]
      }
    ),
    "nextmed-institutions": /* @__PURE__ */ Cn(
      "svg",
      {
        width: u,
        viewBox: "0 0 553 150",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M176.872 46.2991C182.411 46.2991 186.699 47.8329 189.734 50.9004C192.846 53.9679 194.401 58.2771 194.401 63.8278V98.9947H184.384V65.0329C184.384 61.5272 183.474 58.7883 181.653 56.8164C179.831 54.8444 177.327 53.8584 174.14 53.8584C170.573 53.8584 167.5 55.0635 164.92 57.4737C162.341 59.8839 160.443 63.1339 159.229 67.224V98.9947H149.213V59.0074C149.213 57.4737 148.91 56.232 148.302 55.2826C147.695 54.26 146.595 53.1645 145.001 51.996L151.603 46.2991C154.032 47.6138 155.815 49.0014 156.953 50.4622C158.091 51.923 158.812 53.8218 159.115 56.159C160.861 53.0915 163.251 50.6813 166.286 48.9285C169.321 47.1756 172.85 46.2991 176.872 46.2991ZM232.512 92.7501C235.623 92.7501 238.279 92.3119 240.48 91.4355C242.757 90.5591 244.956 89.1349 247.082 87.1629L253.228 92.531C250.952 95.1603 248.106 97.0958 244.692 98.3374C241.352 99.5791 237.216 100.2 232.285 100.2C224.468 100.2 218.549 98.5931 214.528 95.3795C210.582 92.0928 208.609 87.2359 208.609 80.8087V64.4852C208.609 58.8613 210.62 54.4427 214.642 51.2291C218.74 47.9425 224.317 46.2991 231.374 46.2991C238.659 46.2991 244.273 48.0155 248.22 51.4482C252.241 54.8809 254.253 59.8109 254.253 66.238C254.253 70.5472 253.456 73.5052 251.862 75.1119C250.344 76.7187 247.385 77.5221 242.984 77.5221H218.626V80.9183C218.626 84.8622 219.764 87.8202 222.041 89.7922C224.317 91.7642 227.807 92.7501 232.512 92.7501ZM231.374 53.7488C227.352 53.7488 224.203 54.7714 221.927 56.8164C219.726 58.8613 218.626 61.6367 218.626 65.1425V70.6202H238.09C240.442 70.6202 242.035 70.255 242.87 69.5246C243.781 68.7943 244.236 67.4066 244.236 65.3616C244.236 61.7097 243.098 58.8613 240.822 56.8164C238.545 54.7714 235.395 53.7488 231.374 53.7488ZM295.406 98.9947L281.747 79.6036L268.544 98.9947H258.3L276.511 72.154L259.21 47.5042H269.341L282.43 66.0189L295.065 47.5042H305.309L287.78 73.5782L305.65 98.9947H295.406ZM325.061 55.0635V82.6712C325.061 85.8117 325.705 88.1489 326.996 89.6826C328.286 91.1434 330.335 91.8737 333.142 91.8737H340.427V99.433H333.142C326.692 99.433 322.063 98.1183 319.256 95.489C316.448 92.8597 315.044 88.5871 315.044 82.6712V36.8775C315.044 35.3437 314.741 34.1021 314.133 33.1526C313.526 32.1301 312.426 31.0345 310.833 29.866L317.548 24.1692C320.355 25.63 322.29 27.3097 323.353 29.2087C324.491 31.0345 325.061 33.5909 325.061 36.8775V47.5042H340.427V55.0635H325.061Z",
              fill: "white"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M413.834 46.2992C419.069 46.2992 423.09 47.833 425.899 50.9005C428.782 53.895 430.224 58.2041 430.224 63.8279V98.9948H420.208V65.033C420.208 61.4543 419.411 58.7154 417.817 56.8164C416.224 54.8445 413.984 53.8585 411.102 53.8585C407.687 53.8585 404.728 55.1366 402.224 57.6929C399.795 60.176 398.088 63.5358 397.102 67.7719V98.9948H387.085V65.033C387.085 61.4543 386.288 58.7154 384.695 56.8164C383.101 54.8445 380.862 53.8585 377.979 53.8585C374.565 53.8585 371.605 55.1731 369.101 57.8024C366.597 60.3587 364.89 63.6818 363.979 67.7719V98.9948H353.962V59.0075C353.962 57.4738 353.658 56.2321 353.052 55.2827C352.444 54.2601 351.345 53.1646 349.751 51.996L356.353 46.2992C360.906 48.4903 363.371 51.8135 363.751 56.2687C365.572 53.055 367.924 50.6084 370.808 48.9285C373.691 47.1757 376.992 46.2992 380.711 46.2992C384.884 46.2992 388.26 47.3218 390.841 49.3667C393.496 51.3387 395.242 54.2237 396.077 58.0215C397.443 54.4428 399.681 51.5944 402.793 49.4763C405.98 47.3582 409.659 46.2992 413.834 46.2992ZM487.735 85.191C488.494 84.3875 489.443 83.9859 490.581 83.9859C491.264 83.9859 491.87 84.205 492.402 84.6432C492.933 85.0814 493.199 85.6292 493.199 86.2865C493.199 87.6012 492.705 88.8428 491.719 90.0114C486.711 96.0003 479.729 98.9948 470.776 98.9948C461.897 98.9948 455.182 96.6942 450.629 92.0929C446.151 87.4186 443.913 80.9914 443.913 72.8114C443.913 63.4627 446.19 56.3417 450.743 51.4483C455.296 46.4818 461.897 43.9986 470.548 43.9986C477.453 43.9986 482.992 45.8976 487.166 49.6954C491.339 53.4932 493.426 58.9345 493.426 66.019C493.426 69.5977 491.264 71.3871 486.938 71.3871H456.32C456.243 71.9715 456.206 72.7748 456.206 73.7973C456.206 80.0785 457.495 85.0449 460.076 88.6967C462.656 92.3486 466.639 94.1744 472.028 94.1744C475.67 94.1744 478.553 93.4441 480.678 91.9834C482.802 90.5226 484.434 89.1349 485.573 87.8203C486.711 86.4326 487.431 85.5562 487.735 85.191ZM469.865 48.3808C466.223 48.3808 463.225 49.8779 460.873 52.8725C458.52 55.867 457.117 60.5047 456.661 66.7859H477.946C479.312 66.7859 480.298 66.5668 480.906 66.1285C481.512 65.6173 481.816 64.7773 481.816 63.6088C481.816 58.7154 480.601 54.954 478.174 52.3247C475.821 49.6954 473.052 48.3808 469.865 48.3808ZM530.804 43.9986C534.524 43.9986 537.975 44.6193 541.162 45.861V24.717C541.162 21.5034 541.731 19.2028 542.87 17.8151C544.008 16.4275 545.868 15.7336 548.447 15.7336C550.193 15.7336 551.369 16.1718 551.976 17.0482C552.659 17.8517 553 19.1298 553 20.8826V93.8458C553 95.5986 552.697 96.9133 552.089 97.7897C551.483 98.5932 550.307 98.9948 548.561 98.9948C543.933 98.9948 541.618 95.197 541.618 87.6012L541.276 87.4916C539.077 90.9974 536.572 93.8092 533.764 95.9273C530.957 97.9723 527.428 98.9948 523.178 98.9948C517.639 98.9948 513.011 97.0228 509.292 93.0789C505.574 89.0619 503.714 82.6712 503.714 73.9069C503.714 63.6818 506.068 56.1591 510.771 51.3387C515.477 46.4453 522.154 43.9986 530.804 43.9986ZM516.007 73.0305C516.007 79.6037 517.07 84.3511 519.194 87.2725C521.395 90.1939 524.241 91.6547 527.731 91.6547C529.78 91.6547 531.867 90.9608 533.991 89.5732C536.117 88.1124 537.861 86.3231 539.227 84.205C540.593 82.0139 541.276 79.8594 541.276 77.7413V54.8445C541.276 53.2377 540.329 51.7769 538.431 50.4623C536.534 49.0746 533.991 48.3808 530.804 48.3808C525.948 48.3808 522.268 50.2066 519.764 53.8585C517.259 57.4372 516.007 63.8279 516.007 73.0305Z",
              fill: "#74CFFF"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M57.4715 88.8204C55.715 93.0678 43.629 106.655 40.4186 112.131C31.1562 112.491 23.4919 112.09 17.0183 107.905C2.49152 98.5125 6.19231 81.505 6.19231 64.3662C6.19231 55.1845 6.19382 46.0033 6.19175 36.822C6.18968 26.3662 6.227 21.9806 11.6428 15.0382C15.1524 10.5395 22.1702 6.39785 31.1355 6.11195C49.6279 5.52234 69.1475 6.13597 87.7642 6.09954C98.3612 6.07909 103.349 7.04145 109.843 11.9942C114.698 15.6973 118.278 22.5149 118.337 31.4297C118.459 49.5727 118.338 67.774 118.329 85.923C118.321 103.6 107.373 112.228 89.0103 112.209C78.7446 112.198 81.5155 110.152 72.9675 123.786C69.4938 129.326 65.1508 135.462 62.2442 140.962C60.3586 139.721 56.511 134.343 54.7332 132.088C52.9699 129.853 48.9681 122.705 45.7054 125.584C42.2192 128.243 46.9715 132.1 51.699 137.987C64.9668 154.507 60.0921 155.586 80.7064 122.829C84.5181 116.772 82.6817 117.998 91.5157 118.023C109.421 118.073 123.387 106.508 124.461 90.1304L124.52 30.216C124.25 13.2438 110.912 0.56547 93.3942 0.238787C73.2158 -0.137921 51.953 -0.019127 31.7487 0.252251C14.0582 0.489706 0.42087 12.736 0 29.6173L0.0223219 89.5398C1.42072 120.285 41.1923 120.982 45.0393 116.055L64.6838 90.0446C66.655 88.4279 70.0271 88.9216 74.1368 84.1779L91.5251 55.9972C96.5045 47.6904 94.1307 39.1732 87.0153 35.1374C84.8669 33.9191 83.6116 34.1281 81.6596 33.1688C79.6791 32.196 79.5138 30.5208 75.9835 30.7423C71.2737 31.0381 69.4088 36.425 72.6793 39.3722C77.4229 43.6466 79.4873 37.6043 83.4436 39.1294C86.4669 40.2947 89.4529 44.2498 88.8911 48.6966C88.5138 51.681 75.3952 72.1546 72.1662 77.5009C70.2557 80.6648 68.2944 83.6865 63.8727 84.4064C55.1671 85.8232 51.2916 75.7973 47.9765 70.3387L36.4954 51.4574C34.3667 47.1172 36.1683 42.9148 38.8138 40.601C44.806 35.3608 43.8052 42.6549 50.2503 40.3491C56.7106 38.0378 52.0791 26.9618 44.6454 31.8378C40.3573 34.6504 43.7409 32.6505 39.1942 34.3821C32.8362 36.8035 27.299 45.0623 31.6772 53.6559C34.7513 59.6893 39.427 66.6481 43.1194 72.5971C47.1394 79.0739 50.0762 86.6119 57.4715 88.8204Z",
              fill: "#74CFFF"
            }
          )
        ]
      }
    ),
    "nextmed-app": /* @__PURE__ */ Cn(
      "svg",
      {
        width: u,
        viewBox: "0 0 780 211",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M249.453 65.2985C257.265 65.2985 263.313 67.4616 267.593 71.7879C271.982 76.1142 274.175 82.1917 274.175 90.0202V139.618H260.048V91.7198C260.048 86.7755 258.764 82.9127 256.195 80.1315C253.627 77.3503 250.095 75.9597 245.6 75.9597C240.57 75.9597 236.235 77.6593 232.597 81.0586C228.959 84.4578 226.282 89.0416 224.571 94.81V139.618H210.444V83.2217C210.444 81.0586 210.016 79.3074 209.159 77.9684C208.303 76.5262 206.751 74.9811 204.504 73.333L213.815 65.2985C217.24 67.1526 219.755 69.1097 221.36 71.1699C222.965 73.2301 223.983 75.9082 224.41 79.2044C226.872 74.8781 230.243 71.4789 234.524 69.0067C238.804 66.5346 243.78 65.2985 249.453 65.2985ZM327.926 130.811C332.313 130.811 336.059 130.193 339.163 128.957C342.374 127.721 345.476 125.712 348.474 122.931L357.143 130.502C353.932 134.21 349.919 136.94 345.103 138.691C340.393 140.442 334.56 141.318 327.605 141.318C316.581 141.318 308.233 139.052 302.562 134.519C296.996 129.884 294.214 123.034 294.214 113.969V90.9473C294.214 83.0156 297.05 76.7838 302.723 72.2515C308.502 67.6161 316.368 65.2985 326.321 65.2985C336.595 65.2985 344.513 67.7191 350.08 72.5605C355.75 77.4019 358.588 84.3549 358.588 93.4194C358.588 99.4969 357.464 103.669 355.217 105.935C353.075 108.201 348.902 109.334 342.695 109.334H308.341V114.124C308.341 119.686 309.947 123.858 313.157 126.639C316.368 129.42 321.29 130.811 327.926 130.811ZM326.321 75.8052C320.648 75.8052 316.207 77.2474 312.997 80.1315C309.892 83.0156 308.341 86.93 308.341 91.8743V99.5999H335.792C339.109 99.5999 341.357 99.0848 342.534 98.0548C343.819 97.0247 344.461 95.0675 344.461 92.1834C344.461 87.0329 342.856 83.0156 339.645 80.1315C336.434 77.2474 331.992 75.8052 326.321 75.8052ZM416.629 139.618L397.365 112.27L378.743 139.618H364.295L389.98 101.763L365.58 66.9981H379.867L398.328 93.1104L416.147 66.9981H430.595L405.873 103.772L431.077 139.618H416.629ZM458.452 77.6593V116.596C458.452 121.025 459.361 124.322 461.181 126.485C463.001 128.545 465.891 129.575 469.85 129.575H480.124V140.236H469.85C460.754 140.236 454.224 138.382 450.265 134.674C446.306 130.966 444.325 124.94 444.325 116.596V52.0105C444.325 49.8474 443.898 48.0962 443.041 46.7572C442.184 45.315 440.633 43.7699 438.386 42.1218L447.857 34.0873C451.816 36.1475 454.545 38.5165 456.044 41.1948C457.65 43.7699 458.452 47.3752 458.452 52.0105V66.9981H480.124V77.6593H458.452Z",
              fill: "white"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              d: "M583.654 65.2985C591.038 65.2985 596.709 67.4617 600.67 71.788C604.736 76.0113 606.771 82.0886 606.771 90.0203V139.618H592.644V91.7199C592.644 86.6726 591.52 82.8098 589.273 80.1316C587.025 77.3504 583.867 75.9598 579.801 75.9598C574.985 75.9598 570.811 77.7623 567.28 81.3677C563.854 84.8698 561.446 89.6083 560.056 95.5827V139.618H545.929V91.7199C545.929 86.6726 544.805 82.8098 542.558 80.1316C540.31 77.3504 537.152 75.9598 533.086 75.9598C528.27 75.9598 524.097 77.8139 520.565 81.5222C517.033 85.1275 514.625 89.8142 513.341 95.5827V139.618H499.214V83.2218C499.214 81.0586 498.785 79.3075 497.93 77.9684C497.073 76.5263 495.522 74.9812 493.274 73.3331L502.585 65.2985C509.007 68.3887 512.484 73.0756 513.02 79.359C515.588 74.8266 518.905 71.376 522.973 69.0068C527.038 66.5346 531.694 65.2985 536.939 65.2985C542.825 65.2985 547.586 66.7407 551.227 69.6248C554.971 72.406 557.433 76.4749 558.611 81.8312C560.537 76.7839 563.694 72.7666 568.082 69.7793C572.577 66.7921 577.766 65.2985 583.654 65.2985ZM687.882 120.15C688.951 119.017 690.29 118.45 691.895 118.45C692.858 118.45 693.713 118.759 694.464 119.377C695.212 119.995 695.587 120.768 695.587 121.695C695.587 123.549 694.891 125.3 693.5 126.948C686.437 135.395 676.59 139.618 663.963 139.618C651.441 139.618 641.97 136.374 635.548 129.884C629.233 123.292 626.077 114.227 626.077 102.69C626.077 89.5052 629.288 79.462 635.709 72.5605C642.13 65.556 651.441 62.0538 663.641 62.0538C673.38 62.0538 681.192 64.7321 687.079 70.0884C692.965 75.4447 695.908 83.1188 695.908 93.1105C695.908 98.1578 692.858 100.682 686.758 100.682H643.575C643.467 101.506 643.414 102.639 643.414 104.081C643.414 112.939 645.233 119.944 648.873 125.094C652.511 130.245 658.129 132.82 665.728 132.82C670.865 132.82 674.931 131.79 677.929 129.73C680.925 127.669 683.226 125.712 684.832 123.858C686.437 121.901 687.452 120.665 687.882 120.15ZM662.678 68.2342C657.541 68.2342 653.313 70.3458 649.996 74.5692C646.677 78.7925 644.699 85.3334 644.057 94.1921H674.076C676.002 94.1921 677.393 93.883 678.25 93.265C679.105 92.544 679.534 91.3593 679.534 89.7113C679.534 82.8098 677.82 77.5049 674.397 73.7966C671.078 70.0884 667.173 68.2342 662.678 68.2342ZM748.625 62.0538C753.87 62.0538 758.738 62.9293 763.233 64.6805V34.8599C763.233 30.3275 764.036 27.0828 765.641 25.1257C767.246 23.1686 769.869 22.19 773.507 22.19C775.969 22.19 777.629 22.808 778.484 24.0441C779.447 25.1773 779.929 26.9798 779.929 29.452V132.356C779.929 134.828 779.501 136.683 778.644 137.919C777.789 139.052 776.13 139.618 773.668 139.618C767.14 139.618 763.875 134.262 763.875 123.549L763.394 123.395C760.291 128.339 756.76 132.305 752.799 135.292C748.839 138.176 743.863 139.618 737.869 139.618C730.057 139.618 723.53 136.837 718.284 131.275C713.041 125.609 710.418 116.596 710.418 104.235C710.418 89.8142 713.737 79.2045 720.371 72.406C727.007 65.5046 736.424 62.0538 748.625 62.0538ZM727.756 102.999C727.756 112.27 729.255 118.965 732.251 123.086C735.355 127.206 739.368 129.266 744.29 129.266C747.18 129.266 750.124 128.287 753.12 126.33C756.118 124.27 758.578 121.747 760.504 118.759C762.431 115.669 763.394 112.63 763.394 109.643V77.3504C763.394 75.0843 762.057 73.0241 759.38 71.1699C756.706 69.2129 753.12 68.2342 748.625 68.2342C741.776 68.2342 736.585 70.8094 733.053 75.9598C729.521 81.0071 727.756 90.0203 727.756 102.999Z",
              fill: "#0ABE93"
            }
          ),
          /* @__PURE__ */ ne(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M81.0555 125.269C78.5781 131.259 61.5325 150.421 57.0047 158.145C43.9415 158.653 33.1321 158.088 24.0019 152.184C3.51393 138.938 8.73339 114.951 8.73339 90.7794C8.73339 77.8299 8.73551 64.8812 8.73259 51.9322C8.72967 37.1858 8.7823 31.0005 16.4206 21.2093C21.3703 14.8645 31.268 9.02327 43.9123 8.62005C69.9931 7.78848 97.5228 8.65393 123.779 8.60255C138.725 8.57369 145.759 9.93097 154.918 16.9162C161.765 22.1388 166.814 31.754 166.898 44.3271C167.069 69.9152 166.898 95.5856 166.887 121.182C166.875 146.114 151.434 158.282 125.536 158.254C111.058 158.239 114.966 155.354 102.91 174.582C98.0112 182.395 91.886 191.05 87.7867 198.807C85.1272 197.057 79.7009 189.471 77.1935 186.292C74.7066 183.14 69.0626 173.058 64.461 177.118C59.5442 180.869 66.2467 186.308 72.9142 194.611C91.6265 217.911 84.7514 219.431 113.825 173.233C119.201 164.69 116.611 166.419 129.07 166.455C154.323 166.525 174.02 150.214 175.535 127.116L175.618 42.6154C175.238 18.6785 156.425 0.797515 131.719 0.336775C103.261 -0.194519 73.2724 -0.0269759 44.777 0.355764C19.8271 0.690662 0.593578 17.9624 0 41.771L0.0314819 126.283C2.00373 169.645 58.096 170.628 63.5216 163.68L91.2274 126.995C94.0076 124.715 98.7634 125.411 104.56 118.721L129.083 78.9761C136.106 67.2606 132.758 55.2483 122.723 49.5563C119.693 47.8381 117.922 48.1329 115.169 46.7799C112.376 45.408 112.143 43.0452 107.164 43.3576C100.521 43.7748 97.8913 51.3723 102.504 55.529C109.194 61.5573 112.106 53.0356 117.685 55.1865C121.949 56.83 126.161 62.4081 125.368 68.6797C124.836 72.8887 106.334 101.764 101.78 109.304C99.0858 113.766 96.3196 118.028 90.0834 119.043C77.8054 121.042 72.3396 106.901 67.6641 99.2029L51.4716 72.5734C48.4695 66.4522 51.0103 60.5253 54.7414 57.2619C63.1926 49.8715 61.781 60.1587 70.871 56.9067C79.9823 53.6469 73.4502 38.0259 62.9661 44.9027C56.9183 48.8696 61.6903 46.0489 55.2779 48.4911C46.3108 51.9062 38.5014 63.5541 44.6763 75.674C49.0118 84.1833 55.6062 93.9977 60.8138 102.388C66.4835 111.523 70.6254 122.154 81.0555 125.269Z",
              fill: "#0ABE93"
            }
          )
        ]
      }
    )
  }[d];
}, UE = Uv(
  "nxth-peer nxth-shrink-0 nxth-rounded-sm data-[state=unchecked]:nxth-border data-[state=unchecked]:nxth-border-dark nxth-ring-offset-dark focus-visible:nxth-outline-none focus-visible:nxth-ring-2 focus-visible:nxth-ring-ring focus-visible:nxth-ring-offset-2 disabled:nxth-cursor-not-allowed disabled:nxth-opacity-50",
  {
    variants: {
      variant: {
        default: "nxth-h-6 nxth-w-6",
        small: "nxth-h-5 nxth-w-5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), $E = {
  "nextmed-app": /* @__PURE__ */ ne(e9, {}),
  "nextmed-institutions": /* @__PURE__ */ ne(zE, {}),
  "nextmed-admin": /* @__PURE__ */ ne(e9, {})
}, VE = Fe.forwardRef(({ className: u, variant: d, ...f }, y) => {
  const { theme: C = "light", app: x } = W4();
  return /* @__PURE__ */ Cn("label", { className: "nxth-flex nxth-items-center nxth-gap-1", children: [
    /* @__PURE__ */ ne(
      A9,
      {
        ref: y,
        className: Sn(UE({ variant: d }), u),
        ...f,
        children: /* @__PURE__ */ ne(
          SE,
          {
            className: Sn(
              "nxth-flex nxth-items-center nxth-justify-center nxth-text-current"
            ),
            children: C === "light" ? $E[x] : /* @__PURE__ */ ne(HE, {})
          }
        )
      }
    ),
    /* @__PURE__ */ ne("p", { className: "nxth-text-sm nxth-text-dark-1 nxth-select-none", children: f.children })
  ] });
});
VE.displayName = A9.displayName;
var FE = (u) => u.type === "checkbox", PE = (u) => u instanceof Date, H9 = (u) => u == null;
const BE = (u) => typeof u == "object";
var Hf = (u) => !H9(u) && !Array.isArray(u) && BE(u) && !PE(u), jE = (u) => Hf(u) && u.target ? FE(u.target) ? u.target.checked : u.target.value : u, IE = (u) => u.substring(0, u.search(/\.\d+(\.|$)/)) || u, YE = (u, d) => u.has(IE(d)), ZE = (u) => {
  const d = u.constructor && u.constructor.prototype;
  return Hf(d) && d.hasOwnProperty("isPrototypeOf");
}, QE = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function G4(u) {
  let d;
  const f = Array.isArray(u);
  if (u instanceof Date)
    d = new Date(u);
  else if (u instanceof Set)
    d = new Set(u);
  else if (!(QE && (u instanceof Blob || u instanceof FileList)) && (f || Hf(u)))
    if (d = f ? [] : {}, !f && !ZE(u))
      d = u;
    else
      for (const y in u)
        u.hasOwnProperty(y) && (d[y] = G4(u[y]));
  else
    return u;
  return d;
}
var U9 = (u) => Array.isArray(u) ? u.filter(Boolean) : [], L4 = (u) => u === void 0, aa = (u, d, f) => {
  if (!d || !Hf(u))
    return f;
  const y = U9(d.split(/[,[\].]+?/)).reduce((C, x) => H9(C) ? C : C[x], u);
  return L4(y) || y === u ? L4(u[d]) ? f : u[d] : y;
}, t9 = (u) => typeof u == "boolean";
const n9 = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, M4 = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, $9 = pe.createContext(null), Vv = () => pe.useContext($9), WE = (u) => {
  const { children: d, ...f } = u;
  return pe.createElement($9.Provider, { value: f }, d);
};
var GE = (u, d, f, y = !0) => {
  const C = {
    defaultValues: d._defaultValues
  };
  for (const x in u)
    Object.defineProperty(C, x, {
      get: () => {
        const h = x;
        return d._proxyFormState[h] !== M4.all && (d._proxyFormState[h] = !y || M4.all), f && (f[h] = !0), u[h];
      }
    });
  return C;
}, XE = (u) => Hf(u) && !Object.keys(u).length, KE = (u, d, f, y) => {
  f(u);
  const { name: C, ...x } = u;
  return XE(x) || Object.keys(x).length >= Object.keys(d).length || Object.keys(x).find((h) => d[h] === (!y || M4.all));
}, qE = (u) => Array.isArray(u) ? u : [u], V9 = (u, d, f) => !u || !d || u === d || qE(u).some((y) => y && (f ? y === d : y.startsWith(d) || d.startsWith(y)));
function F9(u) {
  const d = pe.useRef(u);
  d.current = u, pe.useEffect(() => {
    const f = !u.disabled && d.current.subject && d.current.subject.subscribe({
      next: d.current.next
    });
    return () => {
      f && f.unsubscribe();
    };
  }, [u.disabled]);
}
function JE(u) {
  const d = Vv(), { control: f = d.control, disabled: y, name: C, exact: x } = u || {}, [h, k] = pe.useState(f._formState), E = pe.useRef(!0), b = pe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), N = pe.useRef(C);
  return N.current = C, F9({
    disabled: y,
    next: (R) => E.current && V9(N.current, R.name, x) && KE(R, b.current, f._updateFormState) && k({
      ...f._formState,
      ...R
    }),
    subject: f._subjects.state
  }), pe.useEffect(() => (E.current = !0, b.current.isValid && f._updateValid(!0), () => {
    E.current = !1;
  }), [f]), GE(h, f, b.current, !1);
}
var eT = (u) => typeof u == "string", tT = (u, d, f, y, C) => eT(u) ? (y && d.watch.add(u), aa(f, u, C)) : Array.isArray(u) ? u.map((x) => (y && d.watch.add(x), aa(f, x))) : (y && (d.watchAll = !0), f);
function nT(u) {
  const d = Vv(), { control: f = d.control, name: y, defaultValue: C, disabled: x, exact: h } = u || {}, k = pe.useRef(y);
  k.current = y, F9({
    disabled: x,
    subject: f._subjects.values,
    next: (N) => {
      V9(k.current, N.name, h) && b(G4(tT(k.current, f._names, N.values || f._formValues, !1, C)));
    }
  });
  const [E, b] = pe.useState(f._getWatch(y, C));
  return pe.useEffect(() => f._removeUnmounted()), E;
}
var rT = (u) => /^\w*$/.test(u), aT = (u) => U9(u.replace(/["|']|\]/g, "").split(/\.|\[/)), r9 = (u, d, f) => {
  let y = -1;
  const C = rT(d) ? [d] : aT(d), x = C.length, h = x - 1;
  for (; ++y < x; ) {
    const k = C[y];
    let E = f;
    if (y !== h) {
      const b = u[k];
      E = Hf(b) || Array.isArray(b) ? b : isNaN(+C[y + 1]) ? {} : [];
    }
    u[k] = E, u = u[k];
  }
  return u;
};
function iT(u) {
  const d = Vv(), { name: f, disabled: y, control: C = d.control, shouldUnregister: x } = u, h = YE(C._names.array, f), k = nT({
    control: C,
    name: f,
    defaultValue: aa(C._formValues, f, aa(C._defaultValues, f, u.defaultValue)),
    exact: !0
  }), E = JE({
    control: C,
    name: f
  }), b = pe.useRef(C.register(f, {
    ...u.rules,
    value: k,
    ...t9(u.disabled) ? { disabled: u.disabled } : {}
  }));
  return pe.useEffect(() => {
    const N = C._options.shouldUnregister || x, R = (M, L) => {
      const _ = aa(C._fields, M);
      _ && (_._f.mount = L);
    };
    if (R(f, !0), N) {
      const M = G4(aa(C._options.defaultValues, f));
      r9(C._defaultValues, f, M), L4(aa(C._formValues, f)) && r9(C._formValues, f, M);
    }
    return () => {
      (h ? N && !C._state.action : N) ? C.unregister(f) : R(f, !1);
    };
  }, [f, C, h, x]), pe.useEffect(() => {
    aa(C._fields, f) && C._updateDisabledField({
      disabled: y,
      fields: C._fields,
      name: f,
      value: aa(C._fields, f)._f.value
    });
  }, [y, f, C]), {
    field: {
      name: f,
      value: k,
      ...t9(y) || E.disabled ? { disabled: E.disabled || y } : {},
      onChange: pe.useCallback((N) => b.current.onChange({
        target: {
          value: jE(N),
          name: f
        },
        type: n9.CHANGE
      }), [f]),
      onBlur: pe.useCallback(() => b.current.onBlur({
        target: {
          value: aa(C._formValues, f),
          name: f
        },
        type: n9.BLUR
      }), [f, C]),
      ref: (N) => {
        const R = aa(C._fields, f);
        R && N && (R._f.ref = {
          focus: () => N.focus(),
          select: () => N.select(),
          setCustomValidity: (M) => N.setCustomValidity(M),
          reportValidity: () => N.reportValidity()
        });
      }
    },
    formState: E,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!aa(E.errors, f)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!aa(E.dirtyFields, f)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!aa(E.touchedFields, f)
      },
      error: {
        enumerable: !0,
        get: () => aa(E.errors, f)
      }
    })
  };
}
const oT = (u) => u.render(iT(u)), Ok = WE, P9 = Fe.createContext(
  {}
), Nk = ({
  ...u
}) => /* @__PURE__ */ ne(P9.Provider, { value: { name: u.name }, children: /* @__PURE__ */ ne(oT, { ...u }) }), Fv = () => {
  const u = Fe.useContext(P9), d = Fe.useContext(B9), { getFieldState: f, formState: y } = Vv(), C = f(u.name, y);
  if (!u)
    throw new Error("useFormField should be used within <FormField>");
  const { id: x } = d;
  return {
    id: x,
    name: u.name,
    formItemId: `${x}-form-item`,
    formDescriptionId: `${x}-form-item-description`,
    formMessageId: `${x}-form-item-message`,
    ...C
  };
}, B9 = Fe.createContext(
  {}
), lT = Fe.forwardRef(({ className: u, ...d }, f) => {
  const y = Fe.useId();
  return /* @__PURE__ */ ne(B9.Provider, { value: { id: y }, children: /* @__PURE__ */ ne("div", { ref: f, className: Sn("nxth-space-y-2", u), ...d }) });
});
lT.displayName = "FormItem";
const uT = Fe.forwardRef(({ className: u, ...d }, f) => {
  const { error: y, formItemId: C } = Fv();
  return /* @__PURE__ */ ne(
    I9,
    {
      ref: f,
      className: Sn(y && "nxth-text-alert", u),
      htmlFor: C,
      ...d
    }
  );
});
uT.displayName = "FormLabel";
const sT = Fe.forwardRef(({ ...u }, d) => {
  const { error: f, formItemId: y, formDescriptionId: C, formMessageId: x, isDirty: h } = Fv();
  return /* @__PURE__ */ ne(
    Hv,
    {
      ref: d,
      className: Sn(
        f && "nxth-border-alert",
        h && !f && "nxth-border nxth-border-[#7C7C7C]"
      ),
      id: y,
      "aria-describedby": f ? `${C} ${x}` : `${C}`,
      "aria-invalid": !!f,
      "data-complete": h && !f,
      ...u
    }
  );
});
sT.displayName = "FormControl";
const cT = Fe.forwardRef(({ className: u, ...d }, f) => {
  const { formDescriptionId: y } = Fv();
  return /* @__PURE__ */ ne(
    "p",
    {
      ref: f,
      id: y,
      className: Sn("nxth-text-sm nxth-text-dark-2", u),
      ...d
    }
  );
});
cT.displayName = "FormDescription";
const fT = Fe.forwardRef(({ className: u, children: d, ...f }, y) => {
  const { error: C, formMessageId: x } = Fv(), h = C ? String(C == null ? void 0 : C.message) : d;
  return h ? /* @__PURE__ */ Cn("div", { className: "nxth-flex nxth-w-full nxth-gap-1 nxth-items-center", children: [
    /* @__PURE__ */ ne(
      "p",
      {
        ref: y,
        id: x,
        className: Sn("nxth-text-xs nxth-text-alert ", u),
        ...f,
        children: h
      }
    ),
    /* @__PURE__ */ ne(NE, { className: "nxth-text-sm nxth-text-alert nxth-mb-[0.125rem]" })
  ] }) : null;
});
fT.displayName = "FormMessage";
const dT = Uv(
  "nxth-w-full nxth-h-full nxth-border nxth-bg-[#F9F9F9] nxth-rounded-md nxth-outline-0 nxth-px-2 dark:nxth-bg-transparent dark:nxth-border dark:nxth-border-dark-2 focus-visible:nxth-ring-0 focus-visible:nxth-border-none focus-within:nxth-border-none focus:nxth-border-none",
  {
    variants: {
      variant: {
        default: "",
        "with-icons": "nxth-h-full nxth-rounded-tl-none nxth-rounded-bl-none nxth-border-none"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), X4 = Fe.forwardRef(
  ({ className: u, type: d, variant: f, ...y }, C) => /* @__PURE__ */ ne(
    "input",
    {
      ...y,
      type: d,
      className: Sn(dT({ variant: f }), u),
      ref: C
    }
  )
);
X4.displayName = "Input";
const pT = ({ icon: u, ...d }, f) => /* @__PURE__ */ Cn(
  "div",
  {
    "aria-invalid": d["aria-invalid"],
    className: p2(
      "nxth-group/general nxth-flex nxth-overflow-hidden nxth-relative nxth-h-[3.2rem] nxth-rounded-md aria-[invalid=false]:focus-within:nxth-shadow-input aria-[invalid=true]:nxth-border aria-[invalid=true]:nxth-border-alert",
      d.className
    ),
    children: [
      /* @__PURE__ */ ne(
        "div",
        {
          "data-complete": d["data-complete"],
          className: "nxth-group/icon nxth-flex nxth-w-[3rem] nxth-items-center nxth-justify-center nxth-bg-[#ECECEC] data-[complete=true]:nxth-bg-primary group-aria-[invalid=true]/general:nxth-bg-alert group-aria-[invalid=true]/general:nxth-border-alert",
          children: u && /* @__PURE__ */ ne(u, { className: "group-data-[complete=true]/icon:nxth-text-white group-aria-[invalid=true]/general:nxth-text-white " })
        }
      ),
      /* @__PURE__ */ ne(X4, { ...d, variant: "with-icons", ref: f })
    ]
  }
), _k = Rr(pT), vT = /* @__PURE__ */ Rr((u, d) => /* @__PURE__ */ St(mu.label, nr({}, u, {
  ref: d,
  onMouseDown: (f) => {
    var y;
    (y = u.onMouseDown) === null || y === void 0 || y.call(u, f), !f.defaultPrevented && f.detail > 1 && f.preventDefault();
  }
}))), j9 = vT, hT = Uv(
  "nxth-text-sm nxth-font-medium nxth-leading-none peer-disabled:nxth-cursor-not-allowed peer-disabled:nxth-opacity-70"
), I9 = Fe.forwardRef(({ className: u, ...d }, f) => /* @__PURE__ */ ne(
  j9,
  {
    ref: f,
    className: Sn(hT(), u),
    ...d
  }
));
I9.displayName = j9.displayName;
const mT = ({ leftIcon: u = !0, ...d }, f) => {
  const [y, C] = pr(!1), x = () => C(!y);
  return /* @__PURE__ */ Cn(
    "div",
    {
      "aria-invalid": d["aria-invalid"],
      className: p2(
        "nxth-group/general nxth-flex nxth-overflow-hidden nxth-relative nxth-h-[3.2rem] nxth-rounded-md aria-[invalid=false]:focus-within:nxth-shadow-input aria-[invalid=true]:nxth-border aria-[invalid=true]:nxth-border-alert nxth-select-none",
        d.className
      ),
      children: [
        u && /* @__PURE__ */ ne(Xw, { children: /* @__PURE__ */ ne(
          "div",
          {
            "data-complete": d["data-complete"],
            className: "nxth-group/icon nxth-flex nxth-w-[3rem] nxth-items-center nxth-justify-center nxth-bg-[#ECECEC] data-[complete=true]:nxth-bg-primary group-aria-[invalid=true]/general:nxth-bg-alert group-aria-[invalid=true]/general:nxth-border-alert",
            children: /* @__PURE__ */ ne(OE, { className: "group-data-[complete=true]/icon:nxth-text-white group-aria-[invalid=true]/general:nxth-text-white" })
          }
        ) }),
        /* @__PURE__ */ ne(
          X4,
          {
            type: y ? "text" : "password",
            variant: "with-icons",
            ref: f,
            ...d
          }
        ),
        /* @__PURE__ */ ne("div", { className: "nxth-absolute nxth-bottom-0 nxth-right-0 nxth-w-[3rem] nxth-h-full ", children: /* @__PURE__ */ ne(
          "div",
          {
            onClick: x,
            className: "nxth-flex nxth-h-full nxth-items-center nxth-justify-center",
            children: y ? /* @__PURE__ */ ne(_E, {}) : /* @__PURE__ */ ne(AE, {})
          }
        ) })
      ]
    }
  );
}, Ak = Rr(mT);
function yT(u, { insertAt: d } = {}) {
  if (!u || typeof document > "u")
    return;
  let f = document.head || document.getElementsByTagName("head")[0], y = document.createElement("style");
  y.type = "text/css", d === "top" && f.firstChild ? f.insertBefore(y, f.firstChild) : f.appendChild(y), y.styleSheet ? y.styleSheet.cssText = u : y.appendChild(document.createTextNode(u));
}
yT(`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
var gT = (u) => {
  switch (u) {
    case "success":
      return ST;
    case "info":
      return bT;
    case "warning":
      return wT;
    case "error":
      return ET;
    default:
      return null;
  }
}, CT = Array(12).fill(0), xT = ({ visible: u }) => pe.createElement("div", { className: "sonner-loading-wrapper", "data-visible": u }, pe.createElement("div", { className: "sonner-spinner" }, CT.map((d, f) => pe.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${f}` })))), ST = pe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, pe.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), wT = pe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, pe.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), bT = pe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, pe.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), ET = pe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, pe.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), O4 = 1, TT = class {
  constructor() {
    this.subscribe = (u) => (this.subscribers.push(u), () => {
      let d = this.subscribers.indexOf(u);
      this.subscribers.splice(d, 1);
    }), this.publish = (u) => {
      this.subscribers.forEach((d) => d(u));
    }, this.addToast = (u) => {
      this.publish(u), this.toasts = [...this.toasts, u];
    }, this.create = (u) => {
      var d;
      let { message: f, ...y } = u, C = typeof (u == null ? void 0 : u.id) == "number" || ((d = u.id) == null ? void 0 : d.length) > 0 ? u.id : O4++, x = this.toasts.find((k) => k.id === C), h = u.dismissible === void 0 ? !0 : u.dismissible;
      return x ? this.toasts = this.toasts.map((k) => k.id === C ? (this.publish({ ...k, ...u, id: C, title: f }), { ...k, ...u, id: C, dismissible: h, title: f }) : k) : this.addToast({ title: f, ...y, dismissible: h, id: C }), C;
    }, this.dismiss = (u) => (u || this.toasts.forEach((d) => {
      this.subscribers.forEach((f) => f({ id: d.id, dismiss: !0 }));
    }), this.subscribers.forEach((d) => d({ id: u, dismiss: !0 })), u), this.message = (u, d) => this.create({ ...d, message: u }), this.error = (u, d) => this.create({ ...d, message: u, type: "error" }), this.success = (u, d) => this.create({ ...d, type: "success", message: u }), this.info = (u, d) => this.create({ ...d, type: "info", message: u }), this.warning = (u, d) => this.create({ ...d, type: "warning", message: u }), this.loading = (u, d) => this.create({ ...d, type: "loading", message: u }), this.promise = (u, d) => {
      if (!d)
        return;
      let f;
      d.loading !== void 0 && (f = this.create({ ...d, promise: u, type: "loading", message: d.loading }));
      let y = u instanceof Promise ? u : u(), C = f !== void 0;
      return y.then((x) => {
        if (x && typeof x.ok == "boolean" && !x.ok) {
          C = !1;
          let h = typeof d.error == "function" ? d.error(`HTTP error! status: ${x.status}`) : d.error;
          this.create({ id: f, type: "error", message: h });
        } else if (d.success !== void 0) {
          C = !1;
          let h = typeof d.success == "function" ? d.success(x) : d.success;
          this.create({ id: f, type: "success", message: h });
        }
      }).catch((x) => {
        if (d.error !== void 0) {
          C = !1;
          let h = typeof d.error == "function" ? d.error(x) : d.error;
          this.create({ id: f, type: "error", message: h });
        }
      }).finally(() => {
        var x;
        C && (this.dismiss(f), f = void 0), (x = d.finally) == null || x.call(d);
      }), f;
    }, this.custom = (u, d) => {
      let f = (d == null ? void 0 : d.id) || O4++;
      return this.create({ jsx: u(f), id: f, ...d }), f;
    }, this.subscribers = [], this.toasts = [];
  }
}, Ni = new TT(), RT = (u, d) => {
  let f = (d == null ? void 0 : d.id) || O4++;
  return Ni.addToast({ title: u, ...d, id: f }), f;
}, kT = RT, zk = Object.assign(kT, { success: Ni.success, info: Ni.info, warning: Ni.warning, error: Ni.error, custom: Ni.custom, message: Ni.message, promise: Ni.promise, dismiss: Ni.dismiss, loading: Ni.loading }), DT = 3, LT = "32px", MT = 4e3, OT = 356, Y9 = 14, NT = 20, _T = 200;
function Mf(...u) {
  return u.filter(Boolean).join(" ");
}
var AT = (u) => {
  var d, f, y, C, x, h, k;
  let { invert: E, toast: b, unstyled: N, interacting: R, setHeights: M, visibleToasts: L, heights: _, index: $, toasts: P, expanded: V, removeToast: Y, closeButton: F, style: X, cancelButtonStyle: K, actionButtonStyle: le, className: ue = "", descriptionClassName: ae = "", duration: ye, position: we, gap: xe = Y9, loadingIcon: Me, expandByDefault: Oe, classNames: he, closeButtonAriaLabel: Ke = "Close toast" } = u, [be, ot] = pe.useState(!1), [ee, me] = pe.useState(!1), [de, Pe] = pe.useState(!1), [tt, lt] = pe.useState(!1), [Ot, Bt] = pe.useState(0), [kt, _t] = pe.useState(0), Tt = pe.useRef(null), wt = pe.useRef(null), hn = $ === 0, ut = $ + 1 <= L, Se = b.type, Ie = b.dismissible !== !1, st = b.className || "", ft = b.descriptionClassName || "", At = pe.useMemo(() => _.findIndex((Ye) => Ye.toastId === b.id) || 0, [_, b.id]), Dt = pe.useMemo(() => b.duration || ye || MT, [b.duration, ye]), tn = pe.useRef(0), jt = pe.useRef(0);
  pe.useRef(Dt);
  let jn = pe.useRef(0), Kt = pe.useRef(null), [kr, rr] = we.split("-"), Dr = pe.useMemo(() => _.reduce((Ye, gt, se) => se >= At ? Ye : Ye + gt.height, 0), [_, At]), Lr = b.invert || E, vr = Se === "loading";
  jt.current = pe.useMemo(() => At * xe + Dr, [At, Dr]), pe.useEffect(() => {
    ot(!0);
  }, []), pe.useLayoutEffect(() => {
    if (!be)
      return;
    let Ye = wt.current, gt = Ye.style.height;
    Ye.style.height = "auto";
    let se = Ye.getBoundingClientRect().height;
    Ye.style.height = gt, _t(se), M((ke) => ke.find((Ge) => Ge.toastId === b.id) ? ke.map((Ge) => Ge.toastId === b.id ? { ...Ge, height: se } : Ge) : [{ toastId: b.id, height: se }, ...ke]);
  }, [be, b.title, b.description, M, b.id]);
  let It = pe.useCallback(() => {
    me(!0), Bt(jt.current), M((Ye) => Ye.filter((gt) => gt.toastId !== b.id)), setTimeout(() => {
      Y(b);
    }, _T);
  }, [b, Y, M, jt]);
  pe.useEffect(() => {
    if (b.promise && Se === "loading" || b.duration === 1 / 0)
      return;
    let Ye, gt = Dt;
    return V || R ? (() => {
      if (jn.current < tn.current) {
        let se = (/* @__PURE__ */ new Date()).getTime() - tn.current;
        gt = gt - se;
      }
      jn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (tn.current = (/* @__PURE__ */ new Date()).getTime(), Ye = setTimeout(() => {
      var se;
      (se = b.onAutoClose) == null || se.call(b, b), It();
    }, gt)), () => clearTimeout(Ye);
  }, [V, R, Oe, b, Dt, It, b.promise, Se]), pe.useEffect(() => {
    let Ye = wt.current;
    if (Ye) {
      let gt = Ye.getBoundingClientRect().height;
      return _t(gt), M((se) => [{ toastId: b.id, height: gt }, ...se]), () => M((se) => se.filter((ke) => ke.toastId !== b.id));
    }
  }, [M, b.id]), pe.useEffect(() => {
    b.delete && It();
  }, [It, b.delete]);
  function In() {
    return Me ? pe.createElement("div", { className: "loader", "data-visible": Se === "loading" }, Me) : pe.createElement(xT, { visible: Se === "loading" });
  }
  return pe.createElement("li", { "aria-live": b.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: wt, className: Mf(ue, st, he == null ? void 0 : he.toast, (d = b == null ? void 0 : b.classNames) == null ? void 0 : d.toast, he == null ? void 0 : he[Se], (f = b == null ? void 0 : b.classNames) == null ? void 0 : f[Se]), "data-sonner-toast": "", "data-styled": !(b.jsx || b.unstyled || N), "data-mounted": be, "data-promise": !!b.promise, "data-removed": ee, "data-visible": ut, "data-y-position": kr, "data-x-position": rr, "data-index": $, "data-front": hn, "data-swiping": de, "data-dismissible": Ie, "data-type": Se, "data-invert": Lr, "data-swipe-out": tt, "data-expanded": !!(V || Oe && be), style: { "--index": $, "--toasts-before": $, "--z-index": P.length - $, "--offset": `${ee ? Ot : jt.current}px`, "--initial-height": Oe ? "auto" : `${kt}px`, ...X, ...b.style }, onPointerDown: (Ye) => {
    vr || !Ie || (Tt.current = /* @__PURE__ */ new Date(), Bt(jt.current), Ye.target.setPointerCapture(Ye.pointerId), Ye.target.tagName !== "BUTTON" && (Pe(!0), Kt.current = { x: Ye.clientX, y: Ye.clientY }));
  }, onPointerUp: () => {
    var Ye, gt, se, ke;
    if (tt || !Ie)
      return;
    Kt.current = null;
    let Ge = Number(((Ye = wt.current) == null ? void 0 : Ye.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), Ct = (/* @__PURE__ */ new Date()).getTime() - ((gt = Tt.current) == null ? void 0 : gt.getTime()), Yt = Math.abs(Ge) / Ct;
    if (Math.abs(Ge) >= NT || Yt > 0.11) {
      Bt(jt.current), (se = b.onDismiss) == null || se.call(b, b), It(), lt(!0);
      return;
    }
    (ke = wt.current) == null || ke.style.setProperty("--swipe-amount", "0px"), Pe(!1);
  }, onPointerMove: (Ye) => {
    var gt;
    if (!Kt.current || !Ie)
      return;
    let se = Ye.clientY - Kt.current.y, ke = Ye.clientX - Kt.current.x, Ge = (kr === "top" ? Math.min : Math.max)(0, se), Ct = Ye.pointerType === "touch" ? 10 : 2;
    Math.abs(Ge) > Ct ? (gt = wt.current) == null || gt.style.setProperty("--swipe-amount", `${se}px`) : Math.abs(ke) > Ct && (Kt.current = null);
  } }, F && !b.jsx ? pe.createElement("button", { "aria-label": Ke, "data-disabled": vr, "data-close-button": !0, onClick: vr || !Ie ? () => {
  } : () => {
    var Ye;
    It(), (Ye = b.onDismiss) == null || Ye.call(b, b);
  }, className: Mf(he == null ? void 0 : he.closeButton, (y = b == null ? void 0 : b.classNames) == null ? void 0 : y.closeButton) }, pe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, pe.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), pe.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, b.jsx || pe.isValidElement(b.title) ? b.jsx || b.title : pe.createElement(pe.Fragment, null, Se || b.icon || b.promise ? pe.createElement("div", { "data-icon": "" }, (b.promise || b.type === "loading") && !b.icon ? In() : null, b.icon || gT(Se)) : null, pe.createElement("div", { "data-content": "" }, pe.createElement("div", { "data-title": "", className: Mf(he == null ? void 0 : he.title, (C = b == null ? void 0 : b.classNames) == null ? void 0 : C.title) }, b.title), b.description ? pe.createElement("div", { "data-description": "", className: Mf(ae, ft, he == null ? void 0 : he.description, (x = b == null ? void 0 : b.classNames) == null ? void 0 : x.description) }, b.description) : null), b.cancel ? pe.createElement("button", { "data-button": !0, "data-cancel": !0, style: b.cancelButtonStyle || K, onClick: () => {
    var Ye;
    Ie && (It(), (Ye = b.cancel) != null && Ye.onClick && b.cancel.onClick());
  }, className: Mf(he == null ? void 0 : he.cancelButton, (h = b == null ? void 0 : b.classNames) == null ? void 0 : h.cancelButton) }, b.cancel.label) : null, b.action ? pe.createElement("button", { "data-button": "", style: b.actionButtonStyle || le, onClick: (Ye) => {
    var gt;
    (gt = b.action) == null || gt.onClick(Ye), !Ye.defaultPrevented && It();
  }, className: Mf(he == null ? void 0 : he.actionButton, (k = b == null ? void 0 : b.classNames) == null ? void 0 : k.actionButton) }, b.action.label) : null));
};
function a9() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let u = document.documentElement.getAttribute("dir");
  return u === "auto" || !u ? window.getComputedStyle(document.documentElement).direction : u;
}
var zT = (u) => {
  let { invert: d, position: f = "bottom-right", hotkey: y = ["altKey", "KeyT"], expand: C, closeButton: x, className: h, offset: k, theme: E = "light", richColors: b, duration: N, style: R, visibleToasts: M = DT, toastOptions: L, dir: _ = a9(), gap: $, loadingIcon: P, containerAriaLabel: V = "Notifications" } = u, [Y, F] = pe.useState([]), X = pe.useMemo(() => Array.from(new Set([f].concat(Y.filter((ee) => ee.position).map((ee) => ee.position)))), [Y, f]), [K, le] = pe.useState([]), [ue, ae] = pe.useState(!1), [ye, we] = pe.useState(!1), [xe, Me] = pe.useState(E !== "system" ? E : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Oe = pe.useRef(null), he = y.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Ke = pe.useRef(null), be = pe.useRef(!1), ot = pe.useCallback((ee) => F((me) => me.filter(({ id: de }) => de !== ee.id)), []);
  return pe.useEffect(() => Ni.subscribe((ee) => {
    if (ee.dismiss) {
      F((me) => me.map((de) => de.id === ee.id ? { ...de, delete: !0 } : de));
      return;
    }
    setTimeout(() => {
      sE.flushSync(() => {
        F((me) => {
          let de = me.findIndex((Pe) => Pe.id === ee.id);
          return de !== -1 ? [...me.slice(0, de), { ...me[de], ...ee }, ...me.slice(de + 1)] : [ee, ...me];
        });
      });
    });
  }), []), pe.useEffect(() => {
    if (E !== "system") {
      Me(E);
      return;
    }
    E === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Me("dark") : Me("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: ee }) => {
      Me(ee ? "dark" : "light");
    });
  }, [E]), pe.useEffect(() => {
    Y.length <= 1 && ae(!1);
  }, [Y]), pe.useEffect(() => {
    let ee = (me) => {
      var de, Pe;
      y.every((tt) => me[tt] || me.code === tt) && (ae(!0), (de = Oe.current) == null || de.focus()), me.code === "Escape" && (document.activeElement === Oe.current || (Pe = Oe.current) != null && Pe.contains(document.activeElement)) && ae(!1);
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [y]), pe.useEffect(() => {
    if (Oe.current)
      return () => {
        Ke.current && (Ke.current.focus({ preventScroll: !0 }), Ke.current = null, be.current = !1);
      };
  }, [Oe.current]), Y.length ? pe.createElement("section", { "aria-label": `${V} ${he}`, tabIndex: -1 }, X.map((ee, me) => {
    var de;
    let [Pe, tt] = ee.split("-");
    return pe.createElement("ol", { key: ee, dir: _ === "auto" ? a9() : _, tabIndex: -1, ref: Oe, className: h, "data-sonner-toaster": !0, "data-theme": xe, "data-rich-colors": b, "data-y-position": Pe, "data-x-position": tt, style: { "--front-toast-height": `${(de = K[0]) == null ? void 0 : de.height}px`, "--offset": typeof k == "number" ? `${k}px` : k || LT, "--width": `${OT}px`, "--gap": `${Y9}px`, ...R }, onBlur: (lt) => {
      be.current && !lt.currentTarget.contains(lt.relatedTarget) && (be.current = !1, Ke.current && (Ke.current.focus({ preventScroll: !0 }), Ke.current = null));
    }, onFocus: (lt) => {
      lt.target instanceof HTMLElement && lt.target.dataset.dismissible === "false" || be.current || (be.current = !0, Ke.current = lt.relatedTarget);
    }, onMouseEnter: () => ae(!0), onMouseMove: () => ae(!0), onMouseLeave: () => {
      ye || ae(!1);
    }, onPointerDown: (lt) => {
      lt.target instanceof HTMLElement && lt.target.dataset.dismissible === "false" || we(!0);
    }, onPointerUp: () => we(!1) }, Y.filter((lt) => !lt.position && me === 0 || lt.position === ee).map((lt, Ot) => {
      var Bt;
      return pe.createElement(AT, { key: lt.id, index: Ot, toast: lt, duration: (Bt = L == null ? void 0 : L.duration) != null ? Bt : N, className: L == null ? void 0 : L.className, descriptionClassName: L == null ? void 0 : L.descriptionClassName, invert: d, visibleToasts: M, closeButton: x, interacting: ye, position: ee, style: L == null ? void 0 : L.style, unstyled: L == null ? void 0 : L.unstyled, classNames: L == null ? void 0 : L.classNames, cancelButtonStyle: L == null ? void 0 : L.cancelButtonStyle, actionButtonStyle: L == null ? void 0 : L.actionButtonStyle, removeToast: ot, toasts: Y, heights: K, setHeights: le, expandByDefault: C, gap: $, loadingIcon: P, expanded: ue });
    }));
  })) : null;
};
const HT = ({ ...u }) => {
  const { theme: d = "system" } = W4();
  return /* @__PURE__ */ ne(
    zT,
    {
      theme: d,
      className: "nxth-toaster nxth-group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800",
          description: "group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",
          actionButton: "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",
          cancelButton: "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400"
        }
      },
      ...u
    }
  );
}, UT = ({ className: u, ...d }) => /* @__PURE__ */ Cn("div", { role: "status", className: Sn(u), ...d, children: [
  /* @__PURE__ */ Cn(
    "svg",
    {
      "aria-hidden": "true",
      className: "nxth-w-8 nxth-h-8 nxth-mr-2 nxth-text-transparent nxth-animate-spin dark:nxth-text-primary-dark nxth-fill-primary",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ ne(
          "path",
          {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ ne(
          "path",
          {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ ne("span", { className: "nxth-sr-only", children: "Loading..." })
] });
function $T(u, d = globalThis == null ? void 0 : globalThis.document) {
  const f = zf(u);
  Pt(() => {
    const y = (C) => {
      C.key === "Escape" && f(C);
    };
    return d.addEventListener("keydown", y), () => d.removeEventListener("keydown", y);
  }, [
    f,
    d
  ]);
}
const N4 = "dismissableLayer.update", VT = "dismissableLayer.pointerDownOutside", FT = "dismissableLayer.focusOutside";
let i9;
const PT = /* @__PURE__ */ i2({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), BT = /* @__PURE__ */ Rr((u, d) => {
  var f;
  const { disableOutsidePointerEvents: y = !1, onEscapeKeyDown: C, onPointerDownOutside: x, onFocusOutside: h, onInteractOutside: k, onDismiss: E, ...b } = u, N = d2(PT), [R, M] = pr(null), L = (f = R == null ? void 0 : R.ownerDocument) !== null && f !== void 0 ? f : globalThis == null ? void 0 : globalThis.document, [, _] = pr({}), $ = Ns(
    d,
    (ae) => M(ae)
  ), P = Array.from(N.layers), [V] = [
    ...N.layersWithOutsidePointerEventsDisabled
  ].slice(-1), Y = P.indexOf(V), F = R ? P.indexOf(R) : -1, X = N.layersWithOutsidePointerEventsDisabled.size > 0, K = F >= Y, le = jT((ae) => {
    const ye = ae.target, we = [
      ...N.branches
    ].some(
      (xe) => xe.contains(ye)
    );
    !K || we || (x == null || x(ae), k == null || k(ae), ae.defaultPrevented || E == null || E());
  }, L), ue = IT((ae) => {
    const ye = ae.target;
    [
      ...N.branches
    ].some(
      (xe) => xe.contains(ye)
    ) || (h == null || h(ae), k == null || k(ae), ae.defaultPrevented || E == null || E());
  }, L);
  return $T((ae) => {
    F === N.layers.size - 1 && (C == null || C(ae), !ae.defaultPrevented && E && (ae.preventDefault(), E()));
  }, L), Pt(() => {
    if (R)
      return y && (N.layersWithOutsidePointerEventsDisabled.size === 0 && (i9 = L.body.style.pointerEvents, L.body.style.pointerEvents = "none"), N.layersWithOutsidePointerEventsDisabled.add(R)), N.layers.add(R), o9(), () => {
        y && N.layersWithOutsidePointerEventsDisabled.size === 1 && (L.body.style.pointerEvents = i9);
      };
  }, [
    R,
    L,
    y,
    N
  ]), Pt(() => () => {
    R && (N.layers.delete(R), N.layersWithOutsidePointerEventsDisabled.delete(R), o9());
  }, [
    R,
    N
  ]), Pt(() => {
    const ae = () => _({});
    return document.addEventListener(N4, ae), () => document.removeEventListener(N4, ae);
  }, []), /* @__PURE__ */ St(mu.div, nr({}, b, {
    ref: $,
    style: {
      pointerEvents: X ? K ? "auto" : "none" : void 0,
      ...u.style
    },
    onFocusCapture: _i(u.onFocusCapture, ue.onFocusCapture),
    onBlurCapture: _i(u.onBlurCapture, ue.onBlurCapture),
    onPointerDownCapture: _i(u.onPointerDownCapture, le.onPointerDownCapture)
  }));
});
function jT(u, d = globalThis == null ? void 0 : globalThis.document) {
  const f = zf(u), y = xn(!1), C = xn(() => {
  });
  return Pt(() => {
    const x = (k) => {
      if (k.target && !y.current) {
        let b = function() {
          Z9(VT, f, E, {
            discrete: !0
          });
        };
        const E = {
          originalEvent: k
        };
        k.pointerType === "touch" ? (d.removeEventListener("click", C.current), C.current = b, d.addEventListener("click", C.current, {
          once: !0
        })) : b();
      } else
        d.removeEventListener("click", C.current);
      y.current = !1;
    }, h = window.setTimeout(() => {
      d.addEventListener("pointerdown", x);
    }, 0);
    return () => {
      window.clearTimeout(h), d.removeEventListener("pointerdown", x), d.removeEventListener("click", C.current);
    };
  }, [
    d,
    f
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => y.current = !0
  };
}
function IT(u, d = globalThis == null ? void 0 : globalThis.document) {
  const f = zf(u), y = xn(!1);
  return Pt(() => {
    const C = (x) => {
      x.target && !y.current && Z9(FT, f, {
        originalEvent: x
      }, {
        discrete: !1
      });
    };
    return d.addEventListener("focusin", C), () => d.removeEventListener("focusin", C);
  }, [
    d,
    f
  ]), {
    onFocusCapture: () => y.current = !0,
    onBlurCapture: () => y.current = !1
  };
}
function o9() {
  const u = new CustomEvent(N4);
  document.dispatchEvent(u);
}
function Z9(u, d, f, { discrete: y }) {
  const C = f.originalEvent.target, x = new CustomEvent(u, {
    bubbles: !1,
    cancelable: !0,
    detail: f
  });
  d && C.addEventListener(u, d, {
    once: !0
  }), y ? pE(C, x) : C.dispatchEvent(x);
}
const YT = Fe.useId || (() => {
});
let ZT = 0;
function QT(u) {
  const [d, f] = Fe.useState(YT());
  return _f(() => {
    u || f(
      (y) => y ?? String(ZT++)
    );
  }, [
    u
  ]), u || (d ? `radix-${d}` : "");
}
const WT = ["top", "right", "bottom", "left"], pu = Math.min, Va = Math.max, Nv = Math.round, Ev = Math.floor, vu = (u) => ({
  x: u,
  y: u
}), GT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, XT = {
  start: "end",
  end: "start"
};
function _4(u, d, f) {
  return Va(u, pu(d, f));
}
function ll(u, d) {
  return typeof u == "function" ? u(d) : u;
}
function ul(u) {
  return u.split("-")[0];
}
function Uf(u) {
  return u.split("-")[1];
}
function K4(u) {
  return u === "x" ? "y" : "x";
}
function q4(u) {
  return u === "y" ? "height" : "width";
}
function $f(u) {
  return ["top", "bottom"].includes(ul(u)) ? "y" : "x";
}
function J4(u) {
  return K4($f(u));
}
function KT(u, d, f) {
  f === void 0 && (f = !1);
  const y = Uf(u), C = J4(u), x = q4(C);
  let h = C === "x" ? y === (f ? "end" : "start") ? "right" : "left" : y === "start" ? "bottom" : "top";
  return d.reference[x] > d.floating[x] && (h = _v(h)), [h, _v(h)];
}
function qT(u) {
  const d = _v(u);
  return [A4(u), d, A4(d)];
}
function A4(u) {
  return u.replace(/start|end/g, (d) => XT[d]);
}
function JT(u, d, f) {
  const y = ["left", "right"], C = ["right", "left"], x = ["top", "bottom"], h = ["bottom", "top"];
  switch (u) {
    case "top":
    case "bottom":
      return f ? d ? C : y : d ? y : C;
    case "left":
    case "right":
      return d ? x : h;
    default:
      return [];
  }
}
function eR(u, d, f, y) {
  const C = Uf(u);
  let x = JT(ul(u), f === "start", y);
  return C && (x = x.map((h) => h + "-" + C), d && (x = x.concat(x.map(A4)))), x;
}
function _v(u) {
  return u.replace(/left|right|bottom|top/g, (d) => GT[d]);
}
function tR(u) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...u
  };
}
function Q9(u) {
  return typeof u != "number" ? tR(u) : {
    top: u,
    right: u,
    bottom: u,
    left: u
  };
}
function Av(u) {
  return {
    ...u,
    top: u.y,
    left: u.x,
    right: u.x + u.width,
    bottom: u.y + u.height
  };
}
function l9(u, d, f) {
  let {
    reference: y,
    floating: C
  } = u;
  const x = $f(d), h = J4(d), k = q4(h), E = ul(d), b = x === "y", N = y.x + y.width / 2 - C.width / 2, R = y.y + y.height / 2 - C.height / 2, M = y[k] / 2 - C[k] / 2;
  let L;
  switch (E) {
    case "top":
      L = {
        x: N,
        y: y.y - C.height
      };
      break;
    case "bottom":
      L = {
        x: N,
        y: y.y + y.height
      };
      break;
    case "right":
      L = {
        x: y.x + y.width,
        y: R
      };
      break;
    case "left":
      L = {
        x: y.x - C.width,
        y: R
      };
      break;
    default:
      L = {
        x: y.x,
        y: y.y
      };
  }
  switch (Uf(d)) {
    case "start":
      L[h] -= M * (f && b ? -1 : 1);
      break;
    case "end":
      L[h] += M * (f && b ? -1 : 1);
      break;
  }
  return L;
}
const nR = async (u, d, f) => {
  const {
    placement: y = "bottom",
    strategy: C = "absolute",
    middleware: x = [],
    platform: h
  } = f, k = x.filter(Boolean), E = await (h.isRTL == null ? void 0 : h.isRTL(d));
  let b = await h.getElementRects({
    reference: u,
    floating: d,
    strategy: C
  }), {
    x: N,
    y: R
  } = l9(b, y, E), M = y, L = {}, _ = 0;
  for (let $ = 0; $ < k.length; $++) {
    const {
      name: P,
      fn: V
    } = k[$], {
      x: Y,
      y: F,
      data: X,
      reset: K
    } = await V({
      x: N,
      y: R,
      initialPlacement: y,
      placement: M,
      strategy: C,
      middlewareData: L,
      rects: b,
      platform: h,
      elements: {
        reference: u,
        floating: d
      }
    });
    if (N = Y ?? N, R = F ?? R, L = {
      ...L,
      [P]: {
        ...L[P],
        ...X
      }
    }, K && _ <= 50) {
      _++, typeof K == "object" && (K.placement && (M = K.placement), K.rects && (b = K.rects === !0 ? await h.getElementRects({
        reference: u,
        floating: d,
        strategy: C
      }) : K.rects), {
        x: N,
        y: R
      } = l9(b, M, E)), $ = -1;
      continue;
    }
  }
  return {
    x: N,
    y: R,
    placement: M,
    strategy: C,
    middlewareData: L
  };
};
async function s2(u, d) {
  var f;
  d === void 0 && (d = {});
  const {
    x: y,
    y: C,
    platform: x,
    rects: h,
    elements: k,
    strategy: E
  } = u, {
    boundary: b = "clippingAncestors",
    rootBoundary: N = "viewport",
    elementContext: R = "floating",
    altBoundary: M = !1,
    padding: L = 0
  } = ll(d, u), _ = Q9(L), P = k[M ? R === "floating" ? "reference" : "floating" : R], V = Av(await x.getClippingRect({
    element: (f = await (x.isElement == null ? void 0 : x.isElement(P))) == null || f ? P : P.contextElement || await (x.getDocumentElement == null ? void 0 : x.getDocumentElement(k.floating)),
    boundary: b,
    rootBoundary: N,
    strategy: E
  })), Y = R === "floating" ? {
    ...h.floating,
    x: y,
    y: C
  } : h.reference, F = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(k.floating)), X = await (x.isElement == null ? void 0 : x.isElement(F)) ? await (x.getScale == null ? void 0 : x.getScale(F)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, K = Av(x.convertOffsetParentRelativeRectToViewportRelativeRect ? await x.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: Y,
    offsetParent: F,
    strategy: E
  }) : Y);
  return {
    top: (V.top - K.top + _.top) / X.y,
    bottom: (K.bottom - V.bottom + _.bottom) / X.y,
    left: (V.left - K.left + _.left) / X.x,
    right: (K.right - V.right + _.right) / X.x
  };
}
const rR = (u) => ({
  name: "arrow",
  options: u,
  async fn(d) {
    const {
      x: f,
      y,
      placement: C,
      rects: x,
      platform: h,
      elements: k,
      middlewareData: E
    } = d, {
      element: b,
      padding: N = 0
    } = ll(u, d) || {};
    if (b == null)
      return {};
    const R = Q9(N), M = {
      x: f,
      y
    }, L = J4(C), _ = q4(L), $ = await h.getDimensions(b), P = L === "y", V = P ? "top" : "left", Y = P ? "bottom" : "right", F = P ? "clientHeight" : "clientWidth", X = x.reference[_] + x.reference[L] - M[L] - x.floating[_], K = M[L] - x.reference[L], le = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(b));
    let ue = le ? le[F] : 0;
    (!ue || !await (h.isElement == null ? void 0 : h.isElement(le))) && (ue = k.floating[F] || x.floating[_]);
    const ae = X / 2 - K / 2, ye = ue / 2 - $[_] / 2 - 1, we = pu(R[V], ye), xe = pu(R[Y], ye), Me = we, Oe = ue - $[_] - xe, he = ue / 2 - $[_] / 2 + ae, Ke = _4(Me, he, Oe), be = !E.arrow && Uf(C) != null && he != Ke && x.reference[_] / 2 - (he < Me ? we : xe) - $[_] / 2 < 0, ot = be ? he < Me ? he - Me : he - Oe : 0;
    return {
      [L]: M[L] + ot,
      data: {
        [L]: Ke,
        centerOffset: he - Ke - ot,
        ...be && {
          alignmentOffset: ot
        }
      },
      reset: be
    };
  }
}), aR = function(u) {
  return u === void 0 && (u = {}), {
    name: "flip",
    options: u,
    async fn(d) {
      var f, y;
      const {
        placement: C,
        middlewareData: x,
        rects: h,
        initialPlacement: k,
        platform: E,
        elements: b
      } = d, {
        mainAxis: N = !0,
        crossAxis: R = !0,
        fallbackPlacements: M,
        fallbackStrategy: L = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: $ = !0,
        ...P
      } = ll(u, d);
      if ((f = x.arrow) != null && f.alignmentOffset)
        return {};
      const V = ul(C), Y = ul(k) === k, F = await (E.isRTL == null ? void 0 : E.isRTL(b.floating)), X = M || (Y || !$ ? [_v(k)] : qT(k));
      !M && _ !== "none" && X.push(...eR(k, $, _, F));
      const K = [k, ...X], le = await s2(d, P), ue = [];
      let ae = ((y = x.flip) == null ? void 0 : y.overflows) || [];
      if (N && ue.push(le[V]), R) {
        const Me = KT(C, h, F);
        ue.push(le[Me[0]], le[Me[1]]);
      }
      if (ae = [...ae, {
        placement: C,
        overflows: ue
      }], !ue.every((Me) => Me <= 0)) {
        var ye, we;
        const Me = (((ye = x.flip) == null ? void 0 : ye.index) || 0) + 1, Oe = K[Me];
        if (Oe)
          return {
            data: {
              index: Me,
              overflows: ae
            },
            reset: {
              placement: Oe
            }
          };
        let he = (we = ae.filter((Ke) => Ke.overflows[0] <= 0).sort((Ke, be) => Ke.overflows[1] - be.overflows[1])[0]) == null ? void 0 : we.placement;
        if (!he)
          switch (L) {
            case "bestFit": {
              var xe;
              const Ke = (xe = ae.map((be) => [be.placement, be.overflows.filter((ot) => ot > 0).reduce((ot, ee) => ot + ee, 0)]).sort((be, ot) => be[1] - ot[1])[0]) == null ? void 0 : xe[0];
              Ke && (he = Ke);
              break;
            }
            case "initialPlacement":
              he = k;
              break;
          }
        if (C !== he)
          return {
            reset: {
              placement: he
            }
          };
      }
      return {};
    }
  };
};
function u9(u, d) {
  return {
    top: u.top - d.height,
    right: u.right - d.width,
    bottom: u.bottom - d.height,
    left: u.left - d.width
  };
}
function s9(u) {
  return WT.some((d) => u[d] >= 0);
}
const iR = function(u) {
  return u === void 0 && (u = {}), {
    name: "hide",
    options: u,
    async fn(d) {
      const {
        rects: f
      } = d, {
        strategy: y = "referenceHidden",
        ...C
      } = ll(u, d);
      switch (y) {
        case "referenceHidden": {
          const x = await s2(d, {
            ...C,
            elementContext: "reference"
          }), h = u9(x, f.reference);
          return {
            data: {
              referenceHiddenOffsets: h,
              referenceHidden: s9(h)
            }
          };
        }
        case "escaped": {
          const x = await s2(d, {
            ...C,
            altBoundary: !0
          }), h = u9(x, f.floating);
          return {
            data: {
              escapedOffsets: h,
              escaped: s9(h)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function oR(u, d) {
  const {
    placement: f,
    platform: y,
    elements: C
  } = u, x = await (y.isRTL == null ? void 0 : y.isRTL(C.floating)), h = ul(f), k = Uf(f), E = $f(f) === "y", b = ["left", "top"].includes(h) ? -1 : 1, N = x && E ? -1 : 1, R = ll(d, u);
  let {
    mainAxis: M,
    crossAxis: L,
    alignmentAxis: _
  } = typeof R == "number" ? {
    mainAxis: R,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...R
  };
  return k && typeof _ == "number" && (L = k === "end" ? _ * -1 : _), E ? {
    x: L * N,
    y: M * b
  } : {
    x: M * b,
    y: L * N
  };
}
const lR = function(u) {
  return u === void 0 && (u = 0), {
    name: "offset",
    options: u,
    async fn(d) {
      var f, y;
      const {
        x: C,
        y: x,
        placement: h,
        middlewareData: k
      } = d, E = await oR(d, u);
      return h === ((f = k.offset) == null ? void 0 : f.placement) && (y = k.arrow) != null && y.alignmentOffset ? {} : {
        x: C + E.x,
        y: x + E.y,
        data: {
          ...E,
          placement: h
        }
      };
    }
  };
}, uR = function(u) {
  return u === void 0 && (u = {}), {
    name: "shift",
    options: u,
    async fn(d) {
      const {
        x: f,
        y,
        placement: C
      } = d, {
        mainAxis: x = !0,
        crossAxis: h = !1,
        limiter: k = {
          fn: (P) => {
            let {
              x: V,
              y: Y
            } = P;
            return {
              x: V,
              y: Y
            };
          }
        },
        ...E
      } = ll(u, d), b = {
        x: f,
        y
      }, N = await s2(d, E), R = $f(ul(C)), M = K4(R);
      let L = b[M], _ = b[R];
      if (x) {
        const P = M === "y" ? "top" : "left", V = M === "y" ? "bottom" : "right", Y = L + N[P], F = L - N[V];
        L = _4(Y, L, F);
      }
      if (h) {
        const P = R === "y" ? "top" : "left", V = R === "y" ? "bottom" : "right", Y = _ + N[P], F = _ - N[V];
        _ = _4(Y, _, F);
      }
      const $ = k.fn({
        ...d,
        [M]: L,
        [R]: _
      });
      return {
        ...$,
        data: {
          x: $.x - f,
          y: $.y - y
        }
      };
    }
  };
}, sR = function(u) {
  return u === void 0 && (u = {}), {
    options: u,
    fn(d) {
      const {
        x: f,
        y,
        placement: C,
        rects: x,
        middlewareData: h
      } = d, {
        offset: k = 0,
        mainAxis: E = !0,
        crossAxis: b = !0
      } = ll(u, d), N = {
        x: f,
        y
      }, R = $f(C), M = K4(R);
      let L = N[M], _ = N[R];
      const $ = ll(k, d), P = typeof $ == "number" ? {
        mainAxis: $,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...$
      };
      if (E) {
        const F = M === "y" ? "height" : "width", X = x.reference[M] - x.floating[F] + P.mainAxis, K = x.reference[M] + x.reference[F] - P.mainAxis;
        L < X ? L = X : L > K && (L = K);
      }
      if (b) {
        var V, Y;
        const F = M === "y" ? "width" : "height", X = ["top", "left"].includes(ul(C)), K = x.reference[R] - x.floating[F] + (X && ((V = h.offset) == null ? void 0 : V[R]) || 0) + (X ? 0 : P.crossAxis), le = x.reference[R] + x.reference[F] + (X ? 0 : ((Y = h.offset) == null ? void 0 : Y[R]) || 0) - (X ? P.crossAxis : 0);
        _ < K ? _ = K : _ > le && (_ = le);
      }
      return {
        [M]: L,
        [R]: _
      };
    }
  };
}, cR = function(u) {
  return u === void 0 && (u = {}), {
    name: "size",
    options: u,
    async fn(d) {
      const {
        placement: f,
        rects: y,
        platform: C,
        elements: x
      } = d, {
        apply: h = () => {
        },
        ...k
      } = ll(u, d), E = await s2(d, k), b = ul(f), N = Uf(f), R = $f(f) === "y", {
        width: M,
        height: L
      } = y.floating;
      let _, $;
      b === "top" || b === "bottom" ? (_ = b, $ = N === (await (C.isRTL == null ? void 0 : C.isRTL(x.floating)) ? "start" : "end") ? "left" : "right") : ($ = b, _ = N === "end" ? "top" : "bottom");
      const P = L - E[_], V = M - E[$], Y = !d.middlewareData.shift;
      let F = P, X = V;
      if (R) {
        const le = M - E.left - E.right;
        X = N || Y ? pu(V, le) : le;
      } else {
        const le = L - E.top - E.bottom;
        F = N || Y ? pu(P, le) : le;
      }
      if (Y && !N) {
        const le = Va(E.left, 0), ue = Va(E.right, 0), ae = Va(E.top, 0), ye = Va(E.bottom, 0);
        R ? X = M - 2 * (le !== 0 || ue !== 0 ? le + ue : Va(E.left, E.right)) : F = L - 2 * (ae !== 0 || ye !== 0 ? ae + ye : Va(E.top, E.bottom));
      }
      await h({
        ...d,
        availableWidth: X,
        availableHeight: F
      });
      const K = await C.getDimensions(x.floating);
      return M !== K.width || L !== K.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function hu(u) {
  return W9(u) ? (u.nodeName || "").toLowerCase() : "#document";
}
function Fa(u) {
  var d;
  return (u == null || (d = u.ownerDocument) == null ? void 0 : d.defaultView) || window;
}
function cl(u) {
  var d;
  return (d = (W9(u) ? u.ownerDocument : u.document) || window.document) == null ? void 0 : d.documentElement;
}
function W9(u) {
  return u instanceof Node || u instanceof Fa(u).Node;
}
function sl(u) {
  return u instanceof Element || u instanceof Fa(u).Element;
}
function mo(u) {
  return u instanceof HTMLElement || u instanceof Fa(u).HTMLElement;
}
function c9(u) {
  return typeof ShadowRoot > "u" ? !1 : u instanceof ShadowRoot || u instanceof Fa(u).ShadowRoot;
}
function m2(u) {
  const {
    overflow: d,
    overflowX: f,
    overflowY: y,
    display: C
  } = ni(u);
  return /auto|scroll|overlay|hidden|clip/.test(d + y + f) && !["inline", "contents"].includes(C);
}
function fR(u) {
  return ["table", "td", "th"].includes(hu(u));
}
function em(u) {
  const d = tm(), f = ni(u);
  return f.transform !== "none" || f.perspective !== "none" || (f.containerType ? f.containerType !== "normal" : !1) || !d && (f.backdropFilter ? f.backdropFilter !== "none" : !1) || !d && (f.filter ? f.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((y) => (f.willChange || "").includes(y)) || ["paint", "layout", "strict", "content"].some((y) => (f.contain || "").includes(y));
}
function dR(u) {
  let d = Af(u);
  for (; mo(d) && !Pv(d); ) {
    if (em(d))
      return d;
    d = Af(d);
  }
  return null;
}
function tm() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pv(u) {
  return ["html", "body", "#document"].includes(hu(u));
}
function ni(u) {
  return Fa(u).getComputedStyle(u);
}
function Bv(u) {
  return sl(u) ? {
    scrollLeft: u.scrollLeft,
    scrollTop: u.scrollTop
  } : {
    scrollLeft: u.pageXOffset,
    scrollTop: u.pageYOffset
  };
}
function Af(u) {
  if (hu(u) === "html")
    return u;
  const d = (
    // Step into the shadow DOM of the parent of a slotted node.
    u.assignedSlot || // DOM Element detected.
    u.parentNode || // ShadowRoot detected.
    c9(u) && u.host || // Fallback.
    cl(u)
  );
  return c9(d) ? d.host : d;
}
function G9(u) {
  const d = Af(u);
  return Pv(d) ? u.ownerDocument ? u.ownerDocument.body : u.body : mo(d) && m2(d) ? d : G9(d);
}
function c2(u, d, f) {
  var y;
  d === void 0 && (d = []), f === void 0 && (f = !0);
  const C = G9(u), x = C === ((y = u.ownerDocument) == null ? void 0 : y.body), h = Fa(C);
  return x ? d.concat(h, h.visualViewport || [], m2(C) ? C : [], h.frameElement && f ? c2(h.frameElement) : []) : d.concat(C, c2(C, [], f));
}
function X9(u) {
  const d = ni(u);
  let f = parseFloat(d.width) || 0, y = parseFloat(d.height) || 0;
  const C = mo(u), x = C ? u.offsetWidth : f, h = C ? u.offsetHeight : y, k = Nv(f) !== x || Nv(y) !== h;
  return k && (f = x, y = h), {
    width: f,
    height: y,
    $: k
  };
}
function nm(u) {
  return sl(u) ? u : u.contextElement;
}
function Nf(u) {
  const d = nm(u);
  if (!mo(d))
    return vu(1);
  const f = d.getBoundingClientRect(), {
    width: y,
    height: C,
    $: x
  } = X9(d);
  let h = (x ? Nv(f.width) : f.width) / y, k = (x ? Nv(f.height) : f.height) / C;
  return (!h || !Number.isFinite(h)) && (h = 1), (!k || !Number.isFinite(k)) && (k = 1), {
    x: h,
    y: k
  };
}
const pR = /* @__PURE__ */ vu(0);
function K9(u) {
  const d = Fa(u);
  return !tm() || !d.visualViewport ? pR : {
    x: d.visualViewport.offsetLeft,
    y: d.visualViewport.offsetTop
  };
}
function vR(u, d, f) {
  return d === void 0 && (d = !1), !f || d && f !== Fa(u) ? !1 : d;
}
function Os(u, d, f, y) {
  d === void 0 && (d = !1), f === void 0 && (f = !1);
  const C = u.getBoundingClientRect(), x = nm(u);
  let h = vu(1);
  d && (y ? sl(y) && (h = Nf(y)) : h = Nf(u));
  const k = vR(x, f, y) ? K9(x) : vu(0);
  let E = (C.left + k.x) / h.x, b = (C.top + k.y) / h.y, N = C.width / h.x, R = C.height / h.y;
  if (x) {
    const M = Fa(x), L = y && sl(y) ? Fa(y) : y;
    let _ = M.frameElement;
    for (; _ && y && L !== M; ) {
      const $ = Nf(_), P = _.getBoundingClientRect(), V = ni(_), Y = P.left + (_.clientLeft + parseFloat(V.paddingLeft)) * $.x, F = P.top + (_.clientTop + parseFloat(V.paddingTop)) * $.y;
      E *= $.x, b *= $.y, N *= $.x, R *= $.y, E += Y, b += F, _ = Fa(_).frameElement;
    }
  }
  return Av({
    width: N,
    height: R,
    x: E,
    y: b
  });
}
function hR(u) {
  let {
    rect: d,
    offsetParent: f,
    strategy: y
  } = u;
  const C = mo(f), x = cl(f);
  if (f === x)
    return d;
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  }, k = vu(1);
  const E = vu(0);
  if ((C || !C && y !== "fixed") && ((hu(f) !== "body" || m2(x)) && (h = Bv(f)), mo(f))) {
    const b = Os(f);
    k = Nf(f), E.x = b.x + f.clientLeft, E.y = b.y + f.clientTop;
  }
  return {
    width: d.width * k.x,
    height: d.height * k.y,
    x: d.x * k.x - h.scrollLeft * k.x + E.x,
    y: d.y * k.y - h.scrollTop * k.y + E.y
  };
}
function mR(u) {
  return Array.from(u.getClientRects());
}
function q9(u) {
  return Os(cl(u)).left + Bv(u).scrollLeft;
}
function yR(u) {
  const d = cl(u), f = Bv(u), y = u.ownerDocument.body, C = Va(d.scrollWidth, d.clientWidth, y.scrollWidth, y.clientWidth), x = Va(d.scrollHeight, d.clientHeight, y.scrollHeight, y.clientHeight);
  let h = -f.scrollLeft + q9(u);
  const k = -f.scrollTop;
  return ni(y).direction === "rtl" && (h += Va(d.clientWidth, y.clientWidth) - C), {
    width: C,
    height: x,
    x: h,
    y: k
  };
}
function gR(u, d) {
  const f = Fa(u), y = cl(u), C = f.visualViewport;
  let x = y.clientWidth, h = y.clientHeight, k = 0, E = 0;
  if (C) {
    x = C.width, h = C.height;
    const b = tm();
    (!b || b && d === "fixed") && (k = C.offsetLeft, E = C.offsetTop);
  }
  return {
    width: x,
    height: h,
    x: k,
    y: E
  };
}
function CR(u, d) {
  const f = Os(u, !0, d === "fixed"), y = f.top + u.clientTop, C = f.left + u.clientLeft, x = mo(u) ? Nf(u) : vu(1), h = u.clientWidth * x.x, k = u.clientHeight * x.y, E = C * x.x, b = y * x.y;
  return {
    width: h,
    height: k,
    x: E,
    y: b
  };
}
function f9(u, d, f) {
  let y;
  if (d === "viewport")
    y = gR(u, f);
  else if (d === "document")
    y = yR(cl(u));
  else if (sl(d))
    y = CR(d, f);
  else {
    const C = K9(u);
    y = {
      ...d,
      x: d.x - C.x,
      y: d.y - C.y
    };
  }
  return Av(y);
}
function J9(u, d) {
  const f = Af(u);
  return f === d || !sl(f) || Pv(f) ? !1 : ni(f).position === "fixed" || J9(f, d);
}
function xR(u, d) {
  const f = d.get(u);
  if (f)
    return f;
  let y = c2(u, [], !1).filter((k) => sl(k) && hu(k) !== "body"), C = null;
  const x = ni(u).position === "fixed";
  let h = x ? Af(u) : u;
  for (; sl(h) && !Pv(h); ) {
    const k = ni(h), E = em(h);
    !E && k.position === "fixed" && (C = null), (x ? !E && !C : !E && k.position === "static" && !!C && ["absolute", "fixed"].includes(C.position) || m2(h) && !E && J9(u, h)) ? y = y.filter((N) => N !== h) : C = k, h = Af(h);
  }
  return d.set(u, y), y;
}
function SR(u) {
  let {
    element: d,
    boundary: f,
    rootBoundary: y,
    strategy: C
  } = u;
  const h = [...f === "clippingAncestors" ? xR(d, this._c) : [].concat(f), y], k = h[0], E = h.reduce((b, N) => {
    const R = f9(d, N, C);
    return b.top = Va(R.top, b.top), b.right = pu(R.right, b.right), b.bottom = pu(R.bottom, b.bottom), b.left = Va(R.left, b.left), b;
  }, f9(d, k, C));
  return {
    width: E.right - E.left,
    height: E.bottom - E.top,
    x: E.left,
    y: E.top
  };
}
function wR(u) {
  const {
    width: d,
    height: f
  } = X9(u);
  return {
    width: d,
    height: f
  };
}
function bR(u, d, f) {
  const y = mo(d), C = cl(d), x = f === "fixed", h = Os(u, !0, x, d);
  let k = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const E = vu(0);
  if (y || !y && !x)
    if ((hu(d) !== "body" || m2(C)) && (k = Bv(d)), y) {
      const b = Os(d, !0, x, d);
      E.x = b.x + d.clientLeft, E.y = b.y + d.clientTop;
    } else
      C && (E.x = q9(C));
  return {
    x: h.left + k.scrollLeft - E.x,
    y: h.top + k.scrollTop - E.y,
    width: h.width,
    height: h.height
  };
}
function d9(u, d) {
  return !mo(u) || ni(u).position === "fixed" ? null : d ? d(u) : u.offsetParent;
}
function ey(u, d) {
  const f = Fa(u);
  if (!mo(u))
    return f;
  let y = d9(u, d);
  for (; y && fR(y) && ni(y).position === "static"; )
    y = d9(y, d);
  return y && (hu(y) === "html" || hu(y) === "body" && ni(y).position === "static" && !em(y)) ? f : y || dR(u) || f;
}
const ER = async function(u) {
  let {
    reference: d,
    floating: f,
    strategy: y
  } = u;
  const C = this.getOffsetParent || ey, x = this.getDimensions;
  return {
    reference: bR(d, await C(f), y),
    floating: {
      x: 0,
      y: 0,
      ...await x(f)
    }
  };
};
function TR(u) {
  return ni(u).direction === "rtl";
}
const RR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hR,
  getDocumentElement: cl,
  getClippingRect: SR,
  getOffsetParent: ey,
  getElementRects: ER,
  getClientRects: mR,
  getDimensions: wR,
  getScale: Nf,
  isElement: sl,
  isRTL: TR
};
function kR(u, d) {
  let f = null, y;
  const C = cl(u);
  function x() {
    clearTimeout(y), f && f.disconnect(), f = null;
  }
  function h(k, E) {
    k === void 0 && (k = !1), E === void 0 && (E = 1), x();
    const {
      left: b,
      top: N,
      width: R,
      height: M
    } = u.getBoundingClientRect();
    if (k || d(), !R || !M)
      return;
    const L = Ev(N), _ = Ev(C.clientWidth - (b + R)), $ = Ev(C.clientHeight - (N + M)), P = Ev(b), Y = {
      rootMargin: -L + "px " + -_ + "px " + -$ + "px " + -P + "px",
      threshold: Va(0, pu(1, E)) || 1
    };
    let F = !0;
    function X(K) {
      const le = K[0].intersectionRatio;
      if (le !== E) {
        if (!F)
          return h();
        le ? h(!1, le) : y = setTimeout(() => {
          h(!1, 1e-7);
        }, 100);
      }
      F = !1;
    }
    try {
      f = new IntersectionObserver(X, {
        ...Y,
        // Handle <iframe>s
        root: C.ownerDocument
      });
    } catch {
      f = new IntersectionObserver(X, Y);
    }
    f.observe(u);
  }
  return h(!0), x;
}
function DR(u, d, f, y) {
  y === void 0 && (y = {});
  const {
    ancestorScroll: C = !0,
    ancestorResize: x = !0,
    elementResize: h = typeof ResizeObserver == "function",
    layoutShift: k = typeof IntersectionObserver == "function",
    animationFrame: E = !1
  } = y, b = nm(u), N = C || x ? [...b ? c2(b) : [], ...c2(d)] : [];
  N.forEach((V) => {
    C && V.addEventListener("scroll", f, {
      passive: !0
    }), x && V.addEventListener("resize", f);
  });
  const R = b && k ? kR(b, f) : null;
  let M = -1, L = null;
  h && (L = new ResizeObserver((V) => {
    let [Y] = V;
    Y && Y.target === b && L && (L.unobserve(d), cancelAnimationFrame(M), M = requestAnimationFrame(() => {
      L && L.observe(d);
    })), f();
  }), b && !E && L.observe(b), L.observe(d));
  let _, $ = E ? Os(u) : null;
  E && P();
  function P() {
    const V = Os(u);
    $ && (V.x !== $.x || V.y !== $.y || V.width !== $.width || V.height !== $.height) && f(), $ = V, _ = requestAnimationFrame(P);
  }
  return f(), () => {
    N.forEach((V) => {
      C && V.removeEventListener("scroll", f), x && V.removeEventListener("resize", f);
    }), R && R(), L && L.disconnect(), L = null, E && cancelAnimationFrame(_);
  };
}
const LR = uR, MR = aR, OR = cR, NR = iR, p9 = rR, _R = sR, AR = (u, d, f) => {
  const y = /* @__PURE__ */ new Map(), C = {
    platform: RR,
    ...f
  }, x = {
    ...C.platform,
    _c: y
  };
  return nR(u, d, {
    ...C,
    platform: x
  });
}, zR = (u) => {
  function d(f) {
    return {}.hasOwnProperty.call(f, "current");
  }
  return {
    name: "arrow",
    options: u,
    fn(f) {
      const {
        element: y,
        padding: C
      } = typeof u == "function" ? u(f) : u;
      return y && d(y) ? y.current != null ? p9({
        element: y.current,
        padding: C
      }).fn(f) : {} : y ? p9({
        element: y,
        padding: C
      }).fn(f) : {};
    }
  };
};
var kv = typeof document < "u" ? g9 : Pt;
function zv(u, d) {
  if (u === d)
    return !0;
  if (typeof u != typeof d)
    return !1;
  if (typeof u == "function" && u.toString() === d.toString())
    return !0;
  let f, y, C;
  if (u && d && typeof u == "object") {
    if (Array.isArray(u)) {
      if (f = u.length, f != d.length)
        return !1;
      for (y = f; y-- !== 0; )
        if (!zv(u[y], d[y]))
          return !1;
      return !0;
    }
    if (C = Object.keys(u), f = C.length, f !== Object.keys(d).length)
      return !1;
    for (y = f; y-- !== 0; )
      if (!{}.hasOwnProperty.call(d, C[y]))
        return !1;
    for (y = f; y-- !== 0; ) {
      const x = C[y];
      if (!(x === "_owner" && u.$$typeof) && !zv(u[x], d[x]))
        return !1;
    }
    return !0;
  }
  return u !== u && d !== d;
}
function ty(u) {
  return typeof window > "u" ? 1 : (u.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function v9(u, d) {
  const f = ty(u);
  return Math.round(d * f) / f;
}
function h9(u) {
  const d = Fe.useRef(u);
  return kv(() => {
    d.current = u;
  }), d;
}
function HR(u) {
  u === void 0 && (u = {});
  const {
    placement: d = "bottom",
    strategy: f = "absolute",
    middleware: y = [],
    platform: C,
    elements: {
      reference: x,
      floating: h
    } = {},
    transform: k = !0,
    whileElementsMounted: E,
    open: b
  } = u, [N, R] = Fe.useState({
    x: 0,
    y: 0,
    strategy: f,
    placement: d,
    middlewareData: {},
    isPositioned: !1
  }), [M, L] = Fe.useState(y);
  zv(M, y) || L(y);
  const [_, $] = Fe.useState(null), [P, V] = Fe.useState(null), Y = Fe.useCallback((be) => {
    be != le.current && (le.current = be, $(be));
  }, [$]), F = Fe.useCallback((be) => {
    be !== ue.current && (ue.current = be, V(be));
  }, [V]), X = x || _, K = h || P, le = Fe.useRef(null), ue = Fe.useRef(null), ae = Fe.useRef(N), ye = h9(E), we = h9(C), xe = Fe.useCallback(() => {
    if (!le.current || !ue.current)
      return;
    const be = {
      placement: d,
      strategy: f,
      middleware: M
    };
    we.current && (be.platform = we.current), AR(le.current, ue.current, be).then((ot) => {
      const ee = {
        ...ot,
        isPositioned: !0
      };
      Me.current && !zv(ae.current, ee) && (ae.current = ee, $v.flushSync(() => {
        R(ee);
      }));
    });
  }, [M, d, f, we]);
  kv(() => {
    b === !1 && ae.current.isPositioned && (ae.current.isPositioned = !1, R((be) => ({
      ...be,
      isPositioned: !1
    })));
  }, [b]);
  const Me = Fe.useRef(!1);
  kv(() => (Me.current = !0, () => {
    Me.current = !1;
  }), []), kv(() => {
    if (X && (le.current = X), K && (ue.current = K), X && K) {
      if (ye.current)
        return ye.current(X, K, xe);
      xe();
    }
  }, [X, K, xe, ye]);
  const Oe = Fe.useMemo(() => ({
    reference: le,
    floating: ue,
    setReference: Y,
    setFloating: F
  }), [Y, F]), he = Fe.useMemo(() => ({
    reference: X,
    floating: K
  }), [X, K]), Ke = Fe.useMemo(() => {
    const be = {
      position: f,
      left: 0,
      top: 0
    };
    if (!he.floating)
      return be;
    const ot = v9(he.floating, N.x), ee = v9(he.floating, N.y);
    return k ? {
      ...be,
      transform: "translate(" + ot + "px, " + ee + "px)",
      ...ty(he.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f,
      left: ot,
      top: ee
    };
  }, [f, k, he.floating, N.x, N.y]);
  return Fe.useMemo(() => ({
    ...N,
    update: xe,
    refs: Oe,
    elements: he,
    floatingStyles: Ke
  }), [N, xe, Oe, he, Ke]);
}
const ny = "Popper", [ry, ay] = I4(ny), [UR, iy] = ry(ny), $R = (u) => {
  const { __scopePopper: d, children: f } = u, [y, C] = pr(null);
  return /* @__PURE__ */ St(UR, {
    scope: d,
    anchor: y,
    onAnchorChange: C
  }, f);
}, VR = "PopperAnchor", FR = /* @__PURE__ */ Rr((u, d) => {
  const { __scopePopper: f, virtualRef: y, ...C } = u, x = iy(VR, f), h = xn(null), k = Ns(d, h);
  return Pt(() => {
    x.onAnchorChange((y == null ? void 0 : y.current) || h.current);
  }), y ? null : /* @__PURE__ */ St(mu.div, nr({}, C, {
    ref: k
  }));
}), oy = "PopperContent", [PR, Hk] = ry(oy), BR = /* @__PURE__ */ Rr((u, d) => {
  var f, y, C, x, h, k, E, b;
  const { __scopePopper: N, side: R = "bottom", sideOffset: M = 0, align: L = "center", alignOffset: _ = 0, arrowPadding: $ = 0, avoidCollisions: P = !0, collisionBoundary: V = [], collisionPadding: Y = 0, sticky: F = "partial", hideWhenDetached: X = !1, updatePositionStrategy: K = "optimized", onPlaced: le, ...ue } = u, ae = iy(oy, N), [ye, we] = pr(null), xe = Ns(
    d,
    (ft) => we(ft)
  ), [Me, Oe] = pr(null), he = L9(Me), Ke = (f = he == null ? void 0 : he.width) !== null && f !== void 0 ? f : 0, be = (y = he == null ? void 0 : he.height) !== null && y !== void 0 ? y : 0, ot = R + (L !== "center" ? "-" + L : ""), ee = typeof Y == "number" ? Y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...Y
  }, me = Array.isArray(V) ? V : [
    V
  ], de = me.length > 0, Pe = {
    padding: ee,
    boundary: me.filter(jR),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: de
  }, { refs: tt, floatingStyles: lt, placement: Ot, isPositioned: Bt, middlewareData: kt } = HR({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ot,
    whileElementsMounted: (...ft) => DR(...ft, {
      animationFrame: K === "always"
    }),
    elements: {
      reference: ae.anchor
    },
    middleware: [
      lR({
        mainAxis: M + be,
        alignmentAxis: _
      }),
      P && LR({
        mainAxis: !0,
        crossAxis: !1,
        limiter: F === "partial" ? _R() : void 0,
        ...Pe
      }),
      P && MR({
        ...Pe
      }),
      OR({
        ...Pe,
        apply: ({ elements: ft, rects: At, availableWidth: Dt, availableHeight: tn }) => {
          const { width: jt, height: jn } = At.reference, Kt = ft.floating.style;
          Kt.setProperty("--radix-popper-available-width", `${Dt}px`), Kt.setProperty("--radix-popper-available-height", `${tn}px`), Kt.setProperty("--radix-popper-anchor-width", `${jt}px`), Kt.setProperty("--radix-popper-anchor-height", `${jn}px`);
        }
      }),
      Me && zR({
        element: Me,
        padding: $
      }),
      IR({
        arrowWidth: Ke,
        arrowHeight: be
      }),
      X && NR({
        strategy: "referenceHidden",
        ...Pe
      })
    ]
  }), [_t, Tt] = ly(Ot), wt = zf(le);
  _f(() => {
    Bt && (wt == null || wt());
  }, [
    Bt,
    wt
  ]);
  const hn = (C = kt.arrow) === null || C === void 0 ? void 0 : C.x, ut = (x = kt.arrow) === null || x === void 0 ? void 0 : x.y, Se = ((h = kt.arrow) === null || h === void 0 ? void 0 : h.centerOffset) !== 0, [Ie, st] = pr();
  return _f(() => {
    ye && st(window.getComputedStyle(ye).zIndex);
  }, [
    ye
  ]), /* @__PURE__ */ St("div", {
    ref: tt.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...lt,
      transform: Bt ? lt.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ie,
      "--radix-popper-transform-origin": [
        (k = kt.transformOrigin) === null || k === void 0 ? void 0 : k.x,
        (E = kt.transformOrigin) === null || E === void 0 ? void 0 : E.y
      ].join(" ")
    },
    dir: u.dir
  }, /* @__PURE__ */ St(PR, {
    scope: N,
    placedSide: _t,
    onArrowChange: Oe,
    arrowX: hn,
    arrowY: ut,
    shouldHideArrow: Se
  }, /* @__PURE__ */ St(mu.div, nr({
    "data-side": _t,
    "data-align": Tt
  }, ue, {
    ref: xe,
    style: {
      ...ue.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Bt ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (b = kt.hide) !== null && b !== void 0 && b.referenceHidden ? 0 : void 0
    }
  }))));
});
function jR(u) {
  return u !== null;
}
const IR = (u) => ({
  name: "transformOrigin",
  options: u,
  fn(d) {
    var f, y, C, x, h;
    const { placement: k, rects: E, middlewareData: b } = d, R = ((f = b.arrow) === null || f === void 0 ? void 0 : f.centerOffset) !== 0, M = R ? 0 : u.arrowWidth, L = R ? 0 : u.arrowHeight, [_, $] = ly(k), P = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[$], V = ((y = (C = b.arrow) === null || C === void 0 ? void 0 : C.x) !== null && y !== void 0 ? y : 0) + M / 2, Y = ((x = (h = b.arrow) === null || h === void 0 ? void 0 : h.y) !== null && x !== void 0 ? x : 0) + L / 2;
    let F = "", X = "";
    return _ === "bottom" ? (F = R ? P : `${V}px`, X = `${-L}px`) : _ === "top" ? (F = R ? P : `${V}px`, X = `${E.floating.height + L}px`) : _ === "right" ? (F = `${-L}px`, X = R ? P : `${Y}px`) : _ === "left" && (F = `${E.floating.width + L}px`, X = R ? P : `${Y}px`), {
      data: {
        x: F,
        y: X
      }
    };
  }
});
function ly(u) {
  const [d, f = "center"] = u.split("-");
  return [
    d,
    f
  ];
}
const YR = $R, ZR = FR, QR = BR, WR = /* @__PURE__ */ Rr((u, d) => /* @__PURE__ */ St(mu.span, nr({}, u, {
  ref: d,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...u.style
  }
}))), GR = WR, [jv, Uk] = I4("Tooltip", [
  ay
]), rm = ay(), XR = "TooltipProvider", KR = 700, z4 = "tooltip.open", [qR, am] = jv(XR), JR = (u) => {
  const { __scopeTooltip: d, delayDuration: f = KR, skipDelayDuration: y = 300, disableHoverableContent: C = !1, children: x } = u, [h, k] = pr(!0), E = xn(!1), b = xn(0);
  return Pt(() => {
    const N = b.current;
    return () => window.clearTimeout(N);
  }, []), /* @__PURE__ */ St(qR, {
    scope: d,
    isOpenDelayed: h,
    delayDuration: f,
    onOpen: dr(() => {
      window.clearTimeout(b.current), k(!1);
    }, []),
    onClose: dr(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(
        () => k(!0),
        y
      );
    }, [
      y
    ]),
    isPointerInTransitRef: E,
    onPointerInTransitChange: dr((N) => {
      E.current = N;
    }, []),
    disableHoverableContent: C
  }, x);
}, im = "Tooltip", [ek, Iv] = jv(im), tk = (u) => {
  const { __scopeTooltip: d, children: f, open: y, defaultOpen: C = !1, onOpenChange: x, disableHoverableContent: h, delayDuration: k } = u, E = am(im, u.__scopeTooltip), b = rm(d), [N, R] = pr(null), M = QT(), L = xn(0), _ = h ?? E.disableHoverableContent, $ = k ?? E.delayDuration, P = xn(!1), [V = !1, Y] = D9({
    prop: y,
    defaultProp: C,
    onChange: (ue) => {
      ue ? (E.onOpen(), document.dispatchEvent(new CustomEvent(z4))) : E.onClose(), x == null || x(ue);
    }
  }), F = Ls(() => V ? P.current ? "delayed-open" : "instant-open" : "closed", [
    V
  ]), X = dr(() => {
    window.clearTimeout(L.current), P.current = !1, Y(!0);
  }, [
    Y
  ]), K = dr(() => {
    window.clearTimeout(L.current), Y(!1);
  }, [
    Y
  ]), le = dr(() => {
    window.clearTimeout(L.current), L.current = window.setTimeout(() => {
      P.current = !0, Y(!0);
    }, $);
  }, [
    $,
    Y
  ]);
  return Pt(() => () => window.clearTimeout(L.current), []), /* @__PURE__ */ St(YR, b, /* @__PURE__ */ St(ek, {
    scope: d,
    contentId: M,
    open: V,
    stateAttribute: F,
    trigger: N,
    onTriggerChange: R,
    onTriggerEnter: dr(() => {
      E.isOpenDelayed ? le() : X();
    }, [
      E.isOpenDelayed,
      le,
      X
    ]),
    onTriggerLeave: dr(() => {
      _ ? K() : window.clearTimeout(L.current);
    }, [
      K,
      _
    ]),
    onOpen: X,
    onClose: K,
    disableHoverableContent: _
  }, f));
}, m9 = "TooltipTrigger", nk = /* @__PURE__ */ Rr((u, d) => {
  const { __scopeTooltip: f, ...y } = u, C = Iv(m9, f), x = am(m9, f), h = rm(f), k = xn(null), E = Ns(d, k, C.onTriggerChange), b = xn(!1), N = xn(!1), R = dr(
    () => b.current = !1,
    []
  );
  return Pt(() => () => document.removeEventListener("pointerup", R), [
    R
  ]), /* @__PURE__ */ St(ZR, nr({
    asChild: !0
  }, h), /* @__PURE__ */ St(mu.button, nr({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": C.open ? C.contentId : void 0,
    "data-state": C.stateAttribute
  }, y, {
    ref: E,
    onPointerMove: _i(u.onPointerMove, (M) => {
      M.pointerType !== "touch" && !N.current && !x.isPointerInTransitRef.current && (C.onTriggerEnter(), N.current = !0);
    }),
    onPointerLeave: _i(u.onPointerLeave, () => {
      C.onTriggerLeave(), N.current = !1;
    }),
    onPointerDown: _i(u.onPointerDown, () => {
      b.current = !0, document.addEventListener("pointerup", R, {
        once: !0
      });
    }),
    onFocus: _i(u.onFocus, () => {
      b.current || C.onOpen();
    }),
    onBlur: _i(u.onBlur, C.onClose),
    onClick: _i(u.onClick, C.onClose)
  })));
}), rk = "TooltipPortal", [$k, ak] = jv(rk, {
  forceMount: void 0
}), f2 = "TooltipContent", ik = /* @__PURE__ */ Rr((u, d) => {
  const f = ak(f2, u.__scopeTooltip), { forceMount: y = f.forceMount, side: C = "top", ...x } = u, h = Iv(f2, u.__scopeTooltip);
  return /* @__PURE__ */ St(Y4, {
    present: y || h.open
  }, h.disableHoverableContent ? /* @__PURE__ */ St(uy, nr({
    side: C
  }, x, {
    ref: d
  })) : /* @__PURE__ */ St(ok, nr({
    side: C
  }, x, {
    ref: d
  })));
}), ok = /* @__PURE__ */ Rr((u, d) => {
  const f = Iv(f2, u.__scopeTooltip), y = am(f2, u.__scopeTooltip), C = xn(null), x = Ns(d, C), [h, k] = pr(null), { trigger: E, onClose: b } = f, N = C.current, { onPointerInTransitChange: R } = y, M = dr(() => {
    k(null), R(!1);
  }, [
    R
  ]), L = dr((_, $) => {
    const P = _.currentTarget, V = {
      x: _.clientX,
      y: _.clientY
    }, Y = uk(V, P.getBoundingClientRect()), F = sk(V, Y), X = ck($.getBoundingClientRect()), K = dk([
      ...F,
      ...X
    ]);
    k(K), R(!0);
  }, [
    R
  ]);
  return Pt(() => () => M(), [
    M
  ]), Pt(() => {
    if (E && N) {
      const _ = (P) => L(P, N), $ = (P) => L(P, E);
      return E.addEventListener("pointerleave", _), N.addEventListener("pointerleave", $), () => {
        E.removeEventListener("pointerleave", _), N.removeEventListener("pointerleave", $);
      };
    }
  }, [
    E,
    N,
    L,
    M
  ]), Pt(() => {
    if (h) {
      const _ = ($) => {
        const P = $.target, V = {
          x: $.clientX,
          y: $.clientY
        }, Y = (E == null ? void 0 : E.contains(P)) || (N == null ? void 0 : N.contains(P)), F = !fk(V, h);
        Y ? M() : F && (M(), b());
      };
      return document.addEventListener("pointermove", _), () => document.removeEventListener("pointermove", _);
    }
  }, [
    E,
    N,
    h,
    b,
    M
  ]), /* @__PURE__ */ St(uy, nr({}, u, {
    ref: x
  }));
}), [lk, Vk] = jv(im, {
  isInside: !1
}), uy = /* @__PURE__ */ Rr((u, d) => {
  const { __scopeTooltip: f, children: y, "aria-label": C, onEscapeKeyDown: x, onPointerDownOutside: h, ...k } = u, E = Iv(f2, f), b = rm(f), { onClose: N } = E;
  return Pt(() => (document.addEventListener(z4, N), () => document.removeEventListener(z4, N)), [
    N
  ]), Pt(() => {
    if (E.trigger) {
      const R = (M) => {
        const L = M.target;
        L != null && L.contains(E.trigger) && N();
      };
      return window.addEventListener("scroll", R, {
        capture: !0
      }), () => window.removeEventListener("scroll", R, {
        capture: !0
      });
    }
  }, [
    E.trigger,
    N
  ]), /* @__PURE__ */ St(BT, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: x,
    onPointerDownOutside: h,
    onFocusOutside: (R) => R.preventDefault(),
    onDismiss: N
  }, /* @__PURE__ */ St(QR, nr({
    "data-state": E.stateAttribute
  }, b, k, {
    ref: d,
    style: {
      ...k.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ St(x9, null, y), /* @__PURE__ */ St(lk, {
    scope: f,
    isInside: !0
  }, /* @__PURE__ */ St(GR, {
    id: E.contentId,
    role: "tooltip"
  }, C || y))));
});
function uk(u, d) {
  const f = Math.abs(d.top - u.y), y = Math.abs(d.bottom - u.y), C = Math.abs(d.right - u.x), x = Math.abs(d.left - u.x);
  switch (Math.min(f, y, C, x)) {
    case x:
      return "left";
    case C:
      return "right";
    case f:
      return "top";
    case y:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function sk(u, d, f = 5) {
  const y = [];
  switch (d) {
    case "top":
      y.push({
        x: u.x - f,
        y: u.y + f
      }, {
        x: u.x + f,
        y: u.y + f
      });
      break;
    case "bottom":
      y.push({
        x: u.x - f,
        y: u.y - f
      }, {
        x: u.x + f,
        y: u.y - f
      });
      break;
    case "left":
      y.push({
        x: u.x + f,
        y: u.y - f
      }, {
        x: u.x + f,
        y: u.y + f
      });
      break;
    case "right":
      y.push({
        x: u.x - f,
        y: u.y - f
      }, {
        x: u.x - f,
        y: u.y + f
      });
      break;
  }
  return y;
}
function ck(u) {
  const { top: d, right: f, bottom: y, left: C } = u;
  return [
    {
      x: C,
      y: d
    },
    {
      x: f,
      y: d
    },
    {
      x: f,
      y
    },
    {
      x: C,
      y
    }
  ];
}
function fk(u, d) {
  const { x: f, y } = u;
  let C = !1;
  for (let x = 0, h = d.length - 1; x < d.length; h = x++) {
    const k = d[x].x, E = d[x].y, b = d[h].x, N = d[h].y;
    E > y != N > y && f < (b - k) * (y - E) / (N - E) + k && (C = !C);
  }
  return C;
}
function dk(u) {
  const d = u.slice();
  return d.sort((f, y) => f.x < y.x ? -1 : f.x > y.x ? 1 : f.y < y.y ? -1 : f.y > y.y ? 1 : 0), pk(d);
}
function pk(u) {
  if (u.length <= 1)
    return u.slice();
  const d = [];
  for (let y = 0; y < u.length; y++) {
    const C = u[y];
    for (; d.length >= 2; ) {
      const x = d[d.length - 1], h = d[d.length - 2];
      if ((x.x - h.x) * (C.y - h.y) >= (x.y - h.y) * (C.x - h.x))
        d.pop();
      else
        break;
    }
    d.push(C);
  }
  d.pop();
  const f = [];
  for (let y = u.length - 1; y >= 0; y--) {
    const C = u[y];
    for (; f.length >= 2; ) {
      const x = f[f.length - 1], h = f[f.length - 2];
      if ((x.x - h.x) * (C.y - h.y) >= (x.y - h.y) * (C.x - h.x))
        f.pop();
      else
        break;
    }
    f.push(C);
  }
  return f.pop(), d.length === 1 && f.length === 1 && d[0].x === f[0].x && d[0].y === f[0].y ? d : d.concat(f);
}
const vk = JR, hk = tk, mk = nk, sy = ik, Fk = vk, Pk = hk, Bk = mk, yk = Fe.forwardRef(({ className: u, sideOffset: d = 4, ...f }, y) => /* @__PURE__ */ ne(
  sy,
  {
    ref: y,
    sideOffset: d,
    className: Sn(
      "nxth-z-50 nxth-overflow-hidden nxth-rounded-md nxth-border nxth-border-slate-200 nxth-bg-white nxth-px-3 nxth-py-1.5 nxth-text-sm nxth-text-slate-950 nxth-shadow-md nxth-animate-in nxth-fade-in-0 nxth-zoom-in-95 data-[state=closed]:nxth-animate-out data-[state=closed]:nxth-fade-out-0 data-[state=closed]:nxth-zoom-out-95 data-[side=bottom]:nxth-slide-in-from-top-2 data-[side=left]:nxth-slide-in-from-right-2 data-[side=right]:nxth-slide-in-from-left-2 data-[side=top]:nxth-slide-in-from-bottom-2 dark:nxth-border-slate-800 dark:nxth-bg-slate-950 dark:nxth-text-slate-50",
      u
    ),
    ...f
  }
));
yk.displayName = sy.displayName;
export {
  cT as A,
  U4 as B,
  zE as C,
  Nk as D,
  _E as E,
  kk as F,
  lT as G,
  uT as H,
  fT as I,
  Fv as J,
  X4 as K,
  Mk as L,
  Dk as M,
  _k as N,
  I9 as O,
  Ak as P,
  HT as Q,
  zk as R,
  Lk as S,
  Rk as T,
  UT as U,
  OE as a,
  NE as b,
  HE as c,
  e9 as d,
  AE as e,
  Fk as f,
  Pk as g,
  Bk as h,
  yk as i,
  rb as j,
  ab as k,
  ib as l,
  sb as m,
  ob as n,
  lb as o,
  ub as p,
  Gb as q,
  Xb as r,
  eE as s,
  Kb as t,
  W4 as u,
  Jb as v,
  qb as w,
  VE as x,
  Ok as y,
  sT as z
};
