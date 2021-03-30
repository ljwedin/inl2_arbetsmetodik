const { test, expect } = require('@jest/globals');
const subtraction = require('./subtraction');

test('Subtracts 2 - 1 to equal 1', () => {
    expect(subtraction(2, 1)).toBe(1);
});

test('Subtracts 5 - 3 to equal 2', () => {
    expect(subtraction(5, 3)).toBe(2);
});

test('Subtracts 2 - -1 to equal 1', () => {
    expect(subtraction(2, -1)).toBe(3);
});