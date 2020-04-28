(function ($) {
	"use strict";
	
	var ageneuApp = {
		/* ---------------------------------------------
		    ## Content Loading
		--------------------------------------------- */	
		contentLoading: function() {
            $(".loader").delay(1000).fadeOut("slow");
            $("#overlayer").delay(1000).fadeOut("slow");
		},	
        
        /* ---------------------------------------------
            ## Scroll top
        --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
		/* ---------------------------------------------
            ## Mobile Menu
        --------------------------------------------- */
        mobile_menu: function () {
            // drop down menu width overflow problem fix
            var menuWidth = $(window).width();
            if (menuWidth > 1199) {
                $('ul').parent('li').hover(function () {
                    var menu = $(this).find("ul");
                    var menupos = $(menu).offset();
                    if (menupos.left + menu.width() > $(window).width()) {
                    var newpos = -$(menu).width() - 50;
                    menu.css({
                        left: newpos
                    });
                    }
                });
            }

            // mobile Menu
            //-------------------------------
            $('.site-header .site-navigation .mainmenu-area nav').meanmenu({
                meanMenuClose: "<i class='fas fa-times'></i>",
                meanMenuCloseSize: '18px',
                meanScreenWidth: '1199',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu-area .mobile-menu'
            });
        },	

        /*-------------------------------------------
            ## Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            if ($('.site-header').length) {
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 1199) {
                        if ($(this).scrollTop() > 0) {
                            $('.site-header').addClass('sticky-active');
                        } else {
                            $('.site-header').removeClass('sticky-active');
                        }
                    }
                });
            } 
        },
        
        /*-------------------------------------------
            ## Initialize Plugin
        --------------------------------------------- */
        initialize_plugin: function () {
            // Page Animation Script
            $("[data-animate]").scrolla({
                mobile: true,
                once: true
            });

            // Light Box for ( gallery, video )
            $('a[data-rel^=lightcase]').lightcase();

            //Faq
            $('.faq-wrapper .faq-title').on('click', function (e) {
                var f_info = $(this).parent('.faq-info');
                var element = $(this).parent('.faq-info').parent('.faq-item');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('.faq-content').removeClass('open');
                    element.find('.faq-content').slideUp(300);
                } else {
                    element.addClass('open');
                    f_info.children('.faq-content').slideDown(300);
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                    element.siblings('.faq-item').removeClass('open');
                    element.siblings('.faq-item').find('.faq-title').removeClass('open');
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                }
            });
        },

        /* ---------------------------------------------
		    ## Particles Effect
		--------------------------------------------- */
		particles_effect: function() {
            if ($('#particles-js').length) {
                particlesJS('particles-js',
                    {
                        "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                            "enable": true,
                            "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#273272"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                            "width": 2,
                            "color": "#f9f9f920"
                            },
                            "polygon": {
                            "nb_sides": 10
                            }
                        },
                        "opacity": {
                            "value": 0.6,
                            "random": false,
                            "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.2,
                            "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#1A2166",
                            "opacity": 0,
                            "width": 0
                        },
                        "move": {
                            "enable": true,
                            "speed": 3,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                            }
                        }
                        },
                        "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                            "enable": true,
                            "mode": "repulse"
                            },
                            "onclick": {
                            "enable": true,
                            "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                            },
                            "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                            },
                            "repulse": {
                            "distance": 200
                            },
                            "push": {
                            "particles_nb": 4
                            },
                            "remove": {
                            "particles_nb": 2
                            }
                        }
                        },
                        "retina_detect": true,
                        "config_demo": {
                        "hide_card": false,
                        "background_image": "",
                        "background_position": "50% 50%",
                        "background_repeat": "no-repeat",
                        "background_size": "cover"
                        }
                    }
                );
            }
        },
        
        /* ---------------------------------------------
            ## Promo Numbers
         --------------------------------------------- */
        promo_numbers: function() {
            $(".fanfact-promo-numbers").each(function () {
                $(this).isInViewport(function(status) {
                    if (status === "entered") {
                        for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                            var el = document.querySelectorAll('.odometer')[i];
                            el.innerHTML = el.getAttribute("data-odometer-final");
                        }
                    }
                });
            });
        },  
        
        /* ---------------------------------------------
		    ## Isotope Activation
		--------------------------------------------- */
		isotope_activation: function() {
			var IsoGriddoload = $('.portfolio-grid');
			IsoGriddoload.isotope({
			    itemSelector: '.item',
			    percentPosition: true,
			    layoutMode: 'packery',
			});

			var ProjMli = $('.portfolio-filter li a');
			var ProjGrid = $('.portfolio-grid');
			ProjMli.on('click', function(e) {
				e.preventDefault();
			    ProjMli.removeClass("active");
			    $(this).addClass("active");
			    var selector = $(this).attr('data-filter');
			    ProjGrid.isotope({
			        filter: selector,
			        animationOptions: {
			            duration: 750,
			            easing: 'linear',
			            queue: false,
			        }
			    });
			});
        },

        /* ---------------------------------------------
            ## Hero Slider
        --------------------------------------------- */
        hero_slider: function() {
            if ($('#hero-slider').length) {
                var items = 1;
                $('#hero-slider').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 10000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: true,
                    dots: false,
                    navText: ['<span class="flaticon-left-chevron"></span>','<span class="flaticon-right-chevron"></span>'],
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn'
                });  
            }
        },
        /* ---------------------------------------------
            ## Team Carousel
        --------------------------------------------- */
        team_carousel: function() {
            if ($('.team-carousel').length) {
                var items = 3;
                $('.team-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
        /* ---------------------------------------------
		    ## Testimonial Carousel
		 --------------------------------------------- */
		testimonial_carousel: function() {
            var testimonialkSlider = jQuery('#testimonail-carousel');
            if (testimonialkSlider.length) {
                var items = 2;
                testimonialkSlider.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },

        /* ---------------------------------------------
            ## Brands Slider
         --------------------------------------------- */
         brands_slider: function() {
            var $brandSlider = $('.brands-carousel')
            if($brandSlider.length) {
                $brandSlider.owlCarousel({
                    center: false,
                    items: 4,
                    autoplay: true,
                    autoplayTimeout: 3500,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        },
                        1366: {
                            items: 4
                        }
                    }
                });  
            }
        },
		/* ---------------------------------------------
		    ## Sidebar Script
		--------------------------------------------- */
		sidebarScript: function() {
            var w = $(window).width();
            var MarginTop = (w > 1199) ? 85 : 0;
			if ($('.sidebar-items').length) {
                $('.sidebar-items').theiaStickySidebar({
                    'containerSelector': '.blog-page-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
			if ($('.sidebar-services').length) {
                $('.sidebar-services').theiaStickySidebar({
                    'containerSelector': '.service-details-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
		},	
		/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function() {
			ageneuApp.scroll_top();
			ageneuApp.mobile_menu();
			ageneuApp.sticky_header();
			ageneuApp.initialize_plugin();
			ageneuApp.particles_effect();
            ageneuApp.promo_numbers();
            ageneuApp.hero_slider();
            ageneuApp.team_carousel();
            ageneuApp.testimonial_carousel();
            ageneuApp.brands_slider();
            ageneuApp.sidebarScript();
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		ageneuApp.initializ();
	});

	$(window).on('load', function() {
		ageneuApp.contentLoading();
		ageneuApp.isotope_activation();
	});
})(jQuery);