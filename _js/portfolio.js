$(function() {
  
    var MIN_HEIGHT = 350;

    $(window).resize(resize);

    resize();

    function resize(){
        var h = window.innerHeight-parseInt($('body').css('padding-top'));
        var w = window.innerWidth;
        if(h < MIN_HEIGHT) h = MIN_HEIGHT;
        $(".carousel, .carousel .item, .carousel-inner .item img").css({
            height: h+'px'
        });
        $('.carousel-inner .item img').attr('height',h).attr('width',w).css({
            width: w+'px'
        });
    }

});