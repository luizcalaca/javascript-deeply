
function twoSum(array, target) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(array.includes(Math.abs(target-element))){
            return [index, array.indexOf(Math.abs(target-element))]
        }
    }
}

const array = [1,6,2,8]
const target = 10
console.log(twoSum(array, target))
