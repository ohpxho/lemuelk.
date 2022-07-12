document.addEventListener('DOMContentLoaded', () => {
	const theme = localStorage.getItem('theme');
	if(theme && theme === 'day') {
		dayThemeSetProperties();
	}

	if(theme && theme === 'dark') {
		darkThemeSetProperties();
	}
});


function changeTheme(theme) {
	if(theme === 'day') {
		dayThemeSetProperties();
		localStorage.setItem('theme','day');
	} else {
		darkThemeSetProperties();
		localStorage.setItem('theme', 'dark');
	}
}


function dayThemeSetProperties(){
	const root = document.documentElement;
	root.style.setProperty('--clr-accent', '#550a8a');
	root.style.setProperty('--clr-neutral', '#fff');
	root.style.setProperty('--clr-accent-trans-01', 'rgba(85, 10, 138, 0.1)');
	root.style.setProperty('--clr-accent-trans-04', 'rgba(85, 10, 138, 0.4)');
	root.style.setProperty('--ff-primary-clr', '#333');
}

function darkThemeSetProperties(){
	const root = document.documentElement;
	root.style.setProperty('--clr-accent', '#9e14ff');
	root.style.setProperty('--clr-neutral', '#12031c');
	root.style.setProperty('--clr-accent-trans-01', 'rgba(255, 255, 255, 0.1)');
	root.style.setProperty('--clr-accent-trans-04', 'rgba(255, 255, 255, 0.4)');
	root.style.setProperty('--ff-primary-clr', 'white');
}