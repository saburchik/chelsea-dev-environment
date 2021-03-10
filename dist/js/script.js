// const header = document.querySelector('#header');
const hamburger = document.querySelector('#header, #burger, #navbar, #nav, #ham__effect');
// const navbar = document.querySelector('#navbar');
// const nav = document.querySelector('#nav');
// const ham = document.querySelector('#ham__effect');

hamburger.addEventListener('click', function () {
    header.classList.toggle("active");
    hamburger.classList.toggle("active");
    navbar.classList.toggle('active');
    nav.classList.toggle('active');
    ham.classList.toggle('active');
})

window.addEventListener("scroll", checkScroll);

function checkScroll() {
    let scrollHeight = window.scrollY;

    if (scrollHeight > 550) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    };

    let scrollWidth = window.scrollY;
    if (scrollWidth >= 770) {
        header.classList.remove("active");
        hamburger.classList.remove("active");
        navbar.classList.remove('active');
        nav.classList.remove('active');
        ham.classList.remove('active');
    }
}

// Smooth scroll
const links = document.querySelectorAll('a[href*="#"], [href*="#"]')

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const scrollSmooth = link.getAttribute('href').substr(1)

        document.getElementById(scrollSmooth).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}