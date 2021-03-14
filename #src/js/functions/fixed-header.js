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