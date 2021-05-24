const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    //     // // Add a content type or write to the headers
    //     // res.writeHead(200, { 'Content-Type': 'text/html' });
    //     // res.end('<h1> Home </h1>')
    // }

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // // If we were creating a rest API - we would be sending json
    // if(req.url === '/api/user') {
    //     const user = [
    //        { name: 'Bob Smoth', age: 40 },
    //        { name: 'John Doe', age: 30 },
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    // Build dynamic file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    console.log(filePath);

    res.end();
});


// App might run on port provided by the host 
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server is running'));
