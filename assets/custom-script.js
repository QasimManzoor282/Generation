function formatState(state) {
    if (!state.id) {
        return state.text;
    }

    var baseUrl = "assets/images/resources/flags";
    var $state = $(
        '<span><img class="img-flag" /> <span></span></span>'
    );

    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find("span").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");

    return $state;
};
$(document).ready(function() {
    $('.inquery').select2({
        placeholder: "What is your inquiry regarding?",
        width: '100%'
    });
    
    $(".currency-selection").select2({
        templateSelection: formatState,
        width: '110px'
    });
    $(".filter-selection").select2({
        width: '230px',
        minimumResultsForSearch: -1
    });
    $("input[type='number']").inputSpinner();
});

// Slider...

$('.banner-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    arrows: false,
    dots: true,
    onhover: true,
    appendDots: $('.banner-dots')
});

$('.product-slider').slick({
    infinite: true,
    speed: 800,
    autoplaySpeed: 4500,
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    onhover: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});



$('.testimonial-review').slick({
    infinite: true,
    speed: 800,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    fade: true,
    onhover: true,
    appendDots: $('.testimonial-dots')
});


/*Home2*/

$('.product-slider-two').slick({
    infinite: true,
    speed: 800,
    autoplaySpeed: 4500,
    autoplay: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev-btn',
    nextArrow: '.nxt-btn',
    onhover: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
});


$('.review-slider').slick({
    infinite: true,
    speed: 800,
    autoplaySpeed: 4500,
    autoplay: true,
    arrows: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.prv-btn',
    nextArrow: '.next-btn',
    onhover: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
});



$('.week-trend-slider').slick({
    infinite: true,
    speed: 800,
    autoplaySpeed: 4500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    onhover: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
});

$('.review-slider-two').slick({
    infinite: true,
    speed: 800,
    autoplaySpeed: 4500,
    autoplay: true,
    arrows: true,
    prevArrow: '.prv-btn',
    nextArrow: '.nxt-btn',
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    onhover: true,
    appendDots: $('.review-dots'),

});
$('.certified-slider').slick({
    infinite: true,
    speed: 800,

    autoplay: false,
    arrows: true,
    prevArrow: '.certified-prv-btn',
    nextArrow: '.certified-nxt-btn',
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    }]
});

$('.product-gallery-slider').slick({
    infinite: true,
    speed: 800,
    autoplay: false,
    arrows: true,
    dots: false,
    prevArrow: '.prv-btn',
    nextArrow: '.nxt-btn',
    slidesToShow: 2,
    slidesToScroll: 1,
    onhover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.product-gallery-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-gallery-nav'
});
$('.product-gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-gallery-for',
    dots: false,
    centerMode: false,
    vertical: true,
    verticalSwiping:true,
    focusOnSelect: true
});
$('.product-gallery-for-horizontal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-gallery-nav-horizontal'
});
$('.product-gallery-nav-horizontal').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-gallery-for-horizontal',
    dots: false,
    centerMode: false,
    verticalSwiping:true,
    focusOnSelect: true
});

$(document).ready(function() {
    $('.mobile-menu-icon').click(function() {
        $('.navigation-wrapper').addClass("navigation-wrapper active");
    })
    $('.cross-btn').click(function() {
        $('.navigation-wrapper').removeClass("active");
    })
    $('.menu li.has-children').each(function() {
        $(this).click(function() {
            $(this).toggleClass('active');
        });
    });
    $('.menu li.has-children ul').css('transition', '0.3s linear');
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))