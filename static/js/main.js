$(document).ready(function(){





    $.extend($.lazyLoadXT, {
        edgeY:  250,
        srcAttr: 'data-src'
      });

    $(".scroll_all").on('click', function () {
        var elementClick = $(this).attr("href");
        // console.log(elementClick);
      
        var destination = $(elementClick).offset().top;
        var destContacts = (destination - 100)
        $('html, body').animate({ scrollTop: destContacts }, 600);
        console.log(destContacts);
        return false;
        
 
    });



    $('.consultation_js').fancybox({
        touch: false,
        scrolling: 'hidden',
       
    });
    


    var check_box = "З прив'язкою до виробітку електроенерії";
    var first_output = $('.first_output');
    var second_output = $('.second_output');
    var cost_calk = $('.cost_calk');
    var profit_calk = $('.profit_calk');

    var hidden_input_1 = $('.input_check_box');
    var hidden_input_2 = $('.input_first_output');
    var hidden_input_3 = $('.input_second_output');
    var hidden_input_4 = $('.input_cost_calk');
    var hidden_input_5 = $('.input_profit_calk');

    hidden_input_1.val(check_box);
    hidden_input_2.val(first_output.text());
    hidden_input_3.val(second_output.text());
    hidden_input_4.val(cost_calk.text());
    hidden_input_5.val(profit_calk.text());

    $('.lab-1').on('click', function() {
        check_box = "З прив'язкою до виробітку електроенерії";
    });
    $('.lab-2').on('click', function() {
        check_box = "З гарантованою виплатою";
    });

    $('.calc_btn').on('click', function() {

        hidden_input_1.val(check_box);
        hidden_input_2.val(first_output.text());
        hidden_input_3.val(second_output.text());
        hidden_input_4.val(cost_calk.text());
        hidden_input_5.val(profit_calk.text());


    });
   

    



    $('.mobile').mask("+38(999) 99 99 999");


    var inputHasFocus = $('.input_focus');
    inputHasFocus.on('focus', function() {
      let focusFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
      focusFinder.addClass('label__style_active');
    });
    
    inputHasFocus.on('blur', function() {
      if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
          let blurFinder =$(this).parents('.inp-vak-wrap').find('.label__style');
          blurFinder.removeClass('label__style_active');
      }
      
    });





$('.etaps-prof').on("click", function() {
    var ep = $(this).parents(".prof-wrap").find(".etaps-prichka");
    var pe = $(this).parents(".prof-wrap").find(".peshka");
    var cl = $(this).find(".close-etaps");
    var te = $(this).find(".text-etaps");


    $('.peshka').removeClass('peshka_active');
    $('.etaps-prichka').removeClass('etaps-prichka_active');
    $(ep).addClass('etaps-prichka_active');
    $(pe).addClass('peshka_active');
    

    if ($(this).hasClass('close-etaps_active')) {
          $(this).removeClass('close-etaps_active');
          $('.peshka').removeClass('peshka_active');
          $('.etaps-prichka').removeClass('etaps-prichka_active');
    } else {
        console.log('noClass');
        $('.etaps-prof').removeClass('close-etaps_active');
        $(this).addClass('close-etaps_active');
    }


  

     
    });



$(".close-etaps").on("click", function(){
    $('.peshka').removeClass('peshka_active');
    $('.etaps-prichka').removeClass('etaps-prichka_active');
    $('.etaps-prof').removeClass('close-etaps_active');
});
$(document).mouseup(function(e) {
    var select = $(e.target).parents('.prof-wrap'); // тут указываем класс элемента
    var closs = $(e.target).parents('.prof-wrap').find('.close-etaps'); // тут указываем класс элемента
 
    if (select.length > 0 || closs.length > 0) {} else {
      $('.peshka').removeClass('peshka_active');
      $('.etaps-prichka').removeClass('etaps-prichka_active');
       $('.etaps-prof').removeClass('close-etaps_active');
    }
    
});














    var wow1 = new WOW(
        {
          boxClass:     'line_animated',      // animated element css class (default is wow)
          animateClass: 'test_line', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow1.init();

      var wow2 = new WOW(
        {
          boxClass:     'calc_first_anim',      // animated element css class (default is wow)
          animateClass: 'flipInY_1', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow2.init();

      var wow3 = new WOW(
        {
          boxClass:     'calc_first_anim_2',      // animated element css class (default is wow)
          animateClass: 'flipInY_2', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow3.init();

      var wow_question = new WOW(
        {
          boxClass:     'prof-wrap',      // animated element css class (default is wow)
          animateClass: 'rotateInDownLeft', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow_question.init();

      var wow_etaps = new WOW(
        {
          boxClass:     'etaps_prof',      // animated element css class (default is wow)
          animateClass: 'bounceInDown', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow_etaps.init();

      var wow_etaps_sum = new WOW(
        {
          boxClass:     'last_etaps-block',      // animated element css class (default is wow)
          animateClass: 'bounceInRight', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow_etaps_sum.init();

      var wow_pref_arrow = new WOW(
        {
          boxClass:     'pref-absolute-1',      // animated element css class (default is wow)
          animateClass: 'rubberBand', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow_pref_arrow.init();

      var wow_footer_form_1 = new WOW(
        {
          boxClass:     'form_animate',      // animated element css class (default is wow)
          animateClass: 'zoomInLeft', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow_footer_form_1.init();

      var wow_footer_form_2 = new WOW(
        {
          boxClass:     'footer-info-block',      // animated element css class (default is wow)
          animateClass: 'zoomInRight', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow_footer_form_2.init();


      var wow_video = new WOW(
        {
          boxClass:     'tariff_video',      // animated element css class (default is wow)
          animateClass: 'bounceInRight', // animation css class (default is animated)
          offset:       110,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow_video.init();




    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
      icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
      });
    });
    
    $('.icon_none_desk').on('click', function() {

        if ($(this).hasClass('open')) {
            $("html,body").css("overflow", "hidden");
          } else {
              $("html,body").css("overflow", "visible");
        
          }

        $('.main_nav').toggleClass('main_nav_active');
        $('.nav_link').toggleClass('nav_link_active');
        
    });
   
    $('.nav_link').on('click', function() {
        console.log(1222);
        $("html,body").css("overflow", "visible");
        $('.main_nav').removeClass('main_nav_active');
        $('.nav_link').removeClass('nav_link_active');
        $('.icon_none_desk').removeClass('open');
        
    });

    var customs_cleared_price = $('.header_number');
    var price_text = 0;
    var chars_current = 7000;

    let  krok;

    var setInterval_price = setInterval(function(){
       
        if(chars_current > 0) {
                   if (chars_current >= 1000000) {
                krok = 100000;
            } else if (chars_current >= 100000 && chars_current <= 1000000) {
                krok = 50000;
            } else if (chars_current >= 10000 && chars_current <= 100000) {
                krok = 1000;
            } else if (chars_current >= 1000 && chars_current <= 10000) {
                krok = 29;
            } else if (chars_current >50 && chars_current <= 1000) {
                krok = 29;
            } else if (chars_current >= 10 && chars_current <= 100) {
                krok = 10;
            } else if (chars_current >= 1 && chars_current <= 10) {
                krok = 1;
                
            }
            price_text = price_text + krok;
            chars_current = chars_current - krok;
            customs_cleared_price.text(price_text);
        }else{
            clearInterval(setInterval_price);
        }
    }, 10);


    

});