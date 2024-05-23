const validateNIF = require('../src/index');

test('valid NIF numbers', () => {
    expect(validateNIF('123456789')).toBe(true);
    expect(validateNIF('264586522')).toBe(true); // Singular Person
    expect(validateNIF('314822690')).toBe(true); // Singular Person New
    expect(validateNIF('531643492')).toBe(true); // Collective Person
    expect(validateNIF('656892714')).toBe(true); // Public Collective
    expect(validateNIF('864632819')).toBe(true); // Company
    expect(validateNIF('907309399')).toBe(true); // Irregular
});

test('invalid NIF numbers', () => {
    expect(validateNIF('999999999')).toBe(false);  // invalid
    expect(validateNIF('12345678')).toBe(false);  // too short
    expect(validateNIF('1234567890')).toBe(false);  // too long
    expect(validateNIF('000000000')).toBe(false);  // invalid start
    expect(validateNIF('451234567')).toBe(false);  // invalid middle
    expect(validateNIF('332529011')).toBe(false);  // invalid end
});

test('invalid input types', () => {
    expect(validateNIF('abcdefghi')).toBe(false);  // letter instead of numbers
    expect(validateNIF(123456789)).toBe(false);  // number instead of string
    expect(validateNIF(null)).toBe(false); // null value
    expect(validateNIF('')).toBe(false); // empty value
    expect(validateNIF(undefined)).toBe(false); // undefined value
});
