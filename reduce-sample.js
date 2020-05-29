'use strict'

// 리듀스
// 각각의 요소를 하나하나씩 접근(For문 처리하는 방식)하는 것과 동일한 효과를 줄 수 있으며, 훨씬 더 직관적으로 코드를 사용할 수 있음.

const number = [10, 20, 30, 40];

// number의 합계 구하기
const sum = number.reduce((tot, val) => tot + val);
console.log(sum);

// number의 평균 구하기
const avg = number.reduce((tot, val, idx, arr) => {
    tot += val;
    if (idx === arr.length - 1) {
        return tot/arr.length;
    } else {
        return tot;
    }
});
console.log(avg);


const numbers = [0, 1, 2, 3, 4, 5, 6]

// tot : total
// amt : amount
const res = numbers.reduce((tot, amt) => {
    if (amt > 0) tot.push(amt);
    return tot;
}, []);

console.log(res);

// arr 데이터가 각각 항목별 몇 번 반복되었는지에 대한 객체 생성
const arr = ['pdf', 'html', 'pdf', 'gif', 'gif', 'gif'];
// tot : total
// ext : extension
const res2 = arr.reduce((cnt, ext) => {
    // cnt[ext] : reduce 객체 접근 방식
    // (cnt[ext] || 0) : cnt[ext]가 undefined 인 경우 0을 반환
    cnt[ext] = (cnt[ext] || 0) + 1;
    return cnt;
}, {});

console.log(res2);
