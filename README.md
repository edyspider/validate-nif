# Validate-NIF

A simple npm package to validate Portuguese fiscal identification numbers (NIF).

---

## Installation

```sh
npm i @edyspider/validate-nif
```

## Usage

```js
const validateNIF = require('@edyspider/validate-nif');

const validNIF = '123456789';
const invalidNIF = '999999999';

console.log(`Is ${validNIF} a valid NIF?`, validateNIF(validNIF));
console.log(`Is ${invalidNIF} a valid NIF?`, validateNIF(invalidNIF));
```

```sh
Is 123456789 a valid NIF? true
Is 999999999 a valid NIF? false
```

## Known Issues

* [**Issues**](https://github.com/edyspider/validate-nif/issues)

## Authors

* [**EdySpider**](https://github.com/edyspider/)

## License

* **[MIT license](https://github.com/edyspider//validate-nif/blob/master/LICENSE)**
* Copyright 2024 &copy; [EdySpider](https://github.com/edyspider/)
