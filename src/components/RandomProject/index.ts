export interface Project {
	name: string;
	project: Array<{ title: string; url: string }>;
	description?: string;
	url?: string;
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
		"Aplicativo/App - Em construção, o intuito dessa aplicação é conectar turistas/residentes/moradores da região, à meios de transportes de locomoção municipais e intermunicipais.",
	url: "https://www.figma.com/file/12M1hiONlL7pmo2ikPtyAt/Mobilidade-Cariri?node-id=0%3A1",
};

const agroMais: Project = {
	name: "Agro+",
	project: [
		{ title: "sobre-1", url: "/assets/agro-mais/sobre-1.jpeg" },
		{ title: "sobre-2", url: "/assets/agro-mais/sobre-2.jpeg" },
		{ title: "sobre-3", url: "/assets/agro-mais/sobre-3.jpeg" },
		{ title: "sobre-4", url: "/assets/agro-mais/sobre-4.jpeg" },
		{ title: "Agro-1", url: "/assets/agro-mais/Agro-1.jpeg" },
		{ title: "Agro-2", url: "/assets/agro-mais/Agro-2.jpeg" },
		{ title: "Agro-3", url: "/assets/agro-mais/Agro-3.jpeg" },
		{ title: "Agro-4", url: "/assets/agro-mais/Agro-4.jpeg" },
	],
	description:
		"O Agro+Classificados visa auxiliar as atividades de exposição e vendas dos produtos de pequenos agricultores e pecuaristas, tendo em vista que, com frequência, a exposição dos seus produtos limitam-se apenas às feiras livres ou eventos não permanentes. Além disso, o número de clientes que visitam tais feiras é limitado a uma pequena região geográfica, geralmente de moradores de bairros ou cidades circunvizinhas.",
	url: "http://agromaisfeira.crato.ifce.edu.br/sobre/",
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
		"A cadernet seria uma solução idealizada em um teste para propor a revendedoras um sistema de gerenciamento, disponiveis em IOS e Android.",
	url: "https://www.figma.com/file/3eHme2sO8H22oVwTC5Vwoz/CaderNet?node-id=2%3A0",
};

const cargaCheia: Project = {
	name: "Carga Cheia",
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
		"Este projeto foi idealizado e implementado para o Hackaton da Sabão Juá, realizado em Juazeiro do Norte, com intuito de conectar cargas a transportadoras. ",
	url: "https://github.com/hiimlex/rellusion",
};

const rellusion: Project = {
	name: "Rellusion",
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
		"Este projeto foi idealizado e implementado para o Hackaton da NASA Space Apps - Consiste em fornecer planetas em Realidade Aumentada, para um ensino mais didático",

	url: "https://www.figma.com/file/Te0zlXm4mPLH5P8a6lijsh/Hackathon-Sab%C3%A3o-Ju%C3%A1?node-id=28%3A2976",
};

projects.push(tourApp, agroMais, caderNet, cargaCheia, rellusion);

export const randomProject = (): Project => {
	return projects[Math.floor(Math.random() * projects.length)];
};

export const getProjectByName = (name: string): Project | undefined => {
	if (name) {
		const project = projects.find((p) => p.name === name);
		if (project) return project;
	}
};
