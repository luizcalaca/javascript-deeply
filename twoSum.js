
function twoSum(array, target) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(array.includes(Math.abs(target-element))){
            if(Math.abs(target-element) === array[index])
                return [index, index+1]
            else
                return [index, array.indexOf(Math.abs(target-element))]
        }
    }
}

const array = [1,1,8,8]
const target = 2
console.log(twoSum(array, target))
