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

  const accordionItems = document.querySelectorAll(".faq__accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".faq__accordion-button");

    button.addEventListener("click", () => {
      accordionItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
          const btn = i.querySelector(".faq__accordion-button");
          btn.classList.remove("active");
        }
      });

      button.classList.toggle("active");
      item.classList.toggle("active");
    });
  });
});
