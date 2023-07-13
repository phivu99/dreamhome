var swiper =  new Swiper(".mainslider", {
    autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + '</span>';
          },
      
    },
});

var swiper =  new Swiper(".mainslider2", {
    autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
});

var swiper =  new Swiper(".carousel-1", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
// var swiper = $(this).('.carousel-2');
; (function ($) {
var Swiper = function(){
    Swiper = $(this).data(".carousel-2");
}   
Swiper();
// if ( $( ".carousel-2" + sliderNUmber ).is( ":hidden" ) ) {
//     $( ".carousel-2" + sliderNUmber ).slideDown( "slow" );
// }
// else {
//     $( ".carousel-2" + sliderNUmber ).slideUp( "slow" );
// }
// var swiper =  new Swiper(".carousel-2" , {

// });
})(jQuery);

// (function($) {
//     $('.carousel-2').each(function(){
//         var slider = $(this).find('div'),
//         parent = $(this),
//         step = 500,
//         left = parseInt(slider.css('left'), 10),
//         max = parent.width() - slider.width(),
//         min = 0;

//     parent.find("#left").click(function() {
//         if (left > max) {
//             var newLeft = left - step;
//             left = (newLeft>max) ? newLeft : max;
//             slider.animate({
//                 "left": left + 'px'
//             }, "slow");
//         }
//     });

//     parent.find("#right").click(function() {
//         if (left < 0) {
//             var newLeft = left + step;
//             left = (newLeft<min) ? newLeft : min;
//             slider.animate({
//                 "left": left + 'px'
//             }, "slow");
//         }
//     });
// });
// })(jQuery);​

// function setAciveChat(f) {
//     friends.list.querySelector('.active').classList.remove('active')
//     f.classList.add('active')
//     chat.current = chat.container.querySelector('.active-chat')
//     chat.person = f.getAttribute('data-chat')
//     chat.current.classList.remove('active-chat')
//     chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat')
  
//   }
function setAciveChat(f) {
    friends.list.querySelector('.active').classList.remove('active')
    f.classList.add('active')
    chat.current = chat.container.querySelector('.swiper-slide')
    chat.person = f.getAttribute('data-chat')
    chat.current.classList.remove('swiper-slide')
    chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('swiper-slide')
  
  }


var swiper =  new Swiper(".carousel-2" , {

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
        
        
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
        // function (data) {
        //     $(this).data("swiper-pagination2")
        // }  
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
   
 
});


// var slide = $(".carousel-2");
// var slideIndex = -1;
// var numSlides = 3;

// function showNextSlide() {
//     if (slideIndex < 2* numSlides) {
//         ++slideIndex;
//         slide.eq(slideIndex % slide.length)
//             .fadeIn(700)
//             .delay(4000)
//             .fadeOut(700, showNextSlide)
//             .delay(11000);
//             $('.carousel-2:first-child').fadeIn(700);
//     } else slideIndex = -1;
// }  

// var swiper =  new Swiper(".carousel-2", {
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//         },
//     loop:true,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     // initialSlide: 1,
//     centeredSlides: true,
//     navigation: {
//         clickable: true,
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination2",
//         clickable: true,
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//             centeredSlides: false,
//         },
//         991: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//     },
// });

var swiper =  new Swiper(".carousel-3", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,   
    loop: false,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-4", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    
    slidesPerView: 1,   
    loop: false,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});



var swiper =  new Swiper(".carousel-5", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    // navigation: {
    //     clickable: true,
    //     nextEl: ".swiper-button-next4",
    //     prevEl: ".swiper-button-prev4",
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});


var swiper =  new Swiper(".carousel-6", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    loop:false,
    slidesPerView: 1,
    // slidesPerColumn: 3,
    // slidesPerColumnFill: 'row',
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-7", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-9", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop:false,
    slidesPerView: 1,
    // slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-testi", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

    },
});

var swiper =  new Swiper(".carousel-testi2", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



var swiper =  new Swiper(".carousel-team", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-works", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            // slidesPerColumn: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
    },
});

var swiper =  new Swiper(".carousel-shop", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

