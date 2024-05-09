$(document).ready(function(){
    //스와이퍼
    
    var swiper = new Swiper(".mySwiper", {
      speed: 600,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'progressbar',
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
 


    var swiper = new Swiper(".oneSwiper", {
      speed: 600,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'progressbar',
      },
      breakpoints: {
        1800: {
          slidesPerView: "3",
          slidesPerGroup: "3",
          spaceBetween: "20",
        },
        1600: {
          slidesPerView: "3",
          slidesPerGroup: "3",
          spaceBetween: "20",
        },
        1400: {
          slidesPerView: "2",
          slidesPerGroup: "3",
          spaceBetween: "12",
        },
        1000: {
          slidesPerView: "2",
          slidesPerGroup: "3",
          spaceBetween: "12",
        },
        960: {
          slidesPerView: "1",
          slidesPerGroup: "1",
          spaceBetween: "8",
        },

      },

    });
 
    var swiper = new Swiper(".twoSwiper", {
      slidesPerView: "3",
      slidesPerGroup: "3",
      spaceBetween: "18",
      speed: 700,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1400: {
          spaceBetween: "0",
        },
        1000: {
          spaceBetween: "0",
        }

      }
    });

    $(window).scroll(function(){
      let sct = $(window).scrollTop();

      if(sct >= 300){
          $('.header-area,.header-logo').addClass('active');
        
      }else{
          $('.header-area,.header-logo').removeClass('active');
      }
    });

    $('#hamburger').click(function(){
      $('.sub-menu').toggleClass('active');
      $(this).toggleClass('active');
    });
});