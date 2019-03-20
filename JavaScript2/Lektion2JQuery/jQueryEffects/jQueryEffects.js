$(function(){
$("#show").click(function(){
$("#shDemo").show(300)
});
$("#hide").click(function(){
$("#shDemo").hide(300)
});
});


// vad är "i" , text == Kolla om det ör "Visa" - nästa klick sätt dölj osv

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
$(function(){
$("#toggle").click(function(){
$("#shDemo").toggle(300);
$(this).text(function(i,text){
    return text == "Visa" ? "Dölj" : "Visa" ;
});
});
});


//Först 
$(function(){
    $("#letsFade").click(function(){
        $("#div1").fadeTo("slow", 0.2);
        $("#div2").fadeTo("slow", 0.7);
        $("#div3").fadeTo("slow", 0.9);
    })
  
})



//SlideDown/Up/Toggle
$(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
        //$("#panel").slideUp("slow"); Css on slide div NO Display:none;
    });
  });

//Красивый способ изменить CSS?
  $(function(){
    $(document).ready(function(){
        $("#animateOn").click(function(){
          $("#div3").animate({height: "300px"});
        });
        $("#animateOff").click(function(){
          $("#div3").animate({height: "100px"});
        });
      });
  });