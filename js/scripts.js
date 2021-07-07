const solutionsButton = document.getElementById('solutions');
const solutionsSection = document.getElementsByClassName('solutions')[0];

const resourcesButton = document.getElementById('resources');
const resourcesSection = document.getElementsByClassName('resources')[0];

const whyEdlyButton = document.getElementById('why-edly');
const whyEdlySection = document.getElementsByClassName('why-edly')[0];


const hamBurgerButton = document.getElementsByClassName('ham-burger')[0];
const mainHeadings = document.getElementsByClassName('main-headings')[0];


solutionsButton.addEventListener('mouseover', () => {
    solutionsSection.classList.toggle('header-swipe');
});

solutionsButton.addEventListener('mouseout', () => {
    solutionsSection.classList.toggle('header-swipe');
});


resourcesButton.addEventListener('mouseover', () => {
    resourcesSection.classList.toggle('header-swipe');
});

resourcesButton.addEventListener('mouseout', () => {
    resourcesSection.classList.toggle('header-swipe');
});


whyEdlyButton.addEventListener('mouseover', () => {
    whyEdlySection.classList.toggle('header-swipe');
});

whyEdlyButton.addEventListener('mouseout', () => {
    whyEdlySection.classList.toggle('header-swipe');
});

hamBurgerButton.addEventListener('click', () => {
    hamBurgerButton.classList.toggle('clicked-ham-burger');
    mainHeadings.classList.toggle('mobile-main-headings');
});
