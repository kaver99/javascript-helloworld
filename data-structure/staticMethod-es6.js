'use static'

class test {
    constructor() {
        this.config = {}
    }
    
    static call () {
        // 클래스의 생성자를 접근하지 않고 클래스 내부에 바로 접근하여 함수를 실행 할 수 있음
        // 생성자에 선언된 객체나 변수등 어떠한 자료도 접근 할 수 없음
        console.log('static method');
    }
}

test.call();