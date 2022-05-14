const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter {};
// Initilize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    const extension = path.extname(req.url);
    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }


});

// let filePath;
// switch (req.url) {
//     case '/':
//         res.statusCode = 200;
//         filePath = path.join(__dirname, 'views', 'index.html');
//         fs.readFile(filePath, 'utf-8', (err, data) => {
//             res.end(data);
//         });
//         break;
// }

// let filePath;
// if(req.url === '/' || req.url === 'index.html'){
//     res.statusCode = 200;
//     res.setHeader('Context-Type','text/html');
//     filePath = path.join(__dirname,'views','index.html');
//     fs.readFile(filePath,'utf-8',(err,data) => {
//         res.end(data);
//     });
// }


server.listen(PORT, () => {
    console.log(`Server running in Port : ${PORT}`);
});




// add listner for the log events
// myEmitter.on('log',(msg) => logEvents(msg));

// setTimeout(() => {
//     Emit events
//     myEmitter.emit('log','log event emmited!');
// },2000);