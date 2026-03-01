const responsiveMenu = () => {

const menuButton = document.querySelector('.menu-button')
const menuClose = document.querySelector('.menu-close')
const menu = document.querySelector('.responsive-menu')
const overlay = document.querySelector('.overlay')

const openMenu = () => {
    overlay.classList.remove('hidden')
    menu.classList.remove('hidden')
}

const closeMenu = () => {
    overlay.classList.add('hidden')
    menu.classList.add('hidden')
}

overlay.addEventListener('click', closeMenu)
menuClose.addEventListener('click', closeMenu)
menuButton.addEventListener('click', openMenu)

}


responsiveMenu()