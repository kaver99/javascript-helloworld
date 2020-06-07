'use strict'

const fs = require('fs');

const filePath = './data-structure/testFile.txt';

// 파일 읽기
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err); 
        return;
    }
    console.log(data);
});

// 파일 쓰기
const content = 'something to write';
fs.writeFile(filePath, content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('write Complate.');
});