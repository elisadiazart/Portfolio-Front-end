const menuElement = document.getElementById('menu')
const hamburguerElement = document.getElementById('hamburguer')
const closeElement = document.getElementById('close')
const lineElement = document.getElementById('line')
const bodyElement = document.getElementById('body')
const cursor = document.getElementById("cursor");
const headerElement = document.getElementById("header");
const rootStyles = document.documentElement.style;
const bodyContainer = document.getElementById('body-container')
const NightModeElement = document.getElementById('night-mode')


hamburguerElement.addEventListener('click', () => {
  menu.classList.toggle('menu--show')
  lineElement.classList.toggle('line--cross');
  bodyElement.classList.toggle('body--menu')
  bodyElement.classList.toggle('cursor-visible')
  bodyElement.classList.toggle('no-scroll')
  NightModeElement.classList.toggle('night-mode-icon--desactive')

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
  rootMargin: '0px',
  threshold: 0.3
}

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target.dataset)

      if (entry.target.dataset.background) {
        if (entry.target.dataset.background === 'blue') {
          rootStyles.setProperty('--background-color', '#E1EBF4')
          rootStyles.setProperty('--degradados-background', 'url(../assets/images/degradados-blue.svg)')
          rootStyles.setProperty('--degradados-nav', 'url(../assets/images/nav-background-blue.svg)')
          rootStyles.setProperty('--cursor-color', '#E1EBF4')
        } else if (entry.target.dataset.background === 'green') {
          rootStyles.setProperty('--background-color', '#E1F4ED')
          rootStyles.setProperty('--degradados-background', 'url(../assets/images/degradados-green.svg)')
          rootStyles.setProperty('--degradados-nav', 'url(../assets/images/nav-background-green.svg)')
          rootStyles.setProperty('--cursor-color', '#E1F4ED')
        }
      } else {
        rootStyles.setProperty('--background-color', '#EAE1F4')
        rootStyles.setProperty('--degradados-background', 'url(../assets/images/degradados.svg)')
        rootStyles.setProperty('--degradados-nav', 'url(../assets/images/nav-background.svg)')
        rootStyles.setProperty('--cursor-color', '#EAE1F4')

      }


    }
  })
}



const observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('.front-end'))
observer.observe(document.querySelector('.graphic-UI'))

console.log('hola')
