//Выделяем Объект через ID и подменяем текст
let h = document.getElementById('one');
//Создаем текст
var text = "hello js13";
//ебурим его в большие буквы
var res = text.toUpperCase();
//Запихиваем его вместо старого текста
let j = h.innerHTML = res;
h.style.color = "green"
h.style.fontSize = '50px';
//
document.body.style.backgroundColor = "yellow";
console.log(document.body);
//Задаем стайл, через смену класса - класс находиться в style.css



let h1 = document.getElementsByTagName('h1');

for(let i = 0; i < h1.length; i++){
    h1[0].className = "nice"; break;
}

//övning 1
let p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    if(p[i].innerText.endsWith('.'))
    {
    console.log("HAD."+ " "+ p[i].innerText);
    }
     else {
         p[i].innerText = p[i].innerText + ".";
         console.log("Had no '.' "+ p[i].innerText);
     }
     }
//övning 2
for (let i = 0; i < p.length; i++){
    var text = p[i].innerText;
    //Берём первую букву, делаем её большой и к тексту прикладываем
    //остаток текста
    text = text.charAt(0).toUpperCase() + text.substr(1) ;

    //Чтобы поменять переменные в HTML
    p[i].innerText = text;
    console.log(text);
    
}


for (let i = 0; i < p.length - 1; i++) {
    p[i].className = 'cool';
        }
console.log(p);

//Последнее задание
let p12 = document.getElementById("p12");
let text1 = p12.innerText.split(". ");
let fulltext = "";
for (let i = 0; i < text1.length; i++){
fulltext +=text1[i].charAt(0).toUpperCase() + text1[i].substr(1)+ ".";
console.log(fulltext);
p12.innerHTML = fulltext;
}




