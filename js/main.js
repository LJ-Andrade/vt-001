$(document).ready(function(){

    // $('.carousel-home').carousel(
    //     interval: 5000,
    // );
    $('.carousel-multiple').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplayHoverPause: false,
        responsiveClass:true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

});

$('.parallax-section').parallax("50%", -0.5);