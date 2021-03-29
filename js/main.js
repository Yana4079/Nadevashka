
 var videoWrap = $(".video__wrapper"),
 videoCover = $(".video__cover");

videoWrap.click(function () {
 $(this).addClass('played');
 $(this).find(videoCover).css("display", "none");
 $(this).find($("video"))[0].play()
});

    $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     fade: true,
     asNavFor: '.slider-nav',
     centerMode: true,          
   });
   $('.slider-nav').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     arrows: false,
     dots: true,
     centerMode: true,
     focusOnSelect: true
   });


    $('.slider-reviews').slick({
      slidesToShow: 1,
      dots: true,
     centerMode: true,
   });
