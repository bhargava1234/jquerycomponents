$(document).ready(function(){
	
	$(".acco_top").click(function(){
		if ($('.acco_inner').is(':visible')) {
			$(".acco_inner").slideUp(300);
			$(".plusminus").text('+');
		}
        if( $(this).next(".acco_inner").is(':visible')){
            $(this).next(".acco_inner").slideUp(300);
            $(this).children(".plusminus").text('+');
        }else {
            $(this).next(".acco_inner").slideDown(300); 
            $(this).children(".plusminus").text('-');
        }
	});
	
		var scrollTop = '';
	var newHeight = '100';
	 
	$(window).bind('scroll', function() {
	  scrollTop = $( window ).scrollTop();
	  newHeight = scrollTop + 100;
	});
			
	
	  
	  if(jQuery(window).width() < 767) {
		$(this).after( $( ".jquery_pop" ) );
		$('.jquery_pop').show().addClass('mobile').css('top', 0);
		$('html, body').animate({
		  scrollTop: $('.jquery_pop').offset().top
		}, 500);   
	  } else {
		$('.jquery_pop').removeClass('mobile').css('top', newHeight).toggle();
	  };
	
			
	$('html').click(function() {
	  $('.jquery_pop').hide();
	});
	 
	$('.btn-close').click(function(e){
	  $('.jquery_pop').hide();
	});
	
});