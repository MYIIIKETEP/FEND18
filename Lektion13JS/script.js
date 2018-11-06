function bgRED(){
    document.body.style.backgroundColor = "red";
}
function bgGreen(){
    document.body.style.backgroundColor = "green";
}

function bgBlue(){
    document.body.style.backgroundColor = "blue";
}

function changeText(){
    document.getElementById("firstp").style.visibility = 'visible';
    document.getElementById("firstp").innerHTML = "Hello";
}
function hideText(){
    document.getElementById("firstp").style.visibility ='hidden';
}

function clickmep(){
    document.getElementById("clickme").style.visibility = 'hidden';
}

//Спросить тагара
function overMeMouse(){
document.getElementById("mouseOverColor").style.color = "green";
}

function checkUsername() {
    let elMsg = document.getElementById('feedback');
if (elUser.value.length < 5) {
elMsg.textContent = "Username must be 5 characters or more!";
} else {
elMsg.textContent = " ";
}
    }
    let elUser = document.getElementById('username');
    elUser.onblur = checkUsername;