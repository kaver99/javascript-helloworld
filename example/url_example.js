const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// [serialized URL]
console.log(myUrl.href);
console.log(myUrl.toString());

// [host (root domain)]
console.log(myUrl.host);

// [hostname (Does not get port)]
console.log(myUrl.hostname);

// [path name]
console.log(myUrl.pathname);

// [serialized query]
console.log(myUrl.search);

// [params object]
console.log(myUrl.searchParams);

// [add param]
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// [loop through params]
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})