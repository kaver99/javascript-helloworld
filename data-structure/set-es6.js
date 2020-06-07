'use strict'

const test = new Set();

test.add(1)
test.add(1)
test.add(2)
test.add(2)
test.add(3)

for(const i of test) {
    console.log(i);
}

// 데이터가 존재하는지 확인 시 .has()
const ret = test.has(2)
console.log(ret);