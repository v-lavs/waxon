jQuery(document).ready(function (){
//  mob menu
  var nav = jQuery('.main-nav-wrap');

  jQuery('.burger-btn').click(function (e) {
    e.preventDefault();
    nav.addClass('open');
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
    // navText : ["",""]
  });

});