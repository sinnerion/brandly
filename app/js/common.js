$(document).ready(function(){
  // Carousel
  $('.slider').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    responsive: {
      0: {
        dots: false
      },
      769: {
        dots: true
      }
    }
  });
});