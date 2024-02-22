import createAbout from "./about";
import createMenu from "./menu";
import "./styles.css";
import impImgLogo from "./img/logo.png";
import impImgHero from "./img/sushi.jpeg";

// selectors
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const content = document.querySelector("#content");
console.log("hehe");
// get  buttons
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
    .addEventListener("click", handleButtonClick(createMenu));
  document
    .querySelector(".button-about")
    .addEventListener("click", handleButtonClick(createAbout));
}

function addHeader() {
  // Add logo image
  // const imgLogo = document.createElement("img");
  const imgLogo = new Image();
  imgLogo.src = impImgLogo;
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
  const imgHero = new Image();
  // const imgHero = document.createElement("img");
  imgHero.src = impImgHero;
  // imgHero.src = "../src/img/sushi.jpeg";
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
