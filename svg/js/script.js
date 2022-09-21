$(function(){
    $(".star").on("click", function(){
        $(this).children(".star__star").toggleClass("active");
    });
});