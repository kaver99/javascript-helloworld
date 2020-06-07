'use strict'

// cache 매니저
// 클래스 정의
class cacheManager {
    constructor() {
        this.config = []
    }

    addconfig (obj = {}) {
        this.config.push(obj)
    }

    getConfig () {
        return this.config;
    }
}

// 클래스 선언
const cacheManager = new cacheManager()