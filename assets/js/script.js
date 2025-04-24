

$("#par").dblclick(function(){
    $(this).hide(2000)
    $(this).fadeIn(400)
});

$("#boton").click(function(){
    $("#div").css({
        "width": "auto",
    })
    $("#div").slideToggle(1000)
})