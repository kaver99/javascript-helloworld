'use strict'

// prototype
// function fullStack(backend, frontend) {
//     this.backend = backend;
//     this.frontend = frontend;

//     // prototype
//     // 내부 Closer : 해당함수가 외부에 있는 함수에 접근 할 수 있음
//     // Hoisting 개념으로 사용
//     fullStack.prototype.getBackend = () => this.backend;
//     fullStack.prototype.setBackend = () => this.backend = backend;

//     fullStack.prototype.getFrontend = () => this.frontend;
//     fullStack.prototype.setFrontend = () => this.frontend = frontend;
// }

// const FullStack = new fullStack('javascript', 'node.js');
// const backends = FullStack.getBackend(); // this.backend;
// const frontends = FullStack.getFrontend(); // this.frontend;

// console.log(backends);
// console.log(frontends);


// class
class fullStack {
    // await 키워드는 constructor에 사용 할 수 없음
    constructor(backend, frontend) {
        this.backend = backend;
        this.frontend = frontend;
    }

    getBackend() {
        return this.backend;
    }

    setBackend(backend) {
        return this.backend = backend;
    }

    getFrontend() {
        return this.frontend;
    }

    setFrontend(frontend) {
        return this.frontend = frontend;
    }
}

const FullStack = new fullStack('javascript', 'node.js');
const backends = FullStack.getBackend();
const frontends = FullStack.getFrontend();

console.log(backends);
console.log(frontends);
