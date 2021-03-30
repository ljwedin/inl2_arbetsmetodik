const reverseString = require('./reverse');

test('Sends in "hello world" to reverse, expect result "dlrow olleh', () => {
    expect(reverseString("hello world")).toEqual("dlrow olleh");
});

test('Sends in "foo bar" to reverse, expect result "rab oof', () => {
    expect(reverseString("foo bar")).toEqual("rab oof");
});

test('Sends in 12345 to reverse, expect result "54321', () => {
    expect(reverseString(12345)).toEqual("54321");
});