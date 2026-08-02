import example from "@/tests/example.tsx";
import example2 from "@/tests/example2.jsx";
import { withoutTitle, withTitle } from "@/tests/example3.tsx";
import { assertEquals } from "@std/assert";
import { render } from "ssx";

const expected = Deno.readTextFileSync("tests/expected.html");
const expected2 = Deno.readTextFileSync("tests/expected2.html");

Deno.test("Render TSX", async () => {
  const code = await example();
  assertEquals(await render(code), expected);
  assertEquals(await render(code), await code.toString());

  const code2 = await example2();
  assertEquals(await render(code2), expected2);
  assertEquals(await render(code2), await code2.toString());

  const code3 = await withTitle();
  assertEquals(
    await render(code3),
    '<span title="has title">Content</span>',
  );

  const code4 = await withoutTitle();
  assertEquals(await render(code4), "<span>Content</span>");
});
