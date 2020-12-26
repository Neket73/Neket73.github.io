$(function() {

  
  // Smooth Scroll

  $("[data-scroll]").on("click", function(event) {

    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;


    $("html, body").animate({
      scrollTop: elementOffset + 50
    });

  });


   // scheduleSlider: https://kenwheeler.github.io/slick/
  let scheduleSlider = $("#scheduleSlider");

  scheduleSlider.slick({

    infinite: true, // бесконечное количество раз будет переключатся
    slidesToShow: 4, // количество слайдев
    slidesToScroll: 1, // перемещение количество слайдов при скролле
    arrows: false, // Убирате кнопки 
    dots: true, // показывает точки

    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]

  });

  // timeSlider: https://kenwheeler.github.io/slick/
  let timeSlider = $("#timeSlider");

  timeSlider.slick({

    responsive: [
      {
        breakpoint: 2048, 
        settings: 
          "unslick"
      },
      {
        breakpoint: 800, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
        }
      }
    ],

  });

  // Snow

  $(document).ready(function() {

    let height = $("body").outerHeight();

		$("body").jSnow({
			vSize: height, // Размер области
			flakes: 40, // Количество снежинок
			flakeColor: ["#000"], // Цвет
			flakeMinSize: 20, // Минимальный размер снежинки
			flakeMaxSize: 30, // Максимальный размер снежинки
			fallingSpeedMin: 1, // Минимальная скорость снежинки
			fallingSpeedMax: 2, // Максимальная скорость снежинки
			flakeCode:["&bull;"] // Вид снежинки
		});

	});


});