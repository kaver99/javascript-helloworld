// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// ================================================ //
// GET ElementById //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Good Bye';
// console.log(headerTitle.textContent); // 스타일 무시
// console.log(headerTitle.innerText); // 스타일 적용
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';


// ================================================ //
// // GET ElementsClassByName //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4'; // 실행 불가(요소 1개씩 적용가능)
// for(var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }


// ================================================ //
// // GET ElementsByTagName //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4'; // 실행 불가(요소 1개씩 적용가능)
// for(var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }


// ================================================ //
// // QuerySelector //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:first-child');
// // lastItem.style.color = 'blue';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// ================================================ //
// QuerySelectorAll //
// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }


// ================================================ //
// Traversing the DOM //
// var itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// // childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // LastChild
// console.log(itemList.lastChild);
// // LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // NextSibling
// console.log(itemList.nextSibling);
// // NextElementSibling
// console.log(itemList.nextElementSibling);

// // PreviousSibling
// console.log(itemList.previousSibling);
// // PreviousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// ================================================ //
// // CreateElement //

// // Create a div
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create Text Node
// var newDivText = document.createTextNode('Hello World');

// // Add Text to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);


// ================================================ //
// Button Action //

// onclick
// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
  // console.log('Button Clicked');
  // document.getElementById('header-title').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3>';

  // console.log(e.type);

  // 클라이언트 좌표
  // console.log(e.clientX);
  // console.log(e.clientY);

  // offset 좌표
  // console.log(e.offsetX);
  // console.log(e.offsetY);

  // Keyboard Key
  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
// }


// ================================================ //
// EVENT
// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button Event
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box(div) Event
// box.addEventListener('mouseenter', runEvent); // innerElement(하위)까지 이벤트 적용 X
// box.addEventListener('mouseleave', runEvent); // innerElement(하위)까지 이벤트 적용 X
// box.addEventListener('mouseover', runEvent); // innerElement(하위)까지 이벤트 적용됨
// box.addEventListener('mouseout', runEvent); // innerElement(하위)까지 이벤트 적용됨
// box.addEventListener('mousemove', runEvent);

// input Event
// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent); // input 안으로 들어올 시
// itemInput.addEventListener('blur', runEvent);  // input 밖으로 나갈 시
// itemInput.addEventListener('cut', runEvent); // input 문자열 잘라내기 시
// itemInput.addEventListener('paste', runEvent); // input 문자열 붙여넣기 시
// itemInput.addEventListener('input', runEvent); // input과 관련된 액션 시

// Select Event
// var select = document.querySelector('select');

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form Event
// form.addEventListener('submit', runEvent);

// var buttons = document.getElementById('button');

// buttons.addEventListener('click', runEvent);

// function runEvent(e) {
//   e.preventDefault(); // form submit 시 필수로 적용해야함(중복 동작을 제거함)
//   console.log('EVENT TYPE: '+e.type);
  
  // e.target.style.backgroundColor = 'red';
  // e.target.style.color = 'orange';
  // document.getElementById('button').style.borderRadius = '5px';
  // document.getElementById('button').style.border = '1px solid #ccc';
  // console.log(e.target.value); 
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+' </h3>';

  // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
  // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
  
// }


// ================================================ //
var addForm = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
addForm.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItem);

// Add Item
function addItem(e) {
  e.preventDefault();

  // get Input value
  var newItem = document.getElementById('item').value;

  // Create new li Element
  var li = document.createElement('li');
  // add Class
  li.className = 'list-group-item';
  // add textNode with input value
  li.appendChild(document.createTextNode(newItem));

  // create del button element
  var deleteBtn = document.createElement('button');

  // add Class to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // add textNode
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to itemList
  itemList.appendChild(li);
}

// remove Item
function removeItem(e) {
  // target ClassList delete
  if(e.target.classList.contains('delete')) {
    if(confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Item
function filterItem(e) {
  // convert text to  lowercase
  var text = e.target.value.toLowerCase();
  // Get li items
  var items = itemList.getElementsByTagName('li');
  // Convent to an Array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

}