// Add classes, when a burger is clicked on
const burger = document.querySelector('#burger')
const header = document.querySelector('#header')
const navMenu = document.querySelector('#navMenu')
const navItems = document.querySelector('#navItems')
const ham = document.querySelector('#effect')

burger.addEventListener('click', function () {
    header.classList.toggle('active')
    navMenu.classList.toggle('active')
    navItems.classList.toggle('active')
    ham.classList.toggle('active')
})