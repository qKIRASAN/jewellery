const CONTAINER = `filter`;
const WRAPPER_CLASS = `form-filter__group`;
const LABEL_CLASS = `form-filter__subtitle`;
const CONTENT_CLASS = `form-filter__detail`;
const TOGGLE_BASE_CLASS = `toggle`;
const TOGGLE_NARROW_MODIFIER = `toggle--narrow`;
const TOGGLE_UP_MODIFIER = `toggle--button-up`;
const TOGGLE_DOWN_MODIFIER = `toggle--button-down`;
const ACCORDION_CLASS = `accordion`;
const ACCORDION_LABEL_CLASS = `accordion__label-filter`;
const ACCORDION_CONTENT_CLASS = `accordion__content`;
const ACCORDION_VISIBLE_MODIFIER = `accordion--visible`;
const ARIA_LABEL_ATTRIBUTE = `aria-label`;
const VALUE_SHOW = `show`;
const VALUE_HIDE = `hide`;
const ARIA_EXPANDED_ATTRIBUTE = `aria-expanded`;
const VALUE_TRUE = `true`;
const VALUE_FALSE = `false`;

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

    accordionContainer.addEventListener(`click`, toggleMenu);
  }
})();

function toggleMenu(evt) {
  const toggle = evt.target.closest(`.${TOGGLE_BASE_CLASS}`);
  if (!toggle) {
    return;
  }

  const accordion = toggle.closest(`.${ACCORDION_CLASS}`);
  const isVisible = accordion.classList.contains(ACCORDION_VISIBLE_MODIFIER);
  const ariaLabelValue = toggle.getAttribute(ARIA_LABEL_ATTRIBUTE);
  const initialValue = ariaLabelValue.replace(VALUE_HIDE, VALUE_SHOW);
  const replacement = ariaLabelValue.replace(VALUE_SHOW, VALUE_HIDE);

  accordion.classList.toggle(ACCORDION_VISIBLE_MODIFIER);
  toggle.classList.toggle(TOGGLE_UP_MODIFIER);
  toggle.classList.toggle(TOGGLE_DOWN_MODIFIER);

  if (isVisible) {
    toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, initialValue);
    toggle.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_FALSE);
  } else {
    toggle.setAttribute(ARIA_LABEL_ATTRIBUTE, replacement);
    toggle.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_TRUE);
  }
}
