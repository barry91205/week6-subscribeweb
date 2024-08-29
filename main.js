import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// const swiper = new Swiper(".project-swiper", {
//     slidesPerView: 1,
//     centeredSlides: true,
//     spaceBetween: 0,
//   });
  
  const swiper = new Swiper(".mySwiper", {
    // slidesPerView: 2,
    // slidesPerGroup: 2,
    // spaceBetween: 48,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    pagination: {
      el: ".swiper-pagination-custom",
      type: "fraction"
    },
    breakpoints: {
      1296: {
        slidesPerView: 2, 
        slidesPerGroup: 2, 
        spaceBetween: 48 
      },
      768: {
        slidesPerView: 1, 
        slidesPerGroup: 1, 
        spaceBetween: 24 
      },
    }
  });

  