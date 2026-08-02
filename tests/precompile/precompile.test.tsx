import Main from "@/tests/precompile/example.tsx";
import { assertEquals } from "@std/assert";
import { render } from "ssx";

// This directory is a workspace member with `"jsx": "precompile"`, so the JSX
// here (and in example.tsx) goes through `jsxTemplate`, `jsxAttr` and
// `jsxEscape` instead of `jsx`/`jsxs`. The fixture is a copy of
// `tests/react-jsx/example.tsx`, so both transforms must produce the same HTML.
const expected = Deno.readTextFileSync(
  new URL("../expected.html", import.meta.url),
);

Deno.test("Render precompiled TSX", async () => {
  // `<Main />` is still a `jsx()` call: components are not precompiled.
  assertEquals(await render(<Main />), expected);

  // Calling the component directly returns the `jsxTemplate` promise. Pass it
  // to `render` unawaited: an already resolved string would be treated as text
  // content and escaped by `jsxEscape`.
  assertEquals(await render(Main()), expected);
});

Deno.test("Precompile fixture matches the react-jsx one", () => {
  assertEquals(
    Deno.readTextFileSync(new URL("./example.tsx", import.meta.url)),
    Deno.readTextFileSync(new URL("../react-jsx/example.tsx", import.meta.url)),
  );
});
