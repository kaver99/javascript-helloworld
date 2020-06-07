'use strict'

let string = 'node.js and mongoDB';

// 해당하는 요소가 문자열 시작에 있는지
let isStartWith = string.startsWith('n');

// 해당하는 요소를 포함하고 있는지
let isIncludes = string.includes('and');

// 해당하는 요소가 문자열 끝에 있는지
let isEndWith = string.endsWith('B');

// 3가지 조건이 모두 맞는지
const checkIfContains = () => {
    if(isStartWith && isIncludes && isEndWith) {
        return true;
    }
}

const ret = checkIfContains();
console.log(ret);


// 1가지 조건만 맞으면
const checkIfContains2 = () => {
    if((isStartWith || isIncludes) && isEndWith) {
        return true;
    }
}

const ret2 = checkIfContains2();
console.log(ret2);