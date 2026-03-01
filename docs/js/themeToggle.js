const themeToggle =() => {

    // Get stored theme or choose system default
    document.documentElement.classList.toggle(
        'dark',
        localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) 
    )

    const themeSelect = document.querySelector('#theme-select')
    const themeDropDown = document.querySelector('.theme-dropdown')
    const toggleButton = document.querySelector('.toggle-theme')
    const lightmodeButton = document.querySelector('.lightmode')
    const darkModeButton = document.querySelector('.darkmode')
    const systemDefaultButton = document.querySelector('.system-default')

    // Toggle DropDown
    const toggleThemeDropDown =(t)=> {
        themeDropDown.classList.toggle('hidden')
    }

    const selectTheme =(event)=> {
        const selectedValue = event.target.value

        if(selectedValue === 'light') {
            setLightMode()
        } else if (selectedValue === 'dark') {
            setDarkMode()
        } else {
            restoreToSystemDefault()
        }
    }

    // Set lightmode
    const setLightMode =()=> {
       localStorage.setItem('theme','light')
       document.documentElement.classList.remove('dark')
    }


    // Set darkmode
    const setDarkMode =()=> {
        localStorage.setItem('theme','dark')
        document.documentElement.classList.add('dark')
    }


    // Restore to system default
    const restoreToSystemDefault =()=> {
       localStorage.removeItem('theme')
        document.documentElement.classList.toggle(
            'dark', 
            window.matchMedia('(prefers-color-scheme: dark)').matches
        )
    }


    // Choose active option i select box
    themeSelect.value = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system-default'

    themeSelect.addEventListener('change', selectTheme)
    toggleButton.addEventListener('click', toggleThemeDropDown)
    lightmodeButton.addEventListener('click', setLightMode)
    darkModeButton.addEventListener('click', setDarkMode)
    systemDefaultButton.addEventListener('click', restoreToSystemDefault)   

}

themeToggle()