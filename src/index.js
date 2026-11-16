// src/index.js

const SINGLE_DIGIT_PREFIXES = ['1', '2', '3', '5', '6', '8'];
const DOUBLE_DIGIT_PREFIXES = ['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99'];
const ALL_PREFIXES = [...SINGLE_DIGIT_PREFIXES, ...DOUBLE_DIGIT_PREFIXES];
const WEIGHTS = [9, 8, 7, 6, 5, 4, 3, 2];

/**
 * Computes the check digit (9th digit) from the first 8 digits of a NIF.
 * @param {string} base The first 8 digits.
 * @returns {number}
 */
function computeCheckDigit(base) {
    const sum = WEIGHTS.reduce((total, weight, index) => total + Number(base[index]) * weight, 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Returns a string with `count` random digits.
 * @param {number} count
 * @returns {string}
 */
function randomDigits(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 10)).join('');
}

/**
 * Validates a Portuguese NIF.
 * @param {unknown} value
 * @returns {boolean}
 */
export function validateNIF(value) {
    if (typeof value !== 'string' || !/^\d{9}$/.test(value)) {
        return false;
    }

    if (!SINGLE_DIGIT_PREFIXES.includes(value[0]) && !DOUBLE_DIGIT_PREFIXES.includes(value.slice(0, 2))) {
        return false;
    }

    return computeCheckDigit(value.slice(0, 8)) === Number(value[8]);
}

/**
 * Generates a random valid Portuguese NIF.
 * @returns {string}
 */
export function randomNIF() {
    const prefix = ALL_PREFIXES[Math.floor(Math.random() * ALL_PREFIXES.length)];
    const base = prefix + randomDigits(8 - prefix.length);
    return base + computeCheckDigit(base);
}