
// to apply style on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).width() > 991) {
      if (scroll > 50) {

        $(".nav-left").css("display", "flex");

        $(".navbar").css("background", "#fff");
        $(".navbar").css("margin-top", "0px");
        $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");

        $(".joinus-btn").css("border", "1px solid #f56363");
        $(".joinus-btn").css("background", "#f56363");

        $(".login-text").css("color", "#5b5b5b");
        $(".fa-sign-in-alt").css("color", "#5b5b5b");

        var classElement = document.getElementById("navbarTrue");
        classElement.className += " wow fadeInDown animated ";
      }
      else {

        $(".nav-left").css("display", "none");

        $(".navbar").css("margin-top", "50px");
        $(".navbar").css("background", "none");
        $(".navbar").css("box-shadow", "none");

        $(".joinus-btn").css("border", "1px solid #fff");
        $('.joinus-btn').attr('style', '');

        $('.login-text').attr('style', '');
        $('.fa-sign-in-alt').attr('style', '');

        var classElement = document.getElementById("navbarTrue");
        classElement.classList.remove("wow");
        classElement.classList.remove("fadeInDown");
        classElement.classList.remove("animated");
      }
    }
    else {
      if (scroll > 50) {
        $(".navbar").css("background", "#fff");
        $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
        $(".joinus-btn").css("border", "1px solid #f56363");
        $(".joinus-btn").css("background", "#f56363");
      }
      else {
        $(".navbar").css("background", "#fff");
        $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
        // $(".joinus-btn").css("border", "1px solid #f56363");
        // $(".joinus-btn").css("background", "none");
      }
    }
  })
})

$('.joinus-btn').attr('style', '');

// for li in info section to keep showing list one by one
function refreshData() {
  x = 6;  // 5 Seconds

  // Do your thing here
  $(document).ready(function (e) {
    var len = $('#info-blink ul li').length;

    var i = len;
    (function k() {
      $('#info-blink ul li').hide();
      $('#info-blink ul li').eq(len - i).show();
      if (--i) {
        setTimeout(k, 2000);
      }

    })()

  });
  setTimeout(refreshData, x * 1000);
}
refreshData(); // execute function

