function findElement(string) {
    const stringArray = string.split(" ")

    let initial = 0

    for(let word of stringArray) {
        initial += word.length  
    }

    console.log(initial)
}

findElement('I lot')
