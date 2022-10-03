var points = function (ops) {
    var result = 0
    record = []
    if(ops.length >=1 && ops.length <= 1000){
        for(var index = 0; index < ops.length; index++) {
            if(ops[index].toString().includes('+')){
                record.push(parseInt(record[record.length-1]) + parseInt(record[record.length-2]))
            }else if(ops[index].toString().includes('D')){
                let double = parseInt(record[record.length - 1]) * 2
                record.push(double)
            }else if(ops[index].toString().includes('C')) {
                record.splice(record.length-1,1)
            }else {
                record.push(parseInt(ops[index]))
            }
        }
    }

    record.forEach(element => {
        result += element
    });

    return result
}

let array = ['5', '2', 'C', 'D', '+']
let array2 = ['5', '-2', '4', 'C', 'D', '9', '+', '+' ]
console.log(points(array2))