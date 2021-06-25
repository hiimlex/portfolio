import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Colabs } from "../Modal/styles";
import { Container, Logo, Shadow, Subtitle, Title } from "./styles";

const MainContent: React.FC = () => {
	const history = useHistory();
	const location = useLocation();

	function navigateToAll() {
		history.push("/all");
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
			{location.pathname === "/" && (
				<Button style={{ marginTop: 12 }} onClick={navigateToAll}>
					Ver Todos
				</Button>
			)}
		</Container>
	);
};

export default MainContent;
