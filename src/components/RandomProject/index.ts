export interface Project {
	name: string;
	project: Array<{ title: string; url: string }>;
	description?: string;
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
};

projects.push(tourApp);

export const randomProject = (): Project => {
	return projects[Math.floor(Math.random() * projects.length)];
};