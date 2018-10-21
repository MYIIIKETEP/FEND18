//Создаем объект
let mahmud = {
name: "Mahmud Al Hakim",
age : 45,
}

console.log(mahmud);
//Создаем объект с встроенной функцией
let mahmud2 = {
name: "Mahmud Al Hakim",
age : 45,
info: function(){
console.log(this.name + " är " +
this.age + " år gammal!");
}
}
//вызываем функцию из объекта
mahmud2.info();


//Создаем будильник(меняем переменные)
let mahmud3 = {
name: "Mahmud Al Hakim",
age : 45,
}
mahmud3.name = "Палестинский будильник";
mahmud3.age++;

console.log(mahmud3);
//Удаляем переменную из объкта
let mahmud4 = {
name: "Mahmud Al Hakim",
age : 45,
}

delete mahmud4.age;
console.log(mahmud4);
//Добовляем переменные
let mahmud5 = {
name: "Mahmud Al Hakim",
age: 45
}
mahmud5.singel = false;
mahmud5.expl = "Дада,взрываеться"
console.log(mahmud5);


//Удаляем объект
let mahmud6 = {
name: "Mahmud Al Hakim",
age : 45
}
mahmud6 = null;
console.log(mahmud6); // null


//Övning CAR
let car = {
name: "Fiat",
model: "500",
weight: "850kg",
color: "white",
start: function(){
console.log("wroom,wroom");
},
drive: function(){
    console.log("3.8L soppa per 100");
},
brake: function(){
    console.log("1.5sec bromstid")
},
stop: function(){
    console.log("If stops, never starts");
}
}
console.log(car);
car.start();
car.drive();
car.brake();
car.stop();

let cars = new Array(2);
cars[cars.length] = "Volvo";

console.log(cars);
console.log(cars.length);
