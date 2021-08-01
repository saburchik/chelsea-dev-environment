const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 700;

const windowModal = document.querySelectorAll('.window__modal');
if (windowModal.length > 0) {
    for (let i = 0; i < windowModal.length; i++) {
        const openModal = windowModal[i];
        openModal.addEventListener('click', function (e) {
            const modalReplace = openModal.getAttribute('href').replace('#', '');
            const currentModal = document.getElementById(modalReplace);
            modalOpen(currentModal);
            e.preventDefault();
        });
    }
}
const windowModalDisable = document.querySelectorAll('.modal__disable');
if (windowModalDisable.length > 0) {
    for (let i = 0; i < windowModalDisable.length; i++) {
        const el = windowModalDisable[i];
        el.addEventListener('click', function (e) {
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        const modalActive = document.querySelector('.modal.active');
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        currentModal.classList.add('active');
        currentModal.addEventListener('click', function (e) {
            if (!e.target.closest('.modal__inner')) {
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}
function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.remove('active');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

// Close Modal-Window by button ESC
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const modalActive = document.querySelector('.modal.active');
        modalClose(modalActive);
    }
});