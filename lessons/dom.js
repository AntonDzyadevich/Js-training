'Use strict';

//if (confirm('Перейти на Wikipedia?')) {
//  location.href = 'https://wikipedia.org';
//};

//let list = {
//  doctype: "<!DOCTYPE html>",
//  html: {
//    type: "element",
//    text: {
//      type: "text",
//      value: " ",
//    }
//    head: {
//      type: "element",
//      meta: {
//        type: "element",
//        charset: "utf-8",
//    },
//      title: {
//        type: "text",
//        value: "Lesson_12",
//      }
//    },
//    body: {
//      type: "element",
//      ul: {
//        type: "element",
//        li: {
//         type: "element", 
//         value: [
//          "Apple", "Banana", "Orange", "Limon", "Mango"
//        ],
//      },
//      script: {
//        src: "dom.js",
//      },
//    },
//  },
//}

//for (let i = 0; i < document.body.childNodes.length; i++) {
//  console.log(document.body.childNodes[i]);
//}

//for (let node of document.body.childNodes) {
//  console.log(node);
//}


// Задача 1

let table =
document.getElementById('supertable');

for(let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

