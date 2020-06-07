'use strict'

// 즉시 호출 후 반환
const promise1 = new Promise((resolve, reject) => resolve('즉시 호출'));

// 3000 millisecond 후 실행 후 반환
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('3초 뒤에 호출'), 3000);
})

// promise1도 3초 기다린 후 호출됨
// 다수의 비동기 promise에 대해 모든 작업의 완료를 보장받을 수 있음
Promise.all([promise1, promise2]).then(values => console.log(values));

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('2초 뒤 반환'), 2000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('즉시 실행'), 0);
    // setImmediate(() => resolve('즉시 실행'));
});

// 다수의 비동기 promise에 대해 우선 완료된 작업에 대해서만 보장받을 수 있음
Promise.race([promise3, promise4]).then(values => console.log(values));
