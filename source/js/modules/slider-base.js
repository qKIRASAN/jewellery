import Swiper, {Navigation, Pagination, Keyboard} from 'swiper';

const WRAPPER_CLASS = `products-container--base`;
const PRODUCTS_CONTAINER_CLASS = `products-container__inner`;
const PRODUCTS_CLASS = `products`;
const PAGINATION_CLASS = `pagination`;
const TOGGLES_CLASS = `toggles`;
const TOGGLE_ATTRIBUTE = `data-toggle`;
const TOGGLE_PREV = `previous`;
const TOGGLE_NEXT = `next`;

const SLIDER_CLASS = `slider`;
const SLIDER_MODIFIER = `slider--`;
const SLIDES_CLASS = `slider__items`;
const SLIDES_MODIFIER = `slider__items--base`;
const SLIDE_BASE_CLASS = `slider__item`;
const SLIDE_ACTIVE_CLASS = `slider__item--active`;
const SLIDE_PREV_CLASS = `slider__item--prev`;
const SLIDE_NEXT_CLASS = `slider__item--next`;
const SLIDER_PAGINATION_CLASS = `slider__pagination`;
const SLIDER_PAGINATION_MODIFIER = `slider__pagination--`;
const SLIDER_PAGINATION_CLICKABLE = `slider__pagination--clickable`;
const SLIDER_BULLET_CLASS = `slider__bullet`;
const SLIDER_BULLET_ACTIVE_CLASS = `slider__bullet--active`;
const SLIDER_TOGGLES_CLASS = `slider__toggles`;
const SLIDER_TOGGLE_BASE_CLASS = `slider__toggle`;
const SLIDER_TOGGLE_PREV_CLASS = `slider__toggle--prev`;
const SLIDER_TOGGLE_NEXT_CLASS = `slider__toggle--next`;
const SLIDER_TOGGLE_DISABLED_CLASS = `slider__toggle--disabled`;
const SLIDER_FRACTION_CURRENT_CLASS = `slider__fraction-current`;
const SLIDER_FRACTION_TOTAL_CLASS = `slider__fraction-total`;

document.addEventListener(`DOMContentLoaded`, () => {
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
  if (!wrapper) {
    return;
  }

  const products = wrapper.querySelector(`.${PRODUCTS_CONTAINER_CLASS}`);
  if (!products) {
    return;
  }

  const slidesContainer = wrapper.querySelector(`.${PRODUCTS_CLASS}`);
  if (!slidesContainer) {
    return;
  }
  const slides = Array.from(slidesContainer.children);

  const pagination = wrapper.querySelector(`.${PAGINATION_CLASS}`);
  if (!pagination) {
    return;
  }

  const togglesContainer = wrapper.querySelector(`.${TOGGLES_CLASS}`);
  if (!togglesContainer) {
    return;
  }
  const toggles = Array.from(togglesContainer.children);

  (function init() {
    if (products) {
      products.classList.add(SLIDER_CLASS);
    }

    if (slidesContainer) {
      slidesContainer.classList.add(SLIDES_CLASS);
      slidesContainer.classList.add(SLIDES_MODIFIER);
    }

    if (slides) {
      slides.forEach((product) => product.classList.add(SLIDE_BASE_CLASS));
    }

    if (pagination) {
      pagination.classList.add(SLIDER_PAGINATION_CLASS);
    }

    if (togglesContainer) {
      toggles.forEach((toggle) => {
        toggle.classList.add(SLIDER_TOGGLE_BASE_CLASS);

        if (toggle.dataset.toggle === TOGGLE_PREV) {
          toggle.classList.add(SLIDER_TOGGLE_PREV_CLASS);
        }

        if (toggle.dataset.toggle === TOGGLE_NEXT) {
          toggle.classList.add(SLIDER_TOGGLE_NEXT_CLASS);
        }

        toggle.removeAttribute(TOGGLE_ATTRIBUTE);
      });

      togglesContainer.classList.add(SLIDER_TOGGLES_CLASS);
    }
  })();

  const slider = new Swiper(`.${SLIDER_CLASS}`, {
    modules: [Navigation, Pagination, Keyboard],
    init: false,
    containerModifierClass: SLIDER_MODIFIER,
    wrapperClass: SLIDES_CLASS,
    slideClass: SLIDE_BASE_CLASS,
    slideActiveClass: SLIDE_ACTIVE_CLASS,
    slidePrevClass: SLIDE_PREV_CLASS,
    slideNextClass: SLIDE_NEXT_CLASS,
    navigation: {
      prevEl: `.${SLIDER_TOGGLE_PREV_CLASS}`,
      nextEl: `.${SLIDER_TOGGLE_NEXT_CLASS}`,
      disabledClass: SLIDER_TOGGLE_DISABLED_CLASS
    },
    pagination: {
      el: `.${SLIDER_PAGINATION_CLASS}`,
      clickable: true,
      clickableClass: SLIDER_PAGINATION_CLICKABLE,
      modifierClass: SLIDER_PAGINATION_MODIFIER
    },
    keyboard: {
      enabled: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: `fraction`,
          currentClass: SLIDER_FRACTION_CURRENT_CLASS,
          totalClass: SLIDER_FRACTION_TOTAL_CLASS,
          renderFraction(currentClass, totalClass) {
            return `<li><span class="${currentClass}"></span>&ensp;of&ensp;<span class="${totalClass}"></span></li>`;
          }
        }
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: `bullets`,
          bulletElement: `li`,
          bulletClass: SLIDER_BULLET_CLASS,
          bulletActiveClass: SLIDER_BULLET_ACTIVE_CLASS,
          renderBullet(index, className) {
            return `<li class="${className}">${++index}</li>`;
          }
        }
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: `bullets`,
          bulletElement: `li`,
          bulletClass: SLIDER_BULLET_CLASS,
          bulletActiveClass: SLIDER_BULLET_ACTIVE_CLASS,
          renderBullet(index, className) {
            return `<li class="${className}">${++index}</li>`;
          }
        }
      }
    }
  });

  slider.init();
});