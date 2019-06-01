$(window).ready(function(){

  $(window).mousemove(function(e) {
    $(".cursor__green").css({
      left: e.clientX + "px",
      top: e.clientY + "px"
    });
  });

  $(".members__slider").hover(function(){
    console.log('toto');
    $(".cursor__green").toggleClass("active");
    $(".drag").toggleClass("active");
  });

})
