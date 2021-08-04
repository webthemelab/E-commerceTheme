(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       
 /*---------- menu js start---------*/  
     $('.stellarnav').stellarNav({
				theme: 'dark',
				breakpoint: 660,
				position: 'static',
				phoneBtn: false,
				locationBtn: false,
				sticky:false,
				showArrows:true,
				openingSpeed: 500,
				closingDelay: 500,
               
         });
        
        window.onscroll = function() {myFunction()};

			var header = document.getElementById("myHeader");
			var sticky = header.offsetTop;

			function myFunction() {
			  if (window.pageYOffset > sticky) {
			    header.classList.add("sticky");
			  } else {
			    header.classList.remove("sticky");
			  }
			}
        
/*---------- menu js End---------*/  


	
        
   $(".home_slider").owlCarousel({
    		loop:true,
    		dots:true,
    		nav:true,
            margin:20,
    	    autoplay:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            navText:["<i Class='fas fa-angle-left'></i>", 
          			"<i Class='fas fa-angle-right'></i>"],
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 1,
			  },
			  768: {
				items: 1,
			  },
			  1000: {
				items:1,
			  }
			}

    	});
        
                   

        
   $(".products-add").owlCarousel({
    		loop:true,
    		dots:true,
    		nav:false,
            autoplay:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            navText:["<i Class='fas fa-angle-left'></i>", 
          			"<i Class='fas fa-angle-right'></i>"],
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 1,
			  },
			  768: {
				items: 1,
			  },
			  1000: {
				items:1,
			  }
			}

    	});
        
                   
   $(".arrival-list").owlCarousel({
    		loop:false,
    		dots:true,
    		nav:false,
            margin:30,
            autoplay:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            navText:["<i Class='fas fa-angle-left'></i>", 
          			"<i Class='fas fa-angle-right'></i>"],
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 3,
			  },
			  1000: {
				items:4,
			  }
			}

    	});
                         
   $(".themesbazar_videolist").owlCarousel({
    		loop:false,
    		dots:true,
    		nav:false,
            margin:30,
            autoplay:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            navText:["<i Class='fas fa-angle-left'></i>", 
          			"<i Class='fas fa-angle-right'></i>"],
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 2,
			  },
			  768: {
				items: 3,
			  },
			  1000: {
				items:4,
			  }
			}

    	});
        
            $(function() {
              function slideMenu() {
                var activeState = $("#menu-container .menu-list").hasClass("active");
                $("#menu-container .menu-list").animate({top: activeState ? "0%" : "-900%"}, 1000);
              }
              $("#menu-wrapper").click(function(event) {
                event.stopPropagation();
                $("#hamburger-menu").toggleClass("open");
                $("#menu-container .menu-list").toggleClass("active");
                slideMenu();

                $("body").toggleClass("overflow-hidden");
              });

              $(".menu-list").find(".accordion-toggle").click(function() {
                $(this).next().toggleClass("open").slideToggle("fast");
                $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

                $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
                $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
              });
            }); // jQuery load



   
        $('.video-popup').magnificPopup({
            type: 'iframe'
          });
      
             

   
         $('.image-link').magnificPopup({
          type: 'image',
          mainClass: 'mfp-with-zoom', 

          zoom: {
            enabled: true, 
            duration: 500, 
            easing: 'ease-in-out', 
            opener: function(openerElement) {
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }

        }); 

        
        
        $(window).scroll(function(){
		        if ($(this).scrollTop() > 100) {
		            $('.scrollToTop').fadeIn();
		        } else {
		            $('.scrollToTop').fadeOut();
		        }
		    });

		    //Click event to scroll to top
		    $('.scrollToTop').on('click', function(){
		        $('html, body').animate({scrollTop : 0},800);
		        return false;
		    });
        
//        

    });

//
//    jQuery(window).load(function(){
////        jQuery(".page-loader").fadeOut(1000);
//    });


}(jQuery));	