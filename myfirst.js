// var http = require("http");  
// http.createServer(function (request, response) {  
//  // Send the HTTP header   
//    // HTTP Status: 200 : OK  
//    // Content Type: text/plain  
//    response.writeHead(200, {'Content-Type': 'text/plain'});  
//    // Send the response body as "Hello World"  
//    response.end('Hello World..\n');  
// }).listen(8081);  
// // Console will print the message  
// console.log('Server running at http://127.0.0.1:8081/');  



// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!!!!!!!!!!!!');
// }).listen(8081);

// let result = path.dirname('/public_html/home/index.html');
// console.log(result);

// const os = require('os');

// let currentOS = {
//     name: os.type(),
//     architecture: os.arch(),
//     platform: os.platform(),
//     release: os.release(),
//     version: os.version()
// };

// console.log(currentOS);

// const os = require('os');
// console.log(`The server has been up for ${os.uptime()} seconds.`);

// const os = require('os');
// console.log(os.userInfo());


// const os = require('os');
// let totalMem = os.totalmem();
// console.log(totalMem);

// const os = require('os');
// let freeMem = os.freemem();
// console.log(freeMem);


//os.cpus();
// const { model, speed } = os.cpus()[0];

// console.log(`Model: ${model}`);
// console.log(`Speed (MHz): ${speed}`);

// const os = require('os');
// console.log(os.networkInterfaces());



// exports.myDateTime = function () {
//     return Date();
//   };

//   var http = require('http');
// var dt = require('./myfirst');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8081);


// var fs = require('fs');

// var readStream = fs.createReadStream('C:\\Users\\Manoj\\Classes\\Mern Stack\\Node js\\Working Files\\myfirst.js');

// /*Write to the console when the file is opened:*/
// readStream.on('open', function () {
//   console.log('The file is open');
// });

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the eventhandler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');


// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8081); //the server object listens on port 8080

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);


// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   /*Use our upper-case module to upper case a string:*/
//   res.write(uc("Hello World!"));
//   res.end();
// }).listen(8081);

// var http = require('http');
// var uc = require('upper-case');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
  
//   // Use the uc module to upper case a string:
//   res.write(uc("Hello World!"));

//   res.end();
// }).listen(8081);

//NPM
// const amount = 12

// if(amount < 10){
//   console.log('small number');
// }
// else{
//   console.log('large number');
// }

// console.log(` hey its my first node app`);

const galaxy = require('galaxy-lib');
console.log(galaxy.count());
