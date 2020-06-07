'use strict'

const arr = [1, 2, 3];
const newArr = [];

arr.forEach(item => {
    // 각각의 item에 접근할 수 있음
    newArr.push(item);
});

console.log(newArr);