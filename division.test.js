const { test, expect } = require('@jest/globals');
const division = require('./division');

test('Divides 4 / 2 to equal 2', () => {
    expect(division(4, 2)).toBe(2);
})

test('Divides 9 / 3 to equal 3', () => {
    expect(division(9, 3)).toBe(3);
})

test('Divides 4 / 0 to equal "Please enter valid input"', () => {
    expect(division(4, 0)).toBe("Please enter valid input");
})