$(document).ready(function(){
			//bouton top
			$('body').append('<a href="#" class="top_link" title="Revenir en haut de page"><i class="fa fa-arrow-circle-o-up fa-2x"></i></a>');
			
			$('.top_link').css({
			'position'				:	'fixed',
			'right'					:	'20px',
			'bottom'				:	'20px',
			'display'				:	'none',
			'padding'				:	'15px',
			'background'			:	'#000',
			'color'					:	'#fff',
			'-moz-border-radius'	:	'40px',
			'-webkit-border-radius'	:	'40px',
			'border-radius'			:	'50px',
			'opacity'				:	'1',
			'z-index'				:	'2000'
			
			});
			$(window).scroll(function(){
			posScroll = $(document).scrollTop();
			if(posScroll >=250) 
				$('.top_link').fadeIn(500);
			else
				$('.top_link').fadeOut(500);
			});
			//bouton top end
			console.log('le jquery est la');
			
});