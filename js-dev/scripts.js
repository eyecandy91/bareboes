$(document).ready(function() {

	// Check for click events on the navbar burger icon
	$(".navbar-burger").click(function() {
  
		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
  
	});

	$("#service").click(function() {
		$('html, body').animate({
			scrollTop: $("#services").offset().top
		}, 500);
	});
	
	
});

$(window).scroll(function(){
	$("#main").css("opacity", 1 - $(window).scrollTop() / 400);
  });
