const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('saved',  (arg) => {
    console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
});

emitter.emit('saved', {
    id: 1,
    name: 'John Doe'
});



