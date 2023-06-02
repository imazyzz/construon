// scroll sections

let sections = document.querySelectorAll("section");
let navbar = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top <= offset + height) {
      navbar.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Activating Burguer Menu
// show = false
let header = document.querySelector("header");
let burguer = document.querySelector("#menu-icon");
let bclose = document.querySelector("#menu-close");

burguer.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  header.classList.toggle("on");
  show = true;
});

bclose.addEventListener("click", () => {
  document.body.style.overflow = "initial";
  header.classList.remove("on");
});

navbar.forEach((e) => {
  e.addEventListener("click", () => {
    header.classList.remove("on");
    document.body.style.overflow = "initial";
  });
});
