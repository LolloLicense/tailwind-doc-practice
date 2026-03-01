const searchModal = () => {

    const searchModal = document.querySelector('.search-modal')
    const searchButton = document.querySelector('.search-button')
    const overlay = document.querySelector('.overlay')
    const searchClose = document.querySelector('.search-close')
    const searchInput = document.querySelector('.search-input')

    const handleKeypress = (event) => {
        if ( !event.key ) return
        // Open
        if (event.key == 'k' && (event.metaKey || event.ctrlKey)) {
            openSearchModal ()
        }
        // Close
        if(event.key == 'Escape') {
            closeSearchModal()
        }
    }

    const openSearchModal = () => {
        searchModal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        searchInput.focus()
    }

    const closeSearchModal = () => {
        searchModal.classList.add('hidden')
        overlay.classList.add('hidden')
    }

    document.addEventListener('keydown', handleKeypress)
    overlay.addEventListener('click', closeSearchModal)
    searchButton.addEventListener('click', openSearchModal)
    searchClose.addEventListener('click', closeSearchModal)

 }
searchModal()