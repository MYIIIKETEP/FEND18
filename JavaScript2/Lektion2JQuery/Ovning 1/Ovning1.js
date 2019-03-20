$(function(){
    $("input[type = submit]").click(function(){
        let $name = $("#name").val();
        let $pass = $("#wordpass").val();
        if($name.length || $pass.length <= 3)
        {
            $(".message").css("display","inline");
        }
    })
})