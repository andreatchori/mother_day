
$(function() {
    "use strict";
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. timeout function
        // 2.1. fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1400).css({
                display: "none"
            }).fadeIn(2400);
        }, 0);
		setTimeout(function() {
            $(".fadeIn-element-half").delay(1400).css({
                display: "none"
            }).fadeIn(1200);
        }, 0);
        // 2.2. hero
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. flexSlider
    $(".flexslider-quotes").flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: false,
        slideshowSpeed: 3800,
        animationSpeed: 1000
    });
	
	// 4. YouTube player
    $("#bgndVideo").YTPlayer();
		
});