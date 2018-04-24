jQuery(document).ready(function (){
//  mob menu
  var nav = jQuery('.main-nav-wrap');

  jQuery('.burger-btn').click(function (e) {
    e.preventDefault();
    nav.addClass('open');
  });

  jQuery('.close-main-nav').click(function (e) {

    e.preventDefault()
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
    items:1,
    loop: true,
    touchDrag: true,
    smartSpeed: 1000,
    navContainer: false,
    autoHeight: true,
    nav: true,
    // navText: ["<img src='img/prew.png'>","<img src='img/next.png'>"]
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });

  jQuery('.recent-post-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText : ["",""],
    nav:true,
    responsive:{
      0:{
        items:1,
      },
      768:{
        items:2,
             },
      970:{
        items:3,
        loop:true
      }
    }
  })

});