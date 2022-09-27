const test = [2]
test.push(2)
test.push(7)
test.push(19)
console.log(test)

const strings = ['a', 'b', 'c']
//4*4 = 16 bytes of storage

//O(1)
strings.push('e') //Add to the end

//O(1)
strings.pop(); //remove the last item

//O(n) reorganizing the indexes of array
strings.unshift('x') //insert at the start of the Array

//O(n) reorganizing the indexes of array
strings.splice(1, 1,) //delete an item at 1 index

console.log(strings)