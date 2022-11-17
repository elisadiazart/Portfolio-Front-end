const menu = document.getElementById('menu')
const hamburguer = document.getElementById('hamburguer')
const closeElement = document.getElementById('close')

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
    
});

closeElement.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
})