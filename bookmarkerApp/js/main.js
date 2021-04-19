// ================================================
// Bookmark WebSite
// date: 2021-04-17
// ================================================

// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
  e.preventDefault();

  // Get Form Values
  const siteName = document.getElementById('siteName').value;
  const siteUrl = document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)) {
    return false;
  }

  const bookmark = {
    name: siteName,
    url: siteUrl
  }

  /*
  // Local Storage Test
  localStorage.setItem('test', 'Helloworld');
  localStorage.getItem('test');
  localStorage.removeItem('test');
  */

  // Test if bookmark is null
  if(localStorage.getItem('bookmarks') === null) {
    // init Array
    var bookmarks = [];
    // Add to Array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  } else {
    // Get bookmarks from localStorage 
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmarks to Array
    bookmarks.push(bookmark);
    //Re-set to back to localStorage;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // clear Form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();
}


// Validation input Form
function validateForm(siteName, siteUrl) {
  // Validation
  if(!siteName || !siteUrl) {
    alert('Please fill in the form.');
    return false;
  }

  // url pattern check
  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)) {
    alert('Please use a valid URL');
    return false;
  }

  return true;
}


// Document Body Tag is onload
document.body.onload = fetchBookmarks;

// Fetch Bookmarks
function fetchBookmarks() {
  // Get bookmarks from localStorage 
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Get outtput id
  let bookmarksResults = document.getElementById('bookmarksResults');

  // build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++) {
    const name = bookmarks[i].name;
    const url = bookmarks[i].url;

    bookmarksResults.innerHTML += `
      <ul class="list-group">
        <li class="list-group-item bg-light mb-2" style="border-radius: 5px;">
          <h5 class="float-left mt-1 pr-2">${name}</h5>
          <a class="btn btn-secondary" target="_blank" href="${url}">Visit</a>
          <!-- <button class="btn btn-info float-right modify">Modify</button> -->
          <button class="btn btn-danger float-right delete">Delete</button>
        </li>
      </ul>
    `;
  }
}


// Listen for form bookmarksResults click
document.getElementById('bookmarksResults').addEventListener('click', deleteBookmark);

// delete Bookmark
function deleteBookmark(e) {
  if(e.target.classList.contains('delete')) {
    // A tag href infomation
    let url = e.target.previousElementSibling.href;
    // modify 시 사용
    // let url = e.target.previousElementSibling.previousElementSibling.href;

    // url 뒤 '/' 제거
    if(url.charAt(url.length -1) === '/') {
      url = url.slice(0, -1);
    }
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // loop throught bookmarks
    for(var i = 0; i < bookmarks.length; i++) {
      if(bookmarks[i].url === url) {
        // Remove from array
        bookmarks.splice(i, 1);
      }
    }
    // Re-set back to LocalStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Re-fetch bookmarks
  fetchBookmarks();
}


// Listen for from bookmarksResults Modify
document.getElementById('bookmarksResults').addEventListener('click', modifyBookmark);

// Modify Bookmark
function modifyBookmark(e) {
  if(e.target.classList.contains('modify')) {
    // A tag href infomation
    let url = e.target.previousElementSibling.href;
    console.log()
    // url 뒤 '/' 제거
    if(url.charAt(url.length -1) === '/') {
      url = url.slice(0, -1);
    }

  }
  
}
