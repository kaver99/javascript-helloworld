'use strict'

// [ 1. 함수를 호출하는 인자로 배열을 사용할 때 ]
const add = (a, b, c) => {
    return a + b + c;
}

var arrData = [1, 2, 3];
const result = add(...arrData);
console.log(result);


// [ 2. 배열 리터럴 - 1 ]
var arr1 = [3, 4, 5];
var arr2 = [1, 2, ...arr1, 6, 7, 8];
console.log(arr2);


// [ 2. 배열 리터럴 - 2 ]
var numArr1 = [1, 2, 3];
var numArr2 = [4, 5, 6];
numArr1.push(...numArr2);
console.log(numArr1);


// [ 3. 배열 리터럴 비구조화(iterableObj를 선언하지 않고 할당) ]
const [a, b, ...arrs] = [1, 2, 3, 4, 5];
console.log([a, b, ...arrs]);