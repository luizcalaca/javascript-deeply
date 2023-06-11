const str = "Hello123 World456!";

const array = str.split("")

let count = 0
let buffer = ''
let space = ''

for (let index = 0; index < array.length; index++) {
    count++
    buffer += array[index]
    space += ' '
    if(count === 3) {
        count = 0;
        console.log(space + buffer)
        buffer = ''
    }
    
}
