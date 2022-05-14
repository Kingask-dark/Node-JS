const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

// Initilize object
const myEmitter = new MyEmitter();

// add listner for the log events
myEmitter.on('log',(msg) => logEvents(msg));

setTimeout(() => {
    // Emit events
    myEmitter.emit('log','log event emmited!');
},2000);

