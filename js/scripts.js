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
        addEventListenersForMobile();
    } else {
        addEventListenersForDesktop();
    }
}


function addEventListenersForMobile () {
    $( "#solutions" ).off();
    $( "#solutions" )
    .click(function() {
        this.children[0].classList.toggle('mobile-drop-btn-inverted');
        resourcesSection.classList.remove('header-swipe');
        whyEdlySection.classList.remove('header-swipe');
        solutionsSection.classList.toggle('header-swipe');
    });

    $( ".solutions" ).off();


    $( "#resources" ).off();
    $( "#resources" )
    .click(function() {
        this.children[0].classList.toggle('mobile-drop-btn-inverted');
        solutionsSection.classList.remove('header-swipe');
        whyEdlySection.classList.remove('header-swipe');
        resourcesSection.classList.toggle('header-swipe');
    });

    $( ".resources" ).off();


    $( "#why-edly" ).off();
    $( "#why-edly" )
    .click(function() {
        this.children[0].classList.toggle('mobile-drop-btn-inverted');
        solutionsSection.classList.remove('header-swipe');
        resourcesSection.classList.remove('header-swipe');
        whyEdlySection.classList.toggle('header-swipe');
    });

    $( ".why-edly" ).off();

}


function addEventListenersForDesktop () {
    $( "#solutions" ).off();
    $( "#solutions" )
    .mouseover(function() {
        solutionsSection.classList.add('header-swipe');
        resourcesSection.classList.remove('header-swipe');
        whyEdlySection.classList.remove('header-swipe');
    });

    $( "#solutions" )
    .mouseleave(function() {
        solutionsSection.classList.remove('header-swipe');
    });


    $( "#resources" ).off();
    $( "#resources" )
    .mouseover(function() {
        solutionsSection.classList.remove('header-swipe');
        resourcesSection.classList.add('header-swipe');
        whyEdlySection.classList.remove('header-swipe');
    });

    $( "#resources" )
    .mouseleave(function() {
        resourcesSection.classList.remove('header-swipe');
    });


    $( "#why-edly" ).off();
    $( "#why-edly" )
    .mouseover(function() {
        solutionsSection.classList.remove('header-swipe');
        resourcesSection.classList.remove('header-swipe');
        whyEdlySection.classList.add('header-swipe');
    });

    $( "#why-edly" )
    .mouseleave(function() {
        whyEdlySection.classList.remove('header-swipe');
    });

}


hamBurgerButton.addEventListener('click', () => {
    hamBurgerButton.classList.toggle('clicked-ham-burger');
    mainHeadings.classList.toggle('mobile-main-headings');
    $(".header").toggleClass("header-expanded");
});
