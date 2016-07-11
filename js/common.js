
/*Подключение слайдера */
jQuery(document).ready(function($) {
	$('.slider').unslider({
		autoplay:true,
		arrows:false
		});
});

// метод выравнивает высоту карточек
// function setEqualHeight(columns) {
// 	var tallestcolumn = 0;
// 	columns.each( function() {
// 		currentHeight = $(this).height();
// 		if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } );
// 		columns.height(tallestcolumn);
// 	}
// 	$(document).ready(function() {
// 		setEqualHeight($(".product__item"));
// 		});
// 	);
// });
