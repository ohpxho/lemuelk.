type Project = {
	title: string,
	img: string,
	desc: string,
	repoUrl: string,
	webUrl: string,
	keywords: Array<string>,
	type: number
};

type AboutMe = {
	title: string,
	headline: string,
	desc: string
};

type Skill = {
	logo: string,
	title: string,
	type: string	
}

export { Project, AboutMe, Skill };