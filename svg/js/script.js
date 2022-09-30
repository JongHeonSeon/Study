
// star
$(function () {
    $(".star").on("click", function () {
        $(this).children(".star__star").children(".star__star_star, .star__star_star_shadow").toggleClass("hidden");
        $(this).toggleClass("active");
    });
});