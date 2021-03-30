function division (a, b) {
    let numOne = +a;
    let numTwo = +b;
    if (!numOne || !numTwo) {
        return "Please enter valid input";
    } else {
        return numOne / numTwo;
    }
}

module.exports = division;