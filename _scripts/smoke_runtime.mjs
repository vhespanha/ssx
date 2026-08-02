// Cross-runtime compatibility smoke test. Imports the npm-compatible build
// of the package published to JSR (see .github/workflows/compat.yml) and
// exercises tags, boolean/void attributes, and Fragment under whatever
// runtime executes this file (Node, Bun, ...).

import assert from "node:assert/strict";
import { Fragment, jsx, render } from "@jsr/vhespanha__ssx";

const tree = jsx("div", {
  id: "main",
  class: "card",
  children: [
    jsx("h1", { children: "Hello" }),
    jsx(Fragment, {
      children: [
        jsx("p", { children: "from " }),
        jsx("strong", { children: "SSX" }),
      ],
    }),
    jsx("input", { type: "text", disabled: true }),
  ],
});

const html = await render(tree);

assert.equal(
  html,
  '<div id="main" class="card"><h1>Hello</h1><p>from </p><strong>SSX</strong><input type="text" disabled></div>',
);

console.log("ok: ssx renders correctly");
