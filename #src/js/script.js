const burger = document.getElementById('burger').onclick = function () {
    document.querySelector('.header').classList.toggle("active");
    document.querySelector('.navbar').classList.toggle("active");
    document.querySelector('.nav').classList.toggle("active");
    document.querySelector('.ham__effect').classList.toggle("active");

    document.querySelector('.navbar nav a').onclick = function () {
        document.getElementById('header').click();
    }

    // $('.menu li a').on("click", function () {
    //     $('#hamburger-menu').click();
    // });

    // var className = ' ' + burger.className + ' ';

    // if (~className.indexOf(' active ')) {
    //     this.className = className.replace(' active ', ' ');
    // } else {
    //     this.className += ' active';
    // }
}

// document.querySelector('.header').addEventListener('click', function () {
//     document.querySelector('.header').classList.toggle("active");
//     document.querySelector('.navbar').classList.toggle("active");
//     document.querySelector('.nav').classList.toggle("active");
//     document.querySelector('.ham__effect').classList.toggle("active");
// })

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
        document.getElementById('ham__effect').classList.remove("active");
    } else {
    }
}

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