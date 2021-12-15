// == Testing on webp format:
function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2)
    }
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp')
    } else {
        document.querySelector('body').classList.add('no-webp')
    }
})

@@include('components/Hamburger.js');
@@include('components/FixedHeader.js');
@@include('components/AdaptiveWidth.js');
@@include('components/SmoothScroll.js');
@@include('components/ModalWindow.js');
@@include('components/Charts.js');

// == Stopping page reloading:
const btnJoin = document.querySelector('#btnJoin')
btnJoin.addEventListener('click', () => event.preventDefault())