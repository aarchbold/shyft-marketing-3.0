$.fn.handleScroll = function() {
    var $link = $(this);
    var offset = 0;
    $link.click(function(e) {
        e.preventDefault();
        target = '#' + $(this).attr('data-scroll-target');
        if ($(window).width() < 800) {
            offset = 0;
        }
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 250);
    });
}

$(function(){    
    $('.inline-scroll').handleScroll();
});