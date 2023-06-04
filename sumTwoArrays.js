function twoSum(array1, array2) {
    let array1Item = array1[0]
    let array2Item = array2[0]

    let sum = 0
    let i = 0

    if(array1 === null || array2 === null)
        return 0

    while((array1Item != 0) || (array2Item != 0)) {
        sum += array1Item + array2Item
        i++
        array1Item = array1[i] || 0
        array2Item = array2[i] || 0
    }

    return sum
}

const array1 = [3,6,5,78]
const array2 = [5,6,9]
console.log(twoSum(array1, array2))
