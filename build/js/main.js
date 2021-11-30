/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./source/js/main.js","vendor~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ "./source/js/modules/menu.js");
/* harmony import */ var _modules_slider_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider-base.js */ "./source/js/modules/slider-base.js");
/* harmony import */ var _modules_slider_catalog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider-catalog.js */ "./source/js/modules/slider-catalog.js");
/* harmony import */ var _modules_popup_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup-filter.js */ "./source/js/modules/popup-filter.js");
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/local-storage.js */ "./source/js/modules/local-storage.js");
/* harmony import */ var _modules_popup_login_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popup-login.js */ "./source/js/modules/popup-login.js");
/* harmony import */ var _modules_accordion_faq_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordion-faq.js */ "./source/js/modules/accordion-faq.js");
/* harmony import */ var _modules_accordion_faq_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_faq_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_accordion_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/accordion-filter.js */ "./source/js/modules/accordion-filter.js");
/* harmony import */ var _modules_accordion_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_filter_js__WEBPACK_IMPORTED_MODULE_7__);










/***/ }),

/***/ "./source/js/modules/accordion-faq.js":
/*!********************************************!*\
  !*** ./source/js/modules/accordion-faq.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./source/js/modules/accordion-filter.js":
/*!***********************************************!*\
  !*** ./source/js/modules/accordion-filter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./source/js/modules/focus-area.js":
/*!*****************************************!*\
  !*** ./source/js/modules/focus-area.js ***!
  \*****************************************/
/*! exports provided: createFocusArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusArea", function() { return createFocusArea; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/modules/utils.js");


function createFocusArea(selector) {
  const elements = selector.querySelectorAll(`
    input:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href]:not([disabled])`
  );

  const firstElement = elements[0];
  const lastElement = elements[elements.length - 1];

  function lockFocus(evt) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isTabEvent"])(evt)) {
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


/***/ }),

/***/ "./source/js/modules/local-storage.js":
/*!********************************************!*\
  !*** ./source/js/modules/local-storage.js ***!
  \********************************************/
/*! exports provided: createStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStorage", function() { return createStorage; });
const FORM = `form`;
const INPUT = `input`;
const INPUT_TYPE = `email`;
const USER_EMAIL = `user-email`;

document.addEventListener(`DOMContentLoaded`, () => {
  const forms = document.querySelectorAll(`${FORM}`);

  if (forms) {
    forms.forEach((form) => createStorage(form));
  }
});

function createStorage(form) {
  const formFields = form.querySelectorAll(`${INPUT}`);

  if (formFields) {
    formFields.forEach((field) => {
      if (field.type === INPUT_TYPE && localStorage.getItem(USER_EMAIL)) {
        field.value = localStorage.getItem(USER_EMAIL);
      }

      field.addEventListener(`change`, saveData);
    });
  }
}

function saveData(evt) {
  if (evt.target.type === INPUT_TYPE) {
    localStorage.setItem(USER_EMAIL, evt.target.value);
  }
}


/***/ }),

/***/ "./source/js/modules/menu.js":
/*!***********************************!*\
  !*** ./source/js/modules/menu.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _focus_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-area.js */ "./source/js/modules/focus-area.js");
/* harmony import */ var _scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-lock.js */ "./source/js/modules/scroll-lock.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./source/js/modules/utils.js");




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

  const headerFocusArea = Object(_focus_area_js__WEBPACK_IMPORTED_MODULE_0__["createFocusArea"])(header);

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
        Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["lockScroll"])();
        headerFocusArea.lock();

        burger.setAttribute(ARIA_LABEL_ATTRIBUTE, VALUE_HIDE);
        burger.setAttribute(ARIA_EXPANDED_ATTRIBUTE, VALUE_TRUE);
      } else {
        Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["unlockScroll"])();
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
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isEscEvent"])(evt) || evt.type === `click`) {
      header.classList.remove(MENU_VISIBLE_CLASS);
      burger.classList.add(MENU_BUTTON_CLASS);
      logo.classList.add(MENU_LOGO_CLASS);
      cart.classList.add(MENU_CART_CLASS);
      menuItems.forEach((item) => item.classList.add(MENU_ITEM_CLASS));

      Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["unlockScroll"])();
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


/***/ }),

