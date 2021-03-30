function reverseString (string) {
    let reversedString = '';
    let inputString = string.toString();
    for (let i = inputString.length; i > 0; i--) {
        reversedString += inputString[i - 1];
    }
    return reversedString;
}

module.exports = reverseString;