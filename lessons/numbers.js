'Use strict';

//console.log(0b101011);
//let num = 351.23435;
//
//console.log(num.toString());


let firstNumber, secondNumber;

while (true) {
  firstNumber = +prompt('Введите число!');
  if (isNaN(firstNumber) == false) {
    break;
  };
};

while (true) {
  secondNumber = +prompt('Введите число!');
  if (isNaN(secondNumber) == false) {
    break;
  };
};

alert('Сумма двух чисел: ' +(firstNumber + secondNumber) + '!');






