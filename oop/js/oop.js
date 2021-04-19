// const s1 = 'hello';
// 1. Basic literals
// console.log(typeof s1);
// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// window.alert(1);

// console.log(navigator.appVersion);

// Object Literal
// const book1 = {
//   title: 'Book One',
//   author: 'John Doe',
//   year: '2013',
//   getSummary: function() {
//     return `${this.title} was written by author ${this.author} in ${this.year}`;
//   }
// };
// console.log(book1.getSummary());

// const book2 = {
//   title: 'Book Two',
//   author: 'Jane Doe',
//   year: '2016',
//   getSummary: function() {
//     return `${this.title} was written by author ${this.author} in ${this.year}`;
//   }
// };
// console.log(book2.getSummary());

// console.log(Object.values(book2));
// console.log(Object.keys(book2));


// ==========================================
// 2. constructor
// Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
// }

// Instatiate an Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');

// console.log(book1.getSummary());


// ==========================================
// 3. Prototype
// Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // getSummary Prototype
// Book.prototype.getSummary = function() {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// // getAge
// Book.prototype.getAge = function() {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old.`;
// }

// // Revise / Change Year
// Book.prototype.revise = function(newYear) {
//   this.year = newYear;
//   this.revised = true;
// }

// // Instatiate an Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');

// // console.log(book1.getSummary());
// // console.log(book1.getAge());
// console.log(book1);
// book1.revise('2018');
// console.log(book1);


// ==========================================
// 4. inheritence
// Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // getSummary Prototype
// Book.prototype.getSummary = function() {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// // Magazine Constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

// // Inherit Prototype
// // Book에 생성된 prototype을 Magazine에 사용하기 위해선 Object.create를 사용하여 프로토타입을 생성해야한다.
// Magazine.prototype = Object.create(Book.prototype);

// // Instantiate Magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
// // console.log(mag1);

// // Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);


// ==========================================
// 5. Object Create
// Object of Protos
// const bookProtos = {
//   getSummary: function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
//   getAge: function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
//   }
// }

// Create Object
// 방식 1과 방식 2의 결과는 동일
// 방식 1)
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';

// 방식 2)
// const book1 = Object.create(bookProtos, {
//   title: { value: 'Book One' },
//   author: { value: 'John Doe' },
//   year: { value: '2013' },
// });
// console.log(book1);


// ==========================================
// 6. Classes
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
//   }

//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }

//   static toBookStore() {
//     return 'Barnes & Noble';
//   }
// }

// Instantiate Object 
// const book1 = new Book('Book One', 'John Doe', '2013');
// console.log(book1);
// book1.revise('2018');
// console.log(book1);
// console.log(Book.toBookStore());


// ==========================================
// 7. SubClasses
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
// }

// Magazine SubClass
// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);
//     this.month = month;
//   }
// }

// Instantiate Magazine
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
// console.log(mag1);
// console.log(mag1.getSummary());