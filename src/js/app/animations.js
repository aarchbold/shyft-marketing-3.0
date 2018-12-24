function isElementInViewport (el) {

    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

$.fn.flyInFromRight = function() {
    $this = $(this),
        $elements = $('.fly-from-right', $this);

    window.setTimeout(function() {
        $elements.removeClass('fly-from-right');
    },400);


    // console.log(isElementInViewport($this));
    // console.log($this);
    // console.log($elements);
    // console.log($this);

    // $(window).on('DOMContentLoaded load resize scroll', function() {
    //     console.log(isElementInViewport($this));
    //     if (isElementInViewport($this)) {
            
    //     } else {
    //         //$elements.addClass('fly-from-right');
    //     }
    // }); 
}

$(function(){    
    $('.home-hero__inner').flyInFromRight();
    //$('.home-solutions').flyInFromRight();
});