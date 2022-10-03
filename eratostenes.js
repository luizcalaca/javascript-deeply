const nums = []
for (let index = 0; index < 30; index++) {
    nums.push(index)
}
console.log(nums)

nums.forEach((element, index) => {
    if(element % 2 === 0 && nums[index] !== 2){
        delete nums[index]
    }
})

console.log(nums)