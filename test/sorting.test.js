const sorting = require("../src/sorting");

describe('selectionSort', () => {
    // BVA test cases for selectionSort
    var BVAdata = [
        [[], []],                      // Empty array
        [[1], [1]],                    // Array with a single element
        [[2, 1], [1, 2]],              // Array with two elements (inverted order)
        [[1, 2], [1, 2]],              // Array with two elements (sorted order)
        [[3, 1, 2], [1, 2, 3]],        // Array with three elements (random order)
        [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5]],  // Array with five elements (inverted order)
        [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],  // Array with five elements (sorted order)
    ];

    describe.each(BVAdata)
    ('BVAdata: selectionSort(%p), Expected: %p', (input, expected) => {
        test(`returns ${sorting.selectionSort(input)}`, () => {
            expect(sorting.selectionSort([...input])).toEqual(expected);
        });
    });

    // DT test cases for selectionSort
    var DTdata = [
        {
            input: [4, 2, 7, 1, 5],
            expected: [1, 2, 4, 5, 7]
        },
        {
            input: [5, 1, 5, 2, 3],
            expected: [1, 2, 3, 5, 5]
        },
        // Add more test cases as needed
    ];

    describe.each(DTdata)
    ('DT: selectionSort(%p), Expected: %p', ({ input, expected }) => {
        test(`returns ${sorting.selectionSort(input)}`, () => {
            expect(sorting.selectionSort([...input])).toEqual(expected);
        });
    });
});


describe('insertionSort', () => {
    // BVA test cases for insertionSort
    var BVAdata = [
        [[], []],                      // Empty array
        [[1], [1]],                    // Array with a single element
        [[2, 1], [1, 2]],              // Array with two elements (inverted order)
        [[1, 2], [1, 2]],              // Array with two elements (sorted order)
        [[3, 1, 2], [1, 2, 3]],        // Array with three elements (random order)
        [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5]],  // Array with five elements (inverted order)
        [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],  // Array with five elements (sorted order)
    ];

    describe.each(BVAdata)
    ('BVAdata: insertionSort(%p), Expected: %p', (input, expected) => {
        test(`returns ${sorting.insertionSort(input)}`, () => {
            expect(sorting.insertionSort([...input])).toEqual(expected);
        });
    });

    // DT test cases for insertionSort
    var DTdata = [
        {
            input: [4, 2, 7, 1, 5],
            expected: [1, 2, 4, 5, 7]
        },
        {
            input: [5, 1, 5, 2, 3],
            expected: [1, 2, 3, 5, 5]
        },
        // Add more test cases as needed
    ];

    describe.each(DTdata)
    ('DT: insertionSort(%p), Expected: %p', ({ input, expected }) => {
        test(`returns ${sorting.insertionSort(input)}`, () => {
            expect(sorting.insertionSort([...input])).toEqual(expected);
        });
    });
});
