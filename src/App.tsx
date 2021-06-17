import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import CardContainer from "./components/CardContainer";
import MainContent from "./components/MainContent";
import MobileAdvice from "./components/MobileAdvice";
import Modal from "./components/Modal";
import Content from "./styles/content";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";
import useWindowSize from "./utils/windowSize";

function App() {
	const [width] = useWindowSize();
	const [theme, setTheme] = usePersistedState<any>("theme", dark);

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
					<CardContainer></CardContainer>
				</Content>
			)}

			{width < 420 && <MobileAdvice></MobileAdvice>}

			<Modal />
		</ThemeProvider>
	);
}

export default App;
