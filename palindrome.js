function checkPalindrome (string) {
    let stringToCheck = (string.toString()).toLowerCase();
    let reversedString = '';
    let isPalindrome = false;

    for (let i = stringToCheck.length; i > 0; i--) {
        reversedString += stringToCheck[i - 1];
    }

    if (stringToCheck == reversedString) {
        isPalindrome = true;
    }

    return isPalindrome;
}

module.exports = checkPalindrome;