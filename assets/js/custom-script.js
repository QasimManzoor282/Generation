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

$(".currency-selection").select2({
    templateSelection: formatState,
    width: '110px'
});
// Slider...

$('.banner-wrapper').slick({
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
    slidesToScroll: 3,
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