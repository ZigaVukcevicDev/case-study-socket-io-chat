import { createServer } from 'http';

createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<input type="text" value="testing"/>');

}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');