// FLEX SLIDER - QUOTES
$(window).load(function() {
    $('.flexslider2').flexslider({
      animation: 'fade', // Change Animation Type to slide
      smoothHeight: false,
      animationLoop: true,
      touch: true,
      directionNav: false,
      slideshowSpeed: 7000, // Quote Time Intervals
      animationSpeed: 300, // Animation Speeds/times
      slideshow: true,
      pauseOnAction: false, 
      controlsContainer: '.flex-container'
    });
  });
  
  


// SEQUENCE SLIDER - IMAGES  
/mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
		  if (!pageYOffset) window.scrollTo(0, 1);
		}, 1000);
		
		$(document).ready(function(){
			var options = {
				autoPlay: true,
				nextButton: true,
				prevButton: true,
				swipeNavigation: false,
				animateStartingFrameIn: true,
				autoPlayDelay: 5000, // Slide Intervals
				transitionThreshold: 500,
				preloader: true,
				preloadTheseFrames: [1],
				preloadTheseImages: []
			};

			var sequence = $("#sequence").sequence(options).data("sequence");

			sequence.afterLoaded = function(){
				$("#nav").fadeIn(100);
				$("#nav li:nth-child("+(sequence.settings.startingFrameID)+") span").addClass("active");
			}

			sequence.beforeNextFrameAnimatesIn = function(){
				$("#nav li:not(:nth-child("+(sequence.nextFrameID)+")) span").removeClass("active");
				$("#nav li:nth-child("+(sequence.nextFrameID)+") span").addClass("active");
			}
			
			$("#nav li").click(function(){
				if(!sequence.active){
					$(this).children("span").removeClass("active").children("span").addClass("active");
					sequence.nextFrameID = $(this).index()+1;
					sequence.goTo(sequence.nextFrameID);
				}
			});
		});  
  
  


// PAGE SCROLL   
$(document).ready(function(){
	
	// initiate page scroller plugin
	$('body').pageScroller({
		navigation: '#headnav .feat'
	});
				
});
  