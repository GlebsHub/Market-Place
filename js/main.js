$(function(){

$("#rateYo").rateYo({
    rating: 5,
    starwidth: '40px',
    readOnly: true,
});


$('.product-slider__inner').slick({
dots: true,
arrows: false,
sliderToShow: 4,
sliderToScroll: 4,  
});


$('.menu__btn').on('clock', function(){
    $('.menu__list').slideToggle();
});


$('.header__btn-menu').on('clock', function(){
    $('.header__box').toggleClass('active');
});


    
var mixed = mixitup('.products__inner-box');
    
});