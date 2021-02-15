let hamburger = document.querySelector('#burger');
let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})