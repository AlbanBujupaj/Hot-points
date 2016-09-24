
	 		jQuery(document).ready(function($){
	 			//open interest point description
	 			$(document).on('click', '.point > a', function(){
	 				var selectedPoint = $(this).parent('li');
	 				if( selectedPoint.hasClass('is-open') ) {
	 					selectedPoint.removeClass('is-open').addClass('visited');
	 				} else {
	 					selectedPoint.addClass('is-open').siblings('.single-point.is-open').removeClass('is-open').addClass('visited');
	 				}
	 			});
	 			//close interest point description
	 			$(document).on('click','.close-info', function(event){
	 				event.preventDefault();
	 				$(this).parents('.single-point').eq(0).removeClass('is-open').addClass('visited');
	 			});

	 		});