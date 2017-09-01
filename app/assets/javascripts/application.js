//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 80) {
      $('.nav-index').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 80) {
      $('.nav-index').removeClass('navbar-fixed');
    }
  });
});
