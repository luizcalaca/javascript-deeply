const arr = [3,-7,0]

function handle(arr) {
    compare = 1000000000

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(index == 1)
            return compare
        for (let index = 1; index < arr.length; index++) {
            result = Math.abs(element-arr[index])
            if(result <= compare) {
                compare = result
                continue
            }
            break
        }
    }
    return compare
}

console.log(handle(arr))


