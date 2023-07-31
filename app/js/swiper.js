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

})(jQuery);


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
    grabCursor: true,
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
            slidesPerView: 7,
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


if ($('.one-carousel').length) {
    $('.one-carousel').owlCarousel({
        loop:false,
        margin:30,
        smartSpeed: 500,
        autoplay: 4000,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            600:{
                items:3
            },
            800:{
                items:3
            },
            1024:{
                items:3
            }
        }
    });    		
}

if ($('.two-carousel').length) {
    $('.two-carousel').owlCarousel({
        loop:false,
        margin:30,
        smartSpeed: 500,
        autoplay: 4000,
        pagination: {
            clickable: true,
          },
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            600:{
                items:3
            },
            800:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });    		
}

if ($('.sponsors-carousel').length) {
    $('.sponsors-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        smartSpeed: 500,
        autoplay: 4000,
        navigation: {
            clickable: true,
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4",
        },
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            600:{
                items:3
            },
            800:{
                items:3
            },
            1024:{
                items:3
            }
        }
    });    		
}

    var swiper = new Swiper(".location-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        clickable: true,
        nextEl: ".button-lo-next",
        prevEl: ".button-lo-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
      },

    //       thumbs: {
    //     swiper: swiperthump,
    // },
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 19.5,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 19.5,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  

var swiper =  new Swiper(".carousel-7", {
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel-8", {
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
            slidesPerView: 6,
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

var swiper =  new Swiper(".carousel-10", {
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
            slidesPerView: 4,
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