/***/ "./source/js/modules/popup-filter.js":
/*!*******************************************!*\
  !*** ./source/js/modules/popup-filter.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _focus_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-area.js */ "./source/js/modules/focus-area.js");
/* harmony import */ var _scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-lock.js */ "./source/js/modules/scroll-lock.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./source/js/modules/utils.js");




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
const DISABLED = `disabled`;

document.addEventListener(`DOMContentLoaded`, () => {
  const filter = document.querySelector(`.${CONTAINER}`);
  if (!filter) {
    return;
  }

  const buttonOpen = filter.querySelector(`.${BUTTON_OPEN}`);
  if (!buttonOpen) {
    return;
  }

  const buttonClose = filter.querySelector(`.${BUTTON_CLOSE}`);
  if (!buttonClose) {
    return;
  }

  const form = filter.querySelector(`.${FORM_FILTER}`);
  if (!form) {
    return;
  }

  const filterFocusArea = Object(_focus_area_js__WEBPACK_IMPORTED_MODULE_0__["createFocusArea"])(filter);

  function addHandler() {
    filter.addEventListener(`click`, showPopup);
  }

  function showPopup() {
    const toggleProduct = form.firstElementChild.querySelector(`.${FIELDSET_PRODUCT_TOGGLE}`);

    filter.classList.add(POPUP_BUTTON_OPEN);
    buttonOpen.classList.add(BUTTON_OPEN_DISABLED);
    filterFocusArea.lock();
    Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["lockScroll"])();
    toggleProduct.focus();

    filter.addEventListener(`keydown`, hidePopup);
    filter.addEventListener(`click`, hidePopup);
    filter.removeEventListener(`click`, showPopup);
    buttonOpen.removeEventListener(`click`, addHandler);
  }

  function hidePopup(evt) {
    const isButtonClose = evt.target.closest(`.${POPUP_BUTTON_CLOSE}`);
    const isForm = evt.target.closest(`.${POPUP_FORM}`);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isEscEvent"])(evt) || evt.type === `click`) {
      if (evt.type === `click` && isForm && !isButtonClose) {
        return;
      }

      filter.classList.remove(POPUP_BUTTON_OPEN);
      buttonOpen.classList.remove(BUTTON_OPEN_DISABLED);
      filterFocusArea.unlock();
      Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["unlockScroll"])();

      buttonOpen.focus();
      buttonOpen.addEventListener(`click`, addHandler);
      filter.removeEventListener(`keydown`, hidePopup);
      filter.removeEventListener(`click`, hidePopup);
    }
  }

  function reset() {
    filter.classList.remove(POPUP_BUTTON_OPEN);
    buttonOpen.classList.remove(BUTTON_OPEN_DISABLED);
    filterFocusArea.unlock();
    Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_1__["unlockScroll"])();

    filter.removeEventListener(`keydown`, hidePopup);
    filter.removeEventListener(`click`, hidePopup);
    filter.removeEventListener(`click`, showPopup);
    buttonOpen.addEventListener(`click`, addHandler);
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

    window.addEventListener(`resize`, reset);
  })();
});


/***/ }),

/***/ "./source/js/modules/popup-login.js":
/*!******************************************!*\
  !*** ./source/js/modules/popup-login.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _focus_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-area.js */ "./source/js/modules/focus-area.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./source/js/modules/local-storage.js");
/* harmony import */ var _scroll_lock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-lock.js */ "./source/js/modules/scroll-lock.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./source/js/modules/utils.js");





const BODY = `body`;
const CONTAINER = `login`;
const CONTAINER_INNER = `login__inner`;
const POPUP = `login--popup`;
const POPUP_INNER = `login__inner--popup`;
const BUTTON_LOGIN_AUTH = `auth__login`;
const BUTTON_LOGIN_NAV = `nav__login`;
const BUTTON_CLOSE = `exit`;
const FORM = `form-login`;
const FORM_FIELD = `input`;
const FORM_BUTTON_CLOSE = `form-login__exit`;

document.addEventListener(`DOMContentLoaded`, () => {
  const loginButtons = document.querySelectorAll(`
    .${BUTTON_LOGIN_AUTH},
    .${BUTTON_LOGIN_NAV}
  `);

  if (loginButtons) {
    loginButtons.forEach((loginButton) => init(loginButton));
  }
});

