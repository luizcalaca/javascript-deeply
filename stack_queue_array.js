//Stack - LIFO
let stack = new Array(1,2,3,6)

console.log(stack.pop())
console.log(stack)
console.log(stack.push(3))
console.log(stack)
stack = stack.slice(1)
console.log(stack)

//Queue - FIFO
let queue = new Array(1,2,3,6)
console.log(queue.shift())
console.log(queue)