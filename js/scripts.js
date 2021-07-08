const solutionsButton = document.getElementById('solutions');
const solutionsSection = document.getElementsByClassName('solutions')[0];

const resourcesButton = document.getElementById('resources');
const resourcesSection = document.getElementsByClassName('resources')[0];

const whyEdlyButton = document.getElementById('why-edly');
const whyEdlySection = document.getElementsByClassName('why-edly')[0];


const hamBurgerButton = document.getElementsByClassName('ham-burger')[0];
const mainHeadings = document.getElementsByClassName('main-headings')[0];



window.onresize = reportWindowSize;

reportWindowSize();

function reportWindowSize() {
    if (window.innerWidth <= 1275) {
        removeClassForMobileView();
        // addEventListenersForMobile();
    } else {
        addClassForDesktop();
    }
}


function addClassForDesktop() {
    solutionsSection.classList.add('menu-class');
    resourcesSection.classList.add('menu-class');
    whyEdlySection.classList.add('menu-class');
}


function removeClassForMobileView() {
    solutionsSection.classList.remove('menu-class');
    resourcesSection.classList.remove('menu-class');
    whyEdlySection.classList.remove('menu-class');
}


addEventListenersForMobile();


function addEventListenersForMobile () {
    $( "#solutions" )
    .click(function() {
        this.children[0].classList.toggle('mobile-drop-btn-inverted');
        resourcesSection.classList.remove('header-swipe');
        whyEdlySection.classList.remove('header-swipe');
        $( "#resources .mobile-drop-btn" )[0].classList.remove('mobile-drop-btn-inverted');
        $( "#why-edly .mobile-drop-btn" )[0].classList.remove('mobile-drop-btn-inverted');
        solutionsSection.classList.toggle('header-swipe');
    });


    $( "#resources" )
    .click(function() {
        this.children[0].classList.toggle('mobile-drop-btn-inverted');
        solutionsSection.classList.remove('header-swipe');
        whyEdlySection.classList.remove('header-swipe');
        $( "#solutions .mobile-drop-btn" )[0].classList.remove('mobile-drop-btn-inverted');
        $( "#why-edly .mobile-drop-btn" )[0].classList.remove('mobile-drop-btn-inverted');
        resourcesSection.classList.toggle('header-swipe');
    });


    $( "#why-edly" )
    .click(function() {
        this.children[0].classList.toggle('mobile-drop-btn-inverted');
        solutionsSection.classList.remove('header-swipe');
        resourcesSection.classList.remove('header-swipe');
        $( "#resources .mobile-drop-btn" )[0].classList.remove('mobile-drop-btn-inverted');
        $( "#solutions .mobile-drop-btn" )[0].classList.remove('mobile-drop-btn-inverted');
        whyEdlySection.classList.toggle('header-swipe');
    });
}


hamBurgerButton.addEventListener('click', () => {
    hamBurgerButton.classList.toggle('clicked-ham-burger');
    mainHeadings.classList.toggle('mobile-main-headings');
    $(".header").toggleClass("header-expanded");
});
