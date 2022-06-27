const EventEmitter = require('events');
const event = new EventEmitter();

//create a event
event.on('promise', (par1, par2)=>{
    console.log(`its promise event, ${par1} + ${par2}`);
})

event.on('promise', ()=>{
    console.log(`you can add events in one`);
})

//call to event
event.emit('promise', '1','2');