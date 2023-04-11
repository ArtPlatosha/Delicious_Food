$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu').toggleClass('open');
	});
	$('.menu__link').click(function(event){
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});

	$(document).ready(function(){
		$('.home__slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
		});
	});

	$(document).ready(function(){
		$('.our-menu__slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			initialSlide:1,
			infinite: false
		});
	});
});

