export interface Project {
	name: string;
	project: Array<{ title: string; url: string }>;
	description?: string;
	url?: string;
	colabs?: string[];
}

const projects: Project[] = [];

const tourApp: Project = {
	name: "CaririMob",
	project: [
		{ title: "Home", url: "/assets/tour-app/HOME.jpeg" },
		{ title: "Login", url: "/assets/tour-app/LOGIN.jpeg" },
		{ title: "Points", url: "/assets/tour-app/POINTS.jpeg" },
		{ title: "Register", url: "/assets/tour-app/REGISTRAR.jpeg" },
	],
	description:
		"Application/App - Under construction, the purpose of this application is to connect tourists/residents/residents of the region, to municipal and intercity transportation means of transportation.",
	url: "https://www.figma.com/file/12M1hiONlL7pmo2ikPtyAt/Mobilidade-Cariri?node-id=0%3A1",
};

const agroMais: Project = {
	name: "Agro+",
	project: [
		{ title: "About-1", url: "/assets/agro-mais/sobre-1.jpeg" },
		{ title: "About-2", url: "/assets/agro-mais/sobre-2.jpeg" },
		{ title: "About-3", url: "/assets/agro-mais/sobre-3.jpeg" },
		{ title: "About-4", url: "/assets/agro-mais/sobre-4.jpeg" },
	],
	description:
		"Agro+Classificados aims to assist the exhibition and sales activities of small farmers and ranchers' products, considering that, often, the exhibition of their products is limited only to open fairs or non-permanent events. Furthermore, the number of customers who visit such fairs is limited to a small geographic region, usually residents of surrounding neighborhoods or cities.",
	url: "http://agromaisfeira.crato.ifce.edu.br/sobre/",
	colabs: [
		"@RenanGustavo",
		"@FranciscoLucas",
		"@YuriLacerda",
		"@RobsonFeitosa",
	],
};

const agroMaisFeira: Project = {
	name: "Agro+Feira",
	project: [
		{ title: "Home", url: "/assets/agro-mais/Agro-1.jpeg" },
		{ title: "Login", url: "/assets/agro-mais/Agro-2.jpeg" },
		{ title: "Profile", url: "/assets/agro-mais/Agro-3.jpeg" },
		{ title: "Product", url: "/assets/agro-mais/Agro-4.jpeg" },
	],
	description:
		"Project implemented in partnership with the city of Crato/CE, for a regional agricultural fair.",
	url: "http://agromaisfeira.crato.ifce.edu.br/",
	colabs: [
		"@RenanGustavo",
		"@FranciscoLucas",
		"@YuriLacerda",
		"@RobsonFeitosa",
	],
};

const caderNet: Project = {
	name: "CaderNet - Wireframe",
	project: [
		{ title: "caderNet-1", url: "/assets/CaderNet/caderNet-1.jpeg" },
		{ title: "caderNet-2", url: "/assets/CaderNet/caderNet-2.jpeg" },
		{ title: "caderNet-3", url: "/assets/CaderNet/caderNet-3.jpeg" },
		{ title: "caderNet-5", url: "/assets/CaderNet/caderNet-5.jpeg" },
		{ title: "caderNet-6", url: "/assets/CaderNet/caderNet-6.jpeg" },
		{ title: "caderNet-7", url: "/assets/CaderNet/caderNet-7.jpeg" },
		{ title: "caderNet-8", url: "/assets/CaderNet/caderNet-8.jpeg" },
		{ title: "caderNet-9", url: "/assets/CaderNet/caderNet-9.jpeg" },
		{ title: "caderNet-10", url: "/assets/CaderNet/caderNet-10.jpeg" },
		{ title: "caderNet-11", url: "/assets/CaderNet/caderNet-11.jpeg" },
	],
	description:
		"Cadernet would be a solution conceived in a test to propose a management system to resellers, available in IOS and Android.",
	url: "https://www.figma.com/file/3eHme2sO8H22oVwTC5Vwoz/CaderNet?node-id=2%3A0",
};

const cargaCheia: Project = {
	name: "Carga Cheia",
	project: [
		{
			title: "Home",
			url: "/assets/carga-cheia/carga-cheia-1.jpeg",
		},
		{
			title: "Seller",
			url: "/assets/carga-cheia/carga-cheia-2.jpeg",
		},
	],
	description:
		"This project was conceived and implemented for the Sabão Juá Hackaton, held in Juazeiro do Norte, in order to connect cargo to carriers.",
	url: "https://www.figma.com/file/Te0zlXm4mPLH5P8a6lijsh/Hackathon-Sab%C3%A3o-Ju%C3%A1?node-id=28%3A2976",

	colabs: ["@SauloJoab", "@IgorMelo", "@YuriLacerda"],
};

