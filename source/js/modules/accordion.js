const TOGGLE_BASE_CLASS = `toggle`;
const TOGGLE_DOWN_MODIFIER = `toggle--button-down`;
const TOGGLE_UP_MODIFIER = `toggle--button-up`;
const ACCORDION_CLASS = `accordion`;
const ACCORDION_VISIBLE_MODIFIER = `accordion--visible`;
const ARIA_LABEL_ATTRIBUTE = `aria-label`;
const VALUE_SHOW = `show`;
const VALUE_HIDE = `hide`;
const ARIA_EXPANDED_ATTRIBUTE = `aria-expanded`;
const VALUE_TRUE = `true`;
const VALUE_FALSE = `false`;

const toggles = document.querySelectorAll(`.${TOGGLE_BASE_CLASS}`);

export function showMenu(evt) {
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