function init(loginButton) {
  loginButton.addEventListener(`click`, showPopup);

  function showPopup(evt) {
    createPopupSettings();
    Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_2__["lockScroll"])();
    evt.preventDefault();
  }

  function createPopupSettings() {
    const popup = createPopup(CONTAINER);
    if (!popup) {
      return;
    }

    const popupFocusArea = Object(_focus_area_js__WEBPACK_IMPORTED_MODULE_0__["createFocusArea"])(popup);
    const formContainer = popup.querySelector(`.${CONTAINER_INNER}`);
    const form = popup.querySelector(`.${FORM}`);
    const formFields = form.querySelectorAll(`${FORM_FIELD}`);
    const buttonClose = popup.querySelector(`.${BUTTON_CLOSE}`);

    popup.classList.add(POPUP);
    formContainer.classList.add(POPUP_INNER);
    buttonClose.classList.add(FORM_BUTTON_CLOSE);

    Object(_local_storage_js__WEBPACK_IMPORTED_MODULE_1__["createStorage"])(form);
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

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isEscEvent"])(evt) || evt.type === `click`) {
      if (evt.type === `click` && isFormContainer && !isButtonClose) {
        return;
      }

      popup.remove();
      Object(_scroll_lock_js__WEBPACK_IMPORTED_MODULE_2__["unlockScroll"])();
      loginButton.focus();

      loginButton.addEventListener(`click`, showPopup);
    }
  }
}


/***/ }),

/***/ "./source/js/modules/scroll-lock.js":
/*!******************************************!*\
  !*** ./source/js/modules/scroll-lock.js ***!
  \******************************************/
/*! exports provided: lockScroll, unlockScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockScroll", function() { return lockScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlockScroll", function() { return unlockScroll; });
const BODY = `body`;
const BODY_SCROLL_LOCK_CLASS = `page__body--scroll-lock`;
const STYLE_ATTRIBUTE = `style`;

const body = document.querySelector(BODY);

function lockScroll() {
  const scrollBarWidth = getScrollBarWidth();

  body.classList.add(BODY_SCROLL_LOCK_CLASS);
  body.style.paddingRight = `${scrollBarWidth}px`;
}

function unlockScroll() {
  body.classList.remove(BODY_SCROLL_LOCK_CLASS);
  body.removeAttribute(STYLE_ATTRIBUTE);
}

function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}


/***/ }),

/***/ "./source/js/modules/slider-base.js":
/*!******************************************!*\
  !*** ./source/js/modules/slider-base.js ***!
  \******************************************/
