'use struct'

const arr = [2, 3, 4];

// Object.keys
// Object.value
// every(조건) : 모든 조건이 맞을때만 true, 1개라도 조건이 맞지 않으면 false
const isBiggerThenOne = arr.every(key => key > 1);
console.log(isBiggerThenOne);