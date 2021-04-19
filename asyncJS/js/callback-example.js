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


function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();
// createPost({ title: "Post Four", body: "This is Post Four" });


createPost({ title: "Post Four", body: "This is Post Four" }, getPosts);