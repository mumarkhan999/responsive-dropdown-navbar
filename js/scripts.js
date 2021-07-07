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


function isParent(refNode, otherNode) {
	var parent = otherNode.parentNode;
	do {
		if (refNode == parent) {
			return true;
		} else {
			parent = parent.parentNode;
		}
	} while (parent);
	return false;
}


solutionsSection.addEventListener("mouseout", function(ev){
	if (!isParent(this, ev.relatedTarget)){
        solutionsSection.classList.remove('header-swipe');
	}
}, false);

resourcesSection.addEventListener("mouseout", function(ev){
	if (!isParent(this, ev.relatedTarget)){
        resourcesSection.classList.remove('header-swipe');
	}
}, false);

whyEdlySection.addEventListener("mouseout", function(ev){
	if (!isParent(this, ev.relatedTarget)){
        whyEdlySection.classList.remove('header-swipe');
	}
}, false);


hamBurgerButton.addEventListener('click', () => {
    hamBurgerButton.classList.toggle('clicked-ham-burger');
    mainHeadings.classList.toggle('mobile-main-headings');
});
