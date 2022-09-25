function sumNumbers(firstNumber, secondNumber) {
    const sum = this + firstNumber + secondNumber;

    console.log(sum)
}

//Similiar to call but the second parameter is the function's parameters
sumNumbers.apply(5, [2, 7]) // 14