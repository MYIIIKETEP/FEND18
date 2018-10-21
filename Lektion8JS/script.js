let person = prompt("Please enter your name");
setTimeout(helloPopup, 1000);
function helloPopup(){
alert("Hello " + person + "!");
}
setInterval(helloConsole, 5);
function helloConsole(){
console.log("Hello " + person + "!")
return("Hello");
}
