function rotLeft(a, d) {
    
    for(let j = 0; j < d; j++){
        const element = a.shift()
        a.push(element)
    }
    return a
}

console.log(rotLeft([1,2,3], 2))
