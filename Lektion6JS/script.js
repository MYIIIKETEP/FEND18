//Funktionen tar parametrar från HTML
function testFunction(x,y){
console.log(x + " " + y);
alert(x + " " + y);
}

//Funktioner kommer från 
function test2Function(a,b,c){
    console.log(a + " " + b + " " + c);
}

test2Function(1,2,3,);


//Övning 1
function oneFunction (a,b){
    let resultat1 = a+b
    let resultat2 = resultat1/2
    console.log(resultat2);
}
oneFunction(10,12);


//Övning 2
function promptFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hej " + person + "! Välkommen till vår webbshop";
    }
}

function prompt2Function(){
    let tal1 = prompt("Ange minuter per månad");
    let tal2 = prompt("Ange kostnaden per minut");
    let summa = +tal1 * +tal2;

    if(summa!= null){
        document.getElementById("demo3").innerHTML =
        "Månadskostnad blir = " + summa;
        alert("Månadskostnad blir = " + summa);
    }
}