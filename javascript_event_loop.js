console.log(1)
setTimeout(() => {
    console.log(2)
}, 2000)
console.log(3)
/**
 * Execution with Event Loop
 */

//CALL STACK - synchronous
console.log(1)
console.log(3)

//WEB API
//DOM(document, AJAX XMLHttpREquest, Timeout)
setTimeout(() => {
    console.log(2)
}, 2000)

// CALLBACK QUEUE - assynchronous
setTimeout(() => {
    console.log(2)
}, 2000)

//EVENT LOOP
//It always checking if call stack is empty and get some
//promise and resolve it on call stack.