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

      $(".facts-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        arrows: false,
        dots: false,
      });

      $(".articles-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
      });

      var quiz1Trigger = false;
      $('.quiz-btn-1').click(function(e){
        e.preventDefault();
        $.fancybox.open({
          src  : '.quiz-1',
          type : 'inline',
          opts : {
            smallBtn:false,
            beforeShow : function( instance, current ) {
              if(quiz1Trigger == false){
                $(".quiz-slider-1").slick({
                  infinite: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  fade: true,
                  cssEase: 'linear',
                  prevArrow: '<div class="quiz-arrow quiz-prev-arrow"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.61401 1L1.99998 7.61403L8.61401 14.2281" stroke="#D4D7DE" stroke-width="2"/></svg><span>назад</span></div>',
                  nextArrow: '<div class="quiz-arrow quiz-next-arrow"><span>Далее</span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.61401 1L13.228 7.61403L6.61401 14.2281" stroke="white" stroke-width="2"/></svg></div>',
                  appendArrows: $('.quiz-tools-1'),
                });
                quiz1Trigger = true;
              }
            }
          }
        });
      });

      var quiz2Trigger = false;
      $('.quiz-btn-2').click(function(e){
        e.preventDefault();
        $.fancybox.open({
          src  : '.quiz-2',
          type : 'inline',
          opts : {
            smallBtn:false,
            beforeShow : function( instance, current ) {
              if(quiz2Trigger == false){
                $(".quiz-slider-2").slick({
                  infinite: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  fade: true,
                  cssEase: 'linear',
                  prevArrow: '<div class="quiz-arrow quiz-prev-arrow"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.61401 1L1.99998 7.61403L8.61401 14.2281" stroke="#D4D7DE" stroke-width="2"/></svg><span>назад</span></div>',
                  nextArrow: '<div class="quiz-arrow quiz-next-arrow"><span>Далее</span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.61401 1L13.228 7.61403L6.61401 14.2281" stroke="white" stroke-width="2"/></svg></div>',
                  appendArrows: $('.quiz-tools-2'),
                });
                quiz2Trigger = true;
              }
            }
          }
        });
      });

      $('.quiz-heading a').click(function(e){
        e.preventDefault();
        $.fancybox.close({
          type : 'inline',
        });
      });

      $('.quiz-1-submit').click(function(e){
        e.preventDefault();
        $.fancybox.close({
          type : 'inline',
        });

        $.fancybox.open({
          src  : '#thx',
          type : 'inline',
          opts : {
            smallBtn:false,
          }
        });

      });

      $('.thx a').click(function(e){
        e.preventDefault();
        $.fancybox.close({
          src  : '#thx',
          type : 'inline',
        });
      });

      $(document).on('change','.application-form-label input[type="file"]', function(){
        var file = $(this)[0].files[0]
          if (file){
          $(this).parent('.application-form-label').addClass('is-active');
            $('.application-form-file-name').text(file.name);
          }
      });

      $('.application-form-label input[type="text"], .application-form-label input[type="email"], .application-form-label textarea').focus(function(){
        $(this).parent('.application-form-label').addClass('is-active');
        console.log('is-work')
      });

      $('.application-form-label input[type="text"], .application-form-label input[type="email"], .application-form-label textarea').blur(function(){
        if($(this).val() == ""){
        $(this).parent('.application-form-label').removeClass('is-active');
        console.log('is-work-2')
        }
      });

});

