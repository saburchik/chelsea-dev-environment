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
