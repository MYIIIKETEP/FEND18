
function Address(gata, post, ort){
    this.gata = gata;
    this.post = post;
    this.ort = ort;
}

function Person(namn, epost, mobil, address) {
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = address;
    this.print = function(){
        let msg = "";
        msg += this.namn;
        msg += '\n';
        msg += this.adress.post;
        msg += " "
        msg += this.adress.ort;

        console.log(msg);
    }
}

let Denis = new Person("Denis", "Denis.jakusjev@gmail.com", "0704925240", new Address("TumbaTor14730", "14730", "Solna"));
let Daniel = new Person("Daniel", "Daniel.jakusjev@gmail.com", "0704925244", new Address("KarpGatan", "13341", "Slatsjöbaden"));



function PythogoraSatt (tal1,tal2){
this.tal1 = tal1;
this.tal2 = tal2;
let sats = (tal1*tal1) + (tal2*tal2);
return sats;
}


function uppgift3(){
    let rad = prompt("Ange Radius på en cirkel");
    let pi3 = +Math.PI;
    pi3.toFixed(3);
    let omkrets = (rad*2) * pi3;
    let area = Math.pow(rad,2) * pi3;
    let msg = "";
    msg += "Omkretsen är " + omkrets.toFixed(3);
    msg += '\n'
    msg += "Arean är " + area.toFixed(3);
    alert(msg);
    
}


function uppgift4 (){
 let rad = prompt("Ange Radius på din sfär");
 let pi3 = Math.PI;
 pi3.toFixed(3);

 let volym = ((4*pi3) * (Math.pow(rad,3))) / 3
 let arean = (4*pi3) * Math.pow(rad,2);
 let msg = "";
 msg += "Omkretsen är " + volym.toFixed(3);
 msg += '\n'
 msg += "Arean är " + arean.toFixed(3);
 alert(msg);

}


