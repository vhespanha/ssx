/**
 * SSX - a minimal JSX library for server side rendering to plain HTML.
 *
 * ```json
 * {
 *   "imports": { "ssx": "jsr:@vhespanha/ssx" },
 *   "compilerOptions": { "jsx": "react-jsx", "jsxImportSource": "ssx" }
 * }
 * ```
 *
 * ```tsx
 * import { render } from "ssx";
 *
 * console.log(await render(<p>Hello</p>));
 * ```
 *
 * @module
 */

export {
  Fragment,
  jsx,
  jsxAttr,
  jsxDEV,
  jsxEscape,
  jsxs,
  jsxTemplate,
  renderComponent,
  renderComponent as render,
} from "@/jsx-runtime.ts";

export type { Component, Content, JSX, Props, RawHtml } from "@/jsx-runtime.ts";

export type { CSSProperties } from "@/css.ts";
export type { HTMLElements } from "@/html.ts";
