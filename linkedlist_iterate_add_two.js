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

let list2 = new Node(0)
let n11 = new Node(2)
let n22 = new Node(3)
list2.next = n11
n11.next = n22

let linkedNew = new Node(0)
let currentNode = linkedNew
while(list1.next != null || list2.next != null) {
 list1 = list1.next
 list2 = list2.next

 result = list1.value + list2.value
 currentNode.next = new Node(result)
 currentNode = currentNode.next
}

console.log(linkedNew)
