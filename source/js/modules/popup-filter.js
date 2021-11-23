import {createFocusArea} from './focus-area.js';
import {lockScroll, unlockScroll} from './scroll-lock.js';
import {isEscEvent} from './utils.js';

const CONTAINER = `filter`;
const BUTTON_OPEN = `button--filter`;
const BUTTON_OPEN_DISABLED = `button--disabled`;
const BUTTON_CLOSE = `exit`;
const FORM_FILTER = `form-filter`;
const POPUP = `popup`;
const POPUP_BUTTON_OPEN = `popup--open`;
const POPUP_BUTTON_CLOSE = `form-filter__exit`;
const POPUP_FORM = `popup__form-filter`;
const FIELDSET_PRODUCT_TOGGLE = `toggle`;
const SCREEN_WIDTH = 1024;
const DISABLED = `disabled`;

document.addEventListener(`DOMContentLoaded`, () => {
  const filter = document.querySelector(`.${CONTAINER}`);
  const buttonOpen = filter.querySelector(`.${BUTTON_OPEN}`);
  const buttonClose = filter.querySelector(`.${BUTTON_CLOSE}`);
  const form = filter.querySelector(`.${FORM_FILTER}`);
  const filterFocusArea = createFocusArea(filter);

  function addHandler() {
    filter.addEventListener(`click`, showPopup);
  }

  function showPopup() {
    const toggleProduct = form.firstElementChild.querySelector(`.${FIELDSET_PRODUCT_TOGGLE}`);

    filter.classList.add(POPUP_BUTTON_OPEN);
    buttonOpen.classList.add(BUTTON_OPEN_DISABLED);
    filterFocusArea.lock();
    lockScroll();
    toggleProduct.focus();

    filter.addEventListener(`keydown`, hidePopup);
    filter.addEventListener(`click`, hidePopup);
    buttonOpen.removeEventListener(`click`, addHandler);
  }

  function hidePopup(evt) {
    const isButtonClose = evt.target.closest(`.${POPUP_BUTTON_CLOSE}`);
    const isForm = evt.target.closest(`.${POPUP_FORM}`);
    const isNotDesktopWidth = window.innerWidth < SCREEN_WIDTH;

    if (isEscEvent(evt) || evt.type === `click` && isNotDesktopWidth) {
      if (evt.type === `click` && isForm && !isButtonClose) {
        return;
      }

      filter.classList.remove(POPUP_BUTTON_OPEN);
      buttonOpen.classList.remove(BUTTON_OPEN_DISABLED);
      filterFocusArea.unlock();
      unlockScroll();

      buttonOpen.focus();
      buttonOpen.addEventListener(`click`, addHandler);
      filter.removeEventListener(`keydown`, hidePopup);
      filter.removeEventListener(`click`, hidePopup);
    }
  }

  (function init() {
    if (filter) {
      filter.classList.add(POPUP);
    }

    if (buttonOpen) {
      buttonOpen.classList.remove(BUTTON_OPEN_DISABLED);
      buttonOpen.removeAttribute(DISABLED);
      buttonOpen.addEventListener(`click`, addHandler, {once: true});
    }

    if (buttonClose) {
      buttonClose.classList.add(POPUP_BUTTON_CLOSE);
    }

    if (form) {
      form.classList.add(POPUP_FORM);
    }
  })();
});
