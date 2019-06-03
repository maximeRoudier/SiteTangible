$(document).ready(function(){

  // variables
  const menuNavigationLink = $('.menu__navigation a');
  const menuButton = $('.menu__button');
  const menuElm = $('.menu__nav__inner li');
  const menuElmMobile = $('.menu__nav__inner--mobile li');
  const menu = $('.menu');
  let screenSize = $(document).width();

  // Desktop
  if(screenSize > 992 ){
    menuNavigationLink.click(function(ev){
        ev.preventDefault();
        const desappearTmp = setInterval(desappear, 10);
        let progressDesappear = 0;
        menuButton.css('top', '-50px');
        menuElm.css('opacity', '0');
        menuElm.css('transform', 'translateY(50px)');
        function desappear(){
          if(progressDesappear == 50){
            clearInterval(desappearTmp);
            menu.removeClass('linkHovered');
          }
          else {
            progressDesappear++;
          }
        }
        setTimeout(function() {
          window.location.href = ev.currentTarget.href;
        }, 1000);
    });
  }
  else{
    menuNavigationLink.click(function(ev) {
        ev.preventDefault();
        menuButton.css('top', '-50px');
        menuElmMobile.css('opacity', '0');
        menuElmMobile.css('transform', 'translateY(50px)');
        setTimeout(function() {
          window.location.href = ev.currentTarget.href;
        }, 1000);
    });
  }
});
