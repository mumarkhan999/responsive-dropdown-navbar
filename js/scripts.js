const solutionsButton = document.getElementById('solutions');
const solutionsSection = document.getElementsByClassName('solutions')[0];

const resourcesButton = document.getElementById('resources');
const resourcesSection = document.getElementsByClassName('resources')[0];

const whyEdlyButton = document.getElementById('why-edly');
const whyEdlySection = document.getElementsByClassName('why-edly')[0];


const hamBurgerButton = document.getElementsByClassName('ham-burger')[0];
const mainHeadings = document.getElementsByClassName('main-headings')[0];

// window.onresize = reportWindowSize;

// reportWindowSize();

// function reportWindowSize() {
//     if (window.innerWidth <= 1275) {
//         addStartingEventListener('click', 'mouseover');
//     } else {
//         addStartingEventListener('mouseover', 'click');
//     }
// }


// function addStartingEventListener(startingEvent, removeEvent) {
//     console.log(startingEvent + ' ' + removeEvent);

//     solutionsButton.removeEventListener(removeEvent, () => {});
//     resourcesButton.removeEventListener(removeEvent, () => {});
//     whyEdlyButton.removeEventListener(removeEvent, () => {});



// }


solutionsButton.addEventListener('click', () => {
    solutionsSection.classList.toggle('header-swipe');
});

resourcesButton.addEventListener('click', () => {
    resourcesSection.classList.toggle('header-swipe');
});

whyEdlyButton.addEventListener('click', () => {
    whyEdlySection.classList.toggle('header-swipe');
});



solutionsSection.addEventListener('mouseout', () => {
    solutionsSection.classList.remove('header-swipe');
});


resourcesSection.addEventListener('mouseout', () => {
    resourcesSection.classList.remove('header-swipe');
});


whyEdlySection.addEventListener('mouseout', () => {
    whyEdlySection.classList.remove('header-swipe');
});


hamBurgerButton.addEventListener('click', () => {
    hamBurgerButton.classList.toggle('clicked-ham-burger');
    mainHeadings.classList.toggle('mobile-main-headings');
});
