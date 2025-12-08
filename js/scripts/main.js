AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
