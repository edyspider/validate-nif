# Validate-NIF

[![npm version](https://img.shields.io/npm/v/@edyspider/validate-nif)](https://www.npmjs.com/package/@edyspider/validate-nif)
[![CI](https://github.com/edyspider/validate-nif/actions/workflows/ci.yml/badge.svg)](https://github.com/edyspider/validate-nif/actions/workflows/ci.yml)

A small, dependency-free package to validate and generate Portuguese fiscal identification numbers (NIF).

Works with ES modules, CommonJS and TypeScript (types included).

---

## Requirements

- Node.js 22.12 or later (also works with Bun, Deno and browsers through a bundler or CDN)

## Installation

```sh
npm i @edyspider/validate-nif
```

## Usage

### ES modules

```js
import { validateNIF, randomNIF } from '@edyspider/validate-nif';

console.log(validateNIF('123456789')); // true
console.log(validateNIF('999999999')); // false
console.log(randomNIF()); // e.g. '264586522'
```

### CommonJS

```js
const { validateNIF, randomNIF } = require('@edyspider/validate-nif');

console.log(validateNIF('123456789')); // true
```

### TypeScript

```ts
import { validateNIF, randomNIF } from '@edyspider/validate-nif';

const input: unknown = '123456789';
const isValid: boolean = validateNIF(input);
const nif: string = randomNIF();
```

### Deno

```js
import { validateNIF } from 'npm:@edyspider/validate-nif';
```

### Browser (CDN, no bundler)

```js
import { validateNIF } from 'https://cdn.jsdelivr.net/npm/@edyspider/validate-nif@2/+esm';
```

## API

### `validateNIF(value: unknown): boolean`

Returns `true` when `value` is a string with 9 digits, a valid prefix and a correct check digit. Any other value (numbers, `null`, `undefined`, objects) returns `false`.

### `randomNIF(): string`

Returns a random valid NIF. It can start with any valid prefix, including the two-digit ones (45, 70–79, 90–99).

## Known Issues

- [**Issues**](https://github.com/edyspider/validate-nif/issues)

## Authors

- [**EdySpider**](https://github.com/edyspider/)

## License

- **[MIT license](https://github.com/edyspider/validate-nif/blob/main/LICENSE)**
- Copyright 2024 &copy; [EdySpider](https://github.com/edyspider/)