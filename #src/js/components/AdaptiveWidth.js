// When width display > 769px - all classes for burger - DISABLE 
onload = function () {
    widthMenu();
}

window.onresize = function () {
    widthMenu();
}

function widthMenu() {
    let width = window.innerWidth;

    if (width > 769) {
        document.getElementById('header').classList.remove("active");
        document.getElementById('burger').classList.remove("active");
        document.getElementById('menu').classList.remove("active");
        document.getElementById('navLinks').classList.remove("active");
        document.getElementById('effect').classList.remove("active");
    }
}