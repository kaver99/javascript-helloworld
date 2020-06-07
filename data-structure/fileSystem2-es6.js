'use strict'

const fs = require('fs');
const { promisify } = require('util'); // 비구조화 방식

const filePath = './data-structure/testFile.txt';

// Callback 함수를 promise로 변환
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

// 
const writeAndRead = async (data = '') => {
    try {
        // await : 해당하는 코드가 완료되기 전까지 멈추게 함
        // await -> promise
        await write(filePath, data)
        // 비동기 처리가 완료되면 리턴
        return (await read(filePath))
    } catch (e) {
        console.error(e);
    }
}

writeAndRead('something to write!!');