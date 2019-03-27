
var CHEKMEPLEASE;
var xhr;


if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 	

// for IE
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {			
		var items = JSON.parse(xhr.responseText);
		var output = "";
		
		for (var key in items) {
			output += "<div id=items class='col-md-3 id"+ items[key].id +"'>" + "<span id=thisId style=display:none>"+ items[key].id +"</span>"+ "<h3>"+items[key].name +'</h3>' 
			+ "<p>Pris: "+ items[key].price + "</p>" +  "<button class= addToCart>ToCart</button>"+ "<button class=remove>Remove</button>"+ "</div>";
			
			
		};
        
		load();
		
	  
		
		document.getElementById('flip').innerHTML = output;
		
}
}
xhr.open('GET', 'data.json', false);
xhr.send();


//AddItem/AddQunt
$(function(){
	$(".addToCart").click(function(){
	
	var myDiv = $(this).parent();
	var id = $(myDiv).find("#thisId").text();
	id = parseInt(id);
	var getItem = JSON.parse(xhr.responseText);
	var thisitem = getItem[id];
	
	let thisItem_serialized = JSON.stringify(thisitem);
	if(localStorage.getItem(id) == null){
		localStorage.setItem(id,thisItem_serialized);
	  $(myDiv).find(".remove").css("display","inline");
		console.log("add");
		console.log(localStorage.length);
		load();
		
		
	}
	else{
		let backtoJson = JSON.parse(localStorage.getItem(id));
		localStorage.removeItem(id);
		let getQuant = backtoJson.quantity;
		let plusOne = parseInt(getQuant) + 1;
		backtoJson.quantity = plusOne.toString();
		let backtoJson_ser = JSON.stringify(backtoJson);
		localStorage.setItem(id,backtoJson_ser);
		console.log(backtoJson.quantity);
	  load();
		
		
		
	}
	})
})

	

$(function(){
	$(".remove").click(function(){
		var myDiv = $(this).parent();
		var id = parseInt($(myDiv).find("#thisId").text());
		let backtoJson = JSON.parse(localStorage.getItem(id));
		let getQuant = backtoJson.quantity;
		let plusOne = parseInt(getQuant) - 1;
		backtoJson.quantity = plusOne.toString();
		let backtoJson_ser = JSON.stringify(backtoJson);
		try{
		if(plusOne==0){
			localStorage.removeItem(id)
			$(this).css("display","none");
			if(localStorage.length == 0){
				document.getElementById('itsTboDy1').innerHTML = "";
				$("#buy").attr("disabled",true);
			}
			
			
		}
		else{
		localStorage.removeItem(id);
		localStorage.setItem(id,backtoJson_ser);
		console.log(backtoJson.quantity);
		}
		load();
	} 
	  catch(err){
    console.log(err.message);
		}
	
	
	})
	});



function load(){
	
	var output2 = "";
	
	for (var i = 0; i < localStorage.length; i++) {
	    
		var key = localStorage.key(i);
		let goJSON = JSON.parse(localStorage.getItem(key));
		let lonelyPrice = goJSON.price;
		let lonelyQuant = goJSON.quantity;
		totalPrice = parseInt(lonelyPrice)*parseInt(lonelyQuant);
		output2 += "<tr>" +"<td id='thisId' style=display:none>"+goJSON.id+ "</td>" + "<td>"+goJSON.name + "</td>" + "<td>" + totalPrice + "</td>" + "<td>" +goJSON.quantity + "</td>" + 
		 + "</tr>";
		
		
		 if(localStorage.length==0){
			 $("#buy").attr("disabled",true);
			
		 }
		 else{
			$("#buy").removeAttr("disabled");
			
		 }
		 
			 
           console.log(find);
			  document.getElementById('itsTboDy1').innerHTML = output2;
};
}
