import React, { useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { ThemeContext } from "styled-components";
import {
	Container,
	Logo,
	Shadow,
	Subtitle,
	ThemeSwitch,
	Title,
} from "./styles";

interface Props {
	toggleTheme(): void;
}

const MainContent: React.FC<Props> = ({ toggleTheme }) => {
	const theme = useContext(ThemeContext);

	return (
		<Container>
			<ThemeSwitch onClick={toggleTheme}>
				{theme.title === "dark" ? (
					<IoMdSunny
						color={theme.colors.contrast}
						size={20}
					></IoMdSunny>
				) : (
					<BsMoon color={theme.colors.contrast} size={20}></BsMoon>
				)}
			</ThemeSwitch>
			<Logo>
				<Title>LeUX</Title>
				<Shadow>LeUX</Shadow>
			</Logo>
			<Subtitle>Creative Portfolio's</Subtitle>
		</Container>
	);
};

export default MainContent;
