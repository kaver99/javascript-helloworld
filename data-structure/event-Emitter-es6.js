'use strict'

const EventEmitter = require('events');

class ChatManager extends EventEmitter {}

const chatManager = new ChatManager()
// 특정한 이벤트가 발생했을 때 임의의 이벤트에 대해 선언하는 역활
chatManager.on("join", () => {
    console.log('new user joined');
});

// 선언된 메소드 "join"을 호출하는 함수
chatManager.emit("join");


