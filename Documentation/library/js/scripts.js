﻿/* -----------------------------------------------------------------------------

	TABLE OF CONTENTS

	1.) General
	2.) Components
	3.) Header
	4.) Main Slider
	5.) Bottom Panel
	6.) Footer
	7.) Style Switcher

----------------------------------------------------------------------------- */

(function($){ "use strict";
$(document).ready(function(){

/* -----------------------------------------------------------------------------

	1.) GENERAL

----------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------
		AJAX FORMS
	------------------------------------------------------------------------- */

	if ( $.fn.lvAjaxForm ) {
		$( 'form.m-ajax-form' ).each(function(){
			$(this).lvAjaxForm();
		});
	}

	/* -------------------------------------------------------------------------
		AJAX MODALS
	------------------------------------------------------------------------- */

	if ( $.fn.lvOpenAjaxModal ) {
		$( 'a.m-open-ajax-modal' ).each(function(){
			$(this).lvOpenAjaxModal();
		});
	}

	/* -------------------------------------------------------------------------
		FLUID VIDEOS
	------------------------------------------------------------------------- */

	$( 'body' ).lvFluidEmbedVideo();

	/* -------------------------------------------------------------------------
		FORMS
	------------------------------------------------------------------------- */

	// DATEPICKER INPUTS
	if ( $.fn.lvDatepickerInput ) {
		$( '.datepicker-input' ).each(function(){
			$(this).lvDatepickerInput();
		});
		$( document ).on( 'modalOpened', function(){
			$( '.c-modal' ).find( '.datepicker-input' ).each(function(){
				$(this).lvDatepickerInput();
			});
		});
	}

	// CHECKBOX INPUTS
	if ( $.fn.lvCheckboxInput ) {
		$( '.checkbox-input' ).each(function(){
			$(this).lvCheckboxInput();
		});
		$( document ).on( 'modalOpened', function(){
			$( '.c-modal' ).find( '.checkbox-input' ).each(function(){
				$(this).lvCheckboxInput();
			});
		});
	}

	// SELECTBOX INPUTS
	if ( $.fn.lvSelectboxInput ) {
		$( '.selectbox-input' ).each(function(){
			$(this).lvSelectboxInput();
		});
		$( document ).on( 'modalOpened', function(){
			$( '.c-modal' ).find( '.selectbox-input' ).each(function(){
				$(this).lvSelectboxInput();
			});
		});
	}

	// VALIDATE FORMS
	if ( $.fn.lvIsFormValid ) {
		$( 'form.m-validate' ).each(function(){
			var $this = $(this);
			$this.submit(function(){
				if ( ! $this.lvIsFormValid() ) {
					$this.find( '.m-validation-error' ).slideDown( 300 );
					return false;
				}
			});
		});
		$( document ).on( 'modalOpened', function(){
			$( '.c-modal' ).find( 'form.m-validate' ).each(function(){
				var $this = $(this);
				$this.submit(function(){
					if ( ! $this.lvIsFormValid() ) {
						$this.find( '.m-validation-error' ).slideDown( 300 );
						return false;
					}
				});
			});
		});
	}

	/* -------------------------------------------------------------------------
		INPUT PLACEHOLDERS
	------------------------------------------------------------------------- */

	$( '*[data-placeholder]' ).each(function(){

		var $this = $(this),
		placeholder = $this.data( 'placeholder' );

		// RESET
		if ( $this.val() === '' ) {
			$this.val( placeholder );
		}
		// FOCUS
		$this.focus(function(){
			if ( $this.val() === placeholder ) {
				$this.val( '' );
			}
		});
		// BLUR
		$this.blur(function(){
			if ( $this.val() === '' ) {
				$this.val( placeholder );
			}
		});

	});

	/* -------------------------------------------------------------------------
		LIGHTBOXES
	------------------------------------------------------------------------- */

	if ( $.fn.lvInitLightboxes ) {
		$( 'body' ).lvInitLightboxes();
	}

	/* -------------------------------------------------------------------------
		LOAD HIRES IMAGES FOR HiDPI SCREENS
	------------------------------------------------------------------------- */

	if ( $.fn.lvLoadHiresImages ) {
		$( 'body' ).lvLoadHiresImages();
	}

	/* -------------------------------------------------------------------------
		MEDIA QUERY BREAKPOINT
	------------------------------------------------------------------------- */

	var mediaQueryBreakpoint;
	if ( $.fn.lvGetMediaQueryBreakpoint ) {
		mediaQueryBreakpoint = $.fn.lvGetMediaQueryBreakpoint();
		$( document ).on( 'screenTransition', function(){
			mediaQueryBreakpoint = $.fn.lvGetMediaQueryBreakpoint();
		});
	}
	else {
		mediaQueryBreakpoint = $(window).width();
	}


/* -----------------------------------------------------------------------------

	2.) COMPONENTS

----------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------
		ACCORDION
	------------------------------------------------------------------------- */

	if ( $.fn.lvAccordion ) {
		$( '.c-accordion' ).each(function(){
			$(this).lvAccordion();
		});
	}

	/* -------------------------------------------------------------------------
		GALLERY
	------------------------------------------------------------------------- */

	if ( $.fn.owlCarousel ) {
		$( '.c-gallery.m-paginated' ).each(function(){

			var $this = $(this),
			itemList = $this.find( '> .thumb-list' ),
			items = $this.data( 'items' ) ? parseInt( $this.data( 'items' ) ) : 4,
			itemsDesktop = $this.data( 'items-desktop' ) ? parseInt( $this.data( 'items-desktop' ) ) : 4,
			itemsDesktopSmall = $this.data( 'items-desktop-small' ) ? parseInt( $this.data( 'items-desktop-small' ) ) : 3,
			itemsTablet = $this.data( 'items-tablet' ) ? parseInt( $this.data( 'items-tablet' ) ) : 2,
			itemsMobile = $this.data( 'items-mobile' ) ? parseInt( $this.data( 'items-mobile' ) ) : 1;

			// CAROUSEL
			itemList.owlCarousel({
				autoPlay: false,
				slideSpeed: 300,
				pagination: true,
				paginationSpeed : 400,
				singleItem: false,
				addClassActive: true,
				autoHeight: false,
				items : items,
				itemsDesktop : [1199,itemsDesktop],
				itemsDesktopSmall : [979,itemsDesktopSmall],
				itemsTablet: [768,itemsTablet],
				itemsMobile: [479,itemsMobile]
			});

			// HOVER
			$this.hover(function(){
				$this.addClass( 'm-hover' );
			}, function(){
				$this.removeClass( 'm-hover' );
			});

		});
	}

	/* -------------------------------------------------------------------------
		PROGRESS BAR
	------------------------------------------------------------------------- */

	if ( $.fn.lvProgressBar ) {
		$( '.c-progress-bar' ).each(function(){
			$(this).lvProgressBar();
		});
	}

	/* -------------------------------------------------------------------------
		SERVICE LIST
	------------------------------------------------------------------------- */

	if ( $.fn.owlCarousel ) {
		$( '.c-service-list.m-paginated' ).each(function(){

			var $this = $(this),
			itemList = $this.find( '.service-list-inner' ),
			items = $this.data( 'items' ) ? parseInt( $this.data( 'items' ) ) : 4,
			itemsDesktop = $this.data( 'items-desktop' ) ? parseInt( $this.data( 'items-desktop' ) ) : 4,
			itemsDesktopSmall = $this.data( 'items-desktop-small' ) ? parseInt( $this.data( 'items-desktop-small' ) ) : 3,
			itemsTablet = $this.data( 'items-tablet' ) ? parseInt( $this.data( 'items-tablet' ) ) : 2,
			itemsMobile = $this.data( 'items-mobile' ) ? parseInt( $this.data( 'items-mobile' ) ) : 1;

			// CAROUSEL
			itemList.owlCarousel({
				autoPlay: false,
				slideSpeed: 300,
				pagination: true,
				paginationSpeed : 400,
				singleItem: false,
				addClassActive: true,
				autoHeight: true,
				items : items,
				itemsDesktop : [1199,itemsDesktop],
				itemsDesktopSmall : [979,itemsDesktopSmall],
				itemsTablet: [768,itemsTablet],
				itemsMobile: [479,itemsMobile]
			});

			// HOVER
			$this.hover(function(){
				$this.addClass( 'm-hover' );
			}, function(){
				$this.removeClass( 'm-hover' );
			});

		});
	}

	/* -------------------------------------------------------------------------
		TABS
	------------------------------------------------------------------------- */

	if ( $.fn.lvTabbed ) {
		$( '.c-tabs' ).each(function(){
			$(this).lvTabbed();
		});
	}

	/* -------------------------------------------------------------------------
		TESTIMONIAL LIST
	------------------------------------------------------------------------- */

	if ( $.fn.owlCarousel ) {
		$( '.c-testimonial-list.m-paginated' ).each(function(){

			var $this = $(this),
			itemList = $this.find( '.testimonial-list-inner' );

			// CAROUSEL
			itemList.owlCarousel({
				autoPlay: false,
				slideSpeed: 300,
				pagination: true,
				paginationSpeed : 400,
				singleItem: true,
				addClassActive: true,
				autoHeight: true
			});

			// HOVER
			$this.hover(function(){
				$this.addClass( 'm-hover' );
			}, function(){
				$this.removeClass( 'm-hover' );
			});

		});
	}


/* -----------------------------------------------------------------------------

	3.) HEADER

----------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------
		HEADER SUBMENU
	------------------------------------------------------------------------- */

	$( '#header .header-menu .sub-menu' ).each(function(){
		$(this).parent().each(function(){

			var $this = $(this);

			// SHOW SUBMENU ON HOVER
			$this.hover(function(){
				if ( mediaQueryBreakpoint > 767 ) {
					$(this).addClass( 'm-hover' );
					$(this).find( '> .sub-menu' ).show().addClass( 'animated fadeInLeft' );
				}
			}, function(){
				if ( mediaQueryBreakpoint > 767 ) {
					$(this).removeClass( 'm-hover' );
					$(this).find( '> .sub-menu' ).hide().removeClass( 'animated fadeInLeft' );
				}
			});

			// SHOW SUBMENU ON TOUCH
			$this.find( '> span > a' ).on( 'touchstart', function (e) {
				if ( mediaQueryBreakpoint > 767 ) {
					var link = $(this);
					if ( link.hasClass( 'm-touched' ) ) {
						link.removeClass( 'm-touched' );
						return true;
					} else {
						link.addClass( 'm-touched' );
						link.not(this).removeClass( 'm-touched' );
						$this.find( '> .sub-menu' ).show().addClass( 'animated fadeInLeft' );
						link.unbind( 'clickoutside' );
						link.bind( 'clickoutside', function(){
							link.removeClass( 'm-touched' );
							$this.find( '> .sub-menu' ).hide().removeClass( 'animated fadeInLeft' );
							link.unbind( 'clickoutside' );
						});
						e.preventDefault();
						return false;
					}
				}
			});

			// SUBMENU TOGGLE
			$this.addClass( 'm-has-submenu' ).append( '<button class="submenu-toggle" type="button"><i class="fa"></i></button>' );
			$this.find( '.submenu-toggle' ).click(function(){
				$(this).toggleClass( 'm-active' );
				$this.find( '> .sub-menu' ).slideToggle( 300 );
			});
			$( document ).on( 'screenTransition', function(){
				$this.find( '.submenu-toggle' ).removeClass( 'm-active' );
				$this.find( '> .sub-menu' ).removeAttr( 'style' );
			});

		});
	});

	/* -------------------------------------------------------------------------
		HEADER MENU MOBILE
	------------------------------------------------------------------------- */

	$( '#header .header-menu' ).each(function(){

		var $this = $(this),
		toggle = $this.find( '.header-menu-toggle' ),
		inner = $this.find( '> ul' );

		toggle.click(function(){
			inner.slideToggle( 300 );
			if ( mediaQueryBreakpoint <= 767 ) {
				$( '#header .header-search-inner:visible' ).slideUp( 300 );
			}
		});
		$( document ).on( 'screenTransition', function(){
			inner.removeAttr( 'style' );
		});

	});

	/* -------------------------------------------------------------------------
		HEADER SEARCH
	------------------------------------------------------------------------- */

	$( '#header .header-search' ).each(function(){

		var $this = $(this);

		// SEARCH TOGGLE
		$this.find( '.search-toggle' ).click(function(){
			$this.addClass( 'm-active' );
			$this.find( '.search-input' ).focus();
			$this.bind( 'clickoutside', function(){
				$this.removeClass( 'm-active' );
			});
		});

		// SEARCH TOGGLE MOBILE
		$this.find( '.search-toggle-mobile' ).click(function(){
			$this.find( '.header-search-inner' ).slideToggle( 300 );
			if ( mediaQueryBreakpoint <= 767 ) {
				$( '#header .header-menu > ul:visible' ).slideUp( 300 );
			}
		});
		$( document ).on( 'screenTransition', function(){
			$this.find( '.header-search-inner' ).removeAttr( 'style' );
		});

	});

	/* -------------------------------------------------------------------------
		HEADER CONTACT / RESERVATION / SOCIAL TOGGLE
	------------------------------------------------------------------------- */

	$( '#header .header-contact' ).each(function(){

		var $this = $(this),
		toggle = $this.find( '.header-contact-toggle' ),
		inner = $this.find( '> ul' );

		toggle.click(function(){

			inner.slideToggle( 300 );
			$( '#header' ).toggleClass( 'm-has-active-panel' );
			toggle.toggleClass( 'm-active' );

			// TOGGLE HEADER RESERVATION IF IN CERTAIN BREAKPOINT
			if ( mediaQueryBreakpoint <= 1199 ) {
				$( '#header .header-reservation' ).slideToggle( 300 );
			}

			// TOGGLE HEADER SOCIAL IF IN CERTAIN BREAKPOINT
			if ( mediaQueryBreakpoint <= 767 ) {
				$( '#header .header-social' ).slideToggle( 300 );
			}

		});

		$( document ).on( 'screenTransition', function(){
			toggle.removeClass( 'm-active' );
			inner.removeAttr( 'style' );
			$( '#header' ).removeClass( 'm-has-active-panel' );
			$( '#header .header-reservation, #header .header-social' ).removeAttr( 'style' );
		});

	});


/* -----------------------------------------------------------------------------

	4.) MAIN SLIDER

----------------------------------------------------------------------------- */

	if ( $.fn.owlCarousel ) {
		$( '#main-slider' ).each(function(){

			var slider = $(this),
			slide_list = slider.find( '.slide-list' ),
			slide_count = slide_list.find( '> .slide' ).length,
			slides = slide_list.find( '> .slide' ),
			interval = slider.data( 'interval' ) ? parseInt( slider.data( 'interval' ) ) : false;

			if ( slide_count > 1 ) {

				// CREATE CAROUSEL
				slide_list.owlCarousel({
					autoPlay: interval,
					slideSpeed: 300,
					pagination: false,
					paginationSpeed : 400,
					singleItem: true,
					addClassActive: true,
					autoHeight: false,
					beforeMove: function(){
						// REFRESH INDICATOR
						if ( interval ) {
							slider.find( '.slider-indicator > span' ).stop( 0, 0 );
						}
					},
					afterMove: function(){
						// REFRESH INDICATOR
						if ( interval && mediaQueryBreakpoint > 767 ) {
							slider.find( '.slider-indicator > span' ).css( 'width', 0 );
							if ( ! slider.hasClass( 'm-paused' ) ) {
								slider.find( '.slider-indicator > span' ).stop( 0, 0 ).animate({ width : "100%" }, interval );
							}
						}
					},
					afterAction: function(){
						var active_index = slide_list.find( '.owl-item.active' ).index();
						slider.find( '.slider-nav ul > li.m-active' ).removeClass( 'm-active' );
						slider.find( '.slider-nav ul > li:eq(' + active_index + ')' ).addClass( 'm-active' );
					}
				});

				// CREATE NAVIGATION
				var label,
				nav = '<div class="slider-nav"><div class="container"><ul>';
				for ( var i = 0; i < slide_count; i++ ) {
					if ( slides.eq( i ).data( 'label' ) ) {
						label = slides.eq( i ).data( 'label' );
					}
					else {
						label = i;
					}
					nav += '<li><button>' + label + '</button></li>';
				}
				nav += '</ul></div></div>';
				slide_list.append( nav );
				var slider_nav = slider.find( '.slider-nav' );
				slider_nav.find( 'ul > li:first-child' ).addClass( 'm-active' );

				// NAVIGATION CLICK
				slider_nav.find( 'button' ).each(function(){
					var $this = $(this),
					this_index = $this.parent().index();
					$this.click(function(){
						if ( ! $(this).parent().hasClass( 'm-active' ) ) {
							slide_list.trigger( 'owl.goTo', this_index );
						}
					});
				});

				// AUTO SLIDE INDICATOR
				if ( interval ) {

					// CREATE
					slider.addClass( 'm-has-indicator' );
					slider.append( '<div class="slider-indicator"><span></span></div>' );

					// INITIAL ANIMATION
					slider.find( '.slider-indicator > span' ).animate({
						width : "100%"
					}, interval, 'linear' );

					// PAUSE
					slider_nav.find( '.container' ).append( '<button class="slider-pause-btn" type="button"><i class="fa"></i></button>' );
					var sliderPauseBtn = slider_nav.find( '.slider-pause-btn' );
					var sliderPause = function(){
						sliderPauseBtn.addClass( 'm-active' );
						slider.addClass( 'm-paused' );
						slide_list.trigger( 'owl.stop' );
						slider.find( '.slider-indicator > span' ).stop( 0, 0 );
					};
					var sliderResume = function(){
						sliderPauseBtn.removeClass( 'm-active' );
						slider.removeClass( 'm-paused' );
						slide_list.trigger( 'owl.play', interval );
						slider.find( '.slider-indicator > span' ).stop( 0, 0 ).animate({
							width : "100%"
						}, interval, 'linear' );
					};

					sliderPauseBtn.click(function(){
						if ( $(this).hasClass( 'm-active' ) ) {
							sliderResume();
						}
						else {
							sliderPause();
						}
					});
					$( document ).on( 'modalOpened', function(){
						sliderPause();
					});
					$( document ).on( 'modalClosed', function(){
						sliderResume();
					});

					// STOP ON SMALLER RESOLUTIONS
					$( document ).on( 'screenTransition', function(){
						if ( mediaQueryBreakpoint <= 767 ) {
							sliderPause();
						}
					});
					if ( mediaQueryBreakpoint <= 767 ) {
						sliderPause();
					}

				}

			}

		});
	}


/* -----------------------------------------------------------------------------

	5.) BOTTOM PANEL

----------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------
		NEWSLETTER SUBSCRIBE
	------------------------------------------------------------------------- */

	$( '#bottom-panel #subscribe-form' ).lvMailchimpSubscribeForm();


/* -----------------------------------------------------------------------------

	6.) FOOTER

----------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------
		FOOTER TWITTER
	------------------------------------------------------------------------- */

	if ( $.fn.lvTwitterFeed ) {
		$( '#footer .footer-twitter' ).each(function(){
			$(this).lvTwitterFeed();
		});
	}


/* -----------------------------------------------------------------------------

	6.) STYLE SWITCHER

----------------------------------------------------------------------------- */

	if ( $( 'body' ).hasClass( 'm-has-style-switcher' ) ) {

		// CREATE STYLE SWITCHER
		var style_switcher_html = '<div id="style-switcher"><button class="style-switcher-toggle"><i class="ico fa fa-tint"></i></button>';
		style_switcher_html += '<div class="style-switcher-content"><ul class="skin-list">';
		style_switcher_html += '<li><button class="skin-default m-active" data-skin="default"><span>Default</span></button></li>';
		style_switcher_html += '<li><button class="skin-mavericks" data-skin="mavericks"><span>Mavericks</span></button></li>';
		style_switcher_html += '<li><button class="skin-red-sunset" data-skin="red-sunset"><span>Red Sunset</span></button></li>';
		style_switcher_html += '<li><button class="skin-lime-breeze" data-skin="lime-breeze"><span>Lime Breeze</span></button></li>';
		style_switcher_html += '<li><button class="skin-sunrise" data-skin="sunrise"><span>Sunrise</span></button></li>';
		style_switcher_html += '<li><button class="skin-orient" data-skin="orient"><span>Orient</span></button></li>';
		style_switcher_html += '<li><button class="skin-coral" data-skin="coral"><span>Coral</span></button></li>';
		style_switcher_html += '<li><button class="skin-lavender" data-skin="lavender"><span>Lavender</span></button></li>';
		style_switcher_html += '</ul><ul class="switch-list">';
		style_switcher_html += '<li><button class="switch-animated-header m-active"><i class="ico fa fa-check-square-o"></i> Animated Header</button></li>';
		style_switcher_html += '</ul></div></div>';
		$( 'body' ).append( style_switcher_html );

		// INIT SWITCHER
		$( '#style-switcher' ).each(function(){

			var switcher = $(this),
			toggle = switcher.find( '.style-switcher-toggle' ),
			skins = switcher.find( '.skin-list button' ),
			switches = switcher.find( '.switch-list button' ),
			style_switcher_settings = {};

			//localStorage.clear();

			// SAVE SETTINGS
			var style_switcher_save = function(){
				if ( $( 'html' ).hasClass( 'localstorage' ) ) {
					localStorage.style_switcher_settings = JSON.stringify( style_switcher_settings );
				}
			};

			// LOAD SETTINGS
			if ( $( 'html' ).hasClass( 'localstorage' ) && localStorage.style_switcher_settings ) {

				style_switcher_settings = JSON.parse( localStorage.style_switcher_settings );

				// LOAD SAVED SKIN
				if ( typeof style_switcher_settings.skin !== 'undefined' ) {
					skins.filter( '.m-active' ).removeClass( 'm-active' );
					skins.filter( '[data-skin="' + style_switcher_settings.skin + '"]' ).addClass( 'm-active' );
					if ( $( 'head #skin-temp' ).length < 1 ) {
						$( 'head' ).append( '<link id="skin-temp" rel="stylesheet" type="text/css" href="library/css/skin/' + style_switcher_settings.skin + '.css">' );
					}
				}
				// LOAD ANIMATED HEADER SWITCH
				if ( typeof style_switcher_settings.animated_header !== 'undefined' ) {
					if ( style_switcher_settings.animated_header ) {
						switches.filter( '.switch-animated-header' ).addClass( 'm-active' );
						switches.filter( '.switch-animated-header' ).find( '.ico' ).removeClass( 'fa-square-o' ).addClass( 'fa-check-square-o' );
						$( '#header' ).addClass( 'm-animated' );
					}
					else {
						switches.filter( '.switch-animated-header' ).removeClass( 'm-active' );
						switches.filter( '.switch-animated-header' ).find( '.ico' ).removeClass( 'fa-check-square-o' ).addClass( 'fa-square-o' );
						$( '#header' ).removeClass( 'm-animated' );
					}
				}

			}

			// TOGGLE SWITCHER
			toggle.click(function(){
				switcher.toggleClass( 'm-active' );
			});
			/*toggle.hover(function(){
				toggle.find( 'i' ).addClass( 'fa-spin' );
			}, function(){
				toggle.find( 'i' ).removeClass( 'fa-spin' );
			});*/

			// SET SKIN
			skins.click(function(){
				skins.filter( '.m-active' ).removeClass( 'm-active' );
				$(this).toggleClass( 'm-active' );
				style_switcher_settings.skin = $(this).data( 'skin' );
				style_switcher_save();
				if ( $( 'head #skin-temp' ).length < 1 ) {
					$( 'head' ).append( '<link id="skin-temp" rel="stylesheet" type="text/css" href="library/css/skin/' + $(this).data( 'skin' ) + '.css">' );
				}
				else {
					$( '#skin-temp' ).attr( 'href', 'library/css/skin/' + $(this).data( 'skin' ) + '.css' );
				}

			});

			// SET SWITCHES
			switches.click(function(){

				var self = $(this),
				ico = self.find( '.ico' );
				self.toggleClass( 'm-active' );
				ico.toggleClass( 'fa-check-square-o fa-square-o' );

				// ANIMATED HEADER
				if ( self.hasClass( 'switch-animated-header' ) ) {
					$( '#header' ).toggleClass( 'm-animated' );
					style_switcher_settings.animated_header = self.hasClass( 'm-active' ) ? true : false;
				}

				style_switcher_save();

			});

		});

	}
	// STYLE SWITCHER END


/* END. */
});
})(jQuery);