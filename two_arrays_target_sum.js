function twoArrays(array1, array2, target) {
    for (let index = 0; index < array1.length; index++) {
        if(array2.includes(Math.abs(target - array1[index]))){
            return [array1[index], Math.abs(target - array1[index])]
        }
    }

    return []
}

const array1 = [5,3,8,4,5]
const array2 = [2,9,8,6,3]
let target = 8

console.log(twoArrays(array1, array2, target))


