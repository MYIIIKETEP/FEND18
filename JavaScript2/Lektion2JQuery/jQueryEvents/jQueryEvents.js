//MouseEnter - MouseOut - explains it self?
$(function(){
$("#demo").mouseenter(function(){
$(this).html("Demo på mouseenter!");
});
$("#demo").mouseout(function(){
    $(this).html("Demo på mouseout!");
});
});

//Samma i guess?
$(function(){
    $("#demo2").mousedown(function(){
    $(this).html("Demo på mousdown!");
    });
    $("#demo2").mouseup(function(){
        $(this).html("Demo på mouseup!");
    });
    });

//Hover har två inbyggda functioner som man ska programmera själv senare, som att
//man har mouseenter och mouseout, fast man har två functioner
//hover(VAD ska göras när det HOVERS, När musen går ut från HOVER)
//Är inte det samma som mouseenter och mouseout?

$(function(){
$("#demo3").hover(in1, out2)
});

function in1(){
    $(this).css({
        "background-color": "yellow",
        "color": "red"
    });
};

function out2(){

    $(this).css({
        "background-color": "red",
        "color": "green"
    });
};



//Focus - när man är focuserad på den - utföra
//blur - när man går ut från fältet - utföra
$(function(){
$("input").focus(function(){
$(this).css("background-color", "green");
});
$("input").blur(function(){
$(this).css("background-color", "red");
});
});


$(function(){
$("#itsOn").on("click", function(){
$(this).html("The click is OOON");
});
$("#itsOn").on("dblclick", function(){
$(this).html("dblClick is ON");
});
});


































