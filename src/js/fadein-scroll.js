$(document).ready(function(){   
  $(".top-bar").hide();
  $(".top-bar").css("position","fixed");                 
  $(window).scroll(function(){                     
    if ($(this).scrollTop() > 500) {
      $('.top-bar').fadeIn(200);
      $('.top-bar--index__sticky').css('top','50px')
    } else {
      $('.top-bar').fadeOut(200);
      $(".main-menu--left").removeClass("js-active-menu")
      $('.top-bar--index__sticky').css('top','0')
    }
  });
});

