$(document).ready(function(){

  let progress = 0;
  const appearOverlay = $('.appearOverlay');
  const appearTmp = setInterval(appear, 10);

  function appear(){
    if(progress == 100){
      clearInterval(appearTmp);
      appearOverlay.addClass('foldUp');
    }
    else {
      progress++;
    }
  }
});
