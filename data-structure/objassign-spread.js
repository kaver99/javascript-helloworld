'use strict'

const obj = {
    title: 'node.js'
}

const newObj = {
    name : 'mongodb'
}

const ret = { 
    ...obj,
    ...newObj
 }
console.log(ret);

const arr = [1, 2, 3]
const newArr = [4, 5, 6]

const ret2 = [
    ...arr,
    ...newArr
]
console.log(ret2);



// const ret = Object.assign({}, obj, newObj);