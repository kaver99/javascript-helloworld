'use strict'

const dns = require('dns')

// DNS 조회
dns.lookup('test.com', (err, address, family) => {
    console.log(`address: ${address}, family: ${family}`);
    // family 버전이 IPv4
})

// DNS 프로토콜을 사용하여 IPv4 주소들을 확인함
// addresses : 여러개의 address
dns.resolve4('archive.org', (err, addresses) => {
    if (err) throw err;
    // addresses 결과 데이터 객체를 string으로 변환
    const res = JSON.stringify(addresses);
    console.log(res);

    addresses.forEach(a => {
        dns.reverse(a, (err, hostnames) => {
            if (err) throw err;

            console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`);
        });
    });
});