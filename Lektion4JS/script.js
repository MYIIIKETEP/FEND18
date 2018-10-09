"use strickt";
document.write("Hello World");
// Добавить часть HTML в какой либо уже существующий елемент
let el = document.getElementById("demo");
el.innerHTML = "<h1>TEST</h1>";

let el2= document.getElementById("demo2");
el2.textContent = "YeLLo";


//Проверка разных типов data -- Boolean/String/number etc
let ok = false;
let again =true;
if(again == true)
console.log("Fortsätt...");

//Typeof показывает какой формат информации получила переменная
let test2 = "Denis"
console.log(typeof test2);