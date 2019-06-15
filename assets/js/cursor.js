$(window).ready(function(){

  $(window).mousemove(function(e) {
    $(".cursor__green").css({
      left: e.clientX + "px",
      top: e.clientY + "px"
    });
  });

  $(".members__slider").hover(function(){
    $(".cursor__green").toggleClass("dragActive");
    $(".drag").toggleClass("dragActive");
  });

  $("a").hover(function(){
    $(".cursor__green").toggleClass("clickActive");
    $(".click").toggleClass("clickActive");
  });

})
