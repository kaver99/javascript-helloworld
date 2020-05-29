// ----------------------------
// 비동기 제너레이터 패턴
// ----------------------------
'use strict'

class Sample {
    // 1. 메소드 방식
    *gen() {
        let cnt = 0;
        while(true) {
            yield cnt++;
        }
    }

    // 2. Computed Property(계산된 속성) 방식
    *[Symbol.iterator] () {
        let cnt = 0;
        yield cnt++;
    }
}

const fn = new Sample();
const gn = fn.gen();
console.log(gn.next());
console.log(gn.next());
console.log(gn.next());

const fn1 = new Sample();
console.log(Array.from(fn1));
console.log(Array.from(fn1));
console.log(Array.from(fn1));