8
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 5,
    spaceBetween: 70,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
  const swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 5,
    spaceBetween: 70,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });