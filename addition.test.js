const { test, expect } = require('@jest/globals');
const addition = require('./addition');

test('Adds 1 + 2 to equal 3', () => {
    expect(addition(1, 2)).toBe(3);
});

test('Adds 2 + 3 to equal 5', () => {
    expect(addition(2, 3)).toBe(5);
});

test('Adds -2 and 3 to equal 1', () => {
    expect(addition(-2, 3)).toBe(1);
});