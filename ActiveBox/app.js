$(function() {
  
  // Fixed Header
  let header = $("#header");
  let intro = $("#intro");

  let introH = intro.innerHeight(); // Высота интро
  let scrollPos = $(window).scrollTop(); // При скролле от верха будет показыватся значение

  let nav = $("#nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, introH);


  $(window).on("scroll resize", function() { // Работаем с окном и следим за скроллом
    
    introH = intro.innerHeight(); // Высота интро

    scrollPos = $(this).scrollTop(); // this - обращаемся к окну

    checkScroll(scrollPos, introH)

    // console.log(scrollPos);

  });

  function checkScroll(scrollPos, introH) {

    if(scrollPos > introH) {
      header.addClass("fixed"); // Если скролл больше высоты интро будет добавлятся класс fixed
    } else {
      header.removeClass("fixed"); // Иначе класс будет удалятся 
    }

  }



  // Smooth scroll
  $("[data-scroll]").on("click", function(event) { // Работам с элементом у которго есть атрибут data-scroll и проверяем на клик 

    event.preventDefault(); // отменяет стандартное поведение ссылки 

    let elementId = $(this).data('scroll'); // присваеваем переменной название ID элемента
    let elementOffset = $(elementId).offset().top; // присваеваем переменной отступы от верха элемента

    nav.removeClass("show");

    // console.log(elementOffset);

    $("html, body").animate({ // аннимируем 

      scrollTop: elementOffset - 70

    }, 700);

  });


  // Nav Toggle

  navToggle.on("click", function(event) {

    event.preventDefault(); // отменяет стандартное поведение ссылки 

    nav.toggleClass("show"); // при клике будет давать класс show или убирать 


  })


  // Reviews: https://kenwheeler.github.io/slick/
  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true, // бесконечное количество раз будет переключатся
    slidesToShow: 1, // количество слайдев
    slidesToScroll: 1, // перемещение количество слайдов при скролле
    fade: true, // затемнение отзывов 
    arrows: false, // Убирате кнопки 
    dots: true, // показывает точки

    autoplay: true, // включает автоматичскую прокрутку
    autoplaySpeed: 2000 // скорость прокрутки
  });


});