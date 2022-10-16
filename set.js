const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

//const unionAB = new Set([...setA, ...setB])
//console.log(unionAB.values());

    const subSet = (setB, setA) => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(!setA.has(element))
                return false
        }
    return true
    }

console.log(subSet(setB, setA))

