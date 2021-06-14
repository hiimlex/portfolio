import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import CardContainer from "./components/CardContainer";
import MainContent from "./components/MainContent";
import MobileAdvice from "./components/MobileAdvice";
import Content from "./styles/content";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";
import useWindowSize from "./utils/windowSize";

const App = () => {
	const [width] = useWindowSize();
	const [theme, setTheme] = usePersistedState("theme", dark);

	const toggleTheme = () => {
		setTheme(theme.title === "dark" ? light : dark);
	};

	const handleTheme = () => {
		setTimeout(() => {
			setTheme(dark);
		});
	};

	useEffect(() => {
		handleTheme();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			{width > 420 && (
				<Content>
					<MainContent toggleTheme={toggleTheme} />
					<CardContainer />
				</Content>
			)}

			{width < 420 && <MobileAdvice></MobileAdvice>}
		</ThemeProvider>
	);
};

export default App;
