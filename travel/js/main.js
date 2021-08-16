// VARS
const swiper1 = document.querySelector('.slider-container'),
	swiper2 = document.querySelector('.swiper-container'),
	burger = document.querySelector('.burger'),
	close = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu'),
	playButtonsFirst = document.querySelectorAll('.main-slider__play');

// SLIDER1
let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true, // Слайды по центру
	slidesPerView: 'auto', // Позаоляет самому задоваать размеры
	loop: true, // Цыкл
	spaceBetween: 105,
});

// SLIDER2
let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true, // Слайды по центру
	slidesPerView: 1, // Позаоляет самому задоваать размеры
	loop: true, // Цыкл
	spaceBetween: 10,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left',
	},
});

swiperSlider2.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonsFirst.forEach((el) => {
		el.style.display = 'block';
	});
});

// MENU
burger.addEventListener('click', function () {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', function () {
	menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	});
});

// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);