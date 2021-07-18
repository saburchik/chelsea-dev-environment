const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 700;
if (modalLinks.length > 0) {
    for (let i = 0; i < modalLinks.length; i++) {
        const modalLink = modalLinks[i];
        modalLink.addEventListener('click', function (e) {
            const modalName = modalLink.getAttribute('href').replace('#', '');
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal);
            e.preventDefault();
        });
    }
}
const modalCloseIcon = document.querySelectorAll('.close-modal');
if (modalCloseIcon.length > 0) {
    for (let i = 0; i < modalCloseIcon.length; i++) {
        const el = modalCloseIcon[i];
        el.addEventListener('click', function (e) {
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        const modalActive = document.querySelector('.modal.open');
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        currentModal.classList.add('open');
        currentModal.addEventListener('click', function (e) {
            if (!e.target.closest('.match')) {
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}
function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.remove('open');
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
        const modalActive = document.querySelector('.modal.open');
        modalClose(modalActive);
    }
});