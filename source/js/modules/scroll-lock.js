const BODY = `body`;
const BODY_SCROLL_LOCK_CLASS = `page__body--scroll-lock`;
const STYLE_ATTRIBUTE = `style`;

const body = document.querySelector(BODY);

export function lockScroll() {
  const scrollBarWidth = getScrollBarWidth();

  body.classList.add(BODY_SCROLL_LOCK_CLASS);
  body.style.paddingRight = `${scrollBarWidth}px`;
}

export function unlockScroll() {
  body.classList.remove(BODY_SCROLL_LOCK_CLASS);
  body.removeAttribute(STYLE_ATTRIBUTE);
}

function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
