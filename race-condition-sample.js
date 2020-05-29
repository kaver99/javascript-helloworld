

// // Race Condition
// // Promise가 포함된 배열을 map함수로 이용할 경우 비동기적으로 수행되기 때문에 우선순위가 랜덤하게된다.
// [Promise1, Promise2, Promise3].map(item => {
//   // 비동기적 코드 사용하면 안됨.
// });

// [Promise1, Promise2, Promise3].forEach(item => {
//   // 비동기적 코드 사용하면 안됨.
// });

// [Promise1, Promise2, Promise3].map(async item => {
//   // item 앞 async를 붙여 비동기적으로 결과 처리하도록 할 수 없음.
//   // 결과가 올바르지 않게 나옴.(시스템의 자원, 네트웍 환경등의 문제로 처리되는 순서가 보장되지 않음)
// });

// [Promise1, Promise2, Promise3].forEach(async item => {
//   // item 앞 async를 붙여 비동기적으로 결과 처리하도록 할 수 없음.
//   // 결과가 올바르지 않게 나옴.(시스템의 자원, 네트웍 환경등의 문제로 처리되는 순서가 보장되지 않음)
// });

// // 비동기적 코드로 정의된 배열의 해결 방법
// const arr = [Promise1, Promise2, Promise3];
// for(const item of arr) {
//     // 비동기 코드 사용 가능
// }


class Lock {
    constructor() {
        // 내부에서만 사용하는 변수 정의 시 변수명 앞 '_'를 붙임
        this._locked = false;
        this._waiting = []; // 대기열
    }
    
    //
    lock() {
        // unlock에 대해 정의
        // unlock이 lock 안에 정의되어 있음
        const unlock = () => {
            let nextResolve; // 다음 unlock할 대상
            if(this._waiting.length > 0) {
                nextResolve = this._waiting.pop(0);
                console.log(nextResolve);
                nextResolve(unlock);
                
            } else {
                this._locked = false;
            }
        }
        if(this._locked) {
            return new Promise(resolve => {
                this._waiting.push(resolve);
            })
        } else {
            // lock을 해야한다
            this._locked = true;
            return new Promise(resolve => {
                resolve(unlock);
            })
        }
    }
}

let total = 10;

async function getTotal() {
    return total;
}

async function setTotal(value) {
    return value;
}

async function increment(value, inc) {
    return value + inc;
}

const account = new Lock();

async function add() {
    let current, newValue;

    // [[ 트랜젝션 묶음 시작 ]]
    // await 코드 앞 unlock 처리
    unlock = await account.lock();

    current = await getTotal();
    newValue = await increment(current, 20);
    await setTotal(newValue);

    // lock처리
    await unlock();
    // [[ 트랜젝션 묶음 종료 ]]
}

//
async function main () {
    let transaction1, transaction2;
    transaction1 = add();
    transaction2 = add();
    await transaction1
    await transaction2
    console.log(await getTotal());
}

main();