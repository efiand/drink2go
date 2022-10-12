import Swiper, { Navigation, Pagination } from "swiper";
import { html } from "./utils.js";

export default (sliderElement = null, options = {}) => {
  if (!sliderElement) {
    return;
  }

  const bodyElement = sliderElement.querySelector(".slider__body");
  const prevElement = sliderElement.querySelector(".slider__control--prev");
  const nextElement = sliderElement.querySelector(".slider__control--next");
  const paginationElement = sliderElement.querySelector(".slider__pagination");

  new Swiper(bodyElement, {
    loop: true,
    navigation: {
      nextEl: nextElement,
      prevEl: prevElement
    },
    modules: [Navigation, Pagination],
    pagination: {
      bulletActiveClass: "slider__pagination-button--active",
      bulletClass: "slider__pagination-button",
      clickable: true,
      el: paginationElement,
      renderBullet(i, className) {
        return html`
          <button class="${className}" type="button">
            <span class="visually-hidden">Слайд № ${i + 1}</span>
          </button>
        `;
      }
    },
    slideClass: "slider__item",
    wrapperClass: "slider__list",
    ...options
  });
};
