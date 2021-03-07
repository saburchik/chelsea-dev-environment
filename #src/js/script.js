let header = document.querySelector('#header');
let hamburger = document.querySelector('#burger');
let navbar = document.querySelector('#navbar');
let nav = document.querySelector('#nav');
let scrolling = document.querySelector("[data-scroll]");

hamburger.addEventListener('click', function () {
    header.classList.toggle("active");
    hamburger.classList.toggle("active");
    navbar.classList.toggle('active');
    nav.classList.toggle('active');
})

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;

    if (scrollPos > 600) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}

const navbarMenu = document.querySelector(".nav .navbar");
const navbarLinks = document.querySelectorAll(".nav a");

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

    smoothScroll(event); // Call the "smoothScroll" function

    if (navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
        navbarToggler.click();
    }

}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: targetId === "#" ? 0 : document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    });
}