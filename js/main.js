// AOS Animation
AOS.init({disable: 'mobile'});

// Slick slider
$('.slide-wrapper').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  variableWidth: true,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  dots: true,
});
