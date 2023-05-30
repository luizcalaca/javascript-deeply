letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function countElement(string) {
    const stringArray = string.split("")
    const map = new Map();

    for(let one of stringArray) {
        if(letters.includes(one)) {
            if(map.get(one)){
                //pegar o número e acrescentar mais um
                map.set(one, map.get(one) + 1);
            }else {
                map.set(one, 1)
            }
        }
    }

    let maiorValor = -Infinity;
    let majorRepetition = '';

    for (const [chave, valor] of map.entries()) {
        if (valor > maiorValor) {
            maiorValor = valor;
            majorRepetition = chave
        }
    }

    return majorRepetition
}

countElement('I lot aaa bbbbbb')
