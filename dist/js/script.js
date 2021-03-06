
let hamburger = document.querySelector('#burger');
let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})

function lockScroll() {
    if ($('body').hasClass('lock-scroll')) {
        $('body').removeClass('lock-scroll');
    } else {
        $('body').addClass('lock-scroll');
    }
}