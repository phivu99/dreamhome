/**
  * Header Connect
  * retinaLogo
  * ajaxContactForm
  * Loadmore Item
  * headerFixed
  * mobileNav
  * ajaxSubscribe
  * alertBox
  * loadmore
*/

; (function ($) {
    "use strict";

    var themesflatTheme = {

        // Main init function
        init: function () {
            this.config();
            this.events();
        },

        // Define vars for caching
        config: function () {
            this.config = {
                $window: $(window),
                $document: $(document),
            };
        },

        // Events
        events: function () {
            var self = this;

            // Run on document ready
            self.config.$document.on('ready', function () {


                // Retina Logos
                self.retinaLogo();


            });

            // Run on Window Load
            self.config.$window.on('load', function () {

            });
        },

    }; // end themesflatTheme

    // Start things up
    themesflatTheme.init();

    var retinaLogos = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
          if(retina) {
              $('#site-logo-inner').find('img').attr( {src:'assets/images/logo/logo@2x.png',width:'195',height:'50'} );

              $('#logo-footer.style').find('img').attr( {src:'assets/images/logo/logo-footer@2x.png',width:'195',height:'50'} );
              $('#logo-footer.style2').find('img').attr( {src:'assets/images/logo/logo-footer-home.png',width:'195',height:'50'} );
          }   
        };

    var ajaxContactForm = function () {
        $('#contactform,#commentform').each(function () {
            $(this).validate({
                submitHandler: function (form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit,comment-form').append(loading);
                        },
                        success: function (msg) {
                            var result, cls;
                            if (msg === 'Success') {
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text': result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };

    // Header Connect

    var loadmore = function () {
        $(".fl-item").slice(0, 8).show();
        $(".fl-blog.fl-item2").slice(0, 6).show();
        $(".fl-collection.fl-item3").slice(0, 3).show();
        $(".fl-item.fl-item4").slice(0, 15).show();
        $(".fl-item.fl-item5").slice(0, 7).show();

        $(".loadmore").on("click", function(e){
          e.preventDefault();

          $(".fl-item:hidden").slice(0, 4).slideDown();
          $(".fl-item2:hidden").slice(0, 3).slideDown();
          $(".fl-item3:hidden").slice(0, 3).slideDown();
          $(".fl-item4:hidden").slice(0, 5).slideDown();
          $(".fl-item5:hidden").slice(0, 13).slideDown();
          if($(".fl-item:hidden").length == 0) {
            $(".loadmore").hide();
          }
          if($(".fl-item2:hidden").length == 0) {
            $("#loadmore").hide();
          }
          if($(".fl-item3:hidden").length == 0) {
            $("#loadmore").hide();
          }
          if($(".fl-item4:hidden").length == 0) {
            $("#loadmore").hide();
          }
          if($(".fl-item5:hidden").length == 0) {
            $("#loadmore").hide();
          }
        });
    };

       // Header Fixed
    //    var headerFixed = function () {
    //     if ($('body').hasClass('header-fixed')) {
    //         var nav = $('#header_main');

    //         if (nav.length) {
    //             var offsetTop = nav.offset().top,
    //                 headerHeight = nav.height(),
    //                 injectSpace = $('<div />', {
    //                     height: headerHeight
    //                 }).insertAfter(nav);
    //             injectSpace.hide();

    //             $(window).on('load scroll', function () {
    //                 if ($(window).scrollTop() > offsetTop) {
    //                     nav.addClass('is-fixed');
    //                     injectSpace.show();
    //                 } else {
    //                     nav.removeClass('is-fixed');
    //                     injectSpace.hide();
    //                 }

    //                 if ($(window).scrollTop() > 1000) {
    //                     nav.addClass('is-small');
    //                 } else {
    //                     nav.removeClass('is-small');
    //                 }
    //             })
    //         }
    //     }
    // };

        //=========NICE SELECT=========
        $('.select_js').niceSelect();

        // Header Fixed
        var headerFixed = function () {
            if ($('body').hasClass('header-fixed')) {
                var nav = $('#site-header');
    
                if (nav.length) {
                    var offsetTop = nav.offset().top,
                        headerHeight = nav.height(),
                        injectSpace = $('<div />', {
                            height: headerHeight
                        }).insertAfter(nav);
                    injectSpace.hide();
    
                    $(window).on('load scroll', function () {
                        if ($(window).scrollTop() > offsetTop) {
                            nav.addClass('is-fixed');
                            injectSpace.show();
                        } else {
                            nav.removeClass('is-fixed');
                            injectSpace.hide();
                        }
    
                        if ($(window).scrollTop() > 500) {
                            nav.addClass('is-small');
                        } else {
                            nav.removeClass('is-small');
                        }
                    })
                }
            }
        };


        
        
        //Update Header Style and Scroll to Top
        // function headerStyle() {
        //     if($('.main-header').length){
        //         var windowpos = $(window).scrollTop();
        //         var siteHeader = $('.main-header');
        //         var scrollLink = $('.scroll-to-top');
                
        //         var HeaderHight = $('.main-header').height();
        //         if (windowpos >= HeaderHight) {
        //             siteHeader.addClass('fixed-header');
        //             scrollLink.fadeIn(300);
        //         } else {
        //             siteHeader.removeClass('fixed-header');
        //             scrollLink.fadeOut(300);
        //         }
                
        //     }
        // }
        
        // headerStyle();

    //Submenu Dropdown Toggle
	if($('.main-header li.dropdown2 ul').length){
		$('.main-header li.dropdown2').append('<div class="dropdown2-btn"><span class="fa-solid fa-chevron-down fa-fw"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown2 .dropdown2-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown2 > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown2 > a,.hidden-bar .side-menu li.dropdown2 > a').on('click', function(e) {
			e.preventDefault();
		});
		
		$('.price-block .features .arrow').on('click', function(e) {
			$(e.target.offsetParent.offsetParent.offsetParent).toggleClass('active-show-hidden')
		});
		
	}

    // Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		//$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown2 > .dropdown2-btn').on('click', function(e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');
			
			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown2').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown2 > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation').children('li.dropdown2').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown2').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown2 > ul  > li.dropdown2 > .dropdown2-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');
			
			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown2 > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });
		
	}

    // var mobileNav = function () {
    //     var mobile = window.matchMedia("(max-width: 991px)");
    //     var wrapMenu = $("#site-header-inner .wrap-inner");
    //     var navExtw = $(".nav-extend.active");
    //     var navExt = $(".nav-extend.active").children();
    
    //     responsivemenu(mobile);
    
    //     mobile.addListener(responsivemenu);
    
    //     function responsivemenu(mobile) {
    //       if (mobile.matches) {
    //         $("#main-nav")
    //           .attr("id", "main-nav-mobi")
    //           .appendTo("#header_main")
    //           .hide()
    //           .children(".menu")
    //           .append(navExt)
    //           .find("li:has(ul)")
    //           .children("ul")
    //           .removeAttr("style")
    //           .hide()
    //           .before('<span class="arrow"></span>');
    //       } else {
    //         $("#main-nav-mobi")
    //           .attr("id", "main-nav")
    //           .removeAttr("style")
    //           .prependTo(wrapMenu)
    //           .find(".ext")
    //           .appendTo(navExtw)
    //           .parent()
    //           .siblings("#main-nav")
    //           .find(".sub-menu")
    //           .removeAttr("style")
    //           .prev()
    //           .remove();
    
    //         $(".mobile-button").removeClass("active");
    //         $(".mobile-button-style2").removeClass("active");
    //         $(".sub-menu").css({ display: "block" });
    //       }
    //     }
    //     $(document).on("click", ".mobile-button", function () {
    //       $(this).toggleClass("active");
    //       $("#main-nav-mobi").slideToggle();
    //     });
    //     $(document).on("click", ".mobile-button-style2", function () {
    //       $(this).toggleClass("active");
    //       $("#main-nav-mobi").slideToggle();
    //     });
    //     $(document).on("click", "#main-nav-mobi .arrow", function () {
    //       $(this).toggleClass("active").next().slideToggle();
    //     });
    //   };


    var ajaxSubscribe = {
        obj: {
            subscribeEmail: $('#subscribe-email'),
            subscribeButton: $('#subscribe-button'),
            subscribeMsg: $('#subscribe-msg'),
            subscribeContent: $("#subscribe-content"),
            dataMailchimp: $('#subscribe-form').attr('data-mailchimp'),
            success_message: '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message: '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError: '<div class="notification_error">{msg}</div>',
            noticeInfo: '<div class="notification_error">{msg}</div>',
            basicAction: 'mail/subscribe.php',
            mailChimpAction: 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function () {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function () {
                if (window.ajaxCalling) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if (isMailchimp) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                    subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if (responseData.status) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };

    var alertBox = function () {
        $(document).on('click', '.close', function (e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })
    };


    // Dom Ready
    $(function () {
        $( window ).on('load resize',function() {
            retinaLogos();
        });
        headerFixed();
        mobileNav();
        ajaxSubscribe.eventLoad();
        ajaxContactForm();
        alertBox();
        loadmore();
    });

})(jQuery);
