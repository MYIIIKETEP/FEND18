$(function(){
    //prepend första som skall gå efter ul har och append sist.
    //Kör append om man ska bara fylla på listan neråt ?Oo
    //Before innan ul
    //after efter ul
$("#ul1").prepend("<li>Start</li>").append("<li>End</li>");
$("#ul1").append("<li>Start2</li>");
$("#ul1").before("MYIIIKETEP");
$("#ul1").after("Gaming");
});