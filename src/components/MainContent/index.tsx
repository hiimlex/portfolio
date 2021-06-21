import React, { useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { Button, Colabs } from "../Modal/styles";
import {
	Container,
	Logo,
	Shadow,
	Subtitle,
	ThemeSwitch,
	Title,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface Props {
	toggleTheme(): void;
}

const MainContent: React.FC<Props> = ({ toggleTheme }) => {
	const theme = useContext(ThemeContext);
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
			<Colabs>@Developed and Design by me</Colabs>
			{location.pathname === "/portfolio" && (
				<Button style={{ marginTop: 12 }} onClick={navigateToAll}>
					Ver Todos
				</Button>
			)}
		</Container>
	);
};

export default MainContent;
