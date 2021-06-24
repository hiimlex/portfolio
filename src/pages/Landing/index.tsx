import React, { useContext, useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { Colabs, ColabsContent } from "../../components/Modal/styles";
import {
	getAllProjects,
	getProjectByName,
	Project,
} from "../../components/RandomProject";
import { showModal } from "../../store/actions";
import { RootState } from "../../store/reducers";
import useGrid from "../../utils/useGrid";
import {
	Back,
	Container,
	Content,
	ProjectCard,
	ProjectImage,
	Projects,
	ProjectTitle,
	Title,
} from "./styles";

const mapStateToProps = (state: RootState) => ({
	modal: state.modal.modal,
});

const mapDispatchToProps = {
	dispachShowModal: showModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type LandingProps = {} & ConnectedProps<typeof connector>;

const Landing: React.FC<LandingProps> = (props) => {
	const { dispachShowModal, modal } = props;

	const theme = useContext(ThemeContext);
	const [projects, setProjects] = useState<Project[]>([]);
	const grid = useGrid()[1];

	const history = useHistory();

	const goToHome = () => {
		history.push("/portfolio");
	};

	const fetchProjects = () => {
		setProjects(getAllProjects());
	};

	const openModalInfo = (proj: { title: string }) => {
		if (proj && proj.title) {
			const project = getProjectByName(proj.title);
			dispachShowModal(project);
		}
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	useEffect(() => {
		if (modal) {
		}
	}, [modal]);

	return (
		<Content>
			<Back
				onClick={() => {
					goToHome();
				}}
			>
				<FiArrowLeft color={theme.colors.text} size={22} /> Back{" "}
			</Back>
			<Container>
				<Title>My Projects</Title>
				<Projects
					style={{
						columnCount: grid.column,
						MozColumnCount: grid.column,
						WebkitColumnCount: grid.column,
					}}
				>
					{projects.map((el: Project, index: number) => (
						<ProjectCard
							key={index}
							onClick={() => {
								openModalInfo({ title: el.name });
							}}
						>
							<ProjectTitle>{el.name}</ProjectTitle>
							<ProjectImage
								src={process.env.PUBLIC_URL + el.project[0].url}
							></ProjectImage>
						</ProjectCard>
					))}
				</Projects>
				<Colabs>
					@It's to be like that. Designed and developed by Alex.{" "}
					{new Date().toDateString()}
				</Colabs>
			</Container>
		</Content>
	);
};

export default connector(Landing);
