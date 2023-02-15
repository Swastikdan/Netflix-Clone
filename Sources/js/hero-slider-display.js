import './hero-carousel.js'

const sliderDisplay = `
<div style="--swiper-navigation-color: #E50914;" class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide">

    <div id="hero-slider-1"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-2"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-3"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-4"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-5"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>
  <div class="swiper-slide">

    <div id="hero-slider-6"></div>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </div>

</div>
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
<div class="swiper-pagination"></div>
</div>

`
document.getElementById("sliderDisplay").innerHTML = sliderDisplay;