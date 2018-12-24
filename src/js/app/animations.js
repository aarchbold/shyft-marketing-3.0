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
    $this = $(this);

    $(window).on('DOMContentLoaded load resize scroll', function() {
        var delay = 100;
        $this.each(function(i,e) {
            console.log(isElementInViewport($(e).parent()));
            if (isElementInViewport($(e).parent())) {
                delay = delay + 100;
                window.setTimeout(function() {
                    $(e).removeClass('fly-from-right');
                },delay);
            }
        })

    }); 
}

$.fn.flyInFromLeft = function() {
    $this = $(this);

    $(window).on('DOMContentLoaded load resize scroll', function() {
        var delay = 100;
        $this.each(function(i,e) {
            console.log(isElementInViewport($(e).parent()));
            if (isElementInViewport($(e).parent())) {
                delay = delay + 100;
                window.setTimeout(function() {
                    $(e).removeClass('fly-from-left');
                },delay);
            }
        })

    }); 
}

$(function(){    
    $('.animate-slide').flyInFromRight();
    $('.animate-slide').flyInFromLeft();
    //$('.home-solutions').flyInFromRight();
});