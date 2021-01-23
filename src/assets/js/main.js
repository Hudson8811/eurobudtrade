$(document).ready(function () {
    $('.index_banner-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true
            }
          }
        ]
      });

      $(".project-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        vertical: true,
        autoplay:false,
        verticalSwiping: true,
        appendArrows: $('.project-tools'),
        appendDots: $('.project-tools'),
      });
});
