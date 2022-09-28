//insert, lookup, delete and search are O(1)

//access user.age is O(1)
//console.log(user.age)
let user = {
    age: 54,
    scream: () => {
        console.log('aaaaa')
    }
}

const items = new Map()
items.set(1, 'Primeiro')

items.forEach(element => {
    console.log(element)
})