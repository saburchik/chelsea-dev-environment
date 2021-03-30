// Add classes, when a burger is clicked on
const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const navbar = document.querySelector('#navbar');
const nav = document.querySelector('#nav');
const ham = document.querySelector('#effect');

burger.addEventListener('click', function () {
    header.classList.toggle('active');
    navbar.classList.toggle('active');
    nav.classList.toggle('active');
    ham.classList.toggle('active');
});
// Fixed header
window.addEventListener("scroll", checkScroll);
function checkScroll() {
    let scrollHeight = window.scrollY;

    if (scrollHeight > 550) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    };
};;
// When width display > 770px - all classes for burger - DISABLE 
onload = function () {
    widthMenu();
}

window.onresize = function () {
    widthMenu();
}

function widthMenu() {
    let width = window.innerWidth;

    if (width > 770) {
        document.getElementById('header').classList.remove("active");
        document.getElementById('burger').classList.remove("active");
        document.getElementById('navbar').classList.remove("active");
        document.getElementById('nav').classList.remove("active");
        document.getElementById('effect').classList.remove("active");
    }
};
// Smooth scroll
const links = document.querySelectorAll('a[href*="#"], [href*="#"]');

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const scrollSmooth = link.getAttribute('href').substr(1)

        document.getElementById(scrollSmooth).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        // Disable burger menu, when smooth scroll
        header.classList.remove('active');
        navbar.classList.remove('active');
        nav.classList.remove('active');
        ham.classList.remove('active');
    })
};

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