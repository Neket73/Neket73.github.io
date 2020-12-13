$(function() {

  let intro = $("#introSlider");

  intro.slick({

    infinite: true, // бесконечное количество раз будет переключатся
    slidesToShow: 1, // количество слайдев
    slidesToScroll: 1, // перемещение количество слайдов при скролле
    arrows: false, // Убирате кнопки 
    // dots: true, // показывает точки
    dots: false, // показывает точки
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000

  });

});