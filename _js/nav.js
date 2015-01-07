$(function() {

  if(!$('body').hasClass('home')){
      $(window).on("scroll touchmove", function () {
          $('.navigation').toggleClass('small', $(document).scrollTop() > 0);
       });
  }
  
  $('a').each(function(){
    var href = $(this).attr('href');
    if(href.indexOf('://') >= 0 && !href.indexOf(window.location.host) >= 0){
        $(this).attr('target','_blank');
    }
  });
  
  $(document).keydown(function(e){
    switch(e.which) {
        case 37: // left
            var $c = $('.carousel');
            $c.carousel('pause');
            $c.carousel('prev');
            e.preventDefault();
        break;
        case 39: // right
            var $c = $('.carousel');
            $c.carousel('pause');
            $c.carousel('next');
            e.preventDefault();
        break;
    }
  });
  
  $('.carousel').carousel({
        interval:4000,
        pause: "false"
    });
  
    $('.carousel-control').click(function(){
        $(this).parents('.carousel').carousel('pause');
    });
  
    $('.carousel-inner img').each(function(){
        (new Image()).src = $(this).css('background-image').replace('url(','').replace(')','');
    });
  
    if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)){
        $("a.thumbnail").on('click touchstart mousedown touchend mouseup',function(){
            window.location = $(this).attr('href');
        });
    }
  
});