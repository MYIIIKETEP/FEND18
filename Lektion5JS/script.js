//Skapa en array simple
let cars = ["Saab", "Volvo", "BMW"];
//Array constructor
let cars2 = new Array("Saab", "Volvo", "BMW");
//Visa indexierade element i Array
console.log(cars2[0]);
console.log(cars2[1]);
console.log(cars2[2]);
console.log("-------------------------------------------------------------------");
//Visa hur många elemt det finns i denna Array
console.log(cars2.length);
//Visa text på sidan
let el = document.getElementById("demo");
el.innerHTML = cars2;
//Hur sort() fungerar - sorterar alphabesikt per default, men kan manipuleras
function myFunction(){
    cars2.sort()
    let el2 = document.getElementById("demo")
    el2.innerHTML = cars2;
}
console.log("-------------------------------------------------------------------");
//Övning 1
console.log("ÖVNING1");
let courseArray = new Array ("Orientering i JavaScript", "JavaScript1", "JavaScript2", "HTML och CSS", "Grafiskaverktyg");
for (var i = 0; i < courseArray.length; i++) {
    console.log(courseArray[i]);
}
x = courseArray.length;
console.log(x);
console.log("-------------------------------------------------------------------");

//Övning 2
console.log("ÖVNING2");
x = courseArray.length;
y = x - 1;
console.log(courseArray[y]);
console.log("-------------------------------------------------------------------");

//Ändra ett element
cars2[0] = "Zhigul";
console.log(cars2);
console.log("-------------------------------------------------------------------");

//Lägg till element

courseArray.push("ExamenationsArbete");
for (var i = 0; i < courseArray.length; i++) {
    console.log(courseArray[i]);
}
console.log("-------------------------------------------------------------------");
//Ta bort element
for (var i = 0; i < courseArray.length; i++) {
    console.log(courseArray[i]);
}
console.log("!!!!!!!!!!!!!!!BREAKE BREAKE BREAKE BREAKE BREAKE BREAKE !!!!!!!!!!!!!!")
courseArray.pop();
for (var i = 0; i < courseArray.length; i++) {
    console.log(courseArray[i]);
}
console.log("-------------------------------------------------------------------");

//Prompt
function promptFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo2").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
//------------------------------------------------------------------------------
//I summan "+"innan tal1 och tal2 , konverterar dem från string till int(number)
function prompt2Function(){
    let tal1 = prompt("Ange tal 1");
    let tal2 = prompt("Ange tal 2");
    let summa = +tal1 + +tal2;

    if(summa!= null){
        document.getElementById("demo3").innerHTML =
        "Summan av tal1 och tal2 = " + summa;
    }
}



