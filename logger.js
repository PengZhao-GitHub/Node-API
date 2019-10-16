var url = 'http://mylogger.io/log';

const EventEmitter = require('events'); //it is a class
//const emitter = new EventEmitter();

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('myevent', {id:1, url: url});
    }

}



module.exports.Logger = Logger

