const { test, expect } = require('@jest/globals');
const checkPalindrome = require('./palindrome');

test('Sends in "naturrutan" to check if palindrome, to be true', () => {
    expect(palindrome("naturrutan")).toEqual(true);
});

test('Sends in "babar" to check if palindrome, to be true', () => {
    expect(palindrome("babar")).toEqual(false);
});

test('Sends in 123 to check if palindrome, to be true', () => {
    expect(palindrome(123)).toEqual(false);
});