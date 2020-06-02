const EventEmitter = require('events');

// [create class]
class MyEmitter extends EventEmitter {  }

// [init object]
const myEmitter = new MyEmitter();

// [listener]
myEmitter.on('event', () => {
    console.log('Event Call Complated.');
})

// [init event]
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');