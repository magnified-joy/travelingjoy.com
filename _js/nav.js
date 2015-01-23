$(function() {

  $(window).on("scroll touchmove", function () {
      $('.navigation').toggleClass('small', $(document).scrollTop() > 40);
   });

  $('a').each(function(){
    var href = $(this).attr('href');
    if(href.indexOf('://') >= 0 && !href.indexOf(window.location.host) >= 0){
        $(this).attr('target','_blank');
    }
  });

  if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)){
      $("a.thumbnail").on('click touchstart mousedown touchend mouseup',function(){
          window.location = $(this).attr('href');
      });
  }

});
