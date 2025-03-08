const http = require('http');

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/about':
            response.write('About ...');
            return response.end();
        case '/profile':
            response.write('Welcome');
            return response.end();
        default:
            response.write(`
                    <style>
                        background: white;
                        color: black;
                    </style>
                    <h1>Not Found</h1>
                    <a href="/profile">Return</a>
                `);
            return response.end();
    }
});

server.listen(3000);

console.log('Server Listener Port: 3000');