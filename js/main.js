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


    
var mixed = mixitup('.products__inner-box');
    
});