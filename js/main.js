$('#logo').show();
$('nav').hide();
$(window).load(function(){
	$('#logo').addClass(' animated zoomOutUp');
	$('nav').addClass(' animated fadeIn');
	$('#main_img').show();
	$('.container').delay(1400).addClass(' animated fadeIn');
});
$(document).ready(function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	$('#main_img').css('height',height-40);	
	$('#logo').css('height',height);
	$('#main_img').hide();



	// $(window).scroll(function(){
	// 	var a = $(window).scrollTop();
	// 	if(a > nav-10)
	// 	{
	// 		$('nav').css('position','fixed !important');

	// 	}
	// });
});