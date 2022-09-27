const number = [2, 7, 8, 9, 10, 13, 17, 19, 21, 0]

function binary(items, value) {
    let firstIndex = 0
    let lastIndex = items.length - 1
    let middle = Math.floor((lastIndex + firstIndex) / 2)
    console.log("middle", middle)

    while (items[middle] !== value) {
        if (items[middle] < value)
            return true
    }

    return true
}
console.log(number.sort())
console.log(binary(number.sort(), 19))