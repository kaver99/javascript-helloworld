'use strict'

// static factory method Pattern
// constructor에서 생성자 기능을 사용하지 않음
// 생성자의 기능을 static 메소드로 구현함
class DatabaseManager {
    constructor(props) {
    }

    // new 키워드 없이 static 메소드로 정의한 함수
    // constructor를 대처
    static async BUILD(props) {
        const config = await this.init(props);
        // 수행하고자 하는 모든 비동기 작업들을 코딩함
        // 해당 결과들을 리턴하게 되면 최초 1번만 수행됨
        return new DatabaseManager(config);
    }

    query () {
        // 데이터베이스 구현체 - QUERY('') Agnostic

    }

    // 생성자에 사용함에 의해 Promise Cache 살태가 되어 최초 1번만 수행된다.
    async init(props) {
    }

    async newMember() {
    }

    async deleteMember() {
    }
}


const manager = DatabaseManager.BUILD(props);