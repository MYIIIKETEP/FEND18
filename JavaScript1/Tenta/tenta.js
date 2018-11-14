
function test1(){
    while (true){
    //få in tal(defaults för tests)
    let money = prompt("Hur mycket pengar vill du sätta in","1000");
    let years = prompt("Hur många år","5");
    //för att kontrolera om det blir sifror
    if(isNaN(money) || isNaN(years))
    {
        alert("Felaktig inmatning av antal pengar eller år")
        continue;
    }
    //for loop för att räkna ut allt 
    let procentage;
    let text = "år pengar";
    for(i = 0; i < years; i++)
    {
        //ta ut ett %
        procentage = (Number(money)/100)
        //räkna stigningen
        money = Number(money) + (Number(procentage)*(i+3.5));
        console.log(money.toFixed(2));
        text += "\n"+ (i + 1) + " " + money.toFixed(2);
        
    }
    alert(text);
    break;
    

}
} // while


    
function test2() {
    //letar fram vår "P tag"
    let p1id = document.getElementById("p1id");
    //skapar ett objekt för att använda den i "random" och gör RANDOM på det så att vi får lösenordet på 10-12 symboler inte fixerad
    var howMany = Math.random()* (13-10) + 10,
    //anger alla symboler som ska random ta ut från
        symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*-+%",
    //tom string för att lägga till nya bokstäver
        newPassword = "";
    //for loop som körs 12 gånger och igenom Math.random vi tar ut "random" symboler ur vår "Symbols"
    for (var i = 0, n = symbols.length; i < howMany; ++i) {
        newPassword += symbols.charAt(Math.floor(Math.random() * n));
    }
    //Ändrar texten inne i Tagen till lösenordet
    p1id.innerText = newPassword;
    
}
