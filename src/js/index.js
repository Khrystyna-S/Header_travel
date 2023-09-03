import  mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js';

mobileNav();
loader();


// Swiper

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    parallax: true,
    speed: 1000,

    keyboard: {
        enabled: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.slider-controls_count',
      type: 'fraction'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });