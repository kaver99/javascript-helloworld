'use strict'

// 지정한 최소 보장시간 ms 시간 후 실행
const timeoutObj = setTimeout(() => {
    console.log('fist');
}, 0);

// 지연시간 없이 실행
const immediateObj = setImmediate(() => {
    console.log('second')
});

// 특정한 간격에 맞춰 실행
const intervalObj = setInterval(() => {
    console.log('third')
}, 1000);

// [ Timer 초기화 ]
// TimeOut
clearTimeout(timeoutObj);
// Immediate
clearImmediate(immediateObj);
// Interval
clearInterval(intervalObj);