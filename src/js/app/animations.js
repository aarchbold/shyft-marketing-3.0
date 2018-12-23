$.fn.flyInFromRight = function() {
    $this = $(this);

    window.setTimeout(function() {
        $this.removeClass('fly-from-right');
    },1000)

    console.log($this);
    console.log('really?');
}

$(function(){    
    $('.fly-from-right').flyInFromRight();
});