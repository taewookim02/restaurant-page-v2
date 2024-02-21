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

export default createMenu;
