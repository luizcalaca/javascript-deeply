const nums = [1,2,3,3,4]
const test = [6,7,8]

function mergeSortedArray(array1, array2) {
    const mergedArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1

    if(array1.length ==0) {
        return array2
    }
    if(array2.length ==0) {
        return array1
    }

    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i]
            i++
        }else{
            mergedArray.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }

    return mergedArray

}

console.log(mergeSortedArray([0,3,4], [1,4,6,9]))
