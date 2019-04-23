$(function() {
		
		$('.menu').hover(
			function(){$(this).find('.hide-menu').slideDown(100);},
			function(){$(this).find('.hide-menu').slideUp(100);}
			
			
		);
		
		
		
		$('.logo').click(function() {
    $('.logo').fadeOut();
  });
		
		$('.bar-icon').click(function(){
				$('.bar-menu').slideToggle();
		});
		$('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
  });
  
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
});
