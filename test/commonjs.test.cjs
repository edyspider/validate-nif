const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateNIF, randomNIF } = require('@edyspider/validate-nif');

test('works with require()', () => {
    assert.equal(typeof validateNIF, 'function');
    assert.equal(typeof randomNIF, 'function');
    assert.equal(validateNIF('123456789'), true);
    assert.equal(validateNIF(randomNIF()), true);
});