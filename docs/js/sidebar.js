const sidebar = () => {

    // Get elements DOM
const sidebar = document.querySelector('.sidebar')
const sidebarButtonOpen = document.querySelector('.sidebar-open')
const sidebarButtonClose = document.querySelector('.sidebar-close')
const overlay = document.querySelector('.overlay')

const openSidebar = () => {
    sidebar.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeSidebar = () => {
    sidebar.classList.add('hidden')
    overlay.classList.add('hidden')
}

sidebarButtonOpen.addEventListener('click', openSidebar)
sidebarButtonClose.addEventListener('click', closeSidebar)

}

sidebar()