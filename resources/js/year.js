window.addEventListener('load', () => {
    document.querySelector('footer #year').innerText = `${new Date(Date.now()).getFullYear()}`;
})

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  });