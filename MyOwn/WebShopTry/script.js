

var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
 
xhr.open('GET', 'data.json', true);
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {			
		var items = JSON.parse(xhr.responseText);
		var output = "";
		for (var key in items) {
			output += "<div id=items class='col-md-3 id"+ items[key].id +"'>" + "<span id=thisId style=display:none>"+ items[key].id +"</span>"+ "<h3 id=name>"+items[key].name + '</h3>' 
			+ "<p>Pris: " + "<span id=price>"+ items[key].price + "</span></p>" +  "<button class= addToCart>ToCart</button>"+ "</div>";
			
		};
		
		document.getElementById('flip').innerHTML = output;
	}
}
xhr.send();

$(function(){
    $("#ClickMe").click(function(){
        $("#panel").slideToggle("fast");
    });
  });


  $(function(){
	  $(".addToCart").click(function(){
	  var myDiv = $(this).parent();
	  var name = $(myDiv).find("#name").text();
	  var price =$(myDiv).find("#price").text();
	  var id = $(myDiv).find("#thisId").text();
	  console.log(id);
	  console.log(name);
	  console.log(price);
	 
	  
	  })
  })


  //add quantity to 