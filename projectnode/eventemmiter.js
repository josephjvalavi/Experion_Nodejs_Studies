//Importing events

const EventEmitter = require('events');

   

// Initializing event emitter instances

var eventEmitter = new EventEmitter();

 

// Registering to myEvent

eventEmitter.on('myEvent', (msg) => {

   console.log(msg);

});

 

// Triggering myEvent

setTimeout(()=>{



    eventEmitter.emit('myEvent', "First event");



},2000)