/*! exports provided: alignSlides, setFocusToVisibleSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSlides", function() { return alignSlides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFocusToVisibleSlides", function() { return setFocusToVisibleSlides; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


const WRAPPER_CLASS = `products-container--base`;
const PRODUCTS_CONTAINER_CLASS = `products-container__inner`;
const PRODUCTS_CLASS = `products`;
const PRODUCT_CLASS = `products__item`;
const LINKS_CLASS = `products__item > a`;
const PAGINATION_CLASS = `pagination`;
const TOGGLES_CLASS = `toggles`;
const TOGGLE_ATTRIBUTE = `data-toggle`;
const TOGGLE_PREV = `previous`;
const TOGGLE_NEXT = `next`;

const SLIDER_CLASS = `slider`;
const SLIDER_MODIFIER = `slider--`;
const SLIDES_CLASS = `slider__items`;
const SLIDE_BASE_CLASS = `slider__item`;
const SLIDE_ACTIVE_CLASS = `slider__item--active`;
const SLIDE_PREV_CLASS = `slider__item--prev`;
const SLIDE_NEXT_CLASS = `slider__item--next`;
const SLIDER_PAGINATION_CLASS = `slider__pagination`;
const SLIDER_PAGINATION_MODIFIER = `slider__pagination--`;
const SLIDER_PAGINATION_CLICKABLE = `slider__pagination--clickable`;
const SLIDER_BULLET_CLASS = `slider__bullet`;
const SLIDER_BULLET_ACTIVE_CLASS = `slider__bullet--active`;
const SLIDER_TOGGLES_CLASS = `slider__toggles`;
const SLIDER_TOGGLE_BASE_CLASS = `slider__toggle`;
const SLIDER_TOGGLE_PREV_CLASS = `slider__toggle--prev`;
const SLIDER_TOGGLE_NEXT_CLASS = `slider__toggle--next`;
const SLIDER_TOGGLE_DISABLED_CLASS = `slider__toggle--disabled`;
const SLIDER_FRACTION_CURRENT_CLASS = `slider__fraction-current`;
const SLIDER_FRACTION_TOTAL_CLASS = `slider__fraction-total`;
const SLIDER_NOTIFICATION_CLASS = `slider__notification`;
const SPACE_BETWEEN_SLIDES = 30;

document.addEventListener(`DOMContentLoaded`, () => {
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
  if (!wrapper) {
    return;
  }

  const products = wrapper.querySelector(`.${PRODUCTS_CONTAINER_CLASS}`);
  if (!products) {
    return;
  }

  const slidesContainer = wrapper.querySelector(`.${PRODUCTS_CLASS}`);
  if (!slidesContainer) {
    return;
  }
  const slides = Array.from(slidesContainer.children);

  const pagination = wrapper.querySelector(`.${PAGINATION_CLASS}`);
  if (!pagination) {
    return;
  }

  const togglesContainer = wrapper.querySelector(`.${TOGGLES_CLASS}`);
  if (!togglesContainer) {
    return;
  }
  const toggles = Array.from(togglesContainer.children);

  (function init() {
    if (products) {
      products.classList.add(SLIDER_CLASS);
    }

    if (slidesContainer) {
      slidesContainer.classList.add(SLIDES_CLASS);
    }

    if (slides) {
      slides.forEach((product) => product.classList.add(SLIDE_BASE_CLASS));
    }

    if (pagination) {
      pagination.classList.add(SLIDER_PAGINATION_CLASS);
    }

    if (togglesContainer) {
      toggles.forEach((toggle) => {
        toggle.classList.add(SLIDER_TOGGLE_BASE_CLASS);

        if (toggle.dataset.toggle === TOGGLE_PREV) {
          toggle.classList.add(SLIDER_TOGGLE_PREV_CLASS);
        }

        if (toggle.dataset.toggle === TOGGLE_NEXT) {
          toggle.classList.add(SLIDER_TOGGLE_NEXT_CLASS);
        }

        toggle.removeAttribute(TOGGLE_ATTRIBUTE);
      });

      togglesContainer.classList.add(SLIDER_TOGGLES_CLASS);
    }
  })();

  const slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](`.${SLIDER_CLASS}`, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Keyboard"], swiper__WEBPACK_IMPORTED_MODULE_0__["A11y"]],
    init: false,
    containerModifierClass: SLIDER_MODIFIER,
    wrapperClass: SLIDES_CLASS,
    slideClass: SLIDE_BASE_CLASS,
    slideActiveClass: SLIDE_ACTIVE_CLASS,
    slidePrevClass: SLIDE_PREV_CLASS,
    slideNextClass: SLIDE_NEXT_CLASS,
    navigation: {
      prevEl: `.${SLIDER_TOGGLE_PREV_CLASS}`,
      nextEl: `.${SLIDER_TOGGLE_NEXT_CLASS}`,
      disabledClass: SLIDER_TOGGLE_DISABLED_CLASS
    },
    pagination: {
      el: `.${SLIDER_PAGINATION_CLASS}`,
      clickable: true,
      clickableClass: SLIDER_PAGINATION_CLICKABLE,
      modifierClass: SLIDER_PAGINATION_MODIFIER
    },
    keyboard: {
      enabled: true
    },
    a11y: {
      notificationClass: SLIDER_NOTIFICATION_CLASS
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: `fraction`,
          currentClass: SLIDER_FRACTION_CURRENT_CLASS,
          totalClass: SLIDER_FRACTION_TOTAL_CLASS,
          renderFraction(currentClass, totalClass) {
            return `<li><span class="${currentClass}"></span>&ensp;of&ensp;<span class="${totalClass}"></span></li>`;
          }
        }
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: `bullets`,
          bulletElement: `li`,
          bulletClass: SLIDER_BULLET_CLASS,
          bulletActiveClass: SLIDER_BULLET_ACTIVE_CLASS,
          renderBullet(index, className) {
            return `<li class="${className}">${++index}</li>`;
          }
        }
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: `bullets`,
          bulletElement: `li`,
          bulletClass: SLIDER_BULLET_CLASS,
          bulletActiveClass: SLIDER_BULLET_ACTIVE_CLASS,
          renderBullet(index, className) {
            return `<li class="${className}">${++index}</li>`;
          }
        }
      }
    }
  });

  slider.init();
  slider.on(`slideChange`, alignSlides);
  slider.on(`slideChange`, setFocusToVisibleSlides);
});

const container = document.querySelector(`.${PRODUCTS_CLASS}`);

function checkCurrentTransition(selector) {
  const condition = /[^\w\d()]\-?[\d]+/;
  return Number(selector.style.transform.match(condition));
}

function alignSlides() {
  let transformedValue = ``;

  if (container) {
    const containerWidth = container.clientWidth;
    const currentTransitionValue = checkCurrentTransition(container);
    const baseStep = -SPACE_BETWEEN_SLIDES;
    let step = baseStep * (currentTransitionValue / containerWidth) * (-1);

    if (currentTransitionValue === 0) {
      step = 0;
    }

    transformedValue = container.style.transform = `translate3d(${currentTransitionValue + step}px, 0px, 0px)`;
  }

  return transformedValue;
}

function setFocusToVisibleSlides() {
  const slide = container.querySelector(`.${PRODUCT_CLASS}`);
  const productsLinks = Array.from(container.querySelectorAll(`.${LINKS_CLASS}`));
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const slideWidth = slide.offsetWidth;
  const slideHeight = slide.offsetHeight;
  const slidesVisible = Math.floor(containerWidth / slideWidth) * Math.floor(containerHeight / slideHeight);
  const currentTransitionValue = checkCurrentTransition(container);
  let step = Math.floor(currentTransitionValue / containerWidth * (-1));

  if (currentTransitionValue === 0) {
    step = 1;
  } else {
    step++;
  }

  const startIndex = slidesVisible * step - slidesVisible;
  const lastIndex = slidesVisible * step;

  for (let i = 0; i < productsLinks.length; i++) {
    productsLinks[i].tabIndex = -1;
    if (i >= startIndex && i < lastIndex) {
      productsLinks[i].tabIndex = 0;
    }
  }
}

setFocusToVisibleSlides();


/***/ }),

