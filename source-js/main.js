jQuery(document).ready(function () {
//  mob menu
  var nav = jQuery('.main-nav-wrap');

  jQuery('.burger-btn').click(function (e) {
    e.preventDefault();
    nav.addClass('open');
  });

  jQuery('.close-main-nav').click(function (e) {

    e.preventDefault();
    nav.removeClass('open');
  });

//  search-bar
  var searchBar = jQuery('.search-bar');

  jQuery('#openSearch').click(function (e) {
    e.preventDefault();
    searchBar.addClass('active');
  });

  jQuery('#closeSearch').click(function (e) {
    e.preventDefault();
    searchBar.removeClass('active');
  });

//  slider
  jQuery('.banner-slider').owlCarousel({
    items: 1,
    loop: true,
    touchDrag: true,
    smartSpeed: 1000,
    navContainer: false,
    autoHeight: true,
    nav: true,
    navText: ['<i class=\'fa fa-angle-left\'></i>', '<i class=\'fa fa-angle-right\'></i>']
  });

  jQuery('.recent-post-slider').owlCarousel({
    loop: true,
    touchDrag: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    responsiveClass: true,
    nav: true,
    navContainer: false,
    navText: ['<i class=\'fa fa-angle-left\'></i>', '<i class=\'fa fa-angle-right\'></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      970: {
        items: 3,
        loop: true
      }
    }
  });

  // Get the video
  var video = document.getElementById('presentationVideo');
  var btn = document.getElementById('playBtn');

  function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime);
  }

    $("#presentationVideo").on(
      "timeupdate",
      function(event){
        onTrackedVideoFrame(this.currentTime, this.duration);
      });



// Pause and play the video, and change the button text
  function playVideo () {
    if (video.paused) {
      video.play();
      btn.classList.toggle('pause');
    } else {
      video.pause();
      btn.classList.toggle('pause');
    }
  }
  btn.addEventListener('click', function () {
    playVideo();
  });

  var scrolled;
  window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
      $(".site-header").css({"background": "linear-gradient(to right, #211b19, #4e3427)"})
    }
    if(100 > scrolled){
      $(".site-header").css({"background": "transparent"})
    }
  }
});

