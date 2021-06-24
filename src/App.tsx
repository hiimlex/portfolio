import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./animations.css";
import Modal from "./components/Modal";
import AppRouter from "./router";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

function App() {
	const [theme] = usePersistedState<any>("theme", dark);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppRouter></AppRouter>
			<Modal />
		</ThemeProvider>
	);
}

export default App;
