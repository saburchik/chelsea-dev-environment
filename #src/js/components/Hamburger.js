// Add classes, when a burger is clicked on
const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const menu = document.querySelector('#menu');
const navLinks = document.querySelector('#navLinks');
const ham = document.querySelector('#effect');

burger.addEventListener('click', function () {
    header.classList.toggle('active');
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
    ham.classList.toggle('active');
})