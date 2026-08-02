# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.2.1] - 2026-08-02
### Added
- Module-level doc comment on `jsx-runtime.ts` (the last entrypoint missing one).
- JSDoc on the exported symbols that were missing it: `RawHtml.__html`, `Component.type`/`props`, `renderComponent`, and the `JSX` namespace's `Component`, `Children`, `IntrinsicElements` and `ElementChildrenAttribute`.
- Fallback description in the `CSSProperties` type generator (`_scripts/types_css.ts`) so every generated property has a doc comment, even when the source MDN data has none.
- `.github/workflows/compat.yml`: smoke-tests the published package against Node.js and Bun (via JSR's npm compatibility layer) after each publish.

### Changed
- README's Node/Bun instructions now point at JSR's npm compatibility layer (`@jsr/vhespanha__ssx` via `npm.jsr.io`) instead of the removed `/examples/node` folder and npm publish workflow.

## [0.2.0] - 2026-08-02
### Added
- Published on [JSR](https://jsr.io/@vhespanha/ssx).
- `render` export, an alias of `renderComponent`.
- `jsxDEV` export for the `react-jsxdev` transform.
- `Component`, `Content`, `Props` and `RawHtml` types exported from `ssx`.
- Test coverage for the `precompile` transform, asserting it renders the same HTML as `react-jsx` from the same source.

### Changed
- **Breaking:** `JSX` is no longer declared as a global namespace; it's exported from `ssx`/`ssx/jsx-runtime`. Import it explicitly where needed.
- Package renamed to `@vhespanha/ssx` on both JSR to differentiate fork.
- Tests and benchmarks split into `tests/react-jsx/`, `tests/precompile/` and `benchmark/` workspace members, each setting its own `jsx` transform. The root `compilerOptions` are gone as a result.
- Removed npm publish workflow
- Removed node examples

## [0.1.15] - 2026-05-17
### Fixed
- Updated CSS types.
- Removed extra space for empty attributes:
  ```tsx
  <span title={undefined}/>

  // after
  <span ></span>
  // before
  <span></span>
  ```

## [0.1.14] - 2025-12-23
### Fixed
- Element content can be overriden in precompile mode.

## [0.1.13] - 2025-12-03
### Added
- Baseline info to CSS properties.

### Fixed
- Updated HTML and CSS types.

## [0.1.12] - 2025-08-10
### Fixed
- Better errors on invalid attributes or component type.

## [0.1.11] - 2025-07-19
### Added
- Expose `JSX.Component`.

### Fixed
- Updated types for HTML and CSS.
- Changed the `renderComponent` signature to use the `unknown` type as first argument [#2].

## [0.1.10] - 2025-05-14
### Added
- New `await <Component />.toString()` method to render the component.
- Example for Node.js/Bun

### Fixed
- Import the types with `import type`.

## [0.1.9] - 2025-05-01
### Fixed
- Error rendering invalid components.
- Updated HTML & CSS types.

## [0.1.8] - 2025-03-27
### Added
- Types for SVG elements

### Fixed
- Performance: removed unnecessary regular expressions.
- Updated HTML & CSS types

## [0.1.7] - 2025-03-21
### Fixed
- Render errors when the content is `false`.
- Improved types.

## [0.1.6] - 2025-03-06
### Fixed
- Alias `className` and `htmlFor` to `class` and `for` attributes.

## [0.1.5] - 2025-01-29
### Fixed
- Fragment rendering.

## [0.1.4] - 2025-01-25
### Added
- CSS types.
- Benchmark to compare with React and Preact.

### Changed
- Make `ssxElement` property not enumerable.

## [0.1.3] - 2025-01-06
### Added
- Export `renderComponent` function.
- Publish on NPM.
- Symbol to check if an object is a SSX element.

### Fixed
- Void elements.
- Support for non `precompile` context
- `children` attribute for custom components
- Fragment rendering.

## [0.1.2] - 2024-12-05
### Fixed
- Allow types `string | number` for numeric attributes (like `tabindex`), instead of only `string`.

## [0.1.1] - 2024-07-23
### Added
- Support for `dangerouslySetInnerHTML` for compatibility with other JSX libraries.

### Fixed
- Bug rendering inner components and some async properties.

## [0.1.0] - 2024-07-20
First version

[#2]: https://github.com/oscarotero/ssx/issues/2

[0.2.0]: https://github.com/vhespanha/ssx/compare/v0.1.15...v0.2.0
[0.1.15]: https://github.com/oscarotero/ssx/compare/v0.1.14...v0.1.15
[0.1.14]: https://github.com/oscarotero/ssx/compare/v0.1.13...v0.1.14
[0.1.13]: https://github.com/oscarotero/ssx/compare/v0.1.12...v0.1.13
[0.1.12]: https://github.com/oscarotero/ssx/compare/v0.1.11...v0.1.12
[0.1.11]: https://github.com/oscarotero/ssx/compare/v0.1.10...v0.1.11
[0.1.10]: https://github.com/oscarotero/ssx/compare/v0.1.9...v0.1.10
[0.1.9]: https://github.com/oscarotero/ssx/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/oscarotero/ssx/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/oscarotero/ssx/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/oscarotero/ssx/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/oscarotero/ssx/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/oscarotero/ssx/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/oscarotero/ssx/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/oscarotero/ssx/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/oscarotero/ssx/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/oscarotero/ssx/releases/tag/v0.1.0
