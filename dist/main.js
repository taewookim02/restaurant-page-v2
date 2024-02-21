/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout() {
  const about = document.createElement("section");
  about.classList.add("about");
  content.appendChild(about);

  const aboutImg = document.createElement("img");
  aboutImg.src = "../src/img/about.jpg";
  aboutImg.alt = "about picture";
  aboutImg.classList.add("img-about");
  about.appendChild(aboutImg);

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About us";
  about.appendChild(aboutTitle);
  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent =
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non minima earum, neque veniam fuga voluptates ipsum error mollitia velit rem maxime repellendus consequuntur, illo nobis vero dolores unde officia soluta doloremque facilis perspiciatis! Magni, optio minus. Recusandae perferendis aspernatur pariatur vero maxime atque mollitia, dolor at doloremque saepe minima.";
  about.appendChild(aboutParagraph);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");
  content.appendChild(menu);

  // add multiple menu items
  const menuItems = [
    {
      name: "Sushi 1",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 10,
      src: "../src/img/sushi1.jpg",
    },
    {
      name: "Sushi 2",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 20,
      src: "../src/img/sushi2.jpeg",
    },
    {
      name: "Sushi 3",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: 30,
      src: "../src/img/sushi3.jpeg",
    },
  ];

  menuItems.forEach((item, i) => {
    const menuItem = document.createElement("div");
    const menuItemImg = document.createElement("div");
    menuItemImg.classList.add("menu-img");
    const menuItemText = document.createElement("div");
    menuItemText.classList.add("menu-text");

    menuItem.appendChild(menuItemImg);
    menuItem.appendChild(menuItemText);
    menuItem.classList.add("menu-item");
    menuItemText.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="menu-price">$${item.price}</p>
    `;

    menuItemImg.innerHTML = `
      <img src="${item.src}" alt="Sushi ${i}" class="img-menu-item" />
    `;
    menu.appendChild(menuItem);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


// selectors
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const content = document.querySelector("#content");

// get buttons
const buttonHome = document.querySelector(".button-home");
const buttonMenu = document.querySelector(".button-menu");
const buttonAbout = document.querySelector(".button-about");

// event listeners
document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.createElement("div");
  container.classList.add("container");
  body.appendChild(container);
  container.appendChild(header);
  container.appendChild(content);

  addHeader();
  addBody();
  addButtonListeners();
});

function addButtonListeners() {
  function clearActiveStates() {
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active");
    });
  }

  function handleButtonClick(contentUpdater) {
    return (e) => {
      const content = document.getElementById("content");
      content.innerHTML = "";
      clearActiveStates();
      e.currentTarget.classList.add("active");
      contentUpdater();
    };
  }

  document
    .querySelector(".button-home")
    .addEventListener("click", handleButtonClick(addBody));
  document
    .querySelector(".button-menu")
    .addEventListener("click", handleButtonClick(_menu__WEBPACK_IMPORTED_MODULE_1__["default"]));
  document
    .querySelector(".button-about")
    .addEventListener("click", handleButtonClick(_about__WEBPACK_IMPORTED_MODULE_0__["default"]));
}

function addHeader() {
  // Add logo image
  const imgLogo = document.createElement("img");
  imgLogo.src = "../src/img/logo.png";
  imgLogo.alt = "logo";
  imgLogo.classList.add("img-logo");
  header.appendChild(imgLogo);

  // Add nav
  const buttonHome = document.createElement("button");
  buttonHome.textContent = "Home";
  buttonHome.classList.add("active");
  buttonHome.classList.add("button-home");
  nav.appendChild(buttonHome);
  const buttonMenu = document.createElement("button");
  buttonMenu.textContent = "Menu";
  buttonMenu.classList.add("button-menu");
  nav.appendChild(buttonMenu);
  const buttonAbout = document.createElement("button");
  buttonAbout.textContent = "About";
  buttonAbout.classList.add("button-about");
  nav.appendChild(buttonAbout);
  header.appendChild(nav);
}

function addBody() {
  // Add hero
  const hero = document.createElement("section");
  hero.classList.add("hero");
  content.appendChild(hero);
  const imgHero = document.createElement("img");
  imgHero.src = "../src/img/sushi.jpeg";
  imgHero.alt = "sushi picture";
  imgHero.classList.add("img-hero");
  hero.appendChild(imgHero);

  // Add introduction
  const introduction = document.createElement("section");
  introduction.classList.add("introduction");
  content.appendChild(introduction);
  const introductionTitle = document.createElement("h2");
  introductionTitle.textContent = "Welcome to";
  introduction.appendChild(introductionTitle);
  const introductionParagraph1 = document.createElement("p");
  introductionParagraph1.textContent = "Sushi for All";
  introduction.appendChild(introductionParagraph1);
  const introductionParagraph2 = document.createElement("p");
  introductionParagraph2.textContent =
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non minima earum, neque veniam fuga voluptates ipsum error mollitia velit rem maxime repellendus consequuntur, illo nobis vero dolores unde officia soluta doloremque facilis perspiciatis! Magni, optio minus. Recusandae perferendis aspernatur pariatur vero maxime atque mollitia, dolor at doloremque saepe minima.";
  introduction.appendChild(introductionParagraph2);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QixXQUFXLGlCQUFpQjtBQUM1QiwrQkFBK0IsV0FBVztBQUMxQzs7QUFFQTtBQUNBLGtCQUFrQixTQUFTLGVBQWUsRUFBRTtBQUM1QztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2xEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDRjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkNBQVU7QUFDM0Q7QUFDQTtBQUNBLGlEQUFpRCw4Q0FBVztBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdjIvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS12Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXYyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gIGNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWJvdXRJbWcuc3JjID0gXCIuLi9zcmMvaW1nL2Fib3V0LmpwZ1wiO1xuICBhYm91dEltZy5hbHQgPSBcImFib3V0IHBpY3R1cmVcIjtcbiAgYWJvdXRJbWcuY2xhc3NMaXN0LmFkZChcImltZy1hYm91dFwiKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpO1xuXG4gIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xuICBjb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhYm91dFBhcmFncmFwaC50ZXh0Q29udGVudCA9XG4gICAgXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOb3N0cnVtIG5vbiBtaW5pbWEgZWFydW0sIG5lcXVlIHZlbmlhbSBmdWdhIHZvbHVwdGF0ZXMgaXBzdW0gZXJyb3IgbW9sbGl0aWEgdmVsaXQgcmVtIG1heGltZSByZXBlbGxlbmR1cyBjb25zZXF1dW50dXIsIGlsbG8gbm9iaXMgdmVybyBkb2xvcmVzIHVuZGUgb2ZmaWNpYSBzb2x1dGEgZG9sb3JlbXF1ZSBmYWNpbGlzIHBlcnNwaWNpYXRpcyEgTWFnbmksIG9wdGlvIG1pbnVzLiBSZWN1c2FuZGFlIHBlcmZlcmVuZGlzIGFzcGVybmF0dXIgcGFyaWF0dXIgdmVybyBtYXhpbWUgYXRxdWUgbW9sbGl0aWEsIGRvbG9yIGF0IGRvbG9yZW1xdWUgc2FlcGUgbWluaW1hLlwiO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFBhcmFncmFwaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFib3V0O1xuIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIC8vIGFkZCBtdWx0aXBsZSBtZW51IGl0ZW1zXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlN1c2hpIDFcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXRcIixcbiAgICAgIHByaWNlOiAxMCxcbiAgICAgIHNyYzogXCIuLi9zcmMvaW1nL3N1c2hpMS5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3VzaGkgMlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFwiLFxuICAgICAgcHJpY2U6IDIwLFxuICAgICAgc3JjOiBcIi4uL3NyYy9pbWcvc3VzaGkyLmpwZWdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3VzaGkgM1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFwiLFxuICAgICAgcHJpY2U6IDMwLFxuICAgICAgc3JjOiBcIi4uL3NyYy9pbWcvc3VzaGkzLmpwZWdcIixcbiAgICB9LFxuICBdO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGV4dFwiKTtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWVudUl0ZW1UZXh0LmlubmVySFRNTCA9IGBcbiAgICAgIDxoMz4ke2l0ZW0ubmFtZX08L2gzPlxuICAgICAgPHA+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzPVwibWVudS1wcmljZVwiPiQke2l0ZW0ucHJpY2V9PC9wPlxuICAgIGA7XG5cbiAgICBtZW51SXRlbUltZy5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIHNyYz1cIiR7aXRlbS5zcmN9XCIgYWx0PVwiU3VzaGkgJHtpfVwiIGNsYXNzPVwiaW1nLW1lbnUtaXRlbVwiIC8+XG4gICAgYDtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVBYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuLy8gc2VsZWN0b3JzXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4vLyBnZXQgYnV0dG9uc1xuY29uc3QgYnV0dG9uSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWhvbWVcIik7XG5jb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbWVudVwiKTtcbmNvbnN0IGJ1dHRvbkFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYWJvdXRcIik7XG5cbi8vIGV2ZW50IGxpc3RlbmVyc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBhZGRIZWFkZXIoKTtcbiAgYWRkQm9keSgpO1xuICBhZGRCdXR0b25MaXN0ZW5lcnMoKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMoKSB7XG4gIGZ1bmN0aW9uIGNsZWFyQWN0aXZlU3RhdGVzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGNvbnRlbnRVcGRhdGVyKSB7XG4gICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY2xlYXJBY3RpdmVTdGF0ZXMoKTtcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgY29udGVudFVwZGF0ZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5idXR0b24taG9tZVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQnV0dG9uQ2xpY2soYWRkQm9keSkpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1tZW51XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCdXR0b25DbGljayhjcmVhdGVNZW51KSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWFib3V0XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCdXR0b25DbGljayhjcmVhdGVBYm91dCkpO1xufVxuXG5mdW5jdGlvbiBhZGRIZWFkZXIoKSB7XG4gIC8vIEFkZCBsb2dvIGltYWdlXG4gIGNvbnN0IGltZ0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWdMb2dvLnNyYyA9IFwiLi4vc3JjL2ltZy9sb2dvLnBuZ1wiO1xuICBpbWdMb2dvLmFsdCA9IFwibG9nb1wiO1xuICBpbWdMb2dvLmNsYXNzTGlzdC5hZGQoXCJpbWctbG9nb1wiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGltZ0xvZ28pO1xuXG4gIC8vIEFkZCBuYXZcbiAgY29uc3QgYnV0dG9uSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbkhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgYnV0dG9uSG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBidXR0b25Ib21lLmNsYXNzTGlzdC5hZGQoXCJidXR0b24taG9tZVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbkhvbWUpO1xuICBjb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBidXR0b25NZW51LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbWVudVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICBjb25zdCBidXR0b25BYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbkFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBidXR0b25BYm91dC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWFib3V0XCIpO1xuICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uQWJvdXQpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbn1cblxuZnVuY3Rpb24gYWRkQm9keSgpIHtcbiAgLy8gQWRkIGhlcm9cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm8pO1xuICBjb25zdCBpbWdIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nSGVyby5zcmMgPSBcIi4uL3NyYy9pbWcvc3VzaGkuanBlZ1wiO1xuICBpbWdIZXJvLmFsdCA9IFwic3VzaGkgcGljdHVyZVwiO1xuICBpbWdIZXJvLmNsYXNzTGlzdC5hZGQoXCJpbWctaGVyb1wiKTtcbiAgaGVyby5hcHBlbmRDaGlsZChpbWdIZXJvKTtcblxuICAvLyBBZGQgaW50cm9kdWN0aW9uXG4gIGNvbnN0IGludHJvZHVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBpbnRyb2R1Y3Rpb24uY2xhc3NMaXN0LmFkZChcImludHJvZHVjdGlvblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb24pO1xuICBjb25zdCBpbnRyb2R1Y3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaW50cm9kdWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG9cIjtcbiAgaW50cm9kdWN0aW9uLmFwcGVuZENoaWxkKGludHJvZHVjdGlvblRpdGxlKTtcbiAgY29uc3QgaW50cm9kdWN0aW9uUGFyYWdyYXBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnRyb2R1Y3Rpb25QYXJhZ3JhcGgxLnRleHRDb250ZW50ID0gXCJTdXNoaSBmb3IgQWxsXCI7XG4gIGludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb25QYXJhZ3JhcGgxKTtcbiAgY29uc3QgaW50cm9kdWN0aW9uUGFyYWdyYXBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnRyb2R1Y3Rpb25QYXJhZ3JhcGgyLnRleHRDb250ZW50ID1cbiAgICBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5vc3RydW0gbm9uIG1pbmltYSBlYXJ1bSwgbmVxdWUgdmVuaWFtIGZ1Z2Egdm9sdXB0YXRlcyBpcHN1bSBlcnJvciBtb2xsaXRpYSB2ZWxpdCByZW0gbWF4aW1lIHJlcGVsbGVuZHVzIGNvbnNlcXV1bnR1ciwgaWxsbyBub2JpcyB2ZXJvIGRvbG9yZXMgdW5kZSBvZmZpY2lhIHNvbHV0YSBkb2xvcmVtcXVlIGZhY2lsaXMgcGVyc3BpY2lhdGlzISBNYWduaSwgb3B0aW8gbWludXMuIFJlY3VzYW5kYWUgcGVyZmVyZW5kaXMgYXNwZXJuYXR1ciBwYXJpYXR1ciB2ZXJvIG1heGltZSBhdHF1ZSBtb2xsaXRpYSwgZG9sb3IgYXQgZG9sb3JlbXF1ZSBzYWVwZSBtaW5pbWEuXCI7XG4gIGludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb25QYXJhZ3JhcGgyKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==