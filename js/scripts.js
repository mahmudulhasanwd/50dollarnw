(function ($) {
	$(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({
				'scrollTop': '0px'
			}, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		var owl = $('.owl-carousel');
		owl.owlCarousel();
		// Go to the next item
		$('.next-btn span i').click(function () {
			owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.pre-btn span i').click(function () {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			owl.trigger('prev.owl.carousel', [300]);
		})


                
		$("#firstimg").click(function(){
			$(".expectation-area-text img").slideToggle(200);
		});

                    
		$("#nextimg").click(function(){
			$(".joy-img-wrapper img").slideToggle(200);
		});












	});
})(jQuery);