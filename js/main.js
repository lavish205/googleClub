$('#logo').show();
$('nav').hide();
$(window).load(function(){
	$('#logo').hide();
	$('nav').show();
	$('#main_img').show();
});
$(document).ready(function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	$('#main_img').css('height',height-40);	
	$('#logo').css('height',height);
	$('#main_img').hide();
	$('nav').hide();


	// $(window).scroll(function(){
	// 	var a = $(window).scrollTop();
	// 	if(a > nav-10)
	// 	{
	// 		$('nav').css('position','fixed !important');

	// 	}
	// });
});