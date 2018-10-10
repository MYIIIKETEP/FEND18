//Del2 - Övning 1

function multyDeviFunction() {
    var tal1 = prompt("Skriv tal 1");
    var tal2 = prompt("Skriv tal 2");
    var multy = tal1*tal2;
    var devis = tal1/tal2;
    if (tal1 != null && tal2 != null) {
        document.getElementById("demo").innerHTML =
        "Multiplikation av tal1 och tal2 = " + multy;
        alert( "Multiplikation av tal1 och tal2 = " + multy);
        alert( "Dev av tal1 och tal2 = " + devis);
    }
}
//Om man matar in text, man får NaN som svar
//Matar du in tal1 > 0 och tal2 = 0 , * ger 0 , / ger Infinity
//tal1 = 0 tal2 = 0 , * ger 0 , / ger NaN


//Del2 - Övning 2

function bhAreaFunction (x,y) {
var tal1 = x;
var tal2 = y;
var arena = x*y;
    document.getElementById("demo2").innerHTML = "Arean är" + arena;

}

function bhOmkretsFunction(x,y) {
    var tal1 = x;
    var tal2 = y;
    var omkrets = (tal1*2) + (tal2*2);
    document.getElementById("demo2").innerHTML = "Omkretsen är " + omkrets;
}
