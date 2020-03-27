$(document).ready(function(){



    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
      icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
      });
    });
    
    $('.icon_none_desk').on('click', function() {
        $('.main_nav').toggleClass('main_nav_active');
        $('.nav_link').toggleClass('nav_link_active');
        
    });
    new WOW().init();


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