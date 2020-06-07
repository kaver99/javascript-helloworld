'use strict'

const obj = {
    title: 'node.js',
    value: 'mongoDB'
}

// 과거 방식
// const title = obj.title;
// const value = obj.value;

// 비구조화 방식
const { title, value } = obj;
console.log(title, value);

// 배열 비구조화
const arr = [0, 1, 2];
const [, a, b] = arr; // 배열은 자릿수를 마추기 위함
console.log(a, b);

