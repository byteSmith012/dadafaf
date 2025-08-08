const mobileNav = document.querySelector('.header__mobile-nav');
const burgerButton = document.querySelector('.header__burger-button');
const closeButton = document.querySelector('.header__close');
const body = document.body;

function toggleMenu() {
    const isActive = mobileNav.classList.toggle('active');
    burgerButton.classList.toggle('active');
}

if (burgerButton && mobileNav) {
    burgerButton.addEventListener('click', toggleMenu);
}

if (closeButton) {
    closeButton.addEventListener('click', toggleMenu);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        toggleMenu();
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".testimonial-button-prev");
  const nextBtn = document.querySelector(".testimonial-button-next");

  function updateButtons(swiperInstance) {
    if (swiperInstance.isBeginning) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    if (swiperInstance.isEnd) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  const swiper = new Swiper(".testimonial__swiper", {
    slidesPerView: 1,

    spaceBetween: 35,

    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },

    on: {
      init: updateButtons,
      slideChange: updateButtons,
    },

    breakpoints: {
      720: {
        slidesPerView: 2.2,
      },
    },
  });
});

