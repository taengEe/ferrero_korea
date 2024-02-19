const mainSwiper = new Swiper('.main-visual-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect : 'fade',
  autoplay:{
    delay: 2500, // 시간 설정
        disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const historySwiper = new Swiper('.history-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
}
);

const productSwiper = new Swiper('.product-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  // slidesPerGroup: 1,
  

  

  // Navigation arrows
  navigation: {
    nextEl: '.pr-prev',
    prevEl: '.pr-next',
  },

}
);