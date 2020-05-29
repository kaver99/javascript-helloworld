'use strict'

// ----------------------------
// Singleton Pattern
// ----------------------------
class CacheManager  {
    constructor() {
        // 인스턴스가 존재하지 않을 경우
        if(!CacheManager.instance) {
            // 초기화
            this._cache = [];
            CacheManager.instance = this;
        }
        return CacheManager.instance;
    }
}

const instance = new CacheManager();
Object.freeze(instance);