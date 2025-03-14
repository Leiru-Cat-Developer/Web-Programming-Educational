const http = require('http');

server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Welcome to the server');
        return response.end();
    }
    if (request.url === '/about') {
        //BLOCKING CODE
        // for (let i = 0; i < 100000; i++) {
        //     console.log(Math.random() * i);
        // }
        return response.end('About page');    
    }
    response.end('not found');
});

server.listen(3000);
console.log('Server on port 3000');