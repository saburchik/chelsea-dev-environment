// == DisplayScreen > 769px all classes for burger = disable;
function widthMenu() {
    let width = window.innerWidth
    if (width > 769) {
        document.getElementById('header').classList.remove('active')
        document.getElementById('burger').classList.remove('active')
        document.getElementById('navMenu').classList.remove('active')
        document.getElementById('navItems').classList.remove('active')
        document.getElementById('effect').classList.remove('active')
    }
}

onload = () => widthMenu()
window.onresize = () => widthMenu()