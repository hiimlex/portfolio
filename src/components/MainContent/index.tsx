import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Colabs } from "../Modal/styles";
import { Container, Logo, Shadow, Subtitle, Title } from "./styles";

interface Props {
	toggleTheme(): void;
}

const MainContent: React.FC<Props> = ({ toggleTheme }) => {
	const history = useHistory();
	const location = useLocation();

	function navigateToAll() {
		history.push("/portfolio/all");
	}

	return (
		<Container>
			{/* <ThemeSwitch onClick={toggleTheme}>
				{theme.title === "dark" ? (
					<IoMdSunny
						color={theme.colors.contrast}
						size={20}
					></IoMdSunny>
				) : (
					<BsMoon color={theme.colors.contrast} size={20}></BsMoon>
				)}
			</ThemeSwitch> */}
			<Logo>
				<Title>LeUX</Title>
				<Shadow>LeUX</Shadow>
			</Logo>
			<Subtitle>Creative Portfolio's</Subtitle>
			<Colabs style={{margin: '8px 0'}}>@Developed and Design by me</Colabs>
			{location.pathname === "/portfolio" && (
				<Button style={{ marginTop: 12 }} onClick={navigateToAll}>
					Ver Todos
				</Button>
			)}
		</Container>
	);
};

export default MainContent;
