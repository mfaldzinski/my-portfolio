/* 
----------
Portfolio
----------
*/
$('.myPortfolios ul').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 5,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

/* 
-----------
Burger Menu
-----------
*/
$('.burgerMenu').click(function() {
    $('#nav ul').slideToggle();
});

/* 
--------------------
Horizontal Scrollbar
--------------------
*/
function scrollIndicator() {
    var windowScroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var scrolled = (windowScroll / height) * 100;
    $('#scrollBar').css('width', scrolled + '%');
}

$(window).scroll(function() {
    scrollIndicator();
});

/* 
---------
Go to Top
---------
*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#gotop').show();
    } else {
        $('#gotop').hide();
    }
});

$('#gotop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});

/* 
-------------
Smooth Scroll
-------------
*/
$(document).ready(function() {
    var topOffset = $('#header').outerHeight();
    $('#nav a[href^="#"]').on('click', function(event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - topOffset
            }, 1000);
        }
    });
});