//index.js

function validateNIF(value) {
    // Check if it is null
    if (value === null) {
        return false;
    }

    // Check if the input is exactly 9 characters long and contains only digits
    if (!/^\d{9}$/.test(value)) {
        return false;
    }

    // Ensure the input is a string
    if (typeof value !== 'string') {
        return false;
    }

    const validationSets = {
      one: ['1', '2', '3', '5', '6', '8'],
      two: ['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99']
    };
    
    // Check the starting digits
    if (!validationSets.one.includes(value.substr(0, 1)) && !validationSets.two.includes(value.substr(0, 2))) {
        return false;
    }

    // Calculate the check digit
    const calc = value[0] * 9 + value[1] * 8 + value[2] * 7 + value[3] * 6 + value[4] * 5 + value[5] * 4 + value[6] * 3 + value[7] * 2;
    const mod11 = (Number(calc) % 11);
    const checkDigit = mod11 < 2 ? 0 : 11 - mod11;
    
    // Verify the check digit
    return checkDigit === Number(value[8]);
}

module.exports = validateNIF;
