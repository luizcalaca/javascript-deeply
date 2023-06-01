function isBalanced(s) {
    const array = s.split("")
    let arrayNew = []

    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case '{':
            case '}':
                arrayNew.push(0)
                break;
            case '(':
            case ')':
                arrayNew.push(1)
                break;
            case '[':
            case ']':
                arrayNew.push(2)
                break;
            default:
                arrayNew.push(999)
                break;
        }
    }

    let indice = arrayNew.length - 1;

    for (let index = 0; index < arrayNew.length/2; index++) {
        if(arrayNew[index] === arrayNew[indice]) {
            indice--;
        }else{
            return "NO"
        }
        
    }
    return "YES"
}

const str = '{{[[(())]]}}'
console.log(isBalanced(str))
