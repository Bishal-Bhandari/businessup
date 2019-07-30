$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").css("background", "#fff");
      $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
      $(".joinus-btn").css("border", "1px solid #f56363");
      $(".joinus-btn").css("background", "#f56363");
    }
    else {
      $(".navbar").css("background", "none");
      $(".navbar").css("box-shadow", "none");
      $(".joinus-btn").css("border", "1px solid #fff");
      $(".joinus-btn").css("background", "none");
    }
  })
})


// for li in info section to keep showing list one by one
function refreshData()
{
    x = 6;  // 5 Seconds

    // Do your thing here
$(document).ready(function (e) {
    var len = $('#info-blink ul li').length;

    var i = len;
    (function k() {
        $('#info-blink ul li').hide();
        $('#info-blink ul li').eq(len-i).show();
        if (--i) {
            setTimeout(k, 2000);
        }

    })()

});
    setTimeout(refreshData, x*1000);
}
refreshData(); // execute function