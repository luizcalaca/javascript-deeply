const alphabet = ['a', 'b', 'c', 'd']

const verifyAnagram = (alphabet, string1, string2) => {
    const map1 = new Map()

    for(let cont = 0; cont < string1.length; cont++){
        if(alphabet.includes(string1[cont])) {
            if(!map1.get(string1[cont])){
                map1.set(string1[cont], 1)
            }else{
                let count = map1.get(string1[cont]) + 1
                map1.set(string1[cont], count)
            }
        }
    }

    const map2 = new Map()

    for(let cont = 0; cont < string2.length; cont++){
        if(alphabet.includes(string2[cont])) {
            if(!map2.get(string2[cont])){
                map2.set(string2[cont], 1)
            }else{
                let count = map1.get(string2[cont]) + 1
                map2.set(string2[cont], count)
            }
        }
    }

    if(map1.size != map2.size)
        return false
    
    for (var [key, val] of map1) {
        testVal = map2.get(key);
            // in cases of an undefined value, make sure the key
            // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }

    return true
}

console.log(verifyAnagram(alphabet, "asdf", "fdsa"))
