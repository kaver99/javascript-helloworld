
function study(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;

    // 비정상 코드
    // prototype func없이 접근
    // 여기서 Arrow function의 this는 context객체의 글로벌 함수를 호출할 수 있으므로 사용이 가능함
    // closure 함수
    this.func1 = () => {
        console.log
    }

}

const problem = new study(undefined, undefined);
// 함수 호출을 했을 시 기능상의 문제는 없으나 참조하는 Closure함수가 메모리 상에서 기억되어 있어 누수가 발생
problem.func1(); 

