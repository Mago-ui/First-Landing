$(document).ready(function () {
  /* SLICK */
  $(".items").slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<div class="leftArrow arrowL" ><img src="img/arrow-left.svg" alt=""></div>',
    nextArrow:
      '<div class="rightArrow arrowR"><img src="img/arrow-right.svg" alt="’"></div>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    touchMove: false,
  });

  $(".sliderSlick").slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<div class="leftArrow  " ><img src="img/arrow-left.svg" alt=""></div>',
    nextArrow:
      '<div class="rightArrow "><img src="img/arrow-right.svg" alt="’"></div>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    touchMove: false,
  });
});

/*menssaje*/
