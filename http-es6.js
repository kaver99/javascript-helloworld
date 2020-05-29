'use strict'

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;  // http 응답 결과 코드 
    res.setHeader('Content-Type', 'text/html'); // 데이터 타입 지정
    res.end('<div>Hello World!</div>');
});

// 외부 환경 변수로 지정한 PORT
const port = process.env.PORT || 5000;

// 서버 응답 처리 가능하도록 Listen 처리
server.listen(port, () => {
    console.log(`Server is running http://127.0.0.1:${port}`);
})