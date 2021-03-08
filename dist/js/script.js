const header = document.querySelector('#header');
const hamburger = document.querySelector('#burger');
const navbar = document.querySelector('#navbar');
const nav = document.querySelector('#nav');
const ham = document.querySelector('#ham__effect');

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
    if (scrollHeight > 500) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    };

    let scrollWidth = window.scrollX;
    if (scrollWidth <= 770) {
        header.classList.remove("active");
        hamburger.classList.remove("active");
        navbar.classList.remove('active');
        nav.classList.remove('active');
        ham.classList.remove('active');
    };
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}