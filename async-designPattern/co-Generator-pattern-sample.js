const co = require('co');

// co package를 활용하여 효율적으로 Generator 활용하기
co(function *() {
    const a = Promise.resolve({'name': 'Jon', 'age': '22', 'job': 'Developer', 'career': '3 year'});
    const b = Promise.resolve({'name': 'Rim', 'age': '34', 'job': 'Designer', 'career': '5 year'});
    const c = Promise.resolve({'name': 'Ros', 'age': '41', 'job': 'System Enginer', 'career': '8 year'});

    const res = yield [a, b, c];
    console.log(res);
});