$(function() {

  var $i = $('.testimonials .row.even .col-sm-5');
  var $h = $('.testimonials h3');

  $(window).resize(resize);
  
  resize();

  function resize(){
    if(window.innerWidth < 768){
        $i.each(function(){ $(this).appendTo($(this).parent()); });
        $h.css({ marginBottom: "1em" });
    }else{
        $i.each(function(){ $(this).prependTo($(this).parent()); });
        $h.css({ marginBottom: 0 });
    }
  }
  
});