/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
    .addEventListener("click", handleButtonClick(addMenu));
  document
    .querySelector(".button-about")
    .addEventListener("click", handleButtonClick(addAbout));
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

function addAbout() {
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

function addMenu() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEIsV0FBVyxpQkFBaUI7QUFDNUIsK0JBQStCLFdBQVc7QUFDMUM7O0FBRUE7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdjIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2VsZWN0b3JzXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4vLyBnZXQgYnV0dG9uc1xuY29uc3QgYnV0dG9uSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWhvbWVcIik7XG5jb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbWVudVwiKTtcbmNvbnN0IGJ1dHRvbkFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYWJvdXRcIik7XG5cbi8vIGV2ZW50IGxpc3RlbmVyc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBhZGRIZWFkZXIoKTtcbiAgYWRkQm9keSgpO1xuICBhZGRCdXR0b25MaXN0ZW5lcnMoKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMoKSB7XG4gIGZ1bmN0aW9uIGNsZWFyQWN0aXZlU3RhdGVzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGNvbnRlbnRVcGRhdGVyKSB7XG4gICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY2xlYXJBY3RpdmVTdGF0ZXMoKTtcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgY29udGVudFVwZGF0ZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5idXR0b24taG9tZVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQnV0dG9uQ2xpY2soYWRkQm9keSkpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1tZW51XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCdXR0b25DbGljayhhZGRNZW51KSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWFib3V0XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCdXR0b25DbGljayhhZGRBYm91dCkpO1xufVxuXG5mdW5jdGlvbiBhZGRIZWFkZXIoKSB7XG4gIC8vIEFkZCBsb2dvIGltYWdlXG4gIGNvbnN0IGltZ0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWdMb2dvLnNyYyA9IFwiLi4vc3JjL2ltZy9sb2dvLnBuZ1wiO1xuICBpbWdMb2dvLmFsdCA9IFwibG9nb1wiO1xuICBpbWdMb2dvLmNsYXNzTGlzdC5hZGQoXCJpbWctbG9nb1wiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGltZ0xvZ28pO1xuXG4gIC8vIEFkZCBuYXZcbiAgY29uc3QgYnV0dG9uSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbkhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgYnV0dG9uSG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBidXR0b25Ib21lLmNsYXNzTGlzdC5hZGQoXCJidXR0b24taG9tZVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbkhvbWUpO1xuICBjb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBidXR0b25NZW51LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbWVudVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICBjb25zdCBidXR0b25BYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbkFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBidXR0b25BYm91dC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWFib3V0XCIpO1xuICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uQWJvdXQpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbn1cblxuZnVuY3Rpb24gYWRkQWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgY29uc3QgYWJvdXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBhYm91dEltZy5zcmMgPSBcIi4uL3NyYy9pbWcvYWJvdXQuanBnXCI7XG4gIGFib3V0SW1nLmFsdCA9IFwiYWJvdXQgcGljdHVyZVwiO1xuICBhYm91dEltZy5jbGFzc0xpc3QuYWRkKFwiaW1nLWFib3V0XCIpO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dEltZyk7XG5cbiAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIjtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gIGNvbnN0IGFib3V0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFib3V0UGFyYWdyYXBoLnRleHRDb250ZW50ID1cbiAgICBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5vc3RydW0gbm9uIG1pbmltYSBlYXJ1bSwgbmVxdWUgdmVuaWFtIGZ1Z2Egdm9sdXB0YXRlcyBpcHN1bSBlcnJvciBtb2xsaXRpYSB2ZWxpdCByZW0gbWF4aW1lIHJlcGVsbGVuZHVzIGNvbnNlcXV1bnR1ciwgaWxsbyBub2JpcyB2ZXJvIGRvbG9yZXMgdW5kZSBvZmZpY2lhIHNvbHV0YSBkb2xvcmVtcXVlIGZhY2lsaXMgcGVyc3BpY2lhdGlzISBNYWduaSwgb3B0aW8gbWludXMuIFJlY3VzYW5kYWUgcGVyZmVyZW5kaXMgYXNwZXJuYXR1ciBwYXJpYXR1ciB2ZXJvIG1heGltZSBhdHF1ZSBtb2xsaXRpYSwgZG9sb3IgYXQgZG9sb3JlbXF1ZSBzYWVwZSBtaW5pbWEuXCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gYWRkTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIC8vIGFkZCBtdWx0aXBsZSBtZW51IGl0ZW1zXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlN1c2hpIDFcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcImxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXRcIixcbiAgICAgIHByaWNlOiAxMCxcbiAgICAgIHNyYzogXCIuLi9zcmMvaW1nL3N1c2hpMS5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3VzaGkgMlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFwiLFxuICAgICAgcHJpY2U6IDIwLFxuICAgICAgc3JjOiBcIi4uL3NyYy9pbWcvc3VzaGkyLmpwZWdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3VzaGkgM1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFwiLFxuICAgICAgcHJpY2U6IDMwLFxuICAgICAgc3JjOiBcIi4uL3NyYy9pbWcvc3VzaGkzLmpwZWdcIixcbiAgICB9LFxuICBdO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGV4dFwiKTtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWVudUl0ZW1UZXh0LmlubmVySFRNTCA9IGBcbiAgICAgIDxoMz4ke2l0ZW0ubmFtZX08L2gzPlxuICAgICAgPHA+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzPVwibWVudS1wcmljZVwiPiQke2l0ZW0ucHJpY2V9PC9wPlxuICAgIGA7XG5cbiAgICBtZW51SXRlbUltZy5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIHNyYz1cIiR7aXRlbS5zcmN9XCIgYWx0PVwiU3VzaGkgJHtpfVwiIGNsYXNzPVwiaW1nLW1lbnUtaXRlbVwiIC8+XG4gICAgYDtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEJvZHkoKSB7XG4gIC8vIEFkZCBoZXJvXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcbiAgY29uc3QgaW1nSGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZ0hlcm8uc3JjID0gXCIuLi9zcmMvaW1nL3N1c2hpLmpwZWdcIjtcbiAgaW1nSGVyby5hbHQgPSBcInN1c2hpIHBpY3R1cmVcIjtcbiAgaW1nSGVyby5jbGFzc0xpc3QuYWRkKFwiaW1nLWhlcm9cIik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaW1nSGVybyk7XG5cbiAgLy8gQWRkIGludHJvZHVjdGlvblxuICBjb25zdCBpbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaW50cm9kdWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbnRyb2R1Y3Rpb25cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50cm9kdWN0aW9uKTtcbiAgY29uc3QgaW50cm9kdWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGludHJvZHVjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvXCI7XG4gIGludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb25UaXRsZSk7XG4gIGNvbnN0IGludHJvZHVjdGlvblBhcmFncmFwaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9kdWN0aW9uUGFyYWdyYXBoMS50ZXh0Q29udGVudCA9IFwiU3VzaGkgZm9yIEFsbFwiO1xuICBpbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQoaW50cm9kdWN0aW9uUGFyYWdyYXBoMSk7XG4gIGNvbnN0IGludHJvZHVjdGlvblBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9kdWN0aW9uUGFyYWdyYXBoMi50ZXh0Q29udGVudCA9XG4gICAgXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOb3N0cnVtIG5vbiBtaW5pbWEgZWFydW0sIG5lcXVlIHZlbmlhbSBmdWdhIHZvbHVwdGF0ZXMgaXBzdW0gZXJyb3IgbW9sbGl0aWEgdmVsaXQgcmVtIG1heGltZSByZXBlbGxlbmR1cyBjb25zZXF1dW50dXIsIGlsbG8gbm9iaXMgdmVybyBkb2xvcmVzIHVuZGUgb2ZmaWNpYSBzb2x1dGEgZG9sb3JlbXF1ZSBmYWNpbGlzIHBlcnNwaWNpYXRpcyEgTWFnbmksIG9wdGlvIG1pbnVzLiBSZWN1c2FuZGFlIHBlcmZlcmVuZGlzIGFzcGVybmF0dXIgcGFyaWF0dXIgdmVybyBtYXhpbWUgYXRxdWUgbW9sbGl0aWEsIGRvbG9yIGF0IGRvbG9yZW1xdWUgc2FlcGUgbWluaW1hLlwiO1xuICBpbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQoaW50cm9kdWN0aW9uUGFyYWdyYXBoMik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=