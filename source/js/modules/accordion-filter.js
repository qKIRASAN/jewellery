import {showMenu} from './accordion.js';

const CONTAINER = `filter`;
const WRAPPER_CLASS = `form-filter__group`;
const LABEL_CLASS = `form-filter__subtitle`;
const CONTENT_CLASS = `form-filter__detail`;
const TOGGLE_BASE_CLASS = `toggle`;
const TOGGLE_NARROW_MODIFIER = `toggle--narrow`;
const TOGGLE_DOWN_MODIFIER = `toggle--button-down`;
const ACCORDION_CLASS = `accordion`;
const ACCORDION_LABEL_CLASS = `accordion__label-filter`;
const ACCORDION_CONTENT_CLASS = `accordion__content`;

const accordionContainer = document.querySelector(`.${CONTAINER}`);

(function init() {
  if (accordionContainer) {
    const accordions = accordionContainer.querySelectorAll(`.${WRAPPER_CLASS}`);
    const accordionLabels = accordionContainer.querySelectorAll(`.${LABEL_CLASS}`);
    const accordionContents = accordionContainer.querySelectorAll(`.${CONTENT_CLASS}`);
    const toggles = accordionContainer.querySelectorAll(`.${TOGGLE_BASE_CLASS}`);

    if (accordions) {
      accordions.forEach((accordion) => accordion.classList.add(ACCORDION_CLASS));
    }

    if (accordionLabels) {
      accordionLabels.forEach((label) => label.classList.add(ACCORDION_LABEL_CLASS));
    }

    if (accordionContents) {
      accordionContents.forEach((content) => content.classList.add(ACCORDION_CONTENT_CLASS));
    }

    if (toggles) {
      toggles.forEach((toggle) => toggle.classList.add(TOGGLE_NARROW_MODIFIER));
      toggles.forEach((toggle) => toggle.classList.add(TOGGLE_DOWN_MODIFIER));
    }

    accordionContainer.addEventListener(`click`, showMenu);
  }
})();
