import React, { useContext, useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { ThemeContext } from "styled-components";
import { getAllProjects, Project } from "../../components/RandomProject";
import { Back, Container, Content, Projects, Projeto, Title } from "./styles";

const Landing = () => {
	const theme = useContext(ThemeContext);
	const [projects, setProjects] = useState<Project[]>([]);

	const fetchProjects = () => {
		setProjects(getAllProjects());
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	return (
		<>
			<Back>
				<FiArrowLeft color={theme.colors.text} size={22} /> Voltar
			</Back>
			<Content>
				<Container>
					<Title>Meus Projetos</Title>
					<Projects>
						{projects.map((el: Project, index: number) => (
							<Projeto>{el.name}</Projeto>
						))}
					</Projects>
				</Container>
			</Content>
		</>
	);
};

export default Landing;
