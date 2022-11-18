const menuElement = document.getElementById('menu')
const hamburguerElement = document.getElementById('hamburguer')
const closeElement = document.getElementById('close')
const lineElement = document.getElementById('line')
const bodyElement = document.getElementById('body')
const cursor = document.getElementById("cursor");
const headerElement = document.getElementById("header");
const rootStyles = document.documentElement.style;
const bodyContainer = document.getElementById('body-container')


hamburguerElement.addEventListener('click', () => {
  menu.classList.toggle('menu--show')
  lineElement.classList.toggle('line--cross');
  bodyElement.classList.toggle('body--menu')
  bodyElement.classList.toggle('cursor-visible')

});

window.addEventListener("mousemove", (ev) => {
  rootStyles.setProperty("--x-cord", ev.x + "px");
  rootStyles.setProperty("--y-cord", ev.y + "px");
});

headerElement.addEventListener("mouseenter", () => {
  rootStyles.setProperty("--cursor-color", "#EAE1F4");
  console.log("pink");
});

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1
}

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      if (entry.target.dataset.background === 'background-color') {
        rootStyles.setProperty('--background-color', '#E1EBF4')
        rootStyles.setProperty('--degradados-background', 'url(../assets/images/degradados-blue.svg)')
        rootStyles.setProperty('--degradados-nav', 'url(../assets/images/nav-background-blue.svg)')
        rootStyles.setProperty('--cursor-color', '#E1EBF4')
      }


    }
    else {
      rootStyles.setProperty('--background-color', '#EAE1F4')
      rootStyles.setProperty('--degradados-background', 'url(../assets/images/degradados.svg)')
      rootStyles.setProperty('--degradados-nav', 'url(../assets/images/nav-background.svg)')
      rootStyles.setProperty('--cursor-color', '#EAE1F4')
    }
  })
}

const observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('.front-end'))

