$(function(){
//$ - väljer element och senare efter "." vad vi ska göra med den
//$("#ID").hide() - väljer ID och utför functionen
//$(".CLASS").hide() - väljer Class och utför functionen
//$("*").hide() - väljer ALLT och utför functionen
//$("h1,h2").hide() - väljer FLERA objekt och utför functionen. Samma sak kan man göra med olika IDs eller CLASSer
//$("li a").hide() - väljer alla "a" objekt i li och utför functionen
//$("div > a").hide() - väljer alla "a" som finns i diven men rör inte dem andra och utför functionen
//$(div + p).hide() - väljer p som är direkt under en DIV men ligger inte i diven, men NÄRMAST till diven och utför functionen
$("p").hide();
});



//Function i function eftersom först vi måste ha "document ready , om sidan har laddats osv"

$(function(){
$(".click").click(function(){
    //this gör så att vi arbetar med samma element som vi anropade för att utföra functionen, så att vi slipper
    //skriva om namnet på IDs eller CLASSer, eftersom dem kan vara olika. 
    //Och om man har FLERA .click och vill ta bort alla - då använder man CLASS(ID funkar ej?)
    //Om man använder this då kommer den ta bort bara den man klickar på
  $(this).hide();
});
});