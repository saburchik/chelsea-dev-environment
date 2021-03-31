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
        event.preventDefault();

        const modal = event.target.closest(`.${CLASS_LIST.MODAL}`)

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

// css

// .modal {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 9999;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, .4);
//     transition: .2s;
//     visibility: hidden;
//     opacity: 0;
// }

// .modal__dialog {
//     max-height: 80vh;
//     display: flex;
//     flex-direction: column;
//     overflow: hidden;
//     background-color: #fff;
//     border-radius: 8px;
//     transition: .2s;
//     transform: translateY(-50px);
// }

// .modal__dialog-body {
//     flex-grow: 1;
//     overflow: auto;
// }

// .modal--s .modal__dialog {
//     width: 300px;
// }

// .modal--m .modal__dialog {
//     width: 600px;
// }

// .modal--l .modal__dialog {
//     width: 900px;
// }

// .modal--screen-height .modal__dialog {
//     height: 80vh;
// }

// .modal--active {
//     visibility: visible;
//     opacity: 1;
// }

// .modal--active .modal__dialog {
//     transform: translateY(0);
// }

// html

{/* <div class="modal modal--l" id="modal-1">
                            <div class="modal__dialog">
                                <div class="modal__dialog-header">
                                    <div class="modal__dialog-header-content">
                                        Modal Window 1
                                    </div>
                                    <div class="modal__dialog-header-close">
                                        <button class="js-modal-close modal__dialog-header-close-btn">
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="modal__dialog-body">
                                    <div>modal__dialog-body</div>
                                </div>
                                <div class="modal__dialog-footer">
                                    <button class="js-modal-close btn-close">Close</button>
                                </div>
                            </div>
                        </div> */}