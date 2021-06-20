import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./animations.css";
import CardContainer from "./components/CardContainer";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
import Content from "./styles/content";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

function App() {
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

			<Content>
				<MainContent toggleTheme={toggleTheme} />
				<CardContainer></CardContainer>
			</Content>

			<Modal />
		</ThemeProvider>
	);
}

export default App;
