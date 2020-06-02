const path = require('path');

console.log(__filename);
console.log(__dirname);
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(path.join(__dirname, 'hello', 'hello.txt'));