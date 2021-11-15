import {isTabEvent} from './utils.js';

export function createFocusArea(selector) {
  const elements = selector.querySelectorAll(`
    input:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href]:not([disabled])`
  );

  const firstElement = elements[0];
  const lastElement = elements[elements.length - 1];

  function lockFocus(evt) {
    if (isTabEvent(evt)) {
      if (evt.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          evt.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          evt.preventDefault();
        }
      }
    }
  }

  return {
    lock() {
      selector.addEventListener(`keydown`, lockFocus);
    },
    unlock() {
      selector.removeEventListener(`keydown`, lockFocus);
    }
  };
}
