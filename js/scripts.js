const solutionsButton = document.getElementById('solutions')
const solutionsSection = document.getElementsByClassName('solutions')[0]

solutionsButton.addEventListener('click', () => {
    solutionsSection.classList.toggle('header-swipe')
    console.log('hahaha');
})
