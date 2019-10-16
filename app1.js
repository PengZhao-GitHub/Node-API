//Node package manager
//Asynchronous JavaScript
//CRUD operations
//Data validation
//Authentication and Authorization
//Handling and logging errors
//Unit and integration testing
//Test-driven development
//Deployment

//Clean coding and refactoring
//Secuirty best practices
//Useful libaries
//Common mistakes

//Path module
/*
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// OS module
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('total memory: ', totalMemory);
console.log('freeMemory: ', freeMemory);

//Template string
// ES6/ES2015: ESMAScript 6
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

//FileSystem module
const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

fs.readdir('./', function(err, files){
    if (err) 
        console.log('Error', err);
    else 
        console.log('Result: ', files);
});

//call back funciton

function callback(err, files) {
    if (err)
        console.log('Error', err);
    else    
        console.log('Result: ', files)
}

fs.readdir('../', callback);

console.log('---------------------------------------');


//Event module
const EventEmitter = require('events'); //it is a class
const emitter = new EventEmitter();

//Register a listener
//emitter.on('myevent', function(arg){
//    console.log('listener called: ', arg);
//})
//Arrow function
emitter.on('myevent', (arg) => {
    console.log('Lisenter called in arrow funciton: ', arg);
});

//Raise an event
emitter.emit('myevent', 'helloworld','Peng Zhao');
emitter.emit('myevent', {name: 'Peng Zhao', age: 45})

console.log('-----------------------------------------');
*/
//
//const logger = require('./logger');
//logger.mylog('This is Peng');

/*
const LoggerModule = require('./logger');
const logger = new LoggerModule.Logger();

logger.on('myevent',(arg)=>{
    console.log('Listner called', arg);
})


logger.log('message');

*/

const http = require('http');

//const server = http.createServer();

//server.on('connection', (socket)=>{
//    console.log('new connection', socket);
//})
/*
const server = http.createServer(function(req, res){
    if (req.url === '/' ) {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/api/course'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...');
*/

/*
RESTful Services

REST: Representational State Transfer

http - CRUD operations
- create
- read
- update
- delete

HTTP METHODS
- GET -> get data
- POST -> add data
- PUT -> Update datea
- DELETE

*/

