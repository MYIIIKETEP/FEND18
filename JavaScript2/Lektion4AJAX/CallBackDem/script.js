// //Callbak demo

// //Exempel från  MDN

// function processUserInput(callback){
//    let name = prompt("Vad heter du");
//   //Anrop till en annan function som skickas in som argument till processUserInput
//   callback(name);
// };

// // En function som behandlar data
// function greetingAlert(name){
//     alert("Inpust is " + name);
// }

// //function till consollen
// function greetingConsole(name){
//     console.log("CallBackConsole" + name);
// }

// //Du skikar functionen som argument och den anropas senare i nästa functionen
// processUserInput(greetingAlert);
// processUserInput(greetingConsole);


//Ajax Demo


function load(){

let xhr = new XMLHttpRequest();
console.log(xhr);
//on readyState Change
//readyState är en egenskap som finns i xhr
//Vi kör en calback vid ändring i readyState
xhr.onreadystatechange = function(){
    console.log(this.readyState);
    if(this.readyState === 4 && this.status === 200) {
        // här händer functionen
        const demo1 = document.getElementById("lol");
        demo1.innerHTML = xhr.responseText;
    }
} 
//GET / POST , ОТКУДА / Async / Sync
xhr.open("GET", "demo.txt", true );
xhr.send();
};

// load();



function load2(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status ===200){
        
        callback(this);
        
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}


//CallbackFunction som skickas till load


function demo1 (xhr){
const demo1 = document.getElementById("lol");
demo1.innerHTML+= xhr.responseText;
};
function demo2 (xhr){
    const demo1 = document.getElementById("lol2");
    demo1.innerHTML+= xhr.responseText;
    };

    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function(){
        load2("demo.txt", demo1)
    });
    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", function(){
    load2("demo2.txt", demo2)
    });



