// $.get('url', function(response) {  // 1차
//     parseValue(response, function(id) {  // 2차
//         auth(id, function(result) {  // 3차
//             display(result, function(text) {  // 4차
//                 console.log(text);
//             });
//         });
//     });
// });


// function parseValueDone(id) { // 2차
//     auth(id, authDone);
// }

// function authDone(result) {  // 3차
//     display(result, displayDone);
// }

// function displayDone(text) {  // 4차
//     console.log(text);
// }

// $.get('url', function(response) {  // 1차
//     parsevalue(response, parseValueDone);
// });



// async function logName() {
//     // fetchUser 함수가 await로 인해 실행이 완료될 때까지 이후 문법 실행이 중단됨
//     var user = await fetchUser('domain.com/users/1');
//     if(user.id === 1) {
//         console.log(user.name);
//     }
// }

function fetchUser() {
    var url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then(function(response) {
        return response.json();
    });
}

function fetchTodo() {
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function(response) {
        return response.json();
    });
}

async function logTodoTitle() {
    try {
        var user = await fetchUser();
        if(user.id === 1) {
            var todo = await fetchTodo();
            console.log(todo.title);
        }
    } catch (err) {
        console.error(err);
    }
}