const rellusion: Project = {
	name: "Rellusion",
	project: [
		{
			title: "Welcome",
			url: "/assets/rellusion/Rellusion1.jpeg",
		},
		{
			title: "Home",
			url: "/assets/rellusion/Rellusion2.jpeg",
		},
		{
			title: "Details",
			url: "/assets/rellusion/Rellusion3.jpeg",
		},
	],
	description:
		"This project was conceived and implemented for NASA Space Apps Hackaton - It consists of providing planets in Augmented Reality, for a more didactic teaching.",
	url: "https://github.com/hiimlex/rellusion",

	colabs: ["@RenanGustavo", "@IgorMelo", "@PaulaMicheli"],
};

const homEvents: Project = {
	name: "HomEvents",
	project: [
		{ title: "Add", url: "/assets/homevents/add.jpg" },
		{ title: "Add", url: "/assets/homevents/add3.jpg" },
		{ title: "Add", url: "/assets/homevents/add2.jpg" },
		{ title: "Home", url: "/assets/homevents/home.jpg" },
		{ title: "Login", url: "/assets/homevents/login.jpg" },
		{ title: "Register", url: "/assets/homevents/register.jpg" },
	],
	description:
		"Right at the beginning of the pandemic, I implemented and idealized a way to share physical activities from home, HomEvents came up with the proposal to connect practitioners of any type of exercise or shared activity.",
	url: "https://github.com/hiimlex/homevents",
};

const homEventsMobile: Project = {
	name: "HomEvents - Mobile Interface",
	project: [
		{ title: "Login", url: "/assets/homevents/mobile.jpg" },
		{ title: "Home", url: "/assets/homevents/mobile2.jpg" },
		{ title: "Add", url: "/assets/homevents/mobile3.jpg" },
	],
	description:
		"Right at the beginning of the pandemic, I implemented and idealized a way to share physical activities from home, HomEvents came up with the proposal to connect practitioners of any type of exercise or shared activity.",
	url: "https://github.com/hiimlex/homevents",
};

const gitFeed: Project = {
	name: "Git Feed",
	project: [
		{ title: "Login", url: "/assets/git-feed/git-feed1.jpg" },
		{ title: "Home", url: "/assets/git-feed/git-feed2.jpg" },
		{ title: "Profile", url: "/assets/git-feed/git-feed3.jpg" },
	],
	description:
		"A feed of the latest news from users of GitHub. Similar to Twitter.",
	url: "https://github.com/hiimlex/gitfeed",
};

const githubActivity: Project = {
	name: "Github Activity",
	project: [
		{ title: "Login", url: "/assets/github-activity/github-activity1.jpg" },
		{ title: "Home", url: "/assets/github-activity/github-activity2.jpg" },
	],
	description: "A feed of the activities from the logged user.",
	url: "https://github.com/hiimlex/github-acvitity",
};

const sellMe: Project = {
	name: "SellMe",
	project: [
		{ title: "Sell", url: "/assets/sell-me/sell-me1.jpg" },
		{ title: "Sell 2", url: "/assets/sell-me/sell-me2.jpg" },
		{ title: "Sell 3", url: "/assets/sell-me/sell-me3.jpg" },
		{ title: "Sell 4", url: "/assets/sell-me/sell-me4.jpg" },
		{ title: "List", url: "/assets/sell-me/sell-me5.jpg" },
	],
	description: "SellMe is a platform to buy anything from net.",
	url: "https://github.com/hiimlex/sell-me",
};

const tuDum: Project = {
	name: "Tu Dum",
	project: [{ title: "Home", url: "/assets/tu-dum/tu-dum.jpg" }],
	description: "To-do app.",
	url: "https://github.com/hiimlex/tu-dum",
};

projects.push(
	tourApp,
	agroMais,
	caderNet,
	cargaCheia,
	rellusion,
	homEvents,
	homEventsMobile,
	agroMaisFeira,
	gitFeed,
	githubActivity,
	sellMe,
	tuDum
);

export const randomProject = (): Project => {
	return projects[Math.floor(Math.random() * projects.length)];
};

export const getProjectByName = (name: string): Project | undefined => {
	if (name) {
		const project = projects.find((p) => p.name === name);
		if (project) return project;
	}
};

export const getAllProjects = (): Project[] => {
	return projects;
};

export const getProjectSize = projects.length;
