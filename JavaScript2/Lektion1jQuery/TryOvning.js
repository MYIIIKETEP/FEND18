$(function(){
 $("#AddBtn").click(function(){
     let $item = $("#newItem").val();
$("ul").append("<li>" + $item + "</li>");
 });
});