$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="src/img/icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="src/img/icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
});