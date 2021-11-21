import {showMenu} from './accordion.js';

const CONTAINER = `questions`;
const WRAPPER_CLASS = `questions__item`;
const LABEL_CLASS = `questions__issue`;
const CONTENT_CLASS = `questions__response`;
const TOGGLE_BASE_CLASS = `toggle`;
const TOGGLE_DOWN_MODIFIER = `toggle--button-down`;
const ACCORDION_CLASS = `accordion`;
const ACCORDION_LABEL_CLASS = `accordion__label`;
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
      toggles.forEach((toggle) => toggle.classList.add(TOGGLE_DOWN_MODIFIER));
    }

    accordionContainer.addEventListener(`click`, showMenu);
  }
})();
