const { test, expect } = require('@jest/globals');
const checkPalindrome = require('./palindrome');

test('Sends in "naturrutan" to check if palindrome, to be true', () => {
    expect(checkPalindrome("naturrutan")).toEqual(true);
});

test('Sends in "babar" to check if palindrome, to be true', () => {
    expect(checkPalindrome("babar")).toEqual(false);
});

test('Sends in 123 to check if palindrome, to be false', () => {
    expect(checkPalindrome(123)).toEqual(false);
});