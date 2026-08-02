import hono from "@/benchmark/hono.jsx";
import preact from "@/benchmark/preact.jsx";
import react from "@/benchmark/react.jsx";
import ssx from "@/benchmark/ssx.jsx";

Deno.bench({
  name: "ssx",
  fn() {
    ssx();
  },
});

Deno.bench({
  name: "preact",
  fn() {
    preact();
  },
});

Deno.bench({
  name: "hono",
  fn() {
    hono();
  },
});

Deno.bench({
  name: "react",
  fn() {
    react();
  },
});
