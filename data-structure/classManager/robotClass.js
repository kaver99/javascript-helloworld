class Robot {
    // 생성자
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}`)
    }
}

class Ai extends Robot {
    // 생성자
    constructor(name) {
        // 상위 생성자를 호출하는 기능
        super(name)
    }

    walk() {
        console.log(`walk: ${this.name}`)
    }
}

// const r = new Robot('Node.js');
// r.speak();

const a = new Ai('Node.js');
a.speak();
a.walk();
