// creating a server
const http = require('http'); // import core module

const routes = require('./routes'); // import custom file

const server = http.createServer(routes.handler); // createServer event never finishes by default

console.log(routes.someText);

server.listen(3000);