$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).width() > 991) {
      if (scroll > 50) {
        $('.navbar .navbar-brand-top img').attr('src', 'img/logo/logo.png');
      }

      else {
        $('.navbar .navbar-brand-top img').attr('src', 'img/logo/logo-light.png');
      }
    }
  })
})