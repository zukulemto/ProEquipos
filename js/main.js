/*
	Construction Script
*/
(function($) {
    "use strict";

             
	setTimeout(function() {
        $('body').addClass('loaded');
    }, 2000); // Delay in milliseconds (2 seconds)

    const sections = [
        { name: "DGII", count: 5, nick: "DGII"},
        { name: "DR-VII", count: 11, nick: "DR-VII"},
		{ name: "DR-VIII", count: 7, nick: "DR-VIII"},
		{ name: "Iglesia", count: 9, nick: "Iglesia"},
		{ name: "Honda", count: 6, nick: "Honda"},
        { name: "Imperial", count: 10, nick: "Imperial Clinic"},
        { name: "NaveForum", count: 13, nick: "Nave Forum"},
        { name: "Nesplas", count: 8, nick: "Nesplas"},
        { name: "PlazaEnsu", count: 12, nick: "Plaza Ensu"},
        { name: "TorreLeonardoVI", count: 8, nick: "Torre Leonardo VI"},
        { name: "TorreMelconXV", count: 3, nick: "Torre Melcon XV"},
        { name: "TorreMerlotInsignia", count: 4, nick: "Torre Merlot Insignia"},
        { name: "TorreSavalIV", count: 4, nick: "Torre Saval IV"},
        { name: "TorreStateraEmpíreo", count: 12, nick: "Torre Statera Empíreo" },
        { name: "TorreVertical", count: 5, nick: "Torre Vertical"},
        { name: "TorreW", count: 1, nick: "Torre W"},
    ];

    // Function to generate the HTML code for each section
    function generateSectionHTML(section) {
        let html = '';
		html += `
                <div class="col-sm-4 col-xs-6 single-item padding-10 andamios">
                    <div class="portfolio-box">
                        <img loading="lazy" class="img-w1" src="${section.name}/1.JPEG" data-src="${section.name}/1.JPEG" alt="Portfolio Image">
                        <a href="${section.name}/1.JPEG" class="overlay text-center ">
                            <div class="display-table">
                                <div class="table-cell padding-15">
                                    <h4 class="mb-10 fz-16 text-black display-inline-block bdrs-3 padding-25 ptb-15 bg-yellow">${section.nick}</h4>
                                    <h2 class="no-margin fz-14" style="color: rgb(0, 0, 0);">¡Haz click y desliza para ver el proyecto!</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            `;
        for (let i = 2; i <= section.count; i++) {
            html += `
                <div class="col-sm-4 col-xs-6 single-item padding-10 andamios noshow">
                    <div class="portfolio-box">
                        <img loading="lazy" class="img-w1" data-src="${section.name}/${i}.JPEG" alt="Portfolio Image">
                        <a href="${section.name}/${i}.JPEG" class="overlay text-center ">
                        </a>
                    </div>
                </div>
            `;
        }
        return html;
    }

    sections.forEach(section => {
        $('.' + section.name).html(generateSectionHTML(section));
    });

	
/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 10;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("fixed-top");
			} else {
				header.removeClass("fixed-top");
			}

		});
	});

	$(function() {
        $('img').Lazy();
    }); 


/*=========================================================================
	Slick Nav Active
=========================================================================*/
	var menuSelector = $('.mainmenu ul');
	menuSelector.slicknav({
        prependTo: '.navbar-header',
        label: ''
    });
/*=========================================================================
    Main Slider
=========================================================================*/
    var owlSlider = $('.main-slider, .main-slider-2, .main-slider-3');
    owlSlider.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 500,
        autoplayTimeout: 3500,
        autoplay: false,
        nav: true,
        navText: ['<i class="ti-angle-right"></i>', '<i class="ti-angle-right"></i>']
    });
    // Slider animation
    $('.main-slider').on('translate.owl.carousel', function () {
        $('.slider-content h1, .slider-content p, .slider-content a.b-btn, b-nav-btn').removeClass('fadeInUp animated').hide();
    });

    $('.main-slider').on('translated.owl.carousel', function () {
        $('.slider-content h1, .slider-content p, .slider-content a.b-btn, b-nav-btn').addClass('fadeInUp animated').show();
    });
    // Slider 2 animation
    $('.main-slider-2').on('translate.owl.carousel', function () {
        $('.slider-content h1').removeClass('zoomIn animated').hide();
        $('.slider-content p, .slider-content a.b-btn, b-nav-btn').removeClass('fadeInUp animated').hide();
    });

    $('.main-slider-2').on('translated.owl.carousel', function () {
        $('.slider-content h1').addClass('zoomIn animated').show();
        $('.slider-content p, .slider-content a.b-btn, b-nav-btn').addClass('fadeInUp animated').show();
    });

    // Slider 3 animation
    $('.main-slider-3').on('translate.owl.carousel', function () {
        $('.slider-content h1').removeClass('fadeInRight animated').hide();
        $('.slider-content p, .slider-content a.b-btn, b-nav-btn').removeClass('fadeInRight animated').hide();
    });

    $('.main-slider-3').on('translated.owl.carousel', function () {
        $('.slider-content h1').addClass('fadeInRight animated').show();
        $('.slider-content p, .slider-content a.b-btn, b-nav-btn').addClass('fadeInRight animated').show();
    });

