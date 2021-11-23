import {createFocusArea} from './focus-area.js';
import {lockScroll, unlockScroll} from './scroll-lock.js';
import {isEscEvent} from './utils.js';

const HEADER_CLASS = `header`;
const LOGO_CLASS = `lead__logo`;
const BURGER_CLASS = `lead__burger`;
const BURGER_NOJS_CLASS = `burger--no-js`;
const CART_CLASS = `auth__cart`;
const ITEMS_CLASS = `form-search, nav`;
const MENU_CLASS = `menu`;
const MENU_VISIBLE_CLASS = `menu--visible`;
const MENU_BUTTON_CLASS = `menu__burger`;
const MENU_CART_CLASS = `menu__cart`;
const MENU_LOGO_CLASS = `menu__logo`;
const MENU_ITEM_CLASS = `menu__item`;
const ARIA_LABEL_ATTRIBUTE = `aria-label`;
const VALUE_SHOW = `expand menu`;
const VALUE_HIDE = `collapse menu`;
const ARIA_EXPANDED_ATTRIBUTE = `aria-expanded`;
const VALUE_TRUE = `true`;
const VALUE_FALSE = `false`;

document.addEventListener(`DOMContentLoaded`, () => {
  const header = document.querySelector(`.${HEADER_CLASS}`);
  if (!header) {
    return;
  }

  const logo = header.querySelector(`.${LOGO_CLASS}`);
  if (!logo) {
    return;
  }

  const burger = header.querySelector(`.${BURGER_CLASS}`);
  if (!burger) {
    return;
  }

  const cart = header.querySelector(`.${CART_CLASS}`);
  if (!cart) {
    return;
  }

  const menuItems = header.querySelectorAll(`.${ITEMS_CLASS}`);
  if (!menuItems) {
    return;
  }

  const headerFocusArea = createFocusArea(header);

  function addHandlers() {
    header.addEventListener(`click`, toggleMenu);
    header.addEventListener(`keydown`, hideMenu);
    burger.removeEventListener(`click`, addHandlers);
  }

  function toggleMenu(evt) {
    const toggle = evt.target.closest(`.${BURGER_CLASS}`);

    if (toggle) {
      header.classList.toggle(MENU_VISIBLE_CLASS);
      burger.classList.toggle(MENU_BUTTON_CLASS);
      logo.classList.toggle(MENU_LOGO_CLASS);
      cart.classList.toggle(MENU_CART_CLASS);
      menuItems.forEach((item) => item.classList.toggle(MENU_ITEM_CLASS));

      if (!burger.classList.contains(MENU_BUTTON_CLASS)) {
        lockScroll();
        headerFocusArea.lock();

        burger.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_HIDE);
        burger.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_TRUE);
      } else {
        unlockScroll();
        headerFocusArea.unlock();

        burger.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_SHOW);
        burger.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_FALSE);

        burger.addEventListener(`click`, addHandlers);
        header.removeEventListener(`click`, toggleMenu);
        header.removeEventListener(`keydown`, hideMenu);
      }
    }
  }

  function hideMenu(evt) {
    if (isEscEvent(evt) || evt.type === `click`) {
      header.classList.remove(MENU_VISIBLE_CLASS);
      burger.classList.add(MENU_BUTTON_CLASS);
      logo.classList.add(MENU_LOGO_CLASS);
      cart.classList.add(MENU_CART_CLASS);
      menuItems.forEach((item) => item.classList.add(MENU_ITEM_CLASS));

      unlockScroll();
      headerFocusArea.unlock();

      burger.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_SHOW);
      burger.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_FALSE);

      burger.addEventListener(`click`, addHandlers);
      header.removeEventListener(`click`, toggleMenu);
      header.removeEventListener(`keydown`, hideMenu);
    }
  }

  (function init() {
    if (header) {
      header.classList.add(MENU_CLASS);
    }

    if (logo) {
      logo.classList.add(MENU_LOGO_CLASS);
    }

    if (cart) {
      cart.classList.add(MENU_CART_CLASS);
    }

    if (menuItems) {
      menuItems.forEach((item) => item.classList.add(MENU_ITEM_CLASS));
    }

    if (burger) {
      burger.classList.remove(BURGER_NOJS_CLASS);
      burger.classList.add(MENU_BUTTON_CLASS);
      burger.addEventListener(`click`, addHandlers);
    }
  })();
});
