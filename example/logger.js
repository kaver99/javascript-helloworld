const EventEmitter = require('events');
const uuid = require('uuid4');

class Logger extends EventEmitter {
    log(msg) {
        // Call Event
        this.emit('message', { id: uuid(), msg });
    }
}

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello World!');
logger.log('Hello!');
logger.log('World!');