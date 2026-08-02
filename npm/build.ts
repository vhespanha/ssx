import { build, emptyDir } from "jsr:@deno/dnt@^0.43.1";

const version = Deno.args[0];

if (!version) {
  throw new Error("Version is required");
}

const outDir = "./dist";

await emptyDir(outDir);

await build({
  entryPoints: [
    "../mod.ts",
    { name: "./jsx-runtime", path: "../jsx-runtime.ts" },
  ],
  outDir,
  importMap: "../deno.json",
  test: false,
  shims: {},
  compilerOptions: {
    lib: ["ES2022", "DOM"],
  },
  package: {
    name: "@vhespanha/ssx",
    version,
    description: "Fast and simple JSX library for server side",
    license: "MIT",
    keywords: ["jsx", "ssr", "html"],
    repository: {
      type: "git",
      url: "git+https://github.com/vhespanha/ssx.git",
    },
    bugs: {
      url: "https://github.com/vhespanha/ssx/issues",
    },
    homepage: "https://github.com/vhespanha/ssx#readme",
  },
  postBuild() {
    Deno.copyFileSync("../LICENSE", `${outDir}/LICENSE`);
    Deno.copyFileSync("../README.md", `${outDir}/README.md`);
    Deno.copyFileSync("../CHANGELOG.md", `${outDir}/CHANGELOG.md`);
  },
});
