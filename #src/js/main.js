@@include('functions/hamburger.js');
@@include('functions/fixed-header.js');
@@include('functions/adaptiveWidth.js');
@@include('functions/smooth-scroll.js');

// Modal window

let modalBtns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', function () {
        let name = modalBtns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = "block";
        document.querySelector("body").classList.toggle('active');
        document.querySelector("header").classList.toggle('padding');

        let close = modal.querySelector(".closed__modal");
        close.addEventListener('click', function () {
            modal.style.display = "none";
        })
    })
}

window.onclick = function (e) {
    if (e.target.hasAttribute('data-modal-window')) {
        let modals = document.querySelectorAll("*[data-modal-window]");
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
            document.querySelector("body").classList.remove('active');
            document.querySelector("header").classList.remove('padding');
        }
    }
}

// To stop scroll

/* when modal is opened */











// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = lockPaddingValue;
//         }
//     }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnlock() {
//     setTimeout(function () {
//         if (lockPadding.length > 0) {
//             for (let index = 0; index < lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//             }
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }
