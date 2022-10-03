$(document).ready(function($) {
	
    
    
    // Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	}); 
    
    $('.popup-fade').hide(function(e) {
        $('.popup-fade').hide();            
    });

    
    
    $(document).one ("click", function() {
        
        setTimeout($('.popup-fade').show(), 6000);
        
    });
	
 
    
    
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {z
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.popup-fade').dblclick(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});


$(document).ready(function() {

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});