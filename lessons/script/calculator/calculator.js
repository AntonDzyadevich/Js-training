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

//END FIRST VERSION


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

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

