/*=========================================================================
	Testimonial Carousel
=========================================================================*/
	var testiCarousel = $('.testi-carousel');
	testiCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        smartSpeed: 800,
        dots: false,
        nav:true,
        navText: ['<i class="ti-angle-right"></i>', '<i class="ti-angle-right"></i>'],
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 3
		    }
		}
    });
	var testiCarousel2 = $('.testi-carousel-2');
	testiCarousel2.owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        items: 1,
        dots: false,
        nav:true,
        navText: ['<i class="ti-angle-right"></i>', '<i class="ti-angle-right"></i>']
    });

	

/*=========================================================================
	Project Carousel
=========================================================================*/
	var projectCarousel = $('.project');
	projectCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        smartSpeed: 800,
        dots: false,
        nav:true,
        navText: ['<i class="ti-angle-right"></i>', '<i class="ti-angle-right"></i>'],
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 3
		    }
		}
    });

/*=========================================================================
	Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 2000
	});


/*=========================================================================
	Brand Carousel
=========================================================================*/
	var brandCarousel = $('.brand-carousel');
	brandCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 60,
        dots: false,
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 2
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 3
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 6
		    }
		}
    });

/*=========================================================================
	Isotope FitRows
=========================================================================*/
	var filterSelector = $('.filter-items');
	filterSelector.imagesLoaded( function() {

		 // Add isotope click function
		$('.filter-menu li').on('click', function(){
	        $(".filter-menu li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        filterSelector.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    filterSelector.isotope({
	        itemSelector: '.single-item',
	        layoutMode: 'fitRows',
	    });
	});

	
	
	

	$('.portfolio-items div').on('click', function() {
		// Remove lightbox class from all anchors
		$('.portfolio-items a').removeClass('lightbox');
		
		// Find the clicked project
		var clickedProject = $(this);
		
		// Add lightbox class to anchors within the clicked project
		clickedProject.find('a').addClass('lightbox');
		
		// Initialize Swipebox for the added anchors
		$('.lightbox').swipebox();
	});
	
	
	
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
	Swipebox active
=========================================================================*/
	// var lightbox = $('.lightbox');
	// lightbox.swipebox();

/*=========================================================================
	NiceScroll Active
=========================================================================*/
	$("html").niceScroll({
		background: "#111",
		cursorcolor:"#FAB702",
		cursorwidth:"16px",
        scrollspeed: 40,
        mousescrollstep: 60,
		cursorborder:"0px solid #eaeaea",
		cursorborderradius: "0px",
		autohidemode: false,
		zindex: "999"
	});
	

/*=========================================================================
	Hoverdir Active
=========================================================================*/
	$('.portfolio-items .portfolio-box ').each( function() { 
		$(this).hoverdir(); 
	});
    
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();


/*=========================================================================
	Scroll To Top
=========================================================================*/ 
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 600) {	
        $('#scroll-top').fadeIn();
        $('#whatsapp-button').css('bottom', '140px'); // Adjust bottom position of WhatsApp button
		$('#instagram-button').css('bottom', '90px'); // Adjust bottom position of WhatsApp button
    } else {
        $('#scroll-top').css('display', 'none');
        $('#whatsapp-button').css('bottom', '70px'); // Reset bottom position of WhatsApp button
		$('#instagram-button').css('bottom', '20px'); // Adjust bottom position of WhatsApp button
    }
});
/*=========================================================================
	Scroll from navbar items
=========================================================================*/ 
	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();

		var target = $(this.getAttribute('href'));

		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 700); // Adjust the animation speed if needed
		}
	});
})(jQuery);
