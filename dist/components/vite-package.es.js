import "../index-w40geAFS.js";
import * as mr from "react";
import Ae, { forwardRef as De, Children as I, isValidElement as z, createElement as te, cloneElement as Fe, Fragment as hr } from "react";
import { c as gr, a as yr } from "../index-r-lZGHOD.js";
var ne = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Er() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ae, s = Symbol.for("react.element"), a = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), E = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), W = Symbol.iterator, Y = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var k = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ve("error", e, t);
      }
    }
    function Ve(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var c = t.map(function(l) {
          return String(l);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ie = !1, We = !1, Ye = !1, Le = !1, Ue = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === d || Ue || e === h || e === g || e === b || Le || e === S || Ie || We || Ye || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === y || e.$$typeof === E || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Be(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case a:
          return "Portal";
        case d:
          return "Profiler";
        case h:
          return "StrictMode";
        case g:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ie(r) + ".Consumer";
          case y:
            var t = e;
            return ie(t._context) + ".Provider";
          case p:
            return Be(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case T: {
            var f = e, c = f._payload, l = f._init;
            try {
              return C(l(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, se, le, ue, fe, ce, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function qe() {
      {
        if (D === 0) {
          se = console.log, le = console.info, ue = console.warn, fe = console.error, ce = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        D++;
      }
    }
    function ze() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: se
            }),
            info: P({}, e, {
              value: le
            }),
            warn: P({}, e, {
              value: ue
            }),
            error: P({}, e, {
              value: fe
            }),
            group: P({}, e, {
              value: ce
            }),
            groupCollapsed: P({}, e, {
              value: de
            }),
            groupEnd: P({}, e, {
              value: ve
            })
          });
        }
        D < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = k.ReactCurrentDispatcher, H;
    function L(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var K = !1, U;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Je();
    }
    function be(e, r) {
      if (!e || K)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = G.current, G.current = null, qe();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (w) {
              n = w;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var i = w.stack.split(`
`), x = n.stack.split(`
`), v = i.length - 1, m = x.length - 1; v >= 1 && m >= 0 && i[v] !== x[m]; )
            m--;
          for (; v >= 1 && m >= 0; v--, m--)
            if (i[v] !== x[m]) {
              if (v !== 1 || m !== 1)
                do
                  if (v--, m--, m < 0 || i[v] !== x[m]) {
                    var O = `
` + i[v].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, O), O;
                  }
                while (v >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        K = !1, G.current = c, ze(), Error.prepareStackTrace = f;
      }
      var $ = e ? e.displayName || e.name : "", Pe = $ ? L($) : "";
      return typeof e == "function" && U.set(e, Pe), Pe;
    }
    function Ge(e, r, t) {
      return be(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, He(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case g:
          return L("Suspense");
        case b:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ge(e.render);
          case _:
            return M(e.type, r, t);
          case T: {
            var n = e, f = n._payload, c = n._init;
            try {
              return M(c(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, me = {}, he = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, f) {
      {
        var c = Function.call.bind(B);
        for (var l in e)
          if (c(e, l)) {
            var i = void 0;
            try {
              if (typeof e[l] != "function") {
                var x = Error((n || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              i = e[l](r, l, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              i = v;
            }
            i && !(i instanceof Error) && (q(f), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, l, typeof i), q(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, q(f), R("Failed %s type: %s", t, i.message), q(null));
          }
      }
    }
    var Xe = Array.isArray;
    function X(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function ye(e) {
      if (Qe(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), ge(e);
    }
    var F = k.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, _e, Z;
    Z = {};
    function rr(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = C(F.current.type);
        Z[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(F.current.type), e.ref), Z[t] = !0);
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          _e || (_e = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, n, f, c, l) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function sr(e, r, t, n, f) {
      {
        var c, l = {}, i = null, x = null;
        t !== void 0 && (ye(t), i = "" + t), tr(r) && (ye(r.key), i = "" + r.key), rr(r) && (x = r.ref, nr(r, f));
        for (c in r)
          B.call(r, c) && !er.hasOwnProperty(c) && (l[c] = r[c]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (c in v)
            l[c] === void 0 && (l[c] = v[c]);
        }
        if (i || x) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ar(l, m), x && or(l, m);
        }
        return ir(e, i, x, f, n, F.current, l);
      }
    }
    var Q = k.ReactCurrentOwner, Re = k.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function xe() {
      {
        if (Q.current) {
          var e = C(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ur(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + C(e._owner.type) + "."), j(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Oe(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = A(e);
          if (typeof f == "function" && f !== e.entries)
            for (var c = f.call(e), l; !(l = c.next()).done; )
              re(l.value) && Oe(l.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var f = C(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function we(e, r, t, n, f, c) {
      {
        var l = Me(e);
        if (!l) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = lr(f);
          x ? i += x : i += xe();
          var v;
          e === null ? v = "null" : X(e) ? v = "array" : e !== void 0 && e.$$typeof === s ? (v = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var m = sr(e, r, t, f, c);
        if (m == null)
          return m;
        if (l) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (X(O)) {
                for (var $ = 0; $ < O.length; $++)
                  Ce(O[$], e);
                Object.freeze && Object.freeze(O);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(O, e);
        }
        return e === u ? cr(m) : fr(m), m;
      }
    }
    function dr(e, r, t) {
      return we(e, r, t, !0);
    }
    function vr(e, r, t) {
      return we(e, r, t, !1);
    }
    var pr = vr, br = dr;
    N.Fragment = u, N.jsx = pr, N.jsxs = br;
  }()), N;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function _r() {
  if (ke)
    return V;
  ke = 1;
  var o = Ae, s = Symbol.for("react.element"), a = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, h = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(E, p, g) {
    var b, _ = {}, T = null, S = null;
    g !== void 0 && (T = "" + g), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (S = p.ref);
    for (b in p)
      u.call(p, b) && !d.hasOwnProperty(b) && (_[b] = p[b]);
    if (E && E.defaultProps)
      for (b in p = E.defaultProps, p)
        _[b] === void 0 && (_[b] = p[b]);
    return { $$typeof: s, type: E, key: T, ref: S, props: _, _owner: h.current };
  }
  return V.Fragment = a, V.jsx = y, V.jsxs = y, V;
}
process.env.NODE_ENV === "production" ? ne.exports = _r() : ne.exports = Er();
var Rr = ne.exports;
function J() {
  return J = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var a = arguments[s];
      for (var u in a)
        Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u]);
    }
    return o;
  }, J.apply(this, arguments);
}
function xr(o, s) {
  typeof o == "function" ? o(s) : o != null && (o.current = s);
}
function Tr(...o) {
  return (s) => o.forEach(
    (a) => xr(a, s)
  );
}
const Ne = /* @__PURE__ */ De((o, s) => {
  const { children: a, ...u } = o, h = I.toArray(a), d = h.find(Cr);
  if (d) {
    const y = d.props.children, E = h.map((p) => p === d ? I.count(y) > 1 ? I.only(null) : /* @__PURE__ */ z(y) ? y.props.children : null : p);
    return /* @__PURE__ */ te(ae, J({}, u, {
      ref: s
    }), /* @__PURE__ */ z(y) ? /* @__PURE__ */ Fe(y, void 0, E) : null);
  }
  return /* @__PURE__ */ te(ae, J({}, u, {
    ref: s
  }), a);
});
Ne.displayName = "Slot";
const ae = /* @__PURE__ */ De((o, s) => {
  const { children: a, ...u } = o;
  return /* @__PURE__ */ z(a) ? /* @__PURE__ */ Fe(a, {
    ...wr(u, a.props),
    ref: s ? Tr(s, a.ref) : a.ref
  }) : I.count(a) > 1 ? I.only(null) : null;
});
ae.displayName = "SlotClone";
const Or = ({ children: o }) => /* @__PURE__ */ te(hr, null, o);
function Cr(o) {
  return /* @__PURE__ */ z(o) && o.type === Or;
}
function wr(o, s) {
  const a = {
    ...s
  };
  for (const u in s) {
    const h = o[u], d = s[u];
    /^on[A-Z]/.test(u) ? h && d ? a[u] = (...E) => {
      d(...E), h(...E);
    } : h && (a[u] = h) : u === "style" ? a[u] = {
      ...h,
      ...d
    } : u === "className" && (a[u] = [
      h,
      d
    ].filter(Boolean).join(" "));
  }
  return {
    ...o,
    ...a
  };
}
const je = (o) => typeof o == "boolean" ? "".concat(o) : o === 0 ? "0" : o, $e = gr, Pr = (o, s) => (a) => {
  var u;
  if ((s == null ? void 0 : s.variants) == null)
    return $e(o, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: h, defaultVariants: d } = s, y = Object.keys(h).map((g) => {
    const b = a == null ? void 0 : a[g], _ = d == null ? void 0 : d[g];
    if (b === null)
      return null;
    const T = je(b) || je(_);
    return h[g][T];
  }), E = a && Object.entries(a).reduce((g, b) => {
    let [_, T] = b;
    return T === void 0 || (g[_] = T), g;
  }, {}), p = s == null || (u = s.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((g, b) => {
    let { class: _, className: T, ...S } = b;
    return Object.entries(S).every((W) => {
      let [Y, A] = W;
      return Array.isArray(A) ? A.includes({
        ...d,
        ...E
      }[Y]) : {
        ...d,
        ...E
      }[Y] === A;
    }) ? [
      ...g,
      _,
      T
    ] : g;
  }, []);
  return $e(o, y, p, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Sr = Pr(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), kr = mr.forwardRef(
  ({ className: o, variant: s, size: a, asChild: u = !1, ...h }, d) => {
    const y = u ? Ne : "button";
    return /* @__PURE__ */ Rr.jsx(
      y,
      {
        className: yr(Sr({ variant: s, size: a, className: o })),
        ref: d,
        ...h
      }
    );
  }
);
kr.displayName = "Button";
export {
  kr as Button,
  Sr as buttonVariants
};
