const posts = [
  { title: "Post One", body: "This is Post One." },
  { title: "Post Two", body: "This is Post Two." },
  { title: "Post Three", body: "This is Post Three." }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}


function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // error check
      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong.');
      } 
    }, 2000);
  });
}


// Promise
// createPost({ title: 'Post Four', body: 'This is Post Four' })
//   .then(getPosts)
//   .catch(err => console.log(err));


// async - await
// async function init() {
//   await createPost({ title: 'Post Four', body: 'This is Post Four' });

//   getPosts();
// }

// init();


// async - await / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();


// Promise.all
// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//   setTimeout(resolve, 2000, 'Good Bye!')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); 

// Promise.all([promise1, promise2, promise3, promise4]).then((value) => console.log(value));
