# Validate-NIF

A simple npm package to validate Portuguese fiscal identification numbers (NIF).

---

## Installation

```sh
npm i @edyspider/validate-nif
```

## Usage

### Javascript

```js
const { validateNIF, randomNIF } = require('@edyspider/validate-nif');

const validNIF = '123456789';
const invalidNIF = '999999999';
const randNIF = randomNIF();

console.log(`Is ${validNIF} a valid NIF?`, validateNIF(validNIF));
console.log(`Is ${invalidNIF} a valid NIF?`, validateNIF(invalidNIF));
console.log(`Generated random NIF: ${randNIF}`);
console.log(`Is generated NIF valid?`, validateNIF(randNIF));
```

```sh
Is 123456789 a valid NIF? true
Is 999999999 a valid NIF? false
Generated random NIF: ?????????
Is generated NIF valid? true
```

### Typescript

```ts
import { validateNIF, randomNIF } from '@edyspider/validate-nif';

const isValidNIF = validateNIF('123456789');
const isInvalidNIF = validateNIF('999999999');
const newRandNIF = randomNIF();

console.log('NIF is valid:', isValidNIF);
console.log('NIF is invalid:', isInvalidNIF);
console.log('New random NIF:', newRandNIF);
```

```sh
Is 123456789 a valid NIF? true
Is 999999999 a valid NIF? false
New random NIF: ?????????
```

## Known Issues

* [**Issues**](https://github.com/edyspider/validate-nif/issues)

## Authors

* [**EdySpider**](https://github.com/edyspider/)

## License

* **[MIT license](https://github.com/edyspider//validate-nif/blob/master/LICENSE)**
* Copyright 2024 &copy; [EdySpider](https://github.com/edyspider/)

