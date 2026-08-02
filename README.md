# SSX

JSX is terrible for frontend. But it's an acceptable way to create HTML code in
server side, specially if it's supported by default by TypeScript and Deno.

Most of the current JSX libraries are designed to work in server and client
sides. They do complicated things like a virtual DOM, reactivity, hooks,
hydration, events, etc, in order to create interactive user interfaces.

SSX is a minimal JSX library designed to be used ONLY in server side and output
plain HTML code.

- Created in TypeScript, for Deno.
- Very fast. It's compatible with the
  [`precompile` option](https://deno.com/blog/v1.38#fastest-jsx-transform)
  available in Deno.
  > 7-20x faster rendering times and a 50% reduction in Garbage Collection
  > times.
- Run `deno task bench` to compare SSX with React, Hono and Preact.
- Designed to output HTML. It uses real HTML attributes (no more `className`).
- Great HTML and CSS documentation. Every element and property has a description
  and even links to [MDN documentation](https://developer.mozilla.org/). Types
  are generated using the data from
  [VSCode Custom Data](https://github.com/microsoft/vscode-custom-data).
- It supports async components (components returning a Promise).
- Allows to insert raw HTML code easily (without patronizing you).
- You can add the `<!doctype html>` declaration.

## Configuration

```sh
deno add jsr:@vhespanha/ssx
```

Then point `jsxImportSource` at it in your `deno.json` file:

```json
{
  "imports": {
    "ssx": "jsr:@vhespanha/ssx@^0.2"
  },
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "ssx"
  }
}
```

That's the whole setup: `ssx/jsx-runtime` resolves through the package's exports
map, so there is nothing else to wire up. If you'd rather not add an import
alias, point `jsxImportSource` directly at the package instead:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "jsr:@vhespanha/ssx"
  }
}
```

## Using NPM specifier

SSX is also
[published on NPM as `@vhespanha/ssx`](https://www.npmjs.com/package/@vhespanha/ssx):

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "npm:@vhespanha/ssx"
  }
}
```

## Use with Node and Bun

If you want to use SSX with Node.js or Bun, see the `/examples/node` folder for
an example setup using this package in a Node environment.

## Example:

```tsx
import { render } from "ssx";
import type { JSX } from "ssx";

// Main component
function Main() {
  return (
    <div id="main">
      <Header>
        <p>Welcome to SSX</p>
        {{ __html: "Raw <b>HTML</b> code" }}
      </Header>
    </div>
  );
}

// Async component
async function Header({ children }: { children: JSX.Children }) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${name}`,
  );

  const json = await res.json();
  const def = json[0]?.meanings[0]?.definitions[0]?.definition;

  return (
    <>
      <h2>Definition of {name}:</h2>
      <p>{def || "Definition not found"}</p>
      {children}
    </>
  );
}

// String with the HTML code
console.log(await render(<Main />));
```

`render` is an alias of `renderComponent`; both are exported, and any element
also renders itself with `await (<Main />).toString()`.

### Adding Doctype:

Any child with the shape `{ __html: string }` is treated as raw HTML and will
not be escaped. This allows you to insert the `<!doctype html>` declaration
directly (something not possible in other JSX libraries):

```html
{{ __html: "<!DOCTYPE html>" }}
<html>
  ...
</html>;
```
