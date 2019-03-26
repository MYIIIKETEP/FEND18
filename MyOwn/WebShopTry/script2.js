$(function(){
    $(".message").css("display", "none");
});


let totalPriceFull = 0;

function load(){
	
        var output2 = "";
        for (var i = 0; i < localStorage.length; i++) {
           
            var key = localStorage.key(i);
            let goJSON = JSON.parse(localStorage.getItem(key));
            let lonelyPrice = goJSON.price;
            let lonelyQuant = goJSON.quantity;
            totalPrice = parseInt(lonelyPrice)*parseInt(lonelyQuant);
            output2 += "<tr>" +"<td id='thisId' style=display:none>"+goJSON.id+ "</td>" + "<td>"+goJSON.name + "</td>" + "<td>" + totalPrice + "</td>" + "<td>" +goJSON.quantity  + "</td>" + "<td>"
             + "</tr>";
            totalPriceFull = totalPriceFull + totalPrice;
             console.log(totalPriceFull);
                  };
                  if(totalPriceFull != 0);{
                  output2 += "<tr>"+ "<td>TotalPrice: "+ totalPriceFull +"</td></tr>";
                  }
                 
    
                  document.getElementById('itsTboDy1').innerHTML = output2;
    

                }
                

                load();
                loadForm();
function loadForm(){
    let SetForm =  "<form action=#><div><label for=user><b>Namn</b></label><br><input id=name type=text required><br></div><div><label for=password><b>Email</b></label><br><input id=wordpass type=text required><br> </div><div><label for=assword><b>Telefon</b></label><br> <input id=telnum type=text required><br></div><input id=buttonMe type=submit value=Login><br><span class=message>Fält kan inte vara tomma eller mindre än 3 tecken</span>";


    document.getElementById("thisToChange").innerHTML = SetForm;
}

              

$(function(){
    $("#buttonMe").click(function(){
        let name = $("#name").val();
        let pass = $("#wordpass").val();
        let telnum = $("#telnum").val();
        if(name.length && pass.length && telnum.length >= 3){
            $(".message").css("display","none");
            let newFormPlace ="Hej " + "<b>" + name + "</b>!<br> Du kan se allt du har handlat till vänster.<br>Totala kostnaden blev: <b>"+ totalPriceFull+"kr</b> <br>All infroamtion har blivit skickat till <b>"+pass+"</b><br>Om vi kommer ha extra frågor till dig då ringer vi upp numret som du har skrivit: <b>"+ telnum +"</b><br><a href=index.html><button id=backToStore>BackToStore</button></a>";

            load();
            localStorage.clear();
            document.getElementById("thisToChange").innerHTML= newFormPlace;
           
        }
        else{
            $(".message").css("display","inline");
            
        }
    })
})


