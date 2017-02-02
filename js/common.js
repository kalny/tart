$(function() {

	var windowHeight = $(window).height();

	/*Full screen Header*/
	$('.main-header').css('min-height', windowHeight);

	/*First section margin*/
	$('.first-section').css('margin-top', windowHeight);

	/*Equal height*/
	$(".profit-card").equalHeights();
	$(".process-card p").equalHeights();
	$(".nav-card").equalHeights();

	/*Scroll*/
	$('.scroll-menu').scrollToAnchors({
		offset : 70
	});

	/*Up button*/
	if ($(window).width() > 830) {
		$('.button-up').buttonUp({
			top : windowHeight
		});
	}
	

	/*Sessions scroller*/
	/*
	$('#sectwrapper').sectionScroll({
		'headline' : 0
	});
	*/

});
