const text = 'things'
let buffer = ''

for (counter = text.length - 1; counter > 0; counter--) {
    buffer += text[counter]
}

console.log(buffer)