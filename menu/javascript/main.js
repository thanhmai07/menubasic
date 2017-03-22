
;(function($) {

   'use strict'

	var responsiveMenu = function() {
		var	menuType = 'desktop';

		$(window).on('load resize', function() {
			var currMenuType = 'desktop';

			if ( $(window).width() < 992 ) {
				currMenuType = 'mobile';
			}

			if ( currMenuType !== menuType ) {
				menuType = currMenuType;

				if ( currMenuType === 'mobile' ) {
					var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
					var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

					$('#header').find('.header-wrap').after($mobileMenu);
					hasChildMenu.children('ul').hide();
					hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
					$('.btn-menu').removeClass('active');
				} else {
					var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

					$desktopMenu.find('.submenu').removeAttr('style');
					$('#header').find('.col-md-10').append($desktopMenu);
					$('.btn-submenu').remove();
				}
			}
		});

		$('.btn-menu').on('click', function() {
			$('#mainnav-mobi').slideToggle(300);
			$(this).toggleClass('active');
		});

		$(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
			$(this).toggleClass('active').next('ul').slideToggle(300);
			e.stopImmediatePropagation()
		});
	}



	// Dom Ready
	$(function() {

		responsiveMenu();

        $(window).bind('load', function() {
			//parallaxInit();
			//removePreloader();
			//googleMap();
    	});

   	});


})(jQuery);