const calculatorA = require("../../src/advanced")

// BVA test cases for pow function
describe('pow', () => {
    // BVA test cases for the base and exponent inputs
    var BVAdata = [
        [0, 0, 1],    // base and exponent are both zero
        [2, 0, 1],    // exponent is zero
        [0, 2, 0],    // base is zero
        [2, 3, 8],    // typical positive values
        [-2, 3, -8],  // typical negative base value with odd exponent
        [-2, 4, 16],  // typical negative base value with even exponent
    ];

    describe.each(BVAdata)
    ('BVAdata: pow(%i, %i), Expected: %i', (base, exponent, expected) => {
        test(`returns ${calculatorA.pow(base, exponent)}`, () => {
            expect(calculatorA.pow(base, exponent)).toBe(expected);
        });
    });
});

//DT test for pow
// DT test cases for pow function
describe('pow', () => {
    // DT test cases for the base and exponent inputs
    var DTdata = [
        [0, 0, 1],    // Case 1: base and exponent are both zero
        [2, 0, 1],    // Case 2: exponent is zero
        [0, 2, 0],    // Case 3: base is zero
        [2, 3, 8],    // Case 4: typical positive values
        [-2, 3, -8],  // Case 5: typical negative base value with odd exponent
        [-2, 4, 16],  // Case 6: typical negative base value with even exponent
    ];

    describe.each(DTdata)
    ('DT: pow(%i, %i), Expected: %i', (base, exponent, expected) => {
        test(`returns ${calculatorA.pow(base, exponent)}`, () => {
            expect(calculatorA.pow(base, exponent)).toBe(expected);
        });
    });
});

//------------------------------------------------MODULO-----------------------------------------------------------

// BVA test cases for modulo function
describe('modulo', () => {
    // BVA test cases for the dividend and divisor inputs
    var BVAdata = [
        [0, 1, 0],    // dividend is zero
        [1, 0, NaN],  // divisor is zero
        [0, -1, 0],   // dividend is zero with negative divisor
        [-1, 0, NaN], // negative dividend with zero divisor
        [1, 1, 0],    // typical positive values
        [-1, 1, -0],   // typical negative dividend value with positive divisor
        [1, -1, 0],   // typical positive dividend value with negative divisor
        [-1, -1, -0],  // typical negative values for both dividend and divisor
    ];

    describe.each(BVAdata)
    ('BVAdata: modulo(%i, %i), Expected: %i', (dividend, divisor, expected) => {
        test(`returns ${calculatorA.modulo(dividend, divisor)}`, () => {
            expect(calculatorA.modulo(dividend, divisor)).toBe(expected);
        });
    });
});


// DT test cases for modulo function
describe('modulo', () => {
    // DT test cases for the dividend and divisor inputs
    var DTdata = [
        [0, 5, 0],    // dividend is zero
        [8, 3, 2],    // typical positive values
        [-8, 3, -2],  // typical negative dividend value
        [8, -3, 2],   // typical negative divisor value
        [-8, -3, -2], // typical negative values for both dividend and divisor
    ];

    describe.each(DTdata)
    ('DT: modulo(%i, %i), Expected: %i', (dividend, divisor, expected) => {
        test(`returns ${calculatorA.modulo(dividend, divisor)}`, () => {
            expect(calculatorA.modulo(dividend, divisor)).toBe(expected);
        });
    });
});
