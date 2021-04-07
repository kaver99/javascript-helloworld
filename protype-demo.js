// 1. 생성자 방식
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  }
}

const person1 = new Person('John', 'Doe', '4-3-1988');
console.log(person1.firstName);
console.log(person1.getBirthYear());
console.log(person1.getFullName());


// 2. prototype 방식
function PersonNew(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

PersonNew.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

PersonNew.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

const personNew1 = new PersonNew('John', 'Herry', '8-12-1990');
console.log(personNew1);
console.log(personNew1.getBirthYear());
console.log(personNew1.getFullName());