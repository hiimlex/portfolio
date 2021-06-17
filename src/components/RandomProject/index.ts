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
		{ title: "home", url: "/assets/tour-app/HOME.jpg" },
		{ title: "login", url: "/assets/tour-app/LOGIN.jpg" },
		{ title: "points", url: "/assets/tour-app/POINTS.jpg" },
		{ title: "registrar", url: "/assets/tour-app/REGISTRAR.jpg" },
	],
	description:
		"Aplicativo/App - Em construção, o intuito dessa aplicação é conectar turistas/residentes/moradores da região, à meios de transportes de locomoção municipais e intermunicipais.",
	url: "https://www.figma.com/file/12M1hiONlL7pmo2ikPtyAt/Mobilidade-Cariri?node-id=0%3A1",
};

const agroMais: Project = {
	name: "Agro+",
	project: [
		{ title: "sobre-1", url: "/assets/agro-mais/sobre-1.jpg" },
		{ title: "sobre-2", url: "/assets/agro-mais/sobre-2.jpg" },
		{ title: "sobre-3", url: "/assets/agro-mais/sobre-3.jpg" },
		{ title: "sobre-4", url: "/assets/agro-mais/sobre-4.jpg" },
		{ title: "Agro-1", url: "/assets/agro-mais/Agro-1.png" },
		{ title: "Agro-2", url: "/assets/agro-mais/Agro-2.png" },
		{ title: "Agro-3", url: "/assets/agro-mais/Agro-3.png" },
		{ title: "Agro-4", url: "/assets/agro-mais/Agro-4.png" },
	],
	description:
		"O Agro+Classificados visa auxiliar as atividades de exposição e vendas dos produtos de pequenos agricultores e pecuaristas, tendo em vista que, com frequência, a exposição dos seus produtos limitam-se apenas às feiras livres ou eventos não permanentes. Além disso, o número de clientes que visitam tais feiras é limitado a uma pequena região geográfica, geralmente de moradores de bairros ou cidades circunvizinhas.",
	url: "http://agromaisfeira.crato.ifce.edu.br/sobre/",
};

const caderNet: Project = {
	name: "CaderNet - Wireframe",
	project: [
		{ title: "caderNet-1", url: "/assets/CaderNet/caderNet-1.jpg" },
		{ title: "caderNet-2", url: "/assets/CaderNet/caderNet-2.jpg" },
		{ title: "caderNet-3", url: "/assets/CaderNet/caderNet-3.jpg" },
		{ title: "caderNet-5", url: "/assets/CaderNet/caderNet-5.jpg" },
		{ title: "caderNet-6", url: "/assets/CaderNet/caderNet-6.jpg" },
		{ title: "caderNet-7", url: "/assets/CaderNet/caderNet-7.jpg" },
		{ title: "caderNet-8", url: "/assets/CaderNet/caderNet-8.jpg" },
		{ title: "caderNet-9", url: "/assets/CaderNet/caderNet-9.jpg" },
		{ title: "caderNet-10", url: "/assets/CaderNet/caderNet-10.jpg" },
		{ title: "caderNet-11", url: "/assets/CaderNet/caderNet-11.jpg" },
	],
	description:
		"A cadernet seria uma solução idealizada em um teste para propor a revendedoras um sistema de gerenciamento, disponiveis em IOS e Android.",
	url: "https://www.figma.com/file/3eHme2sO8H22oVwTC5Vwoz/CaderNet?node-id=2%3A0",
};

projects.push(tourApp, agroMais, caderNet);

export const randomProject = (): Project => {
	return projects[Math.floor(Math.random() * projects.length)];
};

export const getProjectByName = (name: string): Project | undefined => {
	if (name) {
		const project = projects.find((p) => p.name === name);
		if (project) return project;
	}
};
