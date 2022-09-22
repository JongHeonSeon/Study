$(function () {
    $(".star").on("click", function () {
        $(this).children(".star__star").children(".star__star_star").toggleClass("hidden");
        $(this).toggleClass("active");
    });
});