// AOS Animation
AOS.init({disable: 'mobile'});

// Slick slider
$('.clients').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  variableWidth: true,
  arrows: false
});

// Slick slider
$('.slide-wrapper').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  variableWidth: true,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  dots: true,
});
