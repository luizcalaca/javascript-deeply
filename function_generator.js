function* simple() {
    yield 1
    yield 2
    yield 3
}

let a = simple()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

function* generateId() {
    id = 0
    while (true) {
        yield id++
        if (id == 1) {
            break
        }
    }
}

const generate = generateId()
console.log(generate.next())
console.log(generate.next())

function* convertArrayIterator(array) {
    for (let i = 0; i < array.lenght; i++) {
        yield array[i]
    }
}