/***/ "./source/js/modules/slider-catalog.js":
/*!*********************************************!*\
  !*** ./source/js/modules/slider-catalog.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _slider_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-base.js */ "./source/js/modules/slider-base.js");



const WRAPPER_CLASS = `products-container--catalog`;
const PRODUCTS_CONTAINER_CLASS = `products-container__inner`;
const PRODUCTS_CLASS = `products`;
const PAGINATION_CLASS = `pagination`;
const TOGGLES_CLASS = `toggles`;
const TOGGLE_ATTRIBUTE = `data-toggle`;
const TOGGLE_PREV = `previous`;
const TOGGLE_NEXT = `next`;

const SLIDER_CLASS = `slider`;
const SLIDER_MODIFIER = `slider--`;
const SLIDES_CLASS = `slider__items`;
const SLIDES_MODIFIER = `slider__items--catalog`;
const SLIDE_BASE_CLASS = `slider__item`;
const SLIDE_ACTIVE_CLASS = `slider__item--active`;
const SLIDE_PREV_CLASS = `slider__item--prev`;
const SLIDE_NEXT_CLASS = `slider__item--next`;
const SLIDER_PAGINATION_CLASS = `slider__pagination`;
const SLIDER_PAGINATION_MODIFIER = `slider__pagination--`;
const SLIDER_PAGINATION_CLICKABLE = `slider__pagination--clickable`;
const SLIDER_BULLET_CLASS = `slider__bullet`;
const SLIDER_BULLET_ACTIVE_CLASS = `slider__bullet--active`;
const SLIDER_TOGGLES_CLASS = `slider__toggles`;
const SLIDER_TOGGLES_MODIFIER = `slider__toggles--catalog`;
const SLIDER_TOGGLE_BASE_CLASS = `slider__toggle`;
const SLIDER_TOGGLE_PREV_CLASS = `slider__toggle--prev`;
const SLIDER_TOGGLE_NEXT_CLASS = `slider__toggle--next`;
const SLIDER_TOGGLE_DISABLED_CLASS = `slider__toggle--disabled`;
const SLIDER_NOTIFICATION_CLASS = `slider__notification`;

document.addEventListener(`DOMContentLoaded`, () => {
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
  if (!wrapper) {
    return;
  }

  const products = wrapper.querySelector(`.${PRODUCTS_CONTAINER_CLASS}`);
  if (!products) {
    return;
  }

  const slidesContainer = wrapper.querySelector(`.${PRODUCTS_CLASS}`);
  if (!slidesContainer) {
    return;
  }
  const slides = Array.from(slidesContainer.children);

  const pagination = wrapper.querySelector(`.${PAGINATION_CLASS}`);
  if (!pagination) {
    return;
  }

  const togglesContainer = wrapper.querySelector(`.${TOGGLES_CLASS}`);
  if (!togglesContainer) {
    return;
  }
  const toggles = Array.from(togglesContainer.children);

  (function init() {
    if (products) {
      products.classList.add(SLIDER_CLASS);
    }

    if (slidesContainer) {
      slidesContainer.classList.add(SLIDES_CLASS);
      slidesContainer.classList.add(SLIDES_MODIFIER);
    }

    if (slides) {
      slides.forEach((product) => product.classList.add(SLIDE_BASE_CLASS));
    }

    if (pagination) {
      pagination.classList.add(SLIDER_PAGINATION_CLASS);
    }

    if (togglesContainer) {
      toggles.forEach((toggle) => {
        toggle.classList.add(SLIDER_TOGGLE_BASE_CLASS);

        if (toggle.dataset.toggle === TOGGLE_PREV) {
          toggle.classList.add(SLIDER_TOGGLE_PREV_CLASS);
        }

        if (toggle.dataset.toggle === TOGGLE_NEXT) {
          toggle.classList.add(SLIDER_TOGGLE_NEXT_CLASS);
        }

        toggle.removeAttribute(TOGGLE_ATTRIBUTE);
      });

      togglesContainer.classList.add(SLIDER_TOGGLES_CLASS);
      togglesContainer.classList.add(SLIDER_TOGGLES_MODIFIER);
    }
  })();

  const slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](`.${SLIDER_CLASS}`, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Keyboard"], swiper__WEBPACK_IMPORTED_MODULE_0__["A11y"]],
    init: false,
    containerModifierClass: SLIDER_MODIFIER,
    wrapperClass: SLIDES_CLASS,
    slideClass: SLIDE_BASE_CLASS,
    slideActiveClass: SLIDE_ACTIVE_CLASS,
    slidePrevClass: SLIDE_PREV_CLASS,
    slideNextClass: SLIDE_NEXT_CLASS,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      prevEl: `.${SLIDER_TOGGLE_PREV_CLASS}`,
      nextEl: `.${SLIDER_TOGGLE_NEXT_CLASS}`,
      disabledClass: SLIDER_TOGGLE_DISABLED_CLASS
    },
    pagination: {
      el: `.${SLIDER_PAGINATION_CLASS}`,
      clickable: true,
      clickableClass: SLIDER_PAGINATION_CLICKABLE,
      modifierClass: SLIDER_PAGINATION_MODIFIER,
      type: `bullets`,
      bulletElement: `li`,
      bulletClass: SLIDER_BULLET_CLASS,
      bulletActiveClass: SLIDER_BULLET_ACTIVE_CLASS,
      renderBullet(index, className) {
        return `<li class="${className}">${++index}</li>`;
      }
    },
    keyboard: {
      enabled: true
    },
    a11y: {
      notificationClass: SLIDER_NOTIFICATION_CLASS
    },
  });

  slider.init();
  slider.on(`slideChange`, _slider_base_js__WEBPACK_IMPORTED_MODULE_1__["alignSlides"]);
  slider.on(`slideChange`, _slider_base_js__WEBPACK_IMPORTED_MODULE_1__["setFocusToVisibleSlides"]);
});


/***/ }),

/***/ "./source/js/modules/utils.js":
/*!************************************!*\
  !*** ./source/js/modules/utils.js ***!
  \************************************/
/*! exports provided: isEscEvent, isTabEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEscEvent", function() { return isEscEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabEvent", function() { return isTabEvent; });
function isEscEvent(evt) {
  return evt.key === `Escape`;
}

function isTabEvent(evt) {
  return evt.key === `Tab`;
}


/***/ })

/******/ });