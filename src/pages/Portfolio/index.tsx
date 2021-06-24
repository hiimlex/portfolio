import React from "react";
import CardContainer from "../../components/CardContainer";
import MainContent from "../../components/MainContent";
import Content from "../../styles/content";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePersistedState";

const Portfolio: React.FC = () => {
	const [theme, setTheme] = usePersistedState<any>("theme", dark);

	const toggleTheme = () => {
		setTheme(theme.title === "dark" ? light : dark);
	};

	return (
		<Content>
			<MainContent toggleTheme={toggleTheme} />
			<CardContainer></CardContainer>
		</Content>
	);
};

export default Portfolio;
