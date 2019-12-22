let result;

while(result!==null){
  result = prompt('ВВеди число больше 100');
  switch (result) {
    case null: console.log('Пока');
      break;
    case'': console.log('Ты ввел пустую строку');
      break;
    default:{
      (result<100) ? console.log ('Ты дурак') :
    console.log ('Спасибо'); 
    }
  } 
}