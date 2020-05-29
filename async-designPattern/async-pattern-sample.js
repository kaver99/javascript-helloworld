'use strict'

// constructor 안에서 비동기 함수가 접근 가능해야 함

class DatabaseManager {
    constructor(props) {
        this.props = props;
        // this.init: 변수
        // init: 아래 선언한 function, Promise Cache(상태:Pending)- 최초 1번만 수행됨
        this.init = init;
    }

    query () {
        // 데이터베이스 구현체 - QUERY('') Agnostic

    }

    // 생성자에 사용함에 의해 Promise Cache 살태가 되어 최초 1번만 수행된다.
    async init() {
    }

    async newMember() {
    }

    async deleteMember() {
    }
}