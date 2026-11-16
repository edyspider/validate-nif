import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { validateNIF, randomNIF } from '@edyspider/validate-nif';

const VALID_PREFIXES = [
    '1', '2', '3', '5', '6', '8',
    '45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99',
];

/**
 * Builds a valid NIF from a prefix, padding with zeros and adding the check digit.
 * @param {string} prefix
 * @returns {string}
 */
function buildNIF(prefix) {
    const base = prefix.padEnd(8, '0');
    const sum = [...base].reduce((total, digit, index) => total + Number(digit) * (9 - index), 0);
    const remainder = sum % 11;
    const checkDigit = remainder < 2 ? 0 : 11 - remainder;
    return base + checkDigit;
}

describe('validateNIF', () => {
    test('accepts valid NIF numbers', () => {
        assert.equal(validateNIF('123456789'), true);
        assert.equal(validateNIF('264586522'), true); // Singular person
        assert.equal(validateNIF('314822690'), true); // Singular person (new)
        assert.equal(validateNIF('531643492'), true); // Collective person
        assert.equal(validateNIF('656892714'), true); // Public collective
        assert.equal(validateNIF('864632819'), true); // Company
        assert.equal(validateNIF('907309399'), true); // Irregular
    });

    test('rejects invalid NIF numbers', () => {
        assert.equal(validateNIF('999999999'), false); // Invalid
        assert.equal(validateNIF('12345678'), false); // Too short
        assert.equal(validateNIF('1234567890'), false); // Too long
        assert.equal(validateNIF('000000000'), false); // Invalid start
        assert.equal(validateNIF('451234567'), false); // Invalid middle
        assert.equal(validateNIF('332529011'), false); // Invalid end
    });

    test('rejects invalid input types', () => {
        assert.equal(validateNIF('abcdefghi'), false); // Letters instead of digits
        assert.equal(validateNIF(123456789), false); // Number instead of string
        assert.equal(validateNIF(null), false);
        assert.equal(validateNIF(''), false);
        assert.equal(validateNIF(undefined), false);
    });

    for (const prefix of VALID_PREFIXES) {
        test(`accepts a NIF starting with ${prefix}`, () => {
            assert.equal(validateNIF(buildNIF(prefix)), true);
        });
    }

    test('rejects a NIF starting with an invalid prefix', () => {
        for (const prefix of ['00', '40', '73', '96']) {
            assert.equal(validateNIF(buildNIF(prefix)), false, `prefix ${prefix}`);
        }
    });
});

describe('randomNIF', () => {
    test('generates valid NIF numbers', () => {
        for (let i = 0; i < 1000; i++) {
            const nif = randomNIF();
            assert.equal(typeof nif, 'string');
            assert.equal(nif.length, 9);
            assert.equal(validateNIF(nif), true, `generated ${nif}`);
        }
    });
});