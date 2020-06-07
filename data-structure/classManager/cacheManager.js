'use strict'

// cache 매니저
// 클래스 정의
class cacheManager {
    constructor() {
        this.config = []
    }

    addConfig (obj = {}) {
        this.config.push(obj)
    }

    getConfig () {
        return this.config;
    }
}

module.exports = cacheManager;