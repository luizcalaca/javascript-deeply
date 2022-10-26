const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('saved',  (arg) => {
    console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
});

emitter.on('deleted',  (arg) => {
    console.log(`A deleted event occurred: name: ${arg.name}`);
});

emitter.emit('saved', {
    id: 1,
    name: 'John Doe'
});

emitter.emit('deleted', {
    name: 'Calaca'
});


