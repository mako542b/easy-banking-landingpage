let hamburgerButton = document.querySelector('.hamburger')
let nav = document.querySelector('nav')
let navList = document.querySelector('#navList')


hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('hidden')
})