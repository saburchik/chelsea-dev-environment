@@include('functions/hamburger.js');
@@include('functions/fixed-header.js');
@@include('functions/adaptiveWidth.js');
@@include('functions/smooth-scroll.js');

// Modal window

let modalBtns = document.querySelectorAll("*[data-modal-btn]");
let bodyScroll = document.querySelector("body");
let headerPadding = document.querySelector("header");

for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', function () {
        let name = modalBtns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = "block";
        bodyScroll.classList.toggle('hidden');
        headerPadding.classList.toggle('padding');

        let close = modal.querySelector(".closed__modal");
        close.addEventListener('click', function () {
            modal.style.display = "none";
            bodyScroll.classList.remove('hidden');
            headerPadding.classList.remove('padding');
        })

    })
}

window.onclick = function (e) {
    if (e.target.hasAttribute('data-modal-window')) {
        let modals = document.querySelectorAll("*[data-modal-window]");
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
            bodyScroll.classList.remove('hidden');
            headerPadding.classList.remove('padding');
        }
    }
}
