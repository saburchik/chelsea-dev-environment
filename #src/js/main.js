@@include('functions/hamburger.js');
@@include('functions/fixed-header.js');
@@include('functions/adaptiveWidth.js');
@@include('functions/smooth-scroll.js');

// Modal window

// let modalBtns = document.querySelectorAll("*[data-modal-btn]");

// for (let i = 0; i < modalBtns.length; i++) {
//     modalBtns[i].addEventListener('click', function () {
//         let name = modalBtns[i].getAttribute('data-modal-btn');
//         let modal = document.querySelector("[data-modal-window='" + name + "']");
//         modal.style.display = "block";

//         let close = modal.querySelector(".closed__modal");
//         close.addEventListener('click', function () {
//             modal.style.display = "none";
//         })

//     })
// }

// window.onclick = function (e) {
//     if (e.target.hasAttribute('data-modal-window')) {
//         let modals = document.querySelectorAll("*[data-modal-window]");
//         for (let i = 0; i < modals.length; i++) {
//             modals[i].style.display = "none";
//         }
//     }
// }

const CLASS_LIST = {
    MODAL: 'modal',
    MODAL_ACTIVE: 'modal--active',
    MODAL_HAS_SCROLL: 'modal--has-scroll',
    MODAL_DIALOG_BODY: 'modal__dialog-body',
    TRIGGER_OPEN: 'js-modal-open',
    TRIGGER_CLOSE: 'js-modal-close',
}

const showScroll = (event) => {
    if (event.propertyName === 'transform') {
        document.body.style.paddingRight = '';
        document.body.style.overflow = 'visible';

        event.target.closest(`.${CLASS_LIST.MODAL}`).removeEventListener('transitionend', showScroll);
    }
}

document.addEventListener('click', (event) => {
    // open
    if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
        console.log('open');
        event.preventDefault();

        const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
        const modalId = target.getAttribute('href').replace('#', '');
        const modal = document.getElementById(modalId);

        document.body.style.paddingRight = `${getScrollbarWidth()}px`;
        document.body.style.overflow = 'hidden';

        modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
    }

    // close 
    if (
        event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
        event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
    ) {
        console.log('close');
        event.preventDefault();

        const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);

        modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);

        modal.addEventListener('transitionend', showScroll);
    }
});

const getScrollbarWidth = () => {
    const item = document.createElement('div');

    item.style.position = 'absolute';
    item.style.top = '-9999px';
    item.style.width = '50px';
    item.style.height = '50px';
    item.style.overflow = 'scroll';
    item.style.visibility = 'hidden';


    document.body.appendChild(item);
    const scrollBarWidth = item.offsetWidth - item.clientWidth;
    document.body.removeChild(item);

    return scrollBarWidth;
}