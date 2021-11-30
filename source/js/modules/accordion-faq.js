const CONTAINER = `questions`;
const WRAPPER_CLASS = `questions__item`;
const LABEL_CLASS = `questions__issue`;
const CONTENT_CLASS = `questions__response`;
const TOGGLE_BASE_CLASS = `toggle`;
const TOGGLE_WIDE_MODIFIER = `toggle--wide`;
const TOGGLE_UP_MODIFIER = `toggle--button-up`;
const TOGGLE_DOWN_MODIFIER = `toggle--button-down`;
const ACCORDION_CLASS = `accordion`;
const ACCORDION_LABEL_CLASS = `accordion__label-faq`;
const ACCORDION_CONTENT_CLASS = `accordion__content`;
const ACCORDION_VISIBLE_MODIFIER = `accordion--visible`;
const ARIA_LABEL_ATTRIBUTE = `aria-label`;
const VALUE_SHOW = `show`;
const VALUE_HIDE = `hide`;
const ARIA_EXPANDED_ATTRIBUTE = `aria-expanded`;
const VALUE_TRUE = `true`;
const VALUE_FALSE = `false`;

const accordionContainer = document.querySelector(`.${CONTAINER}`);
const toggles = document.querySelectorAll(`.${TOGGLE_BASE_CLASS}`);

(function init() {
  if (accordionContainer) {
    const accordions = accordionContainer.querySelectorAll(`.${WRAPPER_CLASS}`);
    const accordionLabels = accordionContainer.querySelectorAll(`.${LABEL_CLASS}`);
    const accordionContents = accordionContainer.querySelectorAll(`.${CONTENT_CLASS}`);

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
      toggles.forEach((toggle) => toggle.classList.add(TOGGLE_WIDE_MODIFIER));
      toggles.forEach((toggle) => toggle.classList.add(TOGGLE_DOWN_MODIFIER));
    }

    accordionContainer.addEventListener(`click`, showMenu);
  }
})();

function showMenu(evt) {
  const toggle = evt.target.closest(`.${TOGGLE_BASE_CLASS}`);
  if (!toggle) {
    return;
  }

  const ariaLabelValue = toggle.getAttribute(ARIA_LABEL_ATTRIBUTE);
  const initialValue = ariaLabelValue.replace(VALUE_HIDE, VALUE_SHOW);
  const replacement = ariaLabelValue.replace(VALUE_SHOW, VALUE_HIDE);

  const item = toggle.closest(`.${ACCORDION_CLASS}`);
  const isVisible = item.classList.contains(ACCORDION_VISIBLE_MODIFIER);

  hideMenu();

  if (isVisible) {
    item.classList.remove(ACCORDION_VISIBLE_MODIFIER);
    toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, initialValue);
    toggle.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_FALSE);
  } else {
    item.classList.add(ACCORDION_VISIBLE_MODIFIER);
    toggle.classList.add(TOGGLE_UP_MODIFIER);
    toggle.classList.remove(TOGGLE_DOWN_MODIFIER);
    toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, replacement);
    toggle.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_TRUE);
  }
}

function hideMenu() {
  const accordionsVisible = document.querySelectorAll(`.${ACCORDION_VISIBLE_MODIFIER}`);

  if (accordionsVisible) {
    accordionsVisible.forEach((accordion) => {
      accordion.classList.remove(ACCORDION_VISIBLE_MODIFIER);
    });
  }

  if (toggles) {
    toggles.forEach((toggle) => {
      const ariaLabelValue = toggle.getAttribute(ARIA_LABEL_ATTRIBUTE);
      const replacement = ariaLabelValue.replace(VALUE_HIDE, VALUE_SHOW);

      toggle.classList.remove(TOGGLE_UP_MODIFIER);
      toggle.classList.add(TOGGLE_DOWN_MODIFIER);
      toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, replacement);
      toggle.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_FALSE);
    });
  }
}
