# Change Log

All notable changes to the **@edyspider/validate-nif** npm package
will be documented in this file.

## [2.0.0]

### Breaking changes

- Requires Node.js 22.12 or later
- The package now uses the `exports` field. Deep imports such as `@edyspider/validate-nif/dist/bundle.js` no longer work
- The UMD bundle (`dist/bundle.js`) was removed

### Changes

- Native ES module with a CommonJS entry point, so both `import` and `require()` work
- TypeScript types are now included in the published package, for both `import` and `require()`
- `validateNIF()` accepts any value (`unknown`) and returns `false` for anything that is not a valid NIF string
- `randomNIF()` can now generate NIF numbers with two-digit prefixes
- No runtime dependencies; webpack, babel and jest were removed
- Tests use the Node.js built-in test runner and cover every valid prefix
- CI runs on Node.js 22 and 24, and releases are published from GitHub Actions with npm provenance

### Fixes

- TypeScript types were missing from the 1.7.8 package

---

## [1.7.8]

### Changes

- Add possibility to use this library in typescript projects

---

## [1.7.1]

### Changes

- Add new function to generate random valid NIF numbers

---

## [1.0.4]

### Minor Changes

- Add code validation

---

## [1.0.3]

### Minor Changes

- Add code validation

---

## [1.0.2]

### Minor Changes

- Add ChangeLog
- Update documentation

---

## [1.0.1]

### Minor Changes

- Update documentation

---

## [1.0.0]

### New features

- Initial release
