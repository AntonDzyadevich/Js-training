'use strict';

//let x = +prompt('Задайте число x:', '0');
//let y = +prompt('Задайте число y:', '0');
//
//function sum(x,y) {
//  return x + y;
//}
//function mult(x,y) {
//  return x * y;
//}

//let calculator = {
//  read() {
//    this.x = +prompt('Задайте число x:', '0');
//    this.y = +prompt('Задайте число y:', '0');
//  },
//  sum() {
//    return this.x + this.y;
//  },
//  mult() {
//    return this.x * this.y;
//  }
//};
//
//let ladder= {
//  step: 0,
//  up() {
//    this.step++;
//    return this;
//  },
//  down() {
//    this.step--;
//    return this;
//  },
//  showStep() {
//    console.log(this.step);
//  }
//}
//

//END FIRST VERSION

function calculator(){
  this.read = function() {
    this.x = +prompt('Задайте число x:', '0');
    this.y = +prompt('Задайте число y:', '0');
},
    this.sum = function() {
    return this.x + this.y;
  },
    this.mult = function() {
    return this.x * this.y;
 } 
}

let calculator = new Calculator();





//END second VERSION

//Способы написания обьектов
//let user = new Object();
//let hero = {
//  name: 'Lanselot',
//  heroStatistics: {
//    strange: 40,
//    stamina: 21,
//    agility: 14,
//    intelegy: 43
//  }
//};

//let numbers = {
//  'One': 1,
//  'Two': 2,
//  'Three': 3,
//  'Four': 4,
//  'Five': 5
//}
//for ( let key in numbers) {
//  console.log(`${key} = ${numbers[key]}`);
//}

//let code = {
//  "+49" : "Германия",
//  "+41" : "Швейцария",
//  "+44" : "Великобритания",
//  "+1" : "США"
//}

//  let user = {};
//  user.name = 'John';
//  user.surname = 'Smith';
//  user.name = 'Pete';
//  delete user.Name;

//function isEmpty(obj) {
//  for (let key in obj) {
//    return false;
//  }
//  return true;
//}
 
//let user = {
//  name: 'John',
//  age: 30 
//};
// function sayHi() {
//  console.log("Привет!");
//};
//user.sayHi = sayHi;

//let user = {
//  name: 'John',
//  age: 30, 
//  sayHi() {
//    console.log('Привет!');
//  }
//};


//let user = new User('Федя');
//
//function User(name) {
//  //this = {};
//  this.name = name;
//  this.isAdmin = false;
//  //return this;
////}

//let obj = {};
//
//function A() {
//  return obj;
//}
//function B() {
//  return obj;
//}
//
//let a = new A();
//let b = new B();

















