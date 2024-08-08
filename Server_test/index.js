const { isUtf8 } = require('buffer');
const http = require('http');
const { encode } = require('punycode');

http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.write('hello world\n元気か？', isUtf8);
        res.end();
    } else {
        res.statusCode = 404;
        res.write('Not Found\n');
        res.end();
    }
}).listen(3000);