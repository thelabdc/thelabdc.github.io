$(document).ready(function () {
    // Smooth Scrolling Function
    $('a[href*=#]:not([href=#])').click(function () {
        var $targ = $(this.hash),
            host1 = this.hostname,
            host2 = location.hostname,
            path1 = this.pathname.replace(/^\//, ''),
            path2 = location.pathname.replace(/^\//, '');

        if (!$targ.length) {
            $targ = $('[name=' + this.hash.slice(1) + ']');
        }

        if ($targ.length && (host1 === host2 || path1 === path2)) {
            $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

            return false;
        }

        return true;
    });

    // Modal Click Behavior
    $('.js-open-modal').click(function () {
        $('.js-target-modal').addClass('js-active');
        $('#overlay').addClass('js-active');
        $('body').addClass('js-body-modal-active');
    });

    $('.js-close-modal').click(function () {
        $('.js-target-modal').removeClass('js-active');
        $('#overlay').removeClass('js-active');
        $('body').removeClass('js-body-modal-active');
    });

    // Main Menu Click Behavior
    $('.js-trigger-menu').click(function (e) {
        $(this).next().addClass('js-active-menu');
        $('#overlay').addClass('js-active');
    });

    $('.main-menu--left__close-menu').on("click",function(){
        $(this).parent().removeClass('js-active-menu');
    });

    // General Click Behavior for Overlay
    $('.js-overlay').click(function () {
        $('.js-active').removeClass('js-active');
        $('.js-active-menu').removeClass('js-active-menu');
    });

    // Sticky Click Behavior
    $('.js-close-sticky').click(function () {
        console.log("tryla close")
        $('.js-target-sticky').removeClass('js-active');
        $('.js-target-sticky').css("display","none");
    });


    // // Fade in scroll nav
    // $(".top-bar").hide()                 
    //   $(window).scroll(function(){                     
    //       if ($(this).scrollTop() > 500) {
    //           $('.top-bar').fadeIn(500);
    //       } else {
    //           $('.top-bar').fadeOut(500);
    //       }
    //   });

}); // doc.ready
