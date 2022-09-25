function sumNumbers(firstNumber, secondNumber = 0) {
    const sum = this + firstNumber + secondNumber;

    console.log(sum)
}

//the bind apply the 5 value to the reserved work this into sumNumber
const bindResultFunction = sumNumbers.bind(5)

bindResultFunction(5) // 10