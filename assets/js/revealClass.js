// $(document).ready(function(){

$(document).ready(function(){

  Splitting({
    by: 'chars'
  });

  setTimeout(function(){

    window.sr = ScrollReveal({ reset: false });

    sr.reveal('.organisation__card .word .char', {
      origin: 'right',
      distance : '30px',
      duration: 600,
      interval : 2,
      easing : 'ease',
      delay: 100
    });

    sr.reveal('.organisation__intro .word .char', {
      origin: 'right',
      distance : '30px',
      duration: 600,
      interval : 2,
      easing : 'ease',
      delay: 100
    });

    sr.reveal('.positionnement .char', {
      origin: 'right',
      distance : '30px',
      duration: 500,
      interval : 2,
      easing : 'ease-in-out'
    });

    // index page
    ScrollReveal().reveal('.summary__link:first-child', { delay: 100, duration: 1300, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.summary__link:nth-child(2)', { delay: 100, duration: 1500, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.summary__link:last-child', { delay: 100, duration: 1700, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.presentation__intro', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.presentation__p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.members__title', { delay: 100, duration: 1200, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.members__p', { delay: 100, duration: 1200, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.slider', { delay: 100, duration: 1500, origin:'right', distance:'50px'});

    // organisation page
    // ScrollReveal().reveal('.organisation__card .word', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.organisation__p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    // ScrollReveal().reveal('.organisation__intro', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    if ($(window).width() >= 992) {
      ScrollReveal().reveal('.card p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    }


    // positionnement page
    ScrollReveal().reveal('.services__p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.plugins__p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.divide__p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.client h2', { delay: 100, duration: 700, origin:'right', distance:'100px'});
    ScrollReveal().reveal('.client h3', { delay: 100, duration: 1000, origin:'right', distance:'100px'});
    ScrollReveal().reveal('.client__p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});
    ScrollReveal().reveal('.competitor__p', { delay: 100, duration: 1000, origin:'right', distance:'50px'});

  }, 1300);

});
