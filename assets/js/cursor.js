$(window).ready(function(){

  $(window).mousemove(function(e) {
    $(".cursor__green").css({
      left: e.pageX,
      top: e.pageY
    });
  });

  $(".members__slider").hover(function(){
    console.log('toto');
    $(".cursor__green").toggleClass("active");
    $(".drag").toggleClass("active");
  });

})
