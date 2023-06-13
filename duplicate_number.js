function duplicate(array) {
    let map = new Map()
    for (let i = 0; i < array.length; i++) {
        if(map.has(array[i])) {
            map.set(array[i], map.get(array[i]) + 1)
        }else{
            map.set(array[i], 1)
        }
    }
    
    for( let [key, value] of map){
        if(value !=1) {
            return key
        }
    }

    return 0
}

const array = [1,2, 3, 4, 4]
console.log(duplicate(array))
