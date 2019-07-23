$( document ).ready(function() {
/*---------------------------
 * Header and Navigation
 ---------------------------*/

	// sticky header
	var $window = jQuery(window),
		$header = jQuery('header'),
		headerDisableStickyHeaderWidth = parseInt(window.headerDisableStickyHeaderWidth || 1023),

		// Window dimensions
		winHeight = parseInt($window.height()),
		winWidth = parseInt($window.width());

		var handleScroll = function(){
			var scrollTop = parseInt($window.scrollTop(), 10);

			// Sticky header state
			if (scrollTop > 150){
				$header.addClass('navbar-scroll');
			} else {
			// Static header state
				$header.removeClass('navbar-scroll');
			}
			
		};
		
		$window.scroll(handleScroll);
		
		// Expand on mouseover
		$header.mouseover(function() {
			$header.removeClass('navbar-scroll');
		});
		
	// Bootstrap 4 dropdown on hover fix
	function toggleDropdown (e) {
	  const _d = $(e.target).closest('.dropdown'),
		_m = $('.dropdown-menu', _d);
	  setTimeout(function(){
		const shouldOpen = e.type !== 'click' && _d.is(':hover');
		_m.toggleClass('show', shouldOpen);
		_d.toggleClass('show', shouldOpen);
		$('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
	  }, e.type === 'mouseleave' ? 100 : 0);
	}

	$('body')
	  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
	  .on('click', '.dropdown-menu a', toggleDropdown);
	  
	// Scroll to top
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
	
	// Smooth scrolling
	 $("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 600);
		} // End if
	 });
	 
/*---------------------------
 * Triggers
 ---------------------------*/
 
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

var isIE = detectIE();
 
$('#show-more').on('click',function(event) {
	event.preventDefault();
	$('.hidden-news').slideToggle( function() {
		if ($(this).is(':visible')) {
			if ( isIE == false ) {
				$(this).css('display','flex');
			} else {
				$(this).css('display','block');
			}
		}
        
	});
	$(this).text() === 'Show more' ? $(this).text('Show less') : $(this).text('Show more');
});

});