// promise sample;
const fetch = require('node-fetch');

// 비동기 처리할 함수
function fetchUser(userid) {
    var url = `https://jsonplaceholder.typicode.com/users/${userid}`;
    return fetch(url).then((res) => {
        // fetch함수로 호출한 결과는 Promise 객체로 넘어옴
        return res.json();
    }).catch((err) => console.error(err));
}

function fetchTodo(userid) {
    var url = `https://jsonplaceholder.typicode.com/todos/${userid}`;
    return fetch(url).then((res) => {
        // fetch함수로 호출한 결과는 Promise 객체로 넘어옴
        return res.json();
    }).catch((err) => console.error(err));
}

async function result(userid) {
    // 사용자 데이터를 user서버에서 가져옴
    const user = await fetchUser(userid);
    // 사용자 정보가 있으면
    if(user) {
        // 사용자가 작성한 todoList 가져옴
        const todoList = await fetchTodo(user.id);
        // todoList 정보가 있으면
        if(todoList) {
            console.log(todoList);
        } else {
            console.err(todoList);
        }
    } else {
        console.err(user);
    }
}

let userid = '1';
result(userid);
