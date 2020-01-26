/*
События мыши:

- click - нажатие
- contextmenu - нажатие правой кнопкой
- mouseover / mouseout - наводиться / 
покидает элемент
- mousedown / mouseup - нажатие / отжатие
- mousemove - движение

События на элементах управления:

- submit - отправление формы
- focus - фокусировка на input

Клавиатурные события:

- keydown / keyup - нажатие и отжатие 
клавиши

События документа:

- DOMContentLoaded - когда HTML получен и обработан, DOM 
документ полностью построен и доступен.

CSS события:

- transitioned - когда CSS-анимация
завершена
*/

// Подсчет кроликов

function countRabbits() {
  for(let i = 1; i <= 3; i++) {
  console.log(`Кролик №${i}`);
  }
  button.removeEventListener('click', countRabbits);
}

let button = document.getElementById('clickMe');
  
//button.onclick = countRabbits;

/*
addEventListener - добавляет слушателя 
removeEventListener - убирает слушателя
*/

button.addEventListener('click', countRabbits);

button.addEventListener('click', ()=> console.log('hi'));

button.removeEventListener('click', ()=> console.log('hi'));





