$(document).ready(function() {

    // otvara / zatvara Likes listu klikom na front page ili gallery ikonicu 
    $(".likes, .btn__gallery--likes").click(function() {
        $(".likes__container").fadeIn(500);
    });

    $(".likes__container .btn__back").click(function() {
        $(".likes__container").fadeOut(500);
    });

    // otvara galeriju
    $(".list__wrapper li").click(function() {
        $("#gall").fadeIn(500);
    });

    $("#gotoFront").click(function() {
        $("#gall").fadeOut(500);
    });

    // otvara / zatvara item sekciju
    $('.gallery__list li img').click( function(event) {
        console.log(event.target);
        var urlSlika = $(event.target).attr("src");
        $(".item .image img").attr({
            "src" : urlSlika
        });
        $('.item').fadeIn(500);
    });

    $(".item .btn__back").click(function() {
        $(".item").fadeOut(500);
    });

    // smooth scroll

    // $('a[href*="#"]')
    //     // Remove links that don't actually link to anything
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function(event) {
    //         // On-page links
    //         if (
    //             location.pathname.replace(/^\//, "") ==
    //                 this.pathname.replace(/^\//, "") &&
    //             location.hostname == this.hostname
    //         ) {
    //             // Figure out element to scroll to
    //             var target = $(this.hash);
    //             target = target.length
    //                 ? target
    //                 : $("[name=" + this.hash.slice(1) + "]");
    //             // Does a scroll target exist?
    //             if (target.length) {
    //                 // Only prevent default if animation is actually gonna happen
    //                 event.preventDefault();
    //                 $("html, body").animate(
    //                     {
    //                         scrollTop: target.offset().top
    //                     },
    //                     1000,
    //                     function() {
    //                         // Callback after animation
    //                         // Must change focus!
    //                         var $target = $(target);
    //                         $target.focus();
    //                         if ($target.is(":focus")) {
    //                             // Checking if the target was focused
    //                             return false;
    //                         } else {
    //                             $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
    //                             $target.focus(); // Set focus again
    //                         }
    //                     }
    //                 );
    //             }
    //         }
    //     });
});
