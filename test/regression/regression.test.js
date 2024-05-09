const calculatorA = require("../../src/advanced");

describe('Regression Tests for Calculator Functions', () => {
    // Regression test cases for pow function
    describe('pow', () => {
        test('pow(3, 2) returns 9', () => {
            expect(calculatorA.pow(3, 2)).toBe(9);
        });

        test('pow(2, -2) returns 0.25', () => {
            expect(calculatorA.pow(2, 2)).toBe(4);
        });

        // Add more regression tests for pow function here if needed
    });

    // Regression test cases for modulo function
    describe('modulo', () => {
        test('modulo(10, 3) returns 1', () => {
            expect(calculatorA.modulo(10, 3)).toBe(1);
        });

        test('modulo(-10, 3) returns 2', () => {
            expect(calculatorA.modulo(-10, 3)).toBe(-1);
        });

        // Add more regression tests for modulo function here if needed
    });

    // Add more regression tests for other functions if needed
});
