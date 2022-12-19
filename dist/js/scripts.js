const menuElement = document.getElementById('menu')
const hamburguerElement = document.getElementById('hamburguer')
const closeElement = document.getElementById('close')
const lineElement = document.getElementById('line')
const bodyElement = document.getElementById('body')
const cursor = document.getElementById("cursor");
const headerElement = document.getElementById("header");
const rootStyles = document.documentElement.style;
const bodyContainer = document.getElementById('body-container')
const NightModeElement = document.getElementById('toggle')
const NavElement = document.getElementById('nav')
const NightModeSwitch = document.getElementById('toggle')


hamburguerElement.addEventListener('click', () => {
  menu.classList.toggle('menu--show')
  lineElement.classList.toggle('line--cross');
  bodyElement.classList.toggle('body--menu')
  bodyElement.classList.toggle('cursor-visible')
  bodyElement.classList.toggle('no-scroll')
  NightModeElement.classList.toggle('night-mode-icon--desactive')
  NavElement.classList.toggle('white')
  
});

window.addEventListener("mousemove", (ev) => {
  rootStyles.setProperty("--x-cord", ev.x + "px");
  rootStyles.setProperty("--y-cord", ev.y + "px");
});

headerElement.addEventListener("mouseenter", () => {
  rootStyles.setProperty("--cursor-color", "#EAE1F4");
  console.log("pink");
});

const allElementsIntersection = document.querySelectorAll(
  '[data-background-color]'
);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.dataset);
          rootStyles.setProperty(
            '--background-color',
            entry.target.dataset.backgroundColor
          );
          rootStyles.setProperty(
            '--degradados-background',
            `url(../assets/images/${entry.target.dataset.backgroundImage})`
          );
        }
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);

allElementsIntersection.forEach(article => observer.observe(article));


NightModeSwitch.addEventListener('click', () => {
  if (document.body.classList.contains ('light')) {
    document.body.classList.remove('light')
  }
  else {
    document.body.classList.add('light')
  }
})