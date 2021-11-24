import {createFocusArea} from './focus-area.js';
import {createStorage} from './local-storage.js';
import {lockScroll, unlockScroll} from './scroll-lock.js';
import {isEscEvent} from './utils.js';

const BODY = `body`;
const CONTAINER = `login`;
const CONTAINER_INNER = `login__inner`;
const POPUP = `login--popup`;
const POPUP_INNER = `login__inner--popup`;
const BUTTON_LOGIN_AUTH = `auth__login`;
const BUTTON_LOGIN_NAV = `nav__login`;
const BUTTON_LOGIN_ERROR = `error__login`;
const BUTTON_CLOSE = `exit`;
const FORM = `form-login`;
const FORM_FIELD = `input`;
const FORM_BUTTON_CLOSE = `form-login__exit`;

document.addEventListener(`DOMContentLoaded`, () => {
  const loginButtons = document.querySelectorAll(`
    .${BUTTON_LOGIN_AUTH},
    .${BUTTON_LOGIN_NAV},
    .${BUTTON_LOGIN_ERROR}
  `);

  if (loginButtons) {
    loginButtons.forEach((loginButton) => init(loginButton));
  }
});

function init(loginButton) {
  loginButton.addEventListener(`click`, showPopup);

  function showPopup(evt) {
    createPopupSettings();
    lockScroll();
    evt.preventDefault();
  }

  function createPopupSettings() {
    const popup = createPopup(CONTAINER);
    if (!popup) {
      return;
    }

    const popupFocusArea = createFocusArea(popup);
    const formContainer = popup.querySelector(`.${CONTAINER_INNER}`);
    const form = popup.querySelector(`.${FORM}`);
    const formFields = form.querySelectorAll(`${FORM_FIELD}`);
    const buttonClose = popup.querySelector(`.${BUTTON_CLOSE}`);

    popup.classList.add(POPUP);
    formContainer.classList.add(POPUP_INNER);
    buttonClose.classList.add(FORM_BUTTON_CLOSE);

    createStorage(form);
    popupFocusArea.lock();
    formFields[0].focus();

    popup.addEventListener(`keydown`, hidePopup);
    popup.addEventListener(`click`, hidePopup);
    loginButton.removeEventListener(`click`, showPopup);
  }

  function createPopup(selector) {
    const body = document.querySelector(BODY);
    const template = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
    const popup = template.cloneNode(true);

    body.appendChild(popup);

    return popup;
  }

  function hidePopup(evt) {
    const popup = document.querySelector(`.${CONTAINER}`);
    const isButtonClose = evt.target.closest(`.${FORM_BUTTON_CLOSE}`);
    const isFormContainer = evt.target.closest(`.${CONTAINER_INNER}`);

    if (isEscEvent(evt) || evt.type === `click`) {
      if (evt.type === `click` && isFormContainer && !isButtonClose) {
        return;
      }

      popup.remove();
      unlockScroll();
      loginButton.focus();

      loginButton.addEventListener(`click`, showPopup);
    }
  }
}
