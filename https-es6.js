'use strict'

const https = require('https');
const options = {
    hostname: 'google.com', // 도메인 이름
    port: 443,  // https protocol port
    path: '/login',  // https://hostname/path
    method: 'GET',  // GET, PUT, POST, DELETE
    key: fs.readFileSync('test/keys/client.pem'),  // 개인 키
    cert: fs.readFileSync('test/keys/client.crt'),  // 공개 키
    agent: false
}

const req = https.request(options, res => {
    console.log(`stateCode: ${res.statusCode}`);
    
    res.on('data', d => {
        // standard output
        process.stdout.write(d);
    });

    req.on('error', e => {
        console.log(e);
    });
});

req.end();