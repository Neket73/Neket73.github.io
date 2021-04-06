let sliderClass = document.getElementById("slider");
let sliderItem1 = document.getElementById("item1");
let sliderItem2 = document.getElementById("item2");
let sliderItem3 = document.getElementById("item3");
let sliderItem4 = document.getElementById("item4");
let sliderItem5 = document.getElementById("item5");
let sliderItem6 = document.getElementById("item6");
let i = 0;


if (document.documentElement.clientWidth > 800) {       
    sliderClass.classList.remove('slider');
    sliderItem1.classList.remove('item');
    sliderItem2.classList.remove('item');
    sliderItem3.classList.remove('item');
    sliderItem4.classList.remove('item');
    sliderItem5.classList.remove('item');
    sliderItem6.classList.remove('item');
};

// Burger
const burger = document.querySelector('.burger'),
nav = document.querySelector('.header_list'),
links = document.querySelectorAll('.header_list li');

function navBurger() {
    burger.addEventListener('click', () => {
        nav.classList.toggle('list_active');

        burger.classList.toggle('toggle');
    })
}

navBurger();

// Accordion
const accordions = document.querySelectorAll('.accordion_item');

for(item of accordions) {
    item.addEventListener('click', function() {
        this.classList.toggle('active_one');
    });
}



