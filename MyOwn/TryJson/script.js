var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
 
xhr.open('GET', 'data.json', false);
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {			
		var items = JSON.parse(xhr.responseText);
		var output = '<ul>';
		for (var key in items) {
			output += '<li>' + items[key].name + '</li>' +' <li>' + items[key].gender + '</li>'
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
xhr.send();