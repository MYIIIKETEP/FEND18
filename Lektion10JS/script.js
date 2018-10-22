//FOR-LOOP

function forloop(){
let count;
let summa = 0;
let tal1;

            document.write("Starting Loop" + "<br />");
         
            for(count = 0; count < 5; count++){
               tal1 = prompt("Sriv in ett tal");
               summa = parseInt(summa) + parseInt(tal1);
               console.log(summa);
            }
         
            document.write(summa/count);
        }


//If-Else

function ifelse (){
    let tal1 = prompt("Skriv ett tal");
    if (tal1 >=50)
    {
        console.log(tal1 +  ">=50");
    }
    else
    {
        console.log(tal1 + "<50");
    }
}

//Избегание if-else для true/false случаев

function getFee(isMember) { //isMember - получает переменную true/false
    return (isMember ? "20kr" : "100kr"); // с помощью "?" мы спрашиваем true or flase, и дальше даём что ему отвечать 1. true 2. false
    }
    console.log(getFee(true));
    console.log(getFee(false)); 



//Switch - по факту просто сразу выбирает правильно, без кучи If-else
function getDay(){
    let day;
    switch (new Date().getDay()) { // в свич задаем переменную которую в будующем проверяем ниже в кейсах, т.е. он сразу выбирает правильный кейс, не переюирая другие
    case 0: day = "söndag"; break;
    case 1: day = "måndag"; break;
    case 2: day = "tisdag"; break;
    case 3: day = "onsdag"; break;
    case 4: day = "torsdag"; break;
    case 5: day = "fredag"; break;
    case 6: day = "lördag"; break;
    }
    return day;
    }
    console.log('Det är ' + getDay() + ' idag!');



    //Övningar

    function ovning1(){
        let minuter = prompt("Antal minuter");
        let kostnad = prompt ("Kostnad för minut");

        if (minuter >= 1000)
        {
           let summa = Number(minuter) * Number(kostnad);
            rabbat = Number(summa)/10;
            summa = Number(summa) - Number(rabbat);
            alert("Du får 10% rabbat och summan blir " + Number(summa))
        }
        else
        {
            let summa = Number(minuter) * Number(kostnad);
            alert("Kosnaden blir " + summa);
        }
    }



    //Övning 2
    function ovning2(){
        let arskort = prompt("Kostnaden för ett årskort");
        let onetimer = prompt("OneTime pay");
        let manytimer = prompt("Hur många gngr?");

        let summa = Number(onetimer) * Number(manytimer);
        console.log(arskort);
        console.log(onetimer);
        console.log(manytimer);
        console.log(summa);
        if(summa >= arskort){
            alert("Årskort är värd att köpa")
        }
        else {
            alert("Buy onetimers");
        }
    }


    //Övning 3


    function ovning3(){
        let points = prompt("Hur mycket påäng fick du?")
        let betyg;
        switch(Number(points)){
            case 25: betyg = "D"; break;
            case 30: betyg = "C"; break;
            case 40: betyg = "B"; break;
            case 45: betyg = "A"; break;

        }
        alert(betyg);
    }