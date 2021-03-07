let header = document.querySelector('#header');
let hamburger = document.querySelector('#burger');
let navbar = document.querySelector('#navbar');
let nav = document.querySelector('#nav');

hamburger.addEventListener('click', function () {
    header.classList.toggle("active");
    hamburger.classList.toggle("active");
    navbar.classList.toggle('active');
    nav.classList.toggle('active');
})