$(document).ready(function () {
    $(window).scrollTop(0);

    // $(window).fadeThis();

    $(window).on('scroll', function () {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();

        var scrollPercent = (s / (d - c)) * 100;

        $('.percent').css('height', scrollPercent + '%');
    });

    // $('.gm-window').mousemove(function (e) {
    //     moveX = (e.pageX * -1 / 10);
    //     moveY = (e.pageY * -1 / 10);
    //     $(this).css('background-position', moveX + 'px ' + moveY + 'px')
    // });

    $('.open-page').click(function () {
        $('.gm-window').css('transition', '1.5s').addClass('hide');
        $('.gm-window-page').addClass('show');
    });

    $('.animationstop').click(function () {
        $('.gm-window').removeClass('hide');
        $('.gm-window-page').removeClass('show');
        // setTimeout(() => {
        //     $('.gm-window').css('transition', 'unset');
        // }, 1500);
    });

    $('.open-content-1').click(function () {
        $('.content-2').fadeOut(500, function () {
            $('.content-1').fadeIn(500);
            $('.open-content-2').removeClass('active');
            $('.open-content-1').addClass('active');
        })
    });

    $('.open-content-2').click(function () {
        $('.content-1').fadeOut(500, function () {
            $('.content-2').fadeIn(500);
            $('.open-content-1').removeClass('active');
            $('.open-content-2').addClass('active');
        })
    });

});