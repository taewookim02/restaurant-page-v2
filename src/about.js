import impImgAbout from "./img/about.jpg";

function createAbout() {
  const about = document.createElement("section");
  about.classList.add("about");
  content.appendChild(about);

  // const aboutImg = document.createElement("img");
  const aboutImg = new Image();
  aboutImg.src = impImgAbout;
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

export default createAbout;
