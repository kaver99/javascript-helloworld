const fs = require('fs');
const path = require('path');

// [create folder]
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if(err) throw err;
    console.log(`Folder Created. [${__dirname+'/test'}]`);
});

// [create and write th file]
fs.writeFile(path.join(__dirname, '/test', 'hello.text'), 'Hello World!!', (err) => {
    if(err) throw err;
    console.log(`File writted. [${__dirname+'/test'}]`);

    // [file append]
    fs.appendFile(path.join(__dirname, '/test', 'hello.text'), ' Node.js Started', (err) => {
        if(err) throw err;
        console.log(`File appended. [${__dirname+'/test'}]`);
    });
});

// [read file]
fs.readFile(path.join(__dirname, 'test', 'hello.text'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// [rename file]
fs.rename(path.join(__dirname, '/test', 'hello.text'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log(`File renamed. [${__dirname+'/test/'+'hello.text'}] -> [${__dirname+'/test/'+'helloworld.txt'}]`);
});