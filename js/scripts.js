const solutionsButton = document.getElementById('solutions')
const solutionsSection = document.getElementsByClassName('solutions')[0]

const resourcesButton = document.getElementById('resources')
const resourcesSection = document.getElementsByClassName('resources')[0]

const whyEdlyButton = document.getElementById('why-edly')
const whyEdlySection = document.getElementsByClassName('why-edly')[0]



solutionsButton.addEventListener('mouseover', () => {
    solutionsSection.classList.toggle('header-swipe')
})

solutionsButton.addEventListener('mouseout', () => {
    solutionsSection.classList.toggle('header-swipe')
})


resourcesButton.addEventListener('mouseover', () => {
    resourcesSection.classList.toggle('header-swipe')
})

resourcesButton.addEventListener('mouseout', () => {
    resourcesSection.classList.toggle('header-swipe')
})


whyEdlyButton.addEventListener('mouseover', () => {
    whyEdlySection.classList.toggle('header-swipe')
})

whyEdlyButton.addEventListener('mouseout', () => {
    whyEdlySection.classList.toggle('header-swipe')
})
