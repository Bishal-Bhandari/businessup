$(window).load(function () {
    $(".trigger-popup-div").click(function () {
        $('.popup-div').show();
    });
    $('.popupCloseButton').click(function () {
        $('.popup-div').hide();
    });
});