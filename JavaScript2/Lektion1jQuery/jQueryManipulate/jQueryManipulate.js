$(function(){
//Check HTML Code in a TAG(or whatever)
let $demo = $("#firstp").html();
$demo2 = $("firstp").html();
console.log($demo);
console.log($demo2);
});



//Set HTML code to a tag

$(function(){
$("#putCode").html("This <b>code</b> has ben set")
});

//Only cheks text in a tag
$(function(){
let $tryme = $("#checkText").text();
console.log($tryme);
});

//Check value in input OBS not .value() - .val()
$(function(){
let $demoVal = $("#inDemo").val();
console.log($demoVal);
});


//Set value to input

$(function(){
$("#setVal").val("MYIIIKETEP");
});


//Delete everything from certain element


$(function(){
$("#tryDiv").remove();
});