const array = ['apple', 'banana', 'bread']

const search = (search) => {
    const result = array.filter((element) => {
        return element.includes(search)
    })
    return result
}

console.log(search('apple'))