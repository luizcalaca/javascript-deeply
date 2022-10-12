class Node {

    constructor(value){
        this.value = value
        this.next = null
    }
}

let list1 = new Node(0)
let n1 = new Node(1)
let n2 = new Node(2)

list1.next = n1
n1.next = n2

while(list1.next != null) {
 list1 = list1.next
 console.log(list1.value)
}
