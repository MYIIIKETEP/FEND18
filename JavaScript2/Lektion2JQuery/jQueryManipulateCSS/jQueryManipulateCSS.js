$(function(){
    //.css ansvara för att manipulera CSS i själva koden , där vi har elementet.
    //Man kan chaina om man vill ha flera eller så får man göre css till ett objekt.
    //Man kan kolla exakt vad som står för olika css attribute om man bara skriver attributets namn
    //Obs  man får färgen i RGB
    $("#SimpleButton").click(function(){
    $("p").css({
        "background-color": "gold",
        "color": "green"
    });
    console.log($("p").css("background-color"));
    });
});
//OBS om det finns satta CSS som exempel 1 - då funkar inte angivandet av klasser, så änklast är att skapa
//CSS klasser och lägga till dem
$(function(){
  $("#addClass").click(function(){
  $("p").addClass("blue");
  console.log("Added");
  });
});

//Ta bort CSS class
$(function(){
    $("#removeClass").click(function(){
    $("p").removeClass("blue");
    console.log("Removed");
    });
  });


//Man kan sätta på och stänga av en klass med toggle
$(function(){
    $("#toggleClass").click(function(){
    $("p").toggleClass("blue");
    console.log("Removed");
    });
  });