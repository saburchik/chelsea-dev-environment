// Fixed navigation
window.addEventListener("scroll", checkScroll)
function checkScroll() {
    let scrollHeight = window.scrollY

    if (scrollHeight > 490) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
}