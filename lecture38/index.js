const EventEmitter = require('events');
const emitter = new EventEmitter();
const emitter students=(time) => {
    console.log('time: ${time} - students should be in the class');
}
// emitter.on("bell-rang", () => {
//     console.log("teacher should be in the class")
// })
emitter.emit("bell-rang")
