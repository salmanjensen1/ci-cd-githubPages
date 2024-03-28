const calculator = require("../../src/basic")

describe('Add', ()=>{
    var BVAdata = [
        [1, 2, 3],
        [4, 5, 9],
        [3, 12, 15],
        [4, 6, 10]
    ]
    describe.each(BVAdata)
    ('BVAdata: add(%i, %i), Expected: %i', (a, b, expected)=>{
        test(`returns ${calculator.add(a,b)}`, ()=>{
            expect(calculator.add(a, b)).toBe(expected);
        })
    })

    var DTdata=[
        [0, 89, 89],
        [-17, -35, -52],
        [65, -12, 53],
        [-78, 24, -54]
    ]

    describe.each(DTdata)
    ('DT: add(%i, %i), Expected: %i', (a, b, expected)=>{
        test(`returns ${calculator.add(a,b)}`, ()=>{
            expect(calculator.add(a, b)).toBe(expected);
        })
    })

})


// BVA and DT tests for subtract function
describe('Subtract', () => {
    var BVAdata = [
        [1, 2, -1],    // typical positive values
        [4, 5, -1],    // typical positive values
        [3, 12, -9],   // typical positive and negative values
        [4, 6, -2],    // typical positive values
    ];

    describe.each(BVAdata)
    ('BVAdata: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a, b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 89, -89],    // typical positive and negative values
        [-17, -35, 18],  // typical negative values
        [65, -12, 77],   // typical positive and negative values
        [-78, 24, -102], // typical negative values
    ];

    describe.each(DTdata)
    ('DT: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a, b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });
});

// BVA and DT tests for multiply function
describe('Multiply', () => {
    var BVAdata = [
        [1, 2, 2],     // typical positive values
        [4, 5, 20],    // typical positive values
        [3, 0, 0],     // zero multiplication
        [-4, 6, -24],  // typical positive and negative values
    ];

    describe.each(BVAdata)
    ('BVAdata: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a, b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 89, 0],    // zero multiplication
        [-17, -35, 595],  // typical negative values
        [65, -12, -780],   // typical positive and negative values
        [-78, 24, -1872], // typical negative values
    ];

    describe.each(DTdata)
    ('DT: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a, b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });
});

// BVA and DT tests for divide function
describe('Divide', () => {
    var BVAdata = [
        [1, 2, 0.5],    // typical positive values
        [4, 2, 2],      // typical positive values
        [3, 0, Infinity],     // division by zero
        [-4, 6, -0.6666666666666666],  // typical positive and negative values
    ];

    describe.each(BVAdata)
    ('BVAdata: divide(%i, %i), Expected: %f', (a, b, expected) => {
        test(`returns ${calculator.divide(a, b)}`, () => {
            expect(calculator.divide(a, b)).toBeCloseTo(expected);
        });
    });

    var DTdata = [
        [0, 89, 0],    // zero division
        [-17, -35, 0.4857142857142857],  // typical negative values
        [65, -13, -5],   // typical positive and negative values
        [-78, 24, -3.25], // typical negative values
    ];

    describe.each(DTdata)
    ('DT: divide(%i, %i), Expected: %f', (a, b, expected) => {
        test(`returns ${calculator.divide(a, b)}`, () => {
            expect(calculator.divide(a, b)).toBeCloseTo(expected);
        });
    });
});
