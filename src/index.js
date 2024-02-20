// selectors
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const content = document.querySelector("#content");

// event listeners
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.classList.add("container");
  body.appendChild(container);
  container.appendChild(header);
  container.appendChild(content);

  addHeader();

  // addBody();
  addMenu();
});

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
  nav.appendChild(buttonHome);
  const buttonMenu = document.createElement("button");
  buttonMenu.textContent = "Menu";
  nav.appendChild(buttonMenu);
  const buttonAbout = document.createElement("button");
  buttonAbout.textContent = "About";
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

  console.log("body added");
}
