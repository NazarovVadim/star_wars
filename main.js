$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navClass: ['slider__arrow--left', 'slider__arrow--right'],
    responsive:{
        0:{
            items:1
        },
        550:{
            items:2
        },
        850:{
            items:3
        },
        1200:{
            items:4
        }
        
    }
})
});