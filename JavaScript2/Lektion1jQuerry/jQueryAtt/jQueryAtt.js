//check different attributes in a tag

$(function (){
let $checkAttr = $("#firstA").attr("href");
console.log($checkAttr);
});

//byta attributet. först man anger vilken attribute skall ändras , sen till vad
//Om attributen inte existerar då läggs den till
//removeAttr - för att ta bort ngn attr helt
$(function (){
$("#firstA").text("W3Schools").attr('href', 'https://w3schools.com').attr("target","_blank");
let $checkAttr = $("#firstA").attr("href");
console.log("Changed href to" + $checkAttr);
});



















