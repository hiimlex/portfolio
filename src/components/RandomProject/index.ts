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
		{ title: "home", url: "/assets/tour-app/HOME.jpeg" },
		{ title: "login", url: "/assets/tour-app/LOGIN.jpeg" },
		{ title: "points", url: "/assets/tour-app/POINTS.jpeg" },
		{ title: "registrar", url: "/assets/tour-app/REGISTRAR.jpeg" },
	],
	description:
		"Application/App - Under construction, the purpose of this application is to connect tourists/residents/residents of the region, to municipal and intercity transportation means of transportation.",
	url: "https://www.figma.com/file/12M1hiONlL7pmo2ikPtyAt/Mobilidade-Cariri?node-id=0%3A1",
};

const agroMais: Project = {
	name: "Agro+",
	project: [
		{ title: "sobre-1", url: "/assets/agro-mais/sobre-1.jpeg" },
		{ title: "sobre-2", url: "/assets/agro-mais/sobre-2.jpeg" },
		{ title: "sobre-3", url: "/assets/agro-mais/sobre-3.jpeg" },
		{ title: "sobre-4", url: "/assets/agro-mais/sobre-4.jpeg" },
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
		{ title: "sobre-1", url: "/assets/agro-mais/sobre-1.jpeg" },
		{ title: "sobre-2", url: "/assets/agro-mais/sobre-2.jpeg" },
		{ title: "sobre-3", url: "/assets/agro-mais/sobre-3.jpeg" },
		{ title: "sobre-4", url: "/assets/agro-mais/sobre-4.jpeg" },
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
			title: "home",
			url: "/assets/carga-cheia/carga-cheia-1.jpeg",
		},
		{
			title: "home",
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
			title: "home",
			url: "/assets/rellusion/Rellusion1.jpeg",
		},
		{
			title: "home",
			url: "/assets/rellusion/Rellusion2.jpeg",
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
		{ title: "home", url: "/assets/homevents/add.jpg" },
		{ title: "home", url: "/assets/homevents/add3.jpg" },
		{ title: "home", url: "/assets/homevents/add2.jpg" },
		{ title: "home", url: "/assets/homevents/home.jpg" },
		{ title: "home", url: "/assets/homevents/login.jpg" },
		{ title: "home", url: "/assets/homevents/register.jpg" },
	],
	description:
		"Right at the beginning of the pandemic, I implemented and idealized a way to share physical activities from home, HomEvents came up with the proposal to connect practitioners of any type of exercise or shared activity.",
	url: "https://github.com/hiimlex/homevents",
};

const homEventsMobile: Project = {
	name: "HomEvents - Mobile Interface",
	project: [
		{ title: "home", url: "/assets/homevents/mobile.jpg" },
		{ title: "home", url: "/assets/homevents/mobile2.jpg" },
		{ title: "home", url: "/assets/homevents/mobile3.jpg" },
	],
	description:
		"Right at the beginning of the pandemic, I implemented and idealized a way to share physical activities from home, HomEvents came up with the proposal to connect practitioners of any type of exercise or shared activity.",
	url: "https://github.com/hiimlex/homevents",
};

projects.push(
	tourApp,
	agroMais,
	caderNet,
	cargaCheia,
	rellusion,
	homEvents,
	homEventsMobile,
	agroMaisFeira
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
