
$(document).ready(function(){
    // Reveal elements on scroll | Vendor: Wowjs (https://wowjs.uk)
    new WOW().init();

    // Carousel | Vendor: Owl-Carousel-2 (https://owlcarousel2.github.io/OwlCarousel2/)
    $('.carousel-multiple').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplayHoverPause: false,
        responsiveClass:true,
        nav: false,
        responsive:{
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });

    // Parallax image | Vendor: jQuery Parallax (http://www.ianlunn.co.uk/plugins/jquery-parallax/)
    $('.parallax-section').parallax("50%", -0.5);

    // Enable Bootstrap PopOver | Vendor: Popper (https://popper.js.org/)
    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    // Sorteable Gallery | Vendor: Isotope (https://isotope.metafizzy.co)
    $('.sortable-gallery-items').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.sortable-gallery-filters ul li').click(function(){
        $('.sortable-gallery-filters ul li').removeClass('active');
        $(this).addClass('active');

        selector = $(this).attr('data-filter');
        $('.sortable-gallery-items').isotope({
            filter: selector,
            percentPosition: true,
            layoutMode: 'masonry'
        });
        return false;
    });

    // Sorteable Pricing | Vendor: Isotope (https://isotope.metafizzy.co)
    $('.sortable-pricing-items').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        filter: '.first'
    });
    
    $('.sortable-pricing-filters ul li').click(function(){
        $('.sortable-pricing-filters ul li').removeClass('active');
        $(this).addClass('active');

        selector = $(this).attr('data-filter');
        $('.sortable-pricing-items').isotope({
            filter: selector,
            percentPosition: true,
            layoutMode: 'masonry'
        });
        return false;
    });

    // Show full image | Vendor: Magnific-Popup (http://dimsemenov.com/plugins/magnific-popup/)
    $('.sortable-gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade'
    });


});