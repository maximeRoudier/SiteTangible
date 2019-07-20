$(document).ready(function(){

  // variables
  const menu = $('.menu');
  const menuMobile = $('.menu--mobile');
  const menuButton = $('.menu__button');
  const menuButtonOpen = $('.menu__button__open');
  const menuButtonClose = $('.menu__button__close');
  const menuNav = $('.menu__nav');
  const menuNavContent = $('.menu__nav__inner');
  const menuElm = $('.menu__nav__inner li');
  const menuNavLink = $('.menu__nav__link');
  const menuBackground = $('.menu__background');
  const menuNavigation = $('.menu__navigation');
  const cursorGreen = $('.cursor__green');
  let screenSize = $(document).width();
  let fullWidth = 0;

  // Desktop
  if(screenSize > 992 ){
    // function menu openning
    menuButton.click(function(){
      menu.toggleClass('open');
      menuButton.toggleClass('active');
      menuBackground.toggleClass('active');
      cursorGreen.toggleClass('hide');
      if(menuButton.hasClass("active")){
        menuButtonOpen.fadeOut();
        menuButtonClose.fadeIn();
        cursorGreen.css('display', 'none');
        $('*').css('cursor', 'auto');
        $('* a').css('cursor', 'pointer');
      }
      else{
        menuButtonClose.fadeOut();
        menuButtonOpen.fadeIn();
        cursorGreen.css('display', 'block');
        $('*').css('cursor', 'none');
        $('* a').css('cursor', 'none');
      }
    })

    // function navigation slide
    menuElm.each(function(){
      let menuElmWidth = $(this)[0].scrollWidth;
      fullWidth = fullWidth + menuElmWidth;
    });

    basicSet = (fullWidth-screenSize)/2;
    $(menuNavContent).css('transform', 'translateX(-'+basicSet+'px)');


    $( menuNav ).mousemove(function( e ) {
      let x = e.clientX;
      let percent = (x * 100)/screenSize;
      let slidePX = ((fullWidth-screenSize) * percent)/100;

      $(menuNavContent).css('transform', 'translateX(-'+slidePX+'px)');
    });

    // image background
    $(menuNavLink).hover(function(e){
      let linkImageVal = e.target.dataset.image;
      menu.toggleClass('linkHovered');
      if(menuButton.hasClass("active")){
        $('.'+linkImageVal+'').toggleClass('visible');
      }
    });
  }
  // Tablette + mobile
  else {
    menuButton.click(function(){
      menuMobile.toggleClass('open');
      menuButton.toggleClass('active');
      if(menuButton.hasClass("active")){
        menuButtonOpen.fadeOut();
        menuButtonClose.fadeIn();
      }
      else{
        menuButtonClose.fadeOut();
        menuButtonOpen.fadeIn();
      }
    })
  }

});
