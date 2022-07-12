let options = {
		root: null, // relative to document viewport 
		rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
		threshold: 0.5 // visible amount of item shown in relation to root
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const id = entry.target.getAttribute('id');
		const style = getComputedStyle(document.body);

		if(entry.isIntersecting) {
			document.querySelector(`a[href="#${id}"]`).classList.add('text-accent-clr');
			document.querySelector(`a[href="#${id}"]`).classList.add('fs-secondary-heading');	
		} else {
			document.querySelector(`a[href="#${id}"]`).classList.remove('text-accent-clr');
			document.querySelector(`a[href="#${id}"]`).classList.add('text-primary-clr');
			document.querySelector(`a[href="#${id}"]`).classList.remove('fs-secondary-heading');
		}

		if(isLessThanMaxWidthToCollapse) {
			navListCollapse();
		}
		
	});

}, options);

const home = document.querySelector('div[id="home"]');
const about = document.querySelector('div[id="about"]');
const skills = document.querySelector('div[id="skills"]');
const projects = document.querySelector('div[id="projects"]');
const contact = document.querySelector('div[id="contact"]');

const entries = [home, about, skills, projects, contact];

entries.forEach((entry) => {
	observer.observe(entry);	
});

function navListCollapse(){
	const navlist = document.querySelector('.nav-list');
	navlist.style.opacity = 0;
    navlist.style.width = '0px';
}


function isLessThanMaxWidthToCollapse(){
	const viewportWidth = window.clientWidth;
	const maxWidthListCollapseInitiate = 576;

	if(viewportWidth < maxWidthListCollapseInitiate){
		return true;
	}

	return false;
}