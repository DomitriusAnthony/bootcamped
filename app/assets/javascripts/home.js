// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
	
$('.head-content')
	.transition('pulse');

	
$(window).on("scroll", function(){
  if($("body").scrollTop() === 500){
//    $(window).off("scroll");
    $('.slack-img')
			.transition('jiggle');
  }
});

	
});