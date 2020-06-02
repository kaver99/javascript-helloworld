const http = require('http');
const path = require('path');
const fs = require('fs');


// [create server object]
// http.createServer((req, res) => {
//     // write response
//     res.write('hello world!');
//     res.end();
// }).listen(port, () => {
//     console.log(`Http Server running http://127.0.0.1:${port}`);
// })

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), 'utf8', (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         { name: 'Kon', age: 21 },
    //         { name: 'Dun', age: 31 },
    //         { name: 'Landi', age: 42 },
    //         { name: 'Raiden', age: 27 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    // [build file path]
    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // [extension of file]
    let extname = path.extname(filepath);

    // [initial content type]
    let contentType = 'text/html';

    // [check ext and set content type]
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // [read file]
    fs.readFile(filepath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // [page not found]
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // [some server error]
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // [success]
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Http Server running http://127.0.0.1:${PORT}`);
})