$(document).ready(function(){

  let screenSize = $(document).width();
  const overlay = $('.appearOverlay');
  const summaryLink = $('.summary__content__title');


  summaryLink.click(function(ev){
      ev.preventDefault();

      overlay.removeClass('foldUp');

      setTimeout(function() {
        window.location.href = ev.currentTarget.href;
      }, 2200);
  })
});
