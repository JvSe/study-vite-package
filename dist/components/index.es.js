import "../lib/form-validations/index.es.js";
import { u as t, f as o, g as n, h as i, B as l, M as h, S as m, i as d } from "../tooltip-LLl_9Ab8.js";
import { k, p as v, o as I, m as f, l as B, n as D, q as z, r as N, s as P, t as j, v as w, w as E, x as M, y as S, z as A, A as H, D as L, G as q, H as y, I as G, K as J, N as K, O, P as Q, U as R, Q as U, j as V, R as W, J as X } from "../tooltip-LLl_9Ab8.js";
import { jsx as a, jsxs as C } from "react/jsx-runtime";
import "react";
import "../index-vDNL9MXV.js";
function b({ ...s }) {
  const { setTheme: e, theme: r = "light" } = t();
  return /* @__PURE__ */ a("div", { className: "nxth-absolute nxth-bottom-2 nxth-right-0", children: /* @__PURE__ */ a(o, { children: /* @__PURE__ */ C(n, { children: [
    /* @__PURE__ */ a(i, { children: /* @__PURE__ */ a(
      l,
      {
        variant: "clean",
        size: "clean",
        className: "nxth-mr-[1rem] nxth-p-2 nxth-shadow-none nxth-bg-[#CBE2EE] hover:nxth-brightness-90 dark:nxth-bg-transparent hover:nxth-bg-accent dark:nxth-border dark:nxth-border-[#7C7C7C]",
        onClick: () => e(r === "dark" ? "light" : "dark"),
        ...s,
        children: r === "light" ? /* @__PURE__ */ a(h, { size: 20, color: "#0D2943" }) : /* @__PURE__ */ a(m, { size: 20, color: "#FCB937" })
      }
    ) }),
    /* @__PURE__ */ a(d, { side: "left", children: /* @__PURE__ */ a("p", { children: "Alterar tema" }) })
  ] }) }) });
}
export {
  l as Button,
  b as ButtonToggleTheme,
  k as Card,
  v as CardContent,
  I as CardDescription,
  f as CardFooter,
  B as CardHeader,
  D as CardTitle,
  z as Carousel,
  N as CarouselContent,
  P as CarouselDots,
  j as CarouselItem,
  w as CarouselNext,
  E as CarouselPrevious,
  M as Checkbox,
  S as Form,
  A as FormControl,
  H as FormDescription,
  L as FormField,
  q as FormItem,
  y as FormLabel,
  G as FormMessage,
  J as Input,
  K as InputWithIcon,
  O as Label,
  Q as PasswordInput,
  R as Spinner,
  U as Toaster,
  n as Tooltip,
  d as TooltipContent,
  o as TooltipProvider,
  i as TooltipTrigger,
  V as buttonVariants,
  W as toast,
  X as useFormField
};
