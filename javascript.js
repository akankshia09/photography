jQuery(window).scroll(function () {
	var sc = jQuery(window).scrollTop()
	if (sc > 150) {
		jQuery("#header").addClass("navbar-scroll")
	} 
	else {
		jQuery("#header").removeClass("navbar-scroll")
	}
});


