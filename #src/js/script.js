// Add classes, when a burger is clicked on
const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const navbar = document.querySelector('#navbar');
const nav = document.querySelector('#nav');
const ham = document.querySelector('#effect');

burger.addEventListener('click', function () {
    header.classList.toggle('active');
    navbar.classList.toggle('active');
    nav.classList.toggle('active');
    ham.classList.toggle('active');
})

// When width display > 770px - all classes for burger - DISABLE 
onload = function () {
    toggleMenu();
}

window.onresize = function () {
    toggleMenu();
}

function toggleMenu() {
    let width = window.innerWidth;

    if (width > 770) {
        document.getElementById('header').classList.remove("active");
        document.getElementById('burger').classList.remove("active");
        document.getElementById('navbar').classList.remove("active");
        document.getElementById('nav').classList.remove("active");
        document.getElementById('effect').classList.remove("active");
    }
}

// Fixed header
window.addEventListener("scroll", checkScroll);
function checkScroll() {
    let scrollHeight = window.scrollY;

    if (scrollHeight > 550) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    };
};

// Smooth scroll
const links = document.querySelectorAll('a[href*="#"], [href*="#"]');

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const scrollSmooth = link.getAttribute('href').substr(1)

        document.getElementById(scrollSmooth).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        // Disable burger menu, when smooth scroll
        header.classList.remove('active');
        navbar.classList.remove('active');
        nav.classList.remove('active');
        ham.classList.remove('active');
    })
}