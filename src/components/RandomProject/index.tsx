export interface Project {
	name: string;
	project: Array<{ title: string; url: string }>;
}

const tourApp: Project = {
	name: "tour",
	project: [
		{ title: "home", url: "/assets/tour-app/HOME.jpg" },
		{ title: "login", url: "/assets/tour-app/LOGIN.jpg" },
		{ title: "points", url: "/assets/tour-app/POINTS.jpg" },
		{ title: "registrar", url: "/assets/tour-app/REGISTRAR.jpg" },
	],
};

const projects: Project[] = [];

projects.push(tourApp);

export const randomProject = (): Project => {
	return projects[Math.floor(Math.random() * projects.length)];
};
