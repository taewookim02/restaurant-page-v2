(()=>{const e=document.querySelector("body"),t=document.querySelector("header"),n=document.querySelector(".nav"),o=document.querySelector("#content");document.addEventListener("DOMContentLoaded",(()=>{!function(){const d=document.createElement("div");d.classList.add("container"),e.appendChild(d),d.appendChild(t),d.appendChild(o);const i=document.createElement("img");i.src="../src/img/logo.png",i.alt="logo",i.classList.add("img-logo"),t.appendChild(i);const a=document.createElement("button");a.textContent="Home",n.appendChild(a);const c=document.createElement("button");c.textContent="Menu",n.appendChild(c);const l=document.createElement("button");l.textContent="About",n.appendChild(l),t.appendChild(n);const s=document.createElement("section");s.classList.add("hero"),o.appendChild(s);const m=document.createElement("img");m.src="../src/img/sushi.jpeg",m.alt="sushi picture",m.classList.add("img-hero"),s.appendChild(m);const r=document.createElement("section");r.classList.add("introduction"),o.appendChild(r);const u=document.createElement("h2");u.textContent="Welcome to",r.appendChild(u);const p=document.createElement("p");p.textContent="Sushi for All",r.appendChild(p);const h=document.createElement("p");h.textContent="lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non minima earum, neque veniam fuga voluptates ipsum error mollitia velit rem maxime repellendus consequuntur, illo nobis vero dolores unde officia soluta doloremque facilis perspiciatis! Magni, optio minus. Recusandae perferendis aspernatur pariatur vero maxime atque mollitia, dolor at doloremque saepe minima.",r.appendChild(h),console.log("body added")}()}))})();