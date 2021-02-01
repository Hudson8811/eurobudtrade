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
            breakpoint: 1000,
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
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true,
              vertical: false,
              verticalSwiping: false,
            }
          }
        ]
      });


      $(".articles-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            }
          }
        ]
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
                  adaptiveHeight: true
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
                  adaptiveHeight: true
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

      $(document).on('click', '.accordion-heading', function(e){
        e.preventDefault();
        const $this = $(this);
        const $item = $this.parent('.accordion-item');
        if(!$item.hasClass('is-active')){
          $('.accordion-item').removeClass('is-active');
          $('.accordion-content').slideUp();
          $item.addClass('is-active');
          $item.children('.accordion-content').slideDown();
        } else{
          $item.removeClass('is-active');
          $item.children('.accordion-content').slideUp();
        }

      });

      $('.header-burger').click(function(e){
        e.preventDefault();
        $('.header-overlay').toggleClass('is-active');
        $('.header').toggleClass('is-active');
        $(this).toggleClass('is-active');
        $('.header-menu').toggleClass('is-active');
      });

      $('.header-menu-link').click(function(e){
        e.preventDefault();
        const $this = $(this);
        if($(window).width() < 1250){
          if(!$this.hasClass('is-active')){
            $('.header-menu-link').removeClass('is-active');
            $('.header-sub_menu').slideUp();
            $this.addClass('is-active');
            $this.siblings('.header-sub_menu').slideDown();
          } else{
            $this.removeClass('is-active');
            $this.siblings('.header-sub_menu').slideUp();
          }
        }
      });

      $('.header-sub_menu-link').click(function(e){
        e.preventDefault();
        const $this = $(this);
        if($(window).width() < 1250){
          if(!$this.hasClass('is-active')){
            $('.header-sub_menu-link').removeClass('is-active');
            $('.header-sub_menu_content').slideUp();
            $this.addClass('is-active');
            $this.siblings('.header-sub_menu_content').slideDown();
          } else{
            $this.removeClass('is-active');
            $this.siblings('.header-sub_menu_content').slideUp();
          }
        }
        
      });

      $('.objects-title').click(function(e){
        e.preventDefault();
        const $this = $(this);
        if(!$this.hasClass('is-active')){
          $('.objects-item').removeClass('is-active');
          $('.objects-title').removeClass('is-active');
          $this.addClass('is-active');
          $this.parents('.objects-item').addClass('is-active');
        } else{
          $this.removeClass('is-active');
          $this.parents('.objects-item').removeClass('is-active');
        }
      });

      var factsMobile = false;
      var factsDesktop = false;
      function facts(){
        if($(window).width() < 901 && !factsMobile){
          if($('.facts-slider').hasClass('slick-initialized')){
            $(".facts-slider").slick('unslick');
            $(".facts-slider").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1,
              arrows: false,
              dots: true,
            });

            factsMobile = true;
            factsDesktop = false;
            
          } else{
            
            $(".facts-slider").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1,
              arrows: false,
              dots: true,
            });
            factsMobile = true;
            factsDesktop = false;
            
          }

          
        } else if($(window).width() > 900 && !factsDesktop){
         
          if($('.facts-slider').hasClass('slick-initialized')){
            $(".facts-slider").slick('unslick');
            $(".facts-slider").slick({
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 2,
              arrows: false,
              dots: false,
            });

            factsDesktop = true;
            factsMobile = false;
            
          } else{
            $(".facts-slider").slick({
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 2,
              arrows: false,
              dots: false,
            });
            factsDesktop = true;
            factsMobile = false;
            
          }

          
        }
      }

      facts();

      $(window).resize(function(){
        facts();
      })
});

