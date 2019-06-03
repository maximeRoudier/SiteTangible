$(document).ready(function(){

  let screenSize = $(document).width();
  const overlay = $('.appearOverlay');
  const bottomLink = $('.bottom__link');
  const bottomLinkContent = $('.bottom__link--content');
  const footer = $('footer');


  bottomLink.click(function(ev){
      ev.preventDefault();
      var tl = new TimelineMax();
      // bottomLink.css('-webkit-text-stroke', 'unset');
      tl.to(overlay, 0, {className:"-=foldUp"})
        .to(footer, 0, {'overflow': 'visible'})
        .to(bottomLinkContent, 0, {className: "+=goAway"})
        .to(bottomLinkContent, 0, {'z-index': '1000'})
        .to(bottomLinkContent, 0.2, {bottom: '45vh'})
        .to(bottomLink, 0.2, {className: "+=desappear"}, 1.6);

      setTimeout(function() {
        window.location.href = ev.currentTarget.href;
      }, 2200);
  })
});
