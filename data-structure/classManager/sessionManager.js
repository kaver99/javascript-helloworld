'use strict'

const cacheManager = require('./cacheManager');

// sessionManager에 cacheManager를 확장
class sessionManager extends cacheManager {

}

const SessionManager = new sessionManager();
SessionManager.addConfig({
    token: 'ran'
});

const config = SessionManager.getConfig();
console.log(config);