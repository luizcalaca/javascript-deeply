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
items.set(Math.random *0.3652, { title: 'teste', year: 1990 })

items.forEach(element => {
    console.log(element.title)
})