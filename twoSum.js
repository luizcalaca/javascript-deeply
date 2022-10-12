
const sum = (nums, target) => {
    const previousValues = {}

    nums.forEach((_element,id) => {
        const currentNumber = nums[id]
        const neededValue = target - currentNumber
        const index2 = previousValues[neededValue]
        if(index2 != null) {
            return [index2, id]
        }else {
            previousValues[currentNumber] = i
        }
    });
}