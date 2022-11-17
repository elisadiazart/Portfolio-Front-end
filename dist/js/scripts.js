const menuElement = document.getElementById('menu')
const hamburguerElement = document.getElementById('hamburguer')
const closeElement = document.getElementById('close')
const lineElement = document.getElementById('line')
const bodyElement = document.getElementById('body')
const cursor = document.getElementById("cursor");
const headerElement = document.getElementById("header");
const rootStyles = document.documentElement.style;


hamburguerElement.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
    lineElement.classList.toggle('line--cross');
    bodyElement.classList.toggle('body--menu')
});

window.addEventListener("mousemove", (ev) => {
  rootStyles.setProperty("--x-cord", ev.x + "px");
  rootStyles.setProperty("--y-cord", ev.y + "px");
});

headerElement.addEventListener("mouseenter", () => {
  rootStyles.setProperty("--cursor-color", "#EAE1F4");
  console.log("pink");
});