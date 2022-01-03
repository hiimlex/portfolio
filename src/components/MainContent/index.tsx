import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Colabs } from "../Modal/styles";
import { Container, Logo, Shadow, Subtitle, Title } from "./styles";

const MainContent: React.FC = () => {
	const history = useHistory();

	function navigateToAll() {
		history.push("/portfolio/all");
	}

	function navigateToCv() {
		history.push("/portfolio/cv");
	}

	return (
		<Container>
			<Logo>
				<Title>LeUX</Title>
				<Shadow>LeUX</Shadow>
			</Logo>
			<Subtitle>Creative Portfolio's</Subtitle>
			<Colabs style={{ margin: "8px 0" }}>
				@Developed and Design by me
			</Colabs>
			<Button style={{ marginTop: 12 }} onClick={navigateToAll}>
				See All
			</Button>
			<Button style={{ marginTop: 12 }} onClick={navigateToCv}>
				CV
			</Button>
		</Container>
	);
};

export default MainContent;
