let hamburgerButton = document.querySelector('.hamburger')
let nav = document.querySelector('nav')
let navList = document.querySelector('#navList')


hamburgerButton.addEventListener('click', () => {
    hamburgerButton.toggleAttribute('aria-expanded')
    nav.classList.toggle('hidden')
})

nav.addEventListener('click', (e) => {
    if(!hamburgerButton.hasAttribute('aria-expanded')){
        return
    }
    if(e.target !== navList){
        hamburgerButton.toggleAttribute('aria-expanded')
        nav.classList.toggle('hidden')
    